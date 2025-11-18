import { writeFileSync } from 'node:fs';

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

writeFileSync('tailwind.config.js', tailwindConfig);
writeFileSync('postcss.config.js', postcssConfig);

console.log('Tailwind config files created successfully!');
