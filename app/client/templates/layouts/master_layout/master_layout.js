Template.MasterLayout.helpers({
	'isManager': function(){
		var currentUserId = Meteor.userId();
		console.log("In the master layout");
		console.log(Meteor.user(currentUserId).profile.type);
		if (Meteor.user(currentUserId).profile.type == "Server"){
			return false;
		}
		else{
			return true;
		}
	}
});

Template.MasterLayout.events({
});

