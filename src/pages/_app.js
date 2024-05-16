import Theme from '../styles/theme';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Timi Ambaye - Mobile software developer (React, React Native, Java, Python and Kotlin)</title>
      </Head>
      <Theme>
        <Component {...pageProps} suppressHydrationWarning />
      </Theme>
    </>
  )
}