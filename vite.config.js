import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// ✅ Correct version for Vercel
export default defineConfig({
  plugins: [react()],
  base: '/itsolution/',
});
