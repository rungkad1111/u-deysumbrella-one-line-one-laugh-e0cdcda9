import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My GPS said 'recalculating' in the exact tone my mother uses when I disappoint her.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
