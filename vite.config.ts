import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks for better caching
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'pdf-vendor': ['pdf-lib', 'pdfjs-dist'],
            'ui-vendor': ['lucide-react'],
          },
        },
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 600,
    },
    base: '/',
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@/src': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/seo': path.resolve(__dirname, './src/seo'),
      }
    }
  };
});
