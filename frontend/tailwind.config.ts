import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
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
        linear: {
          success: "linear-gradient(90deg, hsl(var(--success)) 0%, hsl(var(--success-foreground)) 100%)",
          warning: "linear-gradient(90deg, hsl(var(--warning)) 0%, hsl(var(--warning-foreground)) 100%)",
          destructive: "linear-gradient(90deg, hsl(var(--destructive)) 0%, hsl(var(--destructive-foreground)) 100%)",
          accent: "linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--accent-foreground)) 100%)",
          primary: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary-foreground)) 100%)",
          secondary: "linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--secondary-foreground)) 100%)",
          muted: "linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted-foreground)) 100%)",
          "8": "linear-gradient(90deg, hsl(var(--popover)) 0%, hsl(var(--popover-foreground)) 100%)",
          "9": "linear-gradient(90deg, hsl(var(--card)) 0%, hsl(var(--card-foreground)) 100%)",
          "10": "linear-gradient(90deg, hsl(var(--background)) 0%, hsl(var(--foreground)) 100%)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config