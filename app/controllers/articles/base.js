import Ember from 'ember';

export default Ember.ObjectController.extend({ 
	isValid: Ember.computed(
		'description',
		'notes',
		function() {
			return !Ember.isEmpty(this.get('description')) &&
				!Ember.isEmpty(this.get('notes'));
		}
		),
	actions: {
		save: function() {
			if (this.get('isValid')) {
				var _this = this;
				this.get('model').save().then(function(friend) {
					_this.transitionToRoute('articles', friend);
				});
			} else {
				this.set('errorMessage', 'Sorry dude you forgot to fill all of the fields');
			}
		},
		cancel: function() {
			return true;
		}
	}
});