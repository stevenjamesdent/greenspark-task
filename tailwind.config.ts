import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'mobile': '650px',
			'tablet': '800px',
			'laptop': '1050px',
			'desktop': '1450px',
		},
		extend: {
			colors: {
				'beige': '#f2ebdc',
				'black': '#000000',
				'blue': '#2d3a8c',
				'green': '#3a755f',
				'grey-dark': '#b0b0b0',
				'grey-light': '#cbcbcb',
				'off-white': '#f9f9f9',
				'white': '#ffffff',
			},
			fontFamily: {
				'cabin': ['var(--font-cabin)'],
			},
			fontSize: {
				'h1': 'var(--h1)',
				'h2': 'var(--h2)',
				'h3': 'var(--h3)',
				'h4': 'var(--h4)',
				'h5': 'var(--h5)',
				'h6': 'var(--h6)',
				'small': 'var(--font-small)',
				'standard': 'var(--font-standard)',
				'large': 'var(--font-large)',
			},
			fontWeight: {
				'regular': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
			},
			spacing: {
				'gutter-large': 'var(--gutter-large)',
				'gutter-small': 'var(--gutter-small)',
				'gutter': 'var(--gutter-medium)',
			},
		},
	},
	plugins: [],
};

export default config;