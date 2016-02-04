/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },

  createNewUser: function(email, password, accountType, accountName) {   // This added so that when a custom user is created
  	//Accounts.createUser(options);	// that user is NOT automatically logged in, as is the default.
  		Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    type: accountType,
                    businessName: accountName,
                    name: email
                }
  
 		 })
	},

  userUpdate: function(id, newEmail, newAccountType){
    Meteor.users.update(id, {
      $set: {
        email: newEmail,
        profile: {type: newAccountType}
      }
    });
  },
 
	configureFreshAccount: function(currentUserId){
		Meteor.users.update(currentUserId, {$set: {"profile.businessName": "THISBUSINESS"}});
	}
});



