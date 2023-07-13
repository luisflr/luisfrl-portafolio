/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        'background': '#000',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#FFF',
        'transparent': 'transparent',
        'sky': '#007CF0',
        'cyan': '#00DFB8',
        'red-gradient': '#ff4d4d',
        'orange-gradient': '#f9cb28',
        'purple-100': '#331230',
        'blue-100': '#021c34',
        'default-text': '#A3B3BC'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '0.07rem',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      fontFamily: {
        'belanosima': ['Belanosima','sans-serif'],
        'comic': ['"Comic Neue"', 'cursive'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        'prompt': ['Prompt', 'sans-serif'],
        'sans': ['Calibre', 'Inter', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif']
      },
      extend: {
        animation: {
          appear: 'appear 0.5s ease-in'
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(circle, rgba(2,104,105,1) 0%, rgba(5,11,15,1) 70%)',
        },
        boxShadow: {
          'default': '2px 10px 77px -6px rgba(0, 0, 0, 1)',
          'icons': '0 5px 10px rgba(0, 0, 0, 0.1)',
          'iconsHover': '0 10px 25px rgba(0, 0, 0, 0)'
        },
        keyframes: {
          appear: {
            '0%': { opacity: '0'},
          }
        }
      },
    },
    plugins: [],
  }