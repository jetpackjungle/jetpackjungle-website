# jetpackjungle-website

Marketing site for **Jetpack Jungle**, a video production agency — built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS and [Radix UI](https://www.radix-ui.com).

## Getting started

Install dependencies and start the dev server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Script | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run check` | Format (oxfmt), lint (oxlint) and typecheck (tsc) |
| `bun run check:full` | `check` plus a production build |
| `bun run audit` | Dead code, unused and unlisted dependencies |

## Project structure

```
app/            App Router entry (layout, page) and the /api/form route
components/     Page sections (hero, work, services, team, contact) and shared UI
hooks/          Custom React hooks
lib/            Utilities
public/         Static assets
styles/         Global styles
```

The homepage is composed in `app/page.tsx` from the section components in `components/`.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID (falls back to a default) |

The contact form posts to `app/api/form/route.ts`, which sends email via [Resend](https://resend.com).

## Deployment

Deployed on Vercel. Every merge to `main` deploys automatically.
