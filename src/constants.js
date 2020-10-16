export const COLORS = {
  text: {
    light: 'hsl(0deg 0% 27%)', // #464646 dark grey
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(250deg 6% 29%)', // dark grey
  },
  background_gradient: {
    light: 'radial-gradient(#ffffff, #b7b7b7)',
    dark: 'radial-gradient(#d0d0d0, #6b6b6b)', 
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: '#272343', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
  },
  image_filter: {
    light: 'none',
    dark: 'brightness(0.85)',
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