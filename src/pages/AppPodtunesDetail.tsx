import styled from 'styled-components';
import { AsidePodtunes, HeaderComponent } from '../components';

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
export const AppPodtunesDetail = () => {
  return (
    <>
      <HeaderComponent />

      <WrpDetail>
        <ContainerTunes>
          <AsidePodtunes />
          <h2>PodtunesDetail</h2>
        </ContainerTunes>
      </WrpDetail>
    </>
  );
};
