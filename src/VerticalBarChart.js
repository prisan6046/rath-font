"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _getColorList = _interopRequireDefault(require("./getColorList"));

var _Chart = _interopRequireDefault(require("./Chart"));

var _ChartSegment = _interopRequireDefault(require("./ChartSegment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var makeChartConfig = function makeChartConfig(data) {
  var keys = Object.keys(data);
  var colors = (0, _getColorList["default"])(keys.length);
  var maxValue = Math.max.apply(Math, _toConsumableArray(Object.values(data)));
  var maxX = keys.length * 40;
  return {
    keys: keys,
    colors: colors,
    maxValue: maxValue,
    maxX: maxX
  };
};

var ChartBarGroup = function ChartBarGroup(_ref) {
  var dataValue = _ref.dataValue,
      ellipsized = _ref.ellipsized,
      maxValue = _ref.maxValue,
      index = _ref.index,
      color = _ref.color,
      isLast = _ref.isLast,
      tabIndex = _ref.tabIndex,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      rotateKeys = _ref.rotateKeys;
  var height = maxValue ? dataValue / maxValue * 250 : 0;
  return _react["default"].createElement("g", null, _react["default"].createElement("text", {
    x: index * 40 + (rotateKeys ? 0 : 25 / 2),
    y: 305,
    textAnchor: "middle",
    transform: rotateKeys ? "rotate(-30, ".concat(index * 40, ", 305)") : null
  }, ellipsized), dataValue !== 0 && _react["default"].createElement("text", {
    x: index * 40 + 25 / 2,
    y: 265 - height,
    textAnchor: "middle"
  }, dataValue), height !== 0 && _react["default"].createElement("g", {
    className: "chq-charts--vert-bar-group",
    tabIndex: tabIndex,
    onClick: onClick,
    onKeyDown: onKeyDown
  }, _react["default"].createElement("rect", {
    width: 25,
    height: height,
    x: index * 40,
    y: 275 - height,
    fill: color
  }), _react["default"].createElement("rect", {
    className: "chq-charts--bar-shadow",
    width: 35,
    height: height + 5,
    x: index * 40 - 5,
    y: 270 - height,
    fill: color
  })), !isLast && _react["default"].createElement("line", {
    x1: (index + 1) * 40 - 7.5,
    y1: 285,
    x2: (index + 1) * 40 - 7.5,
    y2: 265,
    stroke: "#ccc",
    strokeWidth: 1
  }));
};

var ChartBar = function ChartBar(props) {
  return _react["default"].createElement(_ChartSegment["default"], _extends({
    component: ChartBarGroup
  }, props));
};

var ChartSVG =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ChartSVG, _PureComponent);

  function ChartSVG(props) {
    var _this;

    _classCallCheck(this, ChartSVG);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChartSVG).call(this, props));
    _this.state = {
      chartConfig: makeChartConfig(props.data)
    };
    return _this;
  }

  _createClass(ChartSVG, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var data = this.props.data;

      if (data !== prevProps.data) {
        this.setState({
          chartConfig: makeChartConfig(data)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          ellipsized = _this$props.ellipsized,
          onToggle = _this$props.onToggle,
          onDeselect = _this$props.onDeselect,
          _this$props$rotateKey = _this$props.rotateKeys,
          rotateKeys = _this$props$rotateKey === void 0 ? true : _this$props$rotateKey,
          svgRef = _this$props.svgRef;
      var chartConfig = this.state.chartConfig;
      var keys = chartConfig.keys,
          colors = chartConfig.colors,
          maxValue = chartConfig.maxValue,
          maxX = chartConfig.maxX;
      return _react["default"].createElement("svg", {
        className: "chq-charts--chart chq-charts--vert-bar",
        viewBox: "0 0 ".concat(maxX, " 325"),
        ref: svgRef
      }, keys.map(function (key, index) {
        return _react["default"].createElement(ChartBar, {
          key: key,
          dataKey: key,
          dataValue: data[key],
          ellipsized: ellipsized[key],
          maxValue: maxValue,
          index: index,
          color: colors[index],
          isLast: index === keys.length - 1,
          onToggle: onToggle,
          onDeselect: onDeselect,
          rotateKeys: rotateKeys
        });
      }), _react["default"].createElement("line", {
        x1: -10,
        y1: 280,
        x2: maxX,
        y2: 280,
        stroke: "#ccc",
        strokeWidth: 1
      }));
    }
  }]);

  return ChartSVG;
}(_react.PureComponent);

var VerticalBarChart = function VerticalBarChart(props) {
  return _react["default"].createElement(_Chart["default"], _extends({
    component: ChartSVG
  }, props));
};

var _default = VerticalBarChart;
exports["default"] = _default;