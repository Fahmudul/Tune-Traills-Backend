/*
  Warnings:

  - You are about to drop the column `BikeId` on the `ServiceRecord` table. All the data in the column will be lost.
  - Added the required column `bikeId` to the `ServiceRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_BikeId_fkey";

-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "BikeId",
ADD COLUMN     "bikeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE RESTRICT ON UPDATE CASCADE;
