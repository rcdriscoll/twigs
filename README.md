# Trailside Blog

A blog site built with Astro and styled after 1970s national park posters.

## Features

- **Mobile Responsive Design** - Works beautifully on all devices
- **Markdown Blog Posts** - Write posts in simple markdown format
- **Content Collections** - Type-safe content management with Astro
- **1970s National Park Theme** - Earthy colors, bold typography, vintage aesthetic
- **Fast & Simple** - Zero JavaScript by default, lightning-fast load times

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

The dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Building for Production

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── content/
│   │   └── posts/       # Blog post markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with navigation
│   └── pages/
│       ├── index.astro       # Home page
│       ├── about.astro       # About page
│       └── blog/
│           ├── index.astro   # Blog listing page
│           └── [slug].astro  # Individual blog post template
├── src/content.config.ts     # Content collections configuration
└── astro.config.mjs          # Astro configuration
```

## Adding Blog Posts

Create a new markdown file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: 2024-03-25
author: "Your Name"
---

Your blog post content goes here. You can use all standard markdown features:

- Lists
- **Bold** and *italic* text
- Code blocks
- Links
- And more!
```

The blog post will automatically appear on the `/blog` page.

## Color Palette

The theme uses these colors inspired by national parks:

- **Canyon** (#D4682E) - Rust orange, primary accent
- **Desert** (#E8A565) - Sandy orange
- **Forest** (#2F5233) - Deep green
- **Sky** (#4A90A4) - Blue
- **Sand** (#F4E6D7) - Light beige
- **Dusk** (#8B5A3C) - Brown
- **Cream** (#FFF8E7) - Off-white background

## Navigation

The site includes three main sections:

- **Home** (`/`) - Welcome page with site introduction
- **Blogs** (`/blog`) - List of all blog posts
- **About** (`/about`) - Information about the site

## Deployment

This Astro site can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

See [Astro deployment guides](https://docs.astro.build/en/guides/deploy/) for specific instructions.

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Markdown Guide](https://www.markdownguide.org/)
