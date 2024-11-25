import { Suspense, FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../../../pages/LoginPage';
import {
  FullScreenLoading,
  NotFoundPage,
  // useAuth
  authStore,
} from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

import { BaseLayout } from '../../../layouts/BaseLayout';

import { DashboardPage } from '../../../../pages/DashboardPage';
import { ProductsPage } from '../../../../pages/ProductsPage';
import { CategoriesPage } from '../../../../pages/CategoriesPage';
import { RestaurantsPage } from '../../../../pages/RestaurantsPage';

const ProtectedRoute: FC<{ children: ReactNode; header?: boolean }> = ({ children }) => {
  const { isLoggedIn } = authStore();

  if (!isLoggedIn) {
    return <LoginPage />;
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
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="restaurants"
          element={
            <ProtectedRoute>
              <RestaurantsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="categories"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage title={t`Page not found`} />} />
      </Routes>
    </Suspense>
  );
};
