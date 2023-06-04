-- CreateTable
CREATE TABLE "_CarToSpecification" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CarToSpecification_A_fkey" FOREIGN KEY ("A") REFERENCES "cars" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CarToSpecification_B_fkey" FOREIGN KEY ("B") REFERENCES "specifications" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarToSpecification_AB_unique" ON "_CarToSpecification"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToSpecification_B_index" ON "_CarToSpecification"("B");
