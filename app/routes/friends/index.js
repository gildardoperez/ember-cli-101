import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('friend');
		// return this.store.find('friend', 2140);
		// return this.store.findQuery('friend', {active: true});
	}
});


