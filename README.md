# Portfolio

This website was built using TypeScript, React, Next.js and Tailwind CSS. It is designed to showcase my professional experience and skills, as well as provide information about me and my interests.

## Project structure

- `components/` - All the components of the website in tsx format.
- `lib/` - Useful functions and scripts for connecting to external services and so on.
- `pages/writing/` - Blog posts written in MDX format (Markdown in JSX).
- `pages/` - Contains all other static pages like about, projects and tools.
- `prisma/` - Prisma schema which describes the structure of the Supabase postgres database.
- `public/` - Used for static files such as icons and images.
- `styles/` - Contains the stylesheets for Tailwind and Prism.
- `types/` - Types for various components in the project.

## Running locally

This application requires node v16.14+.

```bash
git clone https://github.com/mohamadomran/portfolio.git
cd portfolio/
npm i
npm run dev
```

Create a `.env.local` file using `.env.example` as a template.
