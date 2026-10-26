# Art Gallery Management

A web interface for an art gallery management system, allowing administrators to track artworks, categories, and inventory status.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| Title | text | required, e.g., "Noapte Înstelată" |
| Exhibited | boolean | toggled from the list, default true |
| Type | fixed values | Painting, Sculpture, Photography |
| Category | relation | Contemporary, Modern, Classic |
| Administrator | relation | the owner of the item (from week 11) |

## Sample data used across all stages:
1. "Noapte Înstelată", active, Painting, Contemporary, Administrator: Teodora Moraru
2. "Gânditorul", done, Sculpture, Classic, Administrator: Teodora Moraru
3. "Peisaj de toamnă", active, Photography, Contemporary, Administrator: Teodora Moraru

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Generating semantic HTML structure and CSS rules |

Details per stage: see the `ai-log/` folder.

## How to run
Open index.html in a browser. No build step, no server.

## Stage 2: data logic
Plain JavaScript, no DOM. galerie.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

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

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev

Then open the address printed in the terminal (http://localhost:5173).

## Stage 3 Checklist
- [x] S3-R1 npm run dev pornește fără erori pe calculatorul studentului.
- [x] S3-R2 Pagina afișează numele aplicației și contorul calculat din date.
- [x] S3-R3 Datele sunt cele din README, nu cele din exemplu.
- [x] S3-R4 Stilurile din Etapa 1 se regăsesc în aplicație.
- [x] S3-R5 node_modules/ nu apare pe GitHub, iar npm run build rulează fără erori.
- [x] S3-R6 README-ul este actualizat, iar ai-log/etapa-03.md este completat.
- [x] S3-R7 Commit-ul "Stage 3" este publicat pe GitHub.

## Stage 4: components
The list is rendered from the data, through two components:
OperaList receives the whole array and renders one card per item
OperaCard receives a single item through props and displays it

## Status
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

## Tabel de verificare Etapa 4

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | frontend/src/components/ | open folder |
| S4-R2 | card receives data through props | frontend/src/components/OperaCard.jsx | read |
| S4-R3 | map + key={id}, no console warnings | frontend/src/components/OperaList.jsx | F12, Console |
| S4-R4 | message for empty list | frontend/src/components/OperaList.jsx | set array to [] |
| S4-R5 | state changes the card look | frontend/src/components/OperaCard.jsx | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | README.md, ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | commit history |