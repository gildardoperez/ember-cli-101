import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function() {
          _this.transitionToRoute('friends');
        });
        return true;
      } else {
        this.set('errorMessage', 'You have not fill all the fields');
        return false;
      }
    },
    cancel: function() {
      return false;
    }
  }
});