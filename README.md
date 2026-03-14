# Hyper Touch Official — Link Page

A sleek, dark-themed linktree-style contact page for **Hyper Touch Official**, built with:

- **Next.js 14** (App Router)
- **JavaScript** (no TypeScript)
- **Tailwind CSS**
- Custom SVG logo & icons
- Staggered reveal animations
- Hover shimmer & glow effects

---

## 📁 Project Structure

```
hyper-touch/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── app/
    │   ├── globals.css        # Global styles + Tailwind + animations
    │   ├── layout.js          # Root layout with metadata & Google Fonts
    │   └── page.js            # Main home page
    ├── components/
    │   ├── Icons.js           # All SVG icon components
    │   ├── LinkCard.js        # Reusable link card with info tooltip
    │   └── Logo.js            # Hyper Touch SVG logo
    └── data/
        └── links.js           # All link definitions (social + call)
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customizing Links

Edit `src/data/links.js` to update URLs, labels, icons, and phone numbers.

Each link object supports:
| Field      | Description                              |
|------------|------------------------------------------|
| `id`       | Unique identifier                        |
| `label`    | Display text                             |
| `sublabel` | Secondary text (e.g. branch name)        |
| `href`     | URL or `tel:` link                       |
| `icon`     | Icon key: globe, facebook, instagram...  |
| `color`    | Brand color hex                          |
| `showInfo` | Show the ⓘ info button                   |
| `infoText` | Tooltip text on info button click        |

---

## 🎨 Customizing Theme

Edit `tailwind.config.js` to adjust brand colors:

```js
colors: {
  "ht-bg":    "#0d0d0d",   // page background
  "ht-card":  "#1a1a1a",   // card background
  "ht-red":   "#cc0000",   // primary accent
  ...
}
```
