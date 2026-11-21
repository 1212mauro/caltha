import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths, so the build works under GitHub Pages' /caltha/ subpath or any other host.
export default defineConfig({ base: './', plugins: [react()] });
