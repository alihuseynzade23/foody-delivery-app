import { Suspense, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AdminPage } from '../../../../pages/AdminPage';
import { NotFoundPage } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

export const AppRouter: FC = () => {

  const {t} = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage title={t`Page not found`} />} />
      </Routes>
    </Suspense>
  );
};
