
# GoTools Lab

GoTools Lab is a multilingual collection of lightweight browser tools inspired by platforms such as 123apps.com. The site showcases grouped utilities for audio, video, document, and productivity workflows together with a live rich-text editor that works entirely in the browser.

## Features

- **Clear categorisation** – Audio, video, document, and everyday utility sections with descriptive tool cards.
- **Global-ready localisation** – Switch the entire interface between English, Simplified Chinese, and Spanish. The selection is stored so visitors return to their preferred language.
- **Live editor** – Rich-text editor with formatting buttons, reusable templates, local auto-save, downloads, clipboard copy, and a persistent dark theme toggle.
- **Search and discovery** – Instant filtering across tool cards to help visitors find the right app quickly.
- **Privacy friendly** – All interactions happen client side; drafts are saved to local storage only when available.

## Getting started

The project is a static site and can be served with any HTTP server. One simple option is to use the built-in Python module:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser. The landing page, assets, and scripts are located at the repository root under `index.html` and `assets/`.

## Project structure

```
.
├── index.html        # Landing page
├── assets/
│   ├── css/
│   │   └── main.css  # Styling
│   └── js/
│       └── main.js   # Behaviour, localisation, editor logic
└── README.md
```

## Localization

All translatable strings live in `assets/js/main.js` inside the `translations` object. Add or update language keys there to extend localisation support. Each new language should provide:

- Navigation and hero strings
- Category and tool descriptions
- Editor UI copy, templates, and notifications
- Footer and global reach messaging

## Browser support

The interface relies on modern browser features such as `flex`, `grid`, and the Clipboard API. When the Clipboard or Local Storage APIs are unavailable, the app gracefully falls back while keeping the core experience functional.
=======
# gotoolslab by

