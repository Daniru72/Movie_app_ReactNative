/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}' // Ensure your app directory is included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030014", 
        secondary: "#151312",
        light:{
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4Ab",
        },
        dark:{
          100: "#221f3d",
          200: "#0f0d23",
      
        },
        accent: "#AB8BFF"
         
        // Add more colors as needed
      },
    },
  },
  plugins: [],
  presets:  [require("nativewind/preset")],  // Add the NativeWind preset
};
