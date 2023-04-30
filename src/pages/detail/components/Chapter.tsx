import styled from 'styled-components';

import { device } from '../../../styles';
import { Result } from '../../../interfaces';
import { formatTime } from '../../../helpers/formatTime';

const WrpChapterList = styled.div`
  margin: 5rem 0 0;
  flex: 1 1;
  @media ${device.lg} {
    margin: 0;
  }
`;
const WrpChapterTotal = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;
const TabletChapter = styled.table`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  margin-top: 1.5rem;
  border-collapse: separate;
  thead {
    tr {
      justify-content: space-between;
      display: flex;
      @media ${device.lg} {
        display: table-row;
      }
    }
  }
  th {
    text-align: start;
    padding: 0.625rem 1rem;
    display: table-cell;
    border-collapse: separate;
  }
  td {
    font-size: 1.125rem;
    padding: 10px;
    text-align: start;
    text-transform: lowercase;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  tr:nth-child(odd) td {
    background: none repeat scroll 0 0
      ${({ theme }) => theme.backgroundChapterList};
  }
  @media ${device.lg} {
    flex-direction: row;
    display: table;
  }
`;

const ThDateDuration = styled.th`
  @media ${device.lg} {
    width: 7.8125rem;
  }
`;

interface Props {
  tune: Result[];
  setSelectChapter: (episode: Result) => void;
  tuneId: string | undefined;
  navigate: (path: string) => void;
}

export const Chapter = ({
  tune,
  setSelectChapter,
  tuneId,
  navigate,
}: Props) => {
  return (
    <>
      <WrpChapterList>
        <WrpChapterTotal>
          <h3>Episodes: {tune.length - 1}</h3>
        </WrpChapterTotal>
        <TabletChapter>
          <thead>
            <tr>
              <th>Title</th>
              <ThDateDuration>Date</ThDateDuration>
              <ThDateDuration>Duration</ThDateDuration>
            </tr>
          </thead>
          <tbody>
            {tune.slice(1).map((chapter, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    navigate(`/podcast/${tuneId}/episode/${chapter.trackId}`);
                    setSelectChapter(chapter);
                  }}
                >
                  <td>{chapter.trackName} </td>
                  <td>{chapter.releaseDate.toString().split('T')[0]}</td>
                  <td>
                    {
                      // Function to format millisecons to hh:mm:ss
                      formatTime(chapter.trackTimeMillis)
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TabletChapter>
      </WrpChapterList>
    </>
  );
};
