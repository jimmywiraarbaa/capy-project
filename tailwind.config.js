/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "success-color": "var(--success)",
        "danger-color": "var(--danger)",
        "warning-color": "var(--warning)",
      }
    },
  },
  plugins: [],
}