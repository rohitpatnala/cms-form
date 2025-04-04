// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     dedupe: ['react', 'react-dom'],
//   },
//   optimizeDeps: {
//     exclude: ['@cmsgov/design-system'],
//   },
//   build: {
//     commonjsOptions: {
//       exclude: [/node_modules/]
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@cmsgov/design-system/dist/scss/index.scss";`
//       }
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ]
});

