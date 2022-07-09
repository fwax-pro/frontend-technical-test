import styled from "styled-components"

export const Layout = styled.div`
  height: 100vh;
  min-height: 100vh;;
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
`;

export const Header = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const Main = styled.main`
  flex: 1 0 0;
  background-color: secondary;
  overflow: hidden;
`;
