## UX Product Page — Project Notes

### Overview
- Single-page React + Vite application for the Workplace Safety: Handling Data Breaches training course.
- Tailwind CSS drives layout/animations; lucide-react provides icons.
- The latest update replaces the legacy header/breadcrumb experience with the new black ATLANTIC header and removes unneeded marketing UI (mockup variants, “Most Popular”, “Add to Cart”, 30-day guarantee badge, footer).

### Requirements
- Node.js 18+ (developed against Node 20).
- npm 9+ (ships with Node).
- git 2.39+ for version control.

### Setup
```bash
git clone https://github.com/suzette-atlantic/UX-Product-Page.git
cd UX-Product-Page
npm install
npm run dev
```
- Default dev server: http://localhost:5173
- Hot Module Replacement is enabled by Vite.

### Available Scripts
- `npm run dev` — local development server with HMR.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build locally.

### Exporting HTML for Hand-off
1. Run `npm run build`.
2. Deliver the entire `dist/` directory (contains `index.html` + assets).  
   - Optionally zip: `cd dist && zip -r ../landing.zip .`
3. Receiving dev can open `dist/index.html` directly or upload contents to any static host (Netlify, Cloudflare Pages, S3, etc.).

### Assets & Branding
- Hero thumbnail currently references the parent-course image from the WAVE catalog (see `src/App.tsx` hero section).
- The black header mirrors ATLANTIC’s current production navigation; update menu labels/links inside `src/App.tsx` if product naming changes.

### Change Log (Nov–Dec 2025)
- Removed banner/breadcrumb stack; added sticky black header with mobile menu.
- Removed UX mockup variant pills, “⭐️ Most Popular”, “Add to Cart”, 30-day guarantee strip, and the footer.
- Pricing card now keeps price and CTA pair (`Preview Course`, `Get Enterprise Quote`).
- Added this `DOCUMENTATION.md`.
- Introduced Figtree-based gradient title styling across major headings.
- Updated pricing sidebar copy: **Per-User License**, **$37**, with “1 course” and “Minimum Spend $725”.
- Replaced older business-pricing CTA with centered copy and a gradient **Explore Solutions & Pricing** button.
- Added a **Compliance Standards and Regulations** section under Course Overview.
- Inserted a legal disclaimer block immediately above the **Frequently Taken With...** related-courses section.
- Adjusted related-courses buttons so they **stack on mobile** and sit side‑by‑side on larger screens.
- Clarified the Training Objectives side image as a configurable `<img>` per product.
- Created `product-page.html`, a self-contained static version of the product page (HTML + CSS + vanilla JS) for easy hand-off to other platforms.

### Next Steps
- If Paul requests restoring the guarantee badge or swapping hero thumbnails, edit `src/App.tsx` where indicated by comments.
- Hook up analytics or CMS data by replacing hard-coded arrays (`trainingObjectives`, `features`, etc.) with API calls if needed.

