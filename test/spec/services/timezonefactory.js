'use strict';

describe('Service: TimezoneFactory', function () {

  // load the service's module
  beforeEach(module('admin'));

  // instantiate service
  var TimezoneFactory;
  beforeEach(inject(function (_TimezoneFactory_) {
    TimezoneFactory = _TimezoneFactory_;
  }));

  it('should do something', function () {
    expect(!!TimezoneFactory).toBe(true);
  });

});
