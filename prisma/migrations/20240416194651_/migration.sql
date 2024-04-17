/*
  Warnings:

  - Added the required column `esRespuestaCorrecta` to the `RespuestaPruebaDiagnostica` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RespuestaPruebaDiagnostica" ADD COLUMN     "esRespuestaCorrecta" BOOLEAN NOT NULL;
