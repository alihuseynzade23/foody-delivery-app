import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { GlobalStyles } from '@org/foody-shared-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </StrictMode>,
);
