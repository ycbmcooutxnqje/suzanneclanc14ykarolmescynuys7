(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.videojs = f();
  }
})(function () {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw ((f.code = "MODULE_NOT_FOUND"), f);
        }
        var l = (n[o] = { exports: {} });
        t[o][0].call(
          l.exports,
          function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          },
          l,
          l.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
  })(
    {
      1: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _button = _dereq_(2);
          var _button2 = _interopRequireDefault(_button);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var BigPlayButton = (function (_Button) {
            _inherits(BigPlayButton, _Button);
            function BigPlayButton() {
              _classCallCheck(this, BigPlayButton);
              return _possibleConstructorReturn(
                this,
                _Button.apply(this, arguments)
              );
            }
            BigPlayButton.prototype.buildCSSClass = function buildCSSClass() {
              return "vjs-big-play-button";
            };
            BigPlayButton.prototype.handleClick = function handleClick(event) {
              this.player_.play();
              var cb = this.player_.getChild("controlBar");
              var playToggle = cb && cb.getChild("playToggle");
              if (!playToggle) {
                this.player_.focus();
                return;
              }
              this.setTimeout(function () {
                playToggle.focus();
              }, 1);
            };
            return BigPlayButton;
          })(_button2["default"]);
          BigPlayButton.prototype.controlText_ = "Play Video";
          _component2["default"].registerComponent(
            "BigPlayButton",
            BigPlayButton
          );
          exports["default"] = BigPlayButton;
        },
        { 2: 2, 5: 5 },
      ],
      2: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _clickableComponent = _dereq_(3);
          var _clickableComponent2 =
            _interopRequireDefault(_clickableComponent);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _obj = _dereq_(88);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Button = (function (_ClickableComponent) {
            _inherits(Button, _ClickableComponent);
            function Button() {
              _classCallCheck(this, Button);
              return _possibleConstructorReturn(
                this,
                _ClickableComponent.apply(this, arguments)
              );
            }
            Button.prototype.createEl = function createEl() {
              var tag =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "button";
              var props =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var attributes =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {};
              props = (0, _obj.assign)(
                { className: this.buildCSSClass() },
                props
              );
              if (tag !== "button") {
                _log2["default"].warn(
                  "Creating a Button with an HTML element of " +
                    tag +
                    " is deprecated; use ClickableComponent instead."
                );
                props = (0, _obj.assign)({ tabIndex: 0 }, props);
                attributes = (0, _obj.assign)({ role: "button" }, attributes);
              }
              attributes = (0, _obj.assign)(
                { type: "button", "aria-live": "polite" },
                attributes
              );
              var el = _component2["default"].prototype.createEl.call(
                this,
                tag,
                props,
                attributes
              );
              this.createControlTextEl(el);
              return el;
            };
            Button.prototype.addChild = function addChild(child) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var className = this.constructor.name;
              _log2["default"].warn(
                "Adding an actionable (user controllable) child to a Button (" +
                  className +
                  ") is not supported; use a ClickableComponent instead."
              );
              return _component2["default"].prototype.addChild.call(
                this,
                child,
                options
              );
            };
            Button.prototype.enable = function enable() {
              _ClickableComponent.prototype.enable.call(this);
              this.el_.removeAttribute("disabled");
            };
            Button.prototype.disable = function disable() {
              _ClickableComponent.prototype.disable.call(this);
              this.el_.setAttribute("disabled", "disabled");
            };
            Button.prototype.handleKeyPress = function handleKeyPress(event) {
              if (event.which === 32 || event.which === 13) {
                return;
              }
              _ClickableComponent.prototype.handleKeyPress.call(this, event);
            };
            return Button;
          })(_clickableComponent2["default"]);
          _component2["default"].registerComponent("Button", Button);
          exports["default"] = Button;
        },
        { 3: 3, 5: 5, 86: 86, 88: 88 },
      ],
      3: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _obj = _dereq_(88);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ClickableComponent = (function (_Component) {
            _inherits(ClickableComponent, _Component);
            function ClickableComponent(player, options) {
              _classCallCheck(this, ClickableComponent);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.emitTapEvents();
              _this.enable();
              return _this;
            }
            ClickableComponent.prototype.createEl = function createEl() {
              var tag =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "div";
              var props =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var attributes =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {};
              props = (0, _obj.assign)(
                { className: this.buildCSSClass(), tabIndex: 0 },
                props
              );
              if (tag === "button") {
                _log2["default"].error(
                  "Creating a ClickableComponent with an HTML element of " +
                    tag +
                    " is not supported; use a Button instead."
                );
              }
              attributes = (0, _obj.assign)(
                { role: "button", "aria-live": "polite" },
                attributes
              );
              this.tabIndex_ = props.tabIndex;
              var el = _Component.prototype.createEl.call(
                this,
                tag,
                props,
                attributes
              );
              this.createControlTextEl(el);
              return el;
            };
            ClickableComponent.prototype.createControlTextEl =
              function createControlTextEl(el) {
                this.controlTextEl_ = Dom.createEl("span", {
                  className: "vjs-control-text",
                });
                if (el) {
                  el.appendChild(this.controlTextEl_);
                }
                this.controlText(this.controlText_, el);
                return this.controlTextEl_;
              };
            ClickableComponent.prototype.controlText = function controlText(
              text
            ) {
              var el =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : this.el();
              if (!text) {
                return this.controlText_ || "Need Text";
              }
              var localizedText = this.localize(text);
              this.controlText_ = text;
              this.controlTextEl_.innerHTML = localizedText;
              if (!this.nonIconControl) {
                el.setAttribute("title", localizedText);
              }
              return this;
            };
            ClickableComponent.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-control vjs-button " +
                  _Component.prototype.buildCSSClass.call(this)
                );
              };
            ClickableComponent.prototype.enable = function enable() {
              this.removeClass("vjs-disabled");
              this.el_.setAttribute("aria-disabled", "false");
              if (typeof this.tabIndex_ !== "undefined") {
                this.el_.setAttribute("tabIndex", this.tabIndex_);
              }
              this.on("tap", this.handleClick);
              this.on("click", this.handleClick);
              this.on("focus", this.handleFocus);
              this.on("blur", this.handleBlur);
              return this;
            };
            ClickableComponent.prototype.disable = function disable() {
              this.addClass("vjs-disabled");
              this.el_.setAttribute("aria-disabled", "true");
              if (typeof this.tabIndex_ !== "undefined") {
                this.el_.removeAttribute("tabIndex");
              }
              this.off("tap", this.handleClick);
              this.off("click", this.handleClick);
              this.off("focus", this.handleFocus);
              this.off("blur", this.handleBlur);
              return this;
            };
            ClickableComponent.prototype.handleClick = function handleClick(
              event
            ) {};
            ClickableComponent.prototype.handleFocus = function handleFocus(
              event
            ) {
              Events.on(
                _document2["default"],
                "keydown",
                Fn.bind(this, this.handleKeyPress)
              );
            };
            ClickableComponent.prototype.handleKeyPress =
              function handleKeyPress(event) {
                if (event.which === 32 || event.which === 13) {
                  event.preventDefault();
                  this.handleClick(event);
                } else if (_Component.prototype.handleKeyPress) {
                  _Component.prototype.handleKeyPress.call(this, event);
                }
              };
            ClickableComponent.prototype.handleBlur = function handleBlur(
              event
            ) {
              Events.off(
                _document2["default"],
                "keydown",
                Fn.bind(this, this.handleKeyPress)
              );
            };
            return ClickableComponent;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "ClickableComponent",
            ClickableComponent
          );
          exports["default"] = ClickableComponent;
        },
        { 5: 5, 81: 81, 82: 82, 83: 83, 86: 86, 88: 88, 94: 94 },
      ],
      4: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _button = _dereq_(2);
          var _button2 = _interopRequireDefault(_button);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var CloseButton = (function (_Button) {
            _inherits(CloseButton, _Button);
            function CloseButton(player, options) {
              _classCallCheck(this, CloseButton);
              var _this = _possibleConstructorReturn(
                this,
                _Button.call(this, player, options)
              );
              _this.controlText(
                (options && options.controlText) || _this.localize("Close")
              );
              return _this;
            }
            CloseButton.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-close-button " + _Button.prototype.buildCSSClass.call(this)
              );
            };
            CloseButton.prototype.handleClick = function handleClick(event) {
              this.trigger({ type: "close", bubbles: false });
            };
            return CloseButton;
          })(_button2["default"]);
          _component2["default"].registerComponent("CloseButton", CloseButton);
          exports["default"] = CloseButton;
        },
        { 2: 2, 5: 5 },
      ],
      5: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _guid = _dereq_(85);
          var Guid = _interopRequireWildcard(_guid);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var Component = (function () {
            function Component(player, options, ready) {
              _classCallCheck(this, Component);
              if (!player && this.play) {
                this.player_ = player = this;
              } else {
                this.player_ = player;
              }
              this.options_ = (0, _mergeOptions2["default"])({}, this.options_);
              options = this.options_ = (0, _mergeOptions2["default"])(
                this.options_,
                options
              );
              this.id_ = options.id || (options.el && options.el.id);
              if (!this.id_) {
                var id = (player && player.id && player.id()) || "no_player";
                this.id_ = id + "_component_" + Guid.newGUID();
              }
              this.name_ = options.name || null;
              if (options.el) {
                this.el_ = options.el;
              } else if (options.createEl !== false) {
                this.el_ = this.createEl();
              }
              this.children_ = [];
              this.childIndex_ = {};
              this.childNameIndex_ = {};
              if (options.initChildren !== false) {
                this.initChildren();
              }
              this.ready(ready);
              if (options.reportTouchActivity !== false) {
                this.enableTouchActivity();
              }
            }
            Component.prototype.dispose = function dispose() {
              this.trigger({ type: "dispose", bubbles: false });
              if (this.children_) {
                for (var i = this.children_.length - 1; i >= 0; i--) {
                  if (this.children_[i].dispose) {
                    this.children_[i].dispose();
                  }
                }
              }
              this.children_ = null;
              this.childIndex_ = null;
              this.childNameIndex_ = null;
              this.off();
              if (this.el_.parentNode) {
                this.el_.parentNode.removeChild(this.el_);
              }
              Dom.removeElData(this.el_);
              this.el_ = null;
            };
            Component.prototype.player = function player() {
              return this.player_;
            };
            Component.prototype.options = function options(obj) {
              _log2["default"].warn(
                "this.options() has been deprecated and will be moved to the constructor in 6.0"
              );
              if (!obj) {
                return this.options_;
              }
              this.options_ = (0, _mergeOptions2["default"])(
                this.options_,
                obj
              );
              return this.options_;
            };
            Component.prototype.el = function el() {
              return this.el_;
            };
            Component.prototype.createEl = function createEl(
              tagName,
              properties,
              attributes
            ) {
              return Dom.createEl(tagName, properties, attributes);
            };
            Component.prototype.localize = function localize(string) {
              var code = this.player_.language && this.player_.language();
              var languages =
                this.player_.languages && this.player_.languages();
              if (!code || !languages) {
                return string;
              }
              var language = languages[code];
              if (language && language[string]) {
                return language[string];
              }
              var primaryCode = code.split("-")[0];
              var primaryLang = languages[primaryCode];
              if (primaryLang && primaryLang[string]) {
                return primaryLang[string];
              }
              return string;
            };
            Component.prototype.contentEl = function contentEl() {
              return this.contentEl_ || this.el_;
            };
            Component.prototype.id = function id() {
              return this.id_;
            };
            Component.prototype.name = function name() {
              return this.name_;
            };
            Component.prototype.children = function children() {
              return this.children_;
            };
            Component.prototype.getChildById = function getChildById(id) {
              return this.childIndex_[id];
            };
            Component.prototype.getChild = function getChild(name) {
              if (!name) {
                return;
              }
              name = (0, _toTitleCase2["default"])(name);
              return this.childNameIndex_[name];
            };
            Component.prototype.addChild = function addChild(child) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var index =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : this.children_.length;
              var component = void 0;
              var componentName = void 0;
              if (typeof child === "string") {
                componentName = (0, _toTitleCase2["default"])(child);
                if (!options) {
                  options = {};
                }
                if (options === true) {
                  _log2["default"].warn(
                    "Initializing a child component with `true` is deprecated." +
                      "Children should be defined in an array when possible, " +
                      "but if necessary use an object instead of `true`."
                  );
                  options = {};
                }
                var componentClassName =
                  options.componentClass || componentName;
                options.name = componentName;
                var ComponentClass = Component.getComponent(componentClassName);
                if (!ComponentClass) {
                  throw new Error(
                    "Component " + componentClassName + " does not exist"
                  );
                }
                if (typeof ComponentClass !== "function") {
                  return null;
                }
                component = new ComponentClass(this.player_ || this, options);
              } else {
                component = child;
              }
              this.children_.splice(index, 0, component);
              if (typeof component.id === "function") {
                this.childIndex_[component.id()] = component;
              }
              componentName =
                componentName ||
                (component.name &&
                  (0, _toTitleCase2["default"])(component.name()));
              if (componentName) {
                this.childNameIndex_[componentName] = component;
              }
              if (typeof component.el === "function" && component.el()) {
                var childNodes = this.contentEl().children;
                var refNode = childNodes[index] || null;
                this.contentEl().insertBefore(component.el(), refNode);
              }
              return component;
            };
            Component.prototype.removeChild = function removeChild(component) {
              if (typeof component === "string") {
                component = this.getChild(component);
              }
              if (!component || !this.children_) {
                return;
              }
              var childFound = false;
              for (var i = this.children_.length - 1; i >= 0; i--) {
                if (this.children_[i] === component) {
                  childFound = true;
                  this.children_.splice(i, 1);
                  break;
                }
              }
              if (!childFound) {
                return;
              }
              this.childIndex_[component.id()] = null;
              this.childNameIndex_[component.name()] = null;
              var compEl = component.el();
              if (compEl && compEl.parentNode === this.contentEl()) {
                this.contentEl().removeChild(component.el());
              }
            };
            Component.prototype.initChildren = function initChildren() {
              var _this = this;
              var children = this.options_.children;
              if (children) {
                var parentOptions = this.options_;
                var handleAdd = function handleAdd(child) {
                  var name = child.name;
                  var opts = child.opts;
                  if (parentOptions[name] !== undefined) {
                    opts = parentOptions[name];
                  }
                  if (opts === false) {
                    return;
                  }
                  if (opts === true) {
                    opts = {};
                  }
                  opts.playerOptions = _this.options_.playerOptions;
                  var newChild = _this.addChild(name, opts);
                  if (newChild) {
                    _this[name] = newChild;
                  }
                };
                var workingChildren = void 0;
                var Tech = Component.getComponent("Tech");
                if (Array.isArray(children)) {
                  workingChildren = children;
                } else {
                  workingChildren = Object.keys(children);
                }
                workingChildren
                  .concat(
                    Object.keys(this.options_).filter(function (child) {
                      return !workingChildren.some(function (wchild) {
                        if (typeof wchild === "string") {
                          return child === wchild;
                        }
                        return child === wchild.name;
                      });
                    })
                  )
                  .map(function (child) {
                    var name = void 0;
                    var opts = void 0;
                    if (typeof child === "string") {
                      name = child;
                      opts = children[name] || _this.options_[name] || {};
                    } else {
                      name = child.name;
                      opts = child;
                    }
                    return { name: name, opts: opts };
                  })
                  .filter(function (child) {
                    var c = Component.getComponent(
                      child.opts.componentClass ||
                        (0, _toTitleCase2["default"])(child.name)
                    );
                    return c && !Tech.isTech(c);
                  })
                  .forEach(handleAdd);
              }
            };
            Component.prototype.buildCSSClass = function buildCSSClass() {
              return "";
            };
            Component.prototype.on = function on(first, second, third) {
              var _this2 = this;
              if (typeof first === "string" || Array.isArray(first)) {
                Events.on(this.el_, first, Fn.bind(this, second));
              } else {
                var target = first;
                var type = second;
                var fn = Fn.bind(this, third);
                var removeOnDispose = function removeOnDispose() {
                  return _this2.off(target, type, fn);
                };
                removeOnDispose.guid = fn.guid;
                this.on("dispose", removeOnDispose);
                var cleanRemover = function cleanRemover() {
                  return _this2.off("dispose", removeOnDispose);
                };
                cleanRemover.guid = fn.guid;
                if (first.nodeName) {
                  Events.on(target, type, fn);
                  Events.on(target, "dispose", cleanRemover);
                } else if (typeof first.on === "function") {
                  target.on(type, fn);
                  target.on("dispose", cleanRemover);
                }
              }
              return this;
            };
            Component.prototype.off = function off(first, second, third) {
              if (!first || typeof first === "string" || Array.isArray(first)) {
                Events.off(this.el_, first, second);
              } else {
                var target = first;
                var type = second;
                var fn = Fn.bind(this, third);
                this.off("dispose", fn);
                if (first.nodeName) {
                  Events.off(target, type, fn);
                  Events.off(target, "dispose", fn);
                } else {
                  target.off(type, fn);
                  target.off("dispose", fn);
                }
              }
              return this;
            };
            Component.prototype.one = function one(first, second, third) {
              var _this3 = this,
                _arguments = arguments;
              if (typeof first === "string" || Array.isArray(first)) {
                Events.one(this.el_, first, Fn.bind(this, second));
              } else {
                var target = first;
                var type = second;
                var fn = Fn.bind(this, third);
                var newFunc = function newFunc() {
                  _this3.off(target, type, newFunc);
                  fn.apply(null, _arguments);
                };
                newFunc.guid = fn.guid;
                this.on(target, type, newFunc);
              }
              return this;
            };
            Component.prototype.trigger = function trigger(event, hash) {
              Events.trigger(this.el_, event, hash);
              return this;
            };
            Component.prototype.ready = function ready(fn) {
              var sync =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : false;
              if (fn) {
                if (this.isReady_) {
                  if (sync) {
                    fn.call(this);
                  } else {
                    this.setTimeout(fn, 1);
                  }
                } else {
                  this.readyQueue_ = this.readyQueue_ || [];
                  this.readyQueue_.push(fn);
                }
              }
              return this;
            };
            Component.prototype.triggerReady = function triggerReady() {
              this.isReady_ = true;
              this.setTimeout(function () {
                var readyQueue = this.readyQueue_;
                this.readyQueue_ = [];
                if (readyQueue && readyQueue.length > 0) {
                  readyQueue.forEach(function (fn) {
                    fn.call(this);
                  }, this);
                }
                this.trigger("ready");
              }, 1);
            };
            Component.prototype.$ = function $(selector, context) {
              return Dom.$(selector, context || this.contentEl());
            };
            Component.prototype.$$ = function $$(selector, context) {
              return Dom.$$(selector, context || this.contentEl());
            };
            Component.prototype.hasClass = function hasClass(classToCheck) {
              return Dom.hasElClass(this.el_, classToCheck);
            };
            Component.prototype.addClass = function addClass(classToAdd) {
              Dom.addElClass(this.el_, classToAdd);
              return this;
            };
            Component.prototype.removeClass = function removeClass(
              classToRemove
            ) {
              Dom.removeElClass(this.el_, classToRemove);
              return this;
            };
            Component.prototype.toggleClass = function toggleClass(
              classToToggle,
              predicate
            ) {
              Dom.toggleElClass(this.el_, classToToggle, predicate);
              return this;
            };
            Component.prototype.show = function show() {
              this.removeClass("vjs-hidden");
              return this;
            };
            Component.prototype.hide = function hide() {
              this.addClass("vjs-hidden");
              return this;
            };
            Component.prototype.lockShowing = function lockShowing() {
              this.addClass("vjs-lock-showing");
              return this;
            };
            Component.prototype.unlockShowing = function unlockShowing() {
              this.removeClass("vjs-lock-showing");
              return this;
            };
            Component.prototype.getAttribute = function getAttribute(
              attribute
            ) {
              return Dom.getAttribute(this.el_, attribute);
            };
            Component.prototype.setAttribute = function setAttribute(
              attribute,
              value
            ) {
              Dom.setAttribute(this.el_, attribute, value);
              return this;
            };
            Component.prototype.removeAttribute = function removeAttribute(
              attribute
            ) {
              Dom.removeAttribute(this.el_, attribute);
              return this;
            };
            Component.prototype.width = function width(num, skipListeners) {
              return this.dimension("width", num, skipListeners);
            };
            Component.prototype.height = function height(num, skipListeners) {
              return this.dimension("height", num, skipListeners);
            };
            Component.prototype.dimensions = function dimensions(
              width,
              height
            ) {
              return this.width(width, true).height(height);
            };
            Component.prototype.dimension = function dimension(
              widthOrHeight,
              num,
              skipListeners
            ) {
              if (num !== undefined) {
                if (num === null || num !== num) {
                  num = 0;
                }
                if (
                  ("" + num).indexOf("%") !== -1 ||
                  ("" + num).indexOf("px") !== -1
                ) {
                  this.el_.style[widthOrHeight] = num;
                } else if (num === "auto") {
                  this.el_.style[widthOrHeight] = "";
                } else {
                  this.el_.style[widthOrHeight] = num + "px";
                }
                if (!skipListeners) {
                  this.trigger("resize");
                }
                return this;
              }
              if (!this.el_) {
                return 0;
              }
              var val = this.el_.style[widthOrHeight];
              var pxIndex = val.indexOf("px");
              if (pxIndex !== -1) {
                return parseInt(val.slice(0, pxIndex), 10);
              }
              return parseInt(
                this.el_[
                  "offset" + (0, _toTitleCase2["default"])(widthOrHeight)
                ],
                10
              );
            };
            Component.prototype.currentDimension = function currentDimension(
              widthOrHeight
            ) {
              var computedWidthOrHeight = 0;
              if (widthOrHeight !== "width" && widthOrHeight !== "height") {
                throw new Error(
                  "currentDimension only accepts width or height value"
                );
              }
              if (typeof _window2["default"].getComputedStyle === "function") {
                var computedStyle = _window2["default"].getComputedStyle(
                  this.el_
                );
                computedWidthOrHeight =
                  computedStyle.getPropertyValue(widthOrHeight) ||
                  computedStyle[widthOrHeight];
              }
              computedWidthOrHeight = parseFloat(computedWidthOrHeight);
              if (computedWidthOrHeight === 0) {
                var rule =
                  "offset" + (0, _toTitleCase2["default"])(widthOrHeight);
                computedWidthOrHeight = this.el_[rule];
              }
              return computedWidthOrHeight;
            };
            Component.prototype.currentDimensions =
              function currentDimensions() {
                return {
                  width: this.currentDimension("width"),
                  height: this.currentDimension("height"),
                };
              };
            Component.prototype.currentWidth = function currentWidth() {
              return this.currentDimension("width");
            };
            Component.prototype.currentHeight = function currentHeight() {
              return this.currentDimension("height");
            };
            Component.prototype.focus = function focus() {
              this.el_.focus();
            };
            Component.prototype.blur = function blur() {
              this.el_.blur();
            };
            Component.prototype.emitTapEvents = function emitTapEvents() {
              var touchStart = 0;
              var firstTouch = null;
              var tapMovementThreshold = 10;
              var touchTimeThreshold = 200;
              var couldBeTap = void 0;
              this.on("touchstart", function (event) {
                if (event.touches.length === 1) {
                  firstTouch = {
                    pageX: event.touches[0].pageX,
                    pageY: event.touches[0].pageY,
                  };
                  touchStart = new Date().getTime();
                  couldBeTap = true;
                }
              });
              this.on("touchmove", function (event) {
                if (event.touches.length > 1) {
                  couldBeTap = false;
                } else if (firstTouch) {
                  var xdiff = event.touches[0].pageX - firstTouch.pageX;
                  var ydiff = event.touches[0].pageY - firstTouch.pageY;
                  var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
                  if (touchDistance > tapMovementThreshold) {
                    couldBeTap = false;
                  }
                }
              });
              var noTap = function noTap() {
                couldBeTap = false;
              };
              this.on("touchleave", noTap);
              this.on("touchcancel", noTap);
              this.on("touchend", function (event) {
                firstTouch = null;
                if (couldBeTap === true) {
                  var touchTime = new Date().getTime() - touchStart;
                  if (touchTime < touchTimeThreshold) {
                    event.preventDefault();
                    this.trigger("tap");
                  }
                }
              });
            };
            Component.prototype.enableTouchActivity =
              function enableTouchActivity() {
                if (!this.player() || !this.player().reportUserActivity) {
                  return;
                }
                var report = Fn.bind(
                  this.player(),
                  this.player().reportUserActivity
                );
                var touchHolding = void 0;
                this.on("touchstart", function () {
                  report();
                  this.clearInterval(touchHolding);
                  touchHolding = this.setInterval(report, 250);
                });
                var touchEnd = function touchEnd(event) {
                  report();
                  this.clearInterval(touchHolding);
                };
                this.on("touchmove", report);
                this.on("touchend", touchEnd);
                this.on("touchcancel", touchEnd);
              };
            Component.prototype.setTimeout = function setTimeout(fn, timeout) {
              fn = Fn.bind(this, fn);
              var timeoutId = _window2["default"].setTimeout(fn, timeout);
              var disposeFn = function disposeFn() {
                this.clearTimeout(timeoutId);
              };
              disposeFn.guid = "vjs-timeout-" + timeoutId;
              this.on("dispose", disposeFn);
              return timeoutId;
            };
            Component.prototype.clearTimeout = function clearTimeout(
              timeoutId
            ) {
              _window2["default"].clearTimeout(timeoutId);
              var disposeFn = function disposeFn() {};
              disposeFn.guid = "vjs-timeout-" + timeoutId;
              this.off("dispose", disposeFn);
              return timeoutId;
            };
            Component.prototype.setInterval = function setInterval(
              fn,
              interval
            ) {
              fn = Fn.bind(this, fn);
              var intervalId = _window2["default"].setInterval(fn, interval);
              var disposeFn = function disposeFn() {
                this.clearInterval(intervalId);
              };
              disposeFn.guid = "vjs-interval-" + intervalId;
              this.on("dispose", disposeFn);
              return intervalId;
            };
            Component.prototype.clearInterval = function clearInterval(
              intervalId
            ) {
              _window2["default"].clearInterval(intervalId);
              var disposeFn = function disposeFn() {};
              disposeFn.guid = "vjs-interval-" + intervalId;
              this.off("dispose", disposeFn);
              return intervalId;
            };
            Component.registerComponent = function registerComponent(
              name,
              comp
            ) {
              if (!name) {
                return;
              }
              name = (0, _toTitleCase2["default"])(name);
              if (!Component.components_) {
                Component.components_ = {};
              }
              if (name === "Player" && Component.components_[name]) {
                var Player = Component.components_[name];
                if (
                  Player.players &&
                  Object.keys(Player.players).length > 0 &&
                  Object.keys(Player.players)
                    .map(function (playerName) {
                      return Player.players[playerName];
                    })
                    .every(Boolean)
                ) {
                  throw new Error(
                    "Can not register Player component after player has been created"
                  );
                }
              }
              Component.components_[name] = comp;
              return comp;
            };
            Component.getComponent = function getComponent(name) {
              if (!name) {
                return;
              }
              name = (0, _toTitleCase2["default"])(name);
              if (Component.components_ && Component.components_[name]) {
                return Component.components_[name];
              }
              if (
                _window2["default"] &&
                _window2["default"].videojs &&
                _window2["default"].videojs[name]
              ) {
                _log2["default"].warn(
                  "The " +
                    name +
                    " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"
                );
                return _window2["default"].videojs[name];
              }
            };
            Component.extend = function extend(props) {
              props = props || {};
              _log2["default"].warn(
                "Component.extend({}) has been deprecated, " +
                  " use videojs.extend(Component, {}) instead"
              );
              var init =
                props.init ||
                props.init ||
                this.prototype.init ||
                this.prototype.init ||
                function () {};
              var subObj = function subObj() {
                init.apply(this, arguments);
              };
              subObj.prototype = Object.create(this.prototype);
              subObj.prototype.constructor = subObj;
              subObj.extend = Component.extend;
              for (var name in props) {
                if (props.hasOwnProperty(name)) {
                  subObj.prototype[name] = props[name];
                }
              }
              return subObj;
            };
            return Component;
          })();
          Component.registerComponent("Component", Component);
          exports["default"] = Component;
        },
        { 81: 81, 82: 82, 83: 83, 85: 85, 86: 86, 87: 87, 91: 91, 95: 95 },
      ],
      6: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackButton = _dereq_(36);
          var _trackButton2 = _interopRequireDefault(_trackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _audioTrackMenuItem = _dereq_(7);
          var _audioTrackMenuItem2 =
            _interopRequireDefault(_audioTrackMenuItem);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var AudioTrackButton = (function (_TrackButton) {
            _inherits(AudioTrackButton, _TrackButton);
            function AudioTrackButton(player) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              _classCallCheck(this, AudioTrackButton);
              options.tracks = player.audioTracks && player.audioTracks();
              var _this = _possibleConstructorReturn(
                this,
                _TrackButton.call(this, player, options)
              );
              _this.el_.setAttribute("aria-label", "Audio Menu");
              return _this;
            }
            AudioTrackButton.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-audio-button " +
                  _TrackButton.prototype.buildCSSClass.call(this)
                );
              };
            AudioTrackButton.prototype.createItems = function createItems() {
              var items =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              this.hideThreshold_ = 1;
              var tracks =
                this.player_.audioTracks && this.player_.audioTracks();
              if (!tracks) {
                return items;
              }
              for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                items.push(
                  new _audioTrackMenuItem2["default"](this.player_, {
                    track: track,
                    selectable: true,
                  })
                );
              }
              return items;
            };
            return AudioTrackButton;
          })(_trackButton2["default"]);
          AudioTrackButton.prototype.controlText_ = "Audio Track";
          _component2["default"].registerComponent(
            "AudioTrackButton",
            AudioTrackButton
          );
          exports["default"] = AudioTrackButton;
        },
        { 36: 36, 5: 5, 7: 7 },
      ],
      7: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _menuItem = _dereq_(48);
          var _menuItem2 = _interopRequireDefault(_menuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var AudioTrackMenuItem = (function (_MenuItem) {
            _inherits(AudioTrackMenuItem, _MenuItem);
            function AudioTrackMenuItem(player, options) {
              _classCallCheck(this, AudioTrackMenuItem);
              var track = options.track;
              var tracks = player.audioTracks();
              options.label = track.label || track.language || "Unknown";
              options.selected = track.enabled;
              var _this = _possibleConstructorReturn(
                this,
                _MenuItem.call(this, player, options)
              );
              _this.track = track;
              if (tracks) {
                var changeHandler = Fn.bind(_this, _this.handleTracksChange);
                tracks.addEventListener("change", changeHandler);
                _this.on("dispose", function () {
                  tracks.removeEventListener("change", changeHandler);
                });
              }
              return _this;
            }
            AudioTrackMenuItem.prototype.handleClick = function handleClick(
              event
            ) {
              var tracks = this.player_.audioTracks();
              _MenuItem.prototype.handleClick.call(this, event);
              if (!tracks) {
                return;
              }
              for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track.enabled = track === this.track;
              }
            };
            AudioTrackMenuItem.prototype.handleTracksChange =
              function handleTracksChange(event) {
                this.selected(this.track.enabled);
              };
            return AudioTrackMenuItem;
          })(_menuItem2["default"]);
          _component2["default"].registerComponent(
            "AudioTrackMenuItem",
            AudioTrackMenuItem
          );
          exports["default"] = AudioTrackMenuItem;
        },
        { 48: 48, 5: 5, 83: 83 },
      ],
      8: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          _dereq_(12);
          _dereq_(32);
          _dereq_(33);
          _dereq_(35);
          _dereq_(34);
          _dereq_(10);
          _dereq_(18);
          _dereq_(9);
          _dereq_(38);
          _dereq_(40);
          _dereq_(11);
          _dereq_(25);
          _dereq_(27);
          _dereq_(29);
          _dereq_(24);
          _dereq_(6);
          _dereq_(13);
          _dereq_(21);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ControlBar = (function (_Component) {
            _inherits(ControlBar, _Component);
            function ControlBar() {
              _classCallCheck(this, ControlBar);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            ControlBar.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(
                this,
                "div",
                { className: "vjs-control-bar", dir: "ltr" },
                { role: "group" }
              );
            };
            return ControlBar;
          })(_component2["default"]);
          ControlBar.prototype.options_ = {
            children: [
              "playToggle",
              "volumeMenuButton",
              "currentTimeDisplay",
              "timeDivider",
              "durationDisplay",
              "progressControl",
              "liveDisplay",
              "remainingTimeDisplay",
              "customControlSpacer",
              "playbackRateMenuButton",
              "chaptersButton",
              "descriptionsButton",
              "subtitlesButton",
              "captionsButton",
              "audioTrackButton",
              "fullscreenToggle",
            ],
          };
          _component2["default"].registerComponent("ControlBar", ControlBar);
          exports["default"] = ControlBar;
        },
        {
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          18: 18,
          21: 21,
          24: 24,
          25: 25,
          27: 27,
          29: 29,
          32: 32,
          33: 33,
          34: 34,
          35: 35,
          38: 38,
          40: 40,
          5: 5,
          6: 6,
          9: 9,
        },
      ],
      9: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _button = _dereq_(2);
          var _button2 = _interopRequireDefault(_button);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var FullscreenToggle = (function (_Button) {
            _inherits(FullscreenToggle, _Button);
            function FullscreenToggle(player, options) {
              _classCallCheck(this, FullscreenToggle);
              var _this = _possibleConstructorReturn(
                this,
                _Button.call(this, player, options)
              );
              _this.on(
                player,
                "fullscreenchange",
                _this.handleFullscreenChange
              );
              return _this;
            }
            FullscreenToggle.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-fullscreen-control " +
                  _Button.prototype.buildCSSClass.call(this)
                );
              };
            FullscreenToggle.prototype.handleFullscreenChange =
              function handleFullscreenChange(event) {
                if (this.player_.isFullscreen()) {
                  this.controlText("Salir de Pantalla Completa");
                } else {
                  this.controlText("Pantalla Completa");
                }
              };
            FullscreenToggle.prototype.handleClick = function handleClick(
              event
            ) {
              if (!this.player_.isFullscreen()) {
                this.player_.requestFullscreen();
              } else {
                this.player_.exitFullscreen();
              }
            };
            return FullscreenToggle;
          })(_button2["default"]);
          FullscreenToggle.prototype.controlText_ = "Pantalla Completa";
          _component2["default"].registerComponent(
            "FullscreenToggle",
            FullscreenToggle
          );
          exports["default"] = FullscreenToggle;
        },
        { 2: 2, 5: 5 },
      ],
      10: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var LiveDisplay = (function (_Component) {
            _inherits(LiveDisplay, _Component);
            function LiveDisplay(player, options) {
              _classCallCheck(this, LiveDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.updateShowing();
              _this.on(_this.player(), "durationchange", _this.updateShowing);
              return _this;
            }
            LiveDisplay.prototype.createEl = function createEl() {
              var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-live-control vjs-control",
              });
              this.contentEl_ = Dom.createEl(
                "div",
                {
                  className: "vjs-live-display",
                  innerHTML:
                    '<span class="vjs-control-text">' +
                    this.localize("Stream Type") +
                    "</span>" +
                    this.localize("LIVE"),
                },
                { "aria-live": "off" }
              );
              el.appendChild(this.contentEl_);
              return el;
            };
            LiveDisplay.prototype.updateShowing = function updateShowing(
              event
            ) {
              if (this.player().duration() === Infinity) {
                this.show();
              } else {
                this.hide();
              }
            };
            return LiveDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent("LiveDisplay", LiveDisplay);
          exports["default"] = LiveDisplay;
        },
        { 5: 5, 81: 81 },
      ],
      11: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _button = _dereq_(2);
          var _button2 = _interopRequireDefault(_button);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MuteToggle = (function (_Button) {
            _inherits(MuteToggle, _Button);
            function MuteToggle(player, options) {
              _classCallCheck(this, MuteToggle);
              var _this = _possibleConstructorReturn(
                this,
                _Button.call(this, player, options)
              );
              _this.on(player, "volumechange", _this.update);
              if (
                player.tech_ &&
                player.tech_.featuresVolumeControl === false
              ) {
                _this.addClass("vjs-hidden");
              }
              _this.on(player, "loadstart", function () {
                this.update();
                if (player.tech_.featuresVolumeControl === false) {
                  this.addClass("vjs-hidden");
                } else {
                  this.removeClass("vjs-hidden");
                }
              });
              return _this;
            }
            MuteToggle.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-mute-control " + _Button.prototype.buildCSSClass.call(this)
              );
            };
            MuteToggle.prototype.handleClick = function handleClick(event) {
              this.player_.muted(this.player_.muted() ? false : true);
            };
            MuteToggle.prototype.update = function update(event) {
              var vol = this.player_.volume();
              var level = 3;
              if (vol === 0 || this.player_.muted()) {
                level = 0;
              } else if (vol < 0.33) {
                level = 1;
              } else if (vol < 0.67) {
                level = 2;
              }
              var toMute = this.player_.muted()
                ? "Habilitar Sonido"
                : "Volumen";
              if (this.controlText() !== toMute) {
                this.controlText(toMute);
              }
              for (var i = 0; i < 4; i++) {
                Dom.removeElClass(this.el_, "vjs-vol-" + i);
              }
              Dom.addElClass(this.el_, "vjs-vol-" + level);
            };
            return MuteToggle;
          })(_button2["default"]);
          MuteToggle.prototype.controlText_ = "Mute";
          _component2["default"].registerComponent("MuteToggle", MuteToggle);
          exports["default"] = MuteToggle;
        },
        { 2: 2, 5: 5, 81: 81 },
      ],
      12: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _button = _dereq_(2);
          var _button2 = _interopRequireDefault(_button);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PlayToggle = (function (_Button) {
            _inherits(PlayToggle, _Button);
            function PlayToggle(player, options) {
              _classCallCheck(this, PlayToggle);
              var _this = _possibleConstructorReturn(
                this,
                _Button.call(this, player, options)
              );
              _this.on(player, "play", _this.handlePlay);
              _this.on(player, "pause", _this.handlePause);
              return _this;
            }
            PlayToggle.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-play-control " + _Button.prototype.buildCSSClass.call(this)
              );
            };
            PlayToggle.prototype.handleClick = function handleClick(event) {
              if (this.player_.paused()) {
                this.player_.play();
              } else {
                this.player_.pause();
              }
            };
            PlayToggle.prototype.handlePlay = function handlePlay(event) {
              this.removeClass("vjs-paused");
              this.addClass("vjs-playing");
              this.controlText("Pausar");
            };
            PlayToggle.prototype.handlePause = function handlePause(event) {
              this.removeClass("vjs-playing");
              this.addClass("vjs-paused");
              this.controlText("Reproducir");
            };
            return PlayToggle;
          })(_button2["default"]);
          PlayToggle.prototype.controlText_ = "Play";
          _component2["default"].registerComponent("PlayToggle", PlayToggle);
          exports["default"] = PlayToggle;
        },
        { 2: 2, 5: 5 },
      ],
      13: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _menuButton = _dereq_(47);
          var _menuButton2 = _interopRequireDefault(_menuButton);
          var _menu = _dereq_(49);
          var _menu2 = _interopRequireDefault(_menu);
          var _playbackRateMenuItem = _dereq_(14);
          var _playbackRateMenuItem2 = _interopRequireDefault(
            _playbackRateMenuItem
          );
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PlaybackRateMenuButton = (function (_MenuButton) {
            _inherits(PlaybackRateMenuButton, _MenuButton);
            function PlaybackRateMenuButton(player, options) {
              _classCallCheck(this, PlaybackRateMenuButton);
              var _this = _possibleConstructorReturn(
                this,
                _MenuButton.call(this, player, options)
              );
              _this.updateVisibility();
              _this.updateLabel();
              _this.on(player, "loadstart", _this.updateVisibility);
              _this.on(player, "ratechange", _this.updateLabel);
              return _this;
            }
            PlaybackRateMenuButton.prototype.createEl = function createEl() {
              var el = _MenuButton.prototype.createEl.call(this);
              this.labelEl_ = Dom.createEl("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1.0,
              });
              el.appendChild(this.labelEl_);
              return el;
            };
            PlaybackRateMenuButton.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-playback-rate " +
                  _MenuButton.prototype.buildCSSClass.call(this)
                );
              };
            PlaybackRateMenuButton.prototype.createMenu =
              function createMenu() {
                var menu = new _menu2["default"](this.player());
                var rates = this.playbackRates();
                if (rates) {
                  for (var i = rates.length - 1; i >= 0; i--) {
                    menu.addChild(
                      new _playbackRateMenuItem2["default"](this.player(), {
                        rate: rates[i] + "x",
                      })
                    );
                  }
                }
                return menu;
              };
            PlaybackRateMenuButton.prototype.updateARIAAttributes =
              function updateARIAAttributes() {
                this.el().setAttribute(
                  "aria-valuenow",
                  this.player().playbackRate()
                );
              };
            PlaybackRateMenuButton.prototype.handleClick = function handleClick(
              event
            ) {
              var currentRate = this.player().playbackRate();
              var rates = this.playbackRates();
              var newRate = rates[0];
              for (var i = 0; i < rates.length; i++) {
                if (rates[i] > currentRate) {
                  newRate = rates[i];
                  break;
                }
              }
              this.player().playbackRate(newRate);
            };
            PlaybackRateMenuButton.prototype.playbackRates =
              function playbackRates() {
                return (
                  this.options_.playbackRates ||
                  (this.options_.playerOptions &&
                    this.options_.playerOptions.playbackRates)
                );
              };
            PlaybackRateMenuButton.prototype.playbackRateSupported =
              function playbackRateSupported() {
                return (
                  this.player().tech_ &&
                  this.player().tech_.featuresPlaybackRate &&
                  this.playbackRates() &&
                  this.playbackRates().length > 0
                );
              };
            PlaybackRateMenuButton.prototype.updateVisibility =
              function updateVisibility(event) {
                if (this.playbackRateSupported()) {
                  this.removeClass("vjs-hidden");
                } else {
                  this.addClass("vjs-hidden");
                }
              };
            PlaybackRateMenuButton.prototype.updateLabel = function updateLabel(
              event
            ) {
              if (this.playbackRateSupported()) {
                this.labelEl_.innerHTML = this.player().playbackRate() + "x";
              }
            };
            return PlaybackRateMenuButton;
          })(_menuButton2["default"]);
          PlaybackRateMenuButton.prototype.controlText_ = "Playback Rate";
          _component2["default"].registerComponent(
            "PlaybackRateMenuButton",
            PlaybackRateMenuButton
          );
          exports["default"] = PlaybackRateMenuButton;
        },
        { 14: 14, 47: 47, 49: 49, 5: 5, 81: 81 },
      ],
      14: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _menuItem = _dereq_(48);
          var _menuItem2 = _interopRequireDefault(_menuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PlaybackRateMenuItem = (function (_MenuItem) {
            _inherits(PlaybackRateMenuItem, _MenuItem);
            function PlaybackRateMenuItem(player, options) {
              _classCallCheck(this, PlaybackRateMenuItem);
              var label = options.rate;
              var rate = parseFloat(label, 10);
              options.label = label;
              options.selected = rate === 1;
              options.selectable = true;
              var _this = _possibleConstructorReturn(
                this,
                _MenuItem.call(this, player, options)
              );
              _this.label = label;
              _this.rate = rate;
              _this.on(player, "ratechange", _this.update);
              return _this;
            }
            PlaybackRateMenuItem.prototype.handleClick = function handleClick(
              event
            ) {
              _MenuItem.prototype.handleClick.call(this);
              this.player().playbackRate(this.rate);
            };
            PlaybackRateMenuItem.prototype.update = function update(event) {
              this.selected(this.player().playbackRate() === this.rate);
            };
            return PlaybackRateMenuItem;
          })(_menuItem2["default"]);
          PlaybackRateMenuItem.prototype.contentElType = "button";
          _component2["default"].registerComponent(
            "PlaybackRateMenuItem",
            PlaybackRateMenuItem
          );
          exports["default"] = PlaybackRateMenuItem;
        },
        { 48: 48, 5: 5 },
      ],
      15: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var LoadProgressBar = (function (_Component) {
            _inherits(LoadProgressBar, _Component);
            function LoadProgressBar(player, options) {
              _classCallCheck(this, LoadProgressBar);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.partEls_ = [];
              _this.on(player, "progress", _this.update);
              return _this;
            }
            LoadProgressBar.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML:
                  '<span class="vjs-control-text"><span>' +
                  this.localize("Loaded") +
                  "</span>: 0%</span>",
              });
            };
            LoadProgressBar.prototype.update = function update(event) {
              var buffered = this.player_.buffered();
              var duration = this.player_.duration();
              var bufferedEnd = this.player_.bufferedEnd();
              var children = this.partEls_;
              var percentify = function percentify(time, end) {
                var percent = time / end || 0;
                return (percent >= 1 ? 1 : percent) * 100 + "%";
              };
              this.el_.style.width = percentify(bufferedEnd, duration);
              for (var i = 0; i < buffered.length; i++) {
                var start = buffered.start(i);
                var end = buffered.end(i);
                var part = children[i];
                if (!part) {
                  part = this.el_.appendChild(Dom.createEl());
                  children[i] = part;
                }
                part.style.left = percentify(start, bufferedEnd);
                part.style.width = percentify(end - start, bufferedEnd);
              }
              for (var _i = children.length; _i > buffered.length; _i--) {
                this.el_.removeChild(children[_i - 1]);
              }
              children.length = buffered.length;
            };
            return LoadProgressBar;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "LoadProgressBar",
            LoadProgressBar
          );
          exports["default"] = LoadProgressBar;
        },
        { 5: 5, 81: 81 },
      ],
      16: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          var _computedStyle = _dereq_(80);
          var _computedStyle2 = _interopRequireDefault(_computedStyle);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MouseTimeDisplay = (function (_Component) {
            _inherits(MouseTimeDisplay, _Component);
            function MouseTimeDisplay(player, options) {
              _classCallCheck(this, MouseTimeDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              if (
                options.playerOptions &&
                options.playerOptions.controlBar &&
                options.playerOptions.controlBar.progressControl &&
                options.playerOptions.controlBar.progressControl
                  .keepTooltipsInside
              ) {
                _this.keepTooltipsInside =
                  options.playerOptions.controlBar.progressControl.keepTooltipsInside;
              }
              if (_this.keepTooltipsInside) {
                _this.tooltip = Dom.createEl("div", {
                  className: "vjs-time-tooltip",
                });
                _this.el().appendChild(_this.tooltip);
                _this.addClass("vjs-keep-tooltips-inside");
              }
              _this.update(0, 0);
              player.on("ready", function () {
                _this.on(
                  player.controlBar.progressControl.el(),
                  "mousemove",
                  Fn.throttle(Fn.bind(_this, _this.handleMouseMove), 25)
                );
              });
              return _this;
            }
            MouseTimeDisplay.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-mouse-display",
              });
            };
            MouseTimeDisplay.prototype.handleMouseMove =
              function handleMouseMove(event) {
                var duration = this.player_.duration();
                var newTime = this.calculateDistance(event) * duration;
                var position =
                  event.pageX - Dom.findElPosition(this.el().parentNode).left;
                this.update(newTime, position);
              };
            MouseTimeDisplay.prototype.update = function update(
              newTime,
              position
            ) {
              var time = (0, _formatTime2["default"])(
                newTime,
                this.player_.duration()
              );
              this.el().style.left = position + "px";
              this.el().setAttribute("data-current-time", time);
              if (this.keepTooltipsInside) {
                var clampedPosition = this.clampPosition_(position);
                var difference = position - clampedPosition + 1;
                var tooltipWidth = parseFloat(
                  (0, _computedStyle2["default"])(this.tooltip, "width")
                );
                var tooltipWidthHalf = tooltipWidth / 2;
                this.tooltip.innerHTML = time;
                this.tooltip.style.right =
                  "-" + (tooltipWidthHalf - difference) + "px";
              }
            };
            MouseTimeDisplay.prototype.calculateDistance =
              function calculateDistance(event) {
                return Dom.getPointerPosition(this.el().parentNode, event).x;
              };
            MouseTimeDisplay.prototype.clampPosition_ = function clampPosition_(
              position
            ) {
              if (!this.keepTooltipsInside) {
                return position;
              }
              var playerWidth = parseFloat(
                (0, _computedStyle2["default"])(this.player().el(), "width")
              );
              var tooltipWidth = parseFloat(
                (0, _computedStyle2["default"])(this.tooltip, "width")
              );
              var tooltipWidthHalf = tooltipWidth / 2;
              var actualPosition = position;
              if (position < tooltipWidthHalf) {
                actualPosition = Math.ceil(tooltipWidthHalf);
              } else if (position > playerWidth - tooltipWidthHalf) {
                actualPosition = Math.floor(playerWidth - tooltipWidthHalf);
              }
              return actualPosition;
            };
            return MouseTimeDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "MouseTimeDisplay",
            MouseTimeDisplay
          );
          exports["default"] = MouseTimeDisplay;
        },
        { 5: 5, 80: 80, 81: 81, 83: 83, 84: 84 },
      ],
      17: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PlayProgressBar = (function (_Component) {
            _inherits(PlayProgressBar, _Component);
            function PlayProgressBar(player, options) {
              _classCallCheck(this, PlayProgressBar);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.updateDataAttr();
              _this.on(player, "timeupdate", _this.updateDataAttr);
              player.ready(Fn.bind(_this, _this.updateDataAttr));
              if (
                options.playerOptions &&
                options.playerOptions.controlBar &&
                options.playerOptions.controlBar.progressControl &&
                options.playerOptions.controlBar.progressControl
                  .keepTooltipsInside
              ) {
                _this.keepTooltipsInside =
                  options.playerOptions.controlBar.progressControl.keepTooltipsInside;
              }
              if (_this.keepTooltipsInside) {
                _this.addClass("vjs-keep-tooltips-inside");
              }
              return _this;
            }
            PlayProgressBar.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress vjs-slider-bar",
                innerHTML:
                  '<span class="vjs-control-text"><span>' +
                  this.localize("Progress") +
                  "</span>: 0%</span>",
              });
            };
            PlayProgressBar.prototype.updateDataAttr = function updateDataAttr(
              event
            ) {
              var time = this.player_.scrubbing()
                ? this.player_.getCache().currentTime
                : this.player_.currentTime();
              this.el_.setAttribute(
                "data-current-time",
                (0, _formatTime2["default"])(time, this.player_.duration())
              );
            };
            return PlayProgressBar;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "PlayProgressBar",
            PlayProgressBar
          );
          exports["default"] = PlayProgressBar;
        },
        { 5: 5, 83: 83, 84: 84 },
      ],
      18: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          _dereq_(19);
          _dereq_(16);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ProgressControl = (function (_Component) {
            _inherits(ProgressControl, _Component);
            function ProgressControl() {
              _classCallCheck(this, ProgressControl);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            ProgressControl.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control",
              });
            };
            return ProgressControl;
          })(_component2["default"]);
          ProgressControl.prototype.options_ = { children: ["seekBar"] };
          _component2["default"].registerComponent(
            "ProgressControl",
            ProgressControl
          );
          exports["default"] = ProgressControl;
        },
        { 16: 16, 19: 19, 5: 5 },
      ],
      19: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _slider = _dereq_(57);
          var _slider2 = _interopRequireDefault(_slider);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          var _computedStyle = _dereq_(80);
          var _computedStyle2 = _interopRequireDefault(_computedStyle);
          _dereq_(15);
          _dereq_(17);
          _dereq_(20);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var SeekBar = (function (_Slider) {
            _inherits(SeekBar, _Slider);
            function SeekBar(player, options) {
              _classCallCheck(this, SeekBar);
              var _this = _possibleConstructorReturn(
                this,
                _Slider.call(this, player, options)
              );
              _this.on(player, "timeupdate", _this.updateProgress);
              _this.on(player, "ended", _this.updateProgress);
              player.ready(Fn.bind(_this, _this.updateProgress));
              if (
                options.playerOptions &&
                options.playerOptions.controlBar &&
                options.playerOptions.controlBar.progressControl &&
                options.playerOptions.controlBar.progressControl
                  .keepTooltipsInside
              ) {
                _this.keepTooltipsInside =
                  options.playerOptions.controlBar.progressControl.keepTooltipsInside;
              }
              if (_this.keepTooltipsInside) {
                _this.tooltipProgressBar = _this.addChild("TooltipProgressBar");
              }
              return _this;
            }
            SeekBar.prototype.createEl = function createEl() {
              return _Slider.prototype.createEl.call(
                this,
                "div",
                { className: "vjs-progress-holder" },
                { "aria-label": "progress bar" }
              );
            };
            SeekBar.prototype.updateProgress = function updateProgress(event) {
              this.updateAriaAttributes(this.el_);
              if (this.keepTooltipsInside) {
                this.updateAriaAttributes(this.tooltipProgressBar.el_);
                this.tooltipProgressBar.el_.style.width =
                  this.bar.el_.style.width;
                var playerWidth = parseFloat(
                  (0, _computedStyle2["default"])(this.player().el(), "width")
                );
                var tooltipWidth = parseFloat(
                  (0, _computedStyle2["default"])(
                    this.tooltipProgressBar.tooltip,
                    "width"
                  )
                );
                var tooltipStyle = this.tooltipProgressBar.el().style;
                tooltipStyle.maxWidth =
                  Math.floor(playerWidth - tooltipWidth / 2) + "px";
                tooltipStyle.minWidth = Math.ceil(tooltipWidth / 2) + "px";
                tooltipStyle.right = "-" + tooltipWidth / 2 + "px";
              }
            };
            SeekBar.prototype.updateAriaAttributes =
              function updateAriaAttributes(el) {
                var time = this.player_.scrubbing()
                  ? this.player_.getCache().currentTime
                  : this.player_.currentTime();
                el.setAttribute(
                  "aria-valuenow",
                  (this.getPercent() * 100).toFixed(2)
                );
                el.setAttribute(
                  "aria-valuetext",
                  (0, _formatTime2["default"])(time, this.player_.duration())
                );
              };
            SeekBar.prototype.getPercent = function getPercent() {
              var percent =
                this.player_.currentTime() / this.player_.duration();
              return percent >= 1 ? 1 : percent;
            };
            SeekBar.prototype.handleMouseDown = function handleMouseDown(
              event
            ) {
              this.player_.scrubbing(true);
              this.videoWasPlaying = !this.player_.paused();
              this.player_.pause();
              _Slider.prototype.handleMouseDown.call(this, event);
            };
            SeekBar.prototype.handleMouseMove = function handleMouseMove(
              event
            ) {
              var newTime =
                this.calculateDistance(event) * this.player_.duration();
              if (newTime === this.player_.duration()) {
                newTime = newTime - 0.1;
              }
              this.player_.currentTime(newTime);
            };
            SeekBar.prototype.handleMouseUp = function handleMouseUp(event) {
              _Slider.prototype.handleMouseUp.call(this, event);
              this.player_.scrubbing(false);
              if (this.videoWasPlaying) {
                this.player_.play();
              }
            };
            SeekBar.prototype.stepForward = function stepForward() {
              this.player_.currentTime(this.player_.currentTime() + 5);
            };
            SeekBar.prototype.stepBack = function stepBack() {
              this.player_.currentTime(this.player_.currentTime() - 5);
            };
            return SeekBar;
          })(_slider2["default"]);
          SeekBar.prototype.options_ = {
            children: [
              "loadProgressBar",
              "mouseTimeDisplay",
              "playProgressBar",
            ],
            barName: "playProgressBar",
          };
          SeekBar.prototype.playerEvent = "timeupdate";
          _component2["default"].registerComponent("SeekBar", SeekBar);
          exports["default"] = SeekBar;
        },
        { 15: 15, 17: 17, 20: 20, 5: 5, 57: 57, 80: 80, 83: 83, 84: 84 },
      ],
      20: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TooltipProgressBar = (function (_Component) {
            _inherits(TooltipProgressBar, _Component);
            function TooltipProgressBar(player, options) {
              _classCallCheck(this, TooltipProgressBar);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.updateDataAttr();
              _this.on(player, "timeupdate", _this.updateDataAttr);
              player.ready(Fn.bind(_this, _this.updateDataAttr));
              return _this;
            }
            TooltipProgressBar.prototype.createEl = function createEl() {
              var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-tooltip-progress-bar vjs-slider-bar",
                innerHTML:
                  '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' +
                  this.localize("Progress") +
                  "</span>: 0%</span>",
              });
              this.tooltip = el.querySelector(".vjs-time-tooltip");
              return el;
            };
            TooltipProgressBar.prototype.updateDataAttr =
              function updateDataAttr(event) {
                var time = this.player_.scrubbing()
                  ? this.player_.getCache().currentTime
                  : this.player_.currentTime();
                var formattedTime = (0, _formatTime2["default"])(
                  time,
                  this.player_.duration()
                );
                this.el_.setAttribute("data-current-time", formattedTime);
                this.tooltip.innerHTML = formattedTime;
              };
            return TooltipProgressBar;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "TooltipProgressBar",
            TooltipProgressBar
          );
          exports["default"] = TooltipProgressBar;
        },
        { 5: 5, 83: 83, 84: 84 },
      ],
      21: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _spacer = _dereq_(22);
          var _spacer2 = _interopRequireDefault(_spacer);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var CustomControlSpacer = (function (_Spacer) {
            _inherits(CustomControlSpacer, _Spacer);
            function CustomControlSpacer() {
              _classCallCheck(this, CustomControlSpacer);
              return _possibleConstructorReturn(
                this,
                _Spacer.apply(this, arguments)
              );
            }
            CustomControlSpacer.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-custom-control-spacer " +
                  _Spacer.prototype.buildCSSClass.call(this)
                );
              };
            CustomControlSpacer.prototype.createEl = function createEl() {
              var el = _Spacer.prototype.createEl.call(this, {
                className: this.buildCSSClass(),
              });
              el.innerHTML = "&nbsp;";
              return el;
            };
            return CustomControlSpacer;
          })(_spacer2["default"]);
          _component2["default"].registerComponent(
            "CustomControlSpacer",
            CustomControlSpacer
          );
          exports["default"] = CustomControlSpacer;
        },
        { 22: 22, 5: 5 },
      ],
      22: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Spacer = (function (_Component) {
            _inherits(Spacer, _Component);
            function Spacer() {
              _classCallCheck(this, Spacer);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            Spacer.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-spacer " + _Component.prototype.buildCSSClass.call(this)
              );
            };
            Spacer.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
              });
            };
            return Spacer;
          })(_component2["default"]);
          _component2["default"].registerComponent("Spacer", Spacer);
          exports["default"] = Spacer;
        },
        { 5: 5 },
      ],
      23: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackMenuItem = _dereq_(31);
          var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var CaptionSettingsMenuItem = (function (_TextTrackMenuItem) {
            _inherits(CaptionSettingsMenuItem, _TextTrackMenuItem);
            function CaptionSettingsMenuItem(player, options) {
              _classCallCheck(this, CaptionSettingsMenuItem);
              options.track = {
                player: player,
                kind: options.kind,
                label: "Configurar",
                selectable: false,
                default: false,
                mode: "disabled",
              };
              options.selectable = false;
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackMenuItem.call(this, player, options)
              );
              _this.addClass("vjs-texttrack-settings");
              _this.controlText(", opens " + options.kind + " settings dialog");
              return _this;
            }
            CaptionSettingsMenuItem.prototype.handleClick =
              function handleClick(event) {
                this.player().getChild("textTrackSettings").show();
                this.player().getChild("textTrackSettings").el_.focus();
              };
            return CaptionSettingsMenuItem;
          })(_textTrackMenuItem2["default"]);
          _component2["default"].registerComponent(
            "CaptionSettingsMenuItem",
            CaptionSettingsMenuItem
          );
          exports["default"] = CaptionSettingsMenuItem;
        },
        { 31: 31, 5: 5 },
      ],
      24: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackButton = _dereq_(30);
          var _textTrackButton2 = _interopRequireDefault(_textTrackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _captionSettingsMenuItem = _dereq_(23);
          var _captionSettingsMenuItem2 = _interopRequireDefault(
            _captionSettingsMenuItem
          );
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var CaptionsButton = (function (_TextTrackButton) {
            _inherits(CaptionsButton, _TextTrackButton);
            function CaptionsButton(player, options, ready) {
              _classCallCheck(this, CaptionsButton);
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackButton.call(this, player, options, ready)
              );
              _this.el_.setAttribute("aria-label", "Captions Menu");
              return _this;
            }
            CaptionsButton.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-captions-button " +
                _TextTrackButton.prototype.buildCSSClass.call(this)
              );
            };
            CaptionsButton.prototype.createItems = function createItems() {
              var items = [];
              if (
                !(
                  this.player().tech_ &&
                  this.player().tech_.featuresNativeTextTracks
                )
              ) {
                items.push(
                  new _captionSettingsMenuItem2["default"](this.player_, {
                    kind: this.kind_,
                  })
                );
                this.hideThreshold_ += 1;
              }
              return _TextTrackButton.prototype.createItems.call(this, items);
            };
            return CaptionsButton;
          })(_textTrackButton2["default"]);
          CaptionsButton.prototype.kind_ = "captions";
          CaptionsButton.prototype.controlText_ = "Subtitulado";
          _component2["default"].registerComponent(
            "CaptionsButton",
            CaptionsButton
          );
          exports["default"] = CaptionsButton;
        },
        { 23: 23, 30: 30, 5: 5 },
      ],
      25: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackButton = _dereq_(30);
          var _textTrackButton2 = _interopRequireDefault(_textTrackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _chaptersTrackMenuItem = _dereq_(26);
          var _chaptersTrackMenuItem2 = _interopRequireDefault(
            _chaptersTrackMenuItem
          );
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ChaptersButton = (function (_TextTrackButton) {
            _inherits(ChaptersButton, _TextTrackButton);
            function ChaptersButton(player, options, ready) {
              _classCallCheck(this, ChaptersButton);
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackButton.call(this, player, options, ready)
              );
              _this.el_.setAttribute("aria-label", "Chapters Menu");
              return _this;
            }
            ChaptersButton.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-chapters-button " +
                _TextTrackButton.prototype.buildCSSClass.call(this)
              );
            };
            ChaptersButton.prototype.update = function update(event) {
              if (
                !this.track_ ||
                (event &&
                  (event.type === "addtrack" || event.type === "removetrack"))
              ) {
                this.setTrack(this.findChaptersTrack());
              }
              _TextTrackButton.prototype.update.call(this);
            };
            ChaptersButton.prototype.setTrack = function setTrack(track) {
              if (this.track_ === track) {
                return;
              }
              if (!this.updateHandler_) {
                this.updateHandler_ = this.update.bind(this);
              }
              if (this.track_) {
                var remoteTextTrackEl = this.player_
                  .remoteTextTrackEls()
                  .getTrackElementByTrack_(this.track_);
                if (remoteTextTrackEl) {
                  remoteTextTrackEl.removeEventListener(
                    "load",
                    this.updateHandler_
                  );
                }
                this.track_ = null;
              }
              this.track_ = track;
              if (this.track_) {
                this.track_.mode = "hidden";
                var _remoteTextTrackEl = this.player_
                  .remoteTextTrackEls()
                  .getTrackElementByTrack_(this.track_);
                if (_remoteTextTrackEl) {
                  _remoteTextTrackEl.addEventListener(
                    "load",
                    this.updateHandler_
                  );
                }
              }
            };
            ChaptersButton.prototype.findChaptersTrack =
              function findChaptersTrack() {
                var tracks = this.player_.textTracks() || [];
                for (var i = tracks.length - 1; i >= 0; i--) {
                  var track = tracks[i];
                  if (track.kind === this.kind_) {
                    return track;
                  }
                }
              };
            ChaptersButton.prototype.getMenuCaption =
              function getMenuCaption() {
                if (this.track_ && this.track_.label) {
                  return this.track_.label;
                }
                return this.localize((0, _toTitleCase2["default"])(this.kind_));
              };
            ChaptersButton.prototype.createMenu = function createMenu() {
              this.options_.title = this.getMenuCaption();
              return _TextTrackButton.prototype.createMenu.call(this);
            };
            ChaptersButton.prototype.createItems = function createItems() {
              var items = [];
              if (!this.track_) {
                return items;
              }
              var cues = this.track_.cues;
              if (!cues) {
                return items;
              }
              for (var i = 0, l = cues.length; i < l; i++) {
                var cue = cues[i];
                var mi = new _chaptersTrackMenuItem2["default"](this.player_, {
                  track: this.track_,
                  cue: cue,
                });
                items.push(mi);
              }
              return items;
            };
            return ChaptersButton;
          })(_textTrackButton2["default"]);
          ChaptersButton.prototype.kind_ = "chapters";
          ChaptersButton.prototype.controlText_ = "Chapters";
          _component2["default"].registerComponent(
            "ChaptersButton",
            ChaptersButton
          );
          exports["default"] = ChaptersButton;
        },
        { 26: 26, 30: 30, 5: 5, 91: 91 },
      ],
      26: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _menuItem = _dereq_(48);
          var _menuItem2 = _interopRequireDefault(_menuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ChaptersTrackMenuItem = (function (_MenuItem) {
            _inherits(ChaptersTrackMenuItem, _MenuItem);
            function ChaptersTrackMenuItem(player, options) {
              _classCallCheck(this, ChaptersTrackMenuItem);
              var track = options.track;
              var cue = options.cue;
              var currentTime = player.currentTime();
              options.selectable = true;
              options.label = cue.text;
              options.selected =
                cue.startTime <= currentTime && currentTime < cue.endTime;
              var _this = _possibleConstructorReturn(
                this,
                _MenuItem.call(this, player, options)
              );
              _this.track = track;
              _this.cue = cue;
              track.addEventListener("cuechange", Fn.bind(_this, _this.update));
              return _this;
            }
            ChaptersTrackMenuItem.prototype.handleClick = function handleClick(
              event
            ) {
              _MenuItem.prototype.handleClick.call(this);
              this.player_.currentTime(this.cue.startTime);
              this.update(this.cue.startTime);
            };
            ChaptersTrackMenuItem.prototype.update = function update(event) {
              var cue = this.cue;
              var currentTime = this.player_.currentTime();
              this.selected(
                cue.startTime <= currentTime && currentTime < cue.endTime
              );
            };
            return ChaptersTrackMenuItem;
          })(_menuItem2["default"]);
          _component2["default"].registerComponent(
            "ChaptersTrackMenuItem",
            ChaptersTrackMenuItem
          );
          exports["default"] = ChaptersTrackMenuItem;
        },
        { 48: 48, 5: 5, 83: 83 },
      ],
      27: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackButton = _dereq_(30);
          var _textTrackButton2 = _interopRequireDefault(_textTrackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var DescriptionsButton = (function (_TextTrackButton) {
            _inherits(DescriptionsButton, _TextTrackButton);
            function DescriptionsButton(player, options, ready) {
              _classCallCheck(this, DescriptionsButton);
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackButton.call(this, player, options, ready)
              );
              _this.el_.setAttribute("aria-label", "Descriptions Menu");
              var tracks = player.textTracks();
              if (tracks) {
                var changeHandler = Fn.bind(_this, _this.handleTracksChange);
                tracks.addEventListener("change", changeHandler);
                _this.on("dispose", function () {
                  tracks.removeEventListener("change", changeHandler);
                });
              }
              return _this;
            }
            DescriptionsButton.prototype.handleTracksChange =
              function handleTracksChange(event) {
                var tracks = this.player().textTracks();
                var disabled = false;
                for (var i = 0, l = tracks.length; i < l; i++) {
                  var track = tracks[i];
                  if (track.kind !== this.kind_ && track.mode === "showing") {
                    disabled = true;
                    break;
                  }
                }
                if (disabled) {
                  this.disable();
                } else {
                  this.enable();
                }
              };
            DescriptionsButton.prototype.buildCSSClass =
              function buildCSSClass() {
                return (
                  "vjs-descriptions-button " +
                  _TextTrackButton.prototype.buildCSSClass.call(this)
                );
              };
            return DescriptionsButton;
          })(_textTrackButton2["default"]);
          DescriptionsButton.prototype.kind_ = "descriptions";
          DescriptionsButton.prototype.controlText_ = "Descriptions";
          _component2["default"].registerComponent(
            "DescriptionsButton",
            DescriptionsButton
          );
          exports["default"] = DescriptionsButton;
        },
        { 30: 30, 5: 5, 83: 83 },
      ],
      28: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackMenuItem = _dereq_(31);
          var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var OffTextTrackMenuItem = (function (_TextTrackMenuItem) {
            _inherits(OffTextTrackMenuItem, _TextTrackMenuItem);
            function OffTextTrackMenuItem(player, options) {
              _classCallCheck(this, OffTextTrackMenuItem);
              options.track = {
                player: player,
                kind: options.kind,
                label: "Quitar Subtitulado",
                default: false,
                mode: "disabled",
              };
              options.selectable = true;
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackMenuItem.call(this, player, options)
              );
              _this.selected(true);
              return _this;
            }
            OffTextTrackMenuItem.prototype.handleTracksChange =
              function handleTracksChange(event) {
                var tracks = this.player().textTracks();
                var selected = true;
                for (var i = 0, l = tracks.length; i < l; i++) {
                  var track = tracks[i];
                  if (
                    track.kind === this.track.kind &&
                    track.mode === "showing"
                  ) {
                    selected = false;
                    break;
                  }
                }
                this.selected(selected);
              };
            return OffTextTrackMenuItem;
          })(_textTrackMenuItem2["default"]);
          _component2["default"].registerComponent(
            "OffTextTrackMenuItem",
            OffTextTrackMenuItem
          );
          exports["default"] = OffTextTrackMenuItem;
        },
        { 31: 31, 5: 5 },
      ],
      29: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackButton = _dereq_(30);
          var _textTrackButton2 = _interopRequireDefault(_textTrackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var SubtitlesButton = (function (_TextTrackButton) {
            _inherits(SubtitlesButton, _TextTrackButton);
            function SubtitlesButton(player, options, ready) {
              _classCallCheck(this, SubtitlesButton);
              var _this = _possibleConstructorReturn(
                this,
                _TextTrackButton.call(this, player, options, ready)
              );
              _this.el_.setAttribute("aria-label", "Subtitles Menu");
              return _this;
            }
            SubtitlesButton.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-subtitles-button " +
                _TextTrackButton.prototype.buildCSSClass.call(this)
              );
            };
            return SubtitlesButton;
          })(_textTrackButton2["default"]);
          SubtitlesButton.prototype.kind_ = "subtitles";
          SubtitlesButton.prototype.controlText_ = "Subtitles";
          _component2["default"].registerComponent(
            "SubtitlesButton",
            SubtitlesButton
          );
          exports["default"] = SubtitlesButton;
        },
        { 30: 30, 5: 5 },
      ],
      30: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackButton = _dereq_(36);
          var _trackButton2 = _interopRequireDefault(_trackButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _textTrackMenuItem = _dereq_(31);
          var _textTrackMenuItem2 = _interopRequireDefault(_textTrackMenuItem);
          var _offTextTrackMenuItem = _dereq_(28);
          var _offTextTrackMenuItem2 = _interopRequireDefault(
            _offTextTrackMenuItem
          );
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TextTrackButton = (function (_TrackButton) {
            _inherits(TextTrackButton, _TrackButton);
            function TextTrackButton(player) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              _classCallCheck(this, TextTrackButton);
              options.tracks = player.textTracks();
              return _possibleConstructorReturn(
                this,
                _TrackButton.call(this, player, options)
              );
            }
            TextTrackButton.prototype.createItems = function createItems() {
              var items =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              items.push(
                new _offTextTrackMenuItem2["default"](this.player_, {
                  kind: this.kind_,
                })
              );
              this.hideThreshold_ += 1;
              var tracks = this.player_.textTracks();
              if (!tracks) {
                return items;
              }
              for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                if (track.kind === this.kind_) {
                  items.push(
                    new _textTrackMenuItem2["default"](this.player_, {
                      track: track,
                      selectable: true,
                    })
                  );
                }
              }
              return items;
            };
            return TextTrackButton;
          })(_trackButton2["default"]);
          _component2["default"].registerComponent(
            "TextTrackButton",
            TextTrackButton
          );
          exports["default"] = TextTrackButton;
        },
        { 28: 28, 31: 31, 36: 36, 5: 5 },
      ],
      31: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                };
          var _menuItem = _dereq_(48);
          var _menuItem2 = _interopRequireDefault(_menuItem);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TextTrackMenuItem = (function (_MenuItem) {
            _inherits(TextTrackMenuItem, _MenuItem);
            function TextTrackMenuItem(player, options) {
              _classCallCheck(this, TextTrackMenuItem);
              var track = options.track;
              var tracks = player.textTracks();
              options.label = track.label || track.language || "Unknown";
              options.selected = track["default"] || track.mode === "showing";
              var _this = _possibleConstructorReturn(
                this,
                _MenuItem.call(this, player, options)
              );
              _this.track = track;
              if (tracks) {
                var changeHandler = Fn.bind(_this, _this.handleTracksChange);
                player.on(["loadstart", "texttrackchange"], changeHandler);
                tracks.addEventListener("change", changeHandler);
                _this.on("dispose", function () {
                  tracks.removeEventListener("change", changeHandler);
                });
              }
              if (tracks && tracks.onchange === undefined) {
                var event = void 0;
                _this.on(["tap", "click"], function () {
                  if (_typeof(_window2["default"].Event) !== "object") {
                    try {
                      event = new _window2["default"].Event("change");
                    } catch (err) {}
                  }
                  if (!event) {
                    event = _document2["default"].createEvent("Event");
                    event.initEvent("change", true, true);
                  }
                  tracks.dispatchEvent(event);
                });
              }
              return _this;
            }
            TextTrackMenuItem.prototype.handleClick = function handleClick(
              event
            ) {
              var kind = this.track.kind;
              var tracks = this.player_.textTracks();
              _MenuItem.prototype.handleClick.call(this, event);
              if (!tracks) {
                return;
              }
              for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                if (track.kind !== kind) {
                  continue;
                }
                if (track === this.track) {
                  track.mode = "showing";
                } else {
                  track.mode = "disabled";
                }
              }
            };
            TextTrackMenuItem.prototype.handleTracksChange =
              function handleTracksChange(event) {
                this.selected(this.track.mode === "showing");
              };
            return TextTrackMenuItem;
          })(_menuItem2["default"]);
          _component2["default"].registerComponent(
            "TextTrackMenuItem",
            TextTrackMenuItem
          );
          exports["default"] = TextTrackMenuItem;
        },
        { 48: 48, 5: 5, 83: 83, 94: 94, 95: 95 },
      ],
      32: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var CurrentTimeDisplay = (function (_Component) {
            _inherits(CurrentTimeDisplay, _Component);
            function CurrentTimeDisplay(player, options) {
              _classCallCheck(this, CurrentTimeDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.on(player, "timeupdate", _this.updateContent);
              return _this;
            }
            CurrentTimeDisplay.prototype.createEl = function createEl() {
              var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-current-time vjs-time-control vjs-control",
              });
              this.contentEl_ = Dom.createEl(
                "div",
                {
                  className: "vjs-current-time-display",
                  innerHTML:
                    '<span class="vjs-control-text">Current Time </span>' +
                    "0:00",
                },
                { "aria-live": "off" }
              );
              el.appendChild(this.contentEl_);
              return el;
            };
            CurrentTimeDisplay.prototype.updateContent = function updateContent(
              event
            ) {
              var time = this.player_.scrubbing()
                ? this.player_.getCache().currentTime
                : this.player_.currentTime();
              var localizedText = this.localize("Current Time");
              var formattedTime = (0, _formatTime2["default"])(
                time,
                this.player_.duration()
              );
              if (formattedTime !== this.formattedTime_) {
                this.formattedTime_ = formattedTime;
                this.contentEl_.innerHTML =
                  '<span class="vjs-control-text">' +
                  localizedText +
                  "</span> " +
                  formattedTime;
              }
            };
            return CurrentTimeDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "CurrentTimeDisplay",
            CurrentTimeDisplay
          );
          exports["default"] = CurrentTimeDisplay;
        },
        { 5: 5, 81: 81, 84: 84 },
      ],
      33: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var DurationDisplay = (function (_Component) {
            _inherits(DurationDisplay, _Component);
            function DurationDisplay(player, options) {
              _classCallCheck(this, DurationDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.on(player, "durationchange", _this.updateContent);
              _this.on(player, "timeupdate", _this.updateContent);
              _this.on(player, "loadedmetadata", _this.updateContent);
              return _this;
            }
            DurationDisplay.prototype.createEl = function createEl() {
              var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-duration vjs-time-control vjs-control",
              });
              this.contentEl_ = Dom.createEl(
                "div",
                {
                  className: "vjs-duration-display",
                  innerHTML:
                    '<span class="vjs-control-text">' +
                    this.localize("Duration Time") +
                    "</span> 0:00",
                },
                { "aria-live": "off" }
              );
              el.appendChild(this.contentEl_);
              return el;
            };
            DurationDisplay.prototype.updateContent = function updateContent(
              event
            ) {
              var duration = this.player_.duration();
              if (duration && this.duration_ !== duration) {
                this.duration_ = duration;
                var localizedText = this.localize("Duration Time");
                var formattedTime = (0, _formatTime2["default"])(duration);
                this.contentEl_.innerHTML =
                  '<span class="vjs-control-text">' +
                  localizedText +
                  "</span> " +
                  formattedTime;
              }
            };
            return DurationDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "DurationDisplay",
            DurationDisplay
          );
          exports["default"] = DurationDisplay;
        },
        { 5: 5, 81: 81, 84: 84 },
      ],
      34: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var RemainingTimeDisplay = (function (_Component) {
            _inherits(RemainingTimeDisplay, _Component);
            function RemainingTimeDisplay(player, options) {
              _classCallCheck(this, RemainingTimeDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.on(player, "timeupdate", _this.updateContent);
              _this.on(player, "durationchange", _this.updateContent);
              return _this;
            }
            RemainingTimeDisplay.prototype.createEl = function createEl() {
              var el = _Component.prototype.createEl.call(this, "div", {
                className: "vjs-remaining-time vjs-time-control vjs-control",
              });
              this.contentEl_ = Dom.createEl(
                "div",
                {
                  className: "vjs-remaining-time-display",
                  innerHTML:
                    '<span class="vjs-control-text">' +
                    this.localize("Remaining Time") +
                    "</span> -0:00",
                },
                { "aria-live": "off" }
              );
              el.appendChild(this.contentEl_);
              return el;
            };
            RemainingTimeDisplay.prototype.updateContent =
              function updateContent(event) {
                if (this.player_.duration()) {
                  var localizedText = this.localize("Remaining Time");
                  var formattedTime = (0, _formatTime2["default"])(
                    this.player_.remainingTime()
                  );
                  if (formattedTime !== this.formattedTime_) {
                    this.formattedTime_ = formattedTime;
                    this.contentEl_.innerHTML =
                      '<span class="vjs-control-text">' +
                      localizedText +
                      "</span> -" +
                      formattedTime;
                  }
                }
              };
            return RemainingTimeDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "RemainingTimeDisplay",
            RemainingTimeDisplay
          );
          exports["default"] = RemainingTimeDisplay;
        },
        { 5: 5, 81: 81, 84: 84 },
      ],
      35: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TimeDivider = (function (_Component) {
            _inherits(TimeDivider, _Component);
            function TimeDivider() {
              _classCallCheck(this, TimeDivider);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            TimeDivider.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-time-control vjs-time-divider",
                innerHTML: "<div><span>/</span></div>",
              });
            };
            return TimeDivider;
          })(_component2["default"]);
          _component2["default"].registerComponent("TimeDivider", TimeDivider);
          exports["default"] = TimeDivider;
        },
        { 5: 5 },
      ],
      36: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _menuButton = _dereq_(47);
          var _menuButton2 = _interopRequireDefault(_menuButton);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TrackButton = (function (_MenuButton) {
            _inherits(TrackButton, _MenuButton);
            function TrackButton(player, options) {
              _classCallCheck(this, TrackButton);
              var tracks = options.tracks;
              var _this = _possibleConstructorReturn(
                this,
                _MenuButton.call(this, player, options)
              );
              if (_this.items.length <= 1) {
                _this.hide();
              }
              if (!tracks) {
                return _possibleConstructorReturn(_this);
              }
              var updateHandler = Fn.bind(_this, _this.update);
              tracks.addEventListener("removetrack", updateHandler);
              tracks.addEventListener("addtrack", updateHandler);
              _this.player_.on("dispose", function () {
                tracks.removeEventListener("removetrack", updateHandler);
                tracks.removeEventListener("addtrack", updateHandler);
              });
              return _this;
            }
            return TrackButton;
          })(_menuButton2["default"]);
          _component2["default"].registerComponent("TrackButton", TrackButton);
          exports["default"] = TrackButton;
        },
        { 47: 47, 5: 5, 83: 83 },
      ],
      37: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _slider = _dereq_(57);
          var _slider2 = _interopRequireDefault(_slider);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          _dereq_(39);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var VolumeBar = (function (_Slider) {
            _inherits(VolumeBar, _Slider);
            function VolumeBar(player, options) {
              _classCallCheck(this, VolumeBar);
              var _this = _possibleConstructorReturn(
                this,
                _Slider.call(this, player, options)
              );
              _this.on(player, "volumechange", _this.updateARIAAttributes);
              player.ready(Fn.bind(_this, _this.updateARIAAttributes));
              return _this;
            }
            VolumeBar.prototype.createEl = function createEl() {
              return _Slider.prototype.createEl.call(
                this,
                "div",
                { className: "vjs-volume-bar vjs-slider-bar" },
                { "aria-label": "volume level" }
              );
            };
            VolumeBar.prototype.handleMouseMove = function handleMouseMove(
              event
            ) {
              this.checkMuted();
              this.player_.volume(this.calculateDistance(event));
            };
            VolumeBar.prototype.checkMuted = function checkMuted() {
              if (this.player_.muted()) {
                this.player_.muted(false);
              }
            };
            VolumeBar.prototype.getPercent = function getPercent() {
              if (this.player_.muted()) {
                return 0;
              }
              return this.player_.volume();
            };
            VolumeBar.prototype.stepForward = function stepForward() {
              this.checkMuted();
              this.player_.volume(this.player_.volume() + 0.1);
            };
            VolumeBar.prototype.stepBack = function stepBack() {
              this.checkMuted();
              this.player_.volume(this.player_.volume() - 0.1);
            };
            VolumeBar.prototype.updateARIAAttributes =
              function updateARIAAttributes(event) {
                var volume = (this.player_.volume() * 100).toFixed(2);
                this.el_.setAttribute("aria-valuenow", volume);
                this.el_.setAttribute("aria-valuetext", volume + "%");
              };
            return VolumeBar;
          })(_slider2["default"]);
          VolumeBar.prototype.options_ = {
            children: ["volumeLevel"],
            barName: "volumeLevel",
          };
          VolumeBar.prototype.playerEvent = "volumechange";
          _component2["default"].registerComponent("VolumeBar", VolumeBar);
          exports["default"] = VolumeBar;
        },
        { 39: 39, 5: 5, 57: 57, 83: 83 },
      ],
      38: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          _dereq_(37);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var VolumeControl = (function (_Component) {
            _inherits(VolumeControl, _Component);
            function VolumeControl(player, options) {
              _classCallCheck(this, VolumeControl);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              if (
                player.tech_ &&
                player.tech_.featuresVolumeControl === false
              ) {
                _this.addClass("vjs-hidden");
              }
              _this.on(player, "loadstart", function () {
                if (player.tech_.featuresVolumeControl === false) {
                  this.addClass("vjs-hidden");
                } else {
                  this.removeClass("vjs-hidden");
                }
              });
              return _this;
            }
            VolumeControl.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control",
              });
            };
            return VolumeControl;
          })(_component2["default"]);
          VolumeControl.prototype.options_ = { children: ["volumeBar"] };
          _component2["default"].registerComponent(
            "VolumeControl",
            VolumeControl
          );
          exports["default"] = VolumeControl;
        },
        { 37: 37, 5: 5 },
      ],
      39: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var VolumeLevel = (function (_Component) {
            _inherits(VolumeLevel, _Component);
            function VolumeLevel() {
              _classCallCheck(this, VolumeLevel);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            VolumeLevel.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>',
              });
            };
            return VolumeLevel;
          })(_component2["default"]);
          _component2["default"].registerComponent("VolumeLevel", VolumeLevel);
          exports["default"] = VolumeLevel;
        },
        { 5: 5 },
      ],
      40: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _popup = _dereq_(54);
          var _popup2 = _interopRequireDefault(_popup);
          var _popupButton = _dereq_(53);
          var _popupButton2 = _interopRequireDefault(_popupButton);
          var _muteToggle = _dereq_(11);
          var _muteToggle2 = _interopRequireDefault(_muteToggle);
          var _volumeBar = _dereq_(37);
          var _volumeBar2 = _interopRequireDefault(_volumeBar);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var VolumeMenuButton = (function (_PopupButton) {
            _inherits(VolumeMenuButton, _PopupButton);
            function VolumeMenuButton(player) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              _classCallCheck(this, VolumeMenuButton);
              if (options.inline === undefined) {
                options.inline = true;
              }
              if (options.vertical === undefined) {
                if (options.inline) {
                  options.vertical = false;
                } else {
                  options.vertical = true;
                }
              }
              options.volumeBar = options.volumeBar || {};
              options.volumeBar.vertical = !!options.vertical;
              var _this = _possibleConstructorReturn(
                this,
                _PopupButton.call(this, player, options)
              );
              _this.on(player, "volumechange", _this.volumeUpdate);
              _this.on(player, "loadstart", _this.volumeUpdate);
              function updateVisibility() {
                if (
                  player.tech_ &&
                  player.tech_.featuresVolumeControl === false
                ) {
                  this.addClass("vjs-hidden");
                } else {
                  this.removeClass("vjs-hidden");
                }
              }
              updateVisibility.call(_this);
              _this.on(player, "loadstart", updateVisibility);
              _this.on(_this.volumeBar, ["slideractive", "focus"], function () {
                this.addClass("vjs-slider-active");
              });
              _this.on(
                _this.volumeBar,
                ["sliderinactive", "blur"],
                function () {
                  this.removeClass("vjs-slider-active");
                }
              );
              _this.on(_this.volumeBar, ["focus"], function () {
                this.addClass("vjs-lock-showing");
              });
              _this.on(_this.volumeBar, ["blur"], function () {
                this.removeClass("vjs-lock-showing");
              });
              return _this;
            }
            VolumeMenuButton.prototype.buildCSSClass =
              function buildCSSClass() {
                var orientationClass = "";
                if (this.options_.vertical) {
                  orientationClass = "vjs-volume-menu-button-vertical";
                } else {
                  orientationClass = "vjs-volume-menu-button-horizontal";
                }
                return (
                  "vjs-volume-menu-button " +
                  _PopupButton.prototype.buildCSSClass.call(this) +
                  " " +
                  orientationClass
                );
              };
            VolumeMenuButton.prototype.createPopup = function createPopup() {
              var popup = new _popup2["default"](this.player_, {
                contentElType: "div",
              });
              var vb = new _volumeBar2["default"](
                this.player_,
                this.options_.volumeBar
              );
              popup.addChild(vb);
              this.menuContent = popup;
              this.volumeBar = vb;
              this.attachVolumeBarEvents();
              return popup;
            };
            VolumeMenuButton.prototype.handleClick = function handleClick(
              event
            ) {
              _muteToggle2["default"].prototype.handleClick.call(this);
              _PopupButton.prototype.handleClick.call(this);
            };
            VolumeMenuButton.prototype.attachVolumeBarEvents =
              function attachVolumeBarEvents() {
                this.menuContent.on(
                  ["mousedown", "touchdown"],
                  Fn.bind(this, this.handleMouseDown)
                );
              };
            VolumeMenuButton.prototype.handleMouseDown =
              function handleMouseDown(event) {
                this.on(
                  ["mousemove", "touchmove"],
                  Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove)
                );
                this.on(
                  this.el_.ownerDocument,
                  ["mouseup", "touchend"],
                  this.handleMouseUp
                );
              };
            VolumeMenuButton.prototype.handleMouseUp = function handleMouseUp(
              event
            ) {
              this.off(
                ["mousemove", "touchmove"],
                Fn.bind(this.volumeBar, this.volumeBar.handleMouseMove)
              );
            };
            return VolumeMenuButton;
          })(_popupButton2["default"]);
          VolumeMenuButton.prototype.volumeUpdate =
            _muteToggle2["default"].prototype.update;
          VolumeMenuButton.prototype.controlText_ = "Mute";
          _component2["default"].registerComponent(
            "VolumeMenuButton",
            VolumeMenuButton
          );
          exports["default"] = VolumeMenuButton;
        },
        { 11: 11, 37: 37, 5: 5, 53: 53, 54: 54, 83: 83 },
      ],
      41: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _modalDialog = _dereq_(50);
          var _modalDialog2 = _interopRequireDefault(_modalDialog);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var ErrorDisplay = (function (_ModalDialog) {
            _inherits(ErrorDisplay, _ModalDialog);
            function ErrorDisplay(player, options) {
              _classCallCheck(this, ErrorDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _ModalDialog.call(this, player, options)
              );
              _this.on(player, "error", _this.open);
              return _this;
            }
            ErrorDisplay.prototype.buildCSSClass = function buildCSSClass() {
              return (
                "vjs-error-display " +
                _ModalDialog.prototype.buildCSSClass.call(this)
              );
            };
            ErrorDisplay.prototype.content = function content() {
              var error = this.player().error();
              return error ? this.localize(error.message) : "";
            };
            return ErrorDisplay;
          })(_modalDialog2["default"]);
          ErrorDisplay.prototype.options_ = (0, _mergeOptions2["default"])(
            _modalDialog2["default"].prototype.options_,
            {
              pauseOnOpen: false,
              fillAlways: true,
              temporary: false,
              uncloseable: true,
            }
          );
          _component2["default"].registerComponent(
            "ErrorDisplay",
            ErrorDisplay
          );
          exports["default"] = ErrorDisplay;
        },
        { 5: 5, 50: 50, 87: 87 },
      ],
      42: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          var EventTarget = function EventTarget() {};
          EventTarget.prototype.allowedEvents_ = {};
          EventTarget.prototype.on = function (type, fn) {
            var ael = this.addEventListener;
            this.addEventListener = function () {};
            Events.on(this, type, fn);
            this.addEventListener = ael;
          };
          EventTarget.prototype.addEventListener = EventTarget.prototype.on;
          EventTarget.prototype.off = function (type, fn) {
            Events.off(this, type, fn);
          };
          EventTarget.prototype.removeEventListener = EventTarget.prototype.off;
          EventTarget.prototype.one = function (type, fn) {
            var ael = this.addEventListener;
            this.addEventListener = function () {};
            Events.one(this, type, fn);
            this.addEventListener = ael;
          };
          EventTarget.prototype.trigger = function (event) {
            var type = event.type || event;
            if (typeof event === "string") {
              event = { type: type };
            }
            event = Events.fixEvent(event);
            if (this.allowedEvents_[type] && this["on" + type]) {
              this["on" + type](event);
            }
            Events.trigger(this, event);
          };
          EventTarget.prototype.dispatchEvent = EventTarget.prototype.trigger;
          exports["default"] = EventTarget;
        },
        { 82: 82 },
      ],
      43: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                };
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _obj = _dereq_(88);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _inherits = function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  (typeof superClass === "undefined"
                    ? "undefined"
                    : _typeof(superClass))
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) {
              subClass.super_ = superClass;
            }
          };
          var extendFn = function extendFn(superClass) {
            var subClassMethods =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var subClass = function subClass() {
              superClass.apply(this, arguments);
            };
            var methods = {};
            if ((0, _obj.isObject)(subClassMethods)) {
              if (typeof subClassMethods.init === "function") {
                _log2["default"].warn(
                  "Constructor logic via init() is deprecated; please use constructor() instead."
                );
                subClassMethods.constructor = subClassMethods.init;
              }
              if (
                subClassMethods.constructor !== Object.prototype.constructor
              ) {
                subClass = subClassMethods.constructor;
              }
              methods = subClassMethods;
            } else if (typeof subClassMethods === "function") {
              subClass = subClassMethods;
            }
            _inherits(subClass, superClass);
            for (var name in methods) {
              if (methods.hasOwnProperty(name)) {
                subClass.prototype[name] = methods[name];
              }
            }
            return subClass;
          };
          exports["default"] = extendFn;
        },
        { 86: 86, 88: 88 },
      ],
      44: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var FullscreenApi = {};
          var apiMap = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ];
          var specApi = apiMap[0];
          var browserApi = void 0;
          for (var i = 0; i < apiMap.length; i++) {
            if (apiMap[i][1] in _document2["default"]) {
              browserApi = apiMap[i];
              break;
            }
          }
          if (browserApi) {
            for (var _i = 0; _i < browserApi.length; _i++) {
              FullscreenApi[specApi[_i]] = browserApi[_i];
            }
          }
          exports["default"] = FullscreenApi;
        },
        { 94: 94 },
      ],
      45: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var LoadingSpinner = (function (_Component) {
            _inherits(LoadingSpinner, _Component);
            function LoadingSpinner() {
              _classCallCheck(this, LoadingSpinner);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            LoadingSpinner.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner",
                dir: "ltr",
              });
            };
            return LoadingSpinner;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "LoadingSpinner",
            LoadingSpinner
          );
          exports["default"] = LoadingSpinner;
        },
        { 5: 5 },
      ],
      46: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _obj = _dereq_(88);
          function MediaError(value) {
            if (value instanceof MediaError) {
              return value;
            }
            if (typeof value === "number") {
              this.code = value;
            } else if (typeof value === "string") {
              this.message = value;
            } else if ((0, _obj.isObject)(value)) {
              if (typeof value.code === "number") {
                this.code = value.code;
              }
              (0, _obj.assign)(this, value);
            }
            if (!this.message) {
              this.message = MediaError.defaultMessages[this.code] || "";
            }
          }
          MediaError.prototype.code = 0;
          MediaError.prototype.message = "";
          MediaError.prototype.status = null;
          MediaError.errorTypes = [
            "MEDIA_ERR_CUSTOM",
            "MEDIA_ERR_ABORTED",
            "MEDIA_ERR_NETWORK",
            "MEDIA_ERR_DECODE",
            "MEDIA_ERR_SRC_NOT_SUPPORTED",
            "MEDIA_ERR_ENCRYPTED",
          ];
          MediaError.defaultMessages = {
            1: "Reproducción abortada",
            2: "Un Fallo en tu Conexión ha causado una interrupción parcial. Recargue para ver de nuevo.",
            3: "Tu Navegador NO es Compatible con este Contenido. The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
            4: "Error 927.",
            5: "The media is encrypted and we do not have the keys to decrypt it.",
          };
          for (
            var errNum = 0;
            errNum < MediaError.errorTypes.length;
            errNum++
          ) {
            MediaError[MediaError.errorTypes[errNum]] = errNum;
            MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
          }
          exports["default"] = MediaError;
        },
        { 88: 88 },
      ],
      47: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _clickableComponent = _dereq_(3);
          var _clickableComponent2 =
            _interopRequireDefault(_clickableComponent);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _menu = _dereq_(49);
          var _menu2 = _interopRequireDefault(_menu);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MenuButton = (function (_ClickableComponent) {
            _inherits(MenuButton, _ClickableComponent);
            function MenuButton(player) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              _classCallCheck(this, MenuButton);
              var _this = _possibleConstructorReturn(
                this,
                _ClickableComponent.call(this, player, options)
              );
              _this.update();
              _this.enabled_ = true;
              _this.el_.setAttribute("aria-haspopup", "true");
              _this.el_.setAttribute("role", "menuitem");
              _this.on("keydown", _this.handleSubmenuKeyPress);
              return _this;
            }
            MenuButton.prototype.update = function update() {
              var menu = this.createMenu();
              if (this.menu) {
                this.removeChild(this.menu);
              }
              this.menu = menu;
              this.addChild(menu);
              this.buttonPressed_ = false;
              this.el_.setAttribute("aria-expanded", "false");
              if (this.items && this.items.length <= this.hideThreshold_) {
                this.hide();
              } else {
                this.show();
              }
            };
            MenuButton.prototype.createMenu = function createMenu() {
              var menu = new _menu2["default"](this.player_);
              this.hideThreshold_ = 0;
              if (this.options_.title) {
                var title = Dom.createEl("li", {
                  className: "vjs-menu-title",
                  innerHTML: (0, _toTitleCase2["default"])(this.options_.title),
                  tabIndex: -1,
                });
                this.hideThreshold_ += 1;
                menu.children_.unshift(title);
                Dom.insertElFirst(title, menu.contentEl());
              }
              this.items = this.createItems();
              if (this.items) {
                for (var i = 0; i < this.items.length; i++) {
                  menu.addItem(this.items[i]);
                }
              }
              return menu;
            };
            MenuButton.prototype.createItems = function createItems() {};
            MenuButton.prototype.createEl = function createEl() {
              return _ClickableComponent.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
              });
            };
            MenuButton.prototype.buildCSSClass = function buildCSSClass() {
              var menuButtonClass = "vjs-menu-button";
              if (this.options_.inline === true) {
                menuButtonClass += "-inline";
              } else {
                menuButtonClass += "-popup";
              }
              return (
                "vjs-menu-button " +
                menuButtonClass +
                " " +
                _ClickableComponent.prototype.buildCSSClass.call(this)
              );
            };
            MenuButton.prototype.handleClick = function handleClick(event) {
              this.one(
                this.menu.contentEl(),
                "mouseleave",
                Fn.bind(this, function (e) {
                  this.unpressButton();
                  this.el_.blur();
                })
              );
              if (this.buttonPressed_) {
                this.unpressButton();
              } else {
                this.pressButton();
              }
            };
            MenuButton.prototype.handleKeyPress = function handleKeyPress(
              event
            ) {
              if (event.which === 27 || event.which === 9) {
                if (this.buttonPressed_) {
                  this.unpressButton();
                }
                if (event.which !== 9) {
                  event.preventDefault();
                }
              } else if (event.which === 38 || event.which === 40) {
                if (!this.buttonPressed_) {
                  this.pressButton();
                  event.preventDefault();
                }
              } else {
                _ClickableComponent.prototype.handleKeyPress.call(this, event);
              }
            };
            MenuButton.prototype.handleSubmenuKeyPress =
              function handleSubmenuKeyPress(event) {
                if (event.which === 27 || event.which === 9) {
                  if (this.buttonPressed_) {
                    this.unpressButton();
                  }
                  if (event.which !== 9) {
                    event.preventDefault();
                  }
                }
              };
            MenuButton.prototype.pressButton = function pressButton() {
              if (this.enabled_) {
                this.buttonPressed_ = true;
                this.menu.lockShowing();
                this.el_.setAttribute("aria-expanded", "true");
                this.menu.focus();
              }
            };
            MenuButton.prototype.unpressButton = function unpressButton() {
              if (this.enabled_) {
                this.buttonPressed_ = false;
                this.menu.unlockShowing();
                this.el_.setAttribute("aria-expanded", "false");
                this.el_.focus();
              }
            };
            MenuButton.prototype.disable = function disable() {
              this.buttonPressed_ = false;
              this.menu.unlockShowing();
              this.el_.setAttribute("aria-expanded", "false");
              this.enabled_ = false;
              return _ClickableComponent.prototype.disable.call(this);
            };
            MenuButton.prototype.enable = function enable() {
              this.enabled_ = true;
              return _ClickableComponent.prototype.enable.call(this);
            };
            return MenuButton;
          })(_clickableComponent2["default"]);
          _component2["default"].registerComponent("MenuButton", MenuButton);
          exports["default"] = MenuButton;
        },
        { 3: 3, 49: 49, 5: 5, 81: 81, 83: 83, 91: 91 },
      ],
      48: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _clickableComponent = _dereq_(3);
          var _clickableComponent2 =
            _interopRequireDefault(_clickableComponent);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _obj = _dereq_(88);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MenuItem = (function (_ClickableComponent) {
            _inherits(MenuItem, _ClickableComponent);
            function MenuItem(player, options) {
              _classCallCheck(this, MenuItem);
              var _this = _possibleConstructorReturn(
                this,
                _ClickableComponent.call(this, player, options)
              );
              _this.selectable = options.selectable;
              _this.selected(options.selected);
              if (_this.selectable) {
                _this.el_.setAttribute("role", "menuitemcheckbox");
              } else {
                _this.el_.setAttribute("role", "menuitem");
              }
              return _this;
            }
            MenuItem.prototype.createEl = function createEl(
              type,
              props,
              attrs
            ) {
              this.nonIconControl = true;
              return _ClickableComponent.prototype.createEl.call(
                this,
                "li",
                (0, _obj.assign)(
                  {
                    className: "vjs-menu-item",
                    innerHTML: this.localize(this.options_.label),
                    tabIndex: -1,
                  },
                  props
                ),
                attrs
              );
            };
            MenuItem.prototype.handleClick = function handleClick(event) {
              this.selected(true);
            };
            MenuItem.prototype.selected = function selected(_selected) {
              if (this.selectable) {
                if (_selected) {
                  this.addClass("vjs-selected");
                  this.el_.setAttribute("aria-checked", "true");
                  this.controlText(", selected");
                } else {
                  this.removeClass("vjs-selected");
                  this.el_.setAttribute("aria-checked", "false");
                  this.controlText(" ");
                }
              }
            };
            return MenuItem;
          })(_clickableComponent2["default"]);
          _component2["default"].registerComponent("MenuItem", MenuItem);
          exports["default"] = MenuItem;
        },
        { 3: 3, 5: 5, 88: 88 },
      ],
      49: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Menu = (function (_Component) {
            _inherits(Menu, _Component);
            function Menu(player, options) {
              _classCallCheck(this, Menu);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.focusedChild_ = -1;
              _this.on("keydown", _this.handleKeyPress);
              return _this;
            }
            Menu.prototype.addItem = function addItem(component) {
              this.addChild(component);
              component.on(
                "click",
                Fn.bind(this, function (event) {
                  this.unlockShowing();
                })
              );
            };
            Menu.prototype.createEl = function createEl() {
              var contentElType = this.options_.contentElType || "ul";
              this.contentEl_ = Dom.createEl(contentElType, {
                className: "vjs-menu-content",
              });
              this.contentEl_.setAttribute("role", "menu");
              var el = _Component.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu",
              });
              el.setAttribute("role", "presentation");
              el.appendChild(this.contentEl_);
              Events.on(el, "click", function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
              });
              return el;
            };
            Menu.prototype.handleKeyPress = function handleKeyPress(event) {
              if (event.which === 37 || event.which === 40) {
                event.preventDefault();
                this.stepForward();
              } else if (event.which === 38 || event.which === 39) {
                event.preventDefault();
                this.stepBack();
              }
            };
            Menu.prototype.stepForward = function stepForward() {
              var stepChild = 0;
              if (this.focusedChild_ !== undefined) {
                stepChild = this.focusedChild_ + 1;
              }
              this.focus(stepChild);
            };
            Menu.prototype.stepBack = function stepBack() {
              var stepChild = 0;
              if (this.focusedChild_ !== undefined) {
                stepChild = this.focusedChild_ - 1;
              }
              this.focus(stepChild);
            };
            Menu.prototype.focus = function focus() {
              var item =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : 0;
              var children = this.children().slice();
              var haveTitle =
                children.length &&
                children[0].className &&
                /vjs-menu-title/.test(children[0].className);
              if (haveTitle) {
                children.shift();
              }
              if (children.length > 0) {
                if (item < 0) {
                  item = 0;
                } else if (item >= children.length) {
                  item = children.length - 1;
                }
                this.focusedChild_ = item;
                children[item].el_.focus();
              }
            };
            return Menu;
          })(_component2["default"]);
          _component2["default"].registerComponent("Menu", Menu);
          exports["default"] = Menu;
        },
        { 5: 5, 81: 81, 82: 82, 83: 83 },
      ],
      50: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MODAL_CLASS_NAME = "vjs-modal-dialog";
          var ESC = 27;
          var ModalDialog = (function (_Component) {
            _inherits(ModalDialog, _Component);
            function ModalDialog(player, options) {
              _classCallCheck(this, ModalDialog);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.opened_ =
                _this.hasBeenOpened_ =
                _this.hasBeenFilled_ =
                  false;
              _this.closeable(!_this.options_.uncloseable);
              _this.content(_this.options_.content);
              _this.contentEl_ = Dom.createEl(
                "div",
                { className: MODAL_CLASS_NAME + "-content" },
                { role: "document" }
              );
              _this.descEl_ = Dom.createEl("p", {
                className: MODAL_CLASS_NAME + "-description vjs-offscreen",
                id: _this.el().getAttribute("aria-describedby"),
              });
              Dom.textContent(_this.descEl_, _this.description());
              _this.el_.appendChild(_this.descEl_);
              _this.el_.appendChild(_this.contentEl_);
              return _this;
            }
            ModalDialog.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(
                this,
                "div",
                { className: this.buildCSSClass(), tabIndex: -1 },
                {
                  "aria-describedby": this.id() + "_description",
                  "aria-hidden": "true",
                  "aria-label": this.label(),
                  role: "dialog",
                }
              );
            };
            ModalDialog.prototype.buildCSSClass = function buildCSSClass() {
              return (
                MODAL_CLASS_NAME +
                " vjs-hidden " +
                _Component.prototype.buildCSSClass.call(this)
              );
            };
            ModalDialog.prototype.handleKeyPress = function handleKeyPress(e) {
              if (e.which === ESC && this.closeable()) {
                this.close();
              }
            };
            ModalDialog.prototype.label = function label() {
              return this.options_.label || this.localize("Modal Window");
            };
            ModalDialog.prototype.description = function description() {
              var desc =
                this.options_.description ||
                this.localize("This is a modal window.");
              if (this.closeable()) {
                desc +=
                  " " +
                  this.localize(
                    "This modal can be closed by pressing the Escape key or activating the close button."
                  );
              }
              return desc;
            };
            ModalDialog.prototype.open = function open() {
              if (!this.opened_) {
                var player = this.player();
                this.trigger("beforemodalopen");
                this.opened_ = true;
                if (
                  this.options_.fillAlways ||
                  (!this.hasBeenOpened_ && !this.hasBeenFilled_)
                ) {
                  this.fill();
                }
                this.wasPlaying_ = !player.paused();
                if (this.options_.pauseOnOpen && this.wasPlaying_) {
                  player.pause();
                }
                if (this.closeable()) {
                  this.on(
                    this.el_.ownerDocument,
                    "keydown",
                    Fn.bind(this, this.handleKeyPress)
                  );
                }
                player.controls(false);
                this.show();
                this.el().setAttribute("aria-hidden", "false");
                this.trigger("modalopen");
                this.hasBeenOpened_ = true;
              }
              return this;
            };
            ModalDialog.prototype.opened = function opened(value) {
              if (typeof value === "boolean") {
                this[value ? "open" : "close"]();
              }
              return this.opened_;
            };
            ModalDialog.prototype.close = function close() {
              if (this.opened_) {
                var player = this.player();
                this.trigger("beforemodalclose");
                this.opened_ = false;
                if (this.wasPlaying_ && this.options_.pauseOnOpen) {
                  player.play();
                }
                if (this.closeable()) {
                  this.off(
                    this.el_.ownerDocument,
                    "keydown",
                    Fn.bind(this, this.handleKeyPress)
                  );
                }
                player.controls(true);
                this.hide();
                this.el().setAttribute("aria-hidden", "true");
                this.trigger("modalclose");
                if (this.options_.temporary) {
                  this.dispose();
                }
              }
              return this;
            };
            ModalDialog.prototype.closeable = function closeable(value) {
              if (typeof value === "boolean") {
                var closeable = (this.closeable_ = !!value);
                var close = this.getChild("closeButton");
                if (closeable && !close) {
                  var temp = this.contentEl_;
                  this.contentEl_ = this.el_;
                  close = this.addChild("closeButton", {
                    controlText: "Close Modal Dialog",
                  });
                  this.contentEl_ = temp;
                  this.on(close, "close", this.close);
                }
                if (!closeable && close) {
                  this.off(close, "close", this.close);
                  this.removeChild(close);
                  close.dispose();
                }
              }
              return this.closeable_;
            };
            ModalDialog.prototype.fill = function fill() {
              return this.fillWith(this.content());
            };
            ModalDialog.prototype.fillWith = function fillWith(content) {
              var contentEl = this.contentEl();
              var parentEl = contentEl.parentNode;
              var nextSiblingEl = contentEl.nextSibling;
              this.trigger("beforemodalfill");
              this.hasBeenFilled_ = true;
              parentEl.removeChild(contentEl);
              this.empty();
              Dom.insertContent(contentEl, content);
              this.trigger("modalfill");
              if (nextSiblingEl) {
                parentEl.insertBefore(contentEl, nextSiblingEl);
              } else {
                parentEl.appendChild(contentEl);
              }
              return this;
            };
            ModalDialog.prototype.empty = function empty() {
              this.trigger("beforemodalempty");
              Dom.emptyEl(this.contentEl());
              this.trigger("modalempty");
              return this;
            };
            ModalDialog.prototype.content = function content(value) {
              if (typeof value !== "undefined") {
                this.content_ = value;
              }
              return this.content_;
            };
            return ModalDialog;
          })(_component2["default"]);
          ModalDialog.prototype.options_ = {
            pauseOnOpen: true,
            temporary: true,
          };
          _component2["default"].registerComponent("ModalDialog", ModalDialog);
          exports["default"] = ModalDialog;
        },
        { 5: 5, 81: 81, 83: 83 },
      ],
      51: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _guid = _dereq_(85);
          var Guid = _interopRequireWildcard(_guid);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          var _timeRanges = _dereq_(90);
          var _buffer = _dereq_(79);
          var _stylesheet = _dereq_(89);
          var stylesheet = _interopRequireWildcard(_stylesheet);
          var _fullscreenApi = _dereq_(44);
          var _fullscreenApi2 = _interopRequireDefault(_fullscreenApi);
          var _mediaError = _dereq_(46);
          var _mediaError2 = _interopRequireDefault(_mediaError);
          var _tuple = _dereq_(97);
          var _tuple2 = _interopRequireDefault(_tuple);
          var _obj = _dereq_(88);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _textTrackListConverter = _dereq_(69);
          var _textTrackListConverter2 = _interopRequireDefault(
            _textTrackListConverter
          );
          var _modalDialog = _dereq_(50);
          var _modalDialog2 = _interopRequireDefault(_modalDialog);
          var _tech = _dereq_(62);
          var _tech2 = _interopRequireDefault(_tech);
          var _audioTrackList = _dereq_(63);
          var _audioTrackList2 = _interopRequireDefault(_audioTrackList);
          var _videoTrackList = _dereq_(76);
          var _videoTrackList2 = _interopRequireDefault(_videoTrackList);
          _dereq_(61);
          _dereq_(59);
          _dereq_(55);
          _dereq_(68);
          _dereq_(45);
          _dereq_(1);
          _dereq_(4);
          _dereq_(8);
          _dereq_(41);
          _dereq_(71);
          _dereq_(60);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TECH_EVENTS_RETRIGGER = [
            "progress",
            "abort",
            "suspend",
            "emptied",
            "stalled",
            "loadedmetadata",
            "loadeddata",
            "timeupdate",
            "ratechange",
            "volumechange",
            "texttrackchange",
          ];
          var Player = (function (_Component) {
            _inherits(Player, _Component);
            function Player(tag, options, ready) {
              _classCallCheck(this, Player);
              tag.id = tag.id || "vjs_video_" + Guid.newGUID();
              options = (0, _obj.assign)(Player.getTagSettings(tag), options);
              options.initChildren = false;
              options.createEl = false;
              options.reportTouchActivity = false;
              if (!options.language) {
                if (typeof tag.closest === "function") {
                  var closest = tag.closest("[lang]");
                  if (closest) {
                    options.language = closest.getAttribute("lang");
                  }
                } else {
                  var element = tag;
                  while (element && element.nodeType === 1) {
                    if (Dom.getElAttributes(element).hasOwnProperty("lang")) {
                      options.language = element.getAttribute("lang");
                      break;
                    }
                    element = element.parentNode;
                  }
                }
              }
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, null, options, ready)
              );
              if (
                !_this.options_ ||
                !_this.options_.techOrder ||
                !_this.options_.techOrder.length
              ) {
                throw new Error(
                  "No techOrder specified. Did you overwrite " +
                    "videojs.options instead of just changing the " +
                    "properties you want to override?"
                );
              }
              _this.tag = tag;
              _this.tagAttributes = tag && Dom.getElAttributes(tag);
              _this.language(_this.options_.language);
              if (options.languages) {
                var languagesToLower = {};
                Object.getOwnPropertyNames(options.languages).forEach(function (
                  name
                ) {
                  languagesToLower[name.toLowerCase()] =
                    options.languages[name];
                });
                _this.languages_ = languagesToLower;
              } else {
                _this.languages_ = Player.prototype.options_.languages;
              }
              _this.cache_ = {};
              _this.poster_ = options.poster || "";
              _this.controls_ = !!options.controls;
              tag.controls = false;
              _this.scrubbing_ = false;
              _this.el_ = _this.createEl();
              var playerOptionsCopy = (0, _mergeOptions2["default"])(
                _this.options_
              );
              if (options.plugins) {
                var plugins = options.plugins;
                Object.getOwnPropertyNames(plugins).forEach(function (name) {
                  if (typeof this[name] === "function") {
                    this[name](plugins[name]);
                  } else {
                    _log2["default"].error("Unable to find plugin:", name);
                  }
                }, _this);
              }
              _this.options_.playerOptions = playerOptionsCopy;
              _this.initChildren();
              _this.isAudio(tag.nodeName.toLowerCase() === "audio");
              if (_this.controls()) {
                _this.addClass("vjs-controls-enabled");
              } else {
                _this.addClass("vjs-controls-disabled");
              }
              _this.el_.setAttribute("role", "region");
              if (_this.isAudio()) {
                _this.el_.setAttribute("aria-label", "audio player");
              } else {
                _this.el_.setAttribute("aria-label", "video player");
              }
              if (_this.isAudio()) {
                _this.addClass("vjs-audio");
              }
              if (_this.flexNotSupported_()) {
                _this.addClass("vjs-no-flex");
              }
              if (!browser.IS_IOS) {
                _this.addClass("vjs-workinghover");
              }
              Player.players[_this.id_] = _this;
              _this.userActive(true);
              _this.reportUserActivity();
              _this.listenForUserActivity_();
              _this.on("fullscreenchange", _this.handleFullscreenChange_);
              _this.on("stageclick", _this.handleStageClick_);
              return _this;
            }
            Player.prototype.dispose = function dispose() {
              this.trigger("dispose");
              this.off("dispose");
              if (this.styleEl_ && this.styleEl_.parentNode) {
                this.styleEl_.parentNode.removeChild(this.styleEl_);
              }
              Player.players[this.id_] = null;
              if (this.tag && this.tag.player) {
                this.tag.player = null;
              }
              if (this.el_ && this.el_.player) {
                this.el_.player = null;
              }
              if (this.tech_) {
                this.tech_.dispose();
              }
              _Component.prototype.dispose.call(this);
            };
            Player.prototype.createEl = function createEl() {
              var tag = this.tag;
              var el = void 0;
              var playerElIngest = (this.playerElIngest_ =
                tag.parentNode &&
                tag.parentNode.hasAttribute &&
                tag.parentNode.hasAttribute("data-vjs-player"));
              if (playerElIngest) {
                el = this.el_ = tag.parentNode;
              } else {
                el = this.el_ = _Component.prototype.createEl.call(this, "div");
              }
              tag.setAttribute("tabindex", "-1");
              tag.removeAttribute("width");
              tag.removeAttribute("height");
              var attrs = Dom.getElAttributes(tag);
              Object.getOwnPropertyNames(attrs).forEach(function (attr) {
                if (attr === "class") {
                  el.className += " " + attrs[attr];
                } else {
                  el.setAttribute(attr, attrs[attr]);
                }
              });
              tag.playerId = tag.id;
              tag.id += "_html5_api";
              tag.className = "vjs-tech";
              tag.player = el.player = this;
              this.addClass("vjs-paused");
              if (_window2["default"].VIDEOJS_NO_DYNAMIC_STYLE !== true) {
                this.styleEl_ = stylesheet.createStyleElement(
                  "vjs-styles-dimensions"
                );
                var defaultsStyleEl = Dom.$(".vjs-styles-defaults");
                var head = Dom.$("head");
                head.insertBefore(
                  this.styleEl_,
                  defaultsStyleEl
                    ? defaultsStyleEl.nextSibling
                    : head.firstChild
                );
              }
              this.width(this.options_.width);
              this.height(this.options_.height);
              this.fluid(this.options_.fluid);
              this.aspectRatio(this.options_.aspectRatio);
              var links = tag.getElementsByTagName("a");
              for (var i = 0; i < links.length; i++) {
                var linkEl = links.item(i);
                Dom.addElClass(linkEl, "vjs-hidden");
                linkEl.setAttribute("hidden", "hidden");
              }
              tag.initNetworkState_ = tag.networkState;
              if (tag.parentNode && !playerElIngest) {
                tag.parentNode.insertBefore(el, tag);
              }
              Dom.insertElFirst(tag, el);
              this.children_.unshift(tag);
              this.el_ = el;
              return el;
            };
            Player.prototype.width = function width(value) {
              return this.dimension("width", value);
            };
            Player.prototype.height = function height(value) {
              return this.dimension("height", value);
            };
            Player.prototype.dimension = function dimension(_dimension, value) {
              var privDimension = _dimension + "_";
              if (value === undefined) {
                return this[privDimension] || 0;
              }
              if (value === "") {
                this[privDimension] = undefined;
              } else {
                var parsedVal = parseFloat(value);
                if (isNaN(parsedVal)) {
                  _log2["default"].error(
                    'Improper value "' +
                      value +
                      '" supplied for for ' +
                      _dimension
                  );
                  return this;
                }
                this[privDimension] = parsedVal;
              }
              this.updateStyleEl_();
              return this;
            };
            Player.prototype.fluid = function fluid(bool) {
              if (bool === undefined) {
                return !!this.fluid_;
              }
              this.fluid_ = !!bool;
              if (bool) {
                this.addClass("vjs-fluid");
              } else {
                this.removeClass("vjs-fluid");
              }
              this.updateStyleEl_();
            };
            Player.prototype.aspectRatio = function aspectRatio(ratio) {
              if (ratio === undefined) {
                return this.aspectRatio_;
              }
              if (!/^\d+\:\d+$/.test(ratio)) {
                throw new Error(
                  "Improper value supplied for aspect ratio. The format should be width:height, for example 16:9."
                );
              }
              this.aspectRatio_ = ratio;
              this.fluid(true);
              this.updateStyleEl_();
            };
            Player.prototype.updateStyleEl_ = function updateStyleEl_() {
              if (_window2["default"].VIDEOJS_NO_DYNAMIC_STYLE === true) {
                var _width =
                  typeof this.width_ === "number"
                    ? this.width_
                    : this.options_.width;
                var _height =
                  typeof this.height_ === "number"
                    ? this.height_
                    : this.options_.height;
                var techEl = this.tech_ && this.tech_.el();
                if (techEl) {
                  if (_width >= 0) {
                    techEl.width = _width;
                  }
                  if (_height >= 0) {
                    techEl.height = _height;
                  }
                }
                return;
              }
              var width = void 0;
              var height = void 0;
              var aspectRatio = void 0;
              var idClass = void 0;
              if (
                this.aspectRatio_ !== undefined &&
                this.aspectRatio_ !== "auto"
              ) {
                aspectRatio = this.aspectRatio_;
              } else if (this.videoWidth() > 0) {
                aspectRatio = this.videoWidth() + ":" + this.videoHeight();
              } else {
                aspectRatio = "16:9";
              }
              var ratioParts = aspectRatio.split(":");
              var ratioMultiplier = ratioParts[1] / ratioParts[0];
              if (this.width_ !== undefined) {
                width = this.width_;
              } else if (this.height_ !== undefined) {
                width = this.height_ / ratioMultiplier;
              } else {
                width = this.videoWidth() || 300;
              }
              if (this.height_ !== undefined) {
                height = this.height_;
              } else {
                height = width * ratioMultiplier;
              }
              if (/^[^a-zA-Z]/.test(this.id())) {
                idClass = "dimensions-" + this.id();
              } else {
                idClass = this.id() + "-dimensions";
              }
              this.addClass(idClass);
              stylesheet.setTextContent(
                this.styleEl_,
                "\n      ." +
                  idClass +
                  " {\n        width: " +
                  width +
                  "px;\n        height: " +
                  height +
                  "px;\n      }\n\n      ." +
                  idClass +
                  ".vjs-fluid {\n        padding-top: " +
                  ratioMultiplier * 100 +
                  "%;\n      }\n    "
              );
            };
            Player.prototype.loadTech_ = function loadTech_(techName, source) {
              var _this2 = this;
              if (this.tech_) {
                this.unloadTech_();
              }
              if (techName !== "Html5" && this.tag) {
                _tech2["default"]
                  .getTech("Html5")
                  .disposeMediaElement(this.tag);
                this.tag.player = null;
                this.tag = null;
              }
              this.techName_ = techName;
              this.isReady_ = false;
              var techOptions = (0, _obj.assign)(
                {
                  source: source,
                  nativeControlsForTouch: this.options_.nativeControlsForTouch,
                  playerId: this.id(),
                  techId: this.id() + "_" + techName + "_api",
                  videoTracks: this.videoTracks_,
                  textTracks: this.textTracks_,
                  audioTracks: this.audioTracks_,
                  autoplay: this.options_.autoplay,
                  preload: this.options_.preload,
                  loop: this.options_.loop,
                  muted: this.options_.muted,
                  poster: this.poster(),
                  language: this.language(),
                  playerElIngest: this.playerElIngest_ || false,
                  "vtt.js": this.options_["vtt.js"],
                },
                this.options_[techName.toLowerCase()]
              );
              if (this.tag) {
                techOptions.tag = this.tag;
              }
              if (source) {
                this.currentType_ = source.type;
                if (
                  source.src === this.cache_.src &&
                  this.cache_.currentTime > 0
                ) {
                  techOptions.startTime = this.cache_.currentTime;
                }
                this.cache_.sources = null;
                this.cache_.source = source;
                this.cache_.src = source.src;
              }
              var TechComponent = _tech2["default"].getTech(techName);
              if (!TechComponent) {
                TechComponent = _component2["default"].getComponent(techName);
              }
              this.tech_ = new TechComponent(techOptions);
              this.tech_.ready(Fn.bind(this, this.handleTechReady_), true);
              _textTrackListConverter2["default"].jsonToTextTracks(
                this.textTracksJson_ || [],
                this.tech_
              );
              TECH_EVENTS_RETRIGGER.forEach(function (event) {
                _this2.on(
                  _this2.tech_,
                  event,
                  _this2[
                    "handleTech" + (0, _toTitleCase2["default"])(event) + "_"
                  ]
                );
              });
              this.on(this.tech_, "loadstart", this.handleTechLoadStart_);
              this.on(this.tech_, "waiting", this.handleTechWaiting_);
              this.on(this.tech_, "canplay", this.handleTechCanPlay_);
              this.on(
                this.tech_,
                "canplaythrough",
                this.handleTechCanPlayThrough_
              );
              this.on(this.tech_, "playing", this.handleTechPlaying_);
              this.on(this.tech_, "ended", this.handleTechEnded_);
              this.on(this.tech_, "seeking", this.handleTechSeeking_);
              this.on(this.tech_, "seeked", this.handleTechSeeked_);
              this.on(this.tech_, "play", this.handleTechPlay_);
              this.on(this.tech_, "firstplay", this.handleTechFirstPlay_);
              this.on(this.tech_, "pause", this.handleTechPause_);
              this.on(
                this.tech_,
                "durationchange",
                this.handleTechDurationChange_
              );
              this.on(
                this.tech_,
                "fullscreenchange",
                this.handleTechFullscreenChange_
              );
              this.on(this.tech_, "error", this.handleTechError_);
              this.on(this.tech_, "loadedmetadata", this.updateStyleEl_);
              this.on(this.tech_, "posterchange", this.handleTechPosterChange_);
              this.on(this.tech_, "textdata", this.handleTechTextData_);
              this.usingNativeControls(this.techGet_("controls"));
              if (this.controls() && !this.usingNativeControls()) {
                this.addTechControlsListeners_();
              }
              if (
                this.tech_.el().parentNode !== this.el() &&
                (techName !== "Html5" || !this.tag)
              ) {
                Dom.insertElFirst(this.tech_.el(), this.el());
              }
              if (this.tag) {
                this.tag.player = null;
                this.tag = null;
              }
            };
            Player.prototype.unloadTech_ = function unloadTech_() {
              this.videoTracks_ = this.videoTracks();
              this.textTracks_ = this.textTracks();
              this.audioTracks_ = this.audioTracks();
              this.textTracksJson_ = _textTrackListConverter2[
                "default"
              ].textTracksToJson(this.tech_);
              this.isReady_ = false;
              this.tech_.dispose();
              this.tech_ = false;
            };
            Player.prototype.tech = function tech(safety) {
              if (safety && safety.IWillNotUseThisInPlugins) {
                return this.tech_;
              }
              var errorText =
                "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
              _window2["default"].alert(errorText);
              throw new Error(errorText);
            };
            Player.prototype.addTechControlsListeners_ =
              function addTechControlsListeners_() {
                this.removeTechControlsListeners_();
                this.on(this.tech_, "mousedown", this.handleTechClick_);
                this.on(this.tech_, "touchstart", this.handleTechTouchStart_);
                this.on(this.tech_, "touchmove", this.handleTechTouchMove_);
                this.on(this.tech_, "touchend", this.handleTechTouchEnd_);
                this.on(this.tech_, "tap", this.handleTechTap_);
              };
            Player.prototype.removeTechControlsListeners_ =
              function removeTechControlsListeners_() {
                this.off(this.tech_, "tap", this.handleTechTap_);
                this.off(this.tech_, "touchstart", this.handleTechTouchStart_);
                this.off(this.tech_, "touchmove", this.handleTechTouchMove_);
                this.off(this.tech_, "touchend", this.handleTechTouchEnd_);
                this.off(this.tech_, "mousedown", this.handleTechClick_);
              };
            Player.prototype.handleTechReady_ = function handleTechReady_() {
              this.triggerReady();
              if (this.cache_.volume) {
                this.techCall_("setVolume", this.cache_.volume);
              }
              this.handleTechPosterChange_();
              this.handleTechDurationChange_();
              if (
                (this.src() || this.currentSrc()) &&
                this.tag &&
                this.options_.autoplay &&
                this.paused()
              ) {
                try {
                  delete this.tag.poster;
                } catch (e) {
                  (0, _log2["default"])(
                    "deleting tag.poster throws in some browsers",
                    e
                  );
                }
                this.play();
              }
            };
            Player.prototype.handleTechLoadStart_ =
              function handleTechLoadStart_() {
                this.removeClass("vjs-ended");
                this.removeClass("vjs-seeking");
                this.error(null);
                if (!this.paused()) {
                  this.trigger("loadstart");
                  this.trigger("firstplay");
                } else {
                  this.hasStarted(false);
                  this.trigger("loadstart");
                }
              };
            Player.prototype.hasStarted = function hasStarted(_hasStarted) {
              if (_hasStarted !== undefined) {
                if (this.hasStarted_ !== _hasStarted) {
                  this.hasStarted_ = _hasStarted;
                  if (_hasStarted) {
                    this.addClass("vjs-has-started");
                    this.trigger("firstplay");
                  } else {
                    this.removeClass("vjs-has-started");
                  }
                }
                return this;
              }
              return !!this.hasStarted_;
            };
            Player.prototype.handleTechPlay_ = function handleTechPlay_() {
              this.removeClass("vjs-ended");
              this.removeClass("vjs-paused");
              this.addClass("vjs-playing");
              this.hasStarted(true);
              this.trigger("play");
            };
            Player.prototype.handleTechWaiting_ =
              function handleTechWaiting_() {
                var _this3 = this;
                this.addClass("vjs-waiting");
                this.trigger("waiting");
                this.one("timeupdate", function () {
                  return _this3.removeClass("vjs-waiting");
                });
              };
            Player.prototype.handleTechCanPlay_ =
              function handleTechCanPlay_() {
                this.removeClass("vjs-waiting");
                this.trigger("canplay");
              };
            Player.prototype.handleTechCanPlayThrough_ =
              function handleTechCanPlayThrough_() {
                this.removeClass("vjs-waiting");
                this.trigger("canplaythrough");
              };
            Player.prototype.handleTechPlaying_ =
              function handleTechPlaying_() {
                this.removeClass("vjs-waiting");
                this.trigger("playing");
              };
            Player.prototype.handleTechSeeking_ =
              function handleTechSeeking_() {
                this.addClass("vjs-seeking");
                this.trigger("seeking");
              };
            Player.prototype.handleTechSeeked_ = function handleTechSeeked_() {
              this.removeClass("vjs-seeking");
              this.trigger("seeked");
            };
            Player.prototype.handleTechFirstPlay_ =
              function handleTechFirstPlay_() {
                if (this.options_.starttime) {
                  _log2["default"].warn(
                    "Passing the `starttime` option to the player will be deprecated in 6.0"
                  );
                  this.currentTime(this.options_.starttime);
                }
                this.addClass("vjs-has-started");
                this.trigger("firstplay");
              };
            Player.prototype.handleTechPause_ = function handleTechPause_() {
              this.removeClass("vjs-playing");
              this.addClass("vjs-paused");
              this.trigger("pause");
            };
            Player.prototype.handleTechEnded_ = function handleTechEnded_() {
              this.addClass("vjs-ended");
              if (this.options_.loop) {
                this.currentTime(0);
                this.play();
              } else if (!this.paused()) {
                this.pause();
              }
              this.trigger("ended");
            };
            Player.prototype.handleTechDurationChange_ =
              function handleTechDurationChange_() {
                this.duration(this.techGet_("duration"));
              };
            Player.prototype.handleTechClick_ = function handleTechClick_(
              event
            ) {
              if (event.button !== 0) {
                return;
              }
              if (this.controls()) {
                if (this.paused()) {
                  this.play();
                } else {
                  this.pause();
                }
              }
            };
            Player.prototype.handleTechTap_ = function handleTechTap_() {
              this.userActive(!this.userActive());
            };
            Player.prototype.handleTechTouchStart_ =
              function handleTechTouchStart_() {
                this.userWasActive = this.userActive();
              };
            Player.prototype.handleTechTouchMove_ =
              function handleTechTouchMove_() {
                if (this.userWasActive) {
                  this.reportUserActivity();
                }
              };
            Player.prototype.handleTechTouchEnd_ = function handleTechTouchEnd_(
              event
            ) {
              event.preventDefault();
            };
            Player.prototype.handleFullscreenChange_ =
              function handleFullscreenChange_() {
                if (this.isFullscreen()) {
                  this.addClass("vjs-fullscreen");
                } else {
                  this.removeClass("vjs-fullscreen");
                }
              };
            Player.prototype.handleStageClick_ = function handleStageClick_() {
              this.reportUserActivity();
            };
            Player.prototype.handleTechFullscreenChange_ =
              function handleTechFullscreenChange_(event, data) {
                if (data) {
                  this.isFullscreen(data.isFullscreen);
                }
                this.trigger("fullscreenchange");
              };
            Player.prototype.handleTechError_ = function handleTechError_() {
              var error = this.tech_.error();
              this.error(error);
            };
            Player.prototype.handleTechTextData_ =
              function handleTechTextData_() {
                var data = null;
                if (arguments.length > 1) {
                  data = arguments[1];
                }
                this.trigger("textdata", data);
              };
            Player.prototype.getCache = function getCache() {
              return this.cache_;
            };
            Player.prototype.techCall_ = function techCall_(method, arg) {
              if (this.tech_ && !this.tech_.isReady_) {
                this.tech_.ready(function () {
                  this[method](arg);
                }, true);
              } else {
                try {
                  if (this.tech_) {
                    this.tech_[method](arg);
                  }
                } catch (e) {
                  (0, _log2["default"])(e);
                  throw e;
                }
              }
            };
            Player.prototype.techGet_ = function techGet_(method) {
              if (this.tech_ && this.tech_.isReady_) {
                try {
                  return this.tech_[method]();
                } catch (e) {
                  if (this.tech_[method] === undefined) {
                    (0, _log2["default"])(
                      "Video.js: " +
                        method +
                        " method not defined for " +
                        this.techName_ +
                        " playback technology.",
                      e
                    );
                  } else if (e.name === "TypeError") {
                    (0, _log2["default"])(
                      "Video.js: " +
                        method +
                        " unavailable on " +
                        this.techName_ +
                        " playback technology element.",
                      e
                    );
                    this.tech_.isReady_ = false;
                  } else {
                    (0, _log2["default"])(e);
                  }
                  throw e;
                }
              }
              return;
            };
            Player.prototype.play = function play() {
              if (this.src() || this.currentSrc()) {
                this.techCall_("play");
              } else {
                this.tech_.one("loadstart", function () {
                  this.play();
                });
              }
              return this;
            };
            Player.prototype.pause = function pause() {
              this.techCall_("pause");
              return this;
            };
            Player.prototype.paused = function paused() {
              return this.techGet_("paused") === false ? false : true;
            };
            Player.prototype.scrubbing = function scrubbing(isScrubbing) {
              if (isScrubbing !== undefined) {
                this.scrubbing_ = !!isScrubbing;
                if (isScrubbing) {
                  this.addClass("vjs-scrubbing");
                } else {
                  this.removeClass("vjs-scrubbing");
                }
                return this;
              }
              return this.scrubbing_;
            };
            Player.prototype.currentTime = function currentTime(seconds) {
              if (seconds !== undefined) {
                this.techCall_("setCurrentTime", seconds);
                return this;
              }
              this.cache_.currentTime = this.techGet_("currentTime") || 0;
              return this.cache_.currentTime;
            };
            Player.prototype.duration = function duration(seconds) {
              if (seconds === undefined) {
                return this.cache_.duration || 0;
              }
              seconds = parseFloat(seconds) || 0;
              if (seconds < 0) {
                seconds = Infinity;
              }
              if (seconds !== this.cache_.duration) {
                this.cache_.duration = seconds;
                if (seconds === Infinity) {
                  this.addClass("vjs-live");
                } else {
                  this.removeClass("vjs-live");
                }
                this.trigger("durationchange");
              }
              return this;
            };
            Player.prototype.remainingTime = function remainingTime() {
              return this.duration() - this.currentTime();
            };
            Player.prototype.buffered = function buffered() {
              var buffered = this.techGet_("buffered");
              if (!buffered || !buffered.length) {
                buffered = (0, _timeRanges.createTimeRange)(0, 0);
              }
              return buffered;
            };
            Player.prototype.bufferedPercent = function bufferedPercent() {
              return (0, _buffer.bufferedPercent)(
                this.buffered(),
                this.duration()
              );
            };
            Player.prototype.bufferedEnd = function bufferedEnd() {
              var buffered = this.buffered();
              var duration = this.duration();
              var end = buffered.end(buffered.length - 1);
              if (end > duration) {
                end = duration;
              }
              return end;
            };
            Player.prototype.volume = function volume(percentAsDecimal) {
              var vol = void 0;
              if (percentAsDecimal !== undefined) {
                vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal)));
                this.cache_.volume = vol;
                this.techCall_("setVolume", vol);
                return this;
              }
              vol = parseFloat(this.techGet_("volume"));
              return isNaN(vol) ? 1 : vol;
            };
            Player.prototype.muted = function muted(_muted) {
              if (_muted !== undefined) {
                this.techCall_("setMuted", _muted);
                return this;
              }
              return this.techGet_("muted") || false;
            };
            Player.prototype.supportsFullScreen =
              function supportsFullScreen() {
                return this.techGet_("supportsFullScreen") || false;
              };
            Player.prototype.isFullscreen = function isFullscreen(isFS) {
              if (isFS !== undefined) {
                this.isFullscreen_ = !!isFS;
                return this;
              }
              return !!this.isFullscreen_;
            };
            Player.prototype.requestFullscreen = function requestFullscreen() {
              var fsApi = _fullscreenApi2["default"];
              this.isFullscreen(true);
              if (fsApi.requestFullscreen) {
                Events.on(
                  _document2["default"],
                  fsApi.fullscreenchange,
                  Fn.bind(this, function documentFullscreenChange(e) {
                    this.isFullscreen(
                      _document2["default"][fsApi.fullscreenElement]
                    );
                    if (this.isFullscreen() === false) {
                      Events.off(
                        _document2["default"],
                        fsApi.fullscreenchange,
                        documentFullscreenChange
                      );
                    }
                    this.trigger("fullscreenchange");
                  })
                );
                this.el_[fsApi.requestFullscreen]();
              } else if (this.tech_.supportsFullScreen()) {
                this.techCall_("enterFullScreen");
              } else {
                this.enterFullWindow();
                this.trigger("fullscreenchange");
              }
              return this;
            };
            Player.prototype.exitFullscreen = function exitFullscreen() {
              var fsApi = _fullscreenApi2["default"];
              this.isFullscreen(false);
              if (fsApi.requestFullscreen) {
                _document2["default"][fsApi.exitFullscreen]();
              } else if (this.tech_.supportsFullScreen()) {
                this.techCall_("exitFullScreen");
              } else {
                this.exitFullWindow();
                this.trigger("fullscreenchange");
              }
              return this;
            };
            Player.prototype.enterFullWindow = function enterFullWindow() {
              this.isFullWindow = true;
              this.docOrigOverflow =
                _document2["default"].documentElement.style.overflow;
              Events.on(
                _document2["default"],
                "keydown",
                Fn.bind(this, this.fullWindowOnEscKey)
              );
              _document2["default"].documentElement.style.overflow = "hidden";
              Dom.addElClass(_document2["default"].body, "vjs-full-window");
              this.trigger("enterFullWindow");
            };
            Player.prototype.fullWindowOnEscKey = function fullWindowOnEscKey(
              event
            ) {
              if (event.keyCode === 27) {
                if (this.isFullscreen() === true) {
                  this.exitFullscreen();
                } else {
                  this.exitFullWindow();
                }
              }
            };
            Player.prototype.exitFullWindow = function exitFullWindow() {
              this.isFullWindow = false;
              Events.off(
                _document2["default"],
                "keydown",
                this.fullWindowOnEscKey
              );
              _document2["default"].documentElement.style.overflow =
                this.docOrigOverflow;
              Dom.removeElClass(_document2["default"].body, "vjs-full-window");
              this.trigger("exitFullWindow");
            };
            Player.prototype.canPlayType = function canPlayType(type) {
              var can = void 0;
              for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
                var techName = (0, _toTitleCase2["default"])(j[i]);
                var tech = _tech2["default"].getTech(techName);
                if (!tech) {
                  tech = _component2["default"].getComponent(techName);
                }
                if (!tech) {
                  _log2["default"].error(
                    'The "' +
                      techName +
                      '" tech is undefined. Skipped browser support check for that tech.'
                  );
                  continue;
                }
                if (tech.isSupported()) {
                  can = tech.canPlayType(type);
                  if (can) {
                    return can;
                  }
                }
              }
              return "";
            };
            Player.prototype.selectSource = function selectSource(sources) {
              var _this4 = this;
              var techs = this.options_.techOrder
                .map(_toTitleCase2["default"])
                .map(function (techName) {
                  return [
                    techName,
                    _tech2["default"].getTech(techName) ||
                      _component2["default"].getComponent(techName),
                  ];
                })
                .filter(function (_ref) {
                  var techName = _ref[0],
                    tech = _ref[1];
                  if (tech) {
                    return tech.isSupported();
                  }
                  _log2["default"].error(
                    'The "' +
                      techName +
                      '" tech is undefined. Skipped browser support check for that tech.'
                  );
                  return false;
                });
              var findFirstPassingTechSourcePair =
                function findFirstPassingTechSourcePair(
                  outerArray,
                  innerArray,
                  tester
                ) {
                  var found = void 0;
                  outerArray.some(function (outerChoice) {
                    return innerArray.some(function (innerChoice) {
                      found = tester(outerChoice, innerChoice);
                      if (found) {
                        return true;
                      }
                    });
                  });
                  return found;
                };
              var foundSourceAndTech = void 0;
              var flip = function flip(fn) {
                return function (a, b) {
                  return fn(b, a);
                };
              };
              var finder = function finder(_ref2, source) {
                var techName = _ref2[0],
                  tech = _ref2[1];
                if (
                  tech.canPlaySource(
                    source,
                    _this4.options_[techName.toLowerCase()]
                  )
                ) {
                  return { source: source, tech: techName };
                }
              };
              if (this.options_.sourceOrder) {
                foundSourceAndTech = findFirstPassingTechSourcePair(
                  sources,
                  techs,
                  flip(finder)
                );
              } else {
                foundSourceAndTech = findFirstPassingTechSourcePair(
                  techs,
                  sources,
                  finder
                );
              }
              return foundSourceAndTech || false;
            };
            Player.prototype.src = function src(source) {
              if (source === undefined) {
                return this.techGet_("src");
              }
              var currentTech = _tech2["default"].getTech(this.techName_);
              if (!currentTech) {
                currentTech = _component2["default"].getComponent(
                  this.techName_
                );
              }
              if (Array.isArray(source)) {
                this.sourceList_(source);
              } else if (typeof source === "string") {
                this.src({ src: source });
              } else if (source instanceof Object) {
                if (
                  source.type &&
                  !currentTech.canPlaySource(
                    source,
                    this.options_[this.techName_.toLowerCase()]
                  )
                ) {
                  this.sourceList_([source]);
                } else {
                  this.cache_.sources = null;
                  this.cache_.source = source;
                  this.cache_.src = source.src;
                  this.currentType_ = source.type || "";
                  this.ready(function () {
                    if (currentTech.prototype.hasOwnProperty("setSource")) {
                      this.techCall_("setSource", source);
                    } else {
                      this.techCall_("src", source.src);
                    }
                    if (this.options_.preload === "auto") {
                      this.load();
                    }
                    if (this.options_.autoplay) {
                      this.play();
                    }
                  }, true);
                }
              }
              return this;
            };
            Player.prototype.sourceList_ = function sourceList_(sources) {
              var sourceTech = this.selectSource(sources);
              if (sourceTech) {
                if (sourceTech.tech === this.techName_) {
                  this.src(sourceTech.source);
                } else {
                  this.loadTech_(sourceTech.tech, sourceTech.source);
                }
                this.cache_.sources = sources;
              } else {
                this.setTimeout(function () {
                  this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage),
                  });
                }, 0);
                this.triggerReady();
              }
            };
            Player.prototype.load = function load() {
              this.techCall_("load");
              return this;
            };
            Player.prototype.reset = function reset() {
              this.loadTech_(
                (0, _toTitleCase2["default"])(this.options_.techOrder[0]),
                null
              );
              this.techCall_("reset");
              return this;
            };
            Player.prototype.currentSources = function currentSources() {
              var source = this.currentSource();
              var sources = [];
              if (Object.keys(source).length !== 0) {
                sources.push(source);
              }
              return this.cache_.sources || sources;
            };
            Player.prototype.currentSource = function currentSource() {
              var source = {};
              var src = this.currentSrc();
              if (src) {
                source.src = src;
              }
              return this.cache_.source || source;
            };
            Player.prototype.currentSrc = function currentSrc() {
              return this.techGet_("currentSrc") || this.cache_.src || "";
            };
            Player.prototype.currentType = function currentType() {
              return this.currentType_ || "";
            };
            Player.prototype.preload = function preload(value) {
              if (value !== undefined) {
                this.techCall_("setPreload", value);
                this.options_.preload = value;
                return this;
              }
              return this.techGet_("preload");
            };
            Player.prototype.autoplay = function autoplay(value) {
              if (value !== undefined) {
                this.techCall_("setAutoplay", value);
                this.options_.autoplay = value;
                return this;
              }
              return this.techGet_("autoplay", value);
            };
            Player.prototype.loop = function loop(value) {
              if (value !== undefined) {
                this.techCall_("setLoop", value);
                this.options_.loop = value;
                return this;
              }
              return this.techGet_("loop");
            };
            Player.prototype.poster = function poster(src) {
              if (src === undefined) {
                return this.poster_;
              }
              if (!src) {
                src = "";
              }
              this.poster_ = src;
              this.techCall_("setPoster", src);
              this.trigger("posterchange");
              return this;
            };
            Player.prototype.handleTechPosterChange_ =
              function handleTechPosterChange_() {
                if (!this.poster_ && this.tech_ && this.tech_.poster) {
                  this.poster_ = this.tech_.poster() || "";
                  this.trigger("posterchange");
                }
              };
            Player.prototype.controls = function controls(bool) {
              if (bool !== undefined) {
                bool = !!bool;
                if (this.controls_ !== bool) {
                  this.controls_ = bool;
                  if (this.usingNativeControls()) {
                    this.techCall_("setControls", bool);
                  }
                  if (bool) {
                    this.removeClass("vjs-controls-disabled");
                    this.addClass("vjs-controls-enabled");
                    this.trigger("controlsenabled");
                    if (!this.usingNativeControls()) {
                      this.addTechControlsListeners_();
                    }
                  } else {
                    this.removeClass("vjs-controls-enabled");
                    this.addClass("vjs-controls-disabled");
                    this.trigger("controlsdisabled");
                    if (!this.usingNativeControls()) {
                      this.removeTechControlsListeners_();
                    }
                  }
                }
                return this;
              }
              return !!this.controls_;
            };
            Player.prototype.usingNativeControls = function usingNativeControls(
              bool
            ) {
              if (bool !== undefined) {
                bool = !!bool;
                if (this.usingNativeControls_ !== bool) {
                  this.usingNativeControls_ = bool;
                  if (bool) {
                    this.addClass("vjs-using-native-controls");
                    this.trigger("usingnativecontrols");
                  } else {
                    this.removeClass("vjs-using-native-controls");
                    this.trigger("usingcustomcontrols");
                  }
                }
                return this;
              }
              return !!this.usingNativeControls_;
            };
            Player.prototype.error = function error(err) {
              if (err === undefined) {
                return this.error_ || null;
              }
              if (err === null) {
                this.error_ = err;
                this.removeClass("vjs-error");
                if (this.errorDisplay) {
                  this.errorDisplay.close();
                }
                return this;
              }
              this.error_ = new _mediaError2["default"](err);
              this.addClass("vjs-error");
              _log2["default"].error(
                "(CODE:" +
                  this.error_.code +
                  " " +
                  _mediaError2["default"].errorTypes[this.error_.code] +
                  ")",
                this.error_.message,
                this.error_
              );
              this.trigger("error");
              return this;
            };
            Player.prototype.reportUserActivity = function reportUserActivity(
              event
            ) {
              this.userActivity_ = true;
            };
            Player.prototype.userActive = function userActive(bool) {
              if (bool !== undefined) {
                bool = !!bool;
                if (bool !== this.userActive_) {
                  this.userActive_ = bool;
                  if (bool) {
                    this.userActivity_ = true;
                    this.removeClass("vjs-user-inactive");
                    this.addClass("vjs-user-active");
                    this.trigger("useractive");
                  } else {
                    this.userActivity_ = false;
                    if (this.tech_) {
                      this.tech_.one("mousemove", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                      });
                    }
                    this.removeClass("vjs-user-active");
                    this.addClass("vjs-user-inactive");
                    this.trigger("userinactive");
                  }
                }
                return this;
              }
              return this.userActive_;
            };
            Player.prototype.listenForUserActivity_ =
              function listenForUserActivity_() {
                var mouseInProgress = void 0;
                var lastMoveX = void 0;
                var lastMoveY = void 0;
                var handleActivity = Fn.bind(this, this.reportUserActivity);
                var handleMouseMove = function handleMouseMove(e) {
                  if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
                    lastMoveX = e.screenX;
                    lastMoveY = e.screenY;
                    handleActivity();
                  }
                };
                var handleMouseDown = function handleMouseDown() {
                  handleActivity();
                  this.clearInterval(mouseInProgress);
                  mouseInProgress = this.setInterval(handleActivity, 250);
                };
                var handleMouseUp = function handleMouseUp(event) {
                  handleActivity();
                  this.clearInterval(mouseInProgress);
                };
                this.on("mousedown", handleMouseDown);
                this.on("mousemove", handleMouseMove);
                this.on("mouseup", handleMouseUp);
                this.on("keydown", handleActivity);
                this.on("keyup", handleActivity);
                var inactivityTimeout = void 0;
                this.setInterval(function () {
                  if (this.userActivity_) {
                    this.userActivity_ = false;
                    this.userActive(true);
                    this.clearTimeout(inactivityTimeout);
                    var timeout = this.options_.inactivityTimeout;
                    if (timeout > 0) {
                      inactivityTimeout = this.setTimeout(function () {
                        if (!this.userActivity_) {
                          this.userActive(false);
                        }
                      }, timeout);
                    }
                  }
                }, 250);
              };
            Player.prototype.playbackRate = function playbackRate(rate) {
              if (rate !== undefined) {
                this.techCall_("setPlaybackRate", rate);
                return this;
              }
              if (this.tech_ && this.tech_.featuresPlaybackRate) {
                return this.techGet_("playbackRate");
              }
              return 1.0;
            };
            Player.prototype.isAudio = function isAudio(bool) {
              if (bool !== undefined) {
                this.isAudio_ = !!bool;
                return this;
              }
              return !!this.isAudio_;
            };
            Player.prototype.videoTracks = function videoTracks() {
              if (!this.tech_) {
                this.videoTracks_ =
                  this.videoTracks_ || new _videoTrackList2["default"]();
                return this.videoTracks_;
              }
              return this.tech_.videoTracks();
            };
            Player.prototype.audioTracks = function audioTracks() {
              if (!this.tech_) {
                this.audioTracks_ =
                  this.audioTracks_ || new _audioTrackList2["default"]();
                return this.audioTracks_;
              }
              return this.tech_.audioTracks();
            };
            Player.prototype.textTracks = function textTracks() {
              if (this.tech_) {
                return this.tech_.textTracks();
              }
            };
            Player.prototype.remoteTextTracks = function remoteTextTracks() {
              if (this.tech_) {
                return this.tech_.remoteTextTracks();
              }
            };
            Player.prototype.remoteTextTrackEls =
              function remoteTextTrackEls() {
                if (this.tech_) {
                  return this.tech_.remoteTextTrackEls();
                }
              };
            Player.prototype.addTextTrack = function addTextTrack(
              kind,
              label,
              language
            ) {
              if (this.tech_) {
                return this.tech_.addTextTrack(kind, label, language);
              }
            };
            Player.prototype.addRemoteTextTrack = function addRemoteTextTrack(
              options,
              manualCleanup
            ) {
              if (this.tech_) {
                return this.tech_.addRemoteTextTrack(options, manualCleanup);
              }
            };
            Player.prototype.removeRemoteTextTrack =
              function removeRemoteTextTrack() {
                var _ref3 =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  _ref3$track = _ref3.track,
                  track =
                    _ref3$track === undefined ? arguments[0] : _ref3$track;
                if (this.tech_) {
                  return this.tech_.removeRemoteTextTrack(track);
                }
              };
            Player.prototype.videoWidth = function videoWidth() {
              return (
                (this.tech_ &&
                  this.tech_.videoWidth &&
                  this.tech_.videoWidth()) ||
                0
              );
            };
            Player.prototype.videoHeight = function videoHeight() {
              return (
                (this.tech_ &&
                  this.tech_.videoHeight &&
                  this.tech_.videoHeight()) ||
                0
              );
            };
            Player.prototype.language = function language(code) {
              if (code === undefined) {
                return this.language_;
              }
              this.language_ = String(code).toLowerCase();
              return this;
            };
            Player.prototype.languages = function languages() {
              return (0, _mergeOptions2["default"])(
                Player.prototype.options_.languages,
                this.languages_
              );
            };
            Player.prototype.toJSON = function toJSON() {
              var options = (0, _mergeOptions2["default"])(this.options_);
              var tracks = options.tracks;
              options.tracks = [];
              for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                track = (0, _mergeOptions2["default"])(track);
                track.player = undefined;
                options.tracks[i] = track;
              }
              return options;
            };
            Player.prototype.createModal = function createModal(
              content,
              options
            ) {
              var _this5 = this;
              options = options || {};
              options.content = content || "";
              var modal = new _modalDialog2["default"](this, options);
              this.addChild(modal);
              modal.on("dispose", function () {
                _this5.removeChild(modal);
              });
              return modal.open();
            };
            Player.getTagSettings = function getTagSettings(tag) {
              var baseOptions = { sources: [], tracks: [] };
              var tagOptions = Dom.getElAttributes(tag);
              var dataSetup = tagOptions["data-setup"];
              if (Dom.hasElClass(tag, "vjs-fluid")) {
                tagOptions.fluid = true;
              }
              if (dataSetup !== null) {
                var _safeParseTuple = (0, _tuple2["default"])(
                    dataSetup || "{}"
                  ),
                  err = _safeParseTuple[0],
                  data = _safeParseTuple[1];
                if (err) {
                  _log2["default"].error(err);
                }
                (0, _obj.assign)(tagOptions, data);
              }
              (0, _obj.assign)(baseOptions, tagOptions);
              if (tag.hasChildNodes()) {
                var children = tag.childNodes;
                for (var i = 0, j = children.length; i < j; i++) {
                  var child = children[i];
                  var childName = child.nodeName.toLowerCase();
                  if (childName === "source") {
                    baseOptions.sources.push(Dom.getElAttributes(child));
                  } else if (childName === "track") {
                    baseOptions.tracks.push(Dom.getElAttributes(child));
                  }
                }
              }
              return baseOptions;
            };
            Player.prototype.flexNotSupported_ = function flexNotSupported_() {
              var elem = _document2["default"].createElement("i");
              return !(
                "flexBasis" in elem.style ||
                "webkitFlexBasis" in elem.style ||
                "mozFlexBasis" in elem.style ||
                "msFlexBasis" in elem.style ||
                "msFlexOrder" in elem.style
              );
            };
            return Player;
          })(_component2["default"]);
          Player.players = {};
          var navigator = _window2["default"].navigator;
          Player.prototype.options_ = {
            techOrder: ["html5", "flash"],
            html5: {},
            flash: {},
            defaultVolume: 0.0,
            inactivityTimeout: 2000,
            playbackRates: [],
            children: [
              "mediaLoader",
              "posterImage",
              "textTrackDisplay",
              "loadingSpinner",
              "bigPlayButton",
              "controlBar",
              "errorDisplay",
              "textTrackSettings",
            ],
            language:
              (navigator &&
                ((navigator.languages && navigator.languages[0]) ||
                  navigator.userLanguage ||
                  navigator.language)) ||
              "en",
            languages: {},
            notSupportedMessage:
              "No compatible source was found for this media.",
          };
          [
            "ended",
            "seeking",
            "seekable",
            "networkState",
            "readyState",
          ].forEach(function (fn) {
            Player.prototype[fn] = function () {
              return this.techGet_(fn);
            };
          });
          TECH_EVENTS_RETRIGGER.forEach(function (event) {
            Player.prototype[
              "handleTech" + (0, _toTitleCase2["default"])(event) + "_"
            ] = function () {
              return this.trigger(event);
            };
          });
          _component2["default"].registerComponent("Player", Player);
          exports["default"] = Player;
        },
        {
          1: 1,
          4: 4,
          41: 41,
          44: 44,
          45: 45,
          46: 46,
          5: 5,
          50: 50,
          55: 55,
          59: 59,
          60: 60,
          61: 61,
          62: 62,
          63: 63,
          68: 68,
          69: 69,
          71: 71,
          76: 76,
          78: 78,
          79: 79,
          8: 8,
          81: 81,
          82: 82,
          83: 83,
          85: 85,
          86: 86,
          87: 87,
          88: 88,
          89: 89,
          90: 90,
          91: 91,
          94: 94,
          95: 95,
          97: 97,
        },
      ],
      52: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _player = _dereq_(51);
          var _player2 = _interopRequireDefault(_player);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var plugin = function plugin(name, init) {
            _player2["default"].prototype[name] = init;
          };
          exports["default"] = plugin;
        },
        { 51: 51 },
      ],
      53: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _clickableComponent = _dereq_(3);
          var _clickableComponent2 =
            _interopRequireDefault(_clickableComponent);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PopupButton = (function (_ClickableComponent) {
            _inherits(PopupButton, _ClickableComponent);
            function PopupButton(player) {
              var options =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              _classCallCheck(this, PopupButton);
              var _this = _possibleConstructorReturn(
                this,
                _ClickableComponent.call(this, player, options)
              );
              _this.update();
              return _this;
            }
            PopupButton.prototype.update = function update() {
              var popup = this.createPopup();
              if (this.popup) {
                this.removeChild(this.popup);
              }
              this.popup = popup;
              this.addChild(popup);
              if (this.items && this.items.length === 0) {
                this.hide();
              } else if (this.items && this.items.length > 1) {
                this.show();
              }
            };
            PopupButton.prototype.createPopup = function createPopup() {};
            PopupButton.prototype.createEl = function createEl() {
              return _ClickableComponent.prototype.createEl.call(this, "div", {
                className: this.buildCSSClass(),
              });
            };
            PopupButton.prototype.buildCSSClass = function buildCSSClass() {
              var menuButtonClass = "vjs-menu-button";
              if (this.options_.inline === true) {
                menuButtonClass += "-inline";
              } else {
                menuButtonClass += "-popup";
              }
              return (
                "vjs-menu-button " +
                menuButtonClass +
                " " +
                _ClickableComponent.prototype.buildCSSClass.call(this)
              );
            };
            return PopupButton;
          })(_clickableComponent2["default"]);
          _component2["default"].registerComponent("PopupButton", PopupButton);
          exports["default"] = PopupButton;
        },
        { 3: 3, 5: 5 },
      ],
      54: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Popup = (function (_Component) {
            _inherits(Popup, _Component);
            function Popup() {
              _classCallCheck(this, Popup);
              return _possibleConstructorReturn(
                this,
                _Component.apply(this, arguments)
              );
            }
            Popup.prototype.addItem = function addItem(component) {
              this.addChild(component);
              component.on(
                "click",
                Fn.bind(this, function () {
                  this.unlockShowing();
                })
              );
            };
            Popup.prototype.createEl = function createEl() {
              var contentElType = this.options_.contentElType || "ul";
              this.contentEl_ = Dom.createEl(contentElType, {
                className: "vjs-menu-content",
              });
              var el = _Component.prototype.createEl.call(this, "div", {
                append: this.contentEl_,
                className: "vjs-menu",
              });
              el.appendChild(this.contentEl_);
              Events.on(el, "click", function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
              });
              return el;
            };
            return Popup;
          })(_component2["default"]);
          _component2["default"].registerComponent("Popup", Popup);
          exports["default"] = Popup;
        },
        { 5: 5, 81: 81, 82: 82, 83: 83 },
      ],
      55: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _clickableComponent = _dereq_(3);
          var _clickableComponent2 =
            _interopRequireDefault(_clickableComponent);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var PosterImage = (function (_ClickableComponent) {
            _inherits(PosterImage, _ClickableComponent);
            function PosterImage(player, options) {
              _classCallCheck(this, PosterImage);
              var _this = _possibleConstructorReturn(
                this,
                _ClickableComponent.call(this, player, options)
              );
              _this.update();
              player.on("posterchange", Fn.bind(_this, _this.update));
              return _this;
            }
            PosterImage.prototype.dispose = function dispose() {
              this.player().off("posterchange", this.update);
              _ClickableComponent.prototype.dispose.call(this);
            };
            PosterImage.prototype.createEl = function createEl() {
              var el = Dom.createEl("div", {
                className: "vjs-poster",
                tabIndex: -1,
              });
              if (!browser.BACKGROUND_SIZE_SUPPORTED) {
                this.fallbackImg_ = Dom.createEl("img");
                el.appendChild(this.fallbackImg_);
              }
              return el;
            };
            PosterImage.prototype.update = function update(event) {
              var url = this.player().poster();
              this.setSrc(url);
              if (url) {
                this.show();
              } else {
                this.hide();
              }
            };
            PosterImage.prototype.setSrc = function setSrc(url) {
              if (this.fallbackImg_) {
                this.fallbackImg_.src = url;
              } else {
                var backgroundImage = "";
                if (url) {
                  backgroundImage = 'url("' + url + '")';
                }
                this.el_.style.backgroundImage = backgroundImage;
              }
            };
            PosterImage.prototype.handleClick = function handleClick(event) {
              if (!this.player_.controls()) {
                return;
              }
              if (this.player_.paused()) {
                this.player_.play();
              } else {
                this.player_.pause();
              }
            };
            return PosterImage;
          })(_clickableComponent2["default"]);
          _component2["default"].registerComponent("PosterImage", PosterImage);
          exports["default"] = PosterImage;
        },
        { 3: 3, 5: 5, 78: 78, 81: 81, 83: 83 },
      ],
      56: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.hasLoaded =
            exports.autoSetupTimeout =
            exports.autoSetup =
              undefined;
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          var _windowLoaded = false;
          var videojs = void 0;
          var autoSetup = function autoSetup() {
            if (!Dom.isReal()) {
              return;
            }
            var vids = _document2["default"].getElementsByTagName("video");
            var audios = _document2["default"].getElementsByTagName("audio");
            var mediaEls = [];
            if (vids && vids.length > 0) {
              for (var i = 0, e = vids.length; i < e; i++) {
                mediaEls.push(vids[i]);
              }
            }
            if (audios && audios.length > 0) {
              for (var _i = 0, _e = audios.length; _i < _e; _i++) {
                mediaEls.push(audios[_i]);
              }
            }
            if (mediaEls && mediaEls.length > 0) {
              for (var _i2 = 0, _e2 = mediaEls.length; _i2 < _e2; _i2++) {
                var mediaEl = mediaEls[_i2];
                if (mediaEl && mediaEl.getAttribute) {
                  if (mediaEl.player === undefined) {
                    var options = mediaEl.getAttribute("data-setup");
                    if (options !== null) {
                      videojs(mediaEl);
                    }
                  }
                } else {
                  autoSetupTimeout(1);
                  break;
                }
              }
            } else if (!_windowLoaded) {
              autoSetupTimeout(1);
            }
          };
          function autoSetupTimeout(wait, vjs) {
            if (vjs) {
              videojs = vjs;
            }
            _window2["default"].setTimeout(autoSetup, wait);
          }
          if (Dom.isReal() && _document2["default"].readyState === "complete") {
            _windowLoaded = true;
          } else {
            Events.one(_window2["default"], "load", function () {
              _windowLoaded = true;
            });
          }
          var hasLoaded = function hasLoaded() {
            return _windowLoaded;
          };
          exports.autoSetup = autoSetup;
          exports.autoSetupTimeout = autoSetupTimeout;
          exports.hasLoaded = hasLoaded;
        },
        { 81: 81, 82: 82, 94: 94, 95: 95 },
      ],
      57: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _obj = _dereq_(88);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Slider = (function (_Component) {
            _inherits(Slider, _Component);
            function Slider(player, options) {
              _classCallCheck(this, Slider);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.bar = _this.getChild(_this.options_.barName);
              _this.vertical(!!_this.options_.vertical);
              _this.on("mousedown", _this.handleMouseDown);
              _this.on("touchstart", _this.handleMouseDown);
              _this.on("focus", _this.handleFocus);
              _this.on("blur", _this.handleBlur);
              _this.on("click", _this.handleClick);
              _this.on(player, "controlsvisible", _this.update);
              _this.on(player, _this.playerEvent, _this.update);
              return _this;
            }
            Slider.prototype.createEl = function createEl(type) {
              var props =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              var attributes =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : {};
              props.className = props.className + " vjs-slider";
              props = (0, _obj.assign)({ tabIndex: 0 }, props);
              attributes = (0, _obj.assign)(
                {
                  role: "slider",
                  "aria-valuenow": 0,
                  "aria-valuemin": 0,
                  "aria-valuemax": 100,
                  tabIndex: 0,
                },
                attributes
              );
              return _Component.prototype.createEl.call(
                this,
                type,
                props,
                attributes
              );
            };
            Slider.prototype.handleMouseDown = function handleMouseDown(event) {
              var doc = this.bar.el_.ownerDocument;
              event.preventDefault();
              Dom.blockTextSelection();
              this.addClass("vjs-sliding");
              this.trigger("slideractive");
              this.on(doc, "mousemove", this.handleMouseMove);
              this.on(doc, "mouseup", this.handleMouseUp);
              this.on(doc, "touchmove", this.handleMouseMove);
              this.on(doc, "touchend", this.handleMouseUp);
              this.handleMouseMove(event);
            };
            Slider.prototype.handleMouseMove = function handleMouseMove(
              event
            ) {};
            Slider.prototype.handleMouseUp = function handleMouseUp() {
              var doc = this.bar.el_.ownerDocument;
              Dom.unblockTextSelection();
              this.removeClass("vjs-sliding");
              this.trigger("sliderinactive");
              this.off(doc, "mousemove", this.handleMouseMove);
              this.off(doc, "mouseup", this.handleMouseUp);
              this.off(doc, "touchmove", this.handleMouseMove);
              this.off(doc, "touchend", this.handleMouseUp);
              this.update();
            };
            Slider.prototype.update = function update() {
              if (!this.el_) {
                return;
              }
              var progress = this.getPercent();
              var bar = this.bar;
              if (!bar) {
                return;
              }
              if (
                typeof progress !== "number" ||
                progress !== progress ||
                progress < 0 ||
                progress === Infinity
              ) {
                progress = 0;
              }
              var percentage = (progress * 100).toFixed(2) + "%";
              if (this.vertical()) {
                bar.el().style.height = percentage;
              } else {
                bar.el().style.width = percentage;
              }
            };
            Slider.prototype.calculateDistance = function calculateDistance(
              event
            ) {
              var position = Dom.getPointerPosition(this.el_, event);
              if (this.vertical()) {
                return position.y;
              }
              return position.x;
            };
            Slider.prototype.handleFocus = function handleFocus() {
              this.on(
                this.bar.el_.ownerDocument,
                "keydown",
                this.handleKeyPress
              );
            };
            Slider.prototype.handleKeyPress = function handleKeyPress(event) {
              if (event.which === 37 || event.which === 40) {
                event.preventDefault();
                this.stepBack();
              } else if (event.which === 38 || event.which === 39) {
                event.preventDefault();
                this.stepForward();
              }
            };
            Slider.prototype.handleBlur = function handleBlur() {
              this.off(
                this.bar.el_.ownerDocument,
                "keydown",
                this.handleKeyPress
              );
            };
            Slider.prototype.handleClick = function handleClick(event) {
              event.stopImmediatePropagation();
              event.preventDefault();
            };
            Slider.prototype.vertical = function vertical(bool) {
              if (bool === undefined) {
                return this.vertical_ || false;
              }
              this.vertical_ = !!bool;
              if (this.vertical_) {
                this.addClass("vjs-slider-vertical");
              } else {
                this.addClass("vjs-slider-horizontal");
              }
              return this;
            };
            return Slider;
          })(_component2["default"]);
          _component2["default"].registerComponent("Slider", Slider);
          exports["default"] = Slider;
        },
        { 5: 5, 81: 81, 88: 88 },
      ],
      58: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          function FlashRtmpDecorator(Flash) {
            Flash.streamingFormats = { "rtmp/mp4": "MP4", "rtmp/flv": "FLV" };
            Flash.streamFromParts = function (connection, stream) {
              return connection + "&" + stream;
            };
            Flash.streamToParts = function (src) {
              var parts = { connection: "", stream: "" };
              if (!src) {
                return parts;
              }
              var connEnd = src.search(/&(?!\w+=)/);
              var streamBegin = void 0;
              if (connEnd !== -1) {
                streamBegin = connEnd + 1;
              } else {
                connEnd = streamBegin = src.lastIndexOf("/") + 1;
                if (connEnd === 0) {
                  connEnd = streamBegin = src.length;
                }
              }
              parts.connection = src.substring(0, connEnd);
              parts.stream = src.substring(streamBegin, src.length);
              return parts;
            };
            Flash.isStreamingType = function (srcType) {
              return srcType in Flash.streamingFormats;
            };
            Flash.RTMP_RE = /^rtmp[set]?:\/\//i;
            Flash.isStreamingSrc = function (src) {
              return Flash.RTMP_RE.test(src);
            };
            Flash.rtmpSourceHandler = {};
            Flash.rtmpSourceHandler.canPlayType = function (type) {
              if (Flash.isStreamingType(type)) {
                return "maybe";
              }
              return "";
            };
            Flash.rtmpSourceHandler.canHandleSource = function (
              source,
              options
            ) {
              var can = Flash.rtmpSourceHandler.canPlayType(source.type);
              if (can) {
                return can;
              }
              if (Flash.isStreamingSrc(source.src)) {
                return "maybe";
              }
              return "";
            };
            Flash.rtmpSourceHandler.handleSource = function (
              source,
              tech,
              options
            ) {
              var srcParts = Flash.streamToParts(source.src);
              tech.setRtmpConnection(srcParts.connection);
              tech.setRtmpStream(srcParts.stream);
            };
            Flash.registerSourceHandler(Flash.rtmpSourceHandler);
            return Flash;
          }
          exports["default"] = FlashRtmpDecorator;
        },
        {},
      ],
      59: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _tech = _dereq_(62);
          var _tech2 = _interopRequireDefault(_tech);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _url = _dereq_(92);
          var Url = _interopRequireWildcard(_url);
          var _timeRanges = _dereq_(90);
          var _flashRtmp = _dereq_(58);
          var _flashRtmp2 = _interopRequireDefault(_flashRtmp);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _obj = _dereq_(88);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var navigator = _window2["default"].navigator;
          var Flash = (function (_Tech) {
            _inherits(Flash, _Tech);
            function Flash(options, ready) {
              _classCallCheck(this, Flash);
              var _this = _possibleConstructorReturn(
                this,
                _Tech.call(this, options, ready)
              );
              if (options.source) {
                _this.ready(function () {
                  this.setSource(options.source);
                }, true);
              }
              if (options.startTime) {
                _this.ready(function () {
                  this.load();
                  this.play();
                  this.currentTime(options.startTime);
                }, true);
              }
              _window2["default"].videojs = _window2["default"].videojs || {};
              _window2["default"].videojs.Flash =
                _window2["default"].videojs.Flash || {};
              _window2["default"].videojs.Flash.onReady = Flash.onReady;
              _window2["default"].videojs.Flash.onEvent = Flash.onEvent;
              _window2["default"].videojs.Flash.onError = Flash.onError;
              _this.on("seeked", function () {
                this.lastSeekTarget_ = undefined;
              });
              return _this;
            }
            Flash.prototype.createEl = function createEl() {
              var options = this.options_;
              if (!options.swf) {
                var ver = "5.3.0";
                options.swf = "//vjs.zencdn.net/swf/" + ver + "/video-js.swf";
              }
              var objId = options.techId;
              var flashVars = (0, _obj.assign)(
                {
                  readyFunction: "videojs.Flash.onReady",
                  eventProxyFunction: "videojs.Flash.onEvent",
                  errorEventProxyFunction: "videojs.Flash.onError",
                  autoplay: options.autoplay,
                  preload: options.preload,
                  loop: options.loop,
                  muted: options.muted,
                },
                options.flashVars
              );
              var params = (0, _obj.assign)(
                { wmode: "opaque", bgcolor: "#000000" },
                options.params
              );
              var attributes = (0, _obj.assign)(
                { id: objId, name: objId, class: "vjs-tech" },
                options.attributes
              );
              this.el_ = Flash.embed(
                options.swf,
                flashVars,
                params,
                attributes
              );
              this.el_.tech = this;
              return this.el_;
            };
            Flash.prototype.play = function play() {
              if (this.ended()) {
                this.setCurrentTime(0);
              }
              this.el_.vjs_play();
            };
            Flash.prototype.pause = function pause() {
              this.el_.vjs_pause();
            };
            Flash.prototype.src = function src(_src) {
              if (_src === undefined) {
                return this.currentSrc();
              }
              return this.setSrc(_src);
            };
            Flash.prototype.setSrc = function setSrc(src) {
              var _this2 = this;
              src = Url.getAbsoluteURL(src);
              this.el_.vjs_src(src);
              if (this.autoplay()) {
                this.setTimeout(function () {
                  return _this2.play();
                }, 0);
              }
            };
            Flash.prototype.seeking = function seeking() {
              return this.lastSeekTarget_ !== undefined;
            };
            Flash.prototype.setCurrentTime = function setCurrentTime(time) {
              var seekable = this.seekable();
              if (seekable.length) {
                time = time > seekable.start(0) ? time : seekable.start(0);
                time =
                  time < seekable.end(seekable.length - 1)
                    ? time
                    : seekable.end(seekable.length - 1);
                this.lastSeekTarget_ = time;
                this.trigger("seeking");
                this.el_.vjs_setProperty("currentTime", time);
                _Tech.prototype.setCurrentTime.call(this);
              }
            };
            Flash.prototype.currentTime = function currentTime() {
              if (this.seeking()) {
                return this.lastSeekTarget_ || 0;
              }
              return this.el_.vjs_getProperty("currentTime");
            };
            Flash.prototype.currentSrc = function currentSrc() {
              if (this.currentSource_) {
                return this.currentSource_.src;
              }
              return this.el_.vjs_getProperty("currentSrc");
            };
            Flash.prototype.duration = function duration() {
              if (this.readyState() === 0) {
                return NaN;
              }
              var duration = this.el_.vjs_getProperty("duration");
              return duration >= 0 ? duration : Infinity;
            };
            Flash.prototype.load = function load() {
              this.el_.vjs_load();
            };
            Flash.prototype.poster = function poster() {
              this.el_.vjs_getProperty("poster");
            };
            Flash.prototype.setPoster = function setPoster() {};
            Flash.prototype.seekable = function seekable() {
              var duration = this.duration();
              if (duration === 0) {
                return (0, _timeRanges.createTimeRange)();
              }
              return (0, _timeRanges.createTimeRange)(0, duration);
            };
            Flash.prototype.buffered = function buffered() {
              var ranges = this.el_.vjs_getProperty("buffered");
              if (ranges.length === 0) {
                return (0, _timeRanges.createTimeRange)();
              }
              return (0, _timeRanges.createTimeRange)(
                ranges[0][0],
                ranges[0][1]
              );
            };
            Flash.prototype.supportsFullScreen = function supportsFullScreen() {
              return false;
            };
            Flash.prototype.enterFullScreen = function enterFullScreen() {
              return false;
            };
            return Flash;
          })(_tech2["default"]);
          var _api = Flash.prototype;
          var _readWrite =
            "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(
              ","
            );
          var _readOnly =
            "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(
              ","
            );
          function _createSetter(attr) {
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            _api["set" + attrUpper] = function (val) {
              return this.el_.vjs_setProperty(attr, val);
            };
          }
          function _createGetter(attr) {
            _api[attr] = function () {
              return this.el_.vjs_getProperty(attr);
            };
          }
          for (var i = 0; i < _readWrite.length; i++) {
            _createGetter(_readWrite[i]);
            _createSetter(_readWrite[i]);
          }
          for (var _i = 0; _i < _readOnly.length; _i++) {
            _createGetter(_readOnly[_i]);
          }
          Flash.isSupported = function () {
            return Flash.version()[0] >= 10;
          };
          _tech2["default"].withSourceHandlers(Flash);
          Flash.nativeSourceHandler = {};
          Flash.nativeSourceHandler.canPlayType = function (type) {
            if (type in Flash.formats) {
              return "maybe";
            }
            return "";
          };
          Flash.nativeSourceHandler.canHandleSource = function (
            source,
            options
          ) {
            var type = void 0;
            function guessMimeType(src) {
              var ext = Url.getFileExtension(src);
              if (ext) {
                return "video/" + ext;
              }
              return "";
            }
            if (!source.type) {
              type = guessMimeType(source.src);
            } else {
              type = source.type.replace(/;.*/, "").toLowerCase();
            }
            return Flash.nativeSourceHandler.canPlayType(type);
          };
          Flash.nativeSourceHandler.handleSource = function (
            source,
            tech,
            options
          ) {
            tech.setSrc(source.src);
          };
          Flash.nativeSourceHandler.dispose = function () {};
          Flash.registerSourceHandler(Flash.nativeSourceHandler);
          Flash.formats = {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4",
          };
          Flash.onReady = function (currSwf) {
            var el = Dom.getEl(currSwf);
            var tech = el && el.tech;
            if (tech && tech.el()) {
              Flash.checkReady(tech);
            }
          };
          Flash.checkReady = function (tech) {
            if (!tech.el()) {
              return;
            }
            if (tech.el().vjs_getProperty) {
              tech.triggerReady();
            } else {
              this.setTimeout(function () {
                Flash.checkReady(tech);
              }, 50);
            }
          };
          Flash.onEvent = function (swfID, eventName) {
            var tech = Dom.getEl(swfID).tech;
            var args = Array.prototype.slice.call(arguments, 2);
            tech.setTimeout(function () {
              tech.trigger(eventName, args);
            }, 1);
          };
          Flash.onError = function (swfID, err) {
            var tech = Dom.getEl(swfID).tech;
            if (err === "srcnotfound") {
              return tech.error(4);
            }
            tech.error("FLASH: " + err);
          };
          Flash.version = function () {
            var version = "0,0,0";
            try {
              version = new _window2["default"].ActiveXObject(
                "ShockwaveFlash.ShockwaveFlash"
              )
                .GetVariable("$version")
                .replace(/\D+/g, ",")
                .match(/^,?(.+),?$/)[1];
            } catch (e) {
              try {
                if (
                  navigator.mimeTypes["application/x-shockwave-flash"]
                    .enabledPlugin
                ) {
                  version = (
                    navigator.plugins["Shockwave Flash 2.0"] ||
                    navigator.plugins["Shockwave Flash"]
                  ).description
                    .replace(/\D+/g, ",")
                    .match(/^,?(.+),?$/)[1];
                }
              } catch (err) {}
            }
            return version.split(",");
          };
          Flash.embed = function (swf, flashVars, params, attributes) {
            var code = Flash.getEmbedCode(swf, flashVars, params, attributes);
            var obj = Dom.createEl("div", { innerHTML: code }).childNodes[0];
            return obj;
          };
          Flash.getEmbedCode = function (swf, flashVars, params, attributes) {
            var objTag = '<object type="application/x-shockwave-flash" ';
            var flashVarsString = "";
            var paramsString = "";
            var attrsString = "";
            if (flashVars) {
              Object.getOwnPropertyNames(flashVars).forEach(function (key) {
                flashVarsString += key + "=" + flashVars[key] + "&amp;";
              });
            }
            params = (0, _obj.assign)(
              {
                movie: swf,
                flashvars: flashVarsString,
                allowScriptAccess: "always",
                allowNetworking: "all",
              },
              params
            );
            Object.getOwnPropertyNames(params).forEach(function (key) {
              paramsString +=
                '<param name="' + key + '" value="' + params[key] + '" />';
            });
            attributes = (0, _obj.assign)(
              { data: swf, width: "100%", height: "100%" },
              attributes
            );
            Object.getOwnPropertyNames(attributes).forEach(function (key) {
              attrsString += key + '="' + attributes[key] + '" ';
            });
            return "" + objTag + attrsString + ">" + paramsString + "</object>";
          };
          (0, _flashRtmp2["default"])(Flash);
          _component2["default"].registerComponent("Flash", Flash);
          _tech2["default"].registerTech("Flash", Flash);
          exports["default"] = Flash;
        },
        { 5: 5, 58: 58, 62: 62, 81: 81, 88: 88, 90: 90, 92: 92, 95: 95 },
      ],
      60: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _templateObject = _taggedTemplateLiteralLoose(
            [
              "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading.",
            ],
            [
              "Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading.",
            ]
          );
          var _tech = _dereq_(62);
          var _tech2 = _interopRequireDefault(_tech);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _url = _dereq_(92);
          var Url = _interopRequireWildcard(_url);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _tsml = _dereq_(98);
          var _tsml2 = _interopRequireDefault(_tsml);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _obj = _dereq_(88);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _taggedTemplateLiteralLoose(strings, raw) {
            strings.raw = raw;
            return strings;
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Html5 = (function (_Tech) {
            _inherits(Html5, _Tech);
            function Html5(options, ready) {
              _classCallCheck(this, Html5);
              var _this = _possibleConstructorReturn(
                this,
                _Tech.call(this, options, ready)
              );
              var source = options.source;
              var crossoriginTracks = false;
              if (
                source &&
                (_this.el_.currentSrc !== source.src ||
                  (options.tag && options.tag.initNetworkState_ === 3))
              ) {
                _this.setSource(source);
              } else {
                _this.handleLateInit_(_this.el_);
              }
              if (_this.el_.hasChildNodes()) {
                var nodes = _this.el_.childNodes;
                var nodesLength = nodes.length;
                var removeNodes = [];
                while (nodesLength--) {
                  var node = nodes[nodesLength];
                  var nodeName = node.nodeName.toLowerCase();
                  if (nodeName === "track") {
                    if (!_this.featuresNativeTextTracks) {
                      removeNodes.push(node);
                    } else {
                      _this.remoteTextTrackEls().addTrackElement_(node);
                      _this.remoteTextTracks().addTrack_(node.track);
                      if (
                        !crossoriginTracks &&
                        !_this.el_.hasAttribute("crossorigin") &&
                        Url.isCrossOrigin(node.src)
                      ) {
                        crossoriginTracks = true;
                      }
                    }
                  }
                }
                for (var i = 0; i < removeNodes.length; i++) {
                  _this.el_.removeChild(removeNodes[i]);
                }
              }
              var trackTypes = ["audio", "video"];
              trackTypes.forEach(function (type) {
                var elTracks = _this.el()[type + "Tracks"];
                var techTracks = _this[type + "Tracks"]();
                var capitalType = (0, _toTitleCase2["default"])(type);
                if (
                  !_this["featuresNative" + capitalType + "Tracks"] ||
                  !elTracks ||
                  !elTracks.addEventListener
                ) {
                  return;
                }
                _this["handle" + capitalType + "TrackChange_"] = function (e) {
                  techTracks.trigger({
                    type: "change",
                    target: techTracks,
                    currentTarget: techTracks,
                    srcElement: techTracks,
                  });
                };
                _this["handle" + capitalType + "TrackAdd_"] = function (e) {
                  return techTracks.addTrack(e.track);
                };
                _this["handle" + capitalType + "TrackRemove_"] = function (e) {
                  return techTracks.removeTrack(e.track);
                };
                elTracks.addEventListener(
                  "change",
                  _this["handle" + capitalType + "TrackChange_"]
                );
                elTracks.addEventListener(
                  "addtrack",
                  _this["handle" + capitalType + "TrackAdd_"]
                );
                elTracks.addEventListener(
                  "removetrack",
                  _this["handle" + capitalType + "TrackRemove_"]
                );
                _this["removeOld" + capitalType + "Tracks_"] = function (e) {
                  return _this.removeOldTracks_(techTracks, elTracks);
                };
                _this.on(
                  "loadstart",
                  _this["removeOld" + capitalType + "Tracks_"]
                );
              });
              if (_this.featuresNativeTextTracks) {
                if (crossoriginTracks) {
                  _log2["default"].warn(
                    (0, _tsml2["default"])(_templateObject)
                  );
                }
                _this.handleTextTrackChange_ = Fn.bind(
                  _this,
                  _this.handleTextTrackChange
                );
                _this.handleTextTrackAdd_ = Fn.bind(
                  _this,
                  _this.handleTextTrackAdd
                );
                _this.handleTextTrackRemove_ = Fn.bind(
                  _this,
                  _this.handleTextTrackRemove
                );
                _this.proxyNativeTextTracks_();
              }
              if (
                (browser.TOUCH_ENABLED ||
                  browser.IS_IPHONE ||
                  browser.IS_NATIVE_ANDROID) &&
                options.nativeControlsForTouch === true
              ) {
                _this.setControls(true);
              }
              _this.proxyWebkitFullscreen_();
              _this.triggerReady();
              return _this;
            }
            Html5.prototype.dispose = function dispose() {
              var _this2 = this;
              ["audio", "video", "text"].forEach(function (type) {
                var capitalType = (0, _toTitleCase2["default"])(type);
                var tl = _this2.el_[type + "Tracks"];
                if (tl && tl.removeEventListener) {
                  tl.removeEventListener(
                    "change",
                    _this2["handle" + capitalType + "TrackChange_"]
                  );
                  tl.removeEventListener(
                    "addtrack",
                    _this2["handle" + capitalType + "TrackAdd_"]
                  );
                  tl.removeEventListener(
                    "removetrack",
                    _this2["handle" + capitalType + "TrackRemove_"]
                  );
                }
                if (tl) {
                  _this2.off(
                    "loadstart",
                    _this2["removeOld" + capitalType + "Tracks_"]
                  );
                }
              });
              Html5.disposeMediaElement(this.el_);
              _Tech.prototype.dispose.call(this);
            };
            Html5.prototype.createEl = function createEl() {
              var el = this.options_.tag;
              if (
                !el ||
                !(this.options_.playerElIngest || this.movingMediaElementInDOM)
              ) {
                if (el) {
                  var clone = el.cloneNode(true);
                  if (el.parentNode) {
                    el.parentNode.insertBefore(clone, el);
                  }
                  Html5.disposeMediaElement(el);
                  el = clone;
                } else {
                  el = _document2["default"].createElement("video");
                  var tagAttributes =
                    this.options_.tag && Dom.getElAttributes(this.options_.tag);
                  var attributes = (0, _mergeOptions2["default"])(
                    {},
                    tagAttributes
                  );
                  if (
                    !browser.TOUCH_ENABLED ||
                    this.options_.nativeControlsForTouch !== true
                  ) {
                    delete attributes.controls;
                  }
                  Dom.setElAttributes(
                    el,
                    (0, _obj.assign)(attributes, {
                      id: this.options_.techId,
                      class: "vjs-tech",
                    })
                  );
                }
                el.playerId = this.options_.playerId;
              }
              var settingsAttrs = ["autoplay", "preload", "loop", "muted"];
              for (var i = settingsAttrs.length - 1; i >= 0; i--) {
                var attr = settingsAttrs[i];
                var overwriteAttrs = {};
                if (typeof this.options_[attr] !== "undefined") {
                  overwriteAttrs[attr] = this.options_[attr];
                }
                Dom.setElAttributes(el, overwriteAttrs);
              }
              return el;
            };
            Html5.prototype.handleLateInit_ = function handleLateInit_(el) {
              if (el.networkState === 0 || el.networkState === 3) {
                return;
              }
              if (el.readyState === 0) {
                var loadstartFired = false;
                var setLoadstartFired = function setLoadstartFired() {
                  loadstartFired = true;
                };
                this.on("loadstart", setLoadstartFired);
                var triggerLoadstart = function triggerLoadstart() {
                  if (!loadstartFired) {
                    this.trigger("loadstart");
                  }
                };
                this.on("loadedmetadata", triggerLoadstart);
                this.ready(function () {
                  this.off("loadstart", setLoadstartFired);
                  this.off("loadedmetadata", triggerLoadstart);
                  if (!loadstartFired) {
                    this.trigger("loadstart");
                  }
                });
                return;
              }
              var eventsToTrigger = ["loadstart"];
              eventsToTrigger.push("loadedmetadata");
              if (el.readyState >= 2) {
                eventsToTrigger.push("loadeddata");
              }
              if (el.readyState >= 3) {
                eventsToTrigger.push("canplay");
              }
              if (el.readyState >= 4) {
                eventsToTrigger.push("canplaythrough");
              }
              this.ready(function () {
                eventsToTrigger.forEach(function (type) {
                  this.trigger(type);
                }, this);
              });
            };
            Html5.prototype.proxyNativeTextTracks_ =
              function proxyNativeTextTracks_() {
                var tt = this.el().textTracks;
                if (tt) {
                  for (var i = 0; i < tt.length; i++) {
                    this.textTracks().addTrack_(tt[i]);
                  }
                  if (tt.addEventListener) {
                    tt.addEventListener("change", this.handleTextTrackChange_);
                    tt.addEventListener("addtrack", this.handleTextTrackAdd_);
                    tt.addEventListener(
                      "removetrack",
                      this.handleTextTrackRemove_
                    );
                  }
                  this.on("loadstart", this.removeOldTextTracks_);
                }
              };
            Html5.prototype.handleTextTrackChange =
              function handleTextTrackChange(e) {
                var tt = this.textTracks();
                this.textTracks().trigger({
                  type: "change",
                  target: tt,
                  currentTarget: tt,
                  srcElement: tt,
                });
              };
            Html5.prototype.handleTextTrackAdd = function handleTextTrackAdd(
              e
            ) {
              this.textTracks().addTrack_(e.track);
            };
            Html5.prototype.handleTextTrackRemove =
              function handleTextTrackRemove(e) {
                this.textTracks().removeTrack_(e.track);
              };
            Html5.prototype.removeOldTracks_ = function removeOldTracks_(
              techTracks,
              elTracks
            ) {
              var removeTracks = [];
              if (!elTracks) {
                return;
              }
              for (var i = 0; i < techTracks.length; i++) {
                var techTrack = techTracks[i];
                var found = false;
                for (var j = 0; j < elTracks.length; j++) {
                  if (elTracks[j] === techTrack) {
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  removeTracks.push(techTrack);
                }
              }
              for (var _i = 0; _i < removeTracks.length; _i++) {
                var track = removeTracks[_i];
                techTracks.removeTrack_(track);
              }
            };
            Html5.prototype.removeOldTextTracks_ =
              function removeOldTextTracks_(e) {
                var techTracks = this.textTracks();
                var elTracks = this.el().textTracks;
                this.removeOldTracks_(techTracks, elTracks);
              };
            Html5.prototype.play = function play() {
              var playPromise = this.el_.play();
              if (
                playPromise !== undefined &&
                typeof playPromise.then === "function"
              ) {
                playPromise.then(null, function (e) {});
              }
            };
            Html5.prototype.setCurrentTime = function setCurrentTime(seconds) {
              try {
                this.el_.currentTime = seconds;
              } catch (e) {
                (0, _log2["default"])(e, "Video is not ready. (Video.js)");
              }
            };
            Html5.prototype.duration = function duration() {
              var _this3 = this;
              if (
                this.el_.duration === Infinity &&
                browser.IS_ANDROID &&
                browser.IS_CHROME
              ) {
                if (this.el_.currentTime === 0) {
                  var checkProgress = function checkProgress() {
                    if (_this3.el_.currentTime > 0) {
                      if (_this3.el_.duration === Infinity) {
                        _this3.trigger("durationchange");
                      }
                      _this3.off("timeupdate", checkProgress);
                    }
                  };
                  this.on("timeupdate", checkProgress);
                  return NaN;
                }
              }
              return this.el_.duration || NaN;
            };
            Html5.prototype.width = function width() {
              return this.el_.offsetWidth;
            };
            Html5.prototype.height = function height() {
              return this.el_.offsetHeight;
            };
            Html5.prototype.proxyWebkitFullscreen_ =
              function proxyWebkitFullscreen_() {
                var _this4 = this;
                if (!("webkitDisplayingFullscreen" in this.el_)) {
                  return;
                }
                var endFn = function endFn() {
                  this.trigger("fullscreenchange", { isFullscreen: false });
                };
                var beginFn = function beginFn() {
                  this.one("webkitendfullscreen", endFn);
                  this.trigger("fullscreenchange", { isFullscreen: true });
                };
                this.on("webkitbeginfullscreen", beginFn);
                this.on("dispose", function () {
                  _this4.off("webkitbeginfullscreen", beginFn);
                  _this4.off("webkitendfullscreen", endFn);
                });
              };
            Html5.prototype.supportsFullScreen = function supportsFullScreen() {
              if (typeof this.el_.webkitEnterFullScreen === "function") {
                var userAgent =
                  (_window2["default"].navigator &&
                    _window2["default"].navigator.userAgent) ||
                  "";
                if (
                  /Android/.test(userAgent) ||
                  !/Chrome|Mac OS X 10.5/.test(userAgent)
                ) {
                  return true;
                }
              }
              return false;
            };
            Html5.prototype.enterFullScreen = function enterFullScreen() {
              var video = this.el_;
              if (video.paused && video.networkState <= video.HAVE_METADATA) {
                this.el_.play();
                this.setTimeout(function () {
                  video.pause();
                  video.webkitEnterFullScreen();
                }, 0);
              } else {
                video.webkitEnterFullScreen();
              }
            };
            Html5.prototype.exitFullScreen = function exitFullScreen() {
              this.el_.webkitExitFullScreen();
            };
            Html5.prototype.src = function src(_src) {
              if (_src === undefined) {
                return this.el_.src;
              }
              this.setSrc(_src);
            };
            Html5.prototype.reset = function reset() {
              Html5.resetMediaElement(this.el_);
            };
            Html5.prototype.currentSrc = function currentSrc() {
              if (this.currentSource_) {
                return this.currentSource_.src;
              }
              return this.el_.currentSrc;
            };
            Html5.prototype.setControls = function setControls(val) {
              this.el_.controls = !!val;
            };
            Html5.prototype.addTextTrack = function addTextTrack(
              kind,
              label,
              language
            ) {
              if (!this.featuresNativeTextTracks) {
                return _Tech.prototype.addTextTrack.call(
                  this,
                  kind,
                  label,
                  language
                );
              }
              return this.el_.addTextTrack(kind, label, language);
            };
            Html5.prototype.createRemoteTextTrack =
              function createRemoteTextTrack(options) {
                if (!this.featuresNativeTextTracks) {
                  return _Tech.prototype.createRemoteTextTrack.call(
                    this,
                    options
                  );
                }
                var htmlTrackElement =
                  _document2["default"].createElement("track");
                if (options.kind) {
                  htmlTrackElement.kind = options.kind;
                }
                if (options.label) {
                  htmlTrackElement.label = options.label;
                }
                if (options.language || options.srclang) {
                  htmlTrackElement.srclang =
                    options.language || options.srclang;
                }
                if (options["default"]) {
                  htmlTrackElement["default"] = options["default"];
                }
                if (options.id) {
                  htmlTrackElement.id = options.id;
                }
                if (options.src) {
                  htmlTrackElement.src = options.src;
                }
                return htmlTrackElement;
              };
            Html5.prototype.addRemoteTextTrack = function addRemoteTextTrack(
              options,
              manualCleanup
            ) {
              var htmlTrackElement = _Tech.prototype.addRemoteTextTrack.call(
                this,
                options,
                manualCleanup
              );
              if (this.featuresNativeTextTracks) {
                this.el().appendChild(htmlTrackElement);
              }
              return htmlTrackElement;
            };
            Html5.prototype.removeRemoteTextTrack =
              function removeRemoteTextTrack(track) {
                _Tech.prototype.removeRemoteTextTrack.call(this, track);
                if (this.featuresNativeTextTracks) {
                  var tracks = this.$$("track");
                  var i = tracks.length;
                  while (i--) {
                    if (track === tracks[i] || track === tracks[i].track) {
                      this.el().removeChild(tracks[i]);
                    }
                  }
                }
              };
            return Html5;
          })(_tech2["default"]);
          if (Dom.isReal()) {
            Html5.TEST_VID = _document2["default"].createElement("video");
            var track = _document2["default"].createElement("track");
            track.kind = "Captions";
            track.srclang = "en";
            track.label = "English";
            Html5.TEST_VID.appendChild(track);
          }
          Html5.isSupported = function () {
            try {
              Html5.TEST_VID.volume = 0.5;
            } catch (e) {
              return false;
            }
            return !!(Html5.TEST_VID && Html5.TEST_VID.canPlayType);
          };
          Html5.canControlVolume = function () {
            try {
              var volume = Html5.TEST_VID.volume;
              Html5.TEST_VID.volume = volume / 2 + 0.1;
              return volume !== Html5.TEST_VID.volume;
            } catch (e) {
              return false;
            }
          };
          Html5.canControlPlaybackRate = function () {
            if (browser.IS_ANDROID && browser.IS_CHROME) {
              return false;
            }
            try {
              var playbackRate = Html5.TEST_VID.playbackRate;
              Html5.TEST_VID.playbackRate = playbackRate / 2 + 0.1;
              return playbackRate !== Html5.TEST_VID.playbackRate;
            } catch (e) {
              return false;
            }
          };
          Html5.supportsNativeTextTracks = function () {
            return browser.IS_ANY_SAFARI;
          };
          Html5.supportsNativeVideoTracks = function () {
            return !!(Html5.TEST_VID && Html5.TEST_VID.videoTracks);
          };
          Html5.supportsNativeAudioTracks = function () {
            return !!(Html5.TEST_VID && Html5.TEST_VID.audioTracks);
          };
          Html5.Events = [
            "loadstart",
            "suspend",
            "abort",
            "error",
            "emptied",
            "stalled",
            "loadedmetadata",
            "loadeddata",
            "canplay",
            "canplaythrough",
            "playing",
            "waiting",
            "seeking",
            "seeked",
            "ended",
            "durationchange",
            "timeupdate",
            "progress",
            "play",
            "pause",
            "ratechange",
            "volumechange",
          ];
          Html5.prototype.featuresVolumeControl = Html5.canControlVolume();
          Html5.prototype.featuresPlaybackRate = Html5.canControlPlaybackRate();
          Html5.prototype.movingMediaElementInDOM = !browser.IS_IOS;
          Html5.prototype.featuresFullscreenResize = true;
          Html5.prototype.featuresProgressEvents = true;
          Html5.prototype.featuresTimeupdateEvents = true;
          Html5.prototype.featuresNativeTextTracks =
            Html5.supportsNativeTextTracks();
          Html5.prototype.featuresNativeVideoTracks =
            Html5.supportsNativeVideoTracks();
          Html5.prototype.featuresNativeAudioTracks =
            Html5.supportsNativeAudioTracks();
          var canPlayType =
            Html5.TEST_VID && Html5.TEST_VID.constructor.prototype.canPlayType;
          var mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
          var mp4RE = /^video\/mp4/i;
          Html5.patchCanPlayType = function () {
            if (browser.ANDROID_VERSION >= 4.0 && !browser.IS_FIREFOX) {
              Html5.TEST_VID.constructor.prototype.canPlayType = function (
                type
              ) {
                if (type && mpegurlRE.test(type)) {
                  return "maybe";
                }
                return canPlayType.call(this, type);
              };
            } else if (browser.IS_OLD_ANDROID) {
              Html5.TEST_VID.constructor.prototype.canPlayType = function (
                type
              ) {
                if (type && mp4RE.test(type)) {
                  return "maybe";
                }
                return canPlayType.call(this, type);
              };
            }
          };
          Html5.unpatchCanPlayType = function () {
            var r = Html5.TEST_VID.constructor.prototype.canPlayType;
            Html5.TEST_VID.constructor.prototype.canPlayType = canPlayType;
            return r;
          };
          Html5.patchCanPlayType();
          Html5.disposeMediaElement = function (el) {
            if (!el) {
              return;
            }
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            while (el.hasChildNodes()) {
              el.removeChild(el.firstChild);
            }
            el.removeAttribute("src");
            if (typeof el.load === "function") {
              (function () {
                try {
                  el.load();
                } catch (e) {}
              })();
            }
          };
          Html5.resetMediaElement = function (el) {
            if (!el) {
              return;
            }
            var sources = el.querySelectorAll("source");
            var i = sources.length;
            while (i--) {
              el.removeChild(sources[i]);
            }
            el.removeAttribute("src");
            if (typeof el.load === "function") {
              (function () {
                try {
                  el.load();
                } catch (e) {}
              })();
            }
          };
          [
            "paused",
            "currentTime",
            "buffered",
            "volume",
            "muted",
            "poster",
            "preload",
            "autoplay",
            "controls",
            "loop",
            "error",
            "seeking",
            "seekable",
            "ended",
            "defaultMuted",
            "playbackRate",
            "played",
            "networkState",
            "readyState",
            "videoWidth",
            "videoHeight",
          ].forEach(function (prop) {
            Html5.prototype[prop] = function () {
              return this.el_[prop];
            };
          });
          [
            "volume",
            "muted",
            "src",
            "poster",
            "preload",
            "autoplay",
            "loop",
            "playbackRate",
          ].forEach(function (prop) {
            Html5.prototype["set" + (0, _toTitleCase2["default"])(prop)] =
              function (v) {
                this.el_[prop] = v;
              };
          });
          ["pause", "load"].forEach(function (prop) {
            Html5.prototype[prop] = function () {
              return this.el_[prop]();
            };
          });
          _tech2["default"].withSourceHandlers(Html5);
          Html5.nativeSourceHandler = {};
          Html5.nativeSourceHandler.canPlayType = function (type) {
            try {
              return Html5.TEST_VID.canPlayType(type);
            } catch (e) {
              return "";
            }
          };
          Html5.nativeSourceHandler.canHandleSource = function (
            source,
            options
          ) {
            if (source.type) {
              return Html5.nativeSourceHandler.canPlayType(source.type);
            } else if (source.src) {
              var ext = Url.getFileExtension(source.src);
              return Html5.nativeSourceHandler.canPlayType("video/" + ext);
            }
            return "";
          };
          Html5.nativeSourceHandler.handleSource = function (
            source,
            tech,
            options
          ) {
            tech.setSrc(source.src);
          };
          Html5.nativeSourceHandler.dispose = function () {};
          Html5.registerSourceHandler(Html5.nativeSourceHandler);
          _component2["default"].registerComponent("Html5", Html5);
          _tech2["default"].registerTech("Html5", Html5);
          exports["default"] = Html5;
        },
        {
          5: 5,
          62: 62,
          78: 78,
          81: 81,
          83: 83,
          86: 86,
          87: 87,
          88: 88,
          91: 91,
          92: 92,
          94: 94,
          95: 95,
          98: 98,
        },
      ],
      61: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _tech = _dereq_(62);
          var _tech2 = _interopRequireDefault(_tech);
          var _toTitleCase = _dereq_(91);
          var _toTitleCase2 = _interopRequireDefault(_toTitleCase);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var MediaLoader = (function (_Component) {
            _inherits(MediaLoader, _Component);
            function MediaLoader(player, options, ready) {
              _classCallCheck(this, MediaLoader);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options, ready)
              );
              if (
                !options.playerOptions.sources ||
                options.playerOptions.sources.length === 0
              ) {
                for (
                  var i = 0, j = options.playerOptions.techOrder;
                  i < j.length;
                  i++
                ) {
                  var techName = (0, _toTitleCase2["default"])(j[i]);
                  var tech = _tech2["default"].getTech(techName);
                  if (!techName) {
                    tech = _component2["default"].getComponent(techName);
                  }
                  if (tech && tech.isSupported()) {
                    player.loadTech_(techName);
                    break;
                  }
                }
              } else {
                player.src(options.playerOptions.sources);
              }
              return _this;
            }
            return MediaLoader;
          })(_component2["default"]);
          _component2["default"].registerComponent("MediaLoader", MediaLoader);
          exports["default"] = MediaLoader;
        },
        { 5: 5, 62: 62, 91: 91 },
      ],
      62: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _htmlTrackElement = _dereq_(66);
          var _htmlTrackElement2 = _interopRequireDefault(_htmlTrackElement);
          var _htmlTrackElementList = _dereq_(65);
          var _htmlTrackElementList2 = _interopRequireDefault(
            _htmlTrackElementList
          );
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _textTrack = _dereq_(72);
          var _textTrack2 = _interopRequireDefault(_textTrack);
          var _textTrackList = _dereq_(70);
          var _textTrackList2 = _interopRequireDefault(_textTrackList);
          var _videoTrackList = _dereq_(76);
          var _videoTrackList2 = _interopRequireDefault(_videoTrackList);
          var _audioTrackList = _dereq_(63);
          var _audioTrackList2 = _interopRequireDefault(_audioTrackList);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _timeRanges = _dereq_(90);
          var _buffer = _dereq_(79);
          var _mediaError = _dereq_(46);
          var _mediaError2 = _interopRequireDefault(_mediaError);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _obj = _dereq_(88);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          function createTrackHelper(self, kind, label, language) {
            var options =
              arguments.length > 4 && arguments[4] !== undefined
                ? arguments[4]
                : {};
            var tracks = self.textTracks();
            options.kind = kind;
            if (label) {
              options.label = label;
            }
            if (language) {
              options.language = language;
            }
            options.tech = self;
            var track = new _textTrack2["default"](options);
            tracks.addTrack_(track);
            return track;
          }
          var Tech = (function (_Component) {
            _inherits(Tech, _Component);
            function Tech() {
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var ready =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : function () {};
              _classCallCheck(this, Tech);
              options.reportTouchActivity = false;
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, null, options, ready)
              );
              _this.hasStarted_ = false;
              _this.on("playing", function () {
                this.hasStarted_ = true;
              });
              _this.on("loadstart", function () {
                this.hasStarted_ = false;
              });
              _this.textTracks_ = options.textTracks;
              _this.videoTracks_ = options.videoTracks;
              _this.audioTracks_ = options.audioTracks;
              if (!_this.featuresProgressEvents) {
                _this.manualProgressOn();
              }
              if (!_this.featuresTimeupdateEvents) {
                _this.manualTimeUpdatesOn();
              }
              ["Text", "Audio", "Video"].forEach(function (track) {
                if (options["native" + track + "Tracks"] === false) {
                  _this["featuresNative" + track + "Tracks"] = false;
                }
              });
              if (options.nativeCaptions === false) {
                _this.featuresNativeTextTracks = false;
              }
              if (!_this.featuresNativeTextTracks) {
                _this.emulateTextTracks();
              }
              _this.autoRemoteTextTracks_ = new _textTrackList2["default"]();
              _this.initTextTrackListeners();
              _this.initTrackListeners();
              if (!options.nativeControlsForTouch) {
                _this.emitTapEvents();
              }
              if (_this.constructor) {
                _this.name_ = _this.constructor.name || "Unknown Tech";
              }
              return _this;
            }
            Tech.prototype.manualProgressOn = function manualProgressOn() {
              this.on("durationchange", this.onDurationChange);
              this.manualProgress = true;
              this.one("ready", this.trackProgress);
            };
            Tech.prototype.manualProgressOff = function manualProgressOff() {
              this.manualProgress = false;
              this.stopTrackingProgress();
              this.off("durationchange", this.onDurationChange);
            };
            Tech.prototype.trackProgress = function trackProgress(event) {
              this.stopTrackingProgress();
              this.progressInterval = this.setInterval(
                Fn.bind(this, function () {
                  var numBufferedPercent = this.bufferedPercent();
                  if (this.bufferedPercent_ !== numBufferedPercent) {
                    this.trigger("progress");
                  }
                  this.bufferedPercent_ = numBufferedPercent;
                  if (numBufferedPercent === 1) {
                    this.stopTrackingProgress();
                  }
                }),
                500
              );
            };
            Tech.prototype.onDurationChange = function onDurationChange(event) {
              this.duration_ = this.duration();
            };
            Tech.prototype.buffered = function buffered() {
              return (0, _timeRanges.createTimeRange)(0, 0);
            };
            Tech.prototype.bufferedPercent = function bufferedPercent() {
              return (0, _buffer.bufferedPercent)(
                this.buffered(),
                this.duration_
              );
            };
            Tech.prototype.stopTrackingProgress =
              function stopTrackingProgress() {
                this.clearInterval(this.progressInterval);
              };
            Tech.prototype.manualTimeUpdatesOn =
              function manualTimeUpdatesOn() {
                this.manualTimeUpdates = true;
                this.on("play", this.trackCurrentTime);
                this.on("pause", this.stopTrackingCurrentTime);
              };
            Tech.prototype.manualTimeUpdatesOff =
              function manualTimeUpdatesOff() {
                this.manualTimeUpdates = false;
                this.stopTrackingCurrentTime();
                this.off("play", this.trackCurrentTime);
                this.off("pause", this.stopTrackingCurrentTime);
              };
            Tech.prototype.trackCurrentTime = function trackCurrentTime() {
              if (this.currentTimeInterval) {
                this.stopTrackingCurrentTime();
              }
              this.currentTimeInterval = this.setInterval(function () {
                this.trigger({
                  type: "timeupdate",
                  target: this,
                  manuallyTriggered: true,
                });
              }, 250);
            };
            Tech.prototype.stopTrackingCurrentTime =
              function stopTrackingCurrentTime() {
                this.clearInterval(this.currentTimeInterval);
                this.trigger({
                  type: "timeupdate",
                  target: this,
                  manuallyTriggered: true,
                });
              };
            Tech.prototype.dispose = function dispose() {
              this.clearTracks(["audio", "video", "text"]);
              if (this.manualProgress) {
                this.manualProgressOff();
              }
              if (this.manualTimeUpdates) {
                this.manualTimeUpdatesOff();
              }
              _Component.prototype.dispose.call(this);
            };
            Tech.prototype.clearTracks = function clearTracks(types) {
              var _this2 = this;
              types = [].concat(types);
              types.forEach(function (type) {
                var list = _this2[type + "Tracks"]() || [];
                var i = list.length;
                while (i--) {
                  var track = list[i];
                  if (type === "text") {
                    _this2.removeRemoteTextTrack(track);
                  }
                  list.removeTrack_(track);
                }
              });
            };
            Tech.prototype.cleanupAutoTextTracks =
              function cleanupAutoTextTracks() {
                var list = this.autoRemoteTextTracks_ || [];
                var i = list.length;
                while (i--) {
                  var track = list[i];
                  this.removeRemoteTextTrack(track);
                }
              };
            Tech.prototype.reset = function reset() {};
            Tech.prototype.error = function error(err) {
              if (err !== undefined) {
                this.error_ = new _mediaError2["default"](err);
                this.trigger("error");
              }
              return this.error_;
            };
            Tech.prototype.played = function played() {
              if (this.hasStarted_) {
                return (0, _timeRanges.createTimeRange)(0, 0);
              }
              return (0, _timeRanges.createTimeRange)();
            };
            Tech.prototype.setCurrentTime = function setCurrentTime() {
              if (this.manualTimeUpdates) {
                this.trigger({
                  type: "timeupdate",
                  target: this,
                  manuallyTriggered: true,
                });
              }
            };
            Tech.prototype.initTextTrackListeners =
              function initTextTrackListeners() {
                var textTrackListChanges = Fn.bind(this, function () {
                  this.trigger("texttrackchange");
                });
                var tracks = this.textTracks();
                if (!tracks) {
                  return;
                }
                tracks.addEventListener("removetrack", textTrackListChanges);
                tracks.addEventListener("addtrack", textTrackListChanges);
                this.on(
                  "dispose",
                  Fn.bind(this, function () {
                    tracks.removeEventListener(
                      "removetrack",
                      textTrackListChanges
                    );
                    tracks.removeEventListener(
                      "addtrack",
                      textTrackListChanges
                    );
                  })
                );
              };
            Tech.prototype.initTrackListeners = function initTrackListeners() {
              var _this3 = this;
              var trackTypes = ["video", "audio"];
              trackTypes.forEach(function (type) {
                var trackListChanges = function trackListChanges() {
                  _this3.trigger(type + "trackchange");
                };
                var tracks = _this3[type + "Tracks"]();
                tracks.addEventListener("removetrack", trackListChanges);
                tracks.addEventListener("addtrack", trackListChanges);
                _this3.on("dispose", function () {
                  tracks.removeEventListener("removetrack", trackListChanges);
                  tracks.removeEventListener("addtrack", trackListChanges);
                });
              });
            };
            Tech.prototype.addWebVttScript_ = function addWebVttScript_() {
              var _this4 = this;
              if (_window2["default"].WebVTT) {
                return;
              }
              if (_document2["default"].body.contains(this.el())) {
                var vtt = _dereq_(105);
                if (
                  !this.options_["vtt.js"] &&
                  (0, _obj.isPlain)(vtt) &&
                  Object.keys(vtt).length > 0
                ) {
                  this.trigger("vttjsloaded");
                  return;
                }
                var script = _document2["default"].createElement("script");
                script.src =
                  this.options_["vtt.js"] ||
                  "https://vjs.zencdn.net/vttjs/0.12.3/vtt.min.js";
                script.onload = function () {
                  _this4.trigger("vttjsloaded");
                };
                script.onerror = function () {
                  _this4.trigger("vttjserror");
                };
                this.on("dispose", function () {
                  script.onload = null;
                  script.onerror = null;
                });
                _window2["default"].WebVTT = true;
                this.el().parentNode.appendChild(script);
              } else {
                this.ready(this.addWebVttScript_);
              }
            };
            Tech.prototype.emulateTextTracks = function emulateTextTracks() {
              var _this5 = this;
              var tracks = this.textTracks();
              if (!tracks) {
                return;
              }
              var remoteTracks = this.remoteTextTracks();
              var handleAddTrack = function handleAddTrack(e) {
                return tracks.addTrack_(e.track);
              };
              var handleRemoveTrack = function handleRemoveTrack(e) {
                return tracks.removeTrack_(e.track);
              };
              remoteTracks.on("addtrack", handleAddTrack);
              remoteTracks.on("removetrack", handleRemoveTrack);
              this.addWebVttScript_();
              var updateDisplay = function updateDisplay() {
                return _this5.trigger("texttrackchange");
              };
              var textTracksChanges = function textTracksChanges() {
                updateDisplay();
                for (var i = 0; i < tracks.length; i++) {
                  var track = tracks[i];
                  track.removeEventListener("cuechange", updateDisplay);
                  if (track.mode === "showing") {
                    track.addEventListener("cuechange", updateDisplay);
                  }
                }
              };
              textTracksChanges();
              tracks.addEventListener("change", textTracksChanges);
              tracks.addEventListener("addtrack", textTracksChanges);
              tracks.addEventListener("removetrack", textTracksChanges);
              this.on("dispose", function () {
                remoteTracks.off("addtrack", handleAddTrack);
                remoteTracks.off("removetrack", handleRemoveTrack);
                tracks.removeEventListener("change", textTracksChanges);
                tracks.removeEventListener("addtrack", textTracksChanges);
                tracks.removeEventListener("removetrack", textTracksChanges);
                for (var i = 0; i < tracks.length; i++) {
                  var track = tracks[i];
                  track.removeEventListener("cuechange", updateDisplay);
                }
              });
            };
            Tech.prototype.videoTracks = function videoTracks() {
              this.videoTracks_ =
                this.videoTracks_ || new _videoTrackList2["default"]();
              return this.videoTracks_;
            };
            Tech.prototype.audioTracks = function audioTracks() {
              this.audioTracks_ =
                this.audioTracks_ || new _audioTrackList2["default"]();
              return this.audioTracks_;
            };
            Tech.prototype.textTracks = function textTracks() {
              this.textTracks_ =
                this.textTracks_ || new _textTrackList2["default"]();
              return this.textTracks_;
            };
            Tech.prototype.remoteTextTracks = function remoteTextTracks() {
              this.remoteTextTracks_ =
                this.remoteTextTracks_ || new _textTrackList2["default"]();
              return this.remoteTextTracks_;
            };
            Tech.prototype.remoteTextTrackEls = function remoteTextTrackEls() {
              this.remoteTextTrackEls_ =
                this.remoteTextTrackEls_ ||
                new _htmlTrackElementList2["default"]();
              return this.remoteTextTrackEls_;
            };
            Tech.prototype.addTextTrack = function addTextTrack(
              kind,
              label,
              language
            ) {
              if (!kind) {
                throw new Error(
                  "TextTrack kind is required but was not provided"
                );
              }
              return createTrackHelper(this, kind, label, language);
            };
            Tech.prototype.createRemoteTextTrack =
              function createRemoteTextTrack(options) {
                var track = (0, _mergeOptions2["default"])(options, {
                  tech: this,
                });
                return new _htmlTrackElement2["default"](track);
              };
            Tech.prototype.addRemoteTextTrack = function addRemoteTextTrack() {
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              var manualCleanup = arguments[1];
              var htmlTrackElement = this.createRemoteTextTrack(options);
              if (manualCleanup !== true && manualCleanup !== false) {
                _log2["default"].warn(
                  'Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'
                );
                manualCleanup = true;
              }
              this.remoteTextTrackEls().addTrackElement_(htmlTrackElement);
              this.remoteTextTracks().addTrack_(htmlTrackElement.track);
              if (manualCleanup !== true) {
                this.autoRemoteTextTracks_.addTrack_(htmlTrackElement.track);
              }
              return htmlTrackElement;
            };
            Tech.prototype.removeRemoteTextTrack =
              function removeRemoteTextTrack(track) {
                var trackElement =
                  this.remoteTextTrackEls().getTrackElementByTrack_(track);
                this.remoteTextTrackEls().removeTrackElement_(trackElement);
                this.remoteTextTracks().removeTrack_(track);
                this.autoRemoteTextTracks_.removeTrack_(track);
              };
            Tech.prototype.setPoster = function setPoster() {};
            Tech.prototype.canPlayType = function canPlayType() {
              return "";
            };
            Tech.isTech = function isTech(component) {
              return (
                component.prototype instanceof Tech ||
                component instanceof Tech ||
                component === Tech
              );
            };
            Tech.registerTech = function registerTech(name, tech) {
              if (!Tech.techs_) {
                Tech.techs_ = {};
              }
              if (!Tech.isTech(tech)) {
                throw new Error("Tech " + name + " must be a Tech");
              }
              Tech.techs_[name] = tech;
              return tech;
            };
            Tech.getTech = function getTech(name) {
              if (Tech.techs_ && Tech.techs_[name]) {
                return Tech.techs_[name];
              }
              if (
                _window2["default"] &&
                _window2["default"].videojs &&
                _window2["default"].videojs[name]
              ) {
                _log2["default"].warn(
                  "The " +
                    name +
                    " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"
                );
                return _window2["default"].videojs[name];
              }
            };
            return Tech;
          })(_component2["default"]);
          Tech.prototype.textTracks_;
          Tech.prototype.audioTracks_;
          Tech.prototype.videoTracks_;
          Tech.prototype.featuresVolumeControl = true;
          Tech.prototype.featuresFullscreenResize = false;
          Tech.prototype.featuresPlaybackRate = false;
          Tech.prototype.featuresProgressEvents = false;
          Tech.prototype.featuresTimeupdateEvents = false;
          Tech.prototype.featuresNativeTextTracks = false;
          Tech.withSourceHandlers = function (_Tech) {
            _Tech.registerSourceHandler = function (handler, index) {
              var handlers = _Tech.sourceHandlers;
              if (!handlers) {
                handlers = _Tech.sourceHandlers = [];
              }
              if (index === undefined) {
                index = handlers.length;
              }
              handlers.splice(index, 0, handler);
            };
            _Tech.canPlayType = function (type) {
              var handlers = _Tech.sourceHandlers || [];
              var can = void 0;
              for (var i = 0; i < handlers.length; i++) {
                can = handlers[i].canPlayType(type);
                if (can) {
                  return can;
                }
              }
              return "";
            };
            _Tech.selectSourceHandler = function (source, options) {
              var handlers = _Tech.sourceHandlers || [];
              var can = void 0;
              for (var i = 0; i < handlers.length; i++) {
                can = handlers[i].canHandleSource(source, options);
                if (can) {
                  return handlers[i];
                }
              }
              return null;
            };
            _Tech.canPlaySource = function (srcObj, options) {
              var sh = _Tech.selectSourceHandler(srcObj, options);
              if (sh) {
                return sh.canHandleSource(srcObj, options);
              }
              return "";
            };
            var deferrable = ["seekable", "duration"];
            deferrable.forEach(function (fnName) {
              var originalFn = this[fnName];
              if (typeof originalFn !== "function") {
                return;
              }
              this[fnName] = function () {
                if (this.sourceHandler_ && this.sourceHandler_[fnName]) {
                  return this.sourceHandler_[fnName].apply(
                    this.sourceHandler_,
                    arguments
                  );
                }
                return originalFn.apply(this, arguments);
              };
            }, _Tech.prototype);
            _Tech.prototype.setSource = function (source) {
              var sh = _Tech.selectSourceHandler(source, this.options_);
              if (!sh) {
                if (_Tech.nativeSourceHandler) {
                  sh = _Tech.nativeSourceHandler;
                } else {
                  _log2["default"].error(
                    "No source hander found for the current source."
                  );
                }
              }
              this.disposeSourceHandler();
              this.off("dispose", this.disposeSourceHandler);
              if (sh !== _Tech.nativeSourceHandler) {
                this.currentSource_ = source;
                this.off(
                  this.el_,
                  "loadstart",
                  _Tech.prototype.firstLoadStartListener_
                );
                this.off(
                  this.el_,
                  "loadstart",
                  _Tech.prototype.successiveLoadStartListener_
                );
                this.one(
                  this.el_,
                  "loadstart",
                  _Tech.prototype.firstLoadStartListener_
                );
              }
              this.sourceHandler_ = sh.handleSource(
                source,
                this,
                this.options_
              );
              this.on("dispose", this.disposeSourceHandler);
              return this;
            };
            _Tech.prototype.firstLoadStartListener_ = function () {
              this.one(
                this.el_,
                "loadstart",
                _Tech.prototype.successiveLoadStartListener_
              );
            };
            _Tech.prototype.successiveLoadStartListener_ = function () {
              this.disposeSourceHandler();
              this.one(
                this.el_,
                "loadstart",
                _Tech.prototype.successiveLoadStartListener_
              );
            };
            _Tech.prototype.disposeSourceHandler = function () {
              if (this.currentSource_) {
                this.clearTracks(["audio", "video"]);
                this.currentSource_ = null;
              }
              this.cleanupAutoTextTracks();
              if (this.sourceHandler_) {
                this.off(
                  this.el_,
                  "loadstart",
                  _Tech.prototype.firstLoadStartListener_
                );
                this.off(
                  this.el_,
                  "loadstart",
                  _Tech.prototype.successiveLoadStartListener_
                );
                if (this.sourceHandler_.dispose) {
                  this.sourceHandler_.dispose();
                }
                this.sourceHandler_ = null;
              }
            };
          };
          _component2["default"].registerComponent("Tech", Tech);
          _component2["default"].registerComponent("MediaTechController", Tech);
          Tech.registerTech("Tech", Tech);
          exports["default"] = Tech;
        },
        {
          105: 105,
          46: 46,
          5: 5,
          63: 63,
          65: 65,
          66: 66,
          70: 70,
          72: 72,
          76: 76,
          79: 79,
          83: 83,
          86: 86,
          87: 87,
          88: 88,
          90: 90,
          94: 94,
          95: 95,
        },
      ],
      63: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackList = _dereq_(74);
          var _trackList2 = _interopRequireDefault(_trackList);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var disableOthers = function disableOthers(list, track) {
            for (var i = 0; i < list.length; i++) {
              if (track.id === list[i].id) {
                continue;
              }
              list[i].enabled = false;
            }
          };
          var AudioTrackList = (function (_TrackList) {
            _inherits(AudioTrackList, _TrackList);
            function AudioTrackList() {
              var _this, _ret;
              var tracks =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              _classCallCheck(this, AudioTrackList);
              var list = void 0;
              for (var i = tracks.length - 1; i >= 0; i--) {
                if (tracks[i].enabled) {
                  disableOthers(tracks, tracks[i]);
                  break;
                }
              }
              if (browser.IS_IE8) {
                list = _document2["default"].createElement("custom");
                for (var prop in _trackList2["default"].prototype) {
                  if (prop !== "constructor") {
                    list[prop] = _trackList2["default"].prototype[prop];
                  }
                }
                for (var _prop in AudioTrackList.prototype) {
                  if (_prop !== "constructor") {
                    list[_prop] = AudioTrackList.prototype[_prop];
                  }
                }
              }
              list =
                ((_this = _possibleConstructorReturn(
                  this,
                  _TrackList.call(this, tracks, list)
                )),
                _this);
              list.changing_ = false;
              return (_ret = list), _possibleConstructorReturn(_this, _ret);
            }
            AudioTrackList.prototype.addTrack_ = function addTrack_(track) {
              var _this2 = this;
              if (track.enabled) {
                disableOthers(this, track);
              }
              _TrackList.prototype.addTrack_.call(this, track);
              if (!track.addEventListener) {
                return;
              }
              track.addEventListener("enabledchange", function () {
                if (_this2.changing_) {
                  return;
                }
                _this2.changing_ = true;
                disableOthers(_this2, track);
                _this2.changing_ = false;
                _this2.trigger("change");
              });
            };
            AudioTrackList.prototype.addTrack = function addTrack(track) {
              this.addTrack_(track);
            };
            AudioTrackList.prototype.removeTrack = function removeTrack(track) {
              _TrackList.prototype.removeTrack_.call(this, track);
            };
            return AudioTrackList;
          })(_trackList2["default"]);
          exports["default"] = AudioTrackList;
        },
        { 74: 74, 78: 78, 94: 94 },
      ],
      64: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackEnums = _dereq_(73);
          var _track = _dereq_(75);
          var _track2 = _interopRequireDefault(_track);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var AudioTrack = (function (_Track) {
            _inherits(AudioTrack, _Track);
            function AudioTrack() {
              var _this, _ret;
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, AudioTrack);
              var settings = (0, _mergeOptions2["default"])(options, {
                kind: _trackEnums.AudioTrackKind[options.kind] || "",
              });
              var track =
                ((_this = _possibleConstructorReturn(
                  this,
                  _Track.call(this, settings)
                )),
                _this);
              var enabled = false;
              if (browser.IS_IE8) {
                for (var prop in AudioTrack.prototype) {
                  if (prop !== "constructor") {
                    track[prop] = AudioTrack.prototype[prop];
                  }
                }
              }
              Object.defineProperty(track, "enabled", {
                get: function get() {
                  return enabled;
                },
                set: function set(newEnabled) {
                  if (
                    typeof newEnabled !== "boolean" ||
                    newEnabled === enabled
                  ) {
                    return;
                  }
                  enabled = newEnabled;
                  this.trigger("enabledchange");
                },
              });
              if (settings.enabled) {
                track.enabled = settings.enabled;
              }
              track.loaded_ = true;
              return (_ret = track), _possibleConstructorReturn(_this, _ret);
            }
            return AudioTrack;
          })(_track2["default"]);
          exports["default"] = AudioTrack;
        },
        { 73: 73, 75: 75, 78: 78, 87: 87 },
      ],
      65: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var HtmlTrackElementList = (function () {
            function HtmlTrackElementList() {
              var trackElements =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              _classCallCheck(this, HtmlTrackElementList);
              var list = this;
              if (browser.IS_IE8) {
                list = _document2["default"].createElement("custom");
                for (var prop in HtmlTrackElementList.prototype) {
                  if (prop !== "constructor") {
                    list[prop] = HtmlTrackElementList.prototype[prop];
                  }
                }
              }
              list.trackElements_ = [];
              Object.defineProperty(list, "length", {
                get: function get() {
                  return this.trackElements_.length;
                },
              });
              for (var i = 0, length = trackElements.length; i < length; i++) {
                list.addTrackElement_(trackElements[i]);
              }
              if (browser.IS_IE8) {
                return list;
              }
            }
            HtmlTrackElementList.prototype.addTrackElement_ =
              function addTrackElement_(trackElement) {
                var index = this.trackElements_.length;
                if (!("" + index in this)) {
                  Object.defineProperty(this, index, {
                    get: function get() {
                      return this.trackElements_[index];
                    },
                  });
                }
                if (this.trackElements_.indexOf(trackElement) === -1) {
                  this.trackElements_.push(trackElement);
                }
              };
            HtmlTrackElementList.prototype.getTrackElementByTrack_ =
              function getTrackElementByTrack_(track) {
                var trackElement_ = void 0;
                for (
                  var i = 0, length = this.trackElements_.length;
                  i < length;
                  i++
                ) {
                  if (track === this.trackElements_[i].track) {
                    trackElement_ = this.trackElements_[i];
                    break;
                  }
                }
                return trackElement_;
              };
            HtmlTrackElementList.prototype.removeTrackElement_ =
              function removeTrackElement_(trackElement) {
                for (
                  var i = 0, length = this.trackElements_.length;
                  i < length;
                  i++
                ) {
                  if (trackElement === this.trackElements_[i]) {
                    this.trackElements_.splice(i, 1);
                    break;
                  }
                }
              };
            return HtmlTrackElementList;
          })();
          exports["default"] = HtmlTrackElementList;
        },
        { 78: 78, 94: 94 },
      ],
      66: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _eventTarget = _dereq_(42);
          var _eventTarget2 = _interopRequireDefault(_eventTarget);
          var _textTrack = _dereq_(72);
          var _textTrack2 = _interopRequireDefault(_textTrack);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var NONE = 0;
          var LOADING = 1;
          var LOADED = 2;
          var ERROR = 3;
          var HTMLTrackElement = (function (_EventTarget) {
            _inherits(HTMLTrackElement, _EventTarget);
            function HTMLTrackElement() {
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, HTMLTrackElement);
              var _this = _possibleConstructorReturn(
                this,
                _EventTarget.call(this)
              );
              var readyState = void 0;
              var trackElement = _this;
              if (browser.IS_IE8) {
                trackElement = _document2["default"].createElement("custom");
                for (var prop in HTMLTrackElement.prototype) {
                  if (prop !== "constructor") {
                    trackElement[prop] = HTMLTrackElement.prototype[prop];
                  }
                }
              }
              var track = new _textTrack2["default"](options);
              trackElement.kind = track.kind;
              trackElement.src = track.src;
              trackElement.srclang = track.language;
              trackElement.label = track.label;
              trackElement["default"] = track["default"];
              Object.defineProperty(trackElement, "readyState", {
                get: function get() {
                  return readyState;
                },
              });
              Object.defineProperty(trackElement, "track", {
                get: function get() {
                  return track;
                },
              });
              readyState = NONE;
              track.addEventListener("loadeddata", function () {
                readyState = LOADED;
                trackElement.trigger({ type: "load", target: trackElement });
              });
              if (browser.IS_IE8) {
                var _ret;
                return (
                  (_ret = trackElement), _possibleConstructorReturn(_this, _ret)
                );
              }
              return _this;
            }
            return HTMLTrackElement;
          })(_eventTarget2["default"]);
          HTMLTrackElement.prototype.allowedEvents_ = { load: "load" };
          HTMLTrackElement.NONE = NONE;
          HTMLTrackElement.LOADING = LOADING;
          HTMLTrackElement.LOADED = LOADED;
          HTMLTrackElement.ERROR = ERROR;
          exports["default"] = HTMLTrackElement;
        },
        { 42: 42, 72: 72, 78: 78, 94: 94 },
      ],
      67: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var TextTrackCueList = (function () {
            function TextTrackCueList(cues) {
              _classCallCheck(this, TextTrackCueList);
              var list = this;
              if (browser.IS_IE8) {
                list = _document2["default"].createElement("custom");
                for (var prop in TextTrackCueList.prototype) {
                  if (prop !== "constructor") {
                    list[prop] = TextTrackCueList.prototype[prop];
                  }
                }
              }
              TextTrackCueList.prototype.setCues_.call(list, cues);
              Object.defineProperty(list, "length", {
                get: function get() {
                  return this.length_;
                },
              });
              if (browser.IS_IE8) {
                return list;
              }
            }
            TextTrackCueList.prototype.setCues_ = function setCues_(cues) {
              var oldLength = this.length || 0;
              var i = 0;
              var l = cues.length;
              this.cues_ = cues;
              this.length_ = cues.length;
              var defineProp = function defineProp(index) {
                if (!("" + index in this)) {
                  Object.defineProperty(this, "" + index, {
                    get: function get() {
                      return this.cues_[index];
                    },
                  });
                }
              };
              if (oldLength < l) {
                i = oldLength;
                for (; i < l; i++) {
                  defineProp.call(this, i);
                }
              }
            };
            TextTrackCueList.prototype.getCueById = function getCueById(id) {
              var result = null;
              for (var i = 0, l = this.length; i < l; i++) {
                var cue = this[i];
                if (cue.id === id) {
                  result = cue;
                  break;
                }
              }
              return result;
            };
            return TextTrackCueList;
          })();
          exports["default"] = TextTrackCueList;
        },
        { 78: 78, 94: 94 },
      ],
      68: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var darkGray = "#222";
          var lightGray = "#ccc";
          var fontMap = {
            monospace: "monospace",
            sansSerif: "sans-serif",
            serif: "serif",
            monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
            monospaceSerif: '"Courier New", monospace',
            proportionalSansSerif: "sans-serif",
            proportionalSerif: "serif",
            casual: '"Comic Sans MS", Impact, fantasy',
            script: '"Monotype Corsiva", cursive',
            smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif',
          };
          function constructColor(color, opacity) {
            return (
              "rgba(" +
              parseInt(color[1] + color[1], 16) +
              "," +
              parseInt(color[2] + color[2], 16) +
              "," +
              parseInt(color[3] + color[3], 16) +
              "," +
              opacity +
              ")"
            );
          }
          function tryUpdateStyle(el, style, rule) {
            try {
              el.style[style] = rule;
            } catch (e) {
              return;
            }
          }
          var TextTrackDisplay = (function (_Component) {
            _inherits(TextTrackDisplay, _Component);
            function TextTrackDisplay(player, options, ready) {
              _classCallCheck(this, TextTrackDisplay);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options, ready)
              );
              player.on("loadstart", Fn.bind(_this, _this.toggleDisplay));
              player.on("texttrackchange", Fn.bind(_this, _this.updateDisplay));
              player.ready(
                Fn.bind(_this, function () {
                  if (player.tech_ && player.tech_.featuresNativeTextTracks) {
                    this.hide();
                    return;
                  }
                  player.on(
                    "fullscreenchange",
                    Fn.bind(this, this.updateDisplay)
                  );
                  var tracks = this.options_.playerOptions.tracks || [];
                  for (var i = 0; i < tracks.length; i++) {
                    this.player_.addRemoteTextTrack(tracks[i], true);
                  }
                  var modes = { captions: 1, subtitles: 1 };
                  var trackList = this.player_.textTracks();
                  var firstDesc = void 0;
                  var firstCaptions = void 0;
                  if (trackList) {
                    for (var _i = 0; _i < trackList.length; _i++) {
                      var track = trackList[_i];
                      if (track["default"]) {
                        if (track.kind === "descriptions" && !firstDesc) {
                          firstDesc = track;
                        } else if (track.kind in modes && !firstCaptions) {
                          firstCaptions = track;
                        }
                      }
                    }
                    if (firstCaptions) {
                      firstCaptions.mode = "showing";
                    } else if (firstDesc) {
                      firstDesc.mode = "showing";
                    }
                  }
                })
              );
              return _this;
            }
            TextTrackDisplay.prototype.toggleDisplay =
              function toggleDisplay() {
                if (
                  this.player_.tech_ &&
                  this.player_.tech_.featuresNativeTextTracks
                ) {
                  this.hide();
                } else {
                  this.show();
                }
              };
            TextTrackDisplay.prototype.createEl = function createEl() {
              return _Component.prototype.createEl.call(
                this,
                "div",
                { className: "vjs-text-track-display" },
                { "aria-live": "off", "aria-atomic": "true" }
              );
            };
            TextTrackDisplay.prototype.clearDisplay = function clearDisplay() {
              if (typeof _window2["default"].WebVTT === "function") {
                _window2["default"].WebVTT.processCues(
                  _window2["default"],
                  [],
                  this.el_
                );
              }
            };
            TextTrackDisplay.prototype.updateDisplay =
              function updateDisplay() {
                var tracks = this.player_.textTracks();
                this.clearDisplay();
                if (!tracks) {
                  return;
                }
                var descriptionsTrack = null;
                var captionsSubtitlesTrack = null;
                var i = tracks.length;
                while (i--) {
                  var track = tracks[i];
                  if (track.mode === "showing") {
                    if (track.kind === "descriptions") {
                      descriptionsTrack = track;
                    } else {
                      captionsSubtitlesTrack = track;
                    }
                  }
                }
                if (captionsSubtitlesTrack) {
                  if (this.getAttribute("aria-live") !== "off") {
                    this.setAttribute("aria-live", "off");
                  }
                  this.updateForTrack(captionsSubtitlesTrack);
                } else if (descriptionsTrack) {
                  if (this.getAttribute("aria-live") !== "assertive") {
                    this.setAttribute("aria-live", "assertive");
                  }
                  this.updateForTrack(descriptionsTrack);
                }
              };
            TextTrackDisplay.prototype.updateForTrack = function updateForTrack(
              track
            ) {
              if (
                typeof _window2["default"].WebVTT !== "function" ||
                !track.activeCues
              ) {
                return;
              }
              var overrides = this.player_.textTrackSettings.getValues();
              var cues = [];
              for (var _i2 = 0; _i2 < track.activeCues.length; _i2++) {
                cues.push(track.activeCues[_i2]);
              }
              _window2["default"].WebVTT.processCues(
                _window2["default"],
                cues,
                this.el_
              );
              var i = cues.length;
              while (i--) {
                var cue = cues[i];
                if (!cue) {
                  continue;
                }
                var cueDiv = cue.displayState;
                if (overrides.color) {
                  cueDiv.firstChild.style.color = overrides.color;
                }
                if (overrides.textOpacity) {
                  tryUpdateStyle(
                    cueDiv.firstChild,
                    "color",
                    constructColor(
                      overrides.color || "#fff",
                      overrides.textOpacity
                    )
                  );
                }
                if (overrides.backgroundColor) {
                  cueDiv.firstChild.style.backgroundColor =
                    overrides.backgroundColor;
                }
                if (overrides.backgroundOpacity) {
                  tryUpdateStyle(
                    cueDiv.firstChild,
                    "backgroundColor",
                    constructColor(
                      overrides.backgroundColor || "#000",
                      overrides.backgroundOpacity
                    )
                  );
                }
                if (overrides.windowColor) {
                  if (overrides.windowOpacity) {
                    tryUpdateStyle(
                      cueDiv,
                      "backgroundColor",
                      constructColor(
                        overrides.windowColor,
                        overrides.windowOpacity
                      )
                    );
                  } else {
                    cueDiv.style.backgroundColor = overrides.windowColor;
                  }
                }
                if (overrides.edgeStyle) {
                  if (overrides.edgeStyle === "dropshadow") {
                    cueDiv.firstChild.style.textShadow =
                      "2px 2px 3px " +
                      darkGray +
                      ", 2px 2px 4px " +
                      darkGray +
                      ", 2px 2px 5px " +
                      darkGray;
                  } else if (overrides.edgeStyle === "raised") {
                    cueDiv.firstChild.style.textShadow =
                      "1px 1px " +
                      darkGray +
                      ", 2px 2px " +
                      darkGray +
                      ", 3px 3px " +
                      darkGray;
                  } else if (overrides.edgeStyle === "depressed") {
                    cueDiv.firstChild.style.textShadow =
                      "1px 1px " +
                      lightGray +
                      ", 0 1px " +
                      lightGray +
                      ", -1px -1px " +
                      darkGray +
                      ", 0 -1px " +
                      darkGray;
                  } else if (overrides.edgeStyle === "uniform") {
                    cueDiv.firstChild.style.textShadow =
                      "0 0 4px " +
                      darkGray +
                      ", 0 0 4px " +
                      darkGray +
                      ", 0 0 4px " +
                      darkGray +
                      ", 0 0 4px " +
                      darkGray;
                  }
                }
                if (overrides.fontPercent && overrides.fontPercent !== 1) {
                  var fontSize = _window2["default"].parseFloat(
                    cueDiv.style.fontSize
                  );
                  cueDiv.style.fontSize =
                    fontSize * overrides.fontPercent + "px";
                  cueDiv.style.height = "auto";
                  cueDiv.style.top = "auto";
                  cueDiv.style.bottom = "2px";
                }
                if (
                  overrides.fontFamily &&
                  overrides.fontFamily !== "default"
                ) {
                  if (overrides.fontFamily === "small-caps") {
                    cueDiv.firstChild.style.fontVariant = "small-caps";
                  } else {
                    cueDiv.firstChild.style.fontFamily =
                      fontMap[overrides.fontFamily];
                  }
                }
              }
            };
            return TextTrackDisplay;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "TextTrackDisplay",
            TextTrackDisplay
          );
          exports["default"] = TextTrackDisplay;
        },
        { 5: 5, 83: 83, 95: 95 },
      ],
      69: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var trackToJson_ = function trackToJson_(track) {
            var ret = [
              "kind",
              "label",
              "language",
              "id",
              "inBandMetadataTrackDispatchType",
              "mode",
              "src",
            ].reduce(
              function (acc, prop, i) {
                if (track[prop]) {
                  acc[prop] = track[prop];
                }
                return acc;
              },
              {
                cues:
                  track.cues &&
                  Array.prototype.map.call(track.cues, function (cue) {
                    return {
                      startTime: cue.startTime,
                      endTime: cue.endTime,
                      text: cue.text,
                      id: cue.id,
                    };
                  }),
              }
            );
            return ret;
          };
          var textTracksToJson = function textTracksToJson(tech) {
            var trackEls = tech.$$("track");
            var trackObjs = Array.prototype.map.call(trackEls, function (t) {
              return t.track;
            });
            var tracks = Array.prototype.map.call(trackEls, function (trackEl) {
              var json = trackToJson_(trackEl.track);
              if (trackEl.src) {
                json.src = trackEl.src;
              }
              return json;
            });
            return tracks.concat(
              Array.prototype.filter
                .call(tech.textTracks(), function (track) {
                  return trackObjs.indexOf(track) === -1;
                })
                .map(trackToJson_)
            );
          };
          var jsonToTextTracks = function jsonToTextTracks(json, tech) {
            json.forEach(function (track) {
              var addedTrack = tech.addRemoteTextTrack(track).track;
              if (!track.src && track.cues) {
                track.cues.forEach(function (cue) {
                  return addedTrack.addCue(cue);
                });
              }
            });
            return tech.textTracks();
          };
          exports["default"] = {
            textTracksToJson: textTracksToJson,
            jsonToTextTracks: jsonToTextTracks,
            trackToJson_: trackToJson_,
          };
        },
        {},
      ],
      70: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackList = _dereq_(74);
          var _trackList2 = _interopRequireDefault(_trackList);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TextTrackList = (function (_TrackList) {
            _inherits(TextTrackList, _TrackList);
            function TextTrackList() {
              var _this, _ret;
              var tracks =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              _classCallCheck(this, TextTrackList);
              var list = void 0;
              if (browser.IS_IE8) {
                list = _document2["default"].createElement("custom");
                for (var prop in _trackList2["default"].prototype) {
                  if (prop !== "constructor") {
                    list[prop] = _trackList2["default"].prototype[prop];
                  }
                }
                for (var _prop in TextTrackList.prototype) {
                  if (_prop !== "constructor") {
                    list[_prop] = TextTrackList.prototype[_prop];
                  }
                }
              }
              list =
                ((_this = _possibleConstructorReturn(
                  this,
                  _TrackList.call(this, tracks, list)
                )),
                _this);
              return (_ret = list), _possibleConstructorReturn(_this, _ret);
            }
            TextTrackList.prototype.addTrack_ = function addTrack_(track) {
              _TrackList.prototype.addTrack_.call(this, track);
              track.addEventListener(
                "modechange",
                Fn.bind(this, function () {
                  this.trigger("change");
                })
              );
            };
            return TextTrackList;
          })(_trackList2["default"]);
          exports["default"] = TextTrackList;
        },
        { 74: 74, 78: 78, 83: 83, 94: 94 },
      ],
      71: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _dom = _dereq_(81);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _obj = _dereq_(88);
          var Obj = _interopRequireWildcard(_obj);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var LOCAL_STORAGE_KEY = "vjs-text-track-settings";
          var COLOR_BLACK = ["#000", "Black"];
          var COLOR_BLUE = ["#00F", "Blue"];
          var COLOR_CYAN = ["#0FF", "Cyan"];
          var COLOR_GREEN = ["#0F0", "Green"];
          var COLOR_MAGENTA = ["#F0F", "Magenta"];
          var COLOR_RED = ["#F00", "Red"];
          var COLOR_WHITE = ["#FFF", "White"];
          var COLOR_YELLOW = ["#FF0", "Yellow"];
          var OPACITY_OPAQUE = ["1", "Opaque"];
          var OPACITY_SEMI = ["0.5", "Semi-Transparent"];
          var OPACITY_TRANS = ["0", "Transparent"];
          var selectConfigs = {
            backgroundColor: {
              selector: ".vjs-bg-color > select",
              id: "captions-background-color-%s",
              label: "Color",
              options: [
                COLOR_BLACK,
                COLOR_WHITE,
                COLOR_RED,
                COLOR_GREEN,
                COLOR_BLUE,
                COLOR_YELLOW,
                COLOR_MAGENTA,
                COLOR_CYAN,
              ],
            },
            backgroundOpacity: {
              selector: ".vjs-bg-opacity > select",
              id: "captions-background-opacity-%s",
              label: "Transparency",
              options: [OPACITY_OPAQUE, OPACITY_SEMI, OPACITY_TRANS],
            },
            color: {
              selector: ".vjs-fg-color > select",
              id: "captions-foreground-color-%s",
              label: "Color",
              options: [
                COLOR_WHITE,
                COLOR_BLACK,
                COLOR_RED,
                COLOR_GREEN,
                COLOR_BLUE,
                COLOR_YELLOW,
                COLOR_MAGENTA,
                COLOR_CYAN,
              ],
            },
            edgeStyle: {
              selector: ".vjs-edge-style > select",
              id: "%s",
              label: "Text Edge Style",
              options: [
                ["none", "None"],
                ["raised", "Raised"],
                ["depressed", "Depressed"],
                ["uniform", "Uniform"],
                ["dropshadow", "Dropshadow"],
              ],
            },
            fontFamily: {
              selector: ".vjs-font-family > select",
              id: "captions-font-family-%s",
              label: "Font Family",
              options: [
                ["proportionalSansSerif", "Proportional Sans-Serif"],
                ["monospaceSansSerif", "Monospace Sans-Serif"],
                ["proportionalSerif", "Proportional Serif"],
                ["monospaceSerif", "Monospace Serif"],
                ["casual", "Casual"],
                ["script", "Script"],
                ["small-caps", "Small Caps"],
              ],
            },
            fontPercent: {
              selector: ".vjs-font-percent > select",
              id: "captions-font-size-%s",
              label: "Font Size",
              options: [
                ["0.50", "50%"],
                ["0.75", "75%"],
                ["1.00", "100%"],
                ["1.25", "125%"],
                ["1.50", "150%"],
                ["1.75", "175%"],
                ["2.00", "200%"],
                ["3.00", "300%"],
                ["4.00", "400%"],
              ],
              default: 2,
              parser: function parser(v) {
                return v === "1.00" ? null : Number(v);
              },
            },
            textOpacity: {
              selector: ".vjs-text-opacity > select",
              id: "captions-foreground-opacity-%s",
              label: "Transparency",
              options: [OPACITY_OPAQUE, OPACITY_SEMI],
            },
            windowColor: {
              selector: ".vjs-window-color > select",
              id: "captions-window-color-%s",
              label: "Color",
            },
            windowOpacity: {
              selector: ".vjs-window-opacity > select",
              id: "captions-window-opacity-%s",
              label: "Transparency",
              options: [OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE],
            },
          };
          selectConfigs.windowColor.options =
            selectConfigs.backgroundColor.options;
          function parseOptionValue(value, parser) {
            if (parser) {
              value = parser(value);
            }
            if (value && value !== "none") {
              return value;
            }
          }
          function getSelectedOptionValue(el, parser) {
            var value = el.options[el.options.selectedIndex].value;
            return parseOptionValue(value, parser);
          }
          function setSelectedOption(el, value, parser) {
            if (!value) {
              return;
            }
            for (var i = 0; i < el.options.length; i++) {
              if (parseOptionValue(el.options[i].value, parser) === value) {
                el.selectedIndex = i;
                break;
              }
            }
          }
          var TextTrackSettings = (function (_Component) {
            _inherits(TextTrackSettings, _Component);
            function TextTrackSettings(player, options) {
              _classCallCheck(this, TextTrackSettings);
              var _this = _possibleConstructorReturn(
                this,
                _Component.call(this, player, options)
              );
              _this.setDefaults();
              _this.hide();
              _this.updateDisplay = Fn.bind(_this, _this.updateDisplay);
              if (options.persistTextTrackSettings === undefined) {
                _this.options_.persistTextTrackSettings =
                  _this.options_.playerOptions.persistTextTrackSettings;
              }
              _this.on(_this.$(".vjs-done-button"), "click", function () {
                _this.saveSettings();
                _this.hide();
              });
              _this.on(_this.$(".vjs-default-button"), "click", function () {
                _this.setDefaults();
                _this.updateDisplay();
              });
              Obj.each(selectConfigs, function (config) {
                _this.on(
                  _this.$(config.selector),
                  "change",
                  _this.updateDisplay
                );
              });
              if (_this.options_.persistTextTrackSettings) {
                _this.restoreSettings();
              }
              return _this;
            }
            TextTrackSettings.prototype.createElSelect_ =
              function createElSelect_(key) {
                var _this2 = this;
                var config = selectConfigs[key];
                var id = config.id.replace("%s", this.id_);
                return [
                  (0, _dom.createEl)(
                    "label",
                    { className: "vjs-label", textContent: config.label },
                    { for: id }
                  ),
                  (0, _dom.createEl)(
                    "select",
                    { id: id },
                    undefined,
                    config.options.map(function (o) {
                      return (0,
                      _dom.createEl)("option", { textContent: _this2.localize(o[1]), value: o[0] });
                    })
                  ),
                ];
              };
            TextTrackSettings.prototype.createElFgColor_ =
              function createElFgColor_() {
                var legend = (0, _dom.createEl)("legend", {
                  textContent: this.localize("Text"),
                });
                var select = this.createElSelect_("color");
                var opacity = (0, _dom.createEl)(
                  "span",
                  { className: "vjs-text-opacity vjs-opacity" },
                  undefined,
                  this.createElSelect_("textOpacity")
                );
                return (0, _dom.createEl)(
                  "fieldset",
                  { className: "vjs-fg-color vjs-tracksetting" },
                  undefined,
                  [legend].concat(select, opacity)
                );
              };
            TextTrackSettings.prototype.createElBgColor_ =
              function createElBgColor_() {
                var legend = (0, _dom.createEl)("legend", {
                  textContent: this.localize("Background"),
                });
                var select = this.createElSelect_("backgroundColor");
                var opacity = (0, _dom.createEl)(
                  "span",
                  { className: "vjs-bg-opacity vjs-opacity" },
                  undefined,
                  this.createElSelect_("backgroundOpacity")
                );
                return (0, _dom.createEl)(
                  "fieldset",
                  { className: "vjs-bg-color vjs-tracksetting" },
                  undefined,
                  [legend].concat(select, opacity)
                );
              };
            TextTrackSettings.prototype.createElWinColor_ =
              function createElWinColor_() {
                var legend = (0, _dom.createEl)("legend", {
                  textContent: this.localize("Window"),
                });
                var select = this.createElSelect_("windowColor");
                var opacity = (0, _dom.createEl)(
                  "span",
                  { className: "vjs-window-opacity vjs-opacity" },
                  undefined,
                  this.createElSelect_("windowOpacity")
                );
                return (0, _dom.createEl)(
                  "fieldset",
                  { className: "vjs-window-color vjs-tracksetting" },
                  undefined,
                  [legend].concat(select, opacity)
                );
              };
            TextTrackSettings.prototype.createElColors_ =
              function createElColors_() {
                return (0, _dom.createEl)(
                  "div",
                  { className: "vjs-tracksettings-colors" },
                  undefined,
                  [
                    this.createElFgColor_(),
                    this.createElBgColor_(),
                    this.createElWinColor_(),
                  ]
                );
              };
            TextTrackSettings.prototype.createElFont_ =
              function createElFont_() {
                var fontPercent = (0, _dom.createEl)(
                  "div",
                  { className: "vjs-font-percent vjs-tracksetting" },
                  undefined,
                  this.createElSelect_("fontPercent")
                );
                var edgeStyle = (0, _dom.createEl)(
                  "div",
                  { className: "vjs-edge-style vjs-tracksetting" },
                  undefined,
                  this.createElSelect_("edgeStyle")
                );
                var fontFamily = (0, _dom.createEl)(
                  "div",
                  { className: "vjs-font-family vjs-tracksetting" },
                  undefined,
                  this.createElSelect_("fontFamily")
                );
                return (0, _dom.createEl)(
                  "div",
                  { className: "vjs-tracksettings-font" },
                  undefined,
                  [fontPercent, edgeStyle, fontFamily]
                );
              };
            TextTrackSettings.prototype.createElControls_ =
              function createElControls_() {
                var defaultsButton = (0, _dom.createEl)("button", {
                  className: "vjs-default-button",
                  textContent: this.localize("Defaults"),
                });
                var doneButton = (0, _dom.createEl)("button", {
                  className: "vjs-done-button",
                  textContent: "Done",
                });
                return (0, _dom.createEl)(
                  "div",
                  { className: "vjs-tracksettings-controls" },
                  undefined,
                  [defaultsButton, doneButton]
                );
              };
            TextTrackSettings.prototype.createEl = function createEl() {
              var settings = (0, _dom.createEl)(
                "div",
                { className: "vjs-tracksettings" },
                undefined,
                [
                  this.createElColors_(),
                  this.createElFont_(),
                  this.createElControls_(),
                ]
              );
              var heading = (0, _dom.createEl)(
                "div",
                {
                  className: "vjs-control-text",
                  id: "TTsettingsDialogLabel-" + this.id_,
                  textContent: "Caption Settings Dialog",
                },
                { "aria-level": "1", role: "heading" }
              );
              var description = (0, _dom.createEl)("div", {
                className: "vjs-control-text",
                id: "TTsettingsDialogDescription-" + this.id_,
                textContent:
                  "Beginning of dialog window. Escape will cancel and close the window.",
              });
              var doc = (0, _dom.createEl)(
                "div",
                undefined,
                { role: "document" },
                [heading, description, settings]
              );
              return (0, _dom.createEl)(
                "div",
                {
                  className: "vjs-caption-settings vjs-modal-overlay",
                  tabIndex: -1,
                },
                {
                  role: "dialog",
                  "aria-labelledby": heading.id,
                  "aria-describedby": description.id,
                },
                doc
              );
            };
            TextTrackSettings.prototype.getValues = function getValues() {
              var _this3 = this;
              return Obj.reduce(
                selectConfigs,
                function (accum, config, key) {
                  var value = getSelectedOptionValue(
                    _this3.$(config.selector),
                    config.parser
                  );
                  if (value !== undefined) {
                    accum[key] = value;
                  }
                  return accum;
                },
                {}
              );
            };
            TextTrackSettings.prototype.setValues = function setValues(values) {
              var _this4 = this;
              Obj.each(selectConfigs, function (config, key) {
                setSelectedOption(
                  _this4.$(config.selector),
                  values[key],
                  config.parser
                );
              });
            };
            TextTrackSettings.prototype.setDefaults = function setDefaults() {
              var _this5 = this;
              Obj.each(selectConfigs, function (config) {
                var index = config.hasOwnProperty("default")
                  ? config["default"]
                  : 0;
                _this5.$(config.selector).selectedIndex = index;
              });
            };
            TextTrackSettings.prototype.restoreSettings =
              function restoreSettings() {
                var values = void 0;
                try {
                  values = JSON.parse(
                    _window2["default"].localStorage.getItem(LOCAL_STORAGE_KEY)
                  );
                } catch (err) {
                  _log2["default"].warn(err);
                }
                if (values) {
                  this.setValues(values);
                }
              };
            TextTrackSettings.prototype.saveSettings = function saveSettings() {
              if (!this.options_.persistTextTrackSettings) {
                return;
              }
              var values = this.getValues();
              try {
                if (Object.keys(values).length) {
                  _window2["default"].localStorage.setItem(
                    LOCAL_STORAGE_KEY,
                    JSON.stringify(values)
                  );
                } else {
                  _window2["default"].localStorage.removeItem(
                    LOCAL_STORAGE_KEY
                  );
                }
              } catch (err) {
                _log2["default"].warn(err);
              }
            };
            TextTrackSettings.prototype.updateDisplay =
              function updateDisplay() {
                var ttDisplay = this.player_.getChild("textTrackDisplay");
                if (ttDisplay) {
                  ttDisplay.updateDisplay();
                }
              };
            return TextTrackSettings;
          })(_component2["default"]);
          _component2["default"].registerComponent(
            "TextTrackSettings",
            TextTrackSettings
          );
          exports["default"] = TextTrackSettings;
        },
        { 5: 5, 81: 81, 83: 83, 86: 86, 88: 88, 95: 95 },
      ],
      72: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _textTrackCueList = _dereq_(67);
          var _textTrackCueList2 = _interopRequireDefault(_textTrackCueList);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _trackEnums = _dereq_(73);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _track = _dereq_(75);
          var _track2 = _interopRequireDefault(_track);
          var _url = _dereq_(92);
          var _xhr = _dereq_(99);
          var _xhr2 = _interopRequireDefault(_xhr);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var parseCues = function parseCues(srcContent, track) {
            var parser = new _window2["default"].WebVTT.Parser(
              _window2["default"],
              _window2["default"].vttjs,
              _window2["default"].WebVTT.StringDecoder()
            );
            var errors = [];
            parser.oncue = function (cue) {
              track.addCue(cue);
            };
            parser.onparsingerror = function (error) {
              errors.push(error);
            };
            parser.onflush = function () {
              track.trigger({ type: "loadeddata", target: track });
            };
            parser.parse(srcContent);
            if (errors.length > 0) {
              if (
                _window2["default"].console &&
                _window2["default"].console.groupCollapsed
              ) {
                _window2["default"].console.groupCollapsed(
                  "Text Track parsing errors for " + track.src
                );
              }
              errors.forEach(function (error) {
                return _log2["default"].error(error);
              });
              if (
                _window2["default"].console &&
                _window2["default"].console.groupEnd
              ) {
                _window2["default"].console.groupEnd();
              }
            }
            parser.flush();
          };
          var loadTrack = function loadTrack(src, track) {
            var opts = { uri: src };
            var crossOrigin = (0, _url.isCrossOrigin)(src);
            if (crossOrigin) {
              opts.cors = crossOrigin;
            }
            (0, _xhr2["default"])(
              opts,
              Fn.bind(this, function (err, response, responseBody) {
                if (err) {
                  return _log2["default"].error(err, response);
                }
                track.loaded_ = true;
                if (typeof _window2["default"].WebVTT !== "function") {
                  if (track.tech_) {
                    var loadHandler = function loadHandler() {
                      return parseCues(responseBody, track);
                    };
                    track.tech_.on("vttjsloaded", loadHandler);
                    track.tech_.on("vttjserror", function () {
                      _log2["default"].error(
                        "vttjs failed to load, stopping trying to process " +
                          track.src
                      );
                      track.tech_.off("vttjsloaded", loadHandler);
                    });
                  }
                } else {
                  parseCues(responseBody, track);
                }
              })
            );
          };
          var TextTrack = (function (_Track) {
            _inherits(TextTrack, _Track);
            function TextTrack() {
              var _this, _ret;
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, TextTrack);
              if (!options.tech) {
                throw new Error("A tech was not provided.");
              }
              var settings = (0, _mergeOptions2["default"])(options, {
                kind: _trackEnums.TextTrackKind[options.kind] || "subtitles",
                language: options.language || options.srclang || "",
              });
              var mode = _trackEnums.TextTrackMode[settings.mode] || "disabled";
              var default_ = settings["default"];
              if (
                settings.kind === "metadata" ||
                settings.kind === "chapters"
              ) {
                mode = "hidden";
              }
              var tt =
                ((_this = _possibleConstructorReturn(
                  this,
                  _Track.call(this, settings)
                )),
                _this);
              tt.tech_ = settings.tech;
              if (browser.IS_IE8) {
                for (var prop in TextTrack.prototype) {
                  if (prop !== "constructor") {
                    tt[prop] = TextTrack.prototype[prop];
                  }
                }
              }
              tt.cues_ = [];
              tt.activeCues_ = [];
              var cues = new _textTrackCueList2["default"](tt.cues_);
              var activeCues = new _textTrackCueList2["default"](
                tt.activeCues_
              );
              var changed = false;
              var timeupdateHandler = Fn.bind(tt, function () {
                this.activeCues;
                if (changed) {
                  this.trigger("cuechange");
                  changed = false;
                }
              });
              if (mode !== "disabled") {
                tt.tech_.ready(function () {
                  tt.tech_.on("timeupdate", timeupdateHandler);
                }, true);
              }
              Object.defineProperty(tt, "default", {
                get: function get() {
                  return default_;
                },
                set: function set() {},
              });
              Object.defineProperty(tt, "mode", {
                get: function get() {
                  return mode;
                },
                set: function set(newMode) {
                  var _this2 = this;
                  if (!_trackEnums.TextTrackMode[newMode]) {
                    return;
                  }
                  mode = newMode;
                  if (mode === "showing") {
                    this.tech_.ready(function () {
                      _this2.tech_.on("timeupdate", timeupdateHandler);
                    }, true);
                  }
                  this.trigger("modechange");
                },
              });
              Object.defineProperty(tt, "cues", {
                get: function get() {
                  if (!this.loaded_) {
                    return null;
                  }
                  return cues;
                },
                set: function set() {},
              });
              Object.defineProperty(tt, "activeCues", {
                get: function get() {
                  if (!this.loaded_) {
                    return null;
                  }
                  if (this.cues.length === 0) {
                    return activeCues;
                  }
                  var ct = this.tech_.currentTime();
                  var active = [];
                  for (var i = 0, l = this.cues.length; i < l; i++) {
                    var cue = this.cues[i];
                    if (cue.startTime <= ct && cue.endTime >= ct) {
                      active.push(cue);
                    } else if (
                      cue.startTime === cue.endTime &&
                      cue.startTime <= ct &&
                      cue.startTime + 0.5 >= ct
                    ) {
                      active.push(cue);
                    }
                  }
                  changed = false;
                  if (active.length !== this.activeCues_.length) {
                    changed = true;
                  } else {
                    for (var _i = 0; _i < active.length; _i++) {
                      if (this.activeCues_.indexOf(active[_i]) === -1) {
                        changed = true;
                      }
                    }
                  }
                  this.activeCues_ = active;
                  activeCues.setCues_(this.activeCues_);
                  return activeCues;
                },
                set: function set() {},
              });
              if (settings.src) {
                tt.src = settings.src;
                loadTrack(settings.src, tt);
              } else {
                tt.loaded_ = true;
              }
              return (_ret = tt), _possibleConstructorReturn(_this, _ret);
            }
            TextTrack.prototype.addCue = function addCue(originalCue) {
              var cue = originalCue;
              if (
                _window2["default"].vttjs &&
                !(originalCue instanceof _window2["default"].vttjs.VTTCue)
              ) {
                cue = new _window2["default"].vttjs.VTTCue(
                  originalCue.startTime,
                  originalCue.endTime,
                  originalCue.text
                );
                for (var prop in originalCue) {
                  if (!(prop in cue)) {
                    cue[prop] = originalCue[prop];
                  }
                }
                cue.id = originalCue.id;
                cue.originalCue_ = originalCue;
              }
              var tracks = this.tech_.textTracks();
              if (tracks) {
                for (var i = 0; i < tracks.length; i++) {
                  if (tracks[i] !== this) {
                    tracks[i].removeCue(cue);
                  }
                }
              }
              this.cues_.push(cue);
              this.cues.setCues_(this.cues_);
            };
            TextTrack.prototype.removeCue = function removeCue(_removeCue) {
              var i = this.cues_.length;
              while (i--) {
                var cue = this.cues_[i];
                if (
                  cue === _removeCue ||
                  (cue.originalCue_ && cue.originalCue_ === _removeCue)
                ) {
                  this.cues_.splice(i, 1);
                  this.cues.setCues_(this.cues_);
                  break;
                }
              }
            };
            return TextTrack;
          })(_track2["default"]);
          TextTrack.prototype.allowedEvents_ = { cuechange: "cuechange" };
          exports["default"] = TextTrack;
        },
        {
          67: 67,
          73: 73,
          75: 75,
          78: 78,
          83: 83,
          86: 86,
          87: 87,
          92: 92,
          95: 95,
          99: 99,
        },
      ],
      73: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var VideoTrackKind = (exports.VideoTrackKind = {
            alternative: "alternative",
            captions: "captions",
            main: "main",
            sign: "sign",
            subtitles: "subtitles",
            commentary: "commentary",
          });
          var AudioTrackKind = (exports.AudioTrackKind = {
            alternative: "alternative",
            descriptions: "descriptions",
            main: "main",
            "main-desc": "main-desc",
            translation: "translation",
            commentary: "commentary",
          });
          var TextTrackKind = (exports.TextTrackKind = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata",
          });
          var TextTrackMode = (exports.TextTrackMode = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing",
          });
        },
        {},
      ],
      74: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _eventTarget = _dereq_(42);
          var _eventTarget2 = _interopRequireDefault(_eventTarget);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var TrackList = (function (_EventTarget) {
            _inherits(TrackList, _EventTarget);
            function TrackList() {
              var tracks =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              var _ret;
              var list =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;
              _classCallCheck(this, TrackList);
              var _this = _possibleConstructorReturn(
                this,
                _EventTarget.call(this)
              );
              if (!list) {
                list = _this;
                if (browser.IS_IE8) {
                  list = _document2["default"].createElement("custom");
                  for (var prop in TrackList.prototype) {
                    if (prop !== "constructor") {
                      list[prop] = TrackList.prototype[prop];
                    }
                  }
                }
              }
              list.tracks_ = [];
              Object.defineProperty(list, "length", {
                get: function get() {
                  return this.tracks_.length;
                },
              });
              for (var i = 0; i < tracks.length; i++) {
                list.addTrack_(tracks[i]);
              }
              return (_ret = list), _possibleConstructorReturn(_this, _ret);
            }
            TrackList.prototype.addTrack_ = function addTrack_(track) {
              var index = this.tracks_.length;
              if (!("" + index in this)) {
                Object.defineProperty(this, index, {
                  get: function get() {
                    return this.tracks_[index];
                  },
                });
              }
              if (this.tracks_.indexOf(track) === -1) {
                this.tracks_.push(track);
                this.trigger({ track: track, type: "addtrack" });
              }
            };
            TrackList.prototype.removeTrack_ = function removeTrack_(rtrack) {
              var track = void 0;
              for (var i = 0, l = this.length; i < l; i++) {
                if (this[i] === rtrack) {
                  track = this[i];
                  if (track.off) {
                    track.off();
                  }
                  this.tracks_.splice(i, 1);
                  break;
                }
              }
              if (!track) {
                return;
              }
              this.trigger({ track: track, type: "removetrack" });
            };
            TrackList.prototype.getTrackById = function getTrackById(id) {
              var result = null;
              for (var i = 0, l = this.length; i < l; i++) {
                var track = this[i];
                if (track.id === id) {
                  result = track;
                  break;
                }
              }
              return result;
            };
            return TrackList;
          })(_eventTarget2["default"]);
          TrackList.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack",
          };
          for (var event in TrackList.prototype.allowedEvents_) {
            TrackList.prototype["on" + event] = null;
          }
          exports["default"] = TrackList;
        },
        { 42: 42, 78: 78, 94: 94 },
      ],
      75: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _guid = _dereq_(85);
          var Guid = _interopRequireWildcard(_guid);
          var _eventTarget = _dereq_(42);
          var _eventTarget2 = _interopRequireDefault(_eventTarget);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var Track = (function (_EventTarget) {
            _inherits(Track, _EventTarget);
            function Track() {
              var _ret;
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, Track);
              var _this = _possibleConstructorReturn(
                this,
                _EventTarget.call(this)
              );
              var track = _this;
              if (browser.IS_IE8) {
                track = _document2["default"].createElement("custom");
                for (var prop in Track.prototype) {
                  if (prop !== "constructor") {
                    track[prop] = Track.prototype[prop];
                  }
                }
              }
              var trackProps = {
                id: options.id || "vjs_track_" + Guid.newGUID(),
                kind: options.kind || "",
                label: options.label || "",
                language: options.language || "",
              };
              var _loop = function _loop(key) {
                Object.defineProperty(track, key, {
                  get: function get() {
                    return trackProps[key];
                  },
                  set: function set() {},
                });
              };
              for (var key in trackProps) {
                _loop(key);
              }
              return (_ret = track), _possibleConstructorReturn(_this, _ret);
            }
            return Track;
          })(_eventTarget2["default"]);
          exports["default"] = Track;
        },
        { 42: 42, 78: 78, 85: 85, 94: 94 },
      ],
      76: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackList = _dereq_(74);
          var _trackList2 = _interopRequireDefault(_trackList);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var disableOthers = function disableOthers(list, track) {
            for (var i = 0; i < list.length; i++) {
              if (track.id === list[i].id) {
                continue;
              }
              list[i].selected = false;
            }
          };
          var VideoTrackList = (function (_TrackList) {
            _inherits(VideoTrackList, _TrackList);
            function VideoTrackList() {
              var _this, _ret;
              var tracks =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              _classCallCheck(this, VideoTrackList);
              var list = void 0;
              for (var i = tracks.length - 1; i >= 0; i--) {
                if (tracks[i].selected) {
                  disableOthers(tracks, tracks[i]);
                  break;
                }
              }
              if (browser.IS_IE8) {
                list = _document2["default"].createElement("custom");
                for (var prop in _trackList2["default"].prototype) {
                  if (prop !== "constructor") {
                    list[prop] = _trackList2["default"].prototype[prop];
                  }
                }
                for (var _prop in VideoTrackList.prototype) {
                  if (_prop !== "constructor") {
                    list[_prop] = VideoTrackList.prototype[_prop];
                  }
                }
              }
              list =
                ((_this = _possibleConstructorReturn(
                  this,
                  _TrackList.call(this, tracks, list)
                )),
                _this);
              list.changing_ = false;
              Object.defineProperty(list, "selectedIndex", {
                get: function get() {
                  for (var _i = 0; _i < this.length; _i++) {
                    if (this[_i].selected) {
                      return _i;
                    }
                  }
                  return -1;
                },
                set: function set() {},
              });
              return (_ret = list), _possibleConstructorReturn(_this, _ret);
            }
            VideoTrackList.prototype.addTrack_ = function addTrack_(track) {
              var _this2 = this;
              if (track.selected) {
                disableOthers(this, track);
              }
              _TrackList.prototype.addTrack_.call(this, track);
              if (!track.addEventListener) {
                return;
              }
              track.addEventListener("selectedchange", function () {
                if (_this2.changing_) {
                  return;
                }
                _this2.changing_ = true;
                disableOthers(_this2, track);
                _this2.changing_ = false;
                _this2.trigger("change");
              });
            };
            VideoTrackList.prototype.addTrack = function addTrack(track) {
              this.addTrack_(track);
            };
            VideoTrackList.prototype.removeTrack = function removeTrack(track) {
              _TrackList.prototype.removeTrack_.call(this, track);
            };
            return VideoTrackList;
          })(_trackList2["default"]);
          exports["default"] = VideoTrackList;
        },
        { 74: 74, 78: 78, 94: 94 },
      ],
      77: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _trackEnums = _dereq_(73);
          var _track = _dereq_(75);
          var _track2 = _interopRequireDefault(_track);
          var _mergeOptions = _dereq_(87);
          var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          var VideoTrack = (function (_Track) {
            _inherits(VideoTrack, _Track);
            function VideoTrack() {
              var _this, _ret;
              var options =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              _classCallCheck(this, VideoTrack);
              var settings = (0, _mergeOptions2["default"])(options, {
                kind: _trackEnums.VideoTrackKind[options.kind] || "",
              });
              var track =
                ((_this = _possibleConstructorReturn(
                  this,
                  _Track.call(this, settings)
                )),
                _this);
              var selected = false;
              if (browser.IS_IE8) {
                for (var prop in VideoTrack.prototype) {
                  if (prop !== "constructor") {
                    track[prop] = VideoTrack.prototype[prop];
                  }
                }
              }
              Object.defineProperty(track, "selected", {
                get: function get() {
                  return selected;
                },
                set: function set(newSelected) {
                  if (
                    typeof newSelected !== "boolean" ||
                    newSelected === selected
                  ) {
                    return;
                  }
                  selected = newSelected;
                  this.trigger("selectedchange");
                },
              });
              if (settings.selected) {
                track.selected = settings.selected;
              }
              return (_ret = track), _possibleConstructorReturn(_this, _ret);
            }
            return VideoTrack;
          })(_track2["default"]);
          exports["default"] = VideoTrack;
        },
        { 73: 73, 75: 75, 78: 78, 87: 87 },
      ],
      78: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.BACKGROUND_SIZE_SUPPORTED =
            exports.TOUCH_ENABLED =
            exports.IS_ANY_SAFARI =
            exports.IS_SAFARI =
            exports.IE_VERSION =
            exports.IS_IE8 =
            exports.IS_CHROME =
            exports.IS_EDGE =
            exports.IS_FIREFOX =
            exports.IS_NATIVE_ANDROID =
            exports.IS_OLD_ANDROID =
            exports.ANDROID_VERSION =
            exports.IS_ANDROID =
            exports.IOS_VERSION =
            exports.IS_IOS =
            exports.IS_IPOD =
            exports.IS_IPHONE =
            exports.IS_IPAD =
              undefined;
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          var USER_AGENT =
            (_window2["default"].navigator &&
              _window2["default"].navigator.userAgent) ||
            "";
          var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
          var appleWebkitVersion = webkitVersionMap
            ? parseFloat(webkitVersionMap.pop())
            : null;
          var IS_IPAD = (exports.IS_IPAD = /iPad/i.test(USER_AGENT));
          var IS_IPHONE = (exports.IS_IPHONE =
            /iPhone/i.test(USER_AGENT) && !IS_IPAD);
          var IS_IPOD = (exports.IS_IPOD = /iPod/i.test(USER_AGENT));
          var IS_IOS = (exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD);
          var IOS_VERSION = (exports.IOS_VERSION = (function () {
            var match = USER_AGENT.match(/OS (\d+)_/i);
            if (match && match[1]) {
              return match[1];
            }
            return null;
          })());
          var IS_ANDROID = (exports.IS_ANDROID = /Android/i.test(USER_AGENT));
          var ANDROID_VERSION = (exports.ANDROID_VERSION = (function () {
            var match = USER_AGENT.match(
              /Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i
            );
            if (!match) {
              return null;
            }
            var major = match[1] && parseFloat(match[1]);
            var minor = match[2] && parseFloat(match[2]);
            if (major && minor) {
              return parseFloat(match[1] + "." + match[2]);
            } else if (major) {
              return major;
            }
            return null;
          })());
          var IS_OLD_ANDROID = (exports.IS_OLD_ANDROID =
            IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3);
          var IS_NATIVE_ANDROID = (exports.IS_NATIVE_ANDROID =
            IS_ANDROID && ANDROID_VERSION < 5 && appleWebkitVersion < 537);
          var IS_FIREFOX = (exports.IS_FIREFOX = /Firefox/i.test(USER_AGENT));
          var IS_EDGE = (exports.IS_EDGE = /Edge/i.test(USER_AGENT));
          var IS_CHROME = (exports.IS_CHROME =
            !IS_EDGE && /Chrome/i.test(USER_AGENT));
          var IS_IE8 = (exports.IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT));
          var IE_VERSION = (exports.IE_VERSION = (function () {
            var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
            var version = result && parseFloat(result[1]);
            if (
              !version &&
              /Trident\/7.0/i.test(USER_AGENT) &&
              /rv:11.0/.test(USER_AGENT)
            ) {
              version = 11.0;
            }
            return version;
          })());
          var IS_SAFARI = (exports.IS_SAFARI =
            /Safari/i.test(USER_AGENT) &&
            !IS_CHROME &&
            !IS_ANDROID &&
            !IS_EDGE);
          var IS_ANY_SAFARI = (exports.IS_ANY_SAFARI = IS_SAFARI || IS_IOS);
          var TOUCH_ENABLED = (exports.TOUCH_ENABLED =
            Dom.isReal() &&
            ("ontouchstart" in _window2["default"] ||
              (_window2["default"].DocumentTouch &&
                _window2["default"].document instanceof
                  _window2["default"].DocumentTouch)));
          var BACKGROUND_SIZE_SUPPORTED = (exports.BACKGROUND_SIZE_SUPPORTED =
            Dom.isReal() &&
            "backgroundSize" in
              _window2["default"].document.createElement("video").style);
        },
        { 81: 81, 95: 95 },
      ],
      79: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.bufferedPercent = bufferedPercent;
          var _timeRanges = _dereq_(90);
          function bufferedPercent(buffered, duration) {
            var bufferedDuration = 0;
            var start = void 0;
            var end = void 0;
            if (!duration) {
              return 0;
            }
            if (!buffered || !buffered.length) {
              buffered = (0, _timeRanges.createTimeRange)(0, 0);
            }
            for (var i = 0; i < buffered.length; i++) {
              start = buffered.start(i);
              end = buffered.end(i);
              if (end > duration) {
                end = duration;
              }
              bufferedDuration += end - start;
            }
            return bufferedDuration / duration;
          }
        },
        { 90: 90 },
      ],
      80: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports["default"] = computedStyle;
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function computedStyle(el, prop) {
            if (!el || !prop) {
              return "";
            }
            if (typeof _window2["default"].getComputedStyle === "function") {
              var cs = _window2["default"].getComputedStyle(el);
              return cs ? cs[prop] : "";
            }
            return el.currentStyle[prop] || "";
          }
        },
        { 95: 95 },
      ],
      81: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.$$ = exports.$ = undefined;
          var _templateObject = _taggedTemplateLiteralLoose(
            [
              "Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ",
              " to ",
              ".",
            ],
            [
              "Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ",
              " to ",
              ".",
            ]
          );
          exports.isReal = isReal;
          exports.isEl = isEl;
          exports.getEl = getEl;
          exports.createEl = createEl;
          exports.textContent = textContent;
          exports.insertElFirst = insertElFirst;
          exports.getElData = getElData;
          exports.hasElData = hasElData;
          exports.removeElData = removeElData;
          exports.hasElClass = hasElClass;
          exports.addElClass = addElClass;
          exports.removeElClass = removeElClass;
          exports.toggleElClass = toggleElClass;
          exports.setElAttributes = setElAttributes;
          exports.getElAttributes = getElAttributes;
          exports.getAttribute = getAttribute;
          exports.setAttribute = setAttribute;
          exports.removeAttribute = removeAttribute;
          exports.blockTextSelection = blockTextSelection;
          exports.unblockTextSelection = unblockTextSelection;
          exports.findElPosition = findElPosition;
          exports.getPointerPosition = getPointerPosition;
          exports.isTextNode = isTextNode;
          exports.emptyEl = emptyEl;
          exports.normalizeContent = normalizeContent;
          exports.appendContent = appendContent;
          exports.insertContent = insertContent;
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _guid = _dereq_(85);
          var Guid = _interopRequireWildcard(_guid);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _tsml = _dereq_(98);
          var _tsml2 = _interopRequireDefault(_tsml);
          var _obj = _dereq_(88);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _taggedTemplateLiteralLoose(strings, raw) {
            strings.raw = raw;
            return strings;
          }
          function isNonBlankString(str) {
            return typeof str === "string" && /\S/.test(str);
          }
          function throwIfWhitespace(str) {
            if (/\s/.test(str)) {
              throw new Error("class has illegal whitespace characters");
            }
          }
          function classRegExp(className) {
            return new RegExp("(^|\\s)" + className + "($|\\s)");
          }
          function isReal() {
            return (
              _document2["default"] === _window2["default"].document &&
              typeof _document2["default"].createElement !== "undefined"
            );
          }
          function isEl(value) {
            return (0, _obj.isObject)(value) && value.nodeType === 1;
          }
          function createQuerier(method) {
            return function (selector, context) {
              if (!isNonBlankString(selector)) {
                return _document2["default"][method](null);
              }
              if (isNonBlankString(context)) {
                context = _document2["default"].querySelector(context);
              }
              var ctx = isEl(context) ? context : _document2["default"];
              return ctx[method] && ctx[method](selector);
            };
          }
          function getEl(id) {
            if (id.indexOf("#") === 0) {
              id = id.slice(1);
            }
            return _document2["default"].getElementById(id);
          }
          function createEl() {
            var tagName =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "div";
            var properties =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var attributes =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : {};
            var content = arguments[3];
            var el = _document2["default"].createElement(tagName);
            Object.getOwnPropertyNames(properties).forEach(function (propName) {
              var val = properties[propName];
              if (
                propName.indexOf("aria-") !== -1 ||
                propName === "role" ||
                propName === "type"
              ) {
                _log2["default"].warn(
                  (0, _tsml2["default"])(_templateObject, propName, val)
                );
                el.setAttribute(propName, val);
              } else if (propName === "textContent") {
                textContent(el, val);
              } else {
                el[propName] = val;
              }
            });
            Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
              el.setAttribute(attrName, attributes[attrName]);
            });
            if (content) {
              appendContent(el, content);
            }
            return el;
          }
          function textContent(el, text) {
            if (typeof el.textContent === "undefined") {
              el.innerText = text;
            } else {
              el.textContent = text;
            }
            return el;
          }
          function insertElFirst(child, parent) {
            if (parent.firstChild) {
              parent.insertBefore(child, parent.firstChild);
            } else {
              parent.appendChild(child);
            }
          }
          var elData = {};
          var elIdAttr = "vdata" + new Date().getTime();
          function getElData(el) {
            var id = el[elIdAttr];
            if (!id) {
              id = el[elIdAttr] = Guid.newGUID();
            }
            if (!elData[id]) {
              elData[id] = {};
            }
            return elData[id];
          }
          function hasElData(el) {
            var id = el[elIdAttr];
            if (!id) {
              return false;
            }
            return !!Object.getOwnPropertyNames(elData[id]).length;
          }
          function removeElData(el) {
            var id = el[elIdAttr];
            if (!id) {
              return;
            }
            delete elData[id];
            try {
              delete el[elIdAttr];
            } catch (e) {
              if (el.removeAttribute) {
                el.removeAttribute(elIdAttr);
              } else {
                el[elIdAttr] = null;
              }
            }
          }
          function hasElClass(element, classToCheck) {
            throwIfWhitespace(classToCheck);
            if (element.classList) {
              return element.classList.contains(classToCheck);
            }
            return classRegExp(classToCheck).test(element.className);
          }
          function addElClass(element, classToAdd) {
            if (element.classList) {
              element.classList.add(classToAdd);
            } else if (!hasElClass(element, classToAdd)) {
              element.className = (element.className + " " + classToAdd).trim();
            }
            return element;
          }
          function removeElClass(element, classToRemove) {
            if (element.classList) {
              element.classList.remove(classToRemove);
            } else {
              throwIfWhitespace(classToRemove);
              element.className = element.className
                .split(/\s+/)
                .filter(function (c) {
                  return c !== classToRemove;
                })
                .join(" ");
            }
            return element;
          }
          function toggleElClass(element, classToToggle, predicate) {
            var has = hasElClass(element, classToToggle);
            if (typeof predicate === "function") {
              predicate = predicate(element, classToToggle);
            }
            if (typeof predicate !== "boolean") {
              predicate = !has;
            }
            if (predicate === has) {
              return;
            }
            if (predicate) {
              addElClass(element, classToToggle);
            } else {
              removeElClass(element, classToToggle);
            }
            return element;
          }
          function setElAttributes(el, attributes) {
            Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
              var attrValue = attributes[attrName];
              if (
                attrValue === null ||
                typeof attrValue === "undefined" ||
                attrValue === false
              ) {
                el.removeAttribute(attrName);
              } else {
                el.setAttribute(attrName, attrValue === true ? "" : attrValue);
              }
            });
          }
          function getElAttributes(tag) {
            var obj = {};
            var knownBooleans =
              "," + "autoplay,controls,loop,muted,default" + ",";
            if (tag && tag.attributes && tag.attributes.length > 0) {
              var attrs = tag.attributes;
              for (var i = attrs.length - 1; i >= 0; i--) {
                var attrName = attrs[i].name;
                var attrVal = attrs[i].value;
                if (
                  typeof tag[attrName] === "boolean" ||
                  knownBooleans.indexOf("," + attrName + ",") !== -1
                ) {
                  attrVal = attrVal !== null ? true : false;
                }
                obj[attrName] = attrVal;
              }
            }
            return obj;
          }
          function getAttribute(el, attribute) {
            return el.getAttribute(attribute);
          }
          function setAttribute(el, attribute, value) {
            el.setAttribute(attribute, value);
          }
          function removeAttribute(el, attribute) {
            el.removeAttribute(attribute);
          }
          function blockTextSelection() {
            _document2["default"].body.focus();
            _document2["default"].onselectstart = function () {
              return false;
            };
          }
          function unblockTextSelection() {
            _document2["default"].onselectstart = function () {
              return true;
            };
          }
          function findElPosition(el) {
            var box = void 0;
            if (el.getBoundingClientRect && el.parentNode) {
              box = el.getBoundingClientRect();
            }
            if (!box) {
              return { left: 0, top: 0 };
            }
            var docEl = _document2["default"].documentElement;
            var body = _document2["default"].body;
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;
            var scrollLeft = _window2["default"].pageXOffset || body.scrollLeft;
            var left = box.left + scrollLeft - clientLeft;
            var clientTop = docEl.clientTop || body.clientTop || 0;
            var scrollTop = _window2["default"].pageYOffset || body.scrollTop;
            var top = box.top + scrollTop - clientTop;
            return { left: Math.round(left), top: Math.round(top) };
          }
          function getPointerPosition(el, event) {
            var position = {};
            var box = findElPosition(el);
            var boxW = el.offsetWidth;
            var boxH = el.offsetHeight;
            var boxY = box.top;
            var boxX = box.left;
            var pageY = event.pageY;
            var pageX = event.pageX;
            if (event.changedTouches) {
              pageX = event.changedTouches[0].pageX;
              pageY = event.changedTouches[0].pageY;
            }
            position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
            position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
            return position;
          }
          function isTextNode(value) {
            return (0, _obj.isObject)(value) && value.nodeType === 3;
          }
          function emptyEl(el) {
            while (el.firstChild) {
              el.removeChild(el.firstChild);
            }
            return el;
          }
          function normalizeContent(content) {
            if (typeof content === "function") {
              content = content();
            }
            return (Array.isArray(content) ? content : [content])
              .map(function (value) {
                if (typeof value === "function") {
                  value = value();
                }
                if (isEl(value) || isTextNode(value)) {
                  return value;
                }
                if (typeof value === "string" && /\S/.test(value)) {
                  return _document2["default"].createTextNode(value);
                }
              })
              .filter(function (value) {
                return value;
              });
          }
          function appendContent(el, content) {
            normalizeContent(content).forEach(function (node) {
              return el.appendChild(node);
            });
            return el;
          }
          function insertContent(el, content) {
            return appendContent(emptyEl(el), content);
          }
          var $ = (exports.$ = createQuerier("querySelector"));
          var $$ = (exports.$$ = createQuerier("querySelectorAll"));
        },
        { 85: 85, 86: 86, 88: 88, 94: 94, 95: 95, 98: 98 },
      ],
      82: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.fixEvent = fixEvent;
          exports.on = on;
          exports.off = off;
          exports.trigger = trigger;
          exports.one = one;
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _guid = _dereq_(85);
          var Guid = _interopRequireWildcard(_guid);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _cleanUpEvents(elem, type) {
            var data = Dom.getElData(elem);
            if (data.handlers[type].length === 0) {
              delete data.handlers[type];
              if (elem.removeEventListener) {
                elem.removeEventListener(type, data.dispatcher, false);
              } else if (elem.detachEvent) {
                elem.detachEvent("on" + type, data.dispatcher);
              }
            }
            if (Object.getOwnPropertyNames(data.handlers).length <= 0) {
              delete data.handlers;
              delete data.dispatcher;
              delete data.disabled;
            }
            if (Object.getOwnPropertyNames(data).length === 0) {
              Dom.removeElData(elem);
            }
          }
          function _handleMultipleEvents(fn, elem, types, callback) {
            types.forEach(function (type) {
              fn(elem, type, callback);
            });
          }
          function fixEvent(event) {
            function returnTrue() {
              return true;
            }
            function returnFalse() {
              return false;
            }
            if (!event || !event.isPropagationStopped) {
              var old = event || _window2["default"].event;
              event = {};
              for (var key in old) {
                if (
                  key !== "layerX" &&
                  key !== "layerY" &&
                  key !== "keyLocation" &&
                  key !== "webkitMovementX" &&
                  key !== "webkitMovementY"
                ) {
                  if (!(key === "returnValue" && old.preventDefault)) {
                    event[key] = old[key];
                  }
                }
              }
              if (!event.target) {
                event.target = event.srcElement || _document2["default"];
              }
              if (!event.relatedTarget) {
                event.relatedTarget =
                  event.fromElement === event.target
                    ? event.toElement
                    : event.fromElement;
              }
              event.preventDefault = function () {
                if (old.preventDefault) {
                  old.preventDefault();
                }
                event.returnValue = false;
                old.returnValue = false;
                event.defaultPrevented = true;
              };
              event.defaultPrevented = false;
              event.stopPropagation = function () {
                if (old.stopPropagation) {
                  old.stopPropagation();
                }
                event.cancelBubble = true;
                old.cancelBubble = true;
                event.isPropagationStopped = returnTrue;
              };
              event.isPropagationStopped = returnFalse;
              event.stopImmediatePropagation = function () {
                if (old.stopImmediatePropagation) {
                  old.stopImmediatePropagation();
                }
                event.isImmediatePropagationStopped = returnTrue;
                event.stopPropagation();
              };
              event.isImmediatePropagationStopped = returnFalse;
              if (event.clientX !== null && event.clientX !== undefined) {
                var doc = _document2["default"].documentElement;
                var body = _document2["default"].body;
                event.pageX =
                  event.clientX +
                  ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                  ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
                event.pageY =
                  event.clientY +
                  ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                  ((doc && doc.clientTop) || (body && body.clientTop) || 0);
              }
              event.which = event.charCode || event.keyCode;
              if (event.button !== null && event.button !== undefined) {
                event.button =
                  event.button & 1
                    ? 0
                    : event.button & 4
                    ? 1
                    : event.button & 2
                    ? 2
                    : 0;
              }
            }
            return event;
          }
          function on(elem, type, fn) {
            if (Array.isArray(type)) {
              return _handleMultipleEvents(on, elem, type, fn);
            }
            var data = Dom.getElData(elem);
            if (!data.handlers) {
              data.handlers = {};
            }
            if (!data.handlers[type]) {
              data.handlers[type] = [];
            }
            if (!fn.guid) {
              fn.guid = Guid.newGUID();
            }
            data.handlers[type].push(fn);
            if (!data.dispatcher) {
              data.disabled = false;
              data.dispatcher = function (event, hash) {
                if (data.disabled) {
                  return;
                }
                event = fixEvent(event);
                var handlers = data.handlers[event.type];
                if (handlers) {
                  var handlersCopy = handlers.slice(0);
                  for (var m = 0, n = handlersCopy.length; m < n; m++) {
                    if (event.isImmediatePropagationStopped()) {
                      break;
                    } else {
                      try {
                        handlersCopy[m].call(elem, event, hash);
                      } catch (e) {
                        _log2["default"].error(e);
                      }
                    }
                  }
                }
              };
            }
            if (data.handlers[type].length === 1) {
              if (elem.addEventListener) {
                elem.addEventListener(type, data.dispatcher, false);
              } else if (elem.attachEvent) {
                elem.attachEvent("on" + type, data.dispatcher);
              }
            }
          }
          function off(elem, type, fn) {
            if (!Dom.hasElData(elem)) {
              return;
            }
            var data = Dom.getElData(elem);
            if (!data.handlers) {
              return;
            }
            if (Array.isArray(type)) {
              return _handleMultipleEvents(off, elem, type, fn);
            }
            var removeType = function removeType(t) {
              data.handlers[t] = [];
              _cleanUpEvents(elem, t);
            };
            if (!type) {
              for (var t in data.handlers) {
                removeType(t);
              }
              return;
            }
            var handlers = data.handlers[type];
            if (!handlers) {
              return;
            }
            if (!fn) {
              removeType(type);
              return;
            }
            if (fn.guid) {
              for (var n = 0; n < handlers.length; n++) {
                if (handlers[n].guid === fn.guid) {
                  handlers.splice(n--, 1);
                }
              }
            }
            _cleanUpEvents(elem, type);
          }
          function trigger(elem, event, hash) {
            var elemData = Dom.hasElData(elem) ? Dom.getElData(elem) : {};
            var parent = elem.parentNode || elem.ownerDocument;
            if (typeof event === "string") {
              event = { type: event, target: elem };
            }
            event = fixEvent(event);
            if (elemData.dispatcher) {
              elemData.dispatcher.call(elem, event, hash);
            }
            if (
              parent &&
              !event.isPropagationStopped() &&
              event.bubbles === true
            ) {
              trigger.call(null, parent, event, hash);
            } else if (!parent && !event.defaultPrevented) {
              var targetData = Dom.getElData(event.target);
              if (event.target[event.type]) {
                targetData.disabled = true;
                if (typeof event.target[event.type] === "function") {
                  event.target[event.type]();
                }
                targetData.disabled = false;
              }
            }
            return !event.defaultPrevented;
          }
          function one(elem, type, fn) {
            if (Array.isArray(type)) {
              return _handleMultipleEvents(one, elem, type, fn);
            }
            var func = function func() {
              off(elem, type, func);
              fn.apply(this, arguments);
            };
            func.guid = fn.guid = fn.guid || Guid.newGUID();
            on(elem, type, func);
          }
        },
        { 81: 81, 85: 85, 86: 86, 94: 94, 95: 95 },
      ],
      83: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.throttle = exports.bind = undefined;
          var _guid = _dereq_(85);
          var bind = (exports.bind = function bind(context, fn, uid) {
            if (!fn.guid) {
              fn.guid = (0, _guid.newGUID)();
            }
            var bound = function bound() {
              return fn.apply(context, arguments);
            };
            bound.guid = uid ? uid + "_" + fn.guid : fn.guid;
            return bound;
          });
          var throttle = (exports.throttle = function throttle(fn, wait) {
            var last = Date.now();
            var throttled = function throttled() {
              var now = Date.now();
              if (now - last >= wait) {
                fn.apply(undefined, arguments);
                last = now;
              }
            };
            return throttled;
          });
        },
        { 85: 85 },
      ],
      84: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          function formatTime(seconds) {
            var guide =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : seconds;
            seconds = seconds < 0 ? 0 : seconds;
            var s = Math.floor(seconds % 60);
            var m = Math.floor((seconds / 60) % 60);
            var h = Math.floor(seconds / 3600);
            var gm = Math.floor((guide / 60) % 60);
            var gh = Math.floor(guide / 3600);
            if (isNaN(seconds) || seconds === Infinity) {
              h = m = s = "-";
            }
            h = h > 0 || gh > 0 ? h + ":" : "";
            m = ((h || gm >= 10) && m < 10 ? "0" + m : m) + ":";
            s = s < 10 ? "0" + s : s;
            return h + m + s;
          }
          exports["default"] = formatTime;
        },
        {},
      ],
      85: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.newGUID = newGUID;
          var _guid = 1;
          function newGUID() {
            return _guid++;
          }
        },
        {},
      ],
      86: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.logByType = undefined;
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _browser = _dereq_(78);
          var _obj = _dereq_(88);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var log = void 0;
          var logByType = (exports.logByType = function logByType(type, args) {
            var stringify =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : !!_browser.IE_VERSION && _browser.IE_VERSION < 11;
            if (type !== "log") {
              args.unshift(type.toUpperCase() + ":");
            }
            log.history.push(args);
            args.unshift("VIDEOJS:");
            var fn =
              _window2["default"].console && _window2["default"].console[type];
            if (!fn) {
              return;
            }
            if (stringify) {
              args = args
                .map(function (a) {
                  if ((0, _obj.isObject)(a) || Array.isArray(a)) {
                    try {
                      return JSON.stringify(a);
                    } catch (x) {
                      return String(a);
                    }
                  }
                  return String(a);
                })
                .join(" ");
            }
            if (!fn.apply) {
              fn(args);
            } else {
              fn[Array.isArray(args) ? "apply" : "call"](
                _window2["default"].console,
                args
              );
            }
          });
          log = function log() {
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }
            logByType("log", args);
          };
          log.history = [];
          log.error = function () {
            for (
              var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2] = arguments[_key2];
            }
            return logByType("error", args);
          };
          log.warn = function () {
            for (
              var _len3 = arguments.length, args = Array(_len3), _key3 = 0;
              _key3 < _len3;
              _key3++
            ) {
              args[_key3] = arguments[_key3];
            }
            return logByType("warn", args);
          };
          exports["default"] = log;
        },
        { 78: 78, 88: 88, 95: 95 },
      ],
      87: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports["default"] = mergeOptions;
          var _obj = _dereq_(88);
          function mergeOptions() {
            var result = {};
            for (
              var _len = arguments.length, sources = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              sources[_key] = arguments[_key];
            }
            sources.forEach(function (source) {
              if (!source) {
                return;
              }
              (0, _obj.each)(source, function (value, key) {
                if (!(0, _obj.isPlain)(value)) {
                  result[key] = value;
                  return;
                }
                if (!(0, _obj.isPlain)(result[key])) {
                  result[key] = {};
                }
                result[key] = mergeOptions(result[key], value);
              });
            });
            return result;
          }
        },
        { 88: 88 },
      ],
      88: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                };
          exports.each = each;
          exports.reduce = reduce;
          exports.assign = assign;
          exports.isObject = isObject;
          exports.isPlain = isPlain;
          var toString = Object.prototype.toString;
          var keys = function keys(object) {
            return isObject(object) ? Object.keys(object) : [];
          };
          function each(object, fn) {
            keys(object).forEach(function (key) {
              return fn(object[key], key);
            });
          }
          function reduce(object, fn) {
            var initial =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 0;
            return keys(object).reduce(function (accum, key) {
              return fn(accum, object[key], key);
            }, initial);
          }
          function assign(target) {
            for (
              var _len = arguments.length,
                sources = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              sources[_key - 1] = arguments[_key];
            }
            if (Object.assign) {
              return Object.assign.apply(Object, [target].concat(sources));
            }
            sources.forEach(function (source) {
              if (!source) {
                return;
              }
              each(source, function (value, key) {
                target[key] = value;
              });
            });
            return target;
          }
          function isObject(value) {
            return (
              !!value &&
              (typeof value === "undefined" ? "undefined" : _typeof(value)) ===
                "object"
            );
          }
          function isPlain(value) {
            return (
              isObject(value) &&
              toString.call(value) === "[object Object]" &&
              value.constructor === Object
            );
          }
        },
        {},
      ],
      89: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.setTextContent = exports.createStyleElement = undefined;
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var createStyleElement = (exports.createStyleElement =
            function createStyleElement(className) {
              var style = _document2["default"].createElement("style");
              style.className = className;
              return style;
            });
          var setTextContent = (exports.setTextContent =
            function setTextContent(el, content) {
              if (el.styleSheet) {
                el.styleSheet.cssText = content;
              } else {
                el.textContent = content;
              }
            });
        },
        { 94: 94 },
      ],
      90: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.createTimeRange = undefined;
          exports.createTimeRanges = createTimeRanges;
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function rangeCheck(fnName, index, maxIndex) {
            if (index < 0 || index > maxIndex) {
              throw new Error(
                "Failed to execute '" +
                  fnName +
                  "' on 'TimeRanges': The index provided (" +
                  index +
                  ") is greater than or equal to the maximum bound (" +
                  maxIndex +
                  ")."
              );
            }
          }
          function getRange(fnName, valueIndex, ranges, rangeIndex) {
            if (rangeIndex === undefined) {
              _log2["default"].warn(
                "DEPRECATED: Function '" +
                  fnName +
                  "' on 'TimeRanges' called without an index argument."
              );
              rangeIndex = 0;
            }
            rangeCheck(fnName, rangeIndex, ranges.length - 1);
            return ranges[rangeIndex][valueIndex];
          }
          function createTimeRangesObj(ranges) {
            if (ranges === undefined || ranges.length === 0) {
              return {
                length: 0,
                start: function start() {
                  throw new Error("This TimeRanges object is empty");
                },
                end: function end() {
                  throw new Error("This TimeRanges object is empty");
                },
              };
            }
            return {
              length: ranges.length,
              start: getRange.bind(null, "start", 0, ranges),
              end: getRange.bind(null, "end", 1, ranges),
            };
          }
          function createTimeRanges(start, end) {
            if (Array.isArray(start)) {
              return createTimeRangesObj(start);
            } else if (start === undefined || end === undefined) {
              return createTimeRangesObj();
            }
            return createTimeRangesObj([[start, end]]);
          }
          exports.createTimeRange = createTimeRanges;
        },
        { 86: 86 },
      ],
      91: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          function toTitleCase(string) {
            if (typeof string !== "string") {
              return string;
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          exports["default"] = toTitleCase;
        },
        {},
      ],
      92: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          exports.isCrossOrigin =
            exports.getFileExtension =
            exports.getAbsoluteURL =
            exports.parseUrl =
              undefined;
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var parseUrl = (exports.parseUrl = function parseUrl(url) {
            var props = [
              "protocol",
              "hostname",
              "port",
              "pathname",
              "search",
              "hash",
              "host",
            ];
            var a = _document2["default"].createElement("a");
            a.href = url;
            var addToBody = a.host === "" && a.protocol !== "file:";
            var div = void 0;
            if (addToBody) {
              div = _document2["default"].createElement("div");
              div.innerHTML = '<a href="' + url + '"></a>';
              a = div.firstChild;
              div.setAttribute("style", "display:none; position:absolute;");
              _document2["default"].body.appendChild(div);
            }
            var details = {};
            for (var i = 0; i < props.length; i++) {
              details[props[i]] = a[props[i]];
            }
            if (details.protocol === "http:") {
              details.host = details.host.replace(/:80$/, "");
            }
            if (details.protocol === "https:") {
              details.host = details.host.replace(/:443$/, "");
            }
            if (addToBody) {
              _document2["default"].body.removeChild(div);
            }
            return details;
          });
          var getAbsoluteURL = (exports.getAbsoluteURL =
            function getAbsoluteURL(url) {
              if (!url.match(/^https?:\/\//)) {
                var div = _document2["default"].createElement("div");
                div.innerHTML = '<a href="' + url + '">x</a>';
                url = div.firstChild.href;
              }
              return url;
            });
          var getFileExtension = (exports.getFileExtension =
            function getFileExtension(path) {
              if (typeof path === "string") {
                var splitPathRe =
                  /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i;
                var pathParts = splitPathRe.exec(path);
                if (pathParts) {
                  return pathParts.pop().toLowerCase();
                }
              }
              return "";
            });
          var isCrossOrigin = (exports.isCrossOrigin = function isCrossOrigin(
            url
          ) {
            var winLoc = _window2["default"].location;
            var urlInfo = parseUrl(url);
            var srcProtocol =
              urlInfo.protocol === ":" ? winLoc.protocol : urlInfo.protocol;
            var crossOrigin =
              srcProtocol + urlInfo.host !== winLoc.protocol + winLoc.host;
            return crossOrigin;
          });
        },
        { 94: 94, 95: 95 },
      ],
      93: [
        function (_dereq_, module, exports) {
          "use strict";
          exports.__esModule = true;
          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                };
          var _window = _dereq_(95);
          var _window2 = _interopRequireDefault(_window);
          var _document = _dereq_(94);
          var _document2 = _interopRequireDefault(_document);
          var _setup = _dereq_(56);
          var setup = _interopRequireWildcard(_setup);
          var _stylesheet = _dereq_(89);
          var stylesheet = _interopRequireWildcard(_stylesheet);
          var _component = _dereq_(5);
          var _component2 = _interopRequireDefault(_component);
          var _eventTarget = _dereq_(42);
          var _eventTarget2 = _interopRequireDefault(_eventTarget);
          var _events = _dereq_(82);
          var Events = _interopRequireWildcard(_events);
          var _player = _dereq_(51);
          var _player2 = _interopRequireDefault(_player);
          var _plugins = _dereq_(52);
          var _plugins2 = _interopRequireDefault(_plugins);
          var _mergeOptions2 = _dereq_(87);
          var _mergeOptions3 = _interopRequireDefault(_mergeOptions2);
          var _fn = _dereq_(83);
          var Fn = _interopRequireWildcard(_fn);
          var _textTrack = _dereq_(72);
          var _textTrack2 = _interopRequireDefault(_textTrack);
          var _audioTrack = _dereq_(64);
          var _audioTrack2 = _interopRequireDefault(_audioTrack);
          var _videoTrack = _dereq_(77);
          var _videoTrack2 = _interopRequireDefault(_videoTrack);
          var _timeRanges = _dereq_(90);
          var _formatTime = _dereq_(84);
          var _formatTime2 = _interopRequireDefault(_formatTime);
          var _log = _dereq_(86);
          var _log2 = _interopRequireDefault(_log);
          var _dom = _dereq_(81);
          var Dom = _interopRequireWildcard(_dom);
          var _browser = _dereq_(78);
          var browser = _interopRequireWildcard(_browser);
          var _url = _dereq_(92);
          var Url = _interopRequireWildcard(_url);
          var _obj = _dereq_(88);
          var _computedStyle = _dereq_(80);
          var _computedStyle2 = _interopRequireDefault(_computedStyle);
          var _extend = _dereq_(43);
          var _extend2 = _interopRequireDefault(_extend);
          var _xhr = _dereq_(99);
          var _xhr2 = _interopRequireDefault(_xhr);
          var _tech = _dereq_(62);
          var _tech2 = _interopRequireDefault(_tech);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }
              newObj["default"] = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          if (typeof HTMLVideoElement === "undefined" && Dom.isReal()) {
            _document2["default"].createElement("video");
            _document2["default"].createElement("audio");
            _document2["default"].createElement("track");
          }
          function videojs(id, options, ready) {
            var tag = void 0;
            if (typeof id === "string") {
              if (id.indexOf("#") === 0) {
                id = id.slice(1);
              }
              if (videojs.getPlayers()[id]) {
                if (options) {
                  _log2["default"].warn(
                    'Player "' +
                      id +
                      '" is already initialised. Options will not be applied.'
                  );
                }
                if (ready) {
                  videojs.getPlayers()[id].ready(ready);
                }
                return videojs.getPlayers()[id];
              }
              tag = Dom.getEl(id);
            } else {
              tag = id;
            }
            if (!tag || !tag.nodeName) {
              throw new TypeError(
                "The element or ID supplied is not valid. (videojs)"
              );
            }
            if (tag.player || _player2["default"].players[tag.playerId]) {
              return tag.player || _player2["default"].players[tag.playerId];
            }
            options = options || {};
            videojs.hooks("beforesetup").forEach(function (hookFunction) {
              var opts = hookFunction(
                tag,
                (0, _mergeOptions3["default"])(options)
              );
              if (!(0, _obj.isObject)(opts) || Array.isArray(opts)) {
                _log2["default"].error(
                  "please return an object in beforesetup hooks"
                );
                return;
              }
              options = (0, _mergeOptions3["default"])(options, opts);
            });
            var PlayerComponent = _component2["default"].getComponent("Player");
            var player = new PlayerComponent(tag, options, ready);
            videojs.hooks("setup").forEach(function (hookFunction) {
              return hookFunction(player);
            });
            return player;
          }
          videojs.hooks_ = {};
          videojs.hooks = function (type, fn) {
            videojs.hooks_[type] = videojs.hooks_[type] || [];
            if (fn) {
              videojs.hooks_[type] = videojs.hooks_[type].concat(fn);
            }
            return videojs.hooks_[type];
          };
          videojs.hook = function (type, fn) {
            videojs.hooks(type, fn);
          };
          videojs.removeHook = function (type, fn) {
            var index = videojs.hooks(type).indexOf(fn);
            if (index <= -1) {
              return false;
            }
            videojs.hooks_[type] = videojs.hooks_[type].slice();
            videojs.hooks_[type].splice(index, 1);
            return true;
          };
          if (
            _window2["default"].VIDEOJS_NO_DYNAMIC_STYLE !== true &&
            Dom.isReal()
          ) {
            var style = Dom.$(".vjs-styles-defaults");
            if (!style) {
              style = stylesheet.createStyleElement("vjs-styles-defaults");
              var head = Dom.$("head");
              if (head) {
                head.insertBefore(style, head.firstChild);
              }
              stylesheet.setTextContent(
                style,
                "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    "
              );
            }
          }
          setup.autoSetupTimeout(1, videojs);
          videojs.VERSION = "5.19.2";
          videojs.options = _player2["default"].prototype.options_;
          videojs.getPlayers = function () {
            return _player2["default"].players;
          };
          videojs.players = _player2["default"].players;
          videojs.getComponent = _component2["default"].getComponent;
          videojs.registerComponent = function (name, comp) {
            if (_tech2["default"].isTech(comp)) {
              _log2["default"].warn(
                "The " +
                  name +
                  " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"
              );
            }
            _component2["default"].registerComponent.call(
              _component2["default"],
              name,
              comp
            );
          };
          videojs.getTech = _tech2["default"].getTech;
          videojs.registerTech = _tech2["default"].registerTech;
          videojs.browser = browser;
          videojs.TOUCH_ENABLED = browser.TOUCH_ENABLED;
          videojs.extend = _extend2["default"];
          videojs.mergeOptions = _mergeOptions3["default"];
          videojs.bind = Fn.bind;
          videojs.plugin = _plugins2["default"];
          videojs.addLanguage = function (code, data) {
            var _mergeOptions;
            code = ("" + code).toLowerCase();
            videojs.options.languages = (0, _mergeOptions3["default"])(
              videojs.options.languages,
              ((_mergeOptions = {}),
              (_mergeOptions[code] = data),
              _mergeOptions)
            );
            return videojs.options.languages[code];
          };
          videojs.log = _log2["default"];
          videojs.createTimeRange = videojs.createTimeRanges =
            _timeRanges.createTimeRanges;
          videojs.formatTime = _formatTime2["default"];
          videojs.parseUrl = Url.parseUrl;
          videojs.isCrossOrigin = Url.isCrossOrigin;
          videojs.EventTarget = _eventTarget2["default"];
          videojs.on = Events.on;
          videojs.one = Events.one;
          videojs.off = Events.off;
          videojs.trigger = Events.trigger;
          videojs.xhr = _xhr2["default"];
          videojs.TextTrack = _textTrack2["default"];
          videojs.AudioTrack = _audioTrack2["default"];
          videojs.VideoTrack = _videoTrack2["default"];
          videojs.isEl = Dom.isEl;
          videojs.isTextNode = Dom.isTextNode;
          videojs.createEl = Dom.createEl;
          videojs.hasClass = Dom.hasElClass;
          videojs.addClass = Dom.addElClass;
          videojs.removeClass = Dom.removeElClass;
          videojs.toggleClass = Dom.toggleElClass;
          videojs.setAttributes = Dom.setElAttributes;
          videojs.getAttributes = Dom.getElAttributes;
          videojs.emptyEl = Dom.emptyEl;
          videojs.appendContent = Dom.appendContent;
          videojs.insertContent = Dom.insertContent;
          videojs.computedStyle = _computedStyle2["default"];
          if (typeof define === "function" && define.amd) {
            define("videojs", [], function () {
              return videojs;
            });
          } else if (
            (typeof exports === "undefined"
              ? "undefined"
              : _typeof(exports)) === "object" &&
            (typeof module === "undefined" ? "undefined" : _typeof(module)) ===
              "object"
          ) {
            module.exports = videojs;
          }
          exports["default"] = videojs;
        },
        {
          42: 42,
          43: 43,
          5: 5,
          51: 51,
          52: 52,
          56: 56,
          62: 62,
          64: 64,
          72: 72,
          77: 77,
          78: 78,
          80: 80,
          81: 81,
          82: 82,
          83: 83,
          84: 84,
          86: 86,
          87: 87,
          88: 88,
          89: 89,
          90: 90,
          92: 92,
          94: 94,
          95: 95,
          99: 99,
        },
      ],
      94: [
        function (_dereq_, module, exports) {
          (function (global) {
            var topLevel =
              typeof global !== "undefined"
                ? global
                : typeof window !== "undefined"
                ? window
                : {};
            var minDoc = _dereq_(96);
            if (typeof document !== "undefined") {
              module.exports = document;
            } else {
              var doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"];
              if (!doccy) {
                doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc;
              }
              module.exports = doccy;
            }
          }.call(
            this,
            typeof global !== "undefined"
              ? global
              : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
              ? window
              : {}
          ));
        },
        { 96: 96 },
      ],
      95: [
        function (_dereq_, module, exports) {
          (function (global) {
            if (typeof window !== "undefined") {
              module.exports = window;
            } else if (typeof global !== "undefined") {
              module.exports = global;
            } else if (typeof self !== "undefined") {
              module.exports = self;
            } else {
              module.exports = {};
            }
          }.call(
            this,
            typeof global !== "undefined"
              ? global
              : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
              ? window
              : {}
          ));
        },
        {},
      ],
      96: [function (_dereq_, module, exports) {}, {}],
      97: [
        function (_dereq_, module, exports) {
          module.exports = SafeParseTuple;
          function SafeParseTuple(obj, reviver) {
            var json;
            var error = null;
            try {
              json = JSON.parse(obj, reviver);
            } catch (err) {
              error = err;
            }
            return [error, json];
          }
        },
        {},
      ],
      98: [
        function (_dereq_, module, exports) {
          function clean(s) {
            return s.replace(/\n\r?\s*/g, "");
          }
          module.exports = function tsml(sa) {
            var s = "",
              i = 0;
            for (; i < arguments.length; i++)
              s += clean(sa[i]) + (arguments[i + 1] || "");
            return s;
          };
        },
        {},
      ],
      99: [
        function (_dereq_, module, exports) {
          "use strict";
          var window = _dereq_(95);
          var isFunction = _dereq_(100);
          var parseHeaders = _dereq_(103);
          var xtend = _dereq_(104);
          module.exports = createXHR;
          createXHR.XMLHttpRequest = window.XMLHttpRequest || noop;
          createXHR.XDomainRequest =
            "withCredentials" in new createXHR.XMLHttpRequest()
              ? createXHR.XMLHttpRequest
              : window.XDomainRequest;
          forEachArray(
            ["get", "put", "post", "patch", "head", "delete"],
            function (method) {
              createXHR[method === "delete" ? "del" : method] = function (
                uri,
                options,
                callback
              ) {
                options = initParams(uri, options, callback);
                options.method = method.toUpperCase();
                return _createXHR(options);
              };
            }
          );
          function forEachArray(array, iterator) {
            for (var i = 0; i < array.length; i++) {
              iterator(array[i]);
            }
          }
          function isEmpty(obj) {
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) return false;
            }
            return true;
          }
          function initParams(uri, options, callback) {
            var params = uri;
            if (isFunction(options)) {
              callback = options;
              if (typeof uri === "string") {
                params = { uri: uri };
              }
            } else {
              params = xtend(options, { uri: uri });
            }
            params.callback = callback;
            return params;
          }
          function createXHR(uri, options, callback) {
            options = initParams(uri, options, callback);
            return _createXHR(options);
          }
          function _createXHR(options) {
            if (typeof options.callback === "undefined") {
              throw new Error("callback argument missing");
            }
            var called = false;
            var callback = function cbOnce(err, response, body) {
              if (!called) {
                called = true;
                options.callback(err, response, body);
              }
            };
            function readystatechange() {
              if (xhr.readyState === 4) {
                setTimeout(loadFunc, 0);
              }
            }
            function getBody() {
              var body = undefined;
              if (xhr.response) {
                body = xhr.response;
              } else {
                body = xhr.responseText || getXml(xhr);
              }
              if (isJson) {
                try {
                  body = JSON.parse(body);
                } catch (e) {}
              }
              return body;
            }
            function errorFunc(evt) {
              clearTimeout(timeoutTimer);
              if (!(evt instanceof Error)) {
                evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
              }
              evt.statusCode = 0;
              return callback(evt, failureResponse);
            }
            function loadFunc() {
              if (aborted) return;
              var status;
              clearTimeout(timeoutTimer);
              if (options.useXDR && xhr.status === undefined) {
                status = 200;
              } else {
                status = xhr.status === 1223 ? 204 : xhr.status;
              }
              var response = failureResponse;
              var err = null;
              if (status !== 0) {
                response = {
                  body: getBody(),
                  statusCode: status,
                  method: method,
                  headers: {},
                  url: uri,
                  rawRequest: xhr,
                };
                if (xhr.getAllResponseHeaders) {
                  response.headers = parseHeaders(xhr.getAllResponseHeaders());
                }
              } else {
                err = new Error("Internal XMLHttpRequest Error");
              }
              return callback(err, response, response.body);
            }
            var xhr = options.xhr || null;
            if (!xhr) {
              if (options.cors || options.useXDR) {
                xhr = new createXHR.XDomainRequest();
              } else {
                xhr = new createXHR.XMLHttpRequest();
              }
            }
            var key;
            var aborted;
            var uri = (xhr.url = options.uri || options.url);
            var method = (xhr.method = options.method || "GET");
            var body = options.body || options.data;
            var headers = (xhr.headers = options.headers || {});
            var sync = !!options.sync;
            var isJson = false;
            var timeoutTimer;
            var failureResponse = {
              body: undefined,
              headers: {},
              statusCode: 0,
              method: method,
              url: uri,
              rawRequest: xhr,
            };
            if ("json" in options && options.json !== false) {
              isJson = true;
              headers["accept"] ||
                headers["Accept"] ||
                (headers["Accept"] = "application/json");
              if (method !== "GET" && method !== "HEAD") {
                headers["content-type"] ||
                  headers["Content-Type"] ||
                  (headers["Content-Type"] = "application/json");
                body = JSON.stringify(
                  options.json === true ? body : options.json
                );
              }
            }
            xhr.onreadystatechange = readystatechange;
            xhr.onload = loadFunc;
            xhr.onerror = errorFunc;
            xhr.onprogress = function () {};
            xhr.onabort = function () {
              aborted = true;
            };
            xhr.ontimeout = errorFunc;
            xhr.open(method, uri, !sync, options.username, options.password);
            if (!sync) {
              xhr.withCredentials = !!options.withCredentials;
            }
            if (!sync && options.timeout > 0) {
              timeoutTimer = setTimeout(function () {
                if (aborted) return;
                aborted = true;
                xhr.abort("timeout");
                var e = new Error("XMLHttpRequest timeout");
                e.code = "ETIMEDOUT";
                errorFunc(e);
              }, options.timeout);
            }
            if (xhr.setRequestHeader) {
              for (key in headers) {
                if (headers.hasOwnProperty(key)) {
                  xhr.setRequestHeader(key, headers[key]);
                }
              }
            } else if (options.headers && !isEmpty(options.headers)) {
              throw new Error(
                "Headers cannot be set on an XDomainRequest object"
              );
            }
            if ("responseType" in options) {
              xhr.responseType = options.responseType;
            }
            if (
              "beforeSend" in options &&
              typeof options.beforeSend === "function"
            ) {
              options.beforeSend(xhr);
            }
            xhr.send(body || null);
            return xhr;
          }
          function getXml(xhr) {
            if (xhr.responseType === "document") {
              return xhr.responseXML;
            }
            var firefoxBugTakenEffect =
              xhr.responseXML &&
              xhr.responseXML.documentElement.nodeName === "parsererror";
            if (xhr.responseType === "" && !firefoxBugTakenEffect) {
              return xhr.responseXML;
            }
            return null;
          }
          function noop() {}
        },
        { 100: 100, 103: 103, 104: 104, 95: 95 },
      ],
      100: [
        function (_dereq_, module, exports) {
          module.exports = isFunction;
          var toString = Object.prototype.toString;
          function isFunction(fn) {
            var string = toString.call(fn);
            return (
              string === "[object Function]" ||
              (typeof fn === "function" && string !== "[object RegExp]") ||
              (typeof window !== "undefined" &&
                (fn === window.setTimeout ||
                  fn === window.alert ||
                  fn === window.confirm ||
                  fn === window.prompt))
            );
          }
        },
        {},
      ],
      101: [
        function (_dereq_, module, exports) {
          var isFunction = _dereq_(100);
          module.exports = forEach;
          var toString = Object.prototype.toString;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          function forEach(list, iterator, context) {
            if (!isFunction(iterator)) {
              throw new TypeError("iterator must be a function");
            }
            if (arguments.length < 3) {
              context = this;
            }
            if (toString.call(list) === "[object Array]")
              forEachArray(list, iterator, context);
            else if (typeof list === "string")
              forEachString(list, iterator, context);
            else forEachObject(list, iterator, context);
          }
          function forEachArray(array, iterator, context) {
            for (var i = 0, len = array.length; i < len; i++) {
              if (hasOwnProperty.call(array, i)) {
                iterator.call(context, array[i], i, array);
              }
            }
          }
          function forEachString(string, iterator, context) {
            for (var i = 0, len = string.length; i < len; i++) {
              iterator.call(context, string.charAt(i), i, string);
            }
          }
          function forEachObject(object, iterator, context) {
            for (var k in object) {
              if (hasOwnProperty.call(object, k)) {
                iterator.call(context, object[k], k, object);
              }
            }
          }
        },
        { 100: 100 },
      ],
      102: [
        function (_dereq_, module, exports) {
          exports = module.exports = trim;
          function trim(str) {
            return str.replace(/^\s*|\s*$/g, "");
          }
          exports.left = function (str) {
            return str.replace(/^\s*/, "");
          };
          exports.right = function (str) {
            return str.replace(/\s*$/, "");
          };
        },
        {},
      ],
      103: [
        function (_dereq_, module, exports) {
          var trim = _dereq_(102),
            forEach = _dereq_(101),
            isArray = function (arg) {
              return Object.prototype.toString.call(arg) === "[object Array]";
            };
          module.exports = function (headers) {
            if (!headers) return {};
            var result = {};
            forEach(trim(headers).split("\n"), function (row) {
              var index = row.indexOf(":"),
                key = trim(row.slice(0, index)).toLowerCase(),
                value = trim(row.slice(index + 1));
              if (typeof result[key] === "undefined") {
                result[key] = value;
              } else if (isArray(result[key])) {
                result[key].push(value);
              } else {
                result[key] = [result[key], value];
              }
            });
            return result;
          };
        },
        { 101: 101, 102: 102 },
      ],
      104: [
        function (_dereq_, module, exports) {
          module.exports = extend;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          function extend() {
            var target = {};
            for (var i = 0; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          }
        },
        {},
      ],
      105: [
        function (_dereq_, module, exports) {
          var window = _dereq_(109);
          var vttjs = (module.exports = {
            WebVTT: _dereq_(106).WebVTT,
            VTTCue: _dereq_(107).VTTCue,
            VTTRegion: _dereq_(108).VTTRegion,
          });
          window.vttjs = vttjs;
          window.WebVTT = vttjs.WebVTT;
          var cueShim = vttjs.VTTCue;
          var regionShim = vttjs.VTTRegion;
          var nativeVTTCue = window.VTTCue;
          var nativeVTTRegion = window.VTTRegion;
          vttjs.shim = function () {
            window.VTTCue = cueShim;
            window.VTTRegion = regionShim;
          };
          vttjs.restore = function () {
            window.VTTCue = nativeVTTCue;
            window.VTTRegion = nativeVTTRegion;
          };
          if (!window.VTTCue) {
            vttjs.shim();
          }
        },
        { 106: 106, 107: 107, 108: 108, 109: 109 },
      ],
      106: [
        function (_dereq_, module, exports) {
          (function (global) {
            var _objCreate =
              Object.create ||
              (function () {
                function F() {}
                return function (o) {
                  if (arguments.length !== 1) {
                    throw new Error(
                      "Object.create shim only accepts one parameter."
                    );
                  }
                  F.prototype = o;
                  return new F();
                };
              })();
            function ParsingError(errorData, message) {
              this.name = "ParsingError";
              this.code = errorData.code;
              this.message = message || errorData.message;
            }
            ParsingError.prototype = _objCreate(Error.prototype);
            ParsingError.prototype.constructor = ParsingError;
            ParsingError.Errors = {
              BadSignature: { code: 0, message: "Malformed WebVTT signature." },
              BadTimeStamp: { code: 1, message: "Malformed time stamp." },
            };
            function parseTimeStamp(input) {
              function computeSeconds(h, m, s, f) {
                return (h | 0) * 3600 + (m | 0) * 60 + (s | 0) + (f | 0) / 1000;
              }
              var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
              if (!m) {
                return null;
              }
              if (m[3]) {
                return computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]);
              } else if (m[1] > 59) {
                return computeSeconds(m[1], m[2], 0, m[4]);
              } else {
                return computeSeconds(0, m[1], m[2], m[4]);
              }
            }
            function Settings() {
              this.values = _objCreate(null);
            }
            Settings.prototype = {
              set: function (k, v) {
                if (!this.get(k) && v !== "") {
                  this.values[k] = v;
                }
              },
              get: function (k, dflt, defaultKey) {
                if (defaultKey) {
                  return this.has(k) ? this.values[k] : dflt[defaultKey];
                }
                return this.has(k) ? this.values[k] : dflt;
              },
              has: function (k) {
                return k in this.values;
              },
              alt: function (k, v, a) {
                for (var n = 0; n < a.length; ++n) {
                  if (v === a[n]) {
                    this.set(k, v);
                    break;
                  }
                }
              },
              integer: function (k, v) {
                if (/^-?\d+$/.test(v)) {
                  this.set(k, parseInt(v, 10));
                }
              },
              percent: function (k, v) {
                var m;
                if ((m = v.match(/^([\d]{1,3})(\.[\d]*)?%$/))) {
                  v = parseFloat(v);
                  if (v >= 0 && v <= 100) {
                    this.set(k, v);
                    return true;
                  }
                }
                return false;
              },
            };
            function parseOptions(input, callback, keyValueDelim, groupDelim) {
              var groups = groupDelim ? input.split(groupDelim) : [input];
              for (var i in groups) {
                if (typeof groups[i] !== "string") {
                  continue;
                }
                var kv = groups[i].split(keyValueDelim);
                if (kv.length !== 2) {
                  continue;
                }
                var k = kv[0];
                var v = kv[1];
                callback(k, v);
              }
            }
            function parseCue(input, cue, regionList) {
              var oInput = input;
              function consumeTimeStamp() {
                var ts = parseTimeStamp(input);
                if (ts === null) {
                  throw new ParsingError(
                    ParsingError.Errors.BadTimeStamp,
                    "Malformed timestamp: " + oInput
                  );
                }
                input = input.replace(/^[^\sa-zA-Z-]+/, "");
                return ts;
              }
              function consumeCueSettings(input, cue) {
                var settings = new Settings();
                parseOptions(
                  input,
                  function (k, v) {
                    switch (k) {
                      case "region":
                        for (var i = regionList.length - 1; i >= 0; i--) {
                          if (regionList[i].id === v) {
                            settings.set(k, regionList[i].region);
                            break;
                          }
                        }
                        break;
                      case "vertical":
                        settings.alt(k, v, ["rl", "lr"]);
                        break;
                      case "line":
                        var vals = v.split(","),
                          vals0 = vals[0];
                        settings.integer(k, vals0);
                        settings.percent(k, vals0)
                          ? settings.set("snapToLines", false)
                          : null;
                        settings.alt(k, vals0, ["auto"]);
                        if (vals.length === 2) {
                          settings.alt("lineAlign", vals[1], [
                            "start",
                            "middle",
                            "end",
                          ]);
                        }
                        break;
                      case "position":
                        vals = v.split(",");
                        settings.percent(k, vals[0]);
                        if (vals.length === 2) {
                          settings.alt("positionAlign", vals[1], [
                            "start",
                            "middle",
                            "end",
                          ]);
                        }
                        break;
                      case "size":
                        settings.percent(k, v);
                        break;
                      case "align":
                        settings.alt(k, v, [
                          "start",
                          "middle",
                          "end",
                          "left",
                          "right",
                        ]);
                        break;
                    }
                  },
                  /:/,
                  /\s/
                );
                cue.region = settings.get("region", null);
                cue.vertical = settings.get("vertical", "");
                cue.line = settings.get("line", "auto");
                cue.lineAlign = settings.get("lineAlign", "start");
                cue.snapToLines = settings.get("snapToLines", true);
                cue.size = settings.get("size", 100);
                cue.align = settings.get("align", "middle");
                cue.position = settings.get(
                  "position",
                  { start: 0, left: 0, middle: 50, end: 100, right: 100 },
                  cue.align
                );
                cue.positionAlign = settings.get(
                  "positionAlign",
                  {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end",
                  },
                  cue.align
                );
              }
              function skipWhitespace() {
                input = input.replace(/^\s+/, "");
              }
              skipWhitespace();
              cue.startTime = consumeTimeStamp();
              skipWhitespace();
              if (input.substr(0, 3) !== "-->") {
                throw new ParsingError(
                  ParsingError.Errors.BadTimeStamp,
                  "Malformed time stamp (time stamps must be separated by '-->'): " +
                    oInput
                );
              }
              input = input.substr(3);
              skipWhitespace();
              cue.endTime = consumeTimeStamp();
              skipWhitespace();
              consumeCueSettings(input, cue);
            }
            var ESCAPE = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&lrm;": "\u200e",
              "&rlm;": "\u200f",
              "&nbsp;": "\u00a0",
            };
            var TAG_NAME = {
              c: "span",
              i: "i",
              b: "b",
              u: "u",
              ruby: "ruby",
              rt: "rt",
              v: "span",
              lang: "span",
            };
            var TAG_ANNOTATION = { v: "title", lang: "lang" };
            var NEEDS_PARENT = { rt: "ruby" };
            function parseContent(window, input) {
              function nextToken() {
                if (!input) {
                  return null;
                }
                function consume(result) {
                  input = input.substr(result.length);
                  return result;
                }
                var m = input.match(/^([^<]*)(<[^>]+>?)?/);
                return consume(m[1] ? m[1] : m[2]);
              }
              function unescape1(e) {
                return ESCAPE[e];
              }
              function unescape(s) {
                while ((m = s.match(/&(amp|lt|gt|lrm|rlm|nbsp);/))) {
                  s = s.replace(m[0], unescape1);
                }
                return s;
              }
              function shouldAdd(current, element) {
                return (
                  !NEEDS_PARENT[element.localName] ||
                  NEEDS_PARENT[element.localName] === current.localName
                );
              }
              function createElement(type, annotation) {
                var tagName = TAG_NAME[type];
                if (!tagName) {
                  return null;
                }
                var element = window.document.createElement(tagName);
                element.localName = tagName;
                var name = TAG_ANNOTATION[type];
                if (name && annotation) {
                  element[name] = annotation.trim();
                }
                return element;
              }
              var rootDiv = window.document.createElement("div"),
                current = rootDiv,
                t,
                tagStack = [];
              while ((t = nextToken()) !== null) {
                if (t[0] === "<") {
                  if (t[1] === "/") {
                    if (
                      tagStack.length &&
                      tagStack[tagStack.length - 1] ===
                        t.substr(2).replace(">", "")
                    ) {
                      tagStack.pop();
                      current = current.parentNode;
                    }
                    continue;
                  }
                  var ts = parseTimeStamp(t.substr(1, t.length - 2));
                  var node;
                  if (ts) {
                    node = window.document.createProcessingInstruction(
                      "timestamp",
                      ts
                    );
                    current.appendChild(node);
                    continue;
                  }
                  var m = t.match(
                    /^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/
                  );
                  if (!m) {
                    continue;
                  }
                  node = createElement(m[1], m[3]);
                  if (!node) {
                    continue;
                  }
                  if (!shouldAdd(current, node)) {
                    continue;
                  }
                  if (m[2]) {
                    node.className = m[2].substr(1).replace(".", " ");
                  }
                  tagStack.push(m[1]);
                  current.appendChild(node);
                  current = node;
                  continue;
                }
                current.appendChild(
                  window.document.createTextNode(unescape(t))
                );
              }
              return rootDiv;
            }
            var strongRTLRanges = [
              [0x5be, 0x5be],
              [0x5c0, 0x5c0],
              [0x5c3, 0x5c3],
              [0x5c6, 0x5c6],
              [0x5d0, 0x5ea],
              [0x5f0, 0x5f4],
              [0x608, 0x608],
              [0x60b, 0x60b],
              [0x60d, 0x60d],
              [0x61b, 0x61b],
              [0x61e, 0x64a],
              [0x66d, 0x66f],
              [0x671, 0x6d5],
              [0x6e5, 0x6e6],
              [0x6ee, 0x6ef],
              [0x6fa, 0x70d],
              [0x70f, 0x710],
              [0x712, 0x72f],
              [0x74d, 0x7a5],
              [0x7b1, 0x7b1],
              [0x7c0, 0x7ea],
              [0x7f4, 0x7f5],
              [0x7fa, 0x7fa],
              [0x800, 0x815],
              [0x81a, 0x81a],
              [0x824, 0x824],
              [0x828, 0x828],
              [0x830, 0x83e],
              [0x840, 0x858],
              [0x85e, 0x85e],
              [0x8a0, 0x8a0],
              [0x8a2, 0x8ac],
              [0x200f, 0x200f],
              [0xfb1d, 0xfb1d],
              [0xfb1f, 0xfb28],
              [0xfb2a, 0xfb36],
              [0xfb38, 0xfb3c],
              [0xfb3e, 0xfb3e],
              [0xfb40, 0xfb41],
              [0xfb43, 0xfb44],
              [0xfb46, 0xfbc1],
              [0xfbd3, 0xfd3d],
              [0xfd50, 0xfd8f],
              [0xfd92, 0xfdc7],
              [0xfdf0, 0xfdfc],
              [0xfe70, 0xfe74],
              [0xfe76, 0xfefc],
              [0x10800, 0x10805],
              [0x10808, 0x10808],
              [0x1080a, 0x10835],
              [0x10837, 0x10838],
              [0x1083c, 0x1083c],
              [0x1083f, 0x10855],
              [0x10857, 0x1085f],
              [0x10900, 0x1091b],
              [0x10920, 0x10939],
              [0x1093f, 0x1093f],
              [0x10980, 0x109b7],
              [0x109be, 0x109bf],
              [0x10a00, 0x10a00],
              [0x10a10, 0x10a13],
              [0x10a15, 0x10a17],
              [0x10a19, 0x10a33],
              [0x10a40, 0x10a47],
              [0x10a50, 0x10a58],
              [0x10a60, 0x10a7f],
              [0x10b00, 0x10b35],
              [0x10b40, 0x10b55],
              [0x10b58, 0x10b72],
              [0x10b78, 0x10b7f],
              [0x10c00, 0x10c48],
              [0x1ee00, 0x1ee03],
              [0x1ee05, 0x1ee1f],
              [0x1ee21, 0x1ee22],
              [0x1ee24, 0x1ee24],
              [0x1ee27, 0x1ee27],
              [0x1ee29, 0x1ee32],
              [0x1ee34, 0x1ee37],
              [0x1ee39, 0x1ee39],
              [0x1ee3b, 0x1ee3b],
              [0x1ee42, 0x1ee42],
              [0x1ee47, 0x1ee47],
              [0x1ee49, 0x1ee49],
              [0x1ee4b, 0x1ee4b],
              [0x1ee4d, 0x1ee4f],
              [0x1ee51, 0x1ee52],
              [0x1ee54, 0x1ee54],
              [0x1ee57, 0x1ee57],
              [0x1ee59, 0x1ee59],
              [0x1ee5b, 0x1ee5b],
              [0x1ee5d, 0x1ee5d],
              [0x1ee5f, 0x1ee5f],
              [0x1ee61, 0x1ee62],
              [0x1ee64, 0x1ee64],
              [0x1ee67, 0x1ee6a],
              [0x1ee6c, 0x1ee72],
              [0x1ee74, 0x1ee77],
              [0x1ee79, 0x1ee7c],
              [0x1ee7e, 0x1ee7e],
              [0x1ee80, 0x1ee89],
              [0x1ee8b, 0x1ee9b],
              [0x1eea1, 0x1eea3],
              [0x1eea5, 0x1eea9],
              [0x1eeab, 0x1eebb],
              [0x10fffd, 0x10fffd],
            ];
            function isStrongRTLChar(charCode) {
              for (var i = 0; i < strongRTLRanges.length; i++) {
                var currentRange = strongRTLRanges[i];
                if (
                  charCode >= currentRange[0] &&
                  charCode <= currentRange[1]
                ) {
                  return true;
                }
              }
              return false;
            }
            function determineBidi(cueDiv) {
              var nodeStack = [],
                text = "",
                charCode;
              if (!cueDiv || !cueDiv.childNodes) {
                return "ltr";
              }
              function pushNodes(nodeStack, node) {
                for (var i = node.childNodes.length - 1; i >= 0; i--) {
                  nodeStack.push(node.childNodes[i]);
                }
              }
              function nextTextNode(nodeStack) {
                if (!nodeStack || !nodeStack.length) {
                  return null;
                }
                var node = nodeStack.pop(),
                  text = node.textContent || node.innerText;
                if (text) {
                  var m = text.match(/^.*(\n|\r)/);
                  if (m) {
                    nodeStack.length = 0;
                    return m[0];
                  }
                  return text;
                }
                if (node.tagName === "ruby") {
                  return nextTextNode(nodeStack);
                }
                if (node.childNodes) {
                  pushNodes(nodeStack, node);
                  return nextTextNode(nodeStack);
                }
              }
              pushNodes(nodeStack, cueDiv);
              while ((text = nextTextNode(nodeStack))) {
                for (var i = 0; i < text.length; i++) {
                  charCode = text.charCodeAt(i);
                  if (isStrongRTLChar(charCode)) {
                    return "rtl";
                  }
                }
              }
              return "ltr";
            }
            function computeLinePos(cue) {
              if (
                typeof cue.line === "number" &&
                (cue.snapToLines || (cue.line >= 0 && cue.line <= 100))
              ) {
                return cue.line;
              }
              if (
                !cue.track ||
                !cue.track.textTrackList ||
                !cue.track.textTrackList.mediaElement
              ) {
                return -1;
              }
              var track = cue.track,
                trackList = track.textTrackList,
                count = 0;
              for (
                var i = 0;
                i < trackList.length && trackList[i] !== track;
                i++
              ) {
                if (trackList[i].mode === "showing") {
                  count++;
                }
              }
              return ++count * -1;
            }
            function StyleBox() {}
            StyleBox.prototype.applyStyles = function (styles, div) {
              div = div || this.div;
              for (var prop in styles) {
                if (styles.hasOwnProperty(prop)) {
                  div.style[prop] = styles[prop];
                }
              }
            };
            StyleBox.prototype.formatStyle = function (val, unit) {
              return val === 0 ? 0 : val + unit;
            };
            function CueStyleBox(window, cue, styleOptions) {
              var isIE8 = /MSIE\s8\.0/.test(navigator.userAgent);
              var color = "rgba(255, 255, 255, 1)";
              var backgroundColor = "rgba(0, 0, 0, 0.8)";
              if (isIE8) {
                color = "rgb(255, 255, 255)";
                backgroundColor = "rgb(0, 0, 0)";
              }
              StyleBox.call(this);
              this.cue = cue;
              this.cueDiv = parseContent(window, cue.text);
              var styles = {
                color: color,
                backgroundColor: backgroundColor,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline",
              };
              if (!isIE8) {
                styles.writingMode =
                  cue.vertical === ""
                    ? "horizontal-tb"
                    : cue.vertical === "lr"
                    ? "vertical-lr"
                    : "vertical-rl";
                styles.unicodeBidi = "plaintext";
              }
              this.applyStyles(styles, this.cueDiv);
              this.div = window.document.createElement("div");
              styles = {
                textAlign: cue.align === "middle" ? "center" : cue.align,
                font: styleOptions.font,
                whiteSpace: "pre-line",
                position: "absolute",
              };
              if (!isIE8) {
                styles.direction = determineBidi(this.cueDiv);
                styles.writingMode =
                  cue.vertical === ""
                    ? "horizontal-tb"
                    : cue.vertical === "lr"
                    ? "vertical-lr"
                    : ("vertical-rl".stylesunicodeBidi = "plaintext");
              }
              this.applyStyles(styles);
              this.div.appendChild(this.cueDiv);
              var textPos = 0;
              switch (cue.positionAlign) {
                case "start":
                  textPos = cue.position;
                  break;
                case "middle":
                  textPos = cue.position - cue.size / 2;
                  break;
                case "end":
                  textPos = cue.position - cue.size;
                  break;
              }
              if (cue.vertical === "") {
                this.applyStyles({
                  left: this.formatStyle(textPos, "%"),
                  width: this.formatStyle(cue.size, "%"),
                });
              } else {
                this.applyStyles({
                  top: this.formatStyle(textPos, "%"),
                  height: this.formatStyle(cue.size, "%"),
                });
              }
              this.move = function (box) {
                this.applyStyles({
                  top: this.formatStyle(box.top, "px"),
                  bottom: this.formatStyle(box.bottom, "px"),
                  left: this.formatStyle(box.left, "px"),
                  right: this.formatStyle(box.right, "px"),
                  height: this.formatStyle(box.height, "px"),
                  width: this.formatStyle(box.width, "px"),
                });
              };
            }
            CueStyleBox.prototype = _objCreate(StyleBox.prototype);
            CueStyleBox.prototype.constructor = CueStyleBox;
            function BoxPosition(obj) {
              var isIE8 = /MSIE\s8\.0/.test(navigator.userAgent);
              var lh, height, width, top;
              if (obj.div) {
                height = obj.div.offsetHeight;
                width = obj.div.offsetWidth;
                top = obj.div.offsetTop;
                var rects =
                  (rects = obj.div.childNodes) &&
                  (rects = rects[0]) &&
                  rects.getClientRects &&
                  rects.getClientRects();
                obj = obj.div.getBoundingClientRect();
                lh = rects
                  ? Math.max(
                      (rects[0] && rects[0].height) || 0,
                      obj.height / rects.length
                    )
                  : 0;
              }
              this.left = obj.left;
              this.right = obj.right;
              this.top = obj.top || top;
              this.height = obj.height || height;
              this.bottom = obj.bottom || top + (obj.height || height);
              this.width = obj.width || width;
              this.lineHeight = lh !== undefined ? lh : obj.lineHeight;
              if (isIE8 && !this.lineHeight) {
                this.lineHeight = 13;
              }
            }
            BoxPosition.prototype.move = function (axis, toMove) {
              toMove = toMove !== undefined ? toMove : this.lineHeight;
              switch (axis) {
                case "+x":
                  this.left += toMove;
                  this.right += toMove;
                  break;
                case "-x":
                  this.left -= toMove;
                  this.right -= toMove;
                  break;
                case "+y":
                  this.top += toMove;
                  this.bottom += toMove;
                  break;
                case "-y":
                  this.top -= toMove;
                  this.bottom -= toMove;
                  break;
              }
            };
            BoxPosition.prototype.overlaps = function (b2) {
              return (
                this.left < b2.right &&
                this.right > b2.left &&
                this.top < b2.bottom &&
                this.bottom > b2.top
              );
            };
            BoxPosition.prototype.overlapsAny = function (boxes) {
              for (var i = 0; i < boxes.length; i++) {
                if (this.overlaps(boxes[i])) {
                  return true;
                }
              }
              return false;
            };
            BoxPosition.prototype.within = function (container) {
              return (
                this.top >= container.top &&
                this.bottom <= container.bottom &&
                this.left >= container.left &&
                this.right <= container.right
              );
            };
            BoxPosition.prototype.overlapsOppositeAxis = function (
              container,
              axis
            ) {
              switch (axis) {
                case "+x":
                  return this.left < container.left;
                case "-x":
                  return this.right > container.right;
                case "+y":
                  return this.top < container.top;
                case "-y":
                  return this.bottom > container.bottom;
              }
            };
            BoxPosition.prototype.intersectPercentage = function (b2) {
              var x = Math.max(
                  0,
                  Math.min(this.right, b2.right) - Math.max(this.left, b2.left)
                ),
                y = Math.max(
                  0,
                  Math.min(this.bottom, b2.bottom) - Math.max(this.top, b2.top)
                ),
                intersectArea = x * y;
              return intersectArea / (this.height * this.width);
            };
            BoxPosition.prototype.toCSSCompatValues = function (reference) {
              return {
                top: this.top - reference.top,
                bottom: reference.bottom - this.bottom,
                left: this.left - reference.left,
                right: reference.right - this.right,
                height: this.height,
                width: this.width,
              };
            };
            BoxPosition.getSimpleBoxPosition = function (obj) {
              var height = obj.div
                ? obj.div.offsetHeight
                : obj.tagName
                ? obj.offsetHeight
                : 0;
              var width = obj.div
                ? obj.div.offsetWidth
                : obj.tagName
                ? obj.offsetWidth
                : 0;
              var top = obj.div
                ? obj.div.offsetTop
                : obj.tagName
                ? obj.offsetTop
                : 0;
              obj = obj.div
                ? obj.div.getBoundingClientRect()
                : obj.tagName
                ? obj.getBoundingClientRect()
                : obj;
              var ret = {
                left: obj.left,
                right: obj.right,
                top: obj.top || top,
                height: obj.height || height,
                bottom: obj.bottom || top + (obj.height || height),
                width: obj.width || width,
              };
              return ret;
            };
            function moveBoxToLinePosition(
              window,
              styleBox,
              containerBox,
              boxPositions
            ) {
              function findBestPosition(b, axis) {
                var bestPosition,
                  specifiedPosition = new BoxPosition(b),
                  percentage = 1;
                for (var i = 0; i < axis.length; i++) {
                  while (
                    b.overlapsOppositeAxis(containerBox, axis[i]) ||
                    (b.within(containerBox) && b.overlapsAny(boxPositions))
                  ) {
                    b.move(axis[i]);
                  }
                  if (b.within(containerBox)) {
                    return b;
                  }
                  var p = b.intersectPercentage(containerBox);
                  if (percentage > p) {
                    bestPosition = new BoxPosition(b);
                    percentage = p;
                  }
                  b = new BoxPosition(specifiedPosition);
                }
                return bestPosition || specifiedPosition;
              }
              var boxPosition = new BoxPosition(styleBox),
                cue = styleBox.cue,
                linePos = computeLinePos(cue),
                axis = [];
              if (cue.snapToLines) {
                var size;
                switch (cue.vertical) {
                  case "":
                    axis = ["+y", "-y"];
                    size = "height";
                    break;
                  case "rl":
                    axis = ["+x", "-x"];
                    size = "width";
                    break;
                  case "lr":
                    axis = ["-x", "+x"];
                    size = "width";
                    break;
                }
                var step = boxPosition.lineHeight,
                  position = step * Math.round(linePos),
                  maxPosition = containerBox[size] + step,
                  initialAxis = axis[0];
                if (Math.abs(position) > maxPosition) {
                  position = position < 0 ? -1 : 1;
                  position *= Math.ceil(maxPosition / step) * step;
                }
                if (linePos < 0) {
                  position +=
                    cue.vertical === ""
                      ? containerBox.height
                      : containerBox.width;
                  axis = axis.reverse();
                }
                boxPosition.move(initialAxis, position);
              } else {
                var calculatedPercentage =
                  (boxPosition.lineHeight / containerBox.height) * 100;
                switch (cue.lineAlign) {
                  case "middle":
                    linePos -= calculatedPercentage / 2;
                    break;
                  case "end":
                    linePos -= calculatedPercentage;
                    break;
                }
                switch (cue.vertical) {
                  case "":
                    styleBox.applyStyles({
                      top: styleBox.formatStyle(linePos, "%"),
                    });
                    break;
                  case "rl":
                    styleBox.applyStyles({
                      left: styleBox.formatStyle(linePos, "%"),
                    });
                    break;
                  case "lr":
                    styleBox.applyStyles({
                      right: styleBox.formatStyle(linePos, "%"),
                    });
                    break;
                }
                axis = ["+y", "-x", "+x", "-y"];
                boxPosition = new BoxPosition(styleBox);
              }
              var bestPosition = findBestPosition(boxPosition, axis);
              styleBox.move(bestPosition.toCSSCompatValues(containerBox));
            }
            function WebVTT() {}
            WebVTT.StringDecoder = function () {
              return {
                decode: function (data) {
                  if (!data) {
                    return "";
                  }
                  if (typeof data !== "string") {
                    throw new Error("Error - expected string data.");
                  }
                  return decodeURIComponent(encodeURIComponent(data));
                },
              };
            };
            WebVTT.convertCueToDOMTree = function (window, cuetext) {
              if (!window || !cuetext) {
                return null;
              }
              return parseContent(window, cuetext);
            };
            var FONT_SIZE_PERCENT = 0.05;
            var FONT_STYLE = "sans-serif";
            var CUE_BACKGROUND_PADDING = "1.5%";
            WebVTT.processCues = function (window, cues, overlay) {
              if (!window || !cues || !overlay) {
                return null;
              }
              while (overlay.firstChild) {
                overlay.removeChild(overlay.firstChild);
              }
              var paddedOverlay = window.document.createElement("div");
              paddedOverlay.style.position = "absolute";
              paddedOverlay.style.left = "0";
              paddedOverlay.style.right = "0";
              paddedOverlay.style.top = "0";
              paddedOverlay.style.bottom = "0";
              paddedOverlay.style.margin = CUE_BACKGROUND_PADDING;
              overlay.appendChild(paddedOverlay);
              function shouldCompute(cues) {
                for (var i = 0; i < cues.length; i++) {
                  if (cues[i].hasBeenReset || !cues[i].displayState) {
                    return true;
                  }
                }
                return false;
              }
              if (!shouldCompute(cues)) {
                for (var i = 0; i < cues.length; i++) {
                  paddedOverlay.appendChild(cues[i].displayState);
                }
                return;
              }
              var boxPositions = [],
                containerBox = BoxPosition.getSimpleBoxPosition(paddedOverlay),
                fontSize =
                  Math.round(containerBox.height * FONT_SIZE_PERCENT * 100) /
                  100;
              var styleOptions = { font: fontSize + "px " + FONT_STYLE };
              (function () {
                var styleBox, cue;
                for (var i = 0; i < cues.length; i++) {
                  cue = cues[i];
                  styleBox = new CueStyleBox(window, cue, styleOptions);
                  paddedOverlay.appendChild(styleBox.div);
                  moveBoxToLinePosition(
                    window,
                    styleBox,
                    containerBox,
                    boxPositions
                  );
                  cue.displayState = styleBox.div;
                  boxPositions.push(BoxPosition.getSimpleBoxPosition(styleBox));
                }
              })();
            };
            WebVTT.Parser = function (window, vttjs, decoder) {
              if (!decoder) {
                decoder = vttjs;
                vttjs = {};
              }
              if (!vttjs) {
                vttjs = {};
              }
              this.window = window;
              this.vttjs = vttjs;
              this.state = "INITIAL";
              this.buffer = "";
              this.decoder = decoder || new TextDecoder("utf8");
              this.regionList = [];
            };
            WebVTT.Parser.prototype = {
              reportOrThrowError: function (e) {
                if (e instanceof ParsingError) {
                  this.onparsingerror && this.onparsingerror(e);
                } else {
                  throw e;
                }
              },
              parse: function (data) {
                var self = this;
                if (data) {
                  self.buffer += self.decoder.decode(data, { stream: true });
                }
                function collectNextLine() {
                  var buffer = self.buffer;
                  var pos = 0;
                  while (
                    pos < buffer.length &&
                    buffer[pos] !== "\r" &&
                    buffer[pos] !== "\n"
                  ) {
                    ++pos;
                  }
                  var line = buffer.substr(0, pos);
                  if (buffer[pos] === "\r") {
                    ++pos;
                  }
                  if (buffer[pos] === "\n") {
                    ++pos;
                  }
                  self.buffer = buffer.substr(pos);
                  return line;
                }
                function parseRegion(input) {
                  var settings = new Settings();
                  parseOptions(
                    input,
                    function (k, v) {
                      switch (k) {
                        case "id":
                          settings.set(k, v);
                          break;
                        case "width":
                          settings.percent(k, v);
                          break;
                        case "lines":
                          settings.integer(k, v);
                          break;
                        case "regionanchor":
                        case "viewportanchor":
                          var xy = v.split(",");
                          if (xy.length !== 2) {
                            break;
                          }
                          var anchor = new Settings();
                          anchor.percent("x", xy[0]);
                          anchor.percent("y", xy[1]);
                          if (!anchor.has("x") || !anchor.has("y")) {
                            break;
                          }
                          settings.set(k + "X", anchor.get("x"));
                          settings.set(k + "Y", anchor.get("y"));
                          break;
                        case "scroll":
                          settings.alt(k, v, ["up"]);
                          break;
                      }
                    },
                    /=/,
                    /\s/
                  );
                  if (settings.has("id")) {
                    var region = new (self.vttjs.VTTRegion ||
                      self.window.VTTRegion)();
                    region.width = settings.get("width", 100);
                    region.lines = settings.get("lines", 3);
                    region.regionAnchorX = settings.get("regionanchorX", 0);
                    region.regionAnchorY = settings.get("regionanchorY", 100);
                    region.viewportAnchorX = settings.get("viewportanchorX", 0);
                    region.viewportAnchorY = settings.get(
                      "viewportanchorY",
                      100
                    );
                    region.scroll = settings.get("scroll", "");
                    self.onregion && self.onregion(region);
                    self.regionList.push({
                      id: settings.get("id"),
                      region: region,
                    });
                  }
                }
                function parseTimestampMap(input) {
                  var settings = new Settings();
                  parseOptions(
                    input,
                    function (k, v) {
                      switch (k) {
                        case "MPEGT":
                          settings.integer(k + "S", v);
                          break;
                        case "LOCA":
                          settings.set(k + "L", parseTimeStamp(v));
                          break;
                      }
                    },
                    /[^\d]:/,
                    /,/
                  );
                  self.ontimestampmap &&
                    self.ontimestampmap({
                      MPEGTS: settings.get("MPEGTS"),
                      LOCAL: settings.get("LOCAL"),
                    });
                }
                function parseHeader(input) {
                  if (input.match(/X-TIMESTAMP-MAP/)) {
                    parseOptions(
                      input,
                      function (k, v) {
                        switch (k) {
                          case "X-TIMESTAMP-MAP":
                            parseTimestampMap(v);
                            break;
                        }
                      },
                      /=/
                    );
                  } else {
                    parseOptions(
                      input,
                      function (k, v) {
                        switch (k) {
                          case "Region":
                            parseRegion(v);
                            break;
                        }
                      },
                      /:/
                    );
                  }
                }
                try {
                  var line;
                  if (self.state === "INITIAL") {
                    if (!/\r\n|\n/.test(self.buffer)) {
                      return this;
                    }
                    line = collectNextLine();
                    var m = line.match(/^WEBVTT([ \t].*)?$/);
                    if (!m || !m[0]) {
                      throw new ParsingError(ParsingError.Errors.BadSignature);
                    }
                    self.state = "HEADER";
                  }
                  var alreadyCollectedLine = false;
                  while (self.buffer) {
                    if (!/\r\n|\n/.test(self.buffer)) {
                      return this;
                    }
                    if (!alreadyCollectedLine) {
                      line = collectNextLine();
                    } else {
                      alreadyCollectedLine = false;
                    }
                    switch (self.state) {
                      case "HEADER":
                        if (/:/.test(line)) {
                          parseHeader(line);
                        } else if (!line) {
                          self.state = "ID";
                        }
                        continue;
                      case "NOTE":
                        if (!line) {
                          self.state = "ID";
                        }
                        continue;
                      case "ID":
                        if (/^NOTE($|[ \t])/.test(line)) {
                          self.state = "NOTE";
                          break;
                        }
                        if (!line) {
                          continue;
                        }
                        self.cue = new (self.vttjs.VTTCue ||
                          self.window.VTTCue)(0, 0, "");
                        self.state = "CUE";
                        if (line.indexOf("-->") === -1) {
                          self.cue.id = line;
                          continue;
                        }
                      case "CUE":
                        try {
                          parseCue(line, self.cue, self.regionList);
                        } catch (e) {
                          self.reportOrThrowError(e);
                          self.cue = null;
                          self.state = "BADCUE";
                          continue;
                        }
                        self.state = "CUETEXT";
                        continue;
                      case "CUETEXT":
                        var hasSubstring = line.indexOf("-->") !== -1;
                        if (
                          !line ||
                          (hasSubstring && (alreadyCollectedLine = true))
                        ) {
                          self.oncue && self.oncue(self.cue);
                          self.cue = null;
                          self.state = "ID";
                          continue;
                        }
                        if (self.cue.text) {
                          self.cue.text += "\n";
                        }
                        self.cue.text += line;
                        continue;
                      case "BADCUE":
                        if (!line) {
                          self.state = "ID";
                        }
                        continue;
                    }
                  }
                } catch (e) {
                  self.reportOrThrowError(e);
                  if (self.state === "CUETEXT" && self.cue && self.oncue) {
                    self.oncue(self.cue);
                  }
                  self.cue = null;
                  self.state =
                    self.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
                }
                return this;
              },
              flush: function () {
                var self = this;
                try {
                  self.buffer += self.decoder.decode();
                  if (self.cue || self.state === "HEADER") {
                    self.buffer += "\n\n";
                    self.parse();
                  }
                  if (self.state === "INITIAL") {
                    throw new ParsingError(ParsingError.Errors.BadSignature);
                  }
                } catch (e) {
                  self.reportOrThrowError(e);
                }
                self.onflush && self.onflush();
                return this;
              },
            };
            global.WebVTT = WebVTT;
          })(this, this.vttjs || {});
        },
        {},
      ],
      107: [
        function (_dereq_, module, exports) {
          (function (root, vttjs) {
            var autoKeyword = "auto";
            var directionSetting = { "": true, lr: true, rl: true };
            var alignSetting = {
              start: true,
              middle: true,
              end: true,
              left: true,
              right: true,
            };
            function findDirectionSetting(value) {
              if (typeof value !== "string") {
                return false;
              }
              var dir = directionSetting[value.toLowerCase()];
              return dir ? value.toLowerCase() : false;
            }
            function findAlignSetting(value) {
              if (typeof value !== "string") {
                return false;
              }
              var align = alignSetting[value.toLowerCase()];
              return align ? value.toLowerCase() : false;
            }
            function extend(obj) {
              var i = 1;
              for (; i < arguments.length; i++) {
                var cobj = arguments[i];
                for (var p in cobj) {
                  obj[p] = cobj[p];
                }
              }
              return obj;
            }
            function VTTCue(startTime, endTime, text) {
              var cue = this;
              var isIE8 = /MSIE\s8\.0/.test(navigator.userAgent);
              var baseObj = {};
              if (isIE8) {
                cue = document.createElement("custom");
              } else {
                baseObj.enumerable = true;
              }
              cue.hasBeenReset = false;
              var _id = "";
              var _pauseOnExit = false;
              var _startTime = startTime;
              var _endTime = endTime;
              var _text = text;
              var _region = null;
              var _vertical = "";
              var _snapToLines = true;
              var _line = "auto";
              var _lineAlign = "start";
              var _position = 50;
              var _positionAlign = "middle";
              var _size = 50;
              var _align = "middle";
              Object.defineProperty(
                cue,
                "id",
                extend({}, baseObj, {
                  get: function () {
                    return _id;
                  },
                  set: function (value) {
                    _id = "" + value;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "pauseOnExit",
                extend({}, baseObj, {
                  get: function () {
                    return _pauseOnExit;
                  },
                  set: function (value) {
                    _pauseOnExit = !!value;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "startTime",
                extend({}, baseObj, {
                  get: function () {
                    return _startTime;
                  },
                  set: function (value) {
                    if (typeof value !== "number") {
                      throw new TypeError(
                        "Start time must be set to a number."
                      );
                    }
                    _startTime = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "endTime",
                extend({}, baseObj, {
                  get: function () {
                    return _endTime;
                  },
                  set: function (value) {
                    if (typeof value !== "number") {
                      throw new TypeError("End time must be set to a number.");
                    }
                    _endTime = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "text",
                extend({}, baseObj, {
                  get: function () {
                    return _text;
                  },
                  set: function (value) {
                    _text = "" + value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "region",
                extend({}, baseObj, {
                  get: function () {
                    return _region;
                  },
                  set: function (value) {
                    _region = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "vertical",
                extend({}, baseObj, {
                  get: function () {
                    return _vertical;
                  },
                  set: function (value) {
                    var setting = findDirectionSetting(value);
                    if (setting === false) {
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    }
                    _vertical = setting;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "snapToLines",
                extend({}, baseObj, {
                  get: function () {
                    return _snapToLines;
                  },
                  set: function (value) {
                    _snapToLines = !!value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "line",
                extend({}, baseObj, {
                  get: function () {
                    return _line;
                  },
                  set: function (value) {
                    if (typeof value !== "number" && value !== autoKeyword) {
                      throw new SyntaxError(
                        "An invalid number or illegal string was specified."
                      );
                    }
                    _line = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "lineAlign",
                extend({}, baseObj, {
                  get: function () {
                    return _lineAlign;
                  },
                  set: function (value) {
                    var setting = findAlignSetting(value);
                    if (!setting) {
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    }
                    _lineAlign = setting;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "position",
                extend({}, baseObj, {
                  get: function () {
                    return _position;
                  },
                  set: function (value) {
                    if (value < 0 || value > 100) {
                      throw new Error("Position must be between 0 and 100.");
                    }
                    _position = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "positionAlign",
                extend({}, baseObj, {
                  get: function () {
                    return _positionAlign;
                  },
                  set: function (value) {
                    var setting = findAlignSetting(value);
                    if (!setting) {
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    }
                    _positionAlign = setting;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "size",
                extend({}, baseObj, {
                  get: function () {
                    return _size;
                  },
                  set: function (value) {
                    if (value < 0 || value > 100) {
                      throw new Error("Size must be between 0 and 100.");
                    }
                    _size = value;
                    this.hasBeenReset = true;
                  },
                })
              );
              Object.defineProperty(
                cue,
                "align",
                extend({}, baseObj, {
                  get: function () {
                    return _align;
                  },
                  set: function (value) {
                    var setting = findAlignSetting(value);
                    if (!setting) {
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    }
                    _align = setting;
                    this.hasBeenReset = true;
                  },
                })
              );
              cue.displayState = undefined;
              if (isIE8) {
                return cue;
              }
            }
            VTTCue.prototype.getCueAsHTML = function () {
              return WebVTT.convertCueToDOMTree(window, this.text);
            };
            root.VTTCue = root.VTTCue || VTTCue;
            vttjs.VTTCue = VTTCue;
          })(this, this.vttjs || {});
        },
        {},
      ],
      108: [
        function (_dereq_, module, exports) {
          (function (root, vttjs) {
            var scrollSetting = { "": true, up: true };
            function findScrollSetting(value) {
              if (typeof value !== "string") {
                return false;
              }
              var scroll = scrollSetting[value.toLowerCase()];
              return scroll ? value.toLowerCase() : false;
            }
            function isValidPercentValue(value) {
              return typeof value === "number" && value >= 0 && value <= 100;
            }
            function VTTRegion() {
              var _width = 100;
              var _lines = 3;
              var _regionAnchorX = 0;
              var _regionAnchorY = 100;
              var _viewportAnchorX = 0;
              var _viewportAnchorY = 100;
              var _scroll = "";
              Object.defineProperties(this, {
                width: {
                  enumerable: true,
                  get: function () {
                    return _width;
                  },
                  set: function (value) {
                    if (!isValidPercentValue(value)) {
                      throw new Error("Width must be between 0 and 100.");
                    }
                    _width = value;
                  },
                },
                lines: {
                  enumerable: true,
                  get: function () {
                    return _lines;
                  },
                  set: function (value) {
                    if (typeof value !== "number") {
                      throw new TypeError("Lines must be set to a number.");
                    }
                    _lines = value;
                  },
                },
                regionAnchorY: {
                  enumerable: true,
                  get: function () {
                    return _regionAnchorY;
                  },
                  set: function (value) {
                    if (!isValidPercentValue(value)) {
                      throw new Error(
                        "RegionAnchorX must be between 0 and 100."
                      );
                    }
                    _regionAnchorY = value;
                  },
                },
                regionAnchorX: {
                  enumerable: true,
                  get: function () {
                    return _regionAnchorX;
                  },
                  set: function (value) {
                    if (!isValidPercentValue(value)) {
                      throw new Error(
                        "RegionAnchorY must be between 0 and 100."
                      );
                    }
                    _regionAnchorX = value;
                  },
                },
                viewportAnchorY: {
                  enumerable: true,
                  get: function () {
                    return _viewportAnchorY;
                  },
                  set: function (value) {
                    if (!isValidPercentValue(value)) {
                      throw new Error(
                        "ViewportAnchorY must be between 0 and 100."
                      );
                    }
                    _viewportAnchorY = value;
                  },
                },
                viewportAnchorX: {
                  enumerable: true,
                  get: function () {
                    return _viewportAnchorX;
                  },
                  set: function (value) {
                    if (!isValidPercentValue(value)) {
                      throw new Error(
                        "ViewportAnchorX must be between 0 and 100."
                      );
                    }
                    _viewportAnchorX = value;
                  },
                },
                scroll: {
                  enumerable: true,
                  get: function () {
                    return _scroll;
                  },
                  set: function (value) {
                    var setting = findScrollSetting(value);
                    if (setting === false) {
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    }
                    _scroll = setting;
                  },
                },
              });
            }
            root.VTTRegion = root.VTTRegion || VTTRegion;
            vttjs.VTTRegion = VTTRegion;
          })(this, this.vttjs || {});
        },
        {},
      ],
      109: [
        function (_dereq_, module, exports) {
          arguments[4][95][0].apply(exports, arguments);
        },
        { 95: 95 },
      ],
    },
    {},
    [93]
  )(93);
});
