const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/scripts/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["'visuelt'", ...defaultTheme.fontFamily.sans],
		},
		spacing: {
			0: "0rem",
			2: "0.125rem",
			10: "0.625rem",
			20: "1.25rem",
			30: "1.875rem",
			40: "2.5rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFFFFF",
			natural: "#EBE6DC",
			grey: "#9EA09E",
			black: "#1A1919",
			purple: "#6871FF",
			stone: "#98A297",
			mint: "#E0F0ED",
			green: "#93CC9C",
			violet: "#CCAFF3",
			sky: "#C6C9F7",
			pink: "#EBC4B7",
			gold: "#F7CF91",
			zest: "#EF8F6A",
			leaf: "#73854B",
			moss: "#B0AE89",
		},
		fontSize: {
			sm: "0.875rem",
			md: "1.25rem",
			lg: "1.5rem",
		},
		extend: {
			height: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			maxHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			minHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
		},
	},
};
