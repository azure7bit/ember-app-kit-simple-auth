var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  // Auth-example
  this.route('index', { path: '/' });
  this.route('protected');
  this.route('login');
});

export default Router;
