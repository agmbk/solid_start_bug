import { defineConfig, loadEnv } from 'vite';
import solid from 'solid-start/vite';
import solidSvg from 'vite-plugin-solid-svg';
import * as process from 'process';

export default defineConfig(({ mode, command }) => {
	console.info('Mode:', mode, 'command:', command);

	const env = {
		...process.env,
		...loadEnv(mode, process.cwd()),
	};

	const isDev = (truthy: any, falsy?: any) => (env.VITE_ENV === 'development' ? truthy : falsy);

	return {
		define: {
			'process.env': env,
		},
		plugins: [
			solid({
				ssr: true,
				dev: isDev(true, false),
			}),
			solidSvg({
				defaultAsComponent: false,
			}),
		],
		publicDir: 'public',
		build: {
			outDir: 'dist',
			emptyOutDir: true,
			cssMinify: 'lightningcss',
			chunkSizeWarningLimit: 100,
			minify: isDev(false, 'terser'),
			rollupOptions: {
				preserveEntrySignatures: 'allow-extension',
				treeshake: {
					annotations: true,
					preset: 'smallest',
					moduleSideEffects: false,
					propertyReadSideEffects: false,
					tryCatchDeoptimization: false,
					unknownGlobalSideEffects: false,
					usedExports: true,
				},
				output: {
					minifyInternalExports: true,
					chunkFileNames: '[hash:20].js',
					assetFileNames: '[hash:20][extname]',
					compact: true,
					experimentalMinChunkSize: 1000,
				},
			},
		},
		css: {
			lightningcss: {
				targets: {
					android: 5, // Android Browser 5.0 and later
					chrome: 87,  // Chrome 87 and later
					edge: 87,   // Microsoft Edge 87 and later
					firefox: 84, // Firefox 84 and later
					ie: 11,   // Internet Explorer does not fully support HTML5
					ios_saf: 14, // iOS Safari 14.0 and later
					opera: 72,  // Opera 72 and later
					safari: 14,  // Safari 14.0 and later
					samsung: 14.0, // Samsung Internet 14.0 and later
				},
			},
			modules: {
				localsConvention: 'camelCaseOnly',
				generateScopedName: isDev('m[hash:base64:6]_[name]_[local]', 'm[hash:base64:6]'),
			},
			transformer: 'postcss',
		},
		server: {
			proxy: {
				'^/api/.*': env.VITE_API_URL,
			},
			port: +env.VITE_PORT,
			cors: false,
			https: isDev(false, true),
			strictPort: true,
		},
	};
});
