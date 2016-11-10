/**
 * @ngdoc controller
 * @name appApp.controller:UserCreateCtrl
 * @description
 * Create a new user
 */
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserCreateController', UserCreateController); 

	function UserCreateController($resource, UserFactory) {
		var vm = this;
		vm.title = 'Create User';

		activate();

		function activate() {
		}
	}
})();