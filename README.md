# WEB102 — Flashcard App (Project 2)

A lightweight, slide-style flashcard web app built with **React + Vite**.

## Features

- **Slide navigation** — Prev / Next buttons move through a fixed deck order.
- **Tap-to-flip** — Click or tap any card to reveal the answer with a smooth 3D flip animation.
- **Images supported** — Cards may include a front image, back image, both, or neither. Empty image fields fall back to text-only; broken URLs hide gracefully.
- **Difficulty theming** — Each card carries an `easy` / `medium` / `hard` category. A traffic-light accent (green → yellow → red) and badge communicate difficulty at a glance.
- **Responsive** — Centered card on desktop; larger card and thumb-friendly controls on mobile.

## Tech Stack

| Layer | Tool |
|-------|------|
| UI | React 19 |
| Build | Vite 6 |
| Styling | Plain CSS (3D transforms, media queries) |

## Project Structure

```
src/
  main.jsx            # React entry point
  App.jsx             # State & layout
  index.css           # All styles
  components/
    CardView.jsx      # Flip card with image + text
    Controls.jsx      # Prev / Next + counter
  data/
    deck.js           # JSON card deck
```

## Getting Started

```bash
# 1. Clone
git clone https://github.com/Hienology/WEB102_Hien_Vo_Project2.git
cd WEB102_Hien_Vo_Project2

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

## Extending

The codebase is modular and small — a few ideas for future work:

- Deck editor UI to create / edit cards in the browser
- LocalStorage persistence for progress
- JSON import / export for sharing decks
- Study mode with timers or spaced-repetition scheduling
