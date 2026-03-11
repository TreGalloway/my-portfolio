/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#3a4a55',
          100: '#2a3540',
          200: '#222a30',
          300: '#1a2125',
          400: '#1a2125',
          500: '#1a2125',
          600: '#1a2125',
          700: '#1a2125',
          800: '#1a2125',
          900: '#1a2125',
          
          text: '#c9d1d9',
          'text-muted': '#6b7280',
          
          green: '#8FBC8F',
          cyan: '#4ECDC4',
          orange: '#F39C12',
          purple: '#9B59B6',
          red: '#E91E63',
          pink: '#E91E63',
        },
        
        forestlight: {
          50: '#f7f6f3',
          100: '#e5e2d9',
          200: '#d4d0c5',
          300: '#c2bda9',
          400: '#b0ab8e',
          500: '#9e9972',
          600: '#8c8757',
          700: '#7a753b',
          800: '#68531e',
          900: '#564102',
          
          text: '#3d4540',
          'text-muted': '#6b7280',
          
          green: '#5a7a4a',
          cyan: '#3a8a82',
          orange: '#b8860b',
          purple: '#8B5A9C',
          red: '#c74d5c',
        }
      }
    }
  },
  plugins: [],
};
