import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'background': 'image-hero',
        'text': 'text-hero'
      },
      keyframes: {
        'image-hero': {
          '0%': { transform: 'scale(1)', filter: 'grayscale(0.5)' },
          '100%': { transform: 'scale(1.5)', filter: 'grayscale(1) brightness(0)' },
        },
        'text-hero': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(35vh)' }
        }
      }
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.animate-scroll': {
          animationTimeline: 'view()',
          animationRange: 'exit'
        },
        '.text-shadow-sm': {
          textShadow: '2px 2px 4px var(--tw-shadow-color)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 6px var(--tw-shadow-color)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 8px var(--tw-shadow-color)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    }
  ],
}
