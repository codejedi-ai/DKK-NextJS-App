import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: "#D4A574", // Warm Gold - represents heritage and wisdom
          foreground: "#1A1A1A",
          50: "#FDF8F3",
          100: "#F9EFE0",
          200: "#F1DCC0",
          300: "#E8C89A",
          400: "#DEB477",
          500: "#D4A574", // Main
          600: "#C8955F",
          700: "#B8834A",
          800: "#A67139",
          900: "#8B5E2E",
        },
        secondary: {
          DEFAULT: "#6B73FF", // Soft Periwinkle - represents connection across cultures
          foreground: "#FFFFFF",
          50: "#F0F1FF",
          100: "#E6E8FF",
          200: "#D1D5FF",
          300: "#B8BEFF",
          400: "#9CA3FF",
          500: "#6B73FF", // Main
          600: "#5A62E6",
          700: "#4A52CC",
          800: "#3D44B3",
          900: "#323999",
        },
        accent: {
          DEFAULT: "#FF8A65", // Coral - represents warmth and family bonds
          foreground: "#1A1A1A",
          50: "#FFF3F0",
          100: "#FFE6E0",
          200: "#FFCCC0",
          300: "#FFB3A0",
          400: "#FF9980",
          500: "#FF8A65", // Main
          600: "#FF7043",
          700: "#FF5722",
          800: "#E64A19",
          900: "#BF360C",
        },
        sage: {
          DEFAULT: "#87A96B", // Sage Green - represents growth and nature
          50: "#F4F7F0",
          100: "#E8F0E0",
          200: "#D1E0C0",
          300: "#B9D0A0",
          400: "#A0C080",
          500: "#87A96B", // Main
          600: "#739157",
          700: "#5F7A47",
          800: "#4C6238",
          900: "#3A4B2C",
        },
        earth: {
          DEFAULT: "#8B4513", // Saddle Brown - represents tradition and roots
          50: "#F7F3F0",
          100: "#EDE6E0",
          200: "#DBCCC0",
          300: "#C8B3A0",
          400: "#B69980",
          500: "#A3805F", // Lighter version
          600: "#8B4513", // Main
          700: "#73390F",
          800: "#5C2E0C",
          900: "#452309",
        },
        // Keep existing colors for compatibility
        black: "#0F0F0F", // Rich black instead of pure black
        white: "#F8F9FA", // Soft white instead of pure white
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ivory: {
          100: "#FFFFF0",
          200: "#FEFCEB",
        },
        rose: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [tailwindcssAnimate],
}
