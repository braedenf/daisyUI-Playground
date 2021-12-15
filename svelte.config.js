import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    vite: {
      optimizeDeps: {
        include: ['just-throttle', 'dayjs'],
      },
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
};

export default config;
