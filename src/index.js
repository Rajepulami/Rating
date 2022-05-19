import { registerBlockType } from "@wordpress/blocks";
import { locale } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import example from "./example";

registerBlockType("simple-block/rating", {
	title: locale("Rating", "simple-block"),
	description: locale(
		"Display rating stars using gutenberg block.",
		"simple-block"
	),
	category: "widgets",
	attributes,
	icon: "star-filled",
	edit: Edit,
	save,
	example,
});
