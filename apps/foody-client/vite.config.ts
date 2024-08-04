/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

const rootDir = path.resolve(__dirname, '..', '..');

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/foody-client',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: [rootDir, path.join(rootDir, 'node_modules/@fontsource')],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/foody-client',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
