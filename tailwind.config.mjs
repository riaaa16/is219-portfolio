/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // New Pastel Color Palette from about.png
        "dark-blue": "#1248de",
        "pastel-blue": {
          DEFAULT: "hsl(var(--pastel-blue))",
          50: "hsl(var(--pastel-blue-50))",
          100: "hsl(var(--pastel-blue-100))",
          200: "hsl(var(--pastel-blue-200))",
          300: "hsl(var(--pastel-blue-300))",
          400: "hsl(var(--pastel-blue-400))",
          500: "hsl(var(--pastel-blue-500))",
          600: "hsl(var(--pastel-blue-600))",
          700: "hsl(var(--pastel-blue-700))",
          800: "hsl(var(--pastel-blue-800))",
          900: "hsl(var(--pastel-blue-900))",
        },
        "pastel-yellow": {
          DEFAULT: "hsl(var(--pastel-yellow))",
          50: "hsl(var(--pastel-yellow-50))",
          100: "hsl(var(--pastel-yellow-100))",
          200: "hsl(var(--pastel-yellow-200))",
          300: "hsl(var(--pastel-yellow-300))",
          400: "hsl(var(--pastel-yellow-400))",
          500: "hsl(var(--pastel-yellow-500))",
          600: "hsl(var(--pastel-yellow-600))",
          700: "hsl(var(--pastel-yellow-700))",
          800: "hsl(var(--pastel-yellow-800))",
          900: "hsl(var(--pastel-yellow-900))",
        },
        "pastel-pink": {
          DEFAULT: "hsl(var(--pastel-pink))",
          50: "hsl(var(--pastel-pink-50))",
          100: "hsl(var(--pastel-pink-100))",
          200: "hsl(var(--pastel-pink-200))",
          300: "hsl(var(--pastel-pink-300))",
          400: "hsl(var(--pastel-pink-400))",
          500: "hsl(var(--pastel-pink-500))",
          600: "hsl(var(--pastel-pink-600))",
          700: "hsl(var(--pastel-pink-700))",
          800: "hsl(var(--pastel-pink-800))",
          900: "hsl(var(--pastel-pink-900))",
        },
        "charcoal": {
          DEFAULT: "hsl(var(--charcoal))",
          50: "hsl(var(--charcoal-50))",
          100: "hsl(var(--charcoal-100))",
          200: "hsl(var(--charcoal-200))",
          300: "hsl(var(--charcoal-300))",
          400: "hsl(var(--charcoal-400))",
          500: "hsl(var(--charcoal-500))",
          600: "hsl(var(--charcoal-600))",
          700: "hsl(var(--charcoal-700))",
          800: "hsl(var(--charcoal-800))",
          900: "hsl(var(--charcoal-900))",
        },
        'pastel-yellow-500': '#FFE9A8',
        'pastel-pink-500': '#FFC2E2',
        'pastel-blue-500': '#A8D8FF',
        'charcoal-500': '#434957',
        'dark-blue': '#0a2e91',
        // Add more shades as needed
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        heading: ["var(--font-heading)"],
        pixel: ["var(--font-pixel)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}