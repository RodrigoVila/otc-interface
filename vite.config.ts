import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// TODO: Even if we are not using the import defineConfigTest,
// vite recognizes it and type the "test" object.
// Try removing the below line
import { defineConfig as defineConfigTest } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/app/setupTest.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
