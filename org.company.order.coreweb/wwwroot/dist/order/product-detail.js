'use strict';

System.register(['aurelia-framework', './service', 'common/components/carousel'], function (_export, _context) {
    "use strict";

    var inject, Service, Carousel, _dec, _class, ProductDetail;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_service) {
            Service = _service.Service;
        }, function (_commonComponentsCarousel) {
            Carousel = _commonComponentsCarousel.Carousel;
        }],
        execute: function () {
            _export('ProductDetail', ProductDetail = (_dec = inject(Service, Carousel), _dec(_class = function () {
                function ProductDetail(service, carousel) {
                    _classCallCheck(this, ProductDetail);

                    this.product = {};
                    this.service = service;
                    this.carousel = carousel;
                }

                ProductDetail.prototype.attached = function attached() {
                    if (this.product.productId === this.first.productId) this.carousel.start();
                };

                ProductDetail.prototype.add = function add() {
                    this.service.addToCart(this.product);

                    parent.$.fancybox.close();
                };

                ProductDetail.prototype.bind = function bind(context) {
                    this.first = context.carousel.first;
                };

                ProductDetail.prototype.activate = function activate(product) {

                    this.product = product;
                };

                return ProductDetail;
            }()) || _class));

            _export('ProductDetail', ProductDetail);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsWUFBQSxPOztBQUNBLG9CLDZCQUFBLFE7OztxQ0FHSyxhLFdBRFosT0FBTyxPQUFQLEVBQWdCLFFBQWhCLEM7QUFHRyx1Q0FBWSxPQUFaLEVBQXFCLFFBQXJCLEVBQThCO0FBQUE7O0FBQzFCLHlCQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0g7O3dDQUVELFEsdUJBQVU7QUFDTix3QkFBRyxLQUFLLE9BQUwsQ0FBYSxTQUFiLEtBQTJCLEtBQUssS0FBTCxDQUFXLFNBQXpDLEVBQ0ksS0FBSyxRQUFMLENBQWMsS0FBZDtBQUNQLGlCOzt3Q0FFRCxHLGtCQUFLO0FBQ0QseUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsS0FBSyxPQUE1Qjs7QUFHQSwyQkFBTyxDQUFQLENBQVMsUUFBVCxDQUFrQixLQUFsQjtBQUNILGlCOzt3Q0FFRCxJLGlCQUFLLE8sRUFDTDtBQUNJLHlCQUFLLEtBQUwsR0FBYSxRQUFRLFFBQVIsQ0FBaUIsS0FBOUI7QUFDSCxpQjs7d0NBRUQsUSxxQkFBUyxPLEVBQVE7O0FBR2IseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDSCxpQiIsImZpbGUiOiJvcmRlci9wcm9kdWN0LWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
