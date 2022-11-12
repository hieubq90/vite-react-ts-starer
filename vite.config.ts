import * as path from 'path'
import react from '@vitejs/plugin-react'
// loader helpers
import AutoImport from 'unplugin-auto-import/vite'
import {FileSystemIconLoader} from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ['my-icons'],
          extension: 'jsx',
        }),
      ],
    }),
    Icons({
      customCollections: {
        // key as the collection name
        // 'my-icons': {
        //   // load your custom icon lazily
        //   settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8'),
        //   /* ... */
        // },
        // 'my-remote-icons': async (iconName) =>
        //   // your custom loader here. Do whatever you want.
        //   // for example, fetch from a remote server:
        //   await fetch(`https://example.com/icons/${iconName}.svg`).then((res) =>
        //     res.text()
        //   ),
        // a helper to load icons from the file system
        // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
        // you can also provide a transform callback to change each icon (optional)
        'my-icons': FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
      scale: 1,
      defaultStyle: '',
      defaultClass: 'my-icon',
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
