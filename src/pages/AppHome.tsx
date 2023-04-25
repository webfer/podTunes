import { useEffect, useMemo, useState } from 'react';
import ls from 'localstorage-slim';

import { HeaderComponent, FilterPodcast } from '../components';
import { Entry } from '../interfaces';
import { Card } from '../components/Card';

let BaseUrl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const AppHome = () => {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);

  const [filterPodTunes, setFilterPodTunes] = useState<string | null>(null);

  useEffect(() => {
    ls.get('PodTunes') === null
      ? fetch(BaseUrl)
          .then(async (response) => await response.json())
          .then((response) => {
            setPodcasts(response.feed.entry);
            ls.set('PodTunes', response.feed.entry, { ttl: 30 });
            console.log(response);
          })
          .catch((err) => {
            console.log('Error fetching data: ', err);
          })
      : setPodcasts(ls.get('PodTunes') as React.SetStateAction<Entry[]>);
  }, []);

  const FilteredPodTunes = useMemo(() => {
    return typeof filterPodTunes === 'string' && filterPodTunes.length > 0
      ? podcasts.filter((podcasts) => {
          return (
            podcasts['im:name'].label
              .toLowerCase()
              .includes(filterPodTunes.toLowerCase()) ||
            podcasts['im:artist'].label
              .toLowerCase()
              .includes(filterPodTunes.toLowerCase())
          );
        })
      : podcasts;
  }, [filterPodTunes, podcasts]);

  return (
    <>
      <HeaderComponent />
      <FilterPodcast
        FilteredPodTunes={FilteredPodTunes}
        setFilterPodTunes={setFilterPodTunes}
      />
      {FilteredPodTunes.map((tunes, index) => (
        <Card podcast={tunes} />
      ))}
      <div>AppHome</div>
    </>
  );
};
