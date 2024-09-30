import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-expect-error TODO: TS Expect added because defineConfig dont accept a test object.
  // I could have created a vitest.config.ts separately.
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
