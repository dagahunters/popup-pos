Events = new Mongo.Collection('events');


if (Meteor.isServer) {
  Events.allow({
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


Events.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Party Name",
    max: 100
  },
  guestCount: {
    type: Number,
    label: "Guest Count",
    max: 2000
  },
  courses: {
    type: Number,
    label: "Number Of Courses",
    max: 10
  },
  date: {
    type: Date,
    label: "Date Of Event",
    autoform: {
          type: "datetime-local",
          //timezoneId: "America/New_York"
    }
  },
  eventType: {
    type: String,
    label: "Event Type",
    allowedValues: ['Lunch', 'Brunch', 'Dinner'],
    optional: false
  },
  confirmed: {
    type: Boolean,
    label: "Event Confirmed?",
    optional: true
  },
  createdBy: {
    type: String,
    autoValue:function(){return this.userId},
  },
  createdAt: {
    type: Date,
    autoValue:function(){return new Date()}
  },
  createdFromAccount: {
    type: String,
    //label: "Account Name",
    //max: 100,
    //var user = this.userId;
    //console.log(user);
     
    autoValue:function(){
      var currentUserId = Meteor.user();
      if(!Meteor.user(currentUserId).profile.businessName){ //If it is the root user, there is no profile.businessName
      //autoValue:function()
      return Meteor.user().emails[0].address; // So in that case use the email, which become everyone;s profile.businessName
      }
      else{
      return Meteor.user().profile.businessName;
      }
    }
  

  }
}));
