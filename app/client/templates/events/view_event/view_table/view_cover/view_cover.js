/*****************************************************************************/
/* ViewCover: Event Handlers */
/*****************************************************************************/
Template.ViewCover.events({
	'click #backToTable': function(){
		var currentTableId = Session.get('selectedTable');
		Router.go('viewTable', {_id: currentTableId});
	},

	'click .appItem': function() {
		Session.set('selectedApp', this._id);
		var chosenApp = SelectedMenuItems.findOne({_id:this._id}).itemName;
		var currentCover = Session.get('currentCover');
		Covers.update({_id: currentCover}, {$set: {appetizer: chosenApp}});
	},

		'click .mainItem': function() {
		Session.set('selectedMain', this._id);
		var chosenMain = SelectedMenuItems.findOne({_id:this._id}).itemName;
		var currentCover = Session.get('currentCover');
		Covers.update({_id: currentCover}, {$set: {main: chosenMain}});
	},

		'click .dessertItem': function() {
		Session.set('selectedDessert', this._id);
		var chosenDessert = SelectedMenuItems.findOne({_id:this._id}).itemName;
		var currentCover = Session.get('currentCover');
		Covers.update({_id: currentCover}, {$set: {dessert: chosenDessert}});
	},

		'click .sideItem': function() {
		Session.set('selectedSide', this._id);
		var chosenSide = SelectedMenuItems.findOne({_id:this._id}).itemName;
		var currentCover = Session.get('currentCover');
		Covers.update({_id: currentCover}, {$set: {side: chosenSide}});
	},

	'change #hasAllergy': function(e){
		e.preventDefault();
		var isChecked = e.target.checked;
		if (isChecked){
			Session.set('hasAllergy', true);
/*			Session.set('hasAllergyId', Session.get('currentCover'));
			console.log(Session.get('hasAllergyId'));*/
		}
		else{
			Session.set('hasAllergy', false);
			//Session.set('hasAllergyId', "");
		}
	}
});

/*****************************************************************************/
/* ViewCover: Helpers */
/*****************************************************************************/
Template.ViewCover.helpers({
	'getCurrentPosition': function(){
		var currentPositionId = Session.get('currentCover');
		return Covers.findOne({_id:currentPositionId}).coverNumber;
	},

	'getCurrentTable':function() {
		var currentTableId = Session.get('selectedTable');
		var currentEventId = Session.get('currentEvent');
		return Tables.findOne({_id:currentTableId , createdForEvent:currentEventId}).tableName;
	},

	'apps':function() {
		var eventId = Session.get('currentEvent');
		var businessName = Meteor.user().profile.businessName;
		return SelectedMenuItems.find({eventId: eventId, createdFromAccount: businessName, course: "Appetizer"});
	},

	'mains':function() {
		var eventId = Session.get('currentEvent');
		var businessName = Meteor.user().profile.businessName;
		return SelectedMenuItems.find({eventId: eventId, createdFromAccount: businessName, course: "Main"});
	},

	'desserts':function() {
		var eventId = Session.get('currentEvent');
		var businessName = Meteor.user().profile.businessName;
		return SelectedMenuItems.find({eventId: eventId, createdFromAccount: businessName, course: "Dessert"});
	},

	'sides':function() {
		var eventId = Session.get('currentEvent');
		var businessName = Meteor.user().profile.businessName;
		return SelectedMenuItems.find({eventId: eventId, createdFromAccount: businessName, course: "Side"});
	},

	'selectedApp': function() {
		var appId = this._id;
		var selectedApp = Session.get('selectedApp');
		if(appId == selectedApp){
			return "colorSelected";
		}
	},

	'selectedMain': function() {
		var mainId = this._id;
		var selectedMain = Session.get('selectedMain');
		if(mainId == selectedMain){
			return 'colorSelected';
		}
	},

		'selectedDessert': function() {
		var dessertId = this._id;
		var selectedDessert = Session.get('selectedDessert');
		if(dessertId == selectedDessert){
			return 'colorSelected';
		}
	},

		'selectedSide': function() {
		var sideId = this._id;
		var selectedSide = Session.get('selectedSide');
		if(sideId == selectedSide){
			return 'colorSelected';
		}
	},

	'hasAllergy': function(){
		if (Session.get('hasAllergy')){
			return true;
		}
	},
});

/*****************************************************************************/
/* ViewCover: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewCover.onCreated(function () {
});

Template.ViewCover.onRendered(function () {
});

Template.ViewCover.onDestroyed(function () {
});
