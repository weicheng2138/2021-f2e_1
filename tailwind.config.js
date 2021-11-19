module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			Notosans: ["Noto Sans TC"],
		},
		extend: {
			colors: {
				primary: "#0DC7D2",
			},
			screens: {
				ssm: "360px",
			},
			backgroundImage: {
				"banner-mountain":
					"url('../assets/images/banner-mountain.png')",
				"demo-recent":
					"url('https://www.eastcoast-nsa.gov.tw/image/29064/640x480')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
