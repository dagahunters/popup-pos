Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/events', {
	name: 'events',
	controller: 'EventsController',
	action: 'list',
	where: 'client'
});

Router.route('/events/create', {
	name: 'createEvent',
	controller: 'EventsController',
	action: 'create',
	where: 'client'
});

Router.route('events/:_id', {
	name: 'editEvent',
	controller: 'EventsController',
	action: 'edit',
	where: 'client'
});

Router.route('/settings', {
	name: 'settings',
	controller: 'SettingsController',
	where: 'client'
});

Router.route('/settings/addUser', {
	name: 'addUser',
	controller: 'SettingsController',
	action: 'create',
	where: 'client'
});

Router.route('/userList',{
	name: 'userList',
	controller: 'UserListController',
	where: 'client',
	authorize: {
		deny: function(){
			if (Meteor.user().profile.type == "Server")
				return true
			else
				return false

		}
	}
});

Router.route('settings/editUser/:_id',{
	name: 'EditUser',
	where: 'client',
	controller: 'EditUserController',
	authorize: {
		deny: function(){
			if (Meteor.user().profile.type == "Server")
				return true
			else
				return false
		}
	}
});

Router.route('/setupNewAccount', {
	name:'setupNewAccount',
	controller: 'SetupNewAccountController',
	where:'client'
});

Router.route('/foodMenu/menu',{
	name:'menu',
	controller: 'FoodMenuController',
	action: 'list',
	where:'client'
});

Router.route('foodMenu/menu/addMenuItem', {
	name: 'addMenuItem',
	controller: 'FoodMenuController',
	action: 'create',
	where: 'client'

});

Router.route('foodMenu/menu/editMenuItem/:_id',{
	name: 'editMenuItem',
	controller: 'FoodMenuController',
	action: 'edit',
	where:'client'
});

Router.route('/newAccountWelcome',{
	name:'newAccountWelcome',
	where: 'client',
	authorize: {
		deny: function(){
			if (Meteor.user().profile.type == "Master")
				return false;
			else
				return true;
		}
	}

});

Router.route('/viewEvent/:_id',{
	name: 'viewEvent',
	controller: 'EventsController',
	action: 'view',
	where: 'client'
});


Router.route('/createTable/:_id',{
	name: 'createTable',
	controller: 'EventsController',
	action: 'addTable',
	where: 'client'
});

Router.route('/editTable/:_id',{
	name: 'editTable',
	controller: 'EventsController',
	action: 'editTable',
	where: 'client'
});

Router.route('chooseMenu', {
	name: 'chooseMenu',
	controller: 'EventsController',
	action: 'chooseMenu',
	where: 'client'
});

/*  authorize: {
    deny: function() {
      if Meteor.user().admin
        return  false
      else
        return true
    }
  },*/

