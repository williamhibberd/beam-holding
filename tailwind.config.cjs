const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/scripts/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["'good-sans'", ...defaultTheme.fontFamily.sans],
		},
		spacing: {
			0: "0rem",
			10: "0.625rem",
			20: "1.25rem",
			40: "2.5rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#F9F1EF",
			black: "#1e1c1e",
		},
		fontSize: {
			sm: [
				"0.875rem",
				{
					lineHeight: "1.43em",
					letterSpacing: "-0.02em",
				},
			],
			md: [
				"1.25rem",
				{
					lineHeight: "1.43em",
					letterSpacing: "-0.02em",
				},
			],
			lg: [
				"1.875rem",
				{
					lineHeight: "1.067em",
					letterSpacing: "-0.02em",
				},
			],
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
