import styled from 'styled-components';
import { Result } from '../interfaces';

const WrpAsidePodTunes = styled.div`
  display: flex;
  max-width: 20rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
`;

interface Props {
  podTunes: Result[];
}

export const AsidePodTunes = () => {
  return (
    <>
      <WrpAsidePodTunes>
        <h1>AsidePodTunes</h1>
      </WrpAsidePodTunes>
    </>
  );
};
