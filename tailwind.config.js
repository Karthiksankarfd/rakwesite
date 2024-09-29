/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px' ,
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        // Horizontal Offset (5px): Moves the shadow horizontally. Positive values move the shadow to the right, and negative values move it to the left.
        // Vertical Offset (15px): Moves the shadow vertically. Positive values move the shadow down, and negative values move it up.
        // Blur Radius (30px): Determines how blurred the shadow is. Higher values create a more blurred shadow.
        // Spread Radius (5px): Expands or contracts the shadow. Positive values make the shadow larger, while negative values make it smaller.
        // Color (rgba(59, 59, 59, 0.3)): Sets the shadow color. You can adjust the color and opacity to achieve the desired effect.
        '2xl': '0px 0px 5px 5px rgba(3, 3, 3, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': {transform: 'translateX(0)'},
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s  ',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(to right, #c2bf00 0%, #abaa6f 100%)', // Custom linear gradient
       
      },
       
    },
    
  },
  plugins: [],
}