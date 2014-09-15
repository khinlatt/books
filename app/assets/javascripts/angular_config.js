var app = angular.module("books", ["ngResource"]);

app.controller("indexCtrl", function($resource) {
  var _ = this;
  var library = $resource(
    '/books.json'
  );
  _.books = library.query();
  _.show = {
    bookFilter: '',
    authorFilter: ''
  };
});

app.controller("TabController", function(){
  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };

  this.setTab = function(setTab){
    this.tab = setTab;
  };
});

app.controller("ReviewController", function($resource){
  var reviewCtrl = this;
  var allReviews = $resource(
    '/books/:book_id/reviews.json',
    {book_id:1}, //#{@book.id}
    {review: {method: 'POST'}}
  );
  reviewCtrl.reviews = allReviews.query();
  // this.addReview(){
  //
  // };
});

// app.directive('reviewForm', function(){
//   return{
//     restrict: 'E',
//     templateUrl: 'reviewForm.html'
//   };
// });
