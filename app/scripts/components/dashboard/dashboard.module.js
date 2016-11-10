(function() {
	'use strict';

	angular
	.module('admin.dashboard', [
		'admin.core'
	])
	.config(function ($stateProvider) {
		$stateProvider
		.state('root.dashboard', {
			url: '/',
			ncyBreadcrumb: {
				label: 'Inicio'
			},      
			views: {
				'@': {
					templateUrl: 'views/dashboard.html',
					controller: 'DashboardController',
					controllerAs: 'vm'
				}
			}
		});
})();