import styled from 'styled-components';
import { Result } from '../interfaces';

const WrpAsidePodtunes = styled.div`
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
  tune: Result[];
  podtunesInfo: any;
}

export const AsidePodtunes = ({ tune, podtunesInfo }: Props) => {
  return (
    <>
      <WrpAsidePodtunes>
        {tune !== undefined ? (
          <img src={tune[0].artworkUrl600} alt={tune[0].collectionName} />
        ) : (
          <h2>Hello</h2>
        )}

        <h1>AsidePodtunes</h1>
      </WrpAsidePodtunes>
    </>
  );
};
