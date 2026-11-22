# Yashwanth K – Industry-Level AI Engineer Portfolio Website

A modern, high-performance portfolio website engineered for **Yashwanth K** (AI Engineer | Generative AI Developer | Python Full Stack Developer), strictly grounded in resume credentials, real-world project architectures, and production-grade engineering principles.

---

## 🚀 Key Highlights & Architectural Features

- **Strict Source of Truth**: 100% verified against Yashwanth K's official resume—zero fabricated skills or unverified claims.
- **Enterprise RAG Centerpiece**: Showcases the flagship **Enterprise RAG Chatbot (Document Q&A System)** with an interactive pipeline simulation (hybrid FAISS vector search + BM25 keyword retrieval + Gemini API grounded generation).
- **Interactive AI Architecture Blueprint**: Dedicated *"How I Build AI Systems"* stage-by-stage inspector demonstrating end-to-end production pipelines (Client Request → FastAPI Gateway → Chunking → Dual Indexing → Hybrid Reranking → Grounded Synthesis).
- **Technical Skills Dashboard**: Categorized cards covering Generative AI (LangChain, FAISS, Gemini API), Machine Learning (Scikit-learn, TensorFlow, Keras), Python Full-Stack (FastAPI, Django, React.js, MySQL), and Developer Tools.
- **Career & Education Timeline**: Detailed chronicle of internships at **Palle Technologies (Bengaluru)** and Bachelor of Engineering in Information Science (Ghousia College of Engineering, VTU, **8.1 CGPA**).
- **GitHub Integration**: Pinned repositories, language distribution analytics, and direct source code links to [Yashwanth-12-yash](https://github.com/Yashwanth-12-yash).
- **Direct Resume Download**: Integrated 1-click download of `Yashwanth_K_Resume.pdf` served from the public asset bundle.
- **Interactive Contact Hub**: Validated form with native mail dispatch and copy-to-clipboard for quick recruiter outreach.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework & Language** | React 18, TypeScript, Vite |
| **Styling & Design** | Tailwind CSS, Custom Glassmorphism, CSS Grid & Radial Gradients |
| **Icons & Visuals** | Lucide React, HTML5 Canvas Particle Neural Mesh |
| **Component Architecture** | Modular, fully decoupled TypeScript components |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── Yashwanth_K_Resume.pdf       # Verified candidate resume
├── src/
│   ├── components/
│   │   ├── About.tsx                 # Engineering background & 4 pillars
│   │   ├── ArchitectureShowcase.tsx  # "How I Build AI Systems" interactive pipeline
│   │   ├── ContactSection.tsx        # Contact details & validated form
│   │   ├── ExperienceEducation.tsx   # Milestone timeline
│   │   ├── FeaturedProjects.tsx      # Projects centerpiece
│   │   ├── Footer.tsx                # Footer with back-to-top
│   │   ├── GitHubSection.tsx         # Repositories & language stats
│   │   ├── Hero.tsx                  # Landing hero with typewriter & HUD
│   │   ├── Navbar.tsx                # Glassmorphic header & drawer
│   │   ├── NetworkBackground.tsx     # Canvas neural network particle mesh
│   │   ├── RagSimulatorModal.tsx     # Interactive RAG Q&A tester modal
│   │   └── ResumeDownloadSection.tsx # Resume highlight & download card
│   ├── data/
│   │   └── portfolioData.ts          # Strictly resume-sourced data model
│   ├── types/
│   │   └── index.ts                  # TypeScript data interfaces
│   ├── App.tsx                       # Root portfolio assembly
│   ├── index.css                     # Tailwind layers & custom animations
│   └── main.tsx                      # Vite React entrypoint
├── index.html                        # SEO meta tags & Inter/JetBrains fonts
├── package.json                      # Dependencies and build scripts
├── tailwind.config.js                # Custom color palettes & glow utilities
└── vite.config.ts                    # Vite bundler configuration
```

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 1-Click Deployment Guide

### Deploying to Vercel (Recommended):
1. Push this repository to GitHub under [Yashwanth-12-yash](https://github.com/Yashwanth-12-yash).
2. Connect your GitHub account to [Vercel](https://vercel.com).
3. Import the repository. Vercel will automatically detect **Vite** and configure `npm run build` and output directory `dist`.
4. Click **Deploy**. Your live portfolio will be deployed with global CDN acceleration and SSL.
