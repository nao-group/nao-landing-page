import { bindings, defineConfig, defineWorker } from "cf/config";

// Each Cloudflare Worker (production / staging) must set WORKER_NAME as a *build* variable
// (Settings > Build > Variables and secrets) to its own Worker name; `cf deploy` fails if
// this name differs from the Worker it deploys to.
const workerName = process.env.WORKER_NAME ?? "nao-landing-page";

export default defineConfig({
  worker: defineWorker({
    name: workerName,
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-15",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      // In `vite dev`, worker-first routing makes the Worker 404 Vite-served
      // files (/node_modules/*.css, /app/*.css, /public/*), so pages render unstyled.
      ...(process.env.VINEXT_DEV
        ? {}
        : { runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"] }),
    },
    previewUrls: false,
    env: {
      ASSETS: bindings.assets(),
      // Declared here so `cf deploy --strict` doesn't see them as dashboard-only drift.
      WORKER_NAME: bindings.text(workerName),
      NEXT_PUBLIC_MEMBER_URL: bindings.text(
        process.env.NEXT_PUBLIC_MEMBER_URL ?? "https://thinknao-web.nao-group.workers.dev",
      ),
    },
  }),
});
