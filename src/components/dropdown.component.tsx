import type React from "react";
import { useDropdown } from "../hooks/use-dropdown";
import type { DropdownItem } from "../types/dropdown-item.types";
import { Styled } from "./dropdown.component.styles";
import { IconChevronDown } from "./icons";

export interface DropdownProps {
	trigger: React.ReactNode;
	items: DropdownItem[];
	highlightFirst?: boolean;
}

export default function Dropdown({
	trigger,
	items,
	highlightFirst = false,
}: DropdownProps) {
	const { state, controller } = useDropdown();
	const isDropdownOpen = state.isOpen || state.isHovered;

	return (
		<Styled.Wrapper
			ref={state.wrapperRef}
			onMouseEnter={controller.handleMouseEnter}
			onMouseLeave={controller.handleMouseLeave}
		>
			<Styled.Container onClick={controller.toggleOpen}>
				{trigger}
				<Styled.ChevronWrapper
					data-dropdown-open={isDropdownOpen ? "true" : "false"}
				>
					<IconChevronDown />
				</Styled.ChevronWrapper>
			</Styled.Container>

			<Styled.Menu data-dropdown-open={isDropdownOpen ? "true" : "false"}>
				{items.map((item, index) => {
					const isFirst = index === 0;
					const shouldHighlight = highlightFirst && isFirst;

					return (
						<Styled.Item
							key={item.id}
							data-highlight={shouldHighlight ? "true" : "false"}
							onClick={() => {
								item.onClick?.();
								controller.close();
							}}
						>
							{item.label}
						</Styled.Item>
					);
				})}
			</Styled.Menu>
		</Styled.Wrapper>
	);
}
