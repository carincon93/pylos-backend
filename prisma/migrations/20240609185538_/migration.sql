/*
  Warnings:

  - You are about to alter the column `mascotaNombre` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - A unique constraint covering the columns `[mascotaNombre]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "mascotaNombre" SET DATA TYPE VARCHAR(15);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_mascotaNombre_key" ON "Usuario"("mascotaNombre");
