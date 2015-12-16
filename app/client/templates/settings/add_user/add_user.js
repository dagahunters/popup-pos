/*****************************************************************************/
/* AddUser: Event Handlers */
/*****************************************************************************/


AutoForm.hooks({
	addUserForm: {
		onSuccess: function(doc)  {
			Router.go('adduser');
		}
	}
});

/*****************************************************************************/
/* AddUser: Helpers */
/*****************************************************************************/
Template.Adduser.helpers({
    'aHelper': function(){
        return "This is a helper";
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
    'click .Adduser': function(){

        console.log("Got the click");
    },

    'submit form': function(event){
        event.preventDefault();
        var currentUserId = Meteor.userId();
        console.log("This is the current user Id: ");
        console.log(currentUserId);
        console.log("This is the profile: ");
        console.log(Meteor.user(currentUserId).profile);
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var confirmPassword = $('[name=confirmPassword').val();
        var accountType = $('[name=accountType]').val();
        if(password == confirmPassword){
            Accounts.createUser({
                email: email,
                password: password,
                profile: accountType
            });
        Router.go('home');
        }
        else
            {
                console.log("Passwords must match.");
            }   ;
        
    }
});