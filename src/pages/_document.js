import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="keywords" content="Timi Ambaye, Web, mobile kotlin, full stack React developer, react native." />
        <meta name="content" content="Timi Ambaye potfolio website. Full stack website developer using react, Django, Nodejs, python and also mobile application development with kotlin and react native." />
        <meta name="title" content="Timi Ambaye - Mobile software developer, React, React-native, kotlin" />
        <meta name="description" content="Hello there, Its Timi Ambaye. I am a fullstack, react, react-native, and kotlin mobile developer." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="I develop Fullstack websites with React, Django and Flask and cross platform android and iOS mobile softwares using React Native" />

        <meta property="og:description" content="Timi Ambaye. Your fullstack website developer with React, Django and Flask. Also a React Native and Kotlin mobile developer" />
        <meta property="og:image" content="https://www.timiambaye.com/images/banner.png" />
        <meta property="og:url" content="https://www.timiambaye.com/" />
        <meta property="fb:app_id" content="0.0.1" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="I develop Fullstack websites with React, Django and Flask and cross platform android and iOS mobile softwares using React Native" />
        <meta property="twitter:description" content="Hello there, Its Timi Ambaye. I am a fullstack website dev and a mobile software developer. Android and iOS" />
        <meta property="twitter:image" content="https://www.timiambaye.com/images/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
