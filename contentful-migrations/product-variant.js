module.exports = function (migration, context) {
  const productVariant = migration
    .createContentType("productVariant")
    .name("Product Variant")
    .displayField("title");

  productVariant
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true);
  productVariant.createField("sku").name("SKU").type("Symbol");
  productVariant.createField("options").name("Options").type("Object");
  productVariant.createField("prices").name("Prices").type("Object");
  productVariant.createField("medusaId").name("Medusa ID").type("Symbol");
};
