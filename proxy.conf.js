const PROXI_CONFIG = [{
    context: ['/api'],
    target: 'http://localhost:3000/',
    secure: false,
    pathRewrite: { '^/api': '' }
}];

module.exports = PROXI_CONFIG;