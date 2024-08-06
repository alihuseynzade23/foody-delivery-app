import { Toaster } from 'react-hot-toast';
import { AppRouter } from './providers/router';
import { useEffect } from 'react';
import { FullScreenLoading, useAuth } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

export function App() {
  const { adminInitialCheck, isLoading } = useAuth();

  const { t } = useTranslation();
  useEffect(() => {
    adminInitialCheck();
  }, []);

  if (isLoading) {
    return <FullScreenLoading text={t`Loading`} />;
  }

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
