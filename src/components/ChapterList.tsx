import styled from 'styled-components';
import { Result } from '../interfaces';
import { formatTime } from '../helpers/formatTime';

const WrpChapterList = styled.div`
  flex: 1 1;
`;
const WrpChapterTotal = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;
const TabletChapter = styled.table`
  text-align: left;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderHeader};
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  margin-top: 1.5rem;
  border-collapse: separate;
  th {
    text-align: start;
    padding: 0.625rem 1rem;
    display: table-cell;
    border-collapse: separate;
  }
  td {
    padding: 10px;
    text-align: start;
  }
  tr:nth-child(odd) td {
    background: none repeat scroll 0 0 var(--gray-200);
  }
`;

interface Props {
  tune: Result[];
}

export const ChapterList = ({ tune }: Props) => {
  return (
    <>
      <WrpChapterList>
        <WrpChapterTotal>
          <h3>Episodes: {tune.length}</h3>
        </WrpChapterTotal>
        <TabletChapter>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {tune.slice(1).map((chapter, index) => {
              return (
                <tr>
                  <td>{chapter.trackName}</td>
                  <td>{chapter.releaseDate.toString().split('T')[0]}</td>
                  <td>{formatTime(chapter.trackTimeMillis)}</td>
                </tr>
              );
            })}
          </tbody>
        </TabletChapter>
      </WrpChapterList>
    </>
  );
};
