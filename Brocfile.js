/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

<<<<<<< HEAD
app.import('bower_components/ic-ajax/dist/named-amd/main.js', {
exports: {
'ic-ajax': [
'default',
'defineFixture',
'lookupFixture',
'raw',
'request',
]
}
});
=======
>>>>>>> eb7481502cef860ed41510b7d0a8e26c829acadb
app.import('bower_components/moment/moment.js');
app.import('vendor/fontello/fontello.css');
app.import('vendor/fontello/font/fontello.ttf', {
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.eot', {
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.svg', {
	destDir: 'font'
});
app.import('vendor/fontello/font/fontello.woff', {
	destDir: 'font'
});

module.exports = app.toTree();
