import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'ae-show/*', dest: 'ae-show' },
        { src: 'blender-design/*', dest: 'blender-design' },
        { src: 'brand-font-design/*', dest: 'brand-font-design' },
        { src: 'figma-ui-design/*', dest: 'figma-ui-design' },
        { src: 'illustrator-design/*', dest: 'illustrator-design' },
        { src: 'touchdesigner-design/*', dest: 'touchdesigner-design' },
        { src: 'unreal-engine/*', dest: 'unreal-engine' },
      ],
    }),
  ],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
