import { Suspense, FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage, useAuth } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from '../../../layouts/BaseLayout/ui/BaseLayout';
import { AuthPage } from '../../../../pages/AuthPage';
import { HomePage } from '../../../../pages/HomePage';

// import { BaseLayout } from '../../../layouts/BaseLayout';

// import { DashboardPage } from '../../../../pages/DashboardPage';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <AuthPage />;
  }

  return <BaseLayout>{children}</BaseLayout>;
};

export const AppRouter: FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage title={t`Page not found`} />} />
      </Routes>
    </Suspense>
  );
};
