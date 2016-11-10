/**
 * @ngdoc function
 * @name appApp.controller:EquipmentCreateController
 * @description
 * # EquipmentCreateController
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.clients')
		.controller('EquipmentListController', EquipmentListController);

	function EquipmentListController($scope, EquipmentFactory) {
		var vm = this;
		vm.title = 'List Equipment';

		activate();

		function activate() {
		}
	}
})();