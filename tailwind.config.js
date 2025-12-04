/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated to match actual Zemo logo colors
        zemoOrange: "#F9A825",    // Primary Orange/Amber from logo
        zemoCyan: "#00BCD4",       // Secondary Cyan from logo  
        zemoBlue: "#0277BD",       // Medium Blue from logo
        zemoYellow: "#FACC15",     // Legacy yellow (keeping for compatibility)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
