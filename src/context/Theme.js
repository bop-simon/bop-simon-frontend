import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff5c8a'
    },
    secondary: {
      main: '#a51fff'
    },
    pink: {
      main: '#ff5c8a'
    },
    purple: {
      main: '#A51FFF'
    },
    yellow: {
      main: '#FCD116'
    },
    jet: {
      primary: '#333333'
    },
    green: {
      main: '#3BC06F'
    },
    tuscany: {
      main: '#C99DA3'
    },
    text: {
      primary: '#333333'
    },
    divider: '#FCD116',
    appBar: '#fff'
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none'
          }
        }
      },
      thumb: {
        width: 24,
        height: 24
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      }
    },
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px'
      }
    }
  },
  typography: {
    fontFamily: 'Work Sans',
    h1: {
      fontFamily: 'serif',
      fontWeight: 700
    },
    h2: {
      fontFamily: 'IBM Plex Mono'
    },
    overline: {
      fontFamily: 'IBM Plex Mono'
    },
    button: {
      fontFamily: 'Quicksand',
      fontWeight: 700
    }
  }
})

export default theme
