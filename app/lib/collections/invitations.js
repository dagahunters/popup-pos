Invitations = new Mongo.Collection('invitations');


//if (Meteor.isServer) {
  Invitations.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Invitations.deny({
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

  let InvitationsSchema = new SimpleSchema({
    email: {
      type: String,
      label: "Email to send invitation to."
    },
    token: {
      type: String,
      label: "Invitation token."
    },
    role: {
      type: String,
      label: "Role to apply to the user."
    },
    date: {
      type: String,
      label: "Invitation Date"
    }
  });

Invitations.attachSchema( InvitationsSchema );

//}

