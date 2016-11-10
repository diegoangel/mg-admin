/**
 * @ngdoc function
 * @name appApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.clients')
		.controller('ClientUpdateController', ClientUpdateController);

	function ClientUpdateController($scope, ClientFactory) {
		var vm = this;
		vm.title = 'Update Client';

		activate();

		function activate() {
		}
	}
})();