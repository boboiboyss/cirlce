/*
  Warnings:

  - You are about to drop the column `age` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "age",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "photoProfile" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;
