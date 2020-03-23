/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
    ENV['scp'] = {
      nodes: [{
        username: 'gabeshou',
        host: 'briel.ca',
        path: '/home/gabeshou/bb.gabrielgrant.ca/',
      }],
    }
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV['scp'] = {
      nodes: [{
        username: 'bbread',
        host: 'breakingbreadnow.com',
        path: '/home/bbread/breakingbreadnow.com/', //ciJwXYdS
      }],
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
