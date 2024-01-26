/*
  Warnings:

  - Added the required column `updatedAt` to the `Coleta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Coleta` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
