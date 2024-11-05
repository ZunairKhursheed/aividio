/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "color-dark": "#01110A",
        "color-orange": "#000000",
        "color-green": "003E1F",
        "color-light-green": "#D5F2E3"
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 0deg, #08f, #f60, #bbffa1, #4c00ff, #ab2666, #09f)",
      },
      keyframes: {
        video_slider_right: {
          "0%": {
            contain: "size layout style",
            opacity: 0.548267,
            filter: "blur(0px)",
            zIndex: 0,
            transform:
              "translateX(0%) translateY(0px) translateZ(-3022.79px) rotateX(0deg)  scale(1) rotateY(-15deg) rotateZ(0deg)",
          },
          "25%": {
            contain: "size layout style",
            opacity: 1,
            filter: "blur(0px)",
            zIndex: 100,
            transform:
              "translateX(-50%) translateY(0px) translateZ(-2522.79px) rotateX(0deg)  scale(1) rotateY(-25deg) rotateZ(0deg)",
          },
          "60%": {
            contain: "size layout style",
            filter: "blur(0px)",
            zIndex: 200,
            opacity: 1,
            transform:
              "translateX(-25%) translateY(0px) translateZ(-2048.23px)  rotateX(0deg) rotateY(-10deg) rotateZ(0deg)",
          },
          "75%": {
            contain: "size layout style",
            filter: "blur(0px)",
            opacity: 1,
            zIndex: 300,

            transform:
              "translateX(0%) translateY(0px) translateZ(-1648.23px)  rotateX(0deg) rotateY(-30deg) rotateZ(0deg)",
          },

          "100%": {
            contain: "size layout style",
            opacity: "0.981026",
            filter: "blur(6.84735px)",
            zIndex: 500,
            opacity: 1,
            transform:
              "translateX(120%) translateY(0px) translateZ(-1348.23px)  rotateX(0deg) rotateY(-45deg) rotateZ(0deg)",
          },
        },
        video_slider_left: {
          "0%": {
            contain: "size layout style",
            opacity: 0.548267,
            filter: "blur(0px)",
            zIndex: 0,
            transform:
              "translateX(0%) translateY(0px) translateZ(-3022.79px) rotateX(0deg) scale(1) rotateY(15deg) rotateZ(0deg)", // Mirrored on Y-axis
          },
          "25%": {
            contain: "size layout style",
            opacity: 1,
            filter: "blur(0px)",
            zIndex: 100,
            transform:
              "translateX(50%) translateY(0px) translateZ(-2522.79px) rotateX(0deg) scale(1) rotateY(25deg) rotateZ(0deg)", // Mirrored on Y-axis
          },
          "60%": {
            contain: "size layout style",
            filter: "blur(0px)",
            zIndex: 200,
            opacity: 1,
            transform:
              "translateX(25%) translateY(0px) translateZ(-2048.23px) rotateX(0deg) rotateY(10deg) rotateZ(0deg)", // Mirrored on Y-axis
          },
          "75%": {
            contain: "size layout style",
            filter: "blur(0px)",
            opacity: 1,
            zIndex: 300,
            transform:
              "translateX(0%) translateY(0px) translateZ(-1648.23px) rotateX(0deg) rotateY(30deg) rotateZ(0deg)", // Mirrored on Y-axis
          },
          "100%": {
            contain: "size layout style",
            opacity: 0.981026,
            filter: "blur(6.84735px)",
            zIndex: 500,
            opacity: 1,
            transform:
              "translateX(-120%) translateY(0px) translateZ(-1348.23px) rotateX(0deg) rotateY(45deg) rotateZ(0deg)", // Mirrored on Y-axis
          },
        },
        ColorBlobs_spin: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) scale(2)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(1turn) scale(2)",
          },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-800%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-800%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        video_slider_right: "video_slider_right 12s linear  infinite",
        video_slider_left: "video_slider_left 12s linear infinite",
        color_blobs: "ColorBlobs_spin 8s linear infinite",
        slide_left: "slide-left 30s linear infinite",
        slide_right: "slide-right 30s linear infinite",
      },
    },
  },
  //theme: {
  //  extend: {},
  //},
  plugins: [],
};
