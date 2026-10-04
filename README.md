# Art Gallery Management

O interfață web pentru sistemul de gestiune a unei galerii de artă, permițând administratorilor să urmărească operele de artă, categoriile și starea inventarului.

## Model de date
* **Titlu** (text) - ex. "Noapte Înstelată"
* **Stare** (boolean) - "Expusă" sau "În depozit"
* **Tip** (enum) - Pictură, Sculptură, Fotografie
* **Categorie** - Contemporan, Modern, Clasic
* **Administrator** - Utilizatorul care gestionează elementul

## Date de test (Mock data)
1. "Noapte Înstelată", Expusă, Pictură, Modern, Administrator: Teodora Moraru
2. "Gânditorul", În depozit, Sculptură, Clasic, Administrator: Teodora Moraru (FINALIZAT)
3. "Peisaj de toamnă", Expusă, Fotografie, Contemporan, Administrator: Teodora Moraru

## Utilizare AI
Am folosit instrumente AI pentru a genera structura HTML semantică și regulile CSS. Jurnalul detaliat se află în `ai-log/etapa-01.md`.

---

## Lista de verificare a etapei 1

* [x] **S1-R1:** HTML Semantic (`<header>`, `<main>`, `<section>`, `<footer>`) - [LINK_HTML_SEMANTIC]
* [x] **S1-R2:** Formular pentru adăugare și listă cu 3 elemente (1 marcat ca finalizat) - [LINK_FORMULAR_SI_LISTA]
* [x] **S1-R3:** Folosire CSS Grid pentru așezarea elementelor majore în pagină - [LINK_CSS_GRID]
* [x] **S1-R4:** Folosire CSS Flexbox pentru aranjarea elementelor în interiorul cardurilor/formularului - [LINK_CSS_FLEXBOX]
* [x] **S1-R5:** Modelul cutiei (`box-sizing: border-box`) - [LINK_BOX_SIZING]
* [x] **S1-R6:** Design responsiv (`@media` query pentru ecran < 700px) - [LINK_RESPONSIV]
* [x] **S1-R7:** Utilizare variabile CSS (`:root`) - [LINK_VARIABILE]
* [x] **S1-R8:** Temă întunecată (`@media (prefers-color-scheme: dark)`) - [LINK_DARK_THEME]
* [x] **S1-R9:** Stări interactive și accesibilitate (`:hover`, `:focus-visible`) - [LINK_ACCESIBILITATE]