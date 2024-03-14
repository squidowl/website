/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['"Rubik"']
			},
			colors: {
				indigo: '#1C2D75',
				red: '#ED7E5B',
				peach: '#FFD9CE',
				darkPurple: '#332A3C',
				lightPurple: '#493c56'
			}
		}
	},
	plugins: []
};
