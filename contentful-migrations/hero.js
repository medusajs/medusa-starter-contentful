module.exports = function (migration, context) {
  const hero = migration
    .createContentType("hero")
    .name("Hero")
    .displayField("title");

  hero.createField("title").name("Title").type("Symbol");
  hero.createField("cta").name("CTA").type("Symbol");
  hero
    .createField("backgroundImage")
    .name("Background Image")
    .type("Link")
    .linkType("Asset");
  hero
    .createField("link")
    .name("Link")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["link"] }]);
};
