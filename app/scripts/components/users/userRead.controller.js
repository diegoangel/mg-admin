/**
 * @ngdoc controller
 * @name appApp.controller:UserReadCtrl
 * @description
 * List all users
 */
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserReadController', UserReadController); 

	function UserReadController($resource, UserFactory) {
		var vm = this;
		vm.title = 'Show User';

		activate();

		function activate() {
		}
	}
})();