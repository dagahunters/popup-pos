/*****************************************************************************/
/* ChooseMenu: Event Handlers */
/*****************************************************************************/
Template.ChooseMenu.events({
	'change [type=checkbox]': function(e){
		// console.log("You touched the checkbox");
		var itemId = this._id;  // Gets the id of the menu item in the Menus collection
		var currentEvent = Session.get('currentEvent');  // Gets the event for which this is being chosen
		var currUser = Meteor.userId();
		var accountCreator = Meteor.user(currUser).profile.businessName;  
		var isChecked = e.target.checked;   // This sets isChecked to true or false depending if the target is checked or not.
		
		if (isChecked){
			SelectedMenuItems.insert({
				itemName: Menus.findOne(itemId).itemName,
				course: Menus.findOne(itemId).course,
				menuItemId: itemId,
				eventId: currentEvent,
				createdFromAccount: accountCreator
			})
		}
		else{
			if(SelectedMenuItems.findOne({menuItemId:itemId})){
				var theItemToDeleteId = SelectedMenuItems.findOne({menuItemId:itemId})._id;
				// console.log("This is the id of theItemToDelete: ", theItemToDeleteId);
				SelectedMenuItems.remove({_id:theItemToDeleteId});
			}
		}

		// console.log("Is the box checked? ", isChecked);
		// console.log("this is the documentId:", itemId);
		// console.log("This is the account that created it: ", accountCreator);
		// console.log("This is the currentEvent: ", currentEvent);
	},


	'click #backToEventButton': function(e){
		e.preventDefault();
		var eventId = Session.get('currentEvent');
		Router.go('viewEvent', {_id: eventId});
	}
});

/*****************************************************************************/
/* ChooseMenu: Helpers */
/*****************************************************************************/
Template.ChooseMenu.helpers({
	aMenu: function() {
		var businessType = Meteor.user().profile.businessName;
		var selectedEvent = Session.get('currentEvent');
		var eventType = Events.findOne({_id:selectedEvent}).eventType;
		return Menus.find({createdFromAccount: businessType, category:eventType}, {sort: {course:1, itemName:1}});
	},

	/* isChecked works to both set the checkboxes to the last state by looking
	to see if the menu items are listen in SelectedMenuItems with the eventId
	tagging it.  Therefore the SelectedMenuItems collections remains clean as
	things are added and removed, as state should reflect if the item is representation
	in the collection.*/

	isChecked: function() {
		var itemId = this._id;
		var currentEvent = Session.get('currentEvent');
		if(SelectedMenuItems.findOne({menuItemId: itemId, eventId: currentEvent})) {
			return true;
		}
		else
			return false;
	}
});

/*****************************************************************************/
/* ChooseMenu: Lifecycle Hooks */
/*****************************************************************************/
Template.ChooseMenu.onCreated(function () {
});

Template.ChooseMenu.onRendered(function () {
});

Template.ChooseMenu.onDestroyed(function () {
});
