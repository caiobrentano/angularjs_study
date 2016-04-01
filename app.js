(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];

    $http.get('products.json').success(function(data){
      // console.log(data);
      store.products = data;
    });
  }]);

  var gems = [
    {
      name: 'Swift',
      price: 2.95,
      description: 'Object Storage unlimited',
      canPurchase: true,
      soldOut: false,
      images: {
        full: 'imgs/swift.jpg',
      },
      reviews: [
        {
          stars: 3,
          body: 'Its ok',
          author: 'nm',
        },
        {
          stars: 5,
          body: 'Amazing!',
          author: 'pq',
        }
      ],
    },
    {
      name: 'Keystone',
      price: 0.95,
      description: 'Identity service',
      canPurchase: true,
      soldOut: false,
      images: {
        full: 'imgs/keystone.png'
      },
    },
  ];

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
