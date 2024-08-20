import { Suspense, FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../../../pages/LoginPage';
import { FullScreenLoading, NotFoundPage, useAuth } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

import { BaseLayout } from '../../../layouts/BaseLayout';

import { DashboardPage } from '../../../../pages/DashboardPage';
import { ProductsPage } from '../../../../pages/ProductsPage';
import { CategoriesPage } from '../../../../pages/CategoriesPage';

const ProtectedRoute: FC<{ children: ReactNode; header?: boolean }> = ({ children }) => {
  const { isLoggedIn } = useAuth();

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
