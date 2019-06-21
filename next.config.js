const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withPurgeCss = require('next-purgecss');

module.exports = withSass(withPurgeCss({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'raw-loader',
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }
        );

        if (config.mode === 'production') {
            if (Array.isArray(config.optimization.minimizer)) {
                config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
            }
        }
        return config;
    }
}))