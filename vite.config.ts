import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    unocss({
      //美化  不用class 直接书写类名
      //工具  集合tailwind等其他的类名
      presets: [presetAttributify(), presetUno()],
      rules: [
        ['bbc', { 'border-bottom': '1px solid #efefef' }],
        ['red', { color: 'red' }],
        //支持动态规则 m-1表示margin:10px
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
      ],
      //支持多个类名组合在一起
      shortcuts: {
        haha: ['flex', 'red'],
      },
    }),
    AutoImport({
      //此处需要导入什么就写什么
      imports: ['vue'],
      //此处是生成的位置
      dts: 'src/auto-import.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
