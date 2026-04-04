import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NavItem } from "../types/nav-item.types";
import { Styled } from "./drawer-nav.styles";
import { IconViewGrid, IconX } from "./icons";

export interface DrawerNavProps {
	items: NavItem[];
}

export default function DrawerNav({ items }: DrawerNavProps) {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = () => setIsOpen((prev) => !prev);
	const closeDrawer = () => setIsOpen(false);

	const handleNavigation = (path?: string) => {
		if (path) {
			navigate(path);
			closeDrawer();
		}
	};

	const openAttr = isOpen ? "true" : "false";

	return (
		<>
			<Styled.MenuButton onClick={toggleDrawer}>
				<Styled.DrawerIconWrapper>
					<IconViewGrid />
				</Styled.DrawerIconWrapper>
			</Styled.MenuButton>

			<Styled.Overlay data-drawer-open={openAttr} onClick={closeDrawer} />

			<Styled.DrawerPanel data-drawer-open={openAttr}>
				<Styled.CloseButton onClick={closeDrawer}>
					<Styled.CloseIconWrapper>
						<IconX />
					</Styled.CloseIconWrapper>
				</Styled.CloseButton>

				<Styled.NavList>
					{items.map((item) => (
						<Styled.NavItem key={item.label}>
							{item.isButton ? (
								<>
									<Styled.SectionTitle>{item.label}</Styled.SectionTitle>
									{item.dropdownItems && item.dropdownItems.length > 0 && (
										<Styled.SubList>
											{item.dropdownItems.map((subItem) => (
												<Styled.SubItem
													key={subItem.id}
													onClick={() => {
														subItem.onClick?.();
														closeDrawer();
													}}
												>
													{subItem.label}
												</Styled.SubItem>
											))}
										</Styled.SubList>
									)}
								</>
							) : (
								<Styled.SectionTitle
									onClick={() => handleNavigation(item.path)}
								>
									{item.label}
								</Styled.SectionTitle>
							)}
						</Styled.NavItem>
					))}
				</Styled.NavList>
			</Styled.DrawerPanel>
		</>
	);
}
