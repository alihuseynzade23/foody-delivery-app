import { Toaster } from 'react-hot-toast';
import { AppRouter } from './providers/router';
import { FullScreenLoading, useAuth } from '@org/foody-shared-components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function App() {
  const { initialCheck, isLoading } = useAuth();

  const { t } = useTranslation();

  useEffect(() => {
    initialCheck();
  }, []);

  if (isLoading && localStorage.getItem('user')) {
    return <FullScreenLoading text={t('Loading')} />;
  }

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
