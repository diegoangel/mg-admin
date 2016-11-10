/**
 * @ngdoc overview
 * @name Admin
 * @description
 *
 * Main module of the application.
 */

(function(){
	'use strict';

	angular
	.module('admin.core', [
		'ngAnimate', 
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngSanitize',
		'ngTouch',
		'ngResource',
		'ngStorage',
		'angular-loading-bar',
		'ui.materialize',
		'ui.router',
		'ncy-angular-breadcrumb',
		'datatables',
		'datatables.buttons',
		'gettext'
	]);
})();

