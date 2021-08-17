module.exports = function (migration, context) {
  const navItem = migration
    .createContentType("navigationItem")
    .name("Navigation Item")
    .displayField("title");

  navItem.createField("title").name("Title").type("Symbol").required(true);
  navItem
    .createField("link")
    .name("Link")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["link"] }]);
};
