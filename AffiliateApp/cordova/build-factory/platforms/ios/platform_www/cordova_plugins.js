cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
      "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
      "pluginId": "cordova-plugin-cleartext",
      "clobbers": [
        "cordova.plugins.CordovaPluginsCleartext"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cleartext": "1.0.0",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});