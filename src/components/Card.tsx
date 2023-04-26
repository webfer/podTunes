import styled from 'styled-components';
import { Entry } from '../interfaces';
import { device } from '../styles';

interface Props {
  podcast: Entry;
}

const WrpCard = styled.div`
  display: flex;
  padding: 1rem;
  margin-bottom: 6rem;
  width: 100%;
  min-width: 360px;
  @media ${device.lg} {
    width: 50%;
  }
  @media ${device.xl} {
    width: 33.33%;
  }
  @media ${device.xxl} {
    width: 25%;
  }
`;

const CardItem = styled.div`
  border: 1px solid ${({ theme }) => theme.borderHeader};

  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  align-items: center;
`;

const CardInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
`;

const WrpImg = styled.div`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
  margin-top: -4rem;
`;

const TitleCard = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Img = styled.img`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: block;
  position: relative;
  width: 100%;
`;

const Author = styled.p``;

export const Card = ({ podcast }: Props) => {
  return (
    <>
      <WrpCard>
        <CardItem>
          <WrpImg>
            <Img
              src={podcast['im:image'][2].label}
              alt={podcast['im:name'].label}
            />
          </WrpImg>
          <CardInfo>
            <TitleCard>{podcast.title.label}</TitleCard>
            <Author>Author: {podcast['im:artist'].label}</Author>
          </CardInfo>
        </CardItem>
      </WrpCard>
    </>
  );
};
