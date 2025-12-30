# MinimizePDF

**MinimizePDF** is a high-performance web application designed to compress large PDF files (200MB+) directly in the browser using WebAssembly technology.

## Features

- **Client-Side Processing**: All compression happens in your browser. No files are uploaded to any server.
- **Deep Compression**: Uses a flattening algorithm to reduce file size by up to 90%.
- **Large File Support**: Optimized for 100MB+ files using `pdf-lib` and `pdfjs-dist` with memory-efficient rendering.
- **Modern UI**: Built with React, TailwindCSS, and framer-motion-like animations.
- **Privacy Focused**: Zero server-side storage.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: TailwindCSS
- **PDF Core**: `pdf-lib`, `pdfjs-dist`
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## License

MIT
