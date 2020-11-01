import React from 'react';

import ThemeProvider from './ThemeProvider';

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
