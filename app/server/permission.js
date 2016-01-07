
Meteor.users.deny({
		update: function(){
			if(Meteor.user().profile.type == "Server"){
			return true;
			}
		}
});

Meteor.users.allow({						//allows the remove function to work only if profile.type is Manager
	remove:function(){
		if(Meteor.user().profile.type == "Master")
			return true;
	}
});

var myPostLogout = function(){
	Router.go('/home');
}

