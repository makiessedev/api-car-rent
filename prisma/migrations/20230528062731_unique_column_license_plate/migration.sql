/*
  Warnings:

  - A unique constraint covering the columns `[license_plate]` on the table `cars` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cars_license_plate_key" ON "cars"("license_plate");
