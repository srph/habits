import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { config } from '@/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.app.title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta content={config.app.tagline} name="description" />
        <meta content={config.app.title} property="og:title" />
        <meta content={config.app.tagline} property="og:description" />
        <meta content="/thumbnail.png" property="og:image" />
        <meta content={config.app.title} property="twitter:title" />
        <meta content={config.app.tagline} property="twitter:description" />
        {/* <meta content={favicon} property="twitter:image" /> */}
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        {/* <link href={favicon} rel="shortcut icon" type="image/x-icon" />
        <link href={favicon} rel="apple-touch-icon" /> */}
      </Head>

      <div className="text-base">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
