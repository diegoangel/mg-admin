/**
 * @ngdoc function
 * @name appApp.controller:EquipmentReadController
 * @description
 * # EquipmentReadController
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.models')
		.controller('ModelListController', ModelListController);

	function ModelListController($scope, ModelFactory) {
		var vm = this;
		vm.title = 'List Models';

		activate();

		function activate() {
		}
	}
})();