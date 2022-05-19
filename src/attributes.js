const attributes = {
	stars: {
		type: "number",
		default: 5,
	},
	rating: {
		type: "number",
		default: 5,
	},
	color: {
		type: "string",
	},
	size: {
		type: "number",
	},
	sizeUnit: {
		type: "string",
		default: "px",
	},
	hasShadow: {
		type: "boolean",
		default: false,
	},
	offsetX: {
		type: "number",
		default: 0,
	},
	offsetY: {
		type: "number",
		default: 0,
	},
	blur: {
		type: "number",
		default: 0,
	},
	shadowColor: {
		type: "string",
	},
};

export default attributes;
