import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        doodle: ['"ZCOOL KuaiLe"', '"Ma Shan Zheng"', 'cursive'],
        body: ['"Noto Sans SC"', 'sans-serif'],
      },
      colors: {
        paper: '#fffef9',
        'paper-2': '#fdf6f0',
        'paper-3': '#f5faf7',
        ink: '#3d3226',
        'text-primary': '#5c4b3c',
        'text-secondary': '#8b7b6b',
        'text-muted': '#b0a595',
        peach: {
          light: '#fde8da',
          DEFAULT: '#f5c6aa',
          dark: '#e0a880',
        },
        coral: {
          light: '#fde0e0',
          DEFAULT: '#f0a5a5',
        },
        mint: {
          light: '#d8f0e8',
          DEFAULT: '#a8d8c8',
          dark: '#78b898',
        },
        sky: {
          light: '#d8e8f8',
          DEFAULT: '#a8c8e8',
          dark: '#78a0c0',
        },
        lavender: {
          light: '#e8e0f5',
          DEFAULT: '#c8b8e0',
          dark: '#a890c0',
        },
        yellow: {
          light: '#fdf5d8',
          DEFAULT: '#f5e0a0',
          dark: '#d0b870',
        },
        rose: {
          light: '#f8e4e8',
          DEFAULT: '#e8b8c0',
          dark: '#c88898',
        },
        doodle: {
          DEFAULT: '#8b7355',
          thin: '#c4b8a8',
        },
      },
      borderRadius: {
        organic: '24px 12px 24px 12px',
        doodle: '12px 24px 8px 20px',
      },
      boxShadow: {
        doodle: '3px 3px 0 rgba(139,115,85,0.1)',
        'doodle-hover': '5px 8px 0 rgba(180,165,140,0.15)',
        card: '2px 3px 0 rgba(180,165,140,0.1)',
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'bounce-emoji': 'bounceEmoji 1.5s ease-in-out infinite',
        'float-cloud': 'floatCloud 4s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'pop-in': 'popIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-8deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        bounceEmoji: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatCloud: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          from: { transform: 'scale(0.8) rotate(-2deg)', opacity: '0' },
          to: { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
