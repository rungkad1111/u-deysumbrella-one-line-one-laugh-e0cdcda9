import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LINE_LENGTH = 140;

const LINE =
  "My GPS said 'recalculating' in the exact tone my mother uses when I disappoint her.";

if (LINE.length > MAX_LINE_LENGTH) {
  throw new Error(
    `Entry exceeds ${MAX_LINE_LENGTH} characters (${LINE.length}).`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
