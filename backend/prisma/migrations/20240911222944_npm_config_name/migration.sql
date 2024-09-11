/*
  Warnings:

  - You are about to drop the column `name` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Founder` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `IPRProfessional` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Innovator` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Investor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Policymaker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Researcher` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Startup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Founder" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "IPRProfessional" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Innovator" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Investor" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Policymaker" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Researcher" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Startup" DROP COLUMN "name";
