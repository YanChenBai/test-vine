import antfu from '@antfu/eslint-config'
import * as VueVineESLintParser from '@vue-vine/eslint-parser'

export default antfu(
  {
    formatters: true,
    unocss: true,
    vue: true,
    stylistic: false,
    ignores: ['.gitignore'],
  },
  {
    files: [
      'src/**/*.vine.ts',
    ],
    languageOptions: {
      parser: VueVineESLintParser,
    },
    rules: {
      // ... Customize rules here
    },
  },
)
