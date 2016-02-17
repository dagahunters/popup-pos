/*****************************************************************************/
/* ViewTable: Event Handlers */
/*****************************************************************************/
Template.ViewTable.events({
	'click #back': function(){
		var eventId = Session.get('currentEvent');
		Router.go('viewEvent', {_id: eventId});
	},

	/*Research: will the Session be set for all users?  If two users
	are accessing different covers will one person's selecting of 
	a cover affect another user?  I suspect, well, yes.  Or is a session
	specific to a logged in user?
	How around this?*/

	'click .selectedCover': function(){
		Session.set('currentCover', this._id);
		var coverId = Session.get('currentCover');
		console.log("This is the currentCover", coverId);
	}
});

/*****************************************************************************/
/* ViewTable: Helpers */
/*****************************************************************************/
Template.ViewTable.helpers({
	'theCovers':function(){
		var tableId = Session.get('selectedTable');
		var eventId = Session.get('currentEvent');
		return Covers.find({table: tableId, event: eventId}, {sort: {coverNumber: 1}});
	},

	'getEventName':function() {
		var eventId = Session.get('currentEvent');
		console.log("the eventId: ", eventId);
		console.log("The event name", Events.findOne({_id:eventId}).name);
		return Events.findOne({_id:eventId}).name;
	},

	'getTableName':function() {
		var tableId = Session.get('selectedTable');
		console.log("the tableId: ", tableId);
		return Tables.findOne({_id:tableId}).tableName;
	},

	'isAllergic':function(){
		var thisCoverId = this._id;
		if(AllergyList.findOne({allergicGuest: thisCoverId})){
			return 'allergyHighlight';
		}
		/*var allergicId = Session.get('hasAllergyId');
		console.log("The id of isAllergic", allergicId);
		console.log('The is of thisCover', thisCoverId);
		if (thisCoverId == allergicId){
			return 'allergyHighlight';
		}*/
	},

});

/*****************************************************************************/
/* ViewTable: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewTable.onCreated(function () {
	// console.log("Is this onCreated being called?");
	var tableId = Session.get('selectedTable');
	var eventId = Session.get('currentEvent');
	var coversOnTable = Tables.findOne({_id:tableId}).guestCount;
	// console.log("Cover on table: ", coversOnTable);
	if(!(Covers.findOne({table: tableId, event: eventId}))) {
		for(i = 0; i < coversOnTable; i++){
			// console.log("Trying to insert into collection");
			Covers.insert({
				table: tableId,
				event: eventId,
				coverNumber: (i+1),
				appetizer: "",
				main: "",
				dessert: "",
				allergy: "",
				notes: ""
			})
		}
	}
	else {
		var collectionsCount = Covers.find({table:tableId, event: eventId}).count();
		if (collectionsCount != coversOnTable){
			var difference = Math.abs(collectionsCount - coversOnTable)
			if (collectionsCount < coversOnTable){
				for(i = collectionsCount; i < coversOnTable; i++){
					Covers.insert({
						table: tableId,
						event: eventId,
						coverNumber: (i + 1),
						appetizer: "",
						main: "",
						dessert: "",
						allergy: "",
						notes: ""
					})
				}
			}
			else if(collectionsCount > coversOnTable){
				for (i = collectionsCount; i > coversOnTable; i--){
					var coverId = Covers.findOne({table: tableId, event: eventId, coverNumber: i})._id;
					Covers.remove({_id: coverId});
				}
			}
		}
		console.log("This is the count the collection has: ", collectionsCount);
	}

	
});

Template.ViewTable.onRendered(function () {
});

Template.ViewTable.onDestroyed(function () {
});
