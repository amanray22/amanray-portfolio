# Aman Ray Portfolio

Professional portfolio website built with HTML, CSS, and vanilla JavaScript.

## Overview

This site is designed for recruiter and hiring-manager readability:

- clear role positioning as an aspiring software developer
- outcome-focused project cards
- short experience highlights section
- secure external links
- responsive layout and theme toggle
- contact form with validation and fallback delivery

## Current stack

- HTML5
- CSS3 (`styles.css`, `animations.css`)
- Vanilla JavaScript (`data.js`, `main.js`)
- Email delivery via EmailJS (optional config) with Formspree fallback

## Project structure

```text
.
├── index.html
├── css
│   ├── styles.css
│   └── animations.css
├── js
│   ├── data.js
│   └── main.js
└── resume.pdf (optional, recommended)
```

## Main sections on the website

- Navigation
- Hero
- Experience Highlights
- Featured Projects
- About
- Services
- Blog
- Contact
- Footer

## How content is managed

Edit `js/data.js` to update:

- personal info
- project entries (including `category`, `featured`, `outcome`, `year`)
- skills
- services
- blog posts

## Contact form behavior

The form in `index.html` uses validation and two send paths:

1. EmailJS if `window.EMAILJS_CONFIG` is present and valid
2. Formspree fallback if EmailJS is not configured

Expected EmailJS object:

```javascript
window.EMAILJS_CONFIG = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key"
};
```

## Run locally

No build step is required.

1. Open `index.html` directly in a browser, or
2. Use any static server for cleaner local testing

Example:

```bash
npx serve .
```

## Deployment

This project can be deployed as static files on:

- GitHub Pages
- Netlify
- Vercel (static)
- Any traditional static host

## Quality checklist

- verify all project links and resume link
- verify contact form success and failure messages
- test mobile menu and responsive layout
- confirm dark/light theme toggle
- confirm no console errors in browser

## Notes

- The site currently uses hosted image URLs for project cards.
- A fallback image is applied if a project image fails to load.

## License

Free to use for personal portfolio work.
