# my-portfolio/README.md

# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Chakra UI.

## Features

- Dark theme with gold accents
- Responsive design
- Smooth animations
- SEO friendly
- Easy to customize

## Project Structure

```
my-portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── styles/      # CSS styles
│   ├── App.tsx      # Main app component
│   └── theme.ts     # Theme configuration
└── ...
```

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables:

   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your information

4. Add your profile image:

   - Place your profile image in `public/img/`
   - Update VITE_PROFILE_IMAGE_URL in `.env`

5. Start the development server:

```bash
npm run dev
```

## Environment Variables

Required environment variables:

- `VITE_NAME`: Your full name
- `VITE_EMAIL`: Your email address
- `VITE_GITHUB_URL`: Your GitHub profile URL
- `VITE_LINKEDIN_URL`: Your LinkedIn profile URL
- `VITE_HANDSHAKE_URL`: Your Handshake profile URL
- `VITE_PROFILE_IMAGE_URL`: Path to your profile image

## Customization

1. Theme: Edit `src/theme.ts` to customize colors and styles
2. Content: Update text in components under `src/components/`
3. Images: Replace placeholder images in `public/img/`

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to your preferred hosting service (Vercel, Netlify, etc.)

## Security Notes

- Never commit `.env` file
- Use environment variables for personal information
- Keep profile images in private storage for production

## License

MIT License - feel free to use this template for your own portfolio!
