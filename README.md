# meme-Counter
A dynamic JavaScript counter that tracks clicks, highlights milestones at every 50 and 100 counts, &amp; displays random meme images. The app persists counts &amp; milestone data across page reloads using localStorage, demonstrating DOM manipulation, event-driven programming, conditional logic, &amp; client-side state management without any external libraries.

🎯 Persistent Meme Counter (Frontend State Management Demo)

A client-side JavaScript application demonstrating DOM manipulation, event-driven architecture, conditional milestone logic, and persistent state management using localStorage.

This project was built to showcase practical frontend engineering fundamentals without relying on frameworks or external libraries.

🔍 Project Overview

The application increments a counter on user interaction and triggers milestone events at defined intervals (50s and 100s). At each milestone:

UI updates dynamically

Background styles toggle conditionally

A random meme image is rendered

State is persisted across page reloads

The entire system runs in the browser with no backend dependencies.

🧠 Core Technical Concepts Demonstrated
1. DOM Manipulation

Dynamic text updates via textContent

Inline style updates (backgroundImage, backgroundSize, etc.)

Event-driven UI interactions via addEventListener

2. State Management (Without Frameworks)

Centralized counter state

Derived milestone counters

Boolean-driven UI state toggling

Controlled randomization logic

3. Persistent Client Storage

Uses localStorage to:

Preserve total count

Preserve milestone counters

Restore UI state on reload

let count = Number(localStorage.getItem("count")) || 0;
localStorage.setItem("count", count);


This demonstrates understanding of:

Data serialization

Client-side persistence

Page lifecycle handling

4. Algorithmic Logic

Milestone detection via modular arithmetic:

if (count % 50 === 0) { ... }
if (count % 100 === 0) { ... }


Random image selection:

const randomId = Math.floor((Math.random()*randomImages.length) + 1);
const pickedImage = randomImages.find(randomImage=> randomId === randomImage.id);



🏗 Architecture & Design Decisions

Pure Vanilla JavaScript (no frameworks)

Modular logic separation (data → logic → UI update)

No global side-effects outside controlled state

Efficient random selection using array indexing

Conditional rendering guarded by existence checks

💻 Tech Stack

HTML5

CSS3 (Grid Layout)

Vanilla JavaScript (ES6+)

Browser Web APIs (localStorage)

No dependencies.

🚀 Live Demo

(https://github.com/CodeKunle/meme-Counter)

📁 Project Structure
/meme-Counter
│
├── index.html
├── styles.css
├── counter.js
└── /02-image

🎯 Skills Demonstrated

Event-driven programming

Browser storage APIs

Conditional UI rendering

Randomization algorithms

Modular logic structuring

Frontend debugging and state persistence handling

Clean separation of concerns in small-scale architecture

📈 Potential Extensions

Convert to component-based architecture (React / Vue)

Introduce animation transitions

Add debounce/throttle logic

Persist last-rendered meme

Add unit testing for milestone logic

Refactor into MVC pattern

📌 Why This Project Matters

This project intentionally avoids frameworks to demonstrate strong foundational JavaScript skills. It highlights:

Understanding of how the browser works

State lifecycle management

Logical reasoning using modular arithmetic

Practical UI updates without abstractions

📄 License

MIT
