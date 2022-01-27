import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Timi Ambaye - Mobile software developer, React, React-native, kotlin" />
          <meta name="description" content="Hello there, Its Timi Ambaye. I am a react-native and kotlin mobile developer, a fullstack react web developer as well." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Timi Ambaye - Mobile software developer" />
          <meta property="og:description" content="Hello there. Its Timi Ambaye I am an Android native and cross platform React and React Native developer" />
          <meta property="og:image" content="https://www.timiambaye.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Timi Ambaye - Mobile software developer" />
          <meta property="twitter:description" content="Hello there, Its Timi Ambaye. I am a mobile software developer" />
          <meta property="twitter:image" content="https://www.timiambaye.com/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
