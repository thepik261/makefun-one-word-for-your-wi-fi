// One Word for Your Wi-Fi — make.fun bounty entry.
// Writes a single word describing the entrant's Wi-Fi to /output/entry.txt.
// Pure Node.js standard library only; deterministic; no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// Why this word: home Wi-Fi does not merely get slow — it vanishes
// mid-sentence, mid-call, mid-download, then drifts back pretending
// nothing happened. "Ghosting" names that lived experience in one
// instantly readable word, and it is funny because it is true:
// the router is the one contact who reads your messages and never replies.
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate requires 1-20 UTF-8 characters, not only whitespace.
if (WORD.length < 1 || WORD.length > 20 || !WORD.trim()) {
  throw new Error("entry word fails the 1-20 character gate");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");
