/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-lg': "28px",
        'custom-xl': "46px",
        'custom-2xl': "85px",
      },
      colors: {
        'vibrantBlue': "#1643C3",
        'oceanBlue': "#1643C31A",
        'skylineBlue': "#4273FF",
        'dark-blue': "#002F93",
      },
      boxShadow: {
        'custom-xl': "4.33px 4.33px 16.55px 0px #FFFFFF42"
      },
      lineHeight: {
        'custom-xl': "55px",
      },
      backgroundImage: {
        'roadmap-layer': "url('./assets/images/webp/roadmap-layer.webp')",
        'game-layer': "url('./assets/images/webp/game-layer.webp')",
        'stretch-layer': "url('./assets/images/webp/amplify-bg.webp')",
      },
      fontFamily: {
        'plusJakarta': "plus,sans-serif",
        'raleway': "raleway,sans-serif"
      }
    },
  },
  plugins: [],
}

