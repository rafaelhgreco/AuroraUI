import styled from "@emotion/styled";
import { HiChevronDown } from "react-icons/hi2";

const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

const Menu = styled("ul", {
	shouldForwardProp: (prop) => prop !== "$isVisible",
})<{ $isVisible: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 240px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 8px 0;
    margin: 8px 0 0 0;
    list-style: none;
    z-index: 1000;

    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "-10px")});
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
`;

const Item = styled("li", {
	shouldForwardProp: (prop) => prop !== "$isHighlight",
})<{ $isHighlight?: boolean }>`
    padding: 12px 20px;
    font-family: sans-serif;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    transition: background-color 0.2s;

    ${({ $isHighlight }) =>
			$isHighlight &&
			`
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 4px;
            padding-bottom: 16px;
            font-weight: 600;
        `}

    &:hover {
        background-color: #f5f5f5;
    }

    &:last-child {
        border-bottom: none;
    }
`;

const Chevron = styled(HiChevronDown, {
	shouldForwardProp: (prop) => prop !== "$isVisible",
})<{ $isVisible?: boolean }>`
    transform: ${({ $isVisible }) =>
			$isVisible ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.2s ease;
    color: white;
    z-index: 1;
`;

const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
`;
export const Styled = {
	Wrapper,
	Menu,
	Item,
	Chevron,
	Container,
};
