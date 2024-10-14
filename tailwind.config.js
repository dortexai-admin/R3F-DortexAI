/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			serif: ["Comfortaa", ...defaultTheme.fontFamily.serif],
			sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			backdropBlur: {
				sm: "4px",
				md: "8px",
				lg: "12px",
			},
		},
	},
	plugins: [],
};
