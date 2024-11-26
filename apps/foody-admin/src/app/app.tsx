import { AppRouter } from './providers/router';
import { useEffect } from 'react';
import { FullScreenLoading, useAuth } from '@org/foody-shared-components';
import { useTranslation } from 'react-i18next';

export function App() {
  const { initialCheck, setupInterceptors, user, isLoading, isLoggedIn } = useAuth();
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
