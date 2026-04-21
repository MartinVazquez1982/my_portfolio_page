# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/
npm run watch      # dev build with watch mode
npm test           # unit tests with Karma/Jasmine
npm run deploy     # deploy to GitHub Pages (base href: /my_portfolio_page/)
```

## Architecture

Angular 17 SPA (NgModule-based, not standalone components). Single `AppModule` declares all components — no lazy loading.

**Routing** (`src/app/app-routing.module.ts`): five routes — `aboutMe`, `resume`, `skills`, `projects`, `contact`. Default (`''`) loads `AboutMeApp`.

**Layout**: `AppComponent` wraps the shell. On desktop (>600px) it shows `SidebarApp` + `AppPI` (personal info panel) alongside the router outlet. On mobile (<600px) it shows `BurgerMenuApp` instead. The `SeeBurgerMenu` service (provided in root) is a simple shared boolean toggle for the mobile menu state.

**Data flow**: Page components import static JSON files directly (`src/data/resume.json`, `skills.json`, `projects.json`) and cast them to typed interfaces from `src/types/interfaces.ts`. There is no HTTP layer or backend — all content is hardcoded JSON.

**Icons**: SVG icons are Angular components under `src/app/icons/`. The `ICON_MAP` (`src/app/icons/icon-map.ts`) maps `IconKey` enum values to components. `ProjectLinkApp` uses this map with `NgComponentOutlet` to render dynamic icons per project link.

**Contact form**: Uses `@emailjs/browser` with hardcoded service/template IDs. The `LoaderApp` component shows a spinner during send.

**Resume page**: `ResumeApp` implements a custom JS smooth-scroll slider for certifications, calculating visible item count from container width on resize via `@HostListener`.

**Enums** (`src/types/enums.ts`): `IconKey` (for icon resolution) and `ProjectType` (academy/personal/professional, used to categorize projects).

## Adding content

To add projects, education, experience, skills, or certifications — edit the JSON files in `src/data/`. The interfaces in `src/types/interfaces.ts` define the expected shape.

To add a new icon type: create a component in `src/app/icons/`, add its key to `IconKey` enum, and register it in `ICON_MAP`.
