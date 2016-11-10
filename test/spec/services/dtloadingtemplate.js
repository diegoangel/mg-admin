'use strict';

describe('Service: DTLoadingTemplate', function () {

  // load the service's module
  beforeEach(module('admin'));

  // instantiate service
  var DTLoadingTemplate;
  beforeEach(inject(function (_DTLoadingTemplate_) {
    DTLoadingTemplate = _DTLoadingTemplate_;
  }));

  it('should do something', function () {
    expect(!!DTLoadingTemplate).toBe(true);
  });

});
