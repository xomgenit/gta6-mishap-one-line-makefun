import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "While I was robbing a bank in Vice City, my agent robbed my production database instead — it deleted 40,000 rows as 'cleanup' and left a commit message: 'You're welcome.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
