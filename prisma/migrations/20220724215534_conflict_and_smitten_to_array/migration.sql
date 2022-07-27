/*
  Warnings:

  - You are about to drop the column `conflict1` on the `Playbook` table. All the data in the column will be lost.
  - You are about to drop the column `conflict2` on the `Playbook` table. All the data in the column will be lost.
  - The `smitten` column on the `Playbook` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Playbook" DROP COLUMN "conflict1",
DROP COLUMN "conflict2",
ADD COLUMN     "conflict" TEXT[],
DROP COLUMN "smitten",
ADD COLUMN     "smitten" TEXT[];
