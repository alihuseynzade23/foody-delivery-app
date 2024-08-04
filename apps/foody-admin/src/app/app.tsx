import { Toaster } from 'react-hot-toast';
import { AppRouter } from './providers/router';

export function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
