import styled from 'styled-components';
import { Logo } from './Logo';

const NavBar = styled.nav`
  align-items: center;
  display: flex;
  left: 50%;
  margin: 0;
  max-width: 90rem;
  padding: 0 1.75rem;
  position: relative;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;
`;

export const NavBarComponent = () => {
  return (
    <>
      <NavBar>
        <Logo />
      </NavBar>
    </>
  );
};
