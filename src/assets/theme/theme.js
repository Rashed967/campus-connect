import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'El Messiri, Monospace, sans-serif', // Customize your desired font here
  },
  palette: {
    primary: {
      main: '#03045E', // Customize your primary color here
    },
    secondary: {
      main: '#90E0EF', // Customize your secondary color here
    },
    thirdColor : {
        main : '#0077B6'
    },
    fourthColor : {
        main : "#CAF0F8"
    }
  },
});

export default theme;