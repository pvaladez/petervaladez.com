import React from 'react';

import App from './src/components/App.js';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
