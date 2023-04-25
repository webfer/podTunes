import { useEffect, useState } from 'react';
import { HeaderComponent, FilterPodcast } from '../components';
import { Entry } from '../interfaces';

let BaseUrl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const AppHome = () => {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);

  useEffect(() => {
    localStorage.getItem('podcasts') === null
      ? fetch(BaseUrl)
          .then(async (res) => await res.json())
          .then((res) => {
            setPodcasts(res.feed.entry);
            localStorage.setItem('podcasts', res.feed.entry);
          })
      : setPodcasts(podcasts);
  }, []);

  return (
    <>
      <HeaderComponent />
      <FilterPodcast />
      <div>AppHome</div>
    </>
  );
};
