/*****************************************************************************/
/* EditTable: Event Handlers */
/*****************************************************************************/
Template.EditTable.events({
});

AutoForm.hooks({
	editTableForm: {
		onSuccess: function(doc)  {
			var eventId = Session.get('currentEvent');
			Router.go('viewEvent', {_id:eventId});
		}
	}
});
/*****************************************************************************/
/* EditTable: Helpers */
/*****************************************************************************/
Template.EditTable.helpers({
	'eventFormSchema': function(){
		return Schema.tables;
	},

	'selectedDoc':function(){
		console.log("The table is this id:");
		console.log(Tables.findOne(Session.get('selectedTable')));
		return(Tables.findOne(Session.get('selectedTable')));
	}
});

/*****************************************************************************/
/* EditTable: Lifecycle Hooks */
/*****************************************************************************/
Template.EditTable.onCreated(function () {
});

Template.EditTable.onRendered(function () {
});

Template.EditTable.onDestroyed(function () {
});
