import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // Custom primary color
    },
    secondary: {
      main: '#FF4081', // Custom secondary color
    },
    background: {
      default: '#EFEFEF', // Custom default background color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Custom font family
    fontSize: 16, // Custom default font size
  },
  spacing: 8, // Custom spacing unit
  // ... other theme properties
});

export default theme;
