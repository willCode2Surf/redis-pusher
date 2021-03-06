//
// PRODUCTION CONFIGURATIONS
//

var config = module.exports = require('./config.global');
var this_config_name = 'production';
config.loaded.push(this_config_name);

//
// Core
//
config.catchExceptions = true;

//
// Redis
//
config.redis.channels = [ 'production:push:ios' ];

//
// APNS
//
config.apns.certificate = 'private/aps_production.p12';
config.apns.passphrase = '<CHANGEME>';
config.apns.gateway.address = 'gateway.push.apple.com'; // Development
config.apns.feedback.address = 'feedback.push.apple.com'; // Development
