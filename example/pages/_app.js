import React from 'react'
import App, { Container } from 'next/app'
import SettingsContext, { getInitialPropsWithAppSettings } from 'react-settings-context'
import InjectTheme from 'styled-jsx-themes'

class MyApp extends App {
  render () {
    const { Component, pageProps, settings } = this.props
    return (
      <SettingsContext.Provider initialData={settings}>
        <SettingsContext.Consumer>
          {([settings]) => (
            <InjectTheme
              font={settings.font}
              theme={settings.theme} />
          )}
        </SettingsContext.Consumer>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SettingsContext.Provider>
    )
  }
}

MyApp.getInitialProps = getInitialPropsWithAppSettings()
export default MyApp
