import styled from 'styled-components';
import { Entry } from '../interfaces';
import { device } from '../styles';

interface Props {
  podtunes: Entry;
  navigate: (path: string, state?: any) => void;
}

// Styles
const WrpCard = styled.div`
  display: flex;
  margin-bottom: 4rem;
  min-width: 360px;
  padding: 1rem;
  width: 100%;
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
  -webkit-transition: transform 0.5s;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  width: 100%;
  padding: 2rem 2rem 1.5rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  line-height: 1.5em;
  width: 100%;
`;

const WrpImg = styled.div`
  height: 6rem;
  margin-bottom: 1rem;
  margin-top: -5rem;
  width: 6rem;
`;

const TitleCard = styled.h4`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${({ theme }) => theme.colorTitle};
  display: -webkit-box;
  font-size: 1.125rem;
  line-height: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;
const Img = styled.img`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: block;
  position: relative;
  width: 100%;
`;

const Author = styled.p`
  color: ${({ theme }) => theme.colorAuthorText};
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  margin-top: auto;
`;

// Main card
export const Card = ({ podtunes, navigate }: Props) => {
  return (
    <>
      <WrpCard
        onClick={() => {
          navigate(`/podcast/${podtunes.id.attributes['im:id']}`, {
            state: {
              podtunes,
            },
          });
        }}
      >
        <CardItem>
          <WrpImg>
            <Img
              src={podtunes['im:image'][2].label}
              alt={podtunes['im:name'].label}
            />
          </WrpImg>
          <CardInfo>
            <TitleCard>{podtunes.title.label}</TitleCard>
            <Author>Author: {podtunes['im:artist'].label}</Author>
          </CardInfo>
        </CardItem>
      </WrpCard>
    </>
  );
};
