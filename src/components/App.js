import React from 'react';

import { ThemeProvider } from './ThemeProvider.js';

function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default App;
