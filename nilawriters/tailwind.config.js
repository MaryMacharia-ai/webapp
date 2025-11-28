/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F6B61",
        secondary: "#0B9AA6",
        accent: "#FF7A59",
        neutralDark: "#1F2937",
        neutralLight: "#F7FAFC",
      },
      spacing: {
        "px-96": "96px",
        "px-120": "120px",
      },
      maxWidth: {
        "screen-lg-pixel": "1200px",
      },
      fontSize: {
        "hero-lg": ["56px", { lineHeight: "1.05", fontWeight: "700" }],
        "section-lg": ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
