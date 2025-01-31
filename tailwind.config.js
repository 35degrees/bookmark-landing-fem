/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1200px',
		},
		extend: {
			colors: {
				softBlue: 'hsl(231, 69%, 60%)',
				softRed: 'hsl(0, 94%, 66%)',
				grayishBlue: 'hsl(229, 8%, 60%)',
				veryDarkBlue: 'hsl(229, 31%, 21%)',
			},
		},
	},
	plugins: [],
}
