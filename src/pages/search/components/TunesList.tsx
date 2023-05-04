import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ls from 'localstorage-slim';

import { Entry } from '../../../interfaces';
import { useNavigate } from 'react-router-dom';
import { CardSearch, FilterTunes } from '.';
import { Header } from '../../../components';
import { Skeleton } from '../../../ui/skeleton';

// Styles
const WrpCards = styled.section`
  display: flex;
  justify-content: center;
  margin: 5rem auto 0;
  max-width: 90rem;
  position: relative;
  width: 100%;
`;

const ContinerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const NoResultText = styled.h4`
  display: block;
  position: relative;
`;

const BaseUrl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

// Encrypt data on localstorage in order to protect data
ls.config.encrypt = true;

export const TunesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [podtunes, setPodtunes] = useState<Entry[]>([]);
  const [filterPodtunes, setFilterPodtunes] = useState<string | null>(null);

  const Navigate = useNavigate();

  // function to retrieve  by filter input and show data on the podcast lists
  const FilteredPodtunes = useMemo(() => {
    return typeof filterPodtunes === 'string' && filterPodtunes.length > 0
      ? podtunes.filter((podtunes) => {
          return (
            podtunes['im:name'].label
              .toLowerCase()
              .includes(filterPodtunes.toLowerCase()) ||
            podtunes['im:artist'].label
              .toLowerCase()
              .includes(filterPodtunes.toLowerCase())
          );
        })
      : podtunes;
  }, [filterPodtunes, podtunes]);

  useEffect(() => {
    const getData = async () => {
      // validate if there is data on localStorage, if there isn't save it on localstorage
      setIsLoading(true);
      ls.get('podtunes') === null
        ? fetch(BaseUrl)
            .then(async (response) => await response.json())
            .then((response) => {
              setPodtunes(response.feed.entry);
              // save podcast in localstorage just for 1 day (86400)
              ls.set('podtunes', response.feed.entry, { ttl: 86400 });
            })
            .catch((err) => {
              // catch error if it is generated
              console.log('Error fetching data: ', err);
            })
        : // if there is data set podcast
          setPodtunes(ls.get('podtunes') as React.SetStateAction<Entry[]>);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <FilterTunes
        FilteredPodtunes={FilteredPodtunes}
        setFilterPodtunes={setFilterPodtunes}
      />
      <WrpCards>
        <ContinerCards>
          {isLoading ? (
            FilteredPodtunes.map((pods, idx) => (
              <Skeleton tune={pods} key={idx} />
            ))
          ) : FilteredPodtunes?.length > 0 ? (
            FilteredPodtunes.map((tuns, ind) => (
              <CardSearch tune={tuns} key={ind} navigate={Navigate} />
            ))
          ) : (
            <NoResultText>
              We apologize for the inconvenience, but your search did not yield
              any results. Please try using a different search term to find what
              you are looking for.
            </NoResultText>
          )}
        </ContinerCards>
      </WrpCards>
    </>
  );
};
