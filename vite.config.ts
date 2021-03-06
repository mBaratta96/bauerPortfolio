import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
	const isDev = configEnv.mode === "development";
	return {
		plugins: [react()],
		css: {
			modules: {
				generateScopedName: isDev
					? "[name]__[local]__[hash:base64:5]"
					: "[hash:base64:5]",
			},
		},
		build: {
			chunkSizeWarningLimit: 1600,
			target: "es2020",
		},
		base: "/bauerPortfolio/",
	};
});
