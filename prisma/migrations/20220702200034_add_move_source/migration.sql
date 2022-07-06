-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Move" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "playbookId" TEXT,
    "source" TEXT,
    CONSTRAINT "Move_playbookId_fkey" FOREIGN KEY ("playbookId") REFERENCES "Playbook" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Move" ("createdAt", "id", "name", "playbookId", "text", "updatedAt") SELECT "createdAt", "id", "name", "playbookId", "text", "updatedAt" FROM "Move";
DROP TABLE "Move";
ALTER TABLE "new_Move" RENAME TO "Move";
CREATE UNIQUE INDEX "Move_name_key" ON "Move"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
