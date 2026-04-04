import styled from "@emotion/styled";
import { theme } from "../theme/base";

const MenuButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;

	width: 40px;
	height: 40px;
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: background-color 0.3s ease;

	&:focus {
		outline: none;
	}

	&:hover,
	&:focus {
		background-color: ${theme.colors.primary.light};

		& > svg {
			color: ${theme.colors.neutral.white};
		}
	}
`;

/** Plain span wrapper — icon renders inside with no custom props on the svg. */
const DrawerIconWrapper = styled.span`
	display: inline-flex;
	font-size: 24px;
	color: ${theme.colors.primary.main};
	transition: color 0.3s ease;
`;

/** Visibility driven by data-drawer-open; no custom props forwarded to <div>. */
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1001;
	transition: opacity 0.3s ease, visibility 0.3s ease;

	&[data-drawer-open="true"] {
		opacity: 1;
		visibility: visible;
	}

	&[data-drawer-open="false"] {
		opacity: 0;
		visibility: hidden;
	}
`;

/** Slide-in driven by data-drawer-open; no custom props forwarded to <div>. */
const DrawerPanel = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100vh;
	background-color: ${theme.colors.neutral.white};
	box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
	z-index: 1002;
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	padding: 24px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;

	&[data-drawer-open="true"] {
		transform: translateX(0);
	}

	&[data-drawer-open="false"] {
		transform: translateX(-100%);
	}
`;

const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 40px 0 0 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const NavItem = styled.li`
	padding: 12px 16px;
	border-radius: 8px;
	cursor: pointer;
	font-family: sans-serif;
	font-size: 16px;
	color: ${theme.colors.neutral.text};
	transition: background-color 0.2s;
	display: flex;
	flex-direction: column;

	&:hover {
		background-color: ${theme.colors.neutral.background};
		color: ${theme.colors.primary.main};
	}

	a {
		text-decoration: none;
		color: inherit;
		width: 100%;
	}
`;

const SubList = styled.ul`
	list-style: none;
	padding: 0 0 0 16px;
	margin: 8px 0 0 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-left: 2px solid ${theme.colors.neutral.border};
`;

const SubItem = styled.li`
	padding: 8px 12px;
	font-size: 14px;
	color: ${theme.colors.neutral.textLight};
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		background-color: ${theme.colors.neutral.background};
		color: ${theme.colors.primary.main};
	}
`;

const SectionTitle = styled.span`
	font-weight: 600;
	margin-bottom: 4px;
	display: block;
`;

/** Plain wrapper — icon renders inside with no custom props on the svg. */
const CloseIconWrapper = styled.span`
	position: absolute;
	top: 24px;
	right: 24px;
	font-size: 24px;
	display: inline-flex;
`;

const CloseButton = styled.button`
	border: none;
	background: none;
	padding: 0;
	cursor: pointer;

	&:hover {
		& > svg {
			color: ${theme.colors.primary.main};
		}
	}
`;

export const Styled = {
	MenuButton,
	DrawerIconWrapper,
	Overlay,
	DrawerPanel,
	NavList,
	NavItem,
	SubList,
	SubItem,
	SectionTitle,
	CloseIconWrapper,
	CloseButton,
};
