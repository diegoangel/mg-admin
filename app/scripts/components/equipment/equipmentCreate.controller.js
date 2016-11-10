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
		.module('admin.equipment')
		.controller('EquipmentCreateController', EquipmentCreateController);

	function EquipmentCreateController($scope, EquipmentFactory) {
		var vm = this;
		vm.title = 'Create Equipment';

		activate();

		function activate() {
		}
	}
})();