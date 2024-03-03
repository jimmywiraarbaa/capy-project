/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      yellow: {
        '500': '#e6eb01'
      }
    },
    extend: {
      colors: {
        "yellow": '#e6eb01',
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "success-color": "var(--success)",
        "danger-color": "var(--danger)",
        "warning-color": "var(--warning)",
        "info-color": "var(--info)",
        "white-text": "var(--text)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animated")
  ],
};
