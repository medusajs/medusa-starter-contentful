module.exports = function (migration, context) {
  const link = migration
    .createContentType("link")
    .name("Link")
    .displayField("title");

  link.createField("title").name("Title").type("Symbol");
  link.createField("linkTo").name("Link To").type("Symbol");
  link
    .createField("reference")
    .name("Reference")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["page", "product"] }]);
};
