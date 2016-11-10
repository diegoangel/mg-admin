/**
 * @ngdoc controller
 * @name appApp.controller:UserUpdateCtrl
 * @description
 * List all users
 */
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserUpdateController', UserUpdateController);

	function UserUpdateController($resource, $stateParams, TimezoneFactory, user, clients, userTypes) {
		var vm = this;
		vm.title = 'Controller';

		activate();

		function activate() {
			console.log($stateParams.id);
			var tz = TimezoneFactory;
			console.trace(tz);
			vm.timezones = tz;
			vm.clients = clients;
			//var user = UserFactory.get({id: $stateParams.id});
			vm.user = user;
			console.log(vm.user);        	
		}
	}
})();
