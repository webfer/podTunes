import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ls from 'localstorage-slim';

import { AsidePodtunes, ChapterList, HeaderComponent } from '../components';
import { Entry, Result } from '../interfaces';

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
  flex-direction: row;
  gap: 4rem;
`;
export const AppPodtunesDetail = () => {
  const [tune, setTune] = useState<Result[]>();
  const [tuneInfo, setTuneInfo] = useState<Entry>();
  //  const [selectEpisode, setSelectEpisode] = useState<Result>();

  const { tuneId } = useParams();

  const location = useLocation();

  // console.log(PodtunesId);
  useEffect(() => {
    if (ls.get(`${tuneId}`) === null) {
      fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${tuneId}&media=podcast&entity=podcastEpisode&limit=20`
        )}`
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
      <HeaderComponent />

      <WrpDetail>
        <ContainerTunes>
          {tune != null && tune.length > 0 ? (
            <>
              <AsidePodtunes tune={tune} podtuneInfo={tuneInfo} />
              <ChapterList tune={tune} />
            </>
          ) : (
            <h1>Hello!!!</h1>
          )}
        </ContainerTunes>
      </WrpDetail>
    </>
  );
};
