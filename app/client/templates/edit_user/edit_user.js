/*****************************************************************************/
/* EditUser: Event Handlers */
/*****************************************************************************/
Template.EditUser.events({
});

/*****************************************************************************/
/* EditUser: Helpers */
/*****************************************************************************/
Template.EditUser.helpers({
	'getTheUser': function(){
		var theChosenOne = Session.get('selectedUser');
		console.log("This is the ID in the the getTheUser funtions")
		console.log(theChosenOne);
		//var theChosenOnesEmail = Meteor.users.findOne({_id:theChosenOne}).emails[0].address;
		var theChosenOnesEmail = Meteor.users.findOne({_id:theChosenOne}).emails[0].address;
		//var theChosenOnesEmail = Meteor.user(theChosenOne).emails[0].address;
		
		console.log("This is the email associated with that ID");
		console.log(theChosenOnesEmail);

		return theChosenOnesEmail;
	}
});

/*****************************************************************************/
/* EditUser: Lifecycle Hooks */
/*****************************************************************************/
Template.EditUser.onCreated(function () {
});

Template.EditUser.onRendered(function () {
});

Template.EditUser.onDestroyed(function () {
});
