import styled from 'styled-components';
import { AsidePodTunes, HeaderComponent } from '../components';

const WrpDetail = styled.section`
  display: flex;
  margin: 0px auto;
  max-width: 90rem;
  padding: 0px 1rem;
  position: relative;
  width: 100%;
`;

const ContainerTunes = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: row;
  gap: 2.5rem;
`;
export const AppPodTunesDetail = () => {
  return (
    <>
      <HeaderComponent />

      <WrpDetail>
        <ContainerTunes>
          <AsidePodTunes />
          <h2>PodTunesDetail</h2>
        </ContainerTunes>
      </WrpDetail>
    </>
  );
};
