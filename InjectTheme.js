import InjectNormalizeCss from './InjectNormalizeCss'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Theme from './Theme'
import * as themes from './themes'
import * as fonts from './fonts'

const getGoogleUrl = query =>
  `https://fonts.googleapis.com/css?family=${query}`

const InjectTheme = ({ theme, font, reset }) =>
  <>
    {reset && <InjectNormalizeCss />}
    <Theme {...font.props} {...theme.props} />
    <Head>
      {font.query && (
        <link
          rel='stylesheet'
          href={getGoogleUrl(font.query)} />
      )}
    </Head>
  </>

InjectTheme.propTypes = {
  font: PropTypes.shape({ name: PropTypes.string.isRequired }),
  theme: PropTypes.shape({ name: PropTypes.string.isRequired }),
  reset: PropTypes.bool.isRequired
}

InjectTheme.defaultProps = {
  reset: true,
  font: fonts.base,
  theme: themes.base
}

export default InjectTheme
