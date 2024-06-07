function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = /*#__PURE__*/function (_React$Component) {
  _inherits(SiteFooter, _React$Component);
  var _super = _createSuper(SiteFooter);
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _super.call(this, props);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SiteFooter, [{
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.context.config;
      return /*#__PURE__*/React.createElement("footer", {
        role: "contentinfo",
        className: "footer d-flex border-top py-3 px-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-fluid d-flex content-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "powered-area"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://www.hdruk.ac.uk/",
        rel: "noreferrer",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        src: "https://www.hdruk.ac.uk/wp-content/themes/hdruk/assets/img/logo.svg",
        alt: "",
        width: "70"
      }))), /*#__PURE__*/React.createElement("div", null, "Powered by:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://docs.tutor.edly.io",
        rel: "noreferrer",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        src: "".concat(config.LMS_BASE_URL, "/static/hdrukfuturestheme/images/tutor-logo.png"),
        alt: "Runs on Tutor",
        width: "57"
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://openedx.org/",
        rel: "noreferrer",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        src: "".concat(config.LMS_BASE_URL, "/static/hdrukfuturestheme/images/openedx-logo.png"),
        alt: "",
        width: "79"
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://evt.digital",
        rel: "noreferrer",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("img", {
        src: "".concat(config.LMS_BASE_URL, "/static/hdrukfuturestheme/images/evt-logo.png"),
        alt: "",
        width: "65"
      })))), /*#__PURE__*/React.createElement("nav", {
        className: "nav-colophon",
        "aria-label": "About"
      }, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/about")
      }, "About Us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/tos")
      }, "Terms of Sevice")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/privacy")
      }, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "".concat(config.LMS_BASE_URL, "/help")
      }, "Help"))))));
    }
  }]);
  return SiteFooter;
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map