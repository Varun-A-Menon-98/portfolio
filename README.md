# Varun A. Menon — Portfolio

A responsive, dark-premium personal portfolio built with React + Vite. It is a static frontend and can be deployed on Vercel's free Hobby plan for personal use.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a GitHub repository and push this folder's contents.
2. Sign in to https://vercel.com/ with GitHub.
3. Select **Add New → Project**, import the repository.
4. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
5. Click **Deploy**. Future pushes to the connected branch trigger new deployments.

No environment variables or backend services are required.

## Personalise before publishing

- Confirm the contact details and profile links in `src/main.jsx`.
- Replace the included resume at `public/Varun-A-Menon-Resume.pdf` if you want a different/current version.
- Review every metric and project description for accuracy and remove anything you cannot comfortably discuss in an interview.
- Add screenshots or public demos to project cards when available.

## Notes

The portfolio does not claim that confidential client work is publicly available. The analytics engineering cards describe representative work based on the supplied resume. The public case-study cards link to the GitHub projects listed in the resume.
