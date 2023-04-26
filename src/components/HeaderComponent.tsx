import styled from 'styled-components';
import { NavBarComponent } from '.';

const Header = styled.header`
  display: block;
  margin: 0;
  position: relative;
  width: 100%;
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
