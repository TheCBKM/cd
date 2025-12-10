import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
        accent: ['Montserrat Alternates', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: '1rem', // 16px
        md: 'calc(1rem - 4px)', // 12px
        sm: 'calc(1rem - 8px)', // 8px
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 8px 0 rgba(0,0,0,0.05)',
        md: '0 6px 12px 0 rgba(0,0,0,0.06)',
        lg: '0 10px 20px 0 rgba(0,0,0,0.07)',
        xl: '0 20px 40px 0 rgba(0,0,0,0.08)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'zoom-in': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        'gradient-rotate': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'rotate-3d': {
          '0%': {
            transform: 'rotateY(0deg) rotateX(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg) rotateX(360deg)',
          },
        },
        'tilt-3d': {
          '0%, 100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          },
          '25%': {
            transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          },
          '75%': {
            transform: 'perspective(1000px) rotateX(-5deg) rotateY(-5deg)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'flip-in': {
          '0%': {
            opacity: '0',
            transform: 'rotateY(-90deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotateY(0deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'zoom-in': 'zoom-in 15s ease-out forwards alternate infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'gradient-rotate': 'gradient-rotate 8s ease infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'tilt-3d': 'tilt-3d 6s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'flip-in': 'flip-in 0.6s ease-out',
      },
      perspective: {
        '1000': '1000px',
        '500': '500px',
        '2000': '2000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
        visible: 'visible',
      },
      transitionDuration: {
        '220': '220ms',
        '180': '180ms',
        '300': '300ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
