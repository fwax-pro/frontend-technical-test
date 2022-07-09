import type { FC } from "react"
import styled from "styled-components"

interface ButtonProps {
    label?: String
    children?: any
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick
}) => (
    <InnerButton onClick={onClick}>
        { children }
    </InnerButton>
);

const InnerButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    border-radius: 50%;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;    
`;
