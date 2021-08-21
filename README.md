<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/129161578-19b83dc8-fac5-4520-bd48-53cba676edd2.png" width="100" />
  </a>
</p>
<h1 align="center">
  Medusa Starter Contentful
</h1>
<p align="center">
This repo provides the skeleton to get you started with using <a href="https://github.com/medusajs/medusa">Medusa</a> and Contentful. Follow the steps below to get ready.
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Prerequisites
This starter has prerequisites and most of these will usually already be installed on your computer. Please not the Contentful plugin requires Redis.

- [Install Node.js](https://nodejs.org/en/download/)
- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install SQLite](https://www.sqlite.org/download.html)
- [Install Redis](https://redis.io/download)

## Setting up your store
- Install the Medusa CLI
  ```
  npm install -g @medusajs/medusa
  yarn global add @medusajs/medusa
  ```
- Create a new Medusa project
  ```
  medusa new medusa-contentful https://github.com/medusajs/medusa-starter-contentful
  cd medusa-contentful
  ```

## Setting up Contentful
- [Create a Contentful account](https://www.contentful.com/sign-up)
- Create a Contentful Space
- Get your Contentful Access Token (Settings > API Keys > Content Management Tokens > Generate Personal Token)
- Update your environment variables in `.env`
  ```
  CONTENTFUL_SPACE_ID=[your space id]
  CONTENTFUL_ACCESS_TOKEN=[your personal access token]
  ```
- Set up webhook (optional)
- Migrate & seed Contentful space
  ```
  yarn migrate:contentful
  yarn seed:contentful
  ```

## Run your project
  ```
  yarn seed
  medusa develop
  ```

Your local Medusa server is now running on port **9000**. 

Everytime you create or update Products, Product Variants or Regions Contentful and Medusa data will be synced.

## What's inside
This starter uses `medusa-plugin-contentful` to synchronize data between your Medusa store and your Contentful space.

In the `/contentful-migrations` directory you will find migration files to setup content types in Contentful.
The content types can be used to build pages for your webiste and include:

- **Page**: Represents a page on your website. Each page has a title and can take any number of "Content Modules". Content Modules can be either of the type Hero or Tile Section.
- **Hero**: a component that can take a Title, CTA and a background image.
- **Tile**: a component that can be added to a Tile Section and renders a Title, CTA and an Image.
- **Tile Section**: a component that can hold a number of Tiles or Products. When used with a Product, the Tile Section will display the product thumbnail and it's title and will link to the product page.
- **Link**: a component that can link to an external or internal path; or, alternatively, hold a reference to a Page or Product entry. If used with Page or Product, the link path will be infered from the referenced entry.
- **Navigation Item**: an item to include in a Navigation Menu. Each navigation item has a title that can be displayed in a menu and a link that defines where the user will be navigated to when the item is clicked.
- **Product**: represents a product as syncronized from Medusa. A product's variants will be copied over as well.
- **Product Variant**: The variants of a product.
- **Region**: Represents an available region in Medusa.

The the `seed:contentful` script will will use this content modules to add some test data for you to get started with. The test data includes:
- A home page with a hero, some featured products and the tools used.
- An about page with a hero that links to the Medusa website.
- A product overview page that can be configured to show products in the store.

> Note: After seeding your database and starting your server you will have to publish the copied products in Contentful and add them to "Featured Products" Tile Section.

## Try it out

```
curl -X GET localhost:9000/store/products | python -m json.tool
```

After the seed script has run you will have the following things in you database:

- a User with the email: admin@medusa-test.com and password: supersecret
- a Region called Default Region with the countries GB, DE, DK, SE, FR, ES, IT
- a Shipping Option called Standard Shipping which costs 10 EUR
- a Product called Medusa Shirt with 4 Product Variants that all cost 19.50 EUR
- a Product called Medusa Waterbottle with 1 Product Variant that all costs 10.00 EUR


Visit [docs.medusa-commerce.com](https://docs.medusa-comerce.com) for further guides.

## Thank you!

<p>
  <a href="https://www.medusa-commerce.com">
    Website
  </a> 
  |
  <a href="https://medusajs.notion.site/medusajs/Medusa-Home-3485f8605d834a07949b17d1a9f7eafd">
    Notion Home
  </a>
  |
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    Twitter
  </a>
  |
  <a href="https://docs.medusa-commerce.com">
    Docs
  </a>
</p>
