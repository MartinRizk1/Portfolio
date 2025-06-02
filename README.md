# My Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Chakra UI, featuring a sleek dark theme and smooth animations.

Welcome to my personal portfolio website! This project showcases my skills, experience, and contact information.

## Project Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Reusable components for the website.
    - `About.tsx`: Displays a description about me.
    - `Contact.tsx`: Contains my contact information.
    - `Hero.tsx`: Displays my picture and a brief description.
    - `Layout.tsx`: Wraps the main layout of the website.
    - `Navbar.tsx`: Contains navigation links.
    - `Skills.tsx`: Displays my skill set in a grid format.
  - **styles/**: Contains CSS styles for the components.
    - `index.css`: Styles for the overall layout and components.
  - `App.tsx`: The main application component.
  - `main.tsx`: Entry point of the application.
  - `vite-env.d.ts`: TypeScript definitions for Vite.

- **public/**: Contains static files.
  - `index.html`: Main HTML file for the application.

- `index.html`: Additional HTML file for fallback or routing.

- `package.json`: Configuration file for npm.

- `tsconfig.json`: Configuration file for TypeScript.

- `vite.config.ts`: Configuration file for Vite.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-portfolio
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Features

- 🌙 Dark theme with professional styling
- 💻 Computer engineering focus
- 🎯 Skills grid showcasing technical expertise
- 🚀 Projects showcase
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Contact section with social links

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/MartinRizk1/Portfolio.git
cd Portfolio
```

2. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Then update the `.env` file with your personal information.

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Deployment to Vercel

1. Create an account on [Vercel](https://vercel.com) if you haven't already

2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel
```

### Environment Variables

Make sure to add these environment variables in your Vercel project settings:

- `VITE_EMAIL`
- `VITE_GITHUB_URL`
- `VITE_LINKEDIN_URL`
- `VITE_HANDSHAKE_URL`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT © Martin Rizk