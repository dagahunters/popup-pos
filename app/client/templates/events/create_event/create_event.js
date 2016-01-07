/*****************************************************************************/
/* CreateEvent: Event Handlers */
/*****************************************************************************/
Template.CreateEvent.events({

});

AutoForm.hooks({
	insertEventForm: {
		onSuccess: function(doc) {
			Router.go('events');
		}
	}
});

/*****************************************************************************/
/* CreateEvent: Helpers */
/*****************************************************************************/
Template.CreateEvent.helpers({
	'isManager':function(){
		var currentUserId = Meteor.userId();
		console.log(Meteor.user(currentUserId).profile);
		if (Meteor.user(currentUserId).profile == "Server"){
			return false;
		}
		else{
			return true;
		}
	}

});

/*****************************************************************************/
/* CreateEvent: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateEvent.onCreated(function () {
});

Template.CreateEvent.onRendered(function () {
});

Template.CreateEvent.onDestroyed(function () {
});
