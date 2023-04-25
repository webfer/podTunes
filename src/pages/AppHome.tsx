import { useEffect, useMemo, useState } from 'react';
import ls from 'localstorage-slim';

import { HeaderComponent, FilterPodcast, Card } from '../components';
import { Entry } from '../interfaces';

const BaseUrl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

ls.config.encrypt = true;
// Encrypt data on localstorage in order to protect data
export const AppHome = () => {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
  const [filterPodTunes, setFilterPodTunes] = useState<string | null>(null);

  // function to retrieve  by filter input and show data on the podcast lists
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

  useEffect(() => {
    // validate if there is data on localStorage, if there isn't save it on localstorage
    ls.get('PodTunes') === null
      ? fetch(BaseUrl)
          .then(async (response) => await response.json())
          .then((response) => {
            setPodcasts(response.feed.entry);
            // save podcast in localstorage just for 1 day (86400)
            ls.set('PodTunes', response.feed.entry, { ttl: 86400 });
          })
          .catch((err) => {
            // catch error if it is generated
            console.log('Error fetching data: ', err);
          })
      : // if there is data set podcast
        setPodcasts(ls.get('PodTunes') as React.SetStateAction<Entry[]>);
  }, []);

  return (
    <>
      <HeaderComponent />
      <FilterPodcast
        FilteredPodTunes={FilteredPodTunes}
        setFilterPodTunes={setFilterPodTunes}
      />
      {FilteredPodTunes.map((pods, ind) => (
        <Card podcast={pods} key={ind} />
      ))}
      <div>AppHome</div>
    </>
  );
};
