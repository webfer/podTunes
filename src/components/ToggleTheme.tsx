import styled from 'styled-components';
import { device } from '../styles';

const WrpToggle = styled.div`
  top: 2.1rem;
  display: flex;
  position: absolute;
  right: 2rem;
  z-index: 9;
  /* @media ${device.lg} {
    top: 4.1rem;
  } */
  @media ${device.xxxl} {
    top: 3.5rem;
  }
  & svg {
    cursor: pointer;
  }
`;

const LabelMode = styled.label`
  align-self: center;
  color: var(--grays-200);
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  padding-right: 0.5rem;
`;

export const ToggleTheme = ({ theme, toggleTheme }: any) => {
  console.log(theme);
  return (
    <>
      <WrpToggle onClick={toggleTheme}>
        {theme === 'light' ? (
          <>
            <LabelMode>Dark mode</LabelMode>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="#fff"
                d="M224.3 150.3a8.1 8.1 0 0 0-7.8-5.7l-2.2.4A84 84 0 0 1 111 41.6a5.7 5.7 0 0 0 .3-1.8a7.9 7.9 0 0 0-10.3-8.1a100 100 0 1 0 123.3 123.2a7.2 7.2 0 0 0 0-4.6ZM128 212A84 84 0 0 1 92.8 51.7a99.9 99.9 0 0 0 111.5 111.5A84.4 84.4 0 0 1 128 212Z"
              />
            </svg>
          </>
        ) : (
          <>
            <LabelMode>Light mode</LabelMode>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#fff"
                d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
              />
            </svg>
          </>
        )}
      </WrpToggle>
    </>
  );
};
