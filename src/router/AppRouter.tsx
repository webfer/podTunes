import { Navigate, Route, Routes } from 'react-router-dom';

import { AppEpisodeDetail, AppHome, AppPodtunesDetail } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home/*" element={<AppHome />} />
        <Route path="/episode" element={<AppEpisodeDetail />} />
        <Route path="podcast/:tuneId" element={<AppPodtunesDetail />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
