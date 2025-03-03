import core from "@actions/core";

try {
  let bangsFile = "./latest-ddg-bangs.json";
  let bangs = await fetch(bangsFile)
    .then((res) => res.json())
    .then((bangs) => bangs.map((b) => [b.t, b]));
  let overwriteFile = "./overwrites.json";
  let overwrites = await fetch(overwriteFile)
    .then((res) => res.json())
    .then((overwrites) => overwrites.map((b) => [b.t, b]));
  let final = new Map([...bangs, ...overwrites]);
  core.info(JSON.stringify(final));
} catch (e) {
  core.setFailed(e.message);
}
