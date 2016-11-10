/**
 * @ngdoc controller
 * @name appApp.controller:UserLogoutCtrl
 * @description
 * List all users
 */		
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserLogoutController', UserLogoutController);


	function UserLogoutController($resource, UserFactory) {
		var vm = this;

		activate();

		function activate() {
		}
	}
})();