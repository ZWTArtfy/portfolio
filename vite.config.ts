import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// GitHub Pages needs /portfolio/, Vercel/EdgeOne needs /
// Set VITE_BASE env var to override, e.g. VITE_BASE=/ npm run build
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: ['ae-show/*', '!ae-show/ae-show-video.mp4'], dest: 'ae-show' },
        { src: 'blender-design/*', dest: 'blender-design' },
        { src: 'brand-font-design/*', dest: 'brand-font-design' },
        { src: ['figma-ui-design/*', '!figma-ui-design/yunbei.pptx'], dest: 'figma-ui-design' },
        { src: 'illustrator-design/*', dest: 'illustrator-design' },
        { src: ['touchdesigner-design/*', '!touchdesigner-design/TDMovieOut.0.mov'], dest: 'touchdesigner-design' },
        { src: 'unreal-engine/*', dest: 'unreal-engine' },
      ],
    }),
  ],
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
