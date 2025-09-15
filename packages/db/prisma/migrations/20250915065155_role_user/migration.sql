/*
  Warnings:

  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_roleId_fkey";

-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "roleId",
ADD COLUMN     "role" "public"."Role" DEFAULT 'USER';

-- DropTable
DROP TABLE "public"."role";
