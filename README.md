# Developer documentation

This documentation is built using [11ty](https://www.11ty.dev/), a static site generator. Additionally it leverages [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) for templating.

## Prerequisites

To run this project locally, you need:

- **Node.js** (version 16.x or later recommended)
- **npm** (comes with Node.js)

You can check your versions with:

```bash
node --version
npm --version
```

Download Node.js from [nodejs.org](https://nodejs.org/).

## Configuration

If you are deploying to GitHub Pages, you should set the `pathPrefix` in your Eleventy config to match your repository name. This ensures all site URLs are correct when hosted at `https://USERNAME|ORGANISATION.github.io/PATH-PREFIX/`.

In `eleventy.config.js`, add or update:

```js
export default function(eleventyConfig) {
  // ...existing config...
  return {
    // ...over values omitted
    pathPrefix: "/repo-name", // Replace `repo-name` with your GitHub repository name
  };
}
```

For example, if your repo is `eleventy-gh-pages-site`, use:

```js
pathPrefix: "/eleventy-gh-pages-site/"
```

This setting is only needed for GitHub Pages or similar subdirectory hosting.

## Building the site

To build the static site, run:

```bash
npm run build
```

The output will be generated in the `_site` directory.

## Running locally with hot reloading

To start a local development server with hot reloading, run:

```bash
npm run serve
```

This will watch for changes and automatically reload the site at [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

## Updating the menu and meta information

Menu and meta data are managed using Eleventy's [global data files](https://www.11ty.dev/docs/data-global/), located in the `src/_data` directory. To update navigation menus or site metadata:

1. Edit the relevant file in `src/_data` (e.g., `menu.json`, `meta.json`).
2. Save your changes and the site will automatically reload if running in serve mode.

## Formatting code

### Automatic formatting on save

Prettier is configured to automatically format JavaScript, JSON, HTML, and Markdown files on save in VS Code. Make sure you have the **Prettier** extension installed and enabled.

### Manual formatting for Nunjucks files

Due to VS Code limitations, some Nunjucks (`.njk`) files may not be formatted automatically. To manually format all `.njk` files, run:

```bash
npm run format:njk
```

This uses Prettier with the Jinja template plugin to format Nunjucks templates.

If you want to prevent Prettier from formatting a specific block, you can use the `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` comments in Markdown files.

## Adding a new page

To add a new page to the documentation site:

1. **Create the page file:**
   - Place your new page in the `src/` directory. For example, to add a page called "Contact", create `src/contact.md` (for Markdown) or `src/contact.njk` (for Nunjucks).

2. **Specify the template and title:**
   - At the top of your new file, set the layout and title. Example for Markdown:
     
     ```markdown
     ---
     layout: default
     title: Contact
     ---
     
     Your page content goes here.
     ```
   - For Nunjucks, you can follow the same approach.

3. **Add the page to the menu:**
   - Open `src/_data/menu.json`.
   - Add a new entry for your page, for example:
     ```json
     [
       ...existing menu items...,
       {
         "label": "Contact",
         "path": "/contact"
       }
     ]
     ```
   - Save the file. The menu will update automatically when the site reloads.

## Adding a new section to the menu

To organize your navigation, you can add a new section to `src/_data/menu.json`.

The menu is structured as an array of sections, each with a `label` and `items`, add a new object like this:

```json
[
  ...existing sections...,
  {
    "label": "Resources",
    "items": [
      { "label": "API Reference", "path": "/api" },
      { "label": "Guides", "path": "/guides" }
    ]
  }
]
```

After editing and saving `menu.json`, the navigation will update automatically when the site reloads.

> Presentation of the menu is implemented in `/src/_includes/sidebar.njk` and `/src/_includes/mobile-menu.njk`

---

For more details, see the [Eleventy documentation](https://www.11ty.dev/docs/).
