import type React from "react";
import { HiChevronDown } from "react-icons/hi2";
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
				<Styled.ChevronWrapper
					data-dropdown-open={state.isVisible ? "true" : "false"}
				>
					<HiChevronDown />
				</Styled.ChevronWrapper>
			</Styled.Container>

			<Styled.Menu data-dropdown-open={state.isVisible ? "true" : "false"}>
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
