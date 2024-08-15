/*
  Warnings:

  - Added the required column `visualizado` to the `ChatEmojis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatEmojis" ADD COLUMN     "visualizado" BOOLEAN NOT NULL;
