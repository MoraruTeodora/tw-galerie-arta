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