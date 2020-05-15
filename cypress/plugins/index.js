const { onFileDefaultPreprocessor } = require('cypress-vue-unit-test/dist/preprocessor/webpack')

module.exports = on => {
  on('file:preprocessor', onFileDefaultPreprocessor)
}
