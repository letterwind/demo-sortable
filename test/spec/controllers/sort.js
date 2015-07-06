'use strict';

describe('Controller: SortCtrl', function () {

  // load the controller's module
  beforeEach(module('demoSortableApp'));

  var SortCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    SortCtrl = $controller('SortCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SortCtrl.awesomeThings.length).toBe(3);
  });
});
