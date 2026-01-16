# StyleLogue

StyleLogue is a mobile-first Nigerian fashion catalogue for discovering, saving, and sharing beautiful local styles. It curates popular categories like Senator, Ankara, Adire, Agbada, Lace/Aso-ebi, and Kaftan so you can quickly find inspiration and share it with a tailor.

## What is StyleLogue?

- A curated catalogue of Nigerian fashion styles with photos, descriptions, and tags.
- A quick way to browse by category, explore trending looks, and search by keywords.
- A lightweight inspiration board that lets you save favourites and share designs with a tailor via WhatsApp.

## How it works

- **Next.js App Router** powers all pages in `app/`, while Tailwind CSS handles styling.
- **Static data** lives in `data/styles.js`, where categories, style details, and search helpers are defined.
- **Search & filters** run on the client to show results instantly.
- **Favourites** are persisted in the browser using `useFavourites`, making it easy to revisit saved looks.
- **Sharing** uses a WhatsApp deep link so users can send design details directly to a tailor.

## Where to use it

StyleLogue is designed to feel great on mobile devices but works on any modern browser. Core routes include:

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Hero, categories carousel, and trending styles. |
| Categories | `/categories` | Browse all style categories. |
| Styles | `/styles` | Full catalogue view. |
| Style Detail | `/styles/[id]` | Detail view with share/favourite actions. |
| Search | `/search` | Keyword search and suggested queries. |
| Favourites | `/favorites` | Saved styles for quick access. |

## When to use it

- Planning outfits for weddings, ceremonies, or cultural events.
- Gathering inspiration before meeting a tailor.
- Saving and comparing styles across different categories.
- Sharing a reference look with friends or clients.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended for Next.js 16)

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build and production start

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Customizing the catalogue

- Update categories and styles in `data/styles.js`.
- Add new images by linking to hosted assets (or move them into `public/`).
- Adjust layout components in `components/` if you want to change the UI.

## Tech stack

- **Next.js 16 / React 19**
- **Tailwind CSS**
- **Radix UI + Lucide icons**

## Deployment

Deploy to any Node-compatible host. Vercel provides the fastest path for Next.js deployments.
