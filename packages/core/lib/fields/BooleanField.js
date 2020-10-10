"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _types = require("../types");

var _common = require("./common");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Comp = (0, _vue.defineComponent)({
  name: 'BooleanField',
  props: _types.CommonFieldPropsDefine,
  setup: function setup(props) {
    var _useCommonField = (0, _common.useCommonField)(props, _types.SchemaTypes.BOOLEAN),
        componentRef = _useCommonField.componentRef,
        rendererPropsRef = _useCommonField.rendererPropsRef;

    var handleChangeRef = (0, _vue.computed)(function () {
      var onChange = props.onChange;
      return function (v) {
        // TODO: 处理空值
        onChange(v);
      };
    });
    var value = props.value,
        schema = props.schema;

    if (value === undefined || typeof value !== 'boolean') {
      if (typeof schema["default"] === 'boolean') {
        handleChangeRef.value(schema["default"]);
      } else {
        handleChangeRef.value(!!value);
      }
    }

    return function () {
      var BooleanRenderer = componentRef.value;
      return (0, _vue.createVNode)(BooleanRenderer, _objectSpread(_objectSpread({}, rendererPropsRef.value), {}, {
        "onChange": handleChangeRef.value
      }), null);
    };
  }
});
var _default = Comp;
exports["default"] = _default;