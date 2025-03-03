import core from "@actions/core";

import ddgBangsFile from "../../../latest-ddg-bangs.json" assert { type: "json" };
import overwritesFile from "../../../overwrites.json" assert { type: "json" };

try {
  let ddgBangs = ddgBangsFile.map((b) => [b.t, b]);
  let overwrites = overwritesFile.map((b) => [b.t, b]);
  let final = new Map([...ddgBangs, ...overwrites]);
  core.info(JSON.stringify(final));
} catch (e) {
  core.setFailed(e.message);
}
