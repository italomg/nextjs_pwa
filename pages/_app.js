import React from 'react';
import App from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { lime, green } from '@material-ui/core/colors';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    // Initialize anything that shall be needed across the entire application
  }

  createTheme() {
    let theme = createMuiTheme({
      palette: {
        primary: green,
        secondary: lime,
      },
      status: {
        danger: 'red',
      },
      typography: {
        fontSize: 12,
        color: 'white',
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              overscrollBehaviorY: 'contain',
              backgroundRepeat: 'repeat',
              backgroundImage: 'url(/images/background.jpeg)',
            }
          },
        },
      },
    });

    return responsiveFontSizes(theme);
  }

  render() {
    const { Component, pageProps } = this.props;
    const theme = this.createTheme();

    return(
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>);
  }
}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// Main.getInitialProps = async function(context) {
//   const appProps = await App.getInitialProps(context);

//   // It is possible to use this as a interface betwen FE and BE
//   // this allows one to send environment variables from one end
//   // to the other 
//   return {
//     ...appProps,
//     SERVER_SIDE_ENV_VAR: process.env.SERVER_SIDE_ENV_VAR,
//   };
// };

export default Main
