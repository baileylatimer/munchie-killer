# Munchie Killer - Shopify Theme

A Shopify theme based on the Horizon theme with Tailwind CSS integration.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm
- Shopify CLI (for theme development)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build Tailwind CSS:
```bash
npm run build
```

## 🛠️ Development Workflow

### Available Scripts

**Development Scripts:**
- **`npm start`** - Start development with Tailwind watch mode and Shopify theme dev (uses default store)
- **`npm run start:munchie`** - Start development for munchie-killer store specifically
- **`npm run start:ogio`** - Start development for ogio-dev store specifically
- **`npm run dev`** - Run Tailwind in watch mode only
- **`npm run dev:shopify`** - Run Shopify theme dev only (uses default store)
- **`npm run dev:shopify:munchie`** - Run Shopify theme dev for munchie-killer store
- **`npm run dev:shopify:ogio`** - Run Shopify theme dev for ogio-dev store

**Build Scripts:**
- **`npm run build`** - Build production-ready Tailwind CSS (minified)
- **`npm run tailwind:watch`** - Watch Tailwind changes during development
- **`npm run tailwind:build`** - Build Tailwind CSS for production

### Recommended Development Process

1. **Start development server:**
```bash
npm start
```
This will:
- Watch for Tailwind CSS changes and automatically rebuild
- Start Shopify theme development server (if you have Shopify CLI installed)

2. **If you only want to work on styles:**
```bash
npm run dev
```

3. **Before deploying:**
```bash
npm run build
```

## 📁 Project Structure

```
├── src/
│   ├── input.css          # Tailwind input file
│   ├── scripts/           # Custom JavaScript
│   └── styles/            # Additional styles
├── assets/
│   ├── tailwind.css       # Compiled Tailwind CSS (auto-generated)
│   └── ...                # Other theme assets
├── layout/                # Shopify layout files
├── templates/             # Shopify template files
├── sections/              # Shopify sections
├── snippets/              # Shopify snippets
├── blocks/                # Shopify blocks
└── config/                # Theme configuration
```

## 🎨 Tailwind CSS Configuration

The theme is configured with:
- **Prefix:** `tw-` (to avoid conflicts with Shopify styles)
- **Shopify-optimized breakpoints:** Matching Shopify's responsive design patterns
- **Custom font family:** Neue Montreal
- **CSS variables integration:** For Shopify color schemes
- **Custom animations:** Fade-in, slide-up, slide-down

### Using Tailwind in Templates

Since we're using the `tw-` prefix, all Tailwind classes must be prefixed:

```liquid
<div class="tw-bg-primary tw-text-white tw-p-4 tw-rounded-lg">
  <h2 class="tw-text-2xl tw-font-bold">Hello World</h2>
</div>
```

## 🔧 Customization

### Adding Custom Styles
Add your custom Tailwind components and utilities in `src/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom components */
@layer components {
  .tw-btn-primary {
    @apply tw-bg-primary tw-text-white tw-px-4 tw-py-2 tw-rounded;
  }
}
```

### Modifying Tailwind Config
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Breakpoints
- Spacing
- Animations

## 🔍 Troubleshooting

### CSS Not Updating
1. Make sure the development server is running: `npm run dev`
2. Check that your liquid files are included in the `content` array in `tailwind.config.js`
3. Verify you're using the `tw-` prefix for all Tailwind classes

### Build Issues
1. Clear the compiled CSS: `rm assets/tailwind.css`
2. Rebuild: `npm run build`
3. Update browserslist if prompted: `npx update-browserslist-db@latest`

## 📝 Notes

- The compiled `tailwind.css` file in the assets folder is auto-generated - don't edit it directly
- Always use the `tw-` prefix for Tailwind classes to avoid conflicts with Shopify's default styles
- Custom fonts (Neue Montreal) are included in the assets folder
- The theme includes PostCSS with Autoprefixer for better browser compatibility

## 🚀 Deployment

Before deploying to production:

1. Build the final CSS:
```bash
npm run build
```

2. Deploy using Shopify CLI or your preferred method
3. The `tailwind.css` file will be included in your theme deployment

---

Happy coding! 🎉
