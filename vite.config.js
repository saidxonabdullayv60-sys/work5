import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite konfiguratsiyasi — bu fayl "qanday build qilish" qoidalarini beradi.
// Odatda o'zgartirish shart emas.
export default defineConfig({
  plugins: [react()],
})
