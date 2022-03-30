import reactRefresh from "@vitejs/plugin-react-refresh";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  base: "/workcation/",
  build: {
    outDir: "docs",
  }
};