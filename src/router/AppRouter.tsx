import { Navigate, Route, Routes } from 'react-router-dom';

import { AppEpisodeDetail, AppHome, AppPodTunesDetail } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home/*" element={<AppHome />} />
        <Route path="/episode" element={<AppEpisodeDetail />} />
        <Route path="podcast/:podcastId" element={<AppPodTunesDetail />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
