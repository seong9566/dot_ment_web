# AGENTS.md

## Purpose
- This file guides agentic coding assistants operating in this repo.
- Prefer existing conventions over introducing new tooling or patterns.
- If something is unclear, inspect nearby files for precedent.

## Quick Commands
- Install: `npm install`
- Dev server: `npm run dev` (Vite, port 5173, host 0.0.0.0)
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: not configured (no eslint config or script found)
- Tests: not configured (no test runner or script found)
- Single test: not applicable until a test runner is added
- README lists `npm run unit` and `npm test` but these scripts are missing in `package.json`

## Project Snapshot
- Framework: Vue 3 + Vite 5
- State: Pinia (setup-style stores)
- Router: Vue Router (history mode)
- HTTP: Axios
- UUID: `uuid` v4 for ids
- Module system: ESM (`"type": "module"` in `package.json`)
- Path alias: `@` maps to `src` (see `vite.config.js`)

## Repo Map (high signal)
- Entry: `src/main.js`
- Root component: `src/App.vue`
- Routing: `src/router/index.js`
- Stores: `src/stores/useBuilderStore.js`
- Composables: `src/composables/useBuilder.js`
- Builder view: `src/views/BuilderView.vue`
- Builder UI: `src/components/builder/*`
- Blocks registry: `src/components/blocks/BlockRegistry.js`
- Blocks components: `src/components/blocks/*.vue`
- Global styles: `src/assets/css/global.css`

## Code Style (observed)
- Indentation: JS files commonly use 4 spaces; Vue templates use 2 spaces
- Keep indentation consistent within the file you edit
- Quotes: single quotes in JS
- Semicolons: generally omitted
- Trailing commas: not consistent; follow local file style
- Use `const` by default, `let` only when reassigned
- Use guard clauses for early exits in functions
- Prefer small helpers inside composables and stores

## Imports
- Order: external packages, `@` alias imports, then relative imports
- Keep imports minimal; remove unused
- Use alias `@/` for `src` paths when available

## Naming and Casing
- Variables and functions: camelCase
- Components: PascalCase in filenames and imports
- CSS classes: kebab-case or BEM-like; stay consistent per file
- Store names: `useXStore` pattern with lower-case store ids
- Composables: `useX` pattern
- Folders: lower-case (as in `src/components`, `src/views`)

## Vue SFC Conventions
- Use `<script setup>` for new components
- Keep components in PascalCase file names
- Template uses kebab-case class names
- Use `scoped` styles for component-level CSS
- Avoid new global CSS unless required

## Template Formatting
- Keep attribute spacing and wrapping consistent with the file
- Use self-closing tags for empty components (example: `<GlobalHeader />`)
- Keep `v-for` and `:key` on the same element
- Use `v-if` / `v-else-if` / `v-else` for tabbed content

## Composition API Patterns
- Use `ref` and `computed` from Vue
- For Pinia stores, use `defineStore` with setup syntax
- When using store state in components, prefer `storeToRefs`
- Store actions are plain functions (see `useBuilderStore`)

## State Mutation
- Keep state in refs or plain objects
- Clone arrays before reordering or splicing when needed
- Use store actions to update state, not direct mutation in views

## Routing
- Define routes in `src/router/index.js`
- Use lazy-loaded view components for large pages
- Keep route names lower-case (observed: `builder`, `home`)

## Builder/Blocks Architecture
- Blocks are registered in `src/components/blocks/BlockRegistry.js`
- Each block entry includes `name`, `component`, and `defaultData`
- Use `defineAsyncComponent` for block components
- Update registry when adding a new block

## CSS and Design System
- Global CSS defines variables for colors, spacing, and typography
- Prefer CSS variables (see `:root` in `src/assets/css/global.css`)
- Use `scoped` CSS for component styles
- Class naming often uses BEM-like patterns (example: `block__element`)
- Keep layout responsive with media queries as needed

## Error Handling
- No centralized error handling framework detected
- Use null checks and guard clauses
- For async work, handle errors locally and provide safe fallbacks

## Data and IDs
- UUIDs generated via `uuid` v4 in `useBuilder`
- Block data is stored as plain objects; avoid mutating shared references

## Assets
- Fonts are loaded from `src/assets/fonts`
- Global CSS is imported in `src/main.js`

## Files Without Rules
- No `.cursor/rules/`, `.cursorrules`, or Copilot instructions found
- No ESLint, Prettier, or editorconfig files detected

## When Adding Tooling
- If you add linting or tests, add scripts in `package.json`
- Document new commands in this file and update README
- Keep tool choices minimal and aligned with Vue 3 + Vite

## Practical Editing Tips
- Match formatting and spacing of the file you are editing
- Avoid mass reformatting; keep diffs small
- Do not introduce new dependencies without a clear need
- Prefer local utilities over new libraries

## Suggested Single-Test Pattern (if tests are added)
- Vitest: `npx vitest path/to/file.test.js`
- Jest: `npx jest path/to/file.test.js`
- Update this section once a runner is chosen

## Build Notes
- Vite dev server runs on port 5173 (see `vite.config.js`)
- Preview uses `npm run preview`

## Documentation Sources
- `package.json` scripts (primary source of truth)
- `README.md` (contains older commands; verify before using)

## Quick Checklist For Agents
- Confirm commands in `package.json`
- Follow local file formatting and patterns
- Keep changes focused and reversible
- Update AGENTS.md if conventions change
