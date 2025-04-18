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
        
        // Core framework system colors
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
        
        // Creator brand colors from docs/03-color-system.md
        // Tropical Indigo (Creativity & Imagination)
        'tropical-indigo': {
          DEFAULT: "hsl(var(--tropical-indigo))",
          100: "hsl(var(--tropical-indigo-100))",
          200: "hsl(var(--tropical-indigo-200))",
          300: "hsl(var(--tropical-indigo-300))",
          400: "hsl(var(--tropical-indigo-400))",
          500: "hsl(var(--tropical-indigo-500))",
          600: "hsl(var(--tropical-indigo-600))",
          700: "hsl(var(--tropical-indigo-700))",
          800: "hsl(var(--tropical-indigo-800))",
          900: "hsl(var(--tropical-indigo-900))",
        },
        
        // Charcoal (Stability & Depth)
        'charcoal': {
          DEFAULT: "hsl(var(--charcoal))",
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
        
        // Asparagus (Growth & Balance)
        'asparagus': {
          DEFAULT: "hsl(var(--asparagus))",
          100: "hsl(var(--asparagus-100))",
          200: "hsl(var(--asparagus-200))",
          300: "hsl(var(--asparagus-300))",
          400: "hsl(var(--asparagus-400))",
          500: "hsl(var(--asparagus-500))",
          600: "hsl(var(--asparagus-600))",
          700: "hsl(var(--asparagus-700))",
          800: "hsl(var(--asparagus-800))",
          900: "hsl(var(--asparagus-900))",
        },
        
        // Vanilla (Optimism & Clarity)
        'vanilla': {
          DEFAULT: "hsl(var(--vanilla))",
          100: "hsl(var(--vanilla-100))",
          200: "hsl(var(--vanilla-200))",
          300: "hsl(var(--vanilla-300))",
          400: "hsl(var(--vanilla-400))",
          500: "hsl(var(--vanilla-500))",
          600: "hsl(var(--vanilla-600))",
          700: "hsl(var(--vanilla-700))",
          800: "hsl(var(--vanilla-800))",
          900: "hsl(var(--vanilla-900))",
        },
        
        // Light Coral (Energy & Approachability)
        'light-coral': {
          DEFAULT: "hsl(var(--light-coral))",
          100: "hsl(var(--light-coral-100))",
          200: "hsl(var(--light-coral-200))",
          300: "hsl(var(--light-coral-300))",
          400: "hsl(var(--light-coral-400))",
          500: "hsl(var(--light-coral-500))",
          600: "hsl(var(--light-coral-600))",
          700: "hsl(var(--light-coral-700))",
          800: "hsl(var(--light-coral-800))",
          900: "hsl(var(--light-coral-900))",
        },
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