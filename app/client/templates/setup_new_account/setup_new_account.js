/*****************************************************************************/
/* SetupNewAccount: Event Handlers */
/*****************************************************************************/
Template.SetupNewAccount.events({
	'submit form': function(event){
		event.preventDefault();
		var companyName = $('[name=companyName]').val();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		var passwordConfirm = $('[name=passwordConfirm]').val();
		if(password == passwordConfirm){
			//Meteor.call('createNewUser', email, password, "Manager", companyName);
			console.log("making a new user");
			Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    type: "Master",
                    businessName: companyName
                }
            })
			Router.go('newAccountWelcome');
		}
		else
			console.log("Passwords must match.")
	}
});

/*****************************************************************************/
/* SetupNewAccount: Helpers */
/*****************************************************************************/
Template.SetupNewAccount.helpers({
});

/*****************************************************************************/
/* SetupNewAccount: Lifecycle Hooks */
/*****************************************************************************/
Template.SetupNewAccount.onCreated(function () {
});

Template.SetupNewAccount.onRendered(function () {
});

Template.SetupNewAccount.onDestroyed(function () {
});
