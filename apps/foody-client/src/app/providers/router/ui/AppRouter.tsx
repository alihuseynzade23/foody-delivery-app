import { Suspense, FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from '../../../layouts/BaseLayout/ui/BaseLayout';
import { LoginPage } from '../../../../pages/LoginPage';
import { HomePage } from '../../../../pages/HomePage';

// import { BaseLayout } from '../../../layouts/BaseLayout';

// import { DashboardPage } from '../../../../pages/DashboardPage';

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  // const { isLoggedIn } = useAuth();
  // if (!isLoggedIn) {
  //   return <LoginPage />;
  // }

  return <BaseLayout>{children}</BaseLayout>;
};

export const AppRouter: FC = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="/home"
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