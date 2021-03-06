import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar as faStarFull,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import Inspector from "./inspector";
import "./editor.scss";

export default function Edit({ isSelected, attributes, setAttributes }) {
	const {
		stars,
		rating,
		size,
		sizeUnit,
		color,
		hasShadow,
		offsetX,
		offsetY,
		blur,
		shadowColor,
	} = attributes;

	const full = Math.floor(rating);
	const half = (rating % 1 === 0) ? 0 : 1;
	const empty = stars - (full + half);

	const iconStyle = {
		fontSize: size + sizeUnit,
		filter: hasShadow
			? `drop-shadow(${offsetX}px ${offsetY}px ${blur}px ${shadowColor})`
			: undefined,
	};

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<div>
			{full
				? [...Array(full).keys()].map(() => (
						<FontAwesomeIcon
							icon={faStarFull}
							color={color}
							size={size}
							style={iconStyle}
						/>
				  ))
				: null}
			{half ? (
				<FontAwesomeIcon icon={faStarHalfAlt} color={color} style={iconStyle} />
			) : null}
			{empty
				? [...Array(empty).keys()].map(() => (
						<FontAwesomeIcon
							icon={faStarEmpty}
							color={color}
							size={size}
							style={iconStyle}
						/>
				  ))
				: null}
		</div>,
	];
}
