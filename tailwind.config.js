/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	purge: {
		options: {
			safelist: ['bg-red-500', 'bg-green-500', 'bg-blue-500']
		}
	},
	theme: {
		extend: {}
	},
	plugins: []
};
