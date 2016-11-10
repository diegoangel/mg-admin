/**
 * @ngdoc controller
 * @name appApp.controller:UserDeleteCtrl
 * @description
 * List all users
 */	
(function() {
	'use strict';

	angular
		.module('admin.users')	
		.controller('UserDeleteController',  UserDeleteController);

	function UserDeleteController($resource, UserFactory) {
		var vm = this;

		activate();

		function activate() {
		}
	}
 })();