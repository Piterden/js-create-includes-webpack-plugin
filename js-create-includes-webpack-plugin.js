/**
 * WebPack plugin which replaces <script src="bundle.js"> to:
 *
 * <script>
 *   const bundleScript = document.createElement('script');
 *   bundleScript.type = 'text/javascript';
 *   bundleScript.async = true;
 *   bundleScript.src = 'bundle.js';
 *   document.body.appendChild(bundleScript);
 * </script>
 *
 * @package js-create-includes-webpack-plugin
 * @class   JSCreateIncludesWebpackPlugin
 * @author  Denis Efremov <efremov.a.denis@gmail.com>
 * @license MIT
 */
class JSCreateIncludesWebpackPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap(
      'JSCreateIncludesWebpackPlugin',
      (compilation) => {
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
          'JSCreateIncludesWebpackPlugin',
          (data, cb) => {
            data.html = data.html
              .replace(
                /\s*<script\s+(?:type="text\/javascript"\s+)?src="\/?(([\w/.]+)\.\w+)"><\/script>/g,
                '\n<script>\n  const $2Script = document.createElement(\'script\');\n  $2Script.type = \'text/javascript\';\n  $2Script.async = true;\n  $2Script.src = \'$1\';\n  document.body.appendChild($2Script);\n</script>\n'
              )
              .split(/<\/script>\s*<script>/)
              .join('')

            cb(null, data)
          }
        )
      }
    )
  }
}

module.exports = JSCreateIncludesWebpackPlugin
