import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";
import devtoolsJson from 'vite-plugin-devtools-json';

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "soulfisher-designs",
  project: "jsm_travel_agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config), devtoolsJson()],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    },
    build: {
      assetInlineExclude: ['favicon.ico']
    }
  };
});
