/* */ 
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.configure = configure;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = LogManager.getLogger('aurelia-binding-loader');

function configure(_ref) {
	var aurelia = _ref.aurelia;

	var loader = aurelia.loader;
	loader.addPlugin('bind', {
		fetch: function fetch(address) {
			return loader.loadModule(address).then(function (module) {
				return _defineProperty({}, address, createViewResource(module, address));
			});
		}
	});
}

function createViewResource(module, address) {
	var _dec, _class;

	var Target = (_dec = (0, _aureliaTemplating.resource)({
		initialize: function initialize() {},
		load: function load() {},
		register: function register(registry, name) {
			var bindings = getBindings(name, module, address);
			registry.registerViewEngineHooks({
				beforeBind: function beforeBind(view) {
					Object.assign(view.overrideContext, bindings);
				}
			});
		}
	}), _dec(_class = function Target() {
		_classCallCheck(this, Target);
	}) || _class);


	return Target;
}

function getBindings(name, module, address) {
	var imports = void 0;
	if (module.hasOwnProperty('default')) {
		if (name) {
			imports = module.default;
		} else {
			logger.error(address + ': Can\'t import default without a name. Use <require from="my-module!bind" as="name">');
		}
	} else {
		imports = _extends({}, module);
	}

	if (name) {
		imports = _defineProperty({}, name, imports);
	}

	return imports;
}