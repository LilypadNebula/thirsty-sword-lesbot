/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['Inter', 'sans-serif'],
				header: ['Rock Salt', 'display'],
			},
			colors: {
				lesbianPink: '#DC4680',
				lesbianOrange: '#EF6733',
			},
		},
	},
	plugins: [],
}
