# AI Usage Log - Stage 5

**Tool used:** Gemini

## Prompts and solutions

1. **Prompt:** "Help me implement the button that toggles between the light and dark theme, following the stage 5 guide."
   **How the AI helped:** It showed me how to use `useState` to read the initial OS theme and generated the `handleTema` function which sets the `data-theme` attribute on the `<html>` element. It also adapted the CSS variables to respond correctly to the button click.

2. **Prompt:** "I'm getting a console warning about the checkbox in the card and an error when clicking the delete button. How do I fix them?"
   **How the AI helped:** It identified that the checkbox needed an `onChange` event alongside `checked` to become a valid controlled element in React, which resolved the warning. It also corrected the delete function call, changing it from `onClick={handleDelete(opera.id)}` (which executed on render) to `onClick={() => handleDelete(opera.id)}` (which executes only on click), eliminating the console errors.