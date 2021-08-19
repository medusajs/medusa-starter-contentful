module.exports = function (migration, context) {
  const tileSection = migration
    .createContentType("tileSection")
    .name("Tile Section")
    .displayField("title");

  tileSection.createField("title").name("Title").type("Symbol");
  tileSection
    .createField("tiles")
    .name("Tiles")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: ["tile", "product"],
        },
      ],
    });
};
