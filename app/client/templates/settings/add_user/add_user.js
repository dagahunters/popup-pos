/*****************************************************************************/
/* AddUser: Event Handlers */
/*****************************************************************************/


AutoForm.hooks({
	addUserForm: {
		onSuccess: function(doc)  {
			Router.go('addUser');
		}
	}
});

/*****************************************************************************/
/* AddUser: Helpers */
/*****************************************************************************/
Template.Adduser.helpers({
    'aHelper': function(){
        return "This is a helper";
    },
    'ifFirstUser':function(){
        var currentUserId = Meteor.userId();
        if(!Meteor.user(currentUserId).profile.businessName){
            return true;
        }
        else
            return false;
    }
});
 
/*****************************************************************************/
/* AddUser: Lifecycle Hooks */
/*****************************************************************************/
Template.Adduser.onCreated(function () {
});

Template.Adduser.onRendered(function () {
});

Template.Adduser.onDestroyed(function () {
});

Template.Adduser.events({

    'submit form': function(event){
        event.preventDefault();
        var currentUserId = Meteor.userId();
        //console.log("This is the current user Id: ");
        //console.log(currentUserId);
        //console.log("This is the profile: ");
        //console.log(Meteor.user(currentUserId).profile);
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
        //console.log("This is the account name:");
        //console.log(accountName);
        //console.log("This is the account type:");
        //console.log(accountType);
        if(password == confirmPassword){
            Meteor.call('createNewUser', email, password, accountType, accountName);  //This calls createUser on the server side so that the user is not automatically logged in.
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