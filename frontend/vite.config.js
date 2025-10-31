/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import tailwindcss from "@tailwindcss/vite";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // define: {
  //   "process.env.VITE_PORT": JSON.stringify(process.env.VITE_PORT),
  // },
  server: {
    port: Number(process.env.VITE_PORT),
    proxy: {
      "/employee": {
        target: "http://localhost", // onde o Nginx está escutando
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/employee/, "/employee"), // mantém o path
      },
    },
  },
});
