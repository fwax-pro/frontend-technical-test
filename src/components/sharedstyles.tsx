import styled from 'styled-components'
import { Main } from './layout'

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  padding: 0.5rem;
  margin-right: 1rem;
  
  && > span {
    border-radius: 50%;
  }
`;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-family: Karla;
`;

export const Title = styled(MainTitle)`
  text-transform: uppercase;
  flex: 1;
  font-size: 1.5rem;
`;

export const SubTitle = styled.p`
  color: #ccc;
`;

export const InnerLoginLink = styled.a`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  font-weight: bold;
  display: flex;
  padding: 15px 32px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const MainCentered = styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
