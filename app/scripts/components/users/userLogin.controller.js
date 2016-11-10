/**
 * @ngdoc controller
 * @name appApp.controller:UserLoginCtrl
 * @description
 * List all users
 */		
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserLoginController', UserLoginController);


	function UserLoginController($resource, UserFactory) {
		var vm = this;
		vm.title = 'User Login';

		activate();

		function activate() {
		}
	}
})();
