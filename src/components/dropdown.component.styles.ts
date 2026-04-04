import styled from "@emotion/styled";

const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

/** Open state via data-dropdown-open only (valid DOM; avoids transient props on Next). */
const Menu = styled.ul`
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

    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

    &[data-dropdown-open="true"] {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    &[data-dropdown-open="false"] {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
    }
`;

const Item = styled.li`
    padding: 12px 20px;
    font-family: sans-serif;
    font-size: 14px;
    color: #111;
    cursor: pointer;
    transition: background-color 0.2s;

    &[data-highlight="true"] {
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 4px;
        padding-bottom: 16px;
        font-weight: 600;
    }

    &:hover {
        background-color: #f5f5f5;
    }

    &:last-child {
        border-bottom: none;
    }
`;

/** Chevron rotation from data-dropdown-open; icon is not styled so nothing reaches svg. */
const ChevronWrapper = styled.span`
    display: inline-flex;
    transition: transform 0.2s ease;
    color: white;
    z-index: 1;

    &[data-dropdown-open="true"] {
        transform: rotate(180deg);
    }

    &[data-dropdown-open="false"] {
        transform: rotate(0deg);
    }
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
	ChevronWrapper,
	Container,
};
