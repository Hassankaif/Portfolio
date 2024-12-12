/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Use the recommended plugin import
    (({ addBase, addComponents, theme }) => {
      const flowbitePlugin = require('flowbite/plugin');
      return flowbitePlugin({ addBase, addComponents, theme });
    })
  ],
}