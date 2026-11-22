# Stage 8 – AI Assistance

I used Claude to compare my project with the Stage 8 guide and to list what was still missing.

Claude helped me with:
- moving the styles from the single `App.css` file into `.module.css` files, one for each component and page, and keeping only the variables and the shared classes (`.panel`, `.info`, `.empty`, `.error`, `.btn-danger`) in `index.css`;
- moving the layout into `components/Layout.jsx`, with `NavLink` styling for the active page and a single `<main>` containing `<Outlet />`;
- extracting the fixed values (types and categories) into `src/constants.js`;
- improving the detail page (`/opere/:id`): image, artist and year are shown only there, and the `detail` attribute appears only after the artwork is loaded;
- writing the README section and the checklist.

I checked the result myself: navigation without reload, the detail page for an existing id, the error message for `/opere/999`, the 404 page for `/ceva`, and that the form, toggle and delete still work.
