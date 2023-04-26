import styled from 'styled-components';
import { NavBarComponent } from '.';

const Header = styled.header`
  display: block;
  position: relative;
  width: 100%;
  margin: 0;
  z-index: 7;
  border-bottom: 1px solid ${({ theme }) => theme.borderHeader};
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
