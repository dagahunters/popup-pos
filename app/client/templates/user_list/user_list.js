/*****************************************************************************/
/* UserList: Event Handlers */
/*****************************************************************************/
Template.UserList.events({
	'click .deleteThisGuy': function(){
		e.preventDefault();
		// console.log("its been hit");
		// console.log(Meteor.user().emails[0].address);
	},

	'click .userAccounts': function(){
		Session.set('selectedUser', this._id);
		//var selectedUser = Session.get('selectedUser');
		//console.log("In the .userAccounts");
		//console.log(selectedUser);
	},

	'click .theDeleteButton': function(e){
		e.preventDefault();
		//console.log("Delete button pressed");
		var userId = this._id;
		var selectedUser = Session.get('selectedUser');
		if(userId == selectedUser){
			//console.log("This is the guy getting deleted");
			//console.log(selectedUser);
			if(confirm('Are you sure you want to delete user?')) {
				Meteor.users.remove({_id:selectedUser});
			}
		}
	}



});

/*****************************************************************************/
/* UserList: Helpers */
/*****************************************************************************/
Template.UserList.helpers({
	'userAccounts': function(){
		return userDB.find();
	},

	'selectedClass': function(){
		var userId = this._id;
		var selectedUser = Session.get('selectedUser');
		if(userId == selectedUser){
			return "selected";
		}
	}, 

	'deleteThisGuy': function(){
		var userId = this._id;
		var selectedUser = Session.get('selectedUser');
		if(userId == selectedUser){
			// console.log("This is the guy getting deleted");
			// console.log(selectedUser);

		}
	},

	'notManager':function(){
		var currentUserId = Meteor.userId();
		// console.log(Meteor.user(currentUserId).profile);
		if (Meteor.user(currentUserId).profile.type == "Server"){
			return true;
		}
		else{
			return false;
		}
	},

	beforeRemove: function() {
		//return function (collection, id) {
			//var doc = collection.findOne(id);
			//if(confirm('Delete Event: "' + doc.name + " party on " + doc.date + '"?')) {
			//	this.remove();
			//	Router.go('events');
			}
		
});

/*****************************************************************************/
/* UserList: Lifecycle Hooks */
/*****************************************************************************/
Template.UserList.onCreated(function () {
});

Template.UserList.onRendered(function () {
});

Template.UserList.onDestroyed(function () {
});
