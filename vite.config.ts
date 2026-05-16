import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub user site repository named abhiksingh28.github.io, keep base as "/".
// If deploying to a project repository, change base to "/repository-name/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
