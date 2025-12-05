# Frostpixel Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router v6

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### Setup GitHub Pages

1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push to `main` branch to trigger deployment

## Project Structure

```
src/
  components/
    layout/       # Layout, Navbar
    ui/           # Reusable UI components
  data/           # Static data (projects, experience)
  pages/          # Page components
  index.css       # Global styles + Tailwind
  App.tsx         # Router setup
  main.tsx        # Entry point
```

## Customization

### Update Personal Info

1. **Hero text**: Edit `src/pages/HomePage.tsx`
2. **About**: Edit `src/pages/AboutPage.tsx`
3. **Projects**: Edit `src/data/projects.ts`
4. **Experience**: Edit `src/data/experience.ts`
5. **Social links**: Edit `src/data/social.ts`
6. **Contact info**: Edit `src/pages/ContactPage.tsx`

### Add Images

- Hero background: `public/images/hero-bg.jpg`
- Profile photo: `public/images/profile.jpg`
- Project images: `public/images/projects/`
- Resume: `public/resume.pdf`

## License

MIT
