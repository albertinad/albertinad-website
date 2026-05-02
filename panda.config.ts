import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: false,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',

  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: "'DM Sans', system-ui, sans-serif" },
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dotBreathe: {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '30%': { opacity: '1', transform: 'scale(1)' },
          '60%': { opacity: '0.4', transform: 'scale(0.85)' },
          '100%': { opacity: '0', transform: 'scale(0.6)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
      },
    },
  },
})
