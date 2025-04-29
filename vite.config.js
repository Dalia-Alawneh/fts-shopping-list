import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      '#assets': path?.resolve(__dirname, 'src/assets'),
      '#components': path?.resolve(__dirname, 'src/components'),
      '#pages': path?.resolve(__dirname, 'src/pages'),
    },
  },
})