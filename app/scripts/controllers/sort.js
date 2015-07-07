'use strict';

/**
 * @ngdoc function
 * @name demoSortableApp.controller:SortCtrl
 * @description
 * # SortCtrl
 * Controller of the demoSortableApp
 */
angular.module('demoSortableApp')
  .controller('SortCtrl', function ($scope) {
    $scope.data = ['Test1','Test2','Test3','Test4','Test5'];
    $scope.sortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id !== destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      console.log('itemMoved',event);
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
    },
    orderChanged: function (event) {
      console.log('orderChanged',event);
    },
    dragStart:function(event){
      console.log('dragStart',event);
    },
    dragEnd:function(event){
      console.log('dragEnd',event);
    },
    containment: '#board'
  };
  });
