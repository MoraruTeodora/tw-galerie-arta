# AI Usage Log - Stage 4

**Tool used:** Gemini

## Prompts and solutions

1. **Prompt:** "Help me style the new React components for my art gallery project. I want the cards to look modern with glassmorphism effects."
   **How the AI helped:** The AI generated the necessary CSS rules, including `backdrop-filter` for the glass effect, and structured the layout of `OperaCard` using Flexbox to ensure the image and text align perfectly.

2. **Prompt:** "How can I style the 'In Storage' artworks differently so they stand out and cannot be interacted with?"
   **How the AI helped:** The AI provided conditional CSS classes (`.card.done`), adding a grayscale filter, a dashed border, a red warning badge, and initially applying `pointer-events: none` to disable interactions.

3. **Prompt:** "Can you help me add a custom paintbrush cursor and fluid hover animations for the buttons?"
   **How the AI helped:** It generated the raw SVG code for a custom cursor and the CSS rules to apply it. It also created a dynamic hover animation using a custom `border-radius` that makes the buttons look like paint splashes.