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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsaUJBQUEsTzs7QUFDQSxvQiw2QkFBQSxROzs7cUNBR0ssYSxXQURaLE9BQU8sT0FBUCxFQUFnQixRQUFoQixDO0FBR0csdUNBQVksT0FBWixFQUFxQixRQUFyQixFQUE4QjtBQUFBOztBQUMxQix5QkFBSyxPQUFMLEdBQWUsRUFBZjtBQUNBLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNIOzt3Q0FFRCxRLHVCQUFVO0FBQ04sd0JBQUcsS0FBSyxPQUFMLENBQWEsU0FBYixLQUEyQixLQUFLLEtBQUwsQ0FBVyxTQUF6QyxFQUNJLEtBQUssUUFBTCxDQUFjLEtBQWQ7QUFDUCxpQjs7d0NBRUQsRyxrQkFBSztBQUNELHlCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEtBQUssT0FBNUIsRUFBcUMsTUFBckM7O0FBRUEsMkJBQU8sQ0FBUCxDQUFTLFFBQVQsQ0FBa0IsS0FBbEI7QUFDSCxpQjs7d0NBRUQsSSxpQkFBSyxPLEVBQ0w7QUFDSSx5QkFBSyxLQUFMLEdBQWEsUUFBUSxRQUFSLENBQWlCLEtBQTlCO0FBQ0gsaUI7O3dDQUVELFEscUJBQVMsTyxFQUFROztBQUdiLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0gsaUIiLCJmaWxlIjoib3JkZXIvcHJvZHVjdC1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
