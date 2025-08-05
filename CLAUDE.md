# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run lint` - Run ESLint with React hooks and TypeScript rules
- `npm run preview` - Preview production build
- No test command configured - tests would need to be added

## Architecture Overview

This is a modern React/TypeScript e-commerce application for garden furniture built with Vite. The architecture follows a component-based design with React Context for state management.

### Key Architectural Patterns

**State Management**
- React Context API with useReducer for cart management
- ThemeContext with 4 predefined themes using CSS custom properties
- localStorage persistence for cart state
- Custom hooks (useCart) for clean component interfaces

**Component Structure**
- Pages: Home, Products, ProductDetails, About
- Reusable components with TypeScript interfaces
- Context providers wrap the entire app (CartProvider, ThemeProvider)
- React Router DOM for client-side routing

**Styling System**
- Tailwind CSS with custom CSS variables for theming
- Glass morphism effects with built-in utility classes
- Responsive design with mobile-first approach
- Dynamic theme switching via CSS custom properties

### Data Architecture

**Product Data** (`/src/data/products.json`)
- Static JSON file with rich product metadata
- Supports both local GLB files and external 3D viewer embeds
- Includes category, features, pricing, and model information
- Ready for REST API integration

**3D Model Integration**
- Three.js/React Three Fiber for GLB model rendering
- Embedded iframe support for external 3D viewers (Veewer)
- Suspense boundaries for lazy loading
- Models stored in `/src/assets/models/`

### Context Providers

**CartContext** (`/src/context/CartContext.tsx`)
- Complete cart management with reducer pattern
- Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART
- Automatic localStorage persistence
- TypeScript interfaces for all cart operations

**ThemeContext** (`/src/context/ThemeContext.tsx`)
- Four themes: default, sophisticated, modern, dark
- CSS custom properties for dynamic styling
- Theme switching applies to entire application
- Integrated with Tailwind CSS color system

### Important Files

**Configuration**
- `vite.config.ts` - Vite configuration with React plugin and port 3000
- `tailwind.config.js` - Tailwind configuration with custom color extensions
- `tsconfig.json` - TypeScript configuration with strict mode

**Core Components**
- `App.tsx` - Main router with provider wrapping
- `NavBar.tsx` - Navigation with mega menu and theme switcher
- `ProductCard.tsx` - Product display component used throughout
- `HeroCarousel.tsx` - Hero section with glass morphism effects

## Development Notes

**Technology Stack**
- React 19.1.0 with TypeScript
- Vite 7.0.0 for build tooling
- Tailwind CSS 4.1.11 for styling
- React Router DOM 7.6.3 for routing
- Three.js + React Three Fiber for 3D models

**Performance Considerations**
- Lazy loading implemented for 3D models
- Image error handling with fallback placeholders
- localStorage for cart persistence
- Component memoization opportunities available

**Browser Requirements**
- Modern browsers (Chrome, Firefox, Safari, Edge latest)
- WebGL support required for 3D features
- ES2022 target in TypeScript configuration

## Common Development Tasks

**Adding New Products**
- Update `/src/data/products.json` with product data
- Add GLB model to `/src/assets/models/` if using local models
- Ensure image paths are correct in `/public/images/products/`

**Theme Customization**
- Modify theme objects in `/src/context/ThemeContext.tsx`
- Update CSS custom properties in `/src/index.css`
- Add new theme options to ThemeSwitcher component

**Component Development**
- Use TypeScript interfaces for all props
- Follow existing naming conventions and file structure
- Implement error boundaries for components with external dependencies
- Use CSS custom properties for themeable styles

## Setup Requirements

- Node.js v18+ recommended
- npm package manager (package-lock.json present)
- Development server runs on port 3000
- Public folder for static assets, src/assets for 3D models