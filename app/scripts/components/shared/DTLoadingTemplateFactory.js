/**
 * @ngdoc service
 * @name admin.DTLoadingTemplate
 * @description
 * # DTLoadingTemplate
 * Factory in the admin.
 */

(function() {
	'use strict';

	angular.module('admin')
		.factory('DTLoadingTemplate', [createLoadingTemplate]);

	function createLoadingTemplate() {
		return {
			html: '<div class="valign-center">' +
				'<div class="preloader-wrapper big active">' +
					'<div class="spinner-layer spinner-blue-only">' +
					 	'<div class="circle-clipper left">' +
							'<div class="circle"></div>' +
					  	'</div>' +
					  	'<div class="gap-patch">' +
							'<div class="circle"></div>' +
					  	'</div>' +
					  	'<div class="circle-clipper right">' +
							'<div class="circle"></div>' +
					  	'</div>' +
					'</div>' +
				'</div>' +
			'</div>'
		};
	}
})();