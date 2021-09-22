import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteSvgIcons from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "icon-[dir]-[name]"
    })
  ]
});
