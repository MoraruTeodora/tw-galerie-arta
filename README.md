# Art Gallery Management

A web interface for an art gallery management system, allowing administrators to track artworks, categories, and inventory status.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| Title | text | required, e.g., "Starry Night" |
| Exhibited | boolean | toggled from the list, default true |
| Type | fixed values | Painting, Sculpture, Photography |
| Category | relation | Contemporary, Modern, Classic |
| Administrator | relation | the owner of the item (from week 11) |

## Sample data used across all stages:
1. "Starry Night", active, Painting, Contemporary, Administrator: Teodora Moraru
2. "The Thinker", done, Sculpture, Classic, Administrator: Teodora Moraru
3. "Autumn Landscape", active, Photography, Contemporary, Administrator: Teodora Moraru

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Generating semantic HTML structure and CSS rules |

Details per stage: see the `ai-log/` folder.

## How to run
**Stage 1 & 2:** Open index.html in a browser. No build step, no server.
**Stage 3+ (React):** 
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 2: data logic
Plain JavaScript, no DOM. galerie.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
OperaList receives the whole array and renders one card per item
OperaCard receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

---

## Stage 1 Checklist
- [x] **S1-R1:** Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/index.html#L10
- [x] **S1-R2:** Form for adding and list with 3 items (1 marked as done) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/index.html#L42
- [x] **S1-R3:** Used CSS Grid for major page layout - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L43
- [x] **S1-R4:** Used CSS Flexbox for layout inside cards/form - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L56
- [x] **S1-R5:** Box model (`box-sizing: border-box`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L21
- [x] **S1-R6:** Responsive design (`@media` query for screen < 700px) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L87
- [x] **S1-R7:** CSS variables (`:root`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L1
- [x] **S1-R8:** Dark theme (`@media (prefers-color-scheme: dark)`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L9
- [x] **S1-R9:** Interactive states and accessibility (`:hover`, `:focus-visible`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L78

## Stage 2 Checklist
- [x] **S2-R1:** JS file linked, logs on page load - https://github.com/MoraruTeodora/tw-galerie-arta/blob/f452802a822b9c22904810db1dc604917bd69874/index.html#L63
- [x] **S2-R2:** Array with 3 items (id, title, state, tag) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/f452802a822b9c22904810db1dc604917bd69874/galerie.js#L1
- [x] **S2-R3:** List, count, search, add, toggle, and delete functions - https://github.com/MoraruTeodora/tw-galerie-arta/blob/f452802a822b9c22904810db1dc604917bd69874/galerie.js#L9
- [x] **S2-R4:** Add function rejects empty name and invalid tag - https://github.com/MoraruTeodora/tw-galerie-arta/blob/f452802a822b9c22904810db1dc604917bd69874/galerie.js#L65
- [x] **S2-R5:** Original array unchanged after add - https://github.com/MoraruTeodora/tw-galerie-arta/blob/f452802a822b9c22904810db1dc604917bd69874/galerie.js#L68
- [x] **S2-R6:** Commit "Stage 2: data logic in JavaScript" is published.

## Stage 3 Checklist
- [x] **S3-R1:** `npm run dev` starts without errors on the student's machine.
- [x] **S3-R2:** The page displays the app name and the counter calculated from the data.
- [x] **S3-R3:** The data used is from the README, not the default example.
- [x] **S3-R4:** The styles from Stage 1 are applied in the app.
- [x] **S3-R5:** `node_modules/` is excluded from GitHub, and `npm run build` runs without errors.
- [x] **S3-R6:** The README is updated, and `ai-log/etapa-03.md` is completed.
- [x] **S3-R7:** The "Stage 3" commit is published on GitHub.

## Stage 4 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | frontend/src/components/ | open folder |
| S4-R2 | card receives data through props | frontend/src/components/OperaCard.jsx | read |
| S4-R3 | map + key={id}, no console warnings | frontend/src/components/OperaList.jsx | F12, Console |
| S4-R4 | message for empty list | frontend/src/components/OperaList.jsx | set array to [] |
| S4-R5 | state changes the card look | frontend/src/components/OperaCard.jsx | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | README.md, ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | *[Add link to Stage 4 commit here]* | commit history |

## Stage 5 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | frontend/src/App.jsx | read |
| S5-R2 | toggling changes state and card look | frontend/src/App.jsx, frontend/src/components/OperaCard.jsx | click a checkbox |
| S5-R3 | delete removes the item | frontend/src/App.jsx, frontend/src/components/OperaCard.jsx | click Delete |
| S5-R4 | header counter derived, not in state | frontend/src/App.jsx | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | frontend/src/App.jsx | read |
| S5-R6 | light/dark toggle: state + data-theme on html | frontend/src/App.jsx, frontend/src/App.css | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | README.md, ai-log/etapa-05.md | Console |
| S5-R8 | commit "Stage 5" pushed | commit history |


## Stage 7: form and validation

The Art Gallery Management application now supports adding new
artworks directly from the interface.

The form is controlled and validates the artwork information
before submitting it to the API.

Implemented features:
- Controlled form with React useState.
- Validation for required fields.
- Validation for artwork creation year (1450 - current year).
- POST request for adding artworks.
- PATCH request for changing exhibition status.
- DELETE request for removing artworks.
- Server-confirmed updates.
- Loading and error messages.
- Automated testing attributes (data-testid).
- Artwork persistence after page refresh.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [ ] Stage 9: own backend with Express

## Stage 8: routing and detail page

Three pages behind React Router: the gallery list, a detail page at `/opere/:id`
(artist, year and image are shown only there), and an about page, plus a 404 page.
The header, navigation and footer live in one `Layout` component rendered around
every page with `<Outlet />`. Component styles moved to CSS Modules; `index.css`
keeps only the color variables and the shared classes.

## Stage 8 Checklist
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | header navigation changes page without reload | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/App.jsx#L12-L19, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/components/Layout.jsx#L61-L73 | click links, watch Network |
| S8-R2 | click on an item opens its detail page | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/components/OperaCard.jsx#L40-L45, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/pages/OperaDetaliuPage.jsx | click a title |
| S8-R3 | refresh on the detail URL works; missing id shows an error | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/pages/OperaDetaliuPage.jsx#L7-L52 | refresh /opere/1, open /opere/999 |
| S8-R4 | unknown URL shows the app 404 page | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/App.jsx#L17, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/pages/NotFoundPage.jsx | open /ceva |
| S8-R5 | each component has its .module.css; index.css only shared styles | https://github.com/MoraruTeodora/tw-galerie-arta/tree/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src | read |
| S8-R6 | data-testid attributes from tables 7.3 and 8.2; detail route /opere/:id | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/components/Layout.jsx#L61, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/components/OperaCard.jsx#L42, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/pages/OperaDetaliuPage.jsx#L58-L63, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/frontend/src/pages/NotFoundPage.jsx#L5 | querySelector in the console |
| S8-R7 | README Stage 8 section + AI log | https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/README.md, https://github.com/MoraruTeodora/tw-galerie-arta/blob/b66741a9011b93e49b33a96d7c9cbb34fbfbdf02/ai-log/etapa-08.md | read |
| S8-R7 | README Stage 8 section + AI log | README.md, ai-log/etapa-08.md | read |