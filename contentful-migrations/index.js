#! /usr/bin/env node

require("dotenv").config();

const path = require("path");
const { runMigration } = require("contentful-migration");

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  yes: true,
};

const migrations = async () => {
  if (process.argv.length >= 3) {
    const files = process.argv.slice(2);
    files.map(async (filePath) => {
      await runMigration({
        ...options,
        ...{ filePath: path.join(process.cwd(), filePath) }
      })
    })

    return;
  }
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/link.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/hero.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/navigation-item.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/navigation-menu.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/product-variant.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/product.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/region.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/tile.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/tile-section.js` },
  });
  await runMigration({
    ...options,
    ...{ filePath: `${__dirname}/page.js` },
  });
};

migrations();
