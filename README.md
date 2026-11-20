# THARUN LABS — Futuristic AI Engineer Portfolio

A production-quality personal engineering laboratory portfolio for **D J Tharun**, Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning.

Designed with a **Minimalist Cyberpunk × Sci-Fi Engineering Laboratory** aesthetic, inspired by scientific instrumentation, research terminals, and minimalist Swiss typography.

---

## 🔬 Creative Direction & Design Philosophy

- **Concept**: A near-future personal engineering laboratory terminal.
- **Palette**:
  - Primary Background: `#090B0A`
  - Secondary Background: `#101411`
  - Surface: `#151B16`
  - Primary Text: `#E8EEE7`
  - Secondary Text: `#929C91`
  - Accent: `#B5FF55` (Phosphor Green)
  - Secondary Accent: `#65D9C7` (Instrumentation Teal)
  - Subtle Borders: Low-contrast green-gray `#1C261F` / `#243228`
- **Typography**:
  - Headings & Editorial Text: **Space Grotesk**
  - Metadata, Timestamps & Labels: **JetBrains Mono**
- **Restraint**: Zero generic templates, no neon clutter, no fabricated percentage bars, and no GPU-heavy 3D lag.

---

## ⚡ Key Interactive Features

1. **Global Command Palette (`⌘K` / `Ctrl+K`)**:
   - Keyboard-accessible terminal search (navigate with `↑` `↓`, select with `Enter`, exit with `Esc`).
   - Fast dispatch to any section, individual project deep-dives, resume download, and quick copy actions.
2. **Interactive Architectural Inspection Drawers**:
   - Expandable 5-stage pipeline breakdown for each featured project.
   - Engineering decisions, rationale, and underlying subsystem matrix.
3. **Filterable Technical Capability Matrix**:
   - Real-time search across AI & ML, AI Engineering, Backend, Languages, and Tools.
4. **Real Runtime Portfolio Telemetry**:
   - Real-time local IST clock (Asia/Kolkata), Cloudflare Anycast edge metadata, strict TypeScript verification status.
   - Absolutely zero fabricated live uptime or fake load numbers.
5. **Fluid Mobile & Reduced-Motion Accessibility**:
   - Clean mobile terminal drawer, full ARIA attributes, semantic landmarks, and `@media (prefers-reduced-motion: reduce)` compliance.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Hardware-Accelerated Keyframes & Transitions
- **Deployment Target**: Cloudflare Pages (Static Single Page Application)

---

## 📁 Project Architecture

```
tharun-labs/
├── public/
│   ├── _headers                  # Cloudflare security & cache headers
│   ├── _redirects                # Cloudflare SPA fallback routing
│   ├── favicon.svg               # Minimalist laboratory icon
│   └── D_J_Tharun_Resume.pdf     # Resume PDF download asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with status & mobile drawer
│   │   ├── Hero.tsx              # Editorial typography & SVG orbital instrumentation
│   │   ├── ProjectSection.tsx    # Showcase container for core projects
│   │   ├── ProjectCard.tsx       # Spec card with expandable architectural drawer
│   │   ├── Expertise.tsx         # Capability matrix with interactive search
│   │   ├── About.tsx             # Academic background & "Currently Exploring"
│   │   ├── EngineeringStatus.tsx # Live IST clock & real environment metadata
│   │   ├── Contact.tsx           # Communications dispatch & copy email action
│   │   ├── Footer.tsx            # Lab index & return to top
│   │   └── CommandPalette.tsx    # Modal terminal with keyboard navigation
│   ├── data/
│   │   ├── profile.ts            # Personal bio, contact, location & explorations
│   │   ├── projects.ts           # Project architectures, tech tags & highlights
│   │   └── skills.ts             # Organized capability categories & toolchains
│   ├── styles/
│   │   └── globals.css           # Custom scrollbars, scanline & tech-corners
│   ├── types/
│   │   └── index.ts              # Strict TypeScript models
│   ├── utils/
│   │   └── cn.ts                 # Class merging helper
│   ├── App.tsx                   # Master view layout & shortcut coordinator
│   └── main.tsx                  # React DOM entry point
├── index.html                    # SEO metadata, Open Graph, fonts & root mount
├── tailwind.config.js            # Custom laboratory color tokens & utilities
├── tsconfig.json                 # Strict TypeScript configuration
└── vite.config.ts                # Production build optimization
```

---

## 🔄 Updating Project Data

All personal links, project specifications, and capabilities are completely data-driven.

1. **Profile, Bio & Social Links**:
   Edit `src/data/profile.ts` to update your email, GitHub, LinkedIn, bio paragraphs, and current exploration topics.
2. **Projects & Architectural Schemas**:
   Edit `src/data/projects.ts` to add or update projects, technologies, pipeline stages, or engineering decisions.
3. **Skills & Capabilities**:
   Edit `src/data/skills.ts` to adjust skill categories and tags.

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment to Cloudflare Pages

### Option 1: Git Integration (Recommended)
1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Tharun Labs portfolio"
   git branch -M main
   git remote add origin https://github.com/dj-tharun/tharun-labs.git
   git push -u origin main
   ```
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the repository and configure build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### Option 2: Direct Upload via Cloudflare Wrangler CLI
```bash
npx wrangler pages deploy dist --project-name=tharun-labs
```

---

## 📜 License

Created by **D J Tharun**. Distributed under the MIT License.
