module.exports = function (migration, context) {
  const tile = migration
    .createContentType("tile")
    .name("Tile")
    .displayField("title");

  tile.createField("title").name("Title").type("Symbol");
  tile.createField("cta").name("CTA").type("Symbol");
  tile.createField("image").name("Image").type("Link").linkType("Asset");
  tile
    .createField("link")
    .name("Link")
    .type("Link")
    .linkType("Entry")
    .validations([
      {
        linkContentType: ["link"],
      },
    ]);
};
