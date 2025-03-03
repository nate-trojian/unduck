import core from "@actions/core";
import fs from "fs/promises";

import ddgBangsFile from "../../../latest-ddg-bangs.json" assert { type: "json" };
import overwritesFile from "../../../overwrites.json" assert { type: "json" };

try {
  let ddgBangs = Object.fromEntries(
    ddgBangsFile.map((b) => {
      const { t, ...rest } = b;
      return [t, rest];
    })
  );
  let overwrites = Object.fromEntries(
    overwritesFile.map((b) => {
      const { t, ...rest } = b;
      return [t, rest];
    })
  );
  let final = { ...ddgBangs, ...overwrites };
  await fs.writeFile(
    "src/bang.ts",
    `export const bangs: Record<string, Bang> = ${JSON.stringify(final)}`
  );
  core.info("bangs file updated");
} catch (e) {
  core.setFailed(e.message);
}
