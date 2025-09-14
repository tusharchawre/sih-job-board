/*
  Warnings:

  - The `studentVector` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "studentVector",
ADD COLUMN     "studentVector" INTEGER[];
