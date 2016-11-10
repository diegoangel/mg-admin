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
		.controller('ClientListController', ClientListController);

	function ClientListController($scope, ClientFactory) {
		var vm = this;
		vm.title = 'List Clients';

		activate();

		function activate() {
		}
	}
})();