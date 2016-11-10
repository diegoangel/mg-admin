(function() {
	'use strict';

	angular
		.module('admin.core')
		.factory('gettextCatalogFactory', gettextCatalogFactory);

	function gettextCatalogFactory(gettextCatalog) {
		var service = {
			init: init
		};

		return service;

		function init() {
			gettextCatalog.setCurrentLanguage('es_AR');
			gettextCatalog.debug = true;
		}
	}
})();