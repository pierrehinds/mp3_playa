import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that runs your React app in development
// and bundles it for production. This config is intentionally minimal.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
