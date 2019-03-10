# Themes for `styled-jsx`

Minimal themes (made with [styled-jsx](https://github.com/zeit/styled-jsx)) for providing basic visual happiness in server-rendered [React](https://github.com/facebook/react) apps.

### Demo

[https://styled-jsx-themes.now.sh/](https://styled-jsx-themes.now.sh/)

### Setup

This library is <a href='#why-no-transpiling-in-repo'>purposely not transpiled<sup>1</sup></a> so your build tool will need to be configured to transpile JS inside your app's `./node_modules/styled-jsx-themes` directory. A convenience helper is provided for [Next.js](https://github.com/zeit/next.js).

```javascript
// ./next.config.js
const transpile = require('styled-jsx-themes/transpile')
module.exports = { webpack: transpile }
```

## Install

```Shell
yarn add styled-jsx-themes
```

### Usage

Inject a theme anywhere in your app with the helper component.

```javascript
import InjectTheme from 'styled-jsx-themes'

import { dark } from 'styled-jsx-themes/themes'
import { merriweatherMuli } from 'styled-jsx-themes/fonts'

function ({ theme: dark, font: merriweatherMuli }) {
  <>
    <InjectTheme theme={theme} font={font} />
    <p>themed!</p>
  </>
}
```

### API

#### `<InjectTheme />`

##### `theme` (theme, required)

Object describing a theme

See [./themes.js](./themes.js)

##### `font` (theme, required)

Object describing a pair of fonts

See [./fonts.js](./fonts.js)

##### `reset` (bool, default: true)

Include/exclude CSS reset ([normalize.css](https://github.com/necolas/normalize.css))

### Caveats

This library is currently bound to [Next.js](https://github.com/zeit/next.js) but could be easily separated if we generalize the webfont loading to work with other SSR frameworks.

### Why no transpiling in repo?

After trying a number of different approaches I decided that there's no way to transpile `styled-jsx` components outside of Next.js apps without breaking server side rendering. That said I would be excited to learn that I'm wrong and there's an easy way transpile ahead of time and avoid the extra [setup](#setup). Please reach out to me at mikebannister@gmail.com if you can help, thanks!

### Credits

* Most CSS in this repo is copied from [sakura.css](https://github.com/oxalorg/sakura). Thanks to [the authors](https://github.com/oxalorg/sakura/graphs/contributors).
* A `styled-jsx`-ified copy of [normalize.css](https://github.com/necolas/normalize.css) is also included. Thanks to [the authors](https://github.com/necolas/normalize.css/graphs/contributors).
