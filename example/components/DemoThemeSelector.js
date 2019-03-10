import PropTypes from 'prop-types'
import * as themes from 'styled-jsx-themes/themes'
import * as fonts from 'styled-jsx-themes/fonts'

const DemoThemeSelector = ({ theme, font, setTheme, setFont }) =>
  <div>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        justify-items: center;
      }
      label, select {
        margin: 0 5px;
      }
    `}</style>

    <label htmlFor='theme'>theme</label>
    <select
      id='theme'
      value={theme.name}
      onChange={event => setTheme(themes[event.target.value])}>
      <option value='base'>base</option>
      <option value='vader'>vader</option>
      <option value='earthly'>earthly</option>
      <option value='dark'>dark</option>
      <option value='darkSolarized'>dark solarized</option>
    </select>

    <label htmlFor='font'>font</label>
    <select
      id='font'
      value={font.name}
      onChange={event => setFont(fonts[event.target.value])}>
      <option value='base'>base</option>
      <option value='merriweatherMuli'>merriweather/muli</option>
      <option value='robotocondensedCabin'>roboto condensed/cabin</option>
    </select>
  </div>

DemoThemeSelector.propTypes = {
  setFont: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
  font: PropTypes.shape({
    name: PropTypes.string.isRequired,
    titleFont: PropTypes.string.isRequired,
    bodyFont: PropTypes.string.isRequired,
    values: PropTypes.shape({
      bodyFont: PropTypes.string.isRequired,
      titleFontSize: PropTypes.number,
      titleFont: PropTypes.string.isRequired,
      bodyFontSize: PropTypes.number
    }),
    query: PropTypes.string
  }),
  theme: PropTypes.shape({
    name: PropTypes.string.isRequired,
    values: PropTypes.shape({
      colorBlossom: PropTypes.string.isRequired,
      colorFade: PropTypes.string.isRequired,
      colorBg: PropTypes.string.isRequired,
      colorBgAlt: PropTypes.string.isRequired,
      colorText: PropTypes.string.isRequired
    })
  })
}

DemoThemeSelector.defaultProps = {
  font: fonts.base,
  theme: themes.base
}

export default DemoThemeSelector
