/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Utilities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        borderPrimary:'var(--color-borderPrimary)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          // '2xl': '1800px' 
        },
      },
      screens:{
        "ssm":"300px",
        // "msm":"350px",
        "asm":"400px",
        "msm":"500px",
        "lsm":"900px",
      },
    },
  },
  plugins: [],
};
