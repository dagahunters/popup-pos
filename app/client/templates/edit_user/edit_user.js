/*****************************************************************************/
/* EditUser: Event Handlers */
/*****************************************************************************/
Template.EditUser.events({

	'submit form': function(event){
		console.log("Made it in here");
        event.preventDefault();
        var currentUserId = Meteor.userId();
        var selectedUser = Session.get('selectedUser');
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var confirmPassword = $('[name=confirmPassword').val();
        var accountType = $('[name=accountType]').val();
        //var accountName = $('[name=accountName]').val();
        if(Meteor.user(currentUserId).profile.businessName){
            var accountName = Meteor.user(currentUserId).profile.businessName;
        }
        else{
            //var accountName = $('[name=accountName]').val();
            var accountName = Meteor.user(currentUserId).emails[0].address;
        }

        if(password == confirmPassword){
            Meteor.call('userUpdate', selectedUser, email, accountType);  //This calls createUser on the server side so that the user is not automatically logged in.
            /*Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    type: accountType,
                    businessName: accountName
                }
            });*/

        Router.go('home');
        }
        else
            {
                console.log("Passwords must match.");
            }   ;
        
    }
});

/*****************************************************************************/
/* EditUser: Helpers */
/*****************************************************************************/
Template.EditUser.helpers({
	'getTheUserEmail': function(){
		var theChosenOne = Session.get('selectedUser');
		var theChosenOnesEmail = Meteor.users.findOne({_id:theChosenOne}).emails[0].address;
		return theChosenOnesEmail;
	},

	'getTheUserPosition': function(){
		var theChosenOne = Session.get('selectedUser');
		var theChoseOnesPosition = Meteor.users.findOne({_id:theChosenOne}).profile.type;
		return theChoseOnesPosition;
	}
});

/*****************************************************************************/
/* EditUser: Lifecycle Hooks */
/*****************************************************************************/
Template.EditUser.onCreated(function () {
});

Template.EditUser.onRendered(function () {
});

Template.EditUser.onDestroyed(function () {
});
