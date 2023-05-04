import styled from 'styled-components';
import { device } from '../../styles';

const WrpAsideTunes = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.25rem;
  border-radius: 4px;
  @media ${device.lg} {
    max-width: 22rem;
  }

  /* box */
  .boxSK {
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      animation: shimmer 2s infinite;
      content: '';
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

const ImgCardAside = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  min-width: 150px;
  width: 200px;
  background: none repeat scroll 0 0 ${({ theme }) => theme.backgroundSkeleton};
  height: 200px;
`;

const WrpInfoAside = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 1rem 0;
  flex-flow: column wrap;
  /* flex: 1 1 auto; */
`;

const AsideInfoTitle = styled.h4`
  display: inline-block;
  overflow: hidden;
  position: relative;
  background: none repeat scroll 0 0 ${({ theme }) => theme.backgroundSkeleton};
  height: 1.5rem;
  margin-top: 0.5rem;
  width: 100%;
`;

const DescriptionAside = styled.div`
  display: inline-block;
  margin-top: 1rem;
  position: relative;
  width: 100%;
  span {
    display: inline-block;
    overflow: hidden;
    position: relative;
    background: none repeat scroll 0 0
      ${({ theme }) => theme.backgroundSkeleton};
    height: 1rem;
    width: 100%;
    margin: 0.1rem 0;
    &:nth-child(1) {
      width: 80%;
    }
    &:nth-child(2) {
      width: 95%;
    }
    &:nth-child(3) {
      width: 83%;
    }
    &:nth-child(4) {
      width: 30%;
    }
  }
`;
const AsideInfoAuthor = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  background: none repeat scroll 0 0 ${({ theme }) => theme.backgroundSkeleton};
  height: 1rem;
  width: 75%;
  margin: 1rem 0 0.5rem 0;
`;

// tablet

const WrpChapterList = styled.div`
  margin: 5rem 0 0;
  flex: 1 1;
  @media ${device.lg} {
    margin: 0;
  }

  /* box */
  .boxSK {
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      animation: shimmer 2s infinite;
      content: '';
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

const TableTitle = styled(AsideInfoTitle)`
  width: 80%;
  height: 2.2rem;
  @media ${device.lg} {
    width: 60%;
  }
`;

const TableTitleTwo = styled(TableTitle)`
  margin-top: 2.2rem;
`;

const TabletChapter = styled.table`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
  overflow: hidden;
  tr {
    display: flex;
    flex-wrap: wrap;
    td:nth-child(1) {
      width: calc(100% - 264px);
      margin-right: 2px;
    }
    td:nth-child(2) {
      margin-right: 2px;
    }
    td:last-child,
    td:nth-child(2) {
      width: 130px;
    }
  }

  td {
    position: relative;
    font-size: 1.125rem;
    padding: 10px;
    overflow: hidden;
  }
  tr:nth-child(odd) {
    td {
      position: relative;
      overflow: hidden;
      height: 30px;
      background: none repeat scroll 0 0
        ${({ theme }) => theme.backgroundSkeleton};
    }
  }
  @media ${device.lg} {
    flex-direction: row;
    display: table;
  }
`;

export const AppSkeleton = () => {
  return (
    <>
      <WrpAsideTunes>
        <ImgCardAside className="boxSK" />
        <WrpInfoAside>
          <AsideInfoTitle className="boxSK"></AsideInfoTitle>
          <AsideInfoAuthor className="boxSK"></AsideInfoAuthor>
        </WrpInfoAside>
        <AsideInfoTitle className="boxSK"></AsideInfoTitle>
        <DescriptionAside>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
        </DescriptionAside>
        <DescriptionAside>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
          <span className="boxSK"></span>
        </DescriptionAside>
      </WrpAsideTunes>

      {/* Tablet */}
      <WrpChapterList>
        <TableTitle className="boxSK"></TableTitle>
        <TabletChapter>
          <tbody>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
          </tbody>
        </TabletChapter>

        <TableTitleTwo className="boxSK"></TableTitleTwo>
        <TabletChapter>
          <tbody>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
              <td className="boxSK"></td>
            </tr>
          </tbody>
        </TabletChapter>
      </WrpChapterList>
    </>
  );
};
