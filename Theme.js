import PropTypes from 'prop-types'

// Modified from https://github.com/oxalorg/sakura

function Theme ({
  colorBlossom,
  colorFade,
  colorBg,
  colorBgAlt,
  colorText,
  titleFont,
  bodyFont,
  fontSizeBase = '1.8rem'
}) {
  return (
    <style global jsx>{`
      /* Body */

      html {
          font-size: 62.5%; // So that root size becomes 10px
          font-family: ${titleFont};
      }

      body {
          // fontSizeBase must be a rem value
          font-size: ${fontSizeBase};
          line-height: 1.618;
          max-width: 38em;
          margin: auto;
          color: ${colorText};
          background-color: ${colorBg};
          padding: 13px;
      }
      @media (max-width: 684px) {
          body {
              font-size: ${fontSizeBase * 0.85};
          }
      }

      @media (max-width: 382px) {
          body {
              font-size: ${fontSizeBase * 0.75};
          }
      }

      h1, h2, h3, h4, h5, h6 {
          line-height: 1.1;
          font-family: ${bodyFont};
          font-weight: 700;
          overflow-wrap: break-word;
          word-wrap: break-word;
          -ms-word-break: break-all;
          word-break: break-word;
          -ms-hyphens: auto;
          -moz-hyphens: auto;
          -webkit-hyphens: auto;
          hyphens: auto;
      }

      h1 { font-size: 2.35em }
      h2 { font-size: 2.00em }
      h3 { font-size: 1.75em }
      h4 { font-size: 1.5em }
      h5 { font-size: 1.25em }
      h6 { font-size: 1em }

      small, sub, sup {
          font-size: 75%;
      }

      hr {
          border-color: ${colorBlossom};
      }

      a {
          text-decoration: none;
          color: ${colorBlossom};
      }

      a:hover {
          color: ${colorFade};
      }

      ul {
          padding-left: 1.4em;
      }

      li {
          margin-bottom: 0.4em;
      }

      blockquote {
          font-style: italic;
          margin-left: 1.5em;
          padding-left: 1em;
          border-left: 3px solid ${colorBlossom};
      }

      img {
          max-width: 100%;
      }

      /* Pre and Code */

      pre {
          background-color: ${colorBgAlt};
          display: block;
          padding: 1em;
          overflow-x: auto;
      }

      code {
          font-size: 0.9em;
          padding: 0 0.5em;
          background-color: ${colorBgAlt};
          white-space: pre-wrap;
      }

      pre > code {
          padding: 0;
          background-color: transparent;
          white-space: pre;
      }

      /* Tables */

      table {
          text-align: justify;
          width: 100%;
          border-collapse: collapse;
      }

      td, th {
          padding: 0.5em;
          border-bottom: 1px solid ${colorBgAlt};
      }

      /* Buttons, forms and input */

      input, textarea {
          border: 1px solid ${colorText};
      }

      input:focus, textarea:focus {
          border: 1px solid ${colorBlossom};
      }

      textarea {
          width: 100%;
      }

      .button,
      button,
      input[type="submit"],
      input[type="reset"],
      input[type="button"] {
          display: inline-block;
          padding: 5px 10px;
          text-align: center;
          text-decoration: none;
          white-space: nowrap;

          background-color: ${colorBlossom};
          color: ${colorBg};
          border-radius: 1px;
          border: 1px solid ${colorBlossom};
          cursor: pointer;
          box-sizing: border-box;
      }

      .button[disabled],
      button[disabled],
      input[type="submit"][disabled],
      input[type="reset"][disabled],
      input[type="button"][disabled] {
          cursor: default;
          opacity: .5;
      }

      .button:hover,
      button:hover,
      input[type="submit"]:hover,
      input[type="reset"]:hover,
      input[type="button"]:hover {
          background-color: ${colorFade};
          border-color: ${colorFade};
          color: ${colorBg};
          outline: 0;
      }

      .button:focus,
      button:focus,
      input[type="submit"]:focus,
      input[type="reset"]:focus,
      input[type="button"]:focus {
          background-color: ${colorFade};
          border-color: ${colorFade};
          color: ${colorBg};
          outline: 0;
      }

      textarea, select, input[type] {
          color: ${colorText};
          /* The 6px vertically centers text on FF, ignored by Webkit */
          padding: 6px 10px;
          margin-bottom: 10px;
          background-color: ${colorBgAlt};
          border: 1px solid ${colorBgAlt};
          border-radius: 4px;
          box-shadow: none;
          box-sizing: border-box;
      }

      textarea:focus, select:focus, input[type]:focus {
          border: 1px solid ${colorBlossom};
          outline: 0;
      }

      input[type="checkbox"]:focus {
          outline: 1px dotted ${colorBlossom};
      }

      label, legend, fieldset {
          display: block;
          margin-bottom: .5rem;
          font-weight: 600; 
      }
    `}</style>
  )
}

Theme.propTypes = {
  colorBlossom: PropTypes.string.isRequired,
  colorFade: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  colorBgAlt: PropTypes.string.isRequired,
  colorText: PropTypes.string.isRequired,
  titleFont: PropTypes.string.isRequired,
  bodyFont: PropTypes.string.isRequired,
  fontSizeBase: PropTypes.string
}

Theme.defaultProps = {
  fontSizeBase: '1.8rem'
}

export default Theme
