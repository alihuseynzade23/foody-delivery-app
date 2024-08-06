import { Toaster } from 'react-hot-toast';
import { AppRouter } from './providers/router';
import { useEffect } from 'react';
import { useAuth } from '@org/foody-shared-components';

export function App() {
  const { adminInitialCheck, isLoading } = useAuth();

  useEffect(() => {
    adminInitialCheck();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
