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

* [x] **S1-R1:** HTML Semantic (`<header>`, `<main>`, `<section>`, `<footer>`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/index.html#L10
* [x] **S1-R2:** Formular pentru adăugare și listă cu 3 elemente (1 marcat ca finalizat) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/index.html#L42
* [x] **S1-R3:** Folosire CSS Grid pentru așezarea elementelor majore în pagină - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L43
* [x] **S1-R4:** Folosire CSS Flexbox pentru aranjarea elementelor în interiorul cardurilor/formularului - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L56
* [x] **S1-R5:** Modelul cutiei (`box-sizing: border-box`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L21
* [x] **S1-R6:** Design responsiv (`@media` query pentru ecran < 700px) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L87
* [x] **S1-R7:** Utilizare variabile CSS (`:root`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L1
* [x] **S1-R8:** Temă întunecată (`@media (prefers-color-scheme: dark)`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L9
* [x] **S1-R9:** Stări interactive și accesibilitate (`:hover`, `:focus-visible`) - https://github.com/MoraruTeodora/tw-galerie-arta/blob/169c479f9118f04b2f7be0d54913d1e1e3b677ce/style.css#L78