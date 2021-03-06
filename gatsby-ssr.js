/* From: https://joshwcomeau.com/gatsby/dark-mode/ */
import React from 'react';
/* import Terser from 'terser'; */
/* import { minify } from "terser"; */
import App from './src/components/App';

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/constants';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const InitializeThemeScript = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  const calledFunction = `(${boundFn})()`;

  /* calledFunction = Terser.minify(calledFunction).code; */

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => `${acc}\n--color-${name}: ${colorByTheme.light};`,
    '',
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="FallbackStyles" />);
  setPreBodyComponents(<InitializeThemeScript key="InitializeThemeScript" />);
};

export const wrapPageElement = ({ element }) => <App>{element}</App>;

/* From https://divyanshu013.dev/blog/gatsby-dark-mode/ */
/* import { createElement } from 'react';

const applyDarkThemeClass = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkThemeClass,
    },
  });
  setPreBodyComponents([script]);
};
 */
