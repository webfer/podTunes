import styled from 'styled-components';
import { NavBar } from '.';

const HeaderHtml = styled.header`
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

interface Props {
  name: string;
}

export const Header = () => {
  return (
    <>
      <HeaderHtml>
        <NavBar />
      </HeaderHtml>
    </>
  );
};
export const getSaludo = ({ name }: Props) => {
  return 'Hola ' + name;
};
