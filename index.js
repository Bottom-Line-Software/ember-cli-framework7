/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-framework7',

  included: function(app) {
    this.app = app;
    this._super.included(app);

    app.import('vendor/css/ember-cli-framework7.css');

    // MATERIAL DESIGN
    // app.import('vendor/framework7/dist/css/framework7.material.css');
    // app.import('vendor/framework7/dist/css/framework7.material.colors.css');

    // IOS DESIGN
    // app.import('vendor/framework7/dist/css/framework7.ios.css');
    // app.import('vendor/framework7/dist/css/framework7.ios.colors.css');

    app.import('vendor/framework7/dist/js/framework7.min.js');
    app.import('vendor/framework7/dist/js/framework7.min.js.map', { destDir: 'assets' });
  }
};
