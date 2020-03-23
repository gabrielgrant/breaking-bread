import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('restaurants');
  this.route('help');
  this.route('signup');
  this.route('restaurant', {path: 'restaurants/:restaurant_id'});
  this.route('update');
  this.route('404', { path: '/*path' });
});
