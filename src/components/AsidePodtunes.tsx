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
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

const ImgCardAside = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  min-width: 150px;
  max-width: 200px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

const WrpInfoAside = styled.div`
  margin: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.borderHeader};
  border-bottom: 1px solid ${({ theme }) => theme.borderHeader};
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 1rem 0;
  flex-flow: column wrap;
  flex: 1 1 auto;
`;

const AsideInfoTitle = styled.h4`
  padding: 0.5rem 0;
  width: 100%;
`;
const AsideInfoAuthor = styled.span`
  font-style: italic;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 1.125rem;
  line-height: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const DescriptionAside = styled.p`
  font-style: italic;
  width: 100%;
  overflow-wrap: break-word;
`;

interface Props {
  tune: Result[];
  podtuneInfo: any;
}

export const AsidePodtunes = ({ tune, podtuneInfo }: Props) => {
  return (
    <>
      <WrpAsidePodtunes>
        {tune !== undefined ? (
          <>
            <ImgCardAside
              src={tune[0].artworkUrl600}
              alt={tune[0].collectionName}
            />
            <WrpInfoAside>
              <AsideInfoTitle>{tune[0].collectionName}</AsideInfoTitle>
              <AsideInfoAuthor>by {tune[0].artistName}</AsideInfoAuthor>
            </WrpInfoAside>
            <AsideInfoTitle>Description:</AsideInfoTitle>
            <DescriptionAside>{podtuneInfo?.summary.label}</DescriptionAside>
          </>
        ) : (
          <h2>Hello</h2>
        )}
      </WrpAsidePodtunes>
    </>
  );
};
