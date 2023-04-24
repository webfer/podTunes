import styled from 'styled-components';
import { NavBarComponent } from '.';

const Header = styled.header`
  display: block;
  position: relative;
  width: 100%;
  float: left;
  margin: 0;
  z-index: 7;
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <NavBarComponent />
      </Header>
    </>
  );
};
