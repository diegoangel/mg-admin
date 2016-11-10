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
		.controller('ClientCreateController', ClientCreateController);

	function ClientCreateController($scope, ClientFactory) {
		var vm = this;
		vm.title = 'Create Client';

		activate();

		function activate() {
		}
	}
})();