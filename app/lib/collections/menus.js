Menus = new Mongo.Collection('menus');


if (Meteor.isServer) {
  Menus.allow({
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

Menus.attachSchema(new SimpleSchema({

  itemName: {
    type: String,
    label: "Item Name",
    max: 100
  },

  price: {
    type: Number,
    decimal: true,
    label: "Price $",
    max: 1000000,
    min: 0
  },

  course: {
    type: String,
    label: "Category",
    allowedValues: ['Lunch', 'Brunch', 'Dinner', 'Beverage'],
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
  createdFromAccount: {
    type: String,
    autoValue:function(){
      return Meteor.user().profile.businessName;
    }
  },


  }));
