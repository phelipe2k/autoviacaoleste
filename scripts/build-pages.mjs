import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "out");
const docsDir = resolve(root, "docs");

function assertInsideRoot(path) {
  if (path !== root && !path.startsWith(`${root}${sep}`)) {
    throw new Error(`Refusing to operate outside project root: ${path}`);
  }
}

assertInsideRoot(outDir);
assertInsideRoot(docsDir);

const nextCli = resolve(root, "node_modules", "next", "dist", "bin", "next");
const build = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: root,
  env: {
    ...process.env,
    GITHUB_ACTIONS: "true",
  },
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (!existsSync(outDir)) {
  throw new Error("Next build did not create the out directory.");
}

if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
}

mkdirSync(docsDir, { recursive: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(resolve(docsDir, ".nojekyll"), "");
