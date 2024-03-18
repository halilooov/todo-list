import path from 'path'

import { defineConfig } from 'vite'

import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'
import { reactClickToComponent } from 'vite-plugin-react-click-to-component'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [reactClickToComponent(), react(), svgr(), eslint()],
  css: {
    preprocessorOptions: { less: { globalVars: { customBlack: '#0f0f0f' } } },
  },
  base: '/',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      assets: path.join(__dirname, 'src', 'assets'),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    outDir: 'build',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
  },
})
