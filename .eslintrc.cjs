module.exports = {
  // ...
  extends: [
    // ...
    'plugin:astro/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // ...
  overrides: [
    {
      files: ['astro.config.mjs', 'tailwind.config.mjs'],
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
}
