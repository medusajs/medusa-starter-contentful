module.exports = function (migration, context) {
  const page = migration
    .createContentType("page")
    .name("Page")
    .displayField("title");

  page.createField("title").name("Title").type("Symbol");
  page.createField("slug").name("Slug").type("Symbol");
  page.createField("metaDescription").name("Meta Description").type("Text");
  page
    .createField("contentModules")
    .name("Content Modules")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: ["hero", "tileSection"],
        },
      ],
    });
};
