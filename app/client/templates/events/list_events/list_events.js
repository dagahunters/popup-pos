/*****************************************************************************/
/* ListEvents: Event Handlers */
/*****************************************************************************/
Template.ListEvents.events({
	'click .currentEvent': function(event){
		//event.preventDefault();
		//var currentEventId = this._id;
		//var currentEventName = Events.findOne(currentEventId).name;
		//console.log(currentEventName);
		Session.set('currentEvent', this._id);
		console.log(Session.get('currentEvent'));
		//var displayIt = Session.get('currentEvent');
		//console.log("This is gotten from the Session.");
		//console.log(displayIt);
	}
});

/*****************************************************************************/
/* ListEvents: Helpers */
/*****************************************************************************/
Template.ListEvents.helpers({
	events: function() {
		//var theUser = Meteor.users.find({_id: this.userId});
		if (!Meteor.user().profile.businessName){  					// If it is the root user, they don't have a profile.businessName
			var businessType = Meteor.user().emails[0].address; 	// So in that case the businessType takes their email
		}															// Which serves as the businessType for all children of the root user
		else{
			var businessType = Meteor.user().profile.businessName;	// Otherwise, businessType gets assigned the profile.businessName of the regular child user
		}
		return Events.find({createdFromAccount: businessType}, {sort: {date: 1}});

	},

	'isManager':function(){
		var currentUserId = Meteor.userId();
		//console.log(Meteor.user(currentUserId).profile);
		if (Meteor.user(currentUserId).profile.type == "Server"){
			return false;
		}
		else{
			return true;
		}
	}

	
});

Template.registerHelper("localizedDateAndTime", function(date) {
    
    if(date)
    	//return moment(date).tz("America/New_York").format('l LT');
    	//The utc makes sure the date shows up as correct.
        return moment(date).utc().format("ddd, MMM Do YYYY");//format('l LT');
});
/*****************************************************************************/
/* ListEvents: Lifecycle Hooks */
/*****************************************************************************/
Template.ListEvents.onCreated(function () {
});

Template.ListEvents.onRendered(function () {
});

Template.ListEvents.onDestroyed(function () {
});
