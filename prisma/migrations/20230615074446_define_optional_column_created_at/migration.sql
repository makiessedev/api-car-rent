-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car_images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "images_name" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "car_id" TEXT NOT NULL,
    CONSTRAINT "car_images_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_car_images" ("car_id", "created_at", "id", "images_name") SELECT "car_id", "created_at", "id", "images_name" FROM "car_images";
DROP TABLE "car_images";
ALTER TABLE "new_car_images" RENAME TO "car_images";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
