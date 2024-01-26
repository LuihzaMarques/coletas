/*
  Warnings:

  - You are about to alter the column `infoColeta` on the `Coleta` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Coleta` MODIFY `infoColeta` JSON NOT NULL;
