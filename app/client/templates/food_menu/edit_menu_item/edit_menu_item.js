/*****************************************************************************/
/* EditMenuItem: Event Handlers */
/*****************************************************************************/
Template.EditMenuItem.events({
});

/*****************************************************************************/
/* EditMenuItem: Helpers */
/*****************************************************************************/
Template.EditMenuItem.helpers({
});

AutoForm.hooks({
	editMenuForm: {
		onSuccess: function(doc) {
			Router.go('menu');
		}
	}
});
/*****************************************************************************/
/* EditMenuItem: Lifecycle Hooks */
/*****************************************************************************/
Template.EditMenuItem.onCreated(function () {
});

Template.EditMenuItem.onRendered(function () {
});

Template.EditMenuItem.onDestroyed(function () {
});
