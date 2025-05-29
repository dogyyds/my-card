/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EA5E9",
          dark: "#0284C7",
          light: "#38BDF8",
        },
        background: {
          dark: "#020409",
          light: "#F8FAFC",
        },
        card: {
          dark: "rgba(79, 94, 118, 0.09)",
          light: "rgba(255, 255, 255, 0.75)",
        },
        button: {
          dark: "rgba(30, 41, 59, 0.4)",
          light: "rgba(255, 255, 255, 0.5)",
        },
        text: {
          dark: {
            primary: "#FFFFFF",
            secondary: "rgba(255, 255, 255, 0.7)",
          },
          light: {
            primary: "#333333",
            secondary: "#666666",
          },
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
      },
      borderRadius: {
        DEFAULT: "0.75rem", // 12px
        lg: "1.5rem", // 24px
        full: "9999px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
