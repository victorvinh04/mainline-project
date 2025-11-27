# shadcn-admin

A modern, feature-rich admin dashboard template built with React, TypeScript, and Tailwind CSS. This project provides a solid foundation for building administrative interfaces with beautiful UI components, authentication, and data management.

## Features

- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS for accessible, customizable components
- 🔐 **Authentication** - Integrated with Clerk for secure user authentication
- 🚀 **Fast Development** - Powered by Vite for lightning-fast HMR and builds
- 📊 **Data Management** - TanStack Query for powerful server state management
- 📱 **Responsive Design** - Mobile-first, fully responsive layout
- 🧭 **Type-Safe Routing** - TanStack Router with end-to-end type safety
- 📋 **Advanced Tables** - Feature-rich data tables with TanStack Table
- 🎯 **Form Handling** - React Hook Form with Zod validation
- 📈 **Charts & Analytics** - Recharts integration for data visualization
- 🎭 **Dark Mode** - Built-in dark mode support
- 📦 **Production Ready** - ESLint, Prettier, and TypeScript for code quality

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Routing**: TanStack Router
- **State Management**: Zustand, TanStack Query
- **Authentication**: Clerk
- **Forms**: React Hook Form + Zod
- **API Client**: Axios
- **Charts**: Recharts
- **Code Quality**: ESLint, Prettier, TypeScript

## Project Structure

```
shadcn-admin/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   ├── types/            # TypeScript type definitions
│   ├── styles/           # Global styles
│   └── App.tsx           # Main app component
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or yarn package manager

### Installation

1. **Clone the repository** (already done)

   ```bash
   git clone https://github.com/satnaing/shadcn-admin.git
   cd shadcn-admin
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   yarn install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Add your Clerk API keys:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

## Available Scripts

- **`npm run dev`** - Start development server with hot module replacement
- **`npm run build`** - Build for production (type-check + optimize)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check code formatting without changes
- **`npm run knip`** - Find unused files and dependencies

## Configuration Files

### `vite.config.ts`

Vite configuration with React SWC plugin for fast compilation.

### `tsconfig.json`

TypeScript configuration with strict mode enabled for type safety.

### `tailwind.config.ts`

Tailwind CSS configuration for customizing colors, fonts, and utilities.

### `components.json`

shadcn/ui configuration for component generation.

## Key Features Explained

### Authentication

The project uses Clerk for authentication. Components are protected with `<SignedIn>` and `<SignedOut>` wrappers.

### State Management

- **Zustand** - Lightweight client-side state management
- **TanStack Query** - Server state management with caching and synchronization

### Data Fetching

Axios is configured for API requests with proper error handling and interceptors.

### Form Validation

React Hook Form combined with Zod for schema validation provides type-safe form handling.

### UI Components

All components follow shadcn/ui design patterns and are fully customizable through Tailwind CSS.

## Development Best Practices

1. **Use TypeScript** - Enable strict mode for better type safety
2. **Component Organization** - Keep components small and focused on single responsibility
3. **Custom Hooks** - Extract complex logic into reusable hooks
4. **API Integration** - Use TanStack Query for server state management
5. **Form Handling** - Use React Hook Form with Zod for validation
6. **Styling** - Leverage Tailwind CSS utility classes and custom components
7. **Code Quality** - Run linter and formatter before committing

## Performance Optimization

- Vite's built-in code splitting and lazy loading
- React's built-in optimization features
- Tailwind CSS purging unused styles
- Image optimization through asset handling
- API response caching with TanStack Query

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

### Deployment Platforms

The project can be deployed to:

- **Vercel** - Recommended for optimal performance
- **Netlify** - Seamless GitHub integration
- **GitHub Pages** - For static hosting
- **Self-hosted** - Docker-ready

### Environment Variables

Set these in your deployment platform:

- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication key

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

Please be respectful and constructive in all interactions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful component library
- [TailwindCSS](https://tailwindcss.com/) - For utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Clerk](https://clerk.com/) - For authentication solutions
- All contributors who have helped with bug fixes and improvements

## Support

For questions, issues, or feedback:

- Open an [Issue](https://github.com/satnaing/shadcn-admin/issues)
- Check existing [Discussions](https://github.com/satnaing/shadcn-admin/discussions)
- Visit the original [GitHub Repository](https://github.com/satnaing/shadcn-admin)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and notable changes.

---

**Happy coding! 🚀**

**Setup **

# Shadcn Admin Dashboard

Admin Dashboard UI crafted with Shadcn and Vite. Built with responsiveness and accessibility in mind.

![alt text](public/images/shadcn-admin.png)

[![Sponsored by Clerk](https://img.shields.io/badge/Sponsored%20by-Clerk-5b6ee1?logo=clerk)](https://go.clerk.com/GttUAaK)

I've been creating dashboard UIs at work and for my personal projects. I always wanted to make a reusable collection of dashboard UI for future projects; and here it is now. While I've created a few custom components, some of the code is directly adapted from ShadcnUI examples.

> This is not a starter project (template) though. I'll probably make one in the future.

## Features

- Light/dark mode
- Responsive
- Accessible
- With built-in Sidebar component
- Global search command
- 10+ pages
- Extra custom components
- RTL support

<details>
<summary>Customized Components (click to expand)</summary>

This project uses Shadcn UI components, but some have been slightly modified for better RTL (Right-to-Left) support and other improvements. These customized components differ from the original Shadcn UI versions.

If you want to update components using the Shadcn CLI (e.g., `npx shadcn@latest add <component>`), it's generally safe for non-customized components. For the listed customized ones, you may need to manually merge changes to preserve the project's modifications and avoid overwriting RTL support or other updates.

> If you don't require RTL support, you can safely update the 'RTL Updated Components' via the Shadcn CLI, as these changes are primarily for RTL compatibility. The 'Modified Components' may have other customizations to consider.

### Modified Components

- scroll-area
- sonner
- separator

### RTL Updated Components

- alert-dialog
- calendar
- command
- dialog
- dropdown-menu
- select
- table
- sheet
- sidebar
- switch

**Notes:**

- **Modified Components**: These have general updates, potentially including RTL adjustments.
- **RTL Updated Components**: These have specific changes for RTL language support (e.g., layout, positioning).
- For implementation details, check the source files in `src/components/ui/`.
- All other Shadcn UI components in the project are standard and can be safely updated via the CLI.

</details>

## Tech Stack

**UI:** [ShadcnUI](https://ui.shadcn.com) (TailwindCSS + RadixUI)

**Build Tool:** [Vite](https://vitejs.dev/)

**Routing:** [TanStack Router](https://tanstack.com/router/latest)

**Type Checking:** [TypeScript](https://www.typescriptlang.org/)

**Linting/Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

**Icons:** [Lucide Icons](https://lucide.dev/icons/), [Tabler Icons](https://tabler.io/icons) (Brand icons only)

**Auth (partial):** [Clerk](https://go.clerk.com/GttUAaK)

## Run Locally

Clone the project

```bash
  git clone https://github.com/satnaing/shadcn-admin.git
```

Go to the project directory

```bash
  cd shadcn-admin
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
```
