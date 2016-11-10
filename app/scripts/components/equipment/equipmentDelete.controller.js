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
		.controller('EquipmentDeleteController', EquipmentDeleteController);

	function EquipmentDeleteController($scope, EquipmentFactory) {
		var vm = this;

		activate();

		function activate() {
		}
	}
})();