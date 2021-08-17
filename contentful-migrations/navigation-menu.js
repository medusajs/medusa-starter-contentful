module.exports = function (migration, context) {
  const navMenu = migration
    .createContentType("navigationMenu")
    .name("Navigation Menu")
    .displayField("title");

  navMenu.createField("title").name("Title").type("Symbol").required(true);
  navMenu
    .createField("items")
    .name("Items")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: ["navigationItem"],
        },
      ],
    });
};
