import styled from 'styled-components';

const CardSK = styled.div`
  width: 328px;
  background-color: var(--gray-500);
  animation: skeleton 1s ease infinite alternate;
  @keyframes skeleton {
    to {
      opacity: 0.5;
    }
  }
`;

const CardSKImg = styled.div`
  width: 96px;
  height: 96px;
  background-color: var(--gray-500);
`;

const CardSKInfo = styled.div`
  display: flex;
  background-color: var(--gray-500);
  position: relative;
`;
const CardSKName = styled.div`
  background-color: var(--gray-500);
  position: relative;
  width: 100%;
  height: auto;
`;
const CardSKAuthor = styled.div`
  background-color: var(--gray-500);
  position: relative;
  width: 100%;
  height: auto;
`;

export const SkeletonChapter = () => {
  return (
    <CardSK>
      <CardSKImg></CardSKImg>
      <CardSKInfo>
        <CardSKName></CardSKName>
        <div className="cardSKAuthor"></div>
      </CardSKInfo>
    </CardSK>
  );
};
