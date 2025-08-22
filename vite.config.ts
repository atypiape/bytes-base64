import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import { ModuleKind } from 'typescript';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'BytesBase64',
      fileName: 'index'
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true, // 自动生成入口类型文件
      outDir: './dist',
      compilerOptions: {
        module: ModuleKind.AMD,
      }
    }),
    tsconfigPaths(),
  ],
  root: path.resolve(__dirname),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'lib'),
      '@dist': path.resolve(__dirname, 'dist'),
    },
  },
})
