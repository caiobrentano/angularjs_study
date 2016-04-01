(function() {
  var app = angular.module('gemStore', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

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

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
        return checkTab === this.tab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
