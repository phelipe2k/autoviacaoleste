/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00d4aa",
          dark: "#00b894",
          light: "#00f5c4",
        },
        dark: {
          DEFAULT: "#050816",
          light: "#0a0f1e",
          lighter: "#151b2e",
          card: "#0d1221",
        },
        cyan: {
          DEFAULT: "#00d4ff",
          dark: "#00a8cc",
          light: "#5ce1ff",
          neon: "#00f0ff",
        },
        teal: {
          DEFAULT: "#008080",
          dark: "#006666",
          light: "#20b2aa",
          neon: "#00ffc8",
        },
        ice: {
          DEFAULT: "#f0f8ff",
          dark: "#e0e8ef",
          light: "#ffffff",
        },
        metallic: {
          DEFAULT: "#4a5568",
          dark: "#2d3748",
          light: "#718096",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, rgba(5,8,22,0.95) 0%, rgba(10,15,30,0.8) 50%, rgba(5,8,22,0.9) 100%)",
        "glow-cyan":
          "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-teal":
          "radial-gradient(circle, rgba(0,255,200,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-cyan":
          "0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.1)",
        "glow-teal":
          "0 0 40px rgba(0,255,200,0.25), 0 0 80px rgba(0,255,200,0.08)",
        "glow-primary":
          "0 0 30px rgba(0,212,170,0.35), 0 0 60px rgba(0,212,170,0.15)",
        deep: "0 25px 50px -12px rgba(0,0,0,0.7)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.37)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,170,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,170,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
