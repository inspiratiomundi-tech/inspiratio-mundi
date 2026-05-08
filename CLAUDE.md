@AGENTS.md

# Fundacja Inspiratio Mundi — landing page

## What this is

A single-page brochure site for a Polish charity foundation registered
in Wrocław (KRS 0001104520). Static, deployed on Vercel free tier.
Polish-only. No backend, no CMS yet, no donation flow.

## Architecture

- **Next.js 16 App Router**, **Tailwind v4**, TypeScript.
- The page is a Server Component (`src/app/page.tsx`) composing six
  static section components in `src/components/`. Two Client Components:
  - `NavButtons.tsx` — fixed section nav (mobile horizontal top-left,
    desktop vertical right side).
  - `FullPageScroll.tsx` — captures wheel/touch/keyboard input and
    routes every gesture through `scrollIntoView`, so any scroll moves
    one section with the same smooth animation as a nav click.
- **CSS scroll-snap is intentionally not used.** It was the source of
  iOS Safari fights. JS-driven fullpage scrolling owns navigation now.
- Sections alternate two backgrounds: `--color-bg` (parchment cream) and
  `--color-bg-alt` (deeper parchment gold). Hero/Areas/Contact are
  cream; About/Board are alt.
- Typography: EB Garamond (display, serif) + Inter (body) via
  `next/font`. Classical-restrained register; no animations beyond
  hover micro-interactions on Areas cards.

## Foundation data

All facts in `components/*.tsx` are hardcoded Polish text. Sources of
truth for legal data:
- KRS extract API: `https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/0001104520?rejestr=S&format=json`
- Public summaries: rejestr.io/krs/1104520, bizraport.pl/krs/0001104520

Board roster (Zarząd) is in `Board.tsx`. If it changes in KRS, update
there. Footer (KRS / NIP / REGON / supervising ministry) lives in
`Footer.tsx`.

## Logo

- File: `public/emblem.png` — 601×601 circular alpha-masked PNG cropped
  from a much larger AI-generated source. The original had massive
  transparent padding around the actual emblem; container/object-contain
  was hiding the true visible size. Cropped tight with ImageMagick.
- **Known defect:** the top arch reads `FUNDACIA` instead of `FUNDACJA`
  (AI generation typo). Acceptable as placeholder; must be regenerated
  to a correctly-spelled SVG before wider promotion.

## Deployment

- Vercel project `inspiratio-mundi`, free Hobby tier.
- Auto-deploys on push to `main`.
- **Commit author email must be `inspiratiomundi@gmail.com`** (matches
  the Vercel account); Vercel Hobby blocks deploys from any other
  author email. Local git config is set in this repo.
- The repo is **public** on GitHub. Originally private; flipped to
  public both to avoid the Hobby private-repo restriction and because
  there's nothing in the brochure code worth hiding.
- SSH push uses host alias `github-inspiratio` → key
  `~/.ssh/id_ed25519_inspiratiomundi`. The `inspiratiomundi-tech`
  GitHub account is not in `gh auth status`; don't try `gh` against
  this repo.

## Lessons from earlier iterations (don't repeat)

These were tried and removed. If reaching for any of them again, ask
first whether it's actually warranted.

1. **i18n module with PL/EN toggle** — premature for one page; doubled
   maintenance for ~250 words of duplicate copy. Removed.
2. **IntersectionObserver-driven active section + dynamic theme-color +
   dynamic html background** — caused scroll lag on every threshold
   cross via React re-renders and main-thread paints. Removed; static
   theme-color in `layout.tsx` is enough.
3. **Reveal-on-scroll fade-up animations + paper grain overlay + hero
   entry choreography** — visual noise on a 5-paragraph brochure that
   doesn't need it. Removed.
4. **CSS `scroll-snap-type: y mandatory` with `behavior: smooth`
   scrollIntoView** — known iOS Safari bug: snap engine pulls page back
   toward nearest snap point during the smooth animation, lands at the
   wrong section. The "Kontakt → O Fundacji" → lands on Hero" symptom
   was this. Replaced by the JS FullPageScroll component.
5. **Anchor `<a href="#id">` nav** — leaves stale hash in URL, every
   reload (esp. dev HMR) yanks back to that hash. Switched to buttons
   + `scrollIntoView`.
6. **Two parallel mobile / desktop nav DOM trees** — same data, doubled
   maintenance. Replaced with one responsive component.

## Things mobile devtools won't catch

iOS Safari quirks only show up on a real device. Specifically: snap
behavior, smooth-scroll timing, theme-color tinting in safe areas,
touch-event swallowing by overflow containers, and HMR/cache weirdness
over the local network. Test on a phone before declaring something
fixed.

## Future work (likely)

- **Domain registration** for Google Workspace for Nonprofits (TechSoup
  Polska validation in progress). Once the domain exists: add it in
  Vercel → Settings → Domains.
- **CMS for reports / działania** when there's actual content to
  publish. Sanity is the leading candidate (free hosted tier, clean
  editor UI, fits non-technical board members). Don't add until there's
  something real to publish — board members shouldn't need git.
- **Logo regeneration** as SVG with correct `FUNDACJA` spelling.
