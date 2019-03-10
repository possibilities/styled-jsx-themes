import React from 'react'
import App, { Container } from 'next/app'
import SettingsContext, { getInitialPropsWithAppSettings } from 'react-settings-context'

class MyApp extends App {
  render () {
    const { Component, pageProps, settings } = this.props
    return (
      <SettingsContext.Provider initialData={settings}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SettingsContext.Provider>
    )
  }
}

MyApp.getInitialProps = getInitialPropsWithAppSettings()
export default MyApp
