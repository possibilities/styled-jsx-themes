// A helper for webpack + next.js that will cause `styled-jsx-themes`
// to be transpiled despite being in `./node_modules`
const transpile = function (config, options) {
  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules\/styled-jsx-themes/,
    use: [
      options.defaultLoaders.babel
    ]
  })
  return config
}

module.exports = transpile
