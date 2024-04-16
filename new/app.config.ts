import { defineConfig } from '@solidjs/start/config';
import solidSvg from 'vite-plugin-solid-svg';
import { loadEnv } from 'vite';

export default defineConfig({
	ssr: true,
	middleware: './src/middleware.ts',
	vite({ router }) {
		const env = {
			...process.env,
			...loadEnv('', process.cwd()),
			...loadEnv('development', process.cwd()),
		};

		console.log(`Mode: ${env.VITE_ENV} | Router: ${router}`);

		const isDev = (truthy: any, falsy?: any) => (env.VITE_ENV === 'development' ? truthy : falsy);
		const isClient = (truthy: any, falsy?: any) => (router === 'client' ? truthy : falsy);

		return {
			plugins: [
				solidSvg({
					defaultAsComponent: false,
				}),
			],
			css: {
				modules: {
					localsConvention: 'camelCaseOnly',
					generateScopedName: isDev(undefined, 'm[hash:base64:6]'),
				},
				transformer: 'postcss',
			},
			build: {
				emptyOutDir: true,
				chunkSizeWarningLimit: isClient(50),
				minify: isDev(false, isClient('esbuild')),
				rollupOptions: {
					output: {
						chunkFileNames: isClient('[hash:10].js'),
						assetFileNames: '[hash:10][extname]',
						experimentalMinChunkSize: isClient(1500),
					},
				},
			},
			server: {
				proxy: {
					'^/api/.*': 'http://localhost:3001',
				},
			},
		};
	},
});
