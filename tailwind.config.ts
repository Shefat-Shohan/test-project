import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        slideImage1: "url('/grid-image-4.jpg')",
        slideImage2: "url('/slider-2.jpg')",
        slideImage3: "url('/slider-3.jpg')",
        slideImage4: "url('/slider-4.jpg')",
        slideImage5: "url('/slider-5.jpg')",
        slideImage6: "url('/slider-6.jpg')",
        slideImage7: "url('/slider-7.jpg')",
        slideImage8: "url('/slider-8.jpg')",
      },
      fontFamily: {
        nobile: "var(--font-nobile)",
        actorFont: "var(--font-actor)",
        tiltWarpFont: "var(--font-tilt-warp)",
        oranienbaum: "var(--font-oranienbaum)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#11162E",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
