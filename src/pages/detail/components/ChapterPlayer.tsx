import { Result } from '../../../interfaces';

interface Props {
  selectChapter: Result;
}

export const ChapterPlayer = ({ selectChapter }: Props) => {
  return (
    <>
      <div>
        <div>
          <div>
            <h1>{selectChapter.trackName}</h1>
            <p>
              {selectChapter.description != null
                ? selectChapter?.description
                : selectChapter?.shortDescription}
            </p>
          </div>
          <audio controls src={selectChapter.episodeUrl} />
        </div>
      </div>
    </>
  );
};
