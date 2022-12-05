import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        coletaSele: resolve(root, 'components/ColetaSele/index.html'),
        coletaPJ: resolve(root, 'components/ColetaPJ/index.html'),
        abraFili: resolve(root, 'components/AbraFili/index.html'),
        faleConosco: resolve(root, 'components/FaleConosco/index.html'),
        gestaoResi: resolve(root, 'components/GestaoResi/index.html'),
        logisticaRev: resolve(root, 'components/LogisticaRev/index.html'),
        quemSomos: resolve(root, 'components/QuemSomos/index.html'),
        trabalheConosco: resolve(root, 'components/TrabalheConosco/index.html'),
        agradecimento: resolve(root, 'components/Agradecimento/index.html'),
      }
    }
  }
})
