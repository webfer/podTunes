import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ls from 'localstorage-slim';

import { Entry, Result } from '../../interfaces';
import { device } from '../../styles';
import { AsideTunes, ChapterList } from './components';
import { Header } from '../../components';

const WrpDetail = styled.section`
  display: flex;
  margin: 5rem auto 0;
  max-width: 90rem;
  padding: 0 1rem;
  position: relative;
  width: 100%;
`;

const ContainerTunes = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  @media ${device.lg} {
    flex-direction: row;
    gap: 1rem;
  }
  @media ${device.xxl} {
    gap: 4rem;
  }
`;
export const AppDetail = () => {
  const [tune, setTune] = useState<Result[]>();
  const [tuneInfo, setTuneInfo] = useState<Entry>();
  //  const [selectEpisode, setSelectEpisode] = useState<Result>();

  const { tuneId } = useParams();

  const location = useLocation();

  const allOrigins = (baseUrl: string) =>
    `https://api.allorigins.win/get?url=${encodeURI(baseUrl)}`;

  // console.log(PodtunesId);
  useEffect(() => {
    if (ls.get(`${tuneId}`) === null) {
      fetch(
        allOrigins(
          `https://itunes.apple.com/lookup?id=${tuneId}&media=podcast&entity=podcastEpisode&limit=100`
        )
      )
        .then(async (res) => {
          if (res.ok) return await res.json();
          throw new Error("The network's response was unsatisfactory.");
        })
        .then(async (data) => {
          setTune(JSON.parse(data.contents).results);
          ls.set(`${tuneId}`, JSON.parse(data.contents).results, {
            ttl: 86400,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setTune(ls.get(`${tuneId}`)!);
    }
  }, [tuneId]);

  useEffect(() => {
    setTuneInfo(location.state.tune);
  }, [location]);

  return (
    <>
      <Header />

      <WrpDetail>
        <ContainerTunes>
          {tune != null && tune.length > 0 ? (
            <>
              <AsideTunes tune={tune} podtuneInfo={tuneInfo} />
              <ChapterList tune={tune} tuneId={tuneId} />
            </>
          ) : (
            <h1>Hello!!!</h1>
          )}
        </ContainerTunes>
      </WrpDetail>
    </>
  );
};
