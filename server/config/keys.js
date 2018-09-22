// figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    // we are in production, return production set of keys
    module.exports= require('./prod');
} else {
    // we are in development environment, return keys for development environment
    module.exports = require('./dev');
}