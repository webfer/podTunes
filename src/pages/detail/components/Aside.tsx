import styled from 'styled-components';

import { type Result } from '../../../interfaces';
import { device } from '../../../styles';
import { Chapter, ChapterPlayer } from '.';

const WrpAsideTunes = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: flex-start;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  @media ${device.lg} {
    max-width: 22rem;
  }
`;

const ImgCardAside = styled.img`
  cursor: pointer;
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
  /* flex: 1 1 auto; */
`;

const AsideInfoTitle = styled.h4`
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;
`;
const AsideInfoAuthor = styled.span`
  cursor: pointer;
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
  line-height: 1.8rem;
`;

interface Props {
  tune: Result[];
  setSelectChapter: (episode: Result) => void;
  tuneInfo: any;
  selectChapter: Result | undefined;
  tuneId: string | undefined;
  navigate: (path: string) => void;
  backToChapter: () => void;
}

export const Aside = ({
  tune,
  tuneInfo,
  selectChapter,
  tuneId,
  setSelectChapter,
  navigate,
  backToChapter,
}: Props) => {
  return (
    <>
      {tune !== undefined ? (
        <>
          <WrpAsideTunes>
            <ImgCardAside
              src={tune[0].artworkUrl600}
              alt={tune[0].collectionName}
              onClick={() => {
                backToChapter();
              }}
            />
            <WrpInfoAside>
              <AsideInfoTitle
                onClick={() => {
                  backToChapter();
                }}
              >
                {tune[0].collectionName}
              </AsideInfoTitle>
              <AsideInfoAuthor
                onClick={() => {
                  backToChapter();
                }}
              >
                by {tune[0].artistName}
              </AsideInfoAuthor>
            </WrpInfoAside>
            <AsideInfoTitle>Description:</AsideInfoTitle>
            <DescriptionAside>{tuneInfo?.summary.label}</DescriptionAside>
          </WrpAsideTunes>

          {selectChapter == null ? (
            <Chapter
              tune={tune}
              setSelectChapter={setSelectChapter}
              tuneId={tuneId}
              navigate={navigate}
            />
          ) : (
            <ChapterPlayer selectChapter={selectChapter} />
          )}
        </>
      ) : (
        <h2>Hello</h2>
      )}
    </>
  );
};
