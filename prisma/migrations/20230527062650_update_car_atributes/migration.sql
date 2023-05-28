/*
  Warnings:

  - You are about to alter the column `daily_rate` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `fine_amount` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "daily_rate" REAL NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "license_plate" TEXT NOT NULL,
    "fine_amount" REAL NOT NULL,
    "brand" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "cars_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cars" ("available", "brand", "categoryId", "created_at", "daily_rate", "description", "fine_amount", "id", "license_plate", "name") SELECT "available", "brand", "categoryId", "created_at", "daily_rate", "description", "fine_amount", "id", "license_plate", "name" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
