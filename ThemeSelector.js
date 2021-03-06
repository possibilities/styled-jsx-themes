import PropTypes from 'prop-types'
import * as themes from 'styled-jsx-themes/themes'
import * as fonts from 'styled-jsx-themes/fonts'

const ThemeSelector = ({ theme, font, setTheme, setFont }) =>
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
      <option value='hack'>hack</option>
      <option value='merriweatherMuli'>merriweather/muli</option>
      <option value='robotocondensedCabin'>roboto condensed/cabin</option>
      <option value='robotomono'>roboto mono</option>
    </select>
  </div>

ThemeSelector.propTypes = {
  setFont: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
  font: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  theme: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

ThemeSelector.defaultProps = {
  font: fonts.base,
  theme: themes.base
}

export default ThemeSelector
