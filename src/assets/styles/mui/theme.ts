import { createTheme } from '@mui/material/styles';
import GothamBlack from '../../fonts/GothamBlack.otf';
import GothamMedium from '../../fonts/GothamMedium.otf';


const palette = {
  primary: { 
    main: '#f7941d',
    light: '#42a5f5',
    dark: '#333333'
  },
  secondary: { 
    main: '#009999',
    light: '#42a5f5',
    dark: '#333333'
  }
}

export const typography = {
  fontFamily: [
    'GothamBlack',
    'GothamMedium',
    'Montserrat-Regular',
    'Montserrat-Light',
    'Lato',
    'Roboto'
  ].join(','),

  h1: {
    fontFamily: '"GothamBlack", sans-serif',
    fontSize: ' 6.625rem',
    fontWeight: 900,
    color: palette.primary.main
  },
  h2: {
    fontFamily: '"GothamBlack", sans-serif',
    fontWeight: 900,
    fontSize: '3.25rem',
    color: palette.secondary.main
  },
  h3: {
    fontFamily: '"GothamBlack", sans-serif',
    fontSize: '2.5rem',
    fontWeight: 900,
    color: palette.secondary.main
  },
  h4: { fontFamily: '"GothamBlack", sans-serif' },
  h5: { fontFamily: '"GothamBlack", sans-serif' },
  h6: {
    fontFamily: '"GothamMedium", sans-serif',
    fontWeight: 900,
    fontSize: '1.5625rem',
    color: palette.secondary.main
  },
  button: { fontFamily: '"GothamBlack", sans-serif' },
  subtitle1: {
    fontFamily: '"GothamBlack", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 700,
    color: palette.secondary.main
  },
  subtitle2: { fontFamily: '"GothamBlack", sans-serif' },
  body1: {
    fontFamily: '"GothamBlack", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 700,
    color: palette.primary.dark
  },
  body2: {
    fontFamily: '"GothamMedium", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 100,
    color: palette.primary.dark
  },
  caption: { fontFamily: '"GothamBlack", sans-serif' },
  overline: { fontFamily: '"GothamBlack", sans-serif' }
}

export const lightComponents = {
  // Name of the component
  MuiAppBar: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        backgroundColor: '#fff',
        borderRadius: '0 !important'
      }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: 0,
        border: 'solid 1px black',
        boxShadow: 'none'
      }
    }
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        borderRadius: '0.5rem'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 10
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '0.9rem'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 30
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        margin: '0.5rem'
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      '@font-face': [
        {
          fontFamily: 'NeuzeitGroBla',
          fontStyle: 'normal',
          src: `url(${GothamBlack}) format('opentype')`
        },
        {
          fontFamily: 'NeuzeitGroLig',
          fontStyle: 'normal',
          src: `url(${GothamMedium}) format('opentype')`
        },
      ]
    }
  }
}

const theme = createTheme({
  palette,
  typography
});

export default theme;