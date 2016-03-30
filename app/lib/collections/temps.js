Temps = new Mongo.Collection('temps');


if (Meteor.isServer) {
  Temps.allow({
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

  // Temps.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });


}

Temps.attachSchema(new SimpleSchema({

  table: {
    type: String,
  },

  event: {
    type: String,

  },

  foodItem:{
    type: String,

  },


    blackNblue: {
      type: Number,
    },

    rare: {
      type: Number,
    },

    medRare: {
      type: Number,
    },

    medium: {
      type: Number,
    },

    medWell: {
      type: Number,
    },

    well: {
      type: Number,
    }
}));
