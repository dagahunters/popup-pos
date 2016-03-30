/*****************************************************************************/
/* ViewEvent: Event Handlers */
/*****************************************************************************/
Template.ViewEvent.events({
	'click .selectedTable':function(){
		Session.set('selectedTable', this._id);
		console.log("This is the selected table");
		console.log(Session.get('selectedTable'));
	},

	'change #seeMenuBox': function(){
		if (Session.get('showMenu') == "show"){
			Session.set('showMenu', "hide");
		}
		else
			(Session.set('showMenu', "show"));
	},


});

/*****************************************************************************/
/* ViewEvent: Helpers */
/*****************************************************************************/
Template.ViewEvent.helpers({
	'selectedEvent': function(){
		var selectedEvent = Session.get('currentEvent');
		var theEvent = Events.findOne({_id: selectedEvent});
		return theEvent;
	},

	tables: function() {
		//var theUser = Meteor.users.find({_id: this.userId});
		//if (!Meteor.user().profile.businessName){  					// If it is the root user, they don't have a profile.businessName
		//	var businessType = Meteor.user().emails[0].address; 	// So in that case the businessType takes their email
		//}															// Which serves as the businessType for all children of the root user
		//else{
		//	var businessType = Meteor.user().profile.businessName;	// Otherwise, businessType gets assigned the profile.businessName of the regular child user
		//}
		var currentEvent = Session.get('currentEvent');
		return Tables.find({createdForEvent: currentEvent}, {sort: {tableName: 1}});

	},

	'tallyList': function(){
		var currentEvent = Session.get('currentEvent');
		return ItemCounts.find({event: currentEvent}, {sort: {order: 1}});
	},


	'foodItems': function() {
		var currentEvent = Session.get('currentEvent');
		var currUser = Meteor.userId();
		var accountCreator = Meteor.user(currUser).profile.businessName; 	
		return SelectedMenuItems.find({createdFromAccount: accountCreator, eventId: currentEvent});
	},

	'isChecked': function() {
		if (Session.get('showMenu') == "show"){
			return true;
		}
		else{
			return false;
		}

	},

	'isManager': function() {
		var currentUserId = Meteor.userId();
		// console.log("In the master layout");
		// console.log(Meteor.user(currentUserId).profile.type);
		if (Meteor.user(currentUserId).profile.type == "Server"){
			return false;
		}
		else{
			return true;
		}
	},



});

/*****************************************************************************/
/* ViewEvent: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewEvent.onCreated(function () {
});

Template.ViewEvent.onRendered(function () {
});

Template.ViewEvent.onDestroyed(function () {
});
