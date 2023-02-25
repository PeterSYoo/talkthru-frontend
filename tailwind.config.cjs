/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			worksans: ['Work Sans'],
			poppins: ['Poppins'],
			openSans: ['Open Sans'],
			archivo: ['Archivo'],
		},
		boxShadow: {
			'meeting-room': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
		},
	},
	plugins: [],
};
