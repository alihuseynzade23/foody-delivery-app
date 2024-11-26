import { AppRouter } from './providers/router';
import { FullScreenLoading, useAuth } from '@org/foody-shared-components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function App() {
  const { initialCheck, isLoading, setupInterceptors, user } = useAuth();

  const { t } = useTranslation();

  useEffect(() => {
    initialCheck();
    setupInterceptors();
  }, []);

  if (isLoading) {
    return <FullScreenLoading text={t('Loading')} />;
  }

  return <AppRouter />;
}

export default App;
