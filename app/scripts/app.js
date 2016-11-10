'use strict';

/**
 * @ngdoc overview
 * @name Admin
 * @description
 *
 * Main module of the application.
 */
angular
.module('admin', [
	'admin.core',
	'admin.config',
	'admin.equipment',
	'admin.users',
	'admin.clients',
	'admin.models'
])
.run(function ($rootScope, $state, $stateParams, gettextCatalog, ENV) {
	// Add references to $state and $stateParams to the $rootScope
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	// gettextCatalog
	//gettextCatalog.setCurrentLanguage('en_US');
	gettextCatalog.debug = true;
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider, $sessionStorageProvider, $breadcrumbProvider, cfpLoadingBarProvider) {
	$localStorageProvider.setKeyPrefix('API-');
	$sessionStorageProvider.setKeyPrefix('API-');

	$breadcrumbProvider.setOptions({
		prefixStateName: 'root.dashboard'
	});

	// Loader
	cfpLoadingBarProvider.includeSpinner = false;

	$locationProvider.hashPrefix('!');
	// Default router
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('root',{
		url: '',
		abstract: true,
		views: {
			'header': {
				templateUrl: 'views/shared/header.html',
				controller: 'HeaderCtrl',
				controllerAs: 'header'
			},
			'footer':{
				templateUrl: 'views/shared/footer.html'
			}
		}
	})
});