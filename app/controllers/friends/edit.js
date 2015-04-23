import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: {
		cancel: function() {
			// console.log('hello from cancle');
			this.transitionToRoute('friends');
			return false;
		}
	}
});