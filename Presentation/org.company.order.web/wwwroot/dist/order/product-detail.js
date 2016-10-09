'use strict';

System.register(['aurelia-framework', 'order/service', 'common/components/carousel'], function (_export, _context) {
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
        }, function (_orderService) {
            Service = _orderService.Service;
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
                    this.service.addToCart(this.product, "cart");

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbImluamVjdCIsIlNlcnZpY2UiLCJDYXJvdXNlbCIsIlByb2R1Y3REZXRhaWwiLCJzZXJ2aWNlIiwiY2Fyb3VzZWwiLCJwcm9kdWN0IiwiYXR0YWNoZWQiLCJwcm9kdWN0SWQiLCJmaXJzdCIsInN0YXJ0IiwiYWRkIiwiYWRkVG9DYXJ0IiwicGFyZW50IiwiJCIsImZhbmN5Ym94IiwiY2xvc2UiLCJiaW5kIiwiY29udGV4dCIsImFjdGl2YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLG1CLGlCQUFBQSxPOztBQUNBQyxvQiw2QkFBQUEsUTs7O3FDQUdLQyxhLFdBRFpILE9BQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEM7QUFHRyx1Q0FBWUUsT0FBWixFQUFxQkMsUUFBckIsRUFBOEI7QUFBQTs7QUFDMUIseUJBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EseUJBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzt3Q0FFREUsUSx1QkFBVTtBQUNOLHdCQUFHLEtBQUtELE9BQUwsQ0FBYUUsU0FBYixLQUEyQixLQUFLQyxLQUFMLENBQVdELFNBQXpDLEVBQ0ksS0FBS0gsUUFBTCxDQUFjSyxLQUFkO0FBQ1AsaUI7O3dDQUVEQyxHLGtCQUFLO0FBQ0QseUJBQUtQLE9BQUwsQ0FBYVEsU0FBYixDQUF1QixLQUFLTixPQUE1QixFQUFxQyxNQUFyQzs7QUFFQU8sMkJBQU9DLENBQVAsQ0FBU0MsUUFBVCxDQUFrQkMsS0FBbEI7QUFDSCxpQjs7d0NBRURDLEksaUJBQUtDLE8sRUFDTDtBQUNJLHlCQUFLVCxLQUFMLEdBQWFTLFFBQVFiLFFBQVIsQ0FBaUJJLEtBQTlCO0FBQ0gsaUI7O3dDQUVEVSxRLHFCQUFTYixPLEVBQVE7O0FBR2IseUJBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILGlCIiwiZmlsZSI6Im9yZGVyL3Byb2R1Y3QtZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
