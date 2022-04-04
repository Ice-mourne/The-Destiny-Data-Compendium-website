import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],

   resolve: {
      alias: {
         '@interfaces': path.resolve(__dirname, './src/interfaces'),
         '@tools': path.resolve(__dirname, './src/ts/tools'),
         '@ts': path.resolve(__dirname, './src/ts'),
         '@styles': path.resolve(__dirname, './src/styles'),
         '@components': path.resolve(__dirname, './src/components'),
         '@assets': path.resolve(__dirname, './src/assets')
      }
   },
   base: './'
})
