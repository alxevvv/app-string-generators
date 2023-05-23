import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"

const ghPagesBaseUrl = "https://alxevvv.github.io/app-string-generators"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? ghPagesBaseUrl : "",
  plugins: [vue()],
})
