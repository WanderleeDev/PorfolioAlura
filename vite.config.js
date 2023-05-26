import { defineConfig } from "vite";

export default defineConfig({
  alias:{
    '@': '/assets'  
  },
  css:{
    preprocessorOptions:{
      scss:{
      }
    }
  }
});