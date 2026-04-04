import type React from "react";
import { useDropdown } from "../hooks/use-dropdown";
import type { DropdownItem } from "../types/dropdown-item.types";
import { Styled } from "./dropdown.component.styles";

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

	return (
		<Styled.Wrapper
			ref={state.wrapperRef}
			onMouseEnter={controller.handleMouseEnter}
			onMouseLeave={controller.handleMouseLeave}
		>
			<Styled.Container onClick={controller.toggleOpen}>
				{trigger}
				<Styled.Chevron $isVisible={state.isVisible} />
			</Styled.Container>

			<Styled.Menu $isVisible={state.isVisible}>
				{items.map((item, index) => {
					const isFirst = index === 0;
					const shouldHighlight = highlightFirst && isFirst;

					return (
						<Styled.Item
							key={item.id}
							isHighlight={shouldHighlight}
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
