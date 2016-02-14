/*****************************************************************************/
/* AddTable: Event Handlers */
/*****************************************************************************/
Template.AddTable.events({
	'click #cancel':function(){
		var eventId = Session.get('currentEvent');
		Router.go('viewEvent', {_id: eventId});
	}
});


AutoForm.hooks({
	addTableForm: {
		onSuccess: function(doc)  {
			
			var eventId = Session.get('currentEvent');
			Router.go('viewEvent', {_id: eventId});
		}
		//router.go('studentDetail',{ _id: this.docId });
	}
});
/*****************************************************************************/
/* AddTable: Helpers */
/*****************************************************************************/
Template.AddTable.helpers({
	'chooseEvent':function(){

		var curEvent = Session.get('currentEvent');
		console.log("THis is the currentEvent in addTable:");
		console.log(curEvent);
		return curEvent;
		/*return [
		{label: curEvent, value: curEvent}
		];*/
	},

	'eventFormSchema': function(){
		return Schema.tables;
	}

});

/*****************************************************************************/
/* AddTable: Lifecycle Hooks */
/*****************************************************************************/
Template.AddTable.onCreated(function () {
});

Template.AddTable.onRendered(function () {
});

Template.AddTable.onDestroyed(function () {
});
