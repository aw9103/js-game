# ✊✋✌️ Rock Paper Scissors

A simple browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries, just the fundamentals.

## About

I built this project entirely from scratch while learning JavaScript. It was a hands-on way to practice core concepts like DOM manipulation, event listeners, conditional logic, and using `localStorage` to persist data between sessions.

## Features

- 🪨 Play rock, paper, or scissors against the computer
- ⌨️ Keyboard shortcuts — press `r`, `p`, or `s` to make a move
- 🏆 Score tracking (wins, losses, ties) saved in `localStorage`, so your score persists even after refreshing the page
- 🤖 Auto-play mode that automatically plays a random move every second
- 🎨 Simple dark-themed UI with circular move buttons

## How to Play

1. Click one of the move buttons (or press `r` for rock, `p` for paper, or `s` for scissors on your keyboard)
2. The computer randomly picks its move
3. The result (Win / Lose / Draw) is displayed instantly
4. Your running score is updated and saved automatically

## Project Structure

```
├── 09-rock-paper-scissors.html   # Page structure
├── 09-rock-paper-scissors.css    # Styling
├── 09-rock-paper-scissors.js     # Game logic
└── images/
    ├── rock-emoji.png
    ├── paper-emoji.png
    └── scissors-emoji.png
```

## What I Learned

- Manipulating the DOM with `querySelector` and `innerHTML`
- Handling `click` and `keydown` events
- Writing game logic with conditional statements to determine outcomes
- Using `localStorage` to persist data across page reloads
- Using `setInterval` / `clearInterval` to build a toggleable auto-play feature

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Future Improvements

- Add animations for move selection and results
- Add a "best of N rounds" game mode
- Improve responsive design for mobile screens
- Add sound effects for wins/losses

---

*This project was built as a learning exercise while studying JavaScript fundamentals.*
