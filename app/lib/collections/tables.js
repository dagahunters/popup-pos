Tables = new Mongo.Collection('tables');


if (Meteor.isServer) {
  Tables.allow({
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

/*  Tables.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });*/
}


//Tables.attachSchema(new SimpleSchema({

Schema = {};

Schema.tables = new SimpleSchema({
  tableName: {
    type: String,
    label: "Table Name",
    max: 100,
    optional: false
    },

  guestCount: {
    type: Number,
    min: 0,
    max: 100,
    optional: false
  },

  createdBy: {
    type: String,
    autoValue:function(){return this.userId},
  },

  createdAt: {
    type: Date,
    autoValue:function(){return new Date()}
  },

  createdForEvent: {
    type: String,
    label: "Event Id: DO NOT ALTER",

    /*autoValue:function(){
      //console.log(Session.get('currentEvent'));
      var currentEventId = Session.get('currentEvent');
      return currentEventId;
      //return "Hello!"
    }*/
  }

})

Tables.attachSchema(Schema.tables);
