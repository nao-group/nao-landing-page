import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Tailwind runs via its Vite plugin here; postcss.config.mjs stays for `next dev`.
  css: { postcss: { plugins: [] } },
  plugins: [
    tailwindcss(),
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  environments: {
    rsc: {
      build: {
        rolldownOptions: {
          // vinext emits __vinext_*.js and vinext-client-assets.js at the bundle root and
          // the worker chunk imports them as "./...", so the chunks must live there too.
          output: { chunkFileNames: "[name]-[hash].js" },
        },
      },
    },
  },
});
