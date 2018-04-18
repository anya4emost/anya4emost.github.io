const webpackConfigPath = {
    'development': './webpack/dev',
    'production': './webpack/prod',
    'githubPages': './webpack/githubPages'
};

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const path = webpackConfigPath[process.env.NODE_ENV];

module.exports = require(path);