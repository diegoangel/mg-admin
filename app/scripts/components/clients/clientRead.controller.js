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
		.controller('ClientReadController', ClientReadController);

	function ClientReadController($scope, ClientFactory) {
		var vm = this;
		vm.title = 'Show Client';

		activate();

		function activate() {
		}
	}
})();