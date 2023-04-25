import { useEffect, useMemo, useState } from 'react';
import ls from 'localstorage-slim';

import { HeaderComponent, FilterPodcast } from '../components';
import { Entry } from '../interfaces';

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
          return podcasts['im:name'];
        })
      : podcasts;
  }, []);

  return (
    <>
      <HeaderComponent />
      <FilterPodcast />
      <div>AppHome</div>
    </>
  );
};
