import { Navigate, Route, Routes } from 'react-router-dom';

import { AppChapter, AppDetail, AppSearch } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home/*" element={<AppSearch />} />
        <Route path="/episode" element={<AppChapter />} />
        <Route path="podcast/:tuneId" element={<AppDetail />} />
        {/* <Route path="podcast/:tuneId" element={<AppDetail />} /> */}

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
