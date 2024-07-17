import { Suspense, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminPage } from '../../../../pages/AdminPage';
import { NotFoundPage } from '@org/foody-shared-components';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
