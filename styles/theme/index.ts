import { createTheme } from '@material-ui/core/styles'

const defaultTheme = {
  primaryTextColor: '#2b6da3',
  palette: {
    primary: {
      main: '#637381',
    },
    secondary: {
      main: '#38B6FF',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgb(33, 43, 54)',
      secondary: '#637381',
    },
    action: {
      selected: 'rgb(33, 43, 54)',
      selectedOpacity: 1,
      focus: '#00AB55',
    },
  },
}

export default createTheme(defaultTheme)
