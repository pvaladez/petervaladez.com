export const COLORS = {
  text: {
    light: 'hsl(0deg 0% 27%)', // #464646 dark grey
    dark: 'hsl(210deg 17% 86%)', // light grey
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(250deg 6% 30%)', // dark grey
  },
  emBackground: {
    light: 'hsl(195deg 66% 91%)', // light blue
    dark: 'hsl(216deg 23% 46%)', // dark blue
  },
  backgroundGradient: {
    light: 'radial-gradient(#ffffff, #b7b7b7)',
    dark: 'radial-gradient(hsl(225deg 9% 56%), hsl(224deg 15% 28%))',
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(213deg 49% 21%)', // Dark Blue #272343
    dark: 'hsl(210deg 57% 66%)', // light-bluish
  },
  imageFilter: {
    light: 'none',
    dark: 'brightness(0.92)',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
