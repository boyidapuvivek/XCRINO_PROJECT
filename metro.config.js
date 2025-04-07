const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = "metro-minify-terser";
config.transformer.minifierConfig = {
  compress: {
    // Improve tree shaking
    unused: true,
    keep_fargs: false,
    pure_getters: true,
    unsafe_arrows: true,
  },
};

module.exports = config;
