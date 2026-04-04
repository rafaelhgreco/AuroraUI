import { type RefObject, useEffect, useRef, useState } from "react";

export interface DropdownState {
	isOpen: boolean;
	/** True while pointer is over the dropdown (menu stays open). */
	isHovered: boolean;
	wrapperRef: RefObject<HTMLDivElement | null>;
}

export interface DropdownController {
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
	toggleOpen: () => void;
	close: () => void;
}

export interface UseDropdownResult {
	state: DropdownState;
	controller: DropdownController;
}

export function useDropdown(): UseDropdownResult {
	const [isHovered, setIsHovered] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);
	const toggleOpen = () => setIsOpen((prev) => !prev);
	const close = () => setIsOpen(false);

	return {
		state: {
			isOpen,
			isHovered,
			wrapperRef,
		},
		controller: {
			handleMouseEnter,
			handleMouseLeave,
			toggleOpen,
			close,
		},
	};
}
