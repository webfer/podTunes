import styled from 'styled-components';
import { Result } from '../../../interfaces';

const WrpChapter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 62rem;
`;

const WrpDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const ChapterTitle = styled.h3`
  margin-bottom: 1.5rem;
`;
const ChapterDescription = styled.p`
  line-height: 1.8rem;
  overflow-wrap: break-word;
`;
const ChapterAaudioPalyer = styled.audio`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  &::-webkit-media-controls-panel {
    background-color: ${({ theme }) => theme.backgroundAudioPlayer};
  }
  &::-webkit-media-controls-timeline {
    background-color: ${({ theme }) => theme.backgroundAudioPlayerMuteButton};
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }
  &::-webkit-media-controls-mute-button {
    background-color: ${({ theme }) => theme.backgroundAudioPlayerMuteButton};
    border-radius: 50%;
  }
  &::-webkit-media-controls-volume-slider {
    background-color: ${({ theme }) => theme.backgroundAudioPlayerMuteButton};
    border-radius: 25px;
    padding-left: 8px;
    padding-right: 8px;
  }

  &::-webkit-media-controls-play-button {
    background-color: ${({ theme }) => theme.backgroundAudioPlayerMuteButton};
    border-radius: 50%;
  }
  &::-webkit-media-controls-current-time-display {
    color: ${({ theme }) => theme.backgroundAudioPlayerTime};
  }
  &::-webkit-media-controls-time-remaining-display {
    color: ${({ theme }) => theme.backgroundAudioPlayerTime};
  }
`;
interface Props {
  selectChapter: Result;
}

export const ChapterPlayer = ({ selectChapter }: Props) => {
  return (
    <>
      <WrpChapter>
        <WrpDescription>
          <ChapterTitle>{selectChapter.trackName}</ChapterTitle>
          <ChapterDescription>
            {selectChapter.description != null
              ? selectChapter?.description
              : selectChapter?.shortDescription}
          </ChapterDescription>
        </WrpDescription>
        <ChapterAaudioPalyer controls src={selectChapter.episodeUrl} />
      </WrpChapter>
    </>
  );
};
