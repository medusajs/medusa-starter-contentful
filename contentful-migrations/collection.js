module.exports = function (migration, context) {
  const collection = migration
    .createContentType("collection")
    .name("Collection entry")
    .displayField("title");

  collection.createField("title").name("Title").type("Symbol");
  collection.createField("handle").name("Handle").type("Symbol");
  collection.createField("medusaId").name("Medusa ID").type("Symbol");
};
