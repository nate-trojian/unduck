import core from "@actions/core";

try {
  let bangsFile = "./latest-ddg-bangs.json";
  let bangs = await fetch(bangsFile)
    .then((res) => res.json())
    .then((bangs) => new Map(bangs.map((b) => [b.t, b])));
  core.info(JSON.stringify(bangs));
} catch (e) {
  core.setFailed(e.message);
}
