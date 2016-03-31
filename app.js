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

})();
