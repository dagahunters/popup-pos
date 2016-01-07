
Meteor.publish('events', function () {
  return Events.find();
});

Meteor.publish('userData', function(){
	if (this.userID){
		return Meteor.users.find({_id: this.userId},
				{fields:{'other': 1, 'things': 1}});
	}
	else {
		this.ready();
	}
});

Meteor.publish('newuser', function () {
  return Newuser.find();
});

Meteor.publish('userDB', function(){
	return Meteor.users.find({});
});


Meteor.users.deny({
	update: function(){
		return true;
	}
});

Meteor.users.allow({						//allows the remove function to work only if profile.type is Manager
	remove:function(){
		if(Meteor.user().profile.type == "Manager")
			return true;
	}
})
