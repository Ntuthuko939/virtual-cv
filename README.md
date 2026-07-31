# Virtual CV — Mpho D.

A single-page portfolio website built for the Profile Development assignment (BIT, North-West University). It serves as an interactive, dynamic CV showcasing academic background, projects, and skills.

**Live site:** `[ADD-LINK-GITHUB-PAGES-URL]` (e.g. `https://<your-username>.github.io/virtual-cv/`)

## Concept

The design borrows from a code editor / IDE interface — the left sidebar acts as a file explorer (`about.md`, `resume.pdf`, `projects/`, `skills.json`, `contact.sh`), reflecting the site owner's IT background. A terminal-style "boot sequence" plays on load before revealing the profile.

## Sections

| Section | File "name" | Content |
|---|---|---|
| About | `about.md` | Hero intro, rotating role typewriter, avatar |
| Resume | `resume.pdf` | Education, certifications, target roles |
| Projects | `projects/` | Featured project cards with repo links |
| Skills | `skills.json` | Animated skill proficiency bars |
| Contact | `contact.sh` | Email, phone, LinkedIn, GitHub |

## Tech Used

- **HTML5** — semantic single-page structure
- **CSS3** — custom properties (design tokens), CSS Grid/Flexbox, keyframe animations (boot sequence, pulse, cursor blink), responsive breakpoints, `prefers-reduced-motion` support
- **Vanilla JavaScript** — boot sequence timing, typewriter effect, `IntersectionObserver`-based scroll reveals and active-nav highlighting, mobile menu toggle
- **Google Fonts** — JetBrains Mono (display/labels) + Inter (body)

No frameworks or build step — open `index.html` directly or serve via GitHub Pages.

## Setup / Running Locally

1. Clone this repository
2. Open `index.html` in any modern browser — no build step required

## Before Submitting — Checklist

- [ ] Replace `[ADD-LINK-GITHUB]` placeholders in `index.html` with real repository URLs
- [ ] Replace `[ADD-LINK-LINKEDIN]` with your LinkedIn profile URL
- [ ] Replace the live site link above with your actual GitHub Pages URL
- [ ] Add a real `resume.pdf` file to this folder (the Download CV button links to it)
- [ ] Enable GitHub Pages: repo **Settings → Pages → Source: main branch, / (root)**

## File Structure

```
virtual-cv/
├── index.html
├── style.css
├── script.js
├── resume.pdf        (add your CV file here)
└── README.md
```

## Author

Mpho D. — Final-year BIT student, North-West University (2026)
