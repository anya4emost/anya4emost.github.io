const webpackConfigPath = {
    'development': './webpack/dev',
    'production': './webpack/prod',
    'githubPages': './webpack/githubPages'
};
console.log(process.env.NODE_ENV);
//process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = "production"
const path = webpackConfigPath[process.env.NODE_ENV];

module.exports = require(path);