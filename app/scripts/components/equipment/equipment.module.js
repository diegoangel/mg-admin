/**
 * @ngdoc overview
 * @name Equipment
 * @description
 *
 * Equipment module of the application.
 */
(function(){
	'use strict';

	angular
		.module('admin.equipment', [
			'admin.core'
		])
		.config(setEquipmentRoutes($stateProvider));

	function setEquipmentRoutes($stateProvider) {
		return $stateProvider.state('root.equipment', {
			url: '/equipment',
			views: {
				'@': {
					templateUrl: 'views/equipment/list.html',
					controller: 'EquipmentListCtrl',
					controllerAs: 'equipment'
				}
			}			
		});
	}
})();
