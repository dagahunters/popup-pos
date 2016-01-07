Newuser = new Mongo.Collection('newuser');
/*Newuser = Meteor.users;*/

if (Meteor.isServer) {
  Newuser.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}

Newuser.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 100,
    optional: false
  },
  lastName: {
    type: String,
    label: "Last Name",
    max: 100,
    optional: false
  },

  email: {
    type: String,
    label: "Email",
    max: 100,
    optional: false
  },

  password:{
    type: String,
    label: 'Password',
    max: 100,
    optional: false
  },

  userType: {
    type: String,
    label: "User type",
    allowedValues: ['Server', 'Manager', 'Chef'],
    optional: false
  },
 
  createdBy: {
    type: String,
    autoValue:function(){return this.userId}
  },

  createdAt: {
    type: Date,
    autoValue:function(){return new Date()}
  }
}));


