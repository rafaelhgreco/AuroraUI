/**
 * Internal icon components — inline SVG so no third-party props ever reach
 * the <svg> element. Only standard SVG presentation props are accepted.
 * These components are NOT exported from the library's public index.
 */

interface IconProps {
	/** CSS class forwarded to the svg element */
	className?: string;
	/** Inline style forwarded to the svg element */
	style?: React.CSSProperties;
	/** Override width (defaults to "1em") */
	width?: string | number;
	/** Override height (defaults to "1em") */
	height?: string | number;
}

import type React from "react";

export function IconChevronDown({
	className,
	style,
	width = "1em",
	height = "1em",
}: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			width={width}
			height={height}
			className={className}
			style={style}
		>
			<path
				fillRule="evenodd"
				d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export function IconViewGrid({
	className,
	style,
	width = "1em",
	height = "1em",
}: IconProps) {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			width={width}
			height={height}
			className={className}
			style={style}
		>
			<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
		</svg>
	);
}

export function IconX({
	className,
	style,
	width = "1em",
	height = "1em",
}: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			aria-hidden="true"
			width={width}
			height={height}
			className={className}
			style={style}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}
