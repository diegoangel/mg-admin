/**
 * @ngdoc function
 * @name admin.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the admin
 */
(function() {
	'use strict';

	angular
		.module('admin.dashboard')
		.controller('DashboardController', DashboardController);

	function DashboardController() {
		var vm = this;
		vm.title = 'Dashboard';

		activate();

		function activate() {

		}			
	}
})();