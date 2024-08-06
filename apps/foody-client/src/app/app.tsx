import { Toaster } from 'react-hot-toast';
import { AppRouter } from './providers/router';
import { useAuth } from '@org/foody-shared-components';
import { useEffect } from 'react';

export function App() {
  const { initialCheck, isLoading } = useAuth();

  useEffect(() => {
    initialCheck();
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
