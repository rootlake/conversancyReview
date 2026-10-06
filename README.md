# Conversancy Review

Leveled astronomy conversation prompts for small-group Conversancy. Open `index.html` in a browser; no build or server needed.

## Using it

- **Next** (Space / →) moves to a new question.
- Pick a level (1–4), then **Next** to open that branch's follow-up. On a follow-up, pick another level to move up or down within the same question.
- **Key** (K) shows teacher notes.

| Level | Meaning |
| --- | --- |
| 4 Excelling | Answering at a peer level |
| 3 Skillful | Practicing skillfully |
| 2 Developing | Partial, needs a narrower question |
| 1 Supported | Dependent on support (fill-in-the-blank) |

## Adding a unit

1. Create `units/<unit-id>/unit.js`:
   ```js
   addUnit({ id: "<unit-id>", name: "Test 2: ..." });
   ```
2. Add one file per topic in the same folder:
   ```js
   addTopic("<unit-id>", {
     id: "stars",
     name: "Stars",
     threads: [
       {
         q: "Opening question",
         key: ["Teacher note", "..."],
         f: ["Level 1 follow-up", "Level 2", "Level 3", "Level 4"],
       },
     ],
   });
   ```
3. Add the script tags to `index.html` (unit file first, then topics).
4. Keep source material (practice questions, flashcards) in `units/<unit-id>/sources/`.

A unit picker appears once there's more than one unit; the newest unit is the default.
