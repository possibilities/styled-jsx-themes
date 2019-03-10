import { useContext } from 'react'
import DemoMarkup from '../components/DemoMarkup'
import ThemeSelector from 'styled-jsx-themes/ThemeSelector'
import SettingsContext from 'react-settings-context'

import InjectTheme from 'styled-jsx-themes'

export default () => {
  const [settings, patchSettings] = useContext(SettingsContext)
  const { theme, font } = settings
  const setTheme = theme => patchSettings({ theme })
  const setFont = font => patchSettings({ font })
  return (
    <>
      <InjectTheme
        font={font}
        theme={theme} />
      <ThemeSelector
        font={font}
        theme={theme}
        setFont={setFont}
        setTheme={setTheme} />
      <DemoMarkup />
    </>
  )
}
