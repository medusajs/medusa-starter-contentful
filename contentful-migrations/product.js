module.exports = function (migration, context) {
  const product = migration
    .createContentType("product")
    .name("Product")
    .displayField("title");

  product.createField("title").name("Title").type("Symbol").required(true);
  product.createField("subtitle").name("Subtitle").type("Symbol");
  product.createField("handle").name("Handle").type("Symbol");
  product
    .createField("thumbnail")
    .name("Thumbnail")
    .type("Link")
    .linkType("Asset");
  product.createField("description").name("Description").type("Text");
  product.createField("options").name("Options").type("Object");
  product.createField("tags").name("Tags").type("Object");
  product.createField("collection").name("Collection").type("Symbol");
  product.createField("type").name("Type").type("Symbol");
  product
    .createField("variants")
    .name("Variants")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: ["productVariant"],
        },
      ],
    });
  product.createField("medusaId").name("Medusa ID").type("Symbol");
};
