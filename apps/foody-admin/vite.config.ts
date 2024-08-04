/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

const rootDir = path.resolve(__dirname, '..', '..');

export default defineConfig({
  root: __dirname,
  cacheDir: path.join(rootDir, 'node_modules/.vite/apps/foody-admin'),

  server: {
    port: 4201,
    host: 'localhost',
    fs: {
      allow: [rootDir, path.join(rootDir, 'node_modules/@fontsource')],
    },
  },

  preview: {
    port: 4301,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: path.join(rootDir, 'dist/apps/foody-admin'),
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
