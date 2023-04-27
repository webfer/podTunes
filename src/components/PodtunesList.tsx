import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ls from 'localstorage-slim';

import { HeaderComponent, FilterPodtunes, Card } from '.';
import { Entry } from '../interfaces';
import { useNavigate } from 'react-router-dom';

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
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: box;
  -webkit-display: flex;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const NoResultText = styled.h4`
  display: block;
  position: relative;
`;

const BaseUrl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

// Encrypt data on localstorage in order to protect data
ls.config.encrypt = true;

export const PodtunesList = () => {
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
    // validate if there is data on localStorage, if there isn't save it on localstorage
    ls.get('Podtunes') === null
      ? fetch(BaseUrl)
          .then(async (response) => await response.json())
          .then((response) => {
            setPodtunes(response.feed.entry);
            // save podcast in localstorage just for 1 day (86400)
            ls.set('Podtunes', response.feed.entry, { ttl: 86400 });
          })
          .catch((err) => {
            // catch error if it is generated
            console.log('Error fetching data: ', err);
          })
      : // if there is data set podcast
        setPodtunes(ls.get('Podtunes') as React.SetStateAction<Entry[]>);
  }, []);
  return (
    <>
      <HeaderComponent />
      <FilterPodtunes
        FilteredPodtunes={FilteredPodtunes}
        setFilterPodtunes={setFilterPodtunes}
      />
      <WrpCards>
        <ContinerCards>
          {FilteredPodtunes?.length > 0 ? (
            // Map every podcast
            FilteredPodtunes.map((pods, ind) => (
              <Card podtunes={pods} key={ind} navigate={Navigate} />
            ))
          ) : (
            // If your search didn't yield any results, show a message on the screen
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
