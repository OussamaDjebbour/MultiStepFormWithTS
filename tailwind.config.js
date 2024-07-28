/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Ubuntu',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/bg-sidebar-desktop.svg')",
        'hero-pattern-mobile':
          "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
      colors: {
        // Primary
        'marine-blue': 'hsl(213, 96%, 18%)', // Primary
        'purplish-blue': 'hsl(243, 100%, 62%)', // Secondary
        'pastel-blue': 'hsl(228, 100%, 84%)', // Tertiary
        'light-blue': 'hsl(206, 94%, 87%)', // Info
        'strawberry-red': 'hsl(354, 84%, 57%)', // Danger
        // Neutral
        'cool-gray': 'hsl(231, 11%, 63%)', // Light
        'light-gray': 'hsl(229, 24%, 87%)', // Lighter
        Magnolia: 'hsl(217, 100%, 97%)', // Dark
        Alabaster: 'hsl(231, 100%, 99%)', // Darker
        White: 'hsl(0, 0%, 100%)', // White
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
