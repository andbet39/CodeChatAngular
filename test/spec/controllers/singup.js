'use strict';

describe('Controller: SingupCtrl', function () {

  // load the controller's module
  beforeEach(module('codeChatAngularApp'));

  var SingupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingupCtrl = $controller('SingupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SingupCtrl.awesomeThings.length).toBe(3);
  });
});
