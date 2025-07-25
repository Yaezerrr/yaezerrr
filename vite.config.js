import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yaezerrr/' // ✅ exact match to your GitHub repo name
});
