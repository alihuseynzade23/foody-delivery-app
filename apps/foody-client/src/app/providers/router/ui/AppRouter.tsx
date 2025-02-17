import { Suspense, FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  FullScreenLoading,
  NotFoundPage,
  useAuth,
  // authStore
} from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

import { BaseLayout } from '../../../layouts/BaseLayout/ui/BaseLayout';

import { AuthPage } from '../../../../pages/AuthPage';
import { HomePage } from '../../../../pages/HomePage';
import { RestaurantDetailsPage, RestaurantsPage } from '../../../../pages/RestaurantsPage';
import { UserPage } from '../../../../pages/UserPage';

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
    <Suspense fallback={<FullScreenLoading text={t`Loading`} />}>
      <Routes>
        <Route
          index
          element={
            <BaseLayout>
              <HomePage />
            </BaseLayout>
          }
        />
        <Route
          path="/restaurants"
          element={
            <ProtectedRoute>
              <RestaurantsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurants/:id"
          element={
            <ProtectedRoute>
              <RestaurantDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage title={t`Page not found`} />} />
      </Routes>
    </Suspense>
  );
};
