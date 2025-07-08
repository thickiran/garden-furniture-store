# Garden Furniture Store

A modern e-commerce website for premium garden furniture built with Vite, React, and TypeScript. Inspired by the design of fabco.com.tr with a focus on clean aesthetics and user experience.

## Features

- 🌿 Modern, responsive design with Tailwind CSS
- 🛒 Shopping cart with localStorage persistence
- 🎨 Custom color palette inspired by Fabco design
- 📱 Mobile-first responsive layout
- 🎯 Product filtering and search functionality
- 🔍 Product detail pages with 3D model viewer
- 📦 TypeScript for type safety
- ⚡ Fast development with Vite

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **3D Models:** Three.js with React Three Fiber
- **State Management:** Context API
- **SEO:** React Helmet

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd garden-furniture-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
garden-furniture-store/
├── public/
│   ├── images/
│   │   ├── hero1.jpg          # Hero carousel images
│   │   ├── hero2.jpg
│   │   ├── hero3.jpg
│   │   └── products/          # Product images
├── src/
│   ├── assets/
│   │   ├── models/            # 3D GLB model files
│   │   └── color-swatch.png
│   ├── components/
│   │   ├── NavBar.tsx         # Navigation with mega menu
│   │   ├── HeroCarousel.tsx   # Auto-advancing hero section
│   │   ├── ProductCard.tsx    # Product display card
│   │   ├── ProductGrid.tsx    # Product grid with filtering
│   │   └── Footer.tsx         # Site footer
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── Products.tsx       # Product listing page
│   │   ├── ProductDetails.tsx # Individual product page
│   │   └── About.tsx          # About page
│   ├── data/
│   │   └── products.json      # Sample product data
│   ├── hooks/
│   │   └── useCart.ts         # Cart management hook
│   ├── context/
│   │   └── CartContext.tsx    # Global cart state
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Color Palette

The design uses a sophisticated color scheme inspired by Fabco:

- **Primary:** `#193425` (Deep forest green)
- **Secondary:** `#D3B277` (Brass/gold accent)
- **Surface:** `#FFFFFF` (White background)
- **Muted:** `#F5F5F5` (Light gray)
- **Text:** `#262626` (Dark gray)

## Customization

### Adding New Products

1. Add product images to `public/images/products/`
2. Add 3D models to `src/assets/models/`
3. Update `src/data/products.json` with new product data

### Swapping Images and Models

To replace placeholder content with actual assets:

1. **Hero Images:** Replace `public/images/hero1.jpg`, `hero2.jpg`, `hero3.jpg` with high-quality hero images
2. **Product Images:** Add product photos to `public/images/products/` and update the `image` field in `products.json`
3. **3D Models:** Replace GLB files in `src/assets/models/` and update the `model` field in `products.json`
4. **Color Swatch:** Replace `src/assets/color-swatch.png` with your color palette image

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: '#193425',    // Your primary color
  secondary: '#D3B277',  // Your accent color
  surface: '#FFFFFF',    // Background color
  muted: '#F5F5F5',     // Muted backgrounds
  text: '#262626'       // Text color
}
```

## Performance Optimizations

- Images are lazy-loaded and optimized
- 3D models are loaded on-demand
- Components use React.memo where appropriate
- Cart state is persisted to localStorage

## SEO Features

- Semantic HTML structure
- Meta tags with React Helmet
- Proper heading hierarchy
- Alt text for images
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Note:** This is a demonstration project. Replace placeholder images and 3D models with actual assets for production use.