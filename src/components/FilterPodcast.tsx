import styled from 'styled-components';

const WrpFilter = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  margin: 0;
  max-width: 90rem;
  padding: 0 1.75rem;
  position: relative;
  transform: translateX(-50%);
  width: 100%;
  justify-content: end;
`;
const ContainerSerach = styled.div`
  column-gap: 1rem;
  display: flex;
  margin: 1rem 0;
  align-items: center;
  width: 100%;
  max-width: 450px;
`;
const CounterPodcast = styled.span`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundButton};
  color: var(--white);
`;
const InputSearch = styled.input`
  position: relative;
  display: flex;
  border: 1px solid var(--gray-300);
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
`;

export const FilterPodcast = () => {
  return (
    <>
      <WrpFilter>
        <ContainerSerach>
          <CounterPodcast>100</CounterPodcast>
          <InputSearch placeholder="Search..." />
        </ContainerSerach>
      </WrpFilter>
    </>
  );
};
