# legal-web-platform

Monorepo for law firm websites. Shared components live in one package. Each firm site is an app that supplies its own content and brand colors.

## Packages

- `@legal/ui` — header, footer, hero, practice areas, attorneys, and contact
- `@legal/eslint-config` — shared ESLint configuration
- `@legal/typescript-config` — shared TypeScript configuration

## Apps

- `apps/site-starter` — sample firm site. Copy this directory when you start a new site.

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm check-types
```

Run one site with `pnpm --filter @legal/site-starter dev`.

## Add a firm site

1. Copy `apps/site-starter` to `apps/<firm-slug>`.
2. Change the `name` in that app's `package.json`, and give it its own dev port.
3. Replace `content/firm.ts` and the color tokens in `app/globals.css`.
4. Keep importing components from `@legal/ui`. Put new shared pieces in that package so the next site can use them.
