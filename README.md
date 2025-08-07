# Video Gallery App

A responsive video gallery application built with React, TypeScript, and Tailwind CSS. This app displays a grid of video cards that can be clicked to open in a modal or viewed on YouTube.

## Features

- Responsive grid layout that works on mobile and desktop
- Video preview with play button overlay
- Modal popup for watching videos
- Direct link to YouTube
- Smooth animations and transitions
- Mobile-first design

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Adding Videos

Edit the `videos` array in `src/App.tsx` to add or modify the displayed videos:

```typescript
const videos = [
  {
    id: 'YOUR_VIDEO_ID', // YouTube video ID
    title: 'Video Title',
  },
  // Add more videos...
];
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons for React
- [React Modal](https://www.npmjs.com/package/react-modal) - Accessible modal dialog component

## License

This project is open source and available under the [MIT License](LICENSE).
