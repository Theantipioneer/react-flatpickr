"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _flatpickr = _interopRequireDefault(require("flatpickr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hooks = ['onChange', 'onOpen', 'onClose', 'onMonthChange', 'onYearChange', 'onReady', 'onValueUpdate', 'onDayCreate'];

var hookPropType = _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].arrayOf(_propTypes["default"].func)]);

var callbacks = ['onCreate', 'onDestroy'];
var callbackPropTypes = _propTypes["default"].func;

var DateTimePicker = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePicker, _Component);

  var _super = _createSuper(DateTimePicker);

  function DateTimePicker() {
    var _this;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "createFlatpickrInstance", function () {
      var options = _objectSpread({
        onClose: function onClose() {
          _this.node.blur && _this.node.blur();
        }
      }, _this.props.options); // Add prop hooks to options


      hooks.forEach(function (hook) {
        if (_this.props[hook]) {
          options[hook] = _this.props[hook];
        }
      });
      _this.flatpickr = (0, _flatpickr["default"])(_this.node, options);

      if (_this.props.hasOwnProperty('value')) {
        _this.flatpickr.setDate(_this.props.value, false);
      }

      var onCreate = _this.props.onCreate;
      if (onCreate) onCreate(_this.flatpickr);
    });

    _defineProperty(_assertThisInitialized(_this), "destroyFlatpickrInstance", function () {
      var onDestroy = _this.props.onDestroy;
      if (onDestroy) onDestroy(_this.flatpickr);

      _this.flatpickr.destroy();

      _this.flatpickr = null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleNodeChange", function (node) {
      _this.node = node;

      if (_this.flatpickr) {
        _this.destroyFlatpickrInstance();

        _this.createFlatpickrInstance();
      }
    });

    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var options = this.props.options;
      var prevOptions = prevProps.options;
      hooks.forEach(function (hook) {
        mergeHooks(options, _this2.props, hook); // Add prev ones too so we can compare against them later

        mergeHooks(prevOptions, prevProps, hook);
      });
      var optionsKeys = Object.getOwnPropertyNames(options);

      for (var index = optionsKeys.length - 1; index >= 0; index--) {
        var key = optionsKeys[index];
        var value = options[key];

        if (value !== prevOptions[key]) {
          // Hook handlers must be set as an array
          if (hooks.indexOf(key) !== -1 && !Array.isArray(value)) {
            value = [value];
          }

          this.flatpickr.set(key, value);
        }
      }

      if (this.props.hasOwnProperty('value') && this.props.value !== prevProps.value) {
        this.flatpickr.setDate(this.props.value, false);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createFlatpickrInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyFlatpickrInstance();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          options = _this$props.options,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          children = _this$props.children,
          render = _this$props.render,
          props = _objectWithoutProperties(_this$props, ["options", "defaultValue", "value", "children", "render"]); // Don't pass hooks and callbacks to dom node


      hooks.forEach(function (hook) {
        delete props[hook];
      });
      callbacks.forEach(function (callback) {
        delete props[callback];
      });
      if (render) return render(_objectSpread(_objectSpread({}, props), {}, {
        defaultValue: defaultValue,
        value: value
      }), this.handleNodeChange);
      return options.wrap ? /*#__PURE__*/_react["default"].createElement("div", _extends({}, props, {
        ref: this.handleNodeChange
      }), children) : /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
        defaultValue: defaultValue,
        ref: this.handleNodeChange
      }));
    }
  }]);

  return DateTimePicker;
}(_react.Component);

_defineProperty(DateTimePicker, "propTypes", {
  defaultValue: _propTypes["default"].string,
  options: _propTypes["default"].object,
  onChange: hookPropType,
  onOpen: hookPropType,
  onClose: hookPropType,
  onMonthChange: hookPropType,
  onYearChange: hookPropType,
  onReady: hookPropType,
  onValueUpdate: hookPropType,
  onDayCreate: hookPropType,
  onCreate: callbackPropTypes,
  onDestroy: callbackPropTypes,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].number]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  render: _propTypes["default"].func
});

_defineProperty(DateTimePicker, "defaultProps", {
  options: {}
});

function mergeHooks(inputOptions, props, hook) {
  var options = _objectSpread({}, inputOptions);

  if (props.hasOwnProperty(hook)) {
    var _options$hook;

    if (options[hook] && !Array.isArray(options[hook])) {
      options[hook] = [options[hook]];
    } else if (!options[hook]) {
      options[hook] = [];
    }

    var propHook = Array.isArray(props[hook]) ? props[hook] : [props[hook]];

    (_options$hook = options[hook]).push.apply(_options$hook, _toConsumableArray(propHook));
  }

  return options;
}

var _default = DateTimePicker;
exports["default"] = _default;