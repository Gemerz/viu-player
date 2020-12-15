/*! @name viu-player @version 0.4.2 @license MIT */
(function (QUnit, sinon, videojs) {
  'use strict';

  QUnit = QUnit && Object.prototype.hasOwnProperty.call(QUnit, 'default') ? QUnit['default'] : QUnit;
  sinon = sinon && Object.prototype.hasOwnProperty.call(sinon, 'default') ? sinon['default'] : sinon;
  videojs = videojs && Object.prototype.hasOwnProperty.call(videojs, 'default') ? videojs['default'] : videojs;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var minDoc = {};

  var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
      typeof window !== 'undefined' ? window : {};


  var doccy;

  if (typeof document !== 'undefined') {
      doccy = document;
  } else {
      doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

      if (!doccy) {
          doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
      }
  }

  var document_1 = doccy;

  var cov_1uxxgqlmeg = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuInfo.js',
        hash = 'b89ada519b2cea2e30a6939d1db673065d92eb68',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuInfo.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 45
          }
        },
        '1': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 27
          }
        },
        '2': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 29
          }
        },
        '3': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        },
        '4': {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 48
          }
        },
        '5': {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 106
          }
        },
        '6': {
          start: {
            line: 28,
            column: 67
          },
          end: {
            line: 28,
            column: 105
          }
        },
        '7': {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 9
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 44
          }
        },
        '9': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 66
          }
        },
        '10': {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 56
          }
        },
        '11': {
          start: {
            line: 43,
            column: 29
          },
          end: {
            line: 43,
            column: 70
          }
        },
        '12': {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        '13': {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 46,
            column: 45
          }
        },
        '14': {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        '15': {
          start: {
            line: 50,
            column: 6
          },
          end: {
            line: 50,
            column: 39
          }
        },
        '16': {
          start: {
            line: 51,
            column: 6
          },
          end: {
            line: 51,
            column: 72
          }
        },
        '17': {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 42
          }
        },
        '18': {
          start: {
            line: 54,
            column: 6
          },
          end: {
            line: 54,
            column: 50
          }
        },
        '19': {
          start: {
            line: 58,
            column: 0
          },
          end: {
            line: 58,
            column: 55
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 23,
              column: 3
            }
          },
          loc: {
            start: {
              line: 23,
              column: 31
            },
            end: {
              line: 36,
              column: 3
            }
          },
          line: 23
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 26,
              column: 26
            },
            end: {
              line: 26,
              column: 27
            }
          },
          loc: {
            start: {
              line: 26,
              column: 32
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 26
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 57
            },
            end: {
              line: 28,
              column: 58
            }
          },
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 105
            }
          },
          line: 28
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 38,
              column: 2
            },
            end: {
              line: 38,
              column: 3
            }
          },
          loc: {
            start: {
              line: 38,
              column: 18
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 38
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          loc: {
            start: {
              line: 41,
              column: 16
            },
            end: {
              line: 56,
              column: 3
            }
          },
          line: 41
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 105
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 77
            }
          }, {
            start: {
              line: 28,
              column: 81
            },
            end: {
              line: 28,
              column: 105
            }
          }],
          line: 28
        },
        '1': {
          loc: {
            start: {
              line: 45,
              column: 4
            },
            end: {
              line: 47,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 45,
              column: 4
            },
            end: {
              line: 47,
              column: 5
            }
          }, {
            start: {
              line: 45,
              column: 4
            },
            end: {
              line: 47,
              column: 5
            }
          }],
          line: 45
        },
        '2': {
          loc: {
            start: {
              line: 49,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 49,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          }, {
            start: {
              line: 49,
              column: 4
            },
            end: {
              line: 55,
              column: 5
            }
          }],
          line: 49
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button = (cov_1uxxgqlmeg.s[0]++, videojs.getComponent('Button'));

  var ViuInfoComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuInfoComponent, _Button);

    var _super = _createSuper(ViuInfoComponent);

    function ViuInfoComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuInfoComponent);

      cov_1uxxgqlmeg.f[0]++;
      cov_1uxxgqlmeg.s[1]++;
      _this = _super.call(this, player, options);
      cov_1uxxgqlmeg.s[2]++;

      _this.controlText('Info');

      cov_1uxxgqlmeg.s[3]++;

      _this.on('mouseenter', function () {
        cov_1uxxgqlmeg.f[1]++;
        var ViuPlayer = (cov_1uxxgqlmeg.s[4]++, _this.player_.ViuPlayer());
        var index = (cov_1uxxgqlmeg.s[5]++, ViuPlayer.state.actionArea.findIndex(function (item) {
          cov_1uxxgqlmeg.f[2]++;
          cov_1uxxgqlmeg.s[6]++;
          return (cov_1uxxgqlmeg.b[0][0]++, item.name_) && (cov_1uxxgqlmeg.b[0][1]++, item.name_ === 'ViuInfo');
        }));
        cov_1uxxgqlmeg.s[7]++;
        ViuPlayer.setState({
          isActionSelected: index
        });
        cov_1uxxgqlmeg.s[8]++;
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuInfoComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_1uxxgqlmeg.f[3]++;
        cov_1uxxgqlmeg.s[9]++;
        return "vjs-info-button vjs-control ".concat(_get(_getPrototypeOf(ViuInfoComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_1uxxgqlmeg.f[4]++;
        cov_1uxxgqlmeg.s[10]++;
        this.player_.getChild('viuInfoPanel').handleClick();
        var viuSubtitlePanel = (cov_1uxxgqlmeg.s[11]++, this.player_.getChild('viuSubtitlePanel'));
        cov_1uxxgqlmeg.s[12]++;

        if (viuSubtitlePanel.hasClass('active')) {
          cov_1uxxgqlmeg.b[1][0]++;
          cov_1uxxgqlmeg.s[13]++;
          viuSubtitlePanel.removeClass('active');
        } else {
          cov_1uxxgqlmeg.b[1][1]++;
        }

        cov_1uxxgqlmeg.s[14]++;

        if (!this.hasClass('vjs-info-active')) {
          cov_1uxxgqlmeg.b[2][0]++;
          cov_1uxxgqlmeg.s[15]++;
          this.addClass('vjs-info-active');
          cov_1uxxgqlmeg.s[16]++;
          this.player_.ViuPlayer().setUniquePanelOpen('isInfoAreaSelected');
        } else {
          cov_1uxxgqlmeg.b[2][1]++;
          cov_1uxxgqlmeg.s[17]++;
          this.removeClass('vjs-info-active');
          cov_1uxxgqlmeg.s[18]++;
          this.player_.ViuPlayer().setAllPanelClose();
        }
      }
    }]);

    return ViuInfoComponent;
  }(Button);

  cov_1uxxgqlmeg.s[19]++;
  videojs.registerComponent('viuInfo', ViuInfoComponent);

  var cov_18nc9wf340 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuNextChip.js',
        hash = 'd688d272b1249fb8c5e0a26c7b2d5503e6776413',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuNextChip.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 45
          }
        },
        '1': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 27
          }
        },
        '2': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 34
          }
        },
        '3': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        },
        '4': {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 48
          }
        },
        '5': {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 104
          }
        },
        '6': {
          start: {
            line: 28,
            column: 67
          },
          end: {
            line: 28,
            column: 103
          }
        },
        '7': {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 9
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 44
          }
        },
        '9': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 73
          }
        },
        '10': {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 37
          }
        },
        '11': {
          start: {
            line: 45,
            column: 0
          },
          end: {
            line: 45,
            column: 54
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 23,
              column: 3
            }
          },
          loc: {
            start: {
              line: 23,
              column: 31
            },
            end: {
              line: 36,
              column: 3
            }
          },
          line: 23
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 26,
              column: 26
            },
            end: {
              line: 26,
              column: 27
            }
          },
          loc: {
            start: {
              line: 26,
              column: 32
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 26
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 57
            },
            end: {
              line: 28,
              column: 58
            }
          },
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 103
            }
          },
          line: 28
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 38,
              column: 2
            },
            end: {
              line: 38,
              column: 3
            }
          },
          loc: {
            start: {
              line: 38,
              column: 18
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 38
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          loc: {
            start: {
              line: 41,
              column: 16
            },
            end: {
              line: 43,
              column: 3
            }
          },
          line: 41
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 103
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 71
            }
          }, {
            start: {
              line: 28,
              column: 75
            },
            end: {
              line: 28,
              column: 103
            }
          }],
          line: 28
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button$1 = (cov_18nc9wf340.s[0]++, videojs.getComponent('Button'));

  var ViuNextChip = /*#__PURE__*/function (_Button) {
    _inherits(ViuNextChip, _Button);

    var _super = _createSuper(ViuNextChip);

    function ViuNextChip(player, options) {
      var _this;

      _classCallCheck(this, ViuNextChip);

      cov_18nc9wf340.f[0]++;
      cov_18nc9wf340.s[1]++;
      _this = _super.call(this, player, options);
      cov_18nc9wf340.s[2]++;

      _this.controlText('Next Chip');

      cov_18nc9wf340.s[3]++;

      _this.on('mouseenter', function () {
        cov_18nc9wf340.f[1]++;
        var ViuPlayer = (cov_18nc9wf340.s[4]++, _this.player_.ViuPlayer());
        var index = (cov_18nc9wf340.s[5]++, ViuPlayer.state.actionArea.findIndex(function (item) {
          cov_18nc9wf340.f[2]++;
          cov_18nc9wf340.s[6]++;
          return (cov_18nc9wf340.b[0][0]++, item) && (cov_18nc9wf340.b[0][1]++, item.name_ === 'ViuNextChip');
        }));
        cov_18nc9wf340.s[7]++;
        ViuPlayer.setState({
          isActionSelected: index
        });
        cov_18nc9wf340.s[8]++;
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuNextChip, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_18nc9wf340.f[3]++;
        cov_18nc9wf340.s[9]++;
        return "vjs-next-chip-button vjs-next-chip ".concat(_get(_getPrototypeOf(ViuNextChip.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_18nc9wf340.f[4]++;
        cov_18nc9wf340.s[10]++;
        this.player_.trigger('nextChip');
      }
    }]);

    return ViuNextChip;
  }(Button$1);

  cov_18nc9wf340.s[11]++;
  videojs.registerComponent('viuNextChip', ViuNextChip);

  var cov_q2z41qs63 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuSubtitle.js',
        hash = '868cc3fbb05be4637811e217ecebf4470a24a214',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuSubtitle.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 45
          }
        },
        '1': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 27
          }
        },
        '2': {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 36
          }
        },
        '3': {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 37,
            column: 7
          }
        },
        '4': {
          start: {
            line: 29,
            column: 24
          },
          end: {
            line: 29,
            column: 48
          }
        },
        '5': {
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 30,
            column: 104
          }
        },
        '6': {
          start: {
            line: 30,
            column: 67
          },
          end: {
            line: 30,
            column: 103
          }
        },
        '7': {
          start: {
            line: 32,
            column: 6
          },
          end: {
            line: 34,
            column: 9
          }
        },
        '8': {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 44
          }
        },
        '9': {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 86
          }
        },
        '10': {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 48
          }
        },
        '11': {
          start: {
            line: 54,
            column: 25
          },
          end: {
            line: 54,
            column: 62
          }
        },
        '12': {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 58,
            column: 5
          }
        },
        '13': {
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 57,
            column: 41
          }
        },
        '14': {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 64,
            column: 5
          }
        },
        '15': {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 61,
            column: 18
          }
        },
        '16': {
          start: {
            line: 63,
            column: 6
          },
          end: {
            line: 63,
            column: 19
          }
        },
        '17': {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 36
          }
        },
        '18': {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 34
          }
        },
        '19': {
          start: {
            line: 75,
            column: 29
          },
          end: {
            line: 75,
            column: 70
          }
        },
        '20': {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 35
          }
        },
        '21': {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 73
          }
        },
        '22': {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 37
          }
        },
        '23': {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 37
          }
        },
        '24': {
          start: {
            line: 88,
            column: 29
          },
          end: {
            line: 88,
            column: 70
          }
        },
        '25': {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 35
          }
        },
        '26': {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 91,
            column: 48
          }
        },
        '27': {
          start: {
            line: 94,
            column: 0
          },
          end: {
            line: 94,
            column: 63
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 25,
              column: 2
            },
            end: {
              line: 25,
              column: 3
            }
          },
          loc: {
            start: {
              line: 25,
              column: 31
            },
            end: {
              line: 38,
              column: 3
            }
          },
          line: 25
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 28,
              column: 26
            },
            end: {
              line: 28,
              column: 27
            }
          },
          loc: {
            start: {
              line: 28,
              column: 32
            },
            end: {
              line: 37,
              column: 5
            }
          },
          line: 28
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 30,
              column: 57
            },
            end: {
              line: 30,
              column: 58
            }
          },
          loc: {
            start: {
              line: 30,
              column: 67
            },
            end: {
              line: 30,
              column: 103
            }
          },
          line: 30
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 44,
              column: 2
            },
            end: {
              line: 44,
              column: 3
            }
          },
          loc: {
            start: {
              line: 44,
              column: 18
            },
            end: {
              line: 46,
              column: 3
            }
          },
          line: 44
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 51,
              column: 2
            },
            end: {
              line: 51,
              column: 3
            }
          },
          loc: {
            start: {
              line: 51,
              column: 16
            },
            end: {
              line: 65,
              column: 3
            }
          },
          line: 51
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 71,
              column: 2
            },
            end: {
              line: 71,
              column: 3
            }
          },
          loc: {
            start: {
              line: 71,
              column: 9
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 71
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 85,
              column: 2
            },
            end: {
              line: 85,
              column: 3
            }
          },
          loc: {
            start: {
              line: 85,
              column: 10
            },
            end: {
              line: 92,
              column: 3
            }
          },
          line: 85
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 30,
              column: 67
            },
            end: {
              line: 30,
              column: 103
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 30,
              column: 67
            },
            end: {
              line: 30,
              column: 71
            }
          }, {
            start: {
              line: 30,
              column: 75
            },
            end: {
              line: 30,
              column: 103
            }
          }],
          line: 30
        },
        '1': {
          loc: {
            start: {
              line: 56,
              column: 4
            },
            end: {
              line: 58,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 56,
              column: 4
            },
            end: {
              line: 58,
              column: 5
            }
          }, {
            start: {
              line: 56,
              column: 4
            },
            end: {
              line: 58,
              column: 5
            }
          }],
          line: 56
        },
        '2': {
          loc: {
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 64,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 64,
              column: 5
            }
          }, {
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 64,
              column: 5
            }
          }],
          line: 60
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button$2 = (cov_q2z41qs63.s[0]++, videojs.getComponent('Button'));

  var ViuSubtitleComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuSubtitleComponent, _Button);

    var _super = _createSuper(ViuSubtitleComponent);

    function ViuSubtitleComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuSubtitleComponent);

      cov_q2z41qs63.f[0]++;
      cov_q2z41qs63.s[1]++;
      _this = _super.call(this, player, options);
      cov_q2z41qs63.s[2]++;

      _this.controlText('Subtitle On');

      cov_q2z41qs63.s[3]++;

      _this.on('mouseenter', function () {
        cov_q2z41qs63.f[1]++;
        var ViuPlayer = (cov_q2z41qs63.s[4]++, _this.player_.ViuPlayer());
        var index = (cov_q2z41qs63.s[5]++, ViuPlayer.state.actionArea.findIndex(function (item) {
          cov_q2z41qs63.f[2]++;
          cov_q2z41qs63.s[6]++;
          return (cov_q2z41qs63.b[0][0]++, item) && (cov_q2z41qs63.b[0][1]++, item.name_ === 'ViuSubtitle');
        }));
        cov_q2z41qs63.s[7]++;
        ViuPlayer.setState({
          isActionSelected: index
        });
        cov_q2z41qs63.s[8]++;
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuSubtitleComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_q2z41qs63.f[3]++;
        cov_q2z41qs63.s[9]++;
        return "vjs-viu-subtitle-toggle vjs-viu-subtitle-active ".concat(_get(_getPrototypeOf(ViuSubtitleComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_q2z41qs63.f[4]++;
        cov_q2z41qs63.s[10]++;
        this.player_.ViuPlayer().setAllPanelClose();
        var viuInfoPanel = (cov_q2z41qs63.s[11]++, this.player_.getChild('viuInfoPanel'));
        cov_q2z41qs63.s[12]++;

        if (viuInfoPanel.hasClass('active')) {
          cov_q2z41qs63.b[1][0]++;
          cov_q2z41qs63.s[13]++;
          viuInfoPanel.removeClass('active');
        } else {
          cov_q2z41qs63.b[1][1]++;
        }

        cov_q2z41qs63.s[14]++;

        if (!this.hasClass('panel-active')) {
          cov_q2z41qs63.b[2][0]++;
          cov_q2z41qs63.s[15]++;
          this.open();
        } else {
          cov_q2z41qs63.b[2][1]++;
          cov_q2z41qs63.s[16]++;
          this.close();
        }
      }
    }, {
      key: "open",
      value: function open() {
        cov_q2z41qs63.f[5]++;
        cov_q2z41qs63.s[17]++;
        this.controlText('Subtitle On');
        cov_q2z41qs63.s[18]++;
        this.addClass('panel-active');
        var viuSubtitlePanel = (cov_q2z41qs63.s[19]++, this.player_.getChild('viuSubtitlePanel'));
        cov_q2z41qs63.s[20]++;
        viuSubtitlePanel.handleClick();
        cov_q2z41qs63.s[21]++;
        this.player_.ViuPlayer().setUniquePanelOpen('isSubtileAreaSelected');
      }
    }, {
      key: "close",
      value: function close() {
        cov_q2z41qs63.f[6]++;
        cov_q2z41qs63.s[22]++;
        this.controlText('Subtitle Off');
        cov_q2z41qs63.s[23]++;
        this.removeClass('panel-active');
        var viuSubtitlePanel = (cov_q2z41qs63.s[24]++, this.player_.getChild('viuSubtitlePanel'));
        cov_q2z41qs63.s[25]++;
        viuSubtitlePanel.handleClick();
        cov_q2z41qs63.s[26]++;
        this.player_.ViuPlayer().setAllPanelClose();
      }
    }]);

    return ViuSubtitleComponent;
  }(Button$2);

  cov_q2z41qs63.s[27]++;
  videojs.registerComponent('viuSubtitle', ViuSubtitleComponent);

  var cov_1f6fvas1s3 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuTopSubtitle.js',
        hash = 'd2adcb1639e96bc066815ea53688d0fb9570cd83',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuTopSubtitle.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 15
          },
          end: {
            line: 2,
            column: 45
          }
        },
        '1': {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 27
          }
        },
        '2': {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 29,
            column: 7
          }
        },
        '3': {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 28,
            column: 7
          }
        },
        '4': {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 25,
            column: 20
          }
        },
        '5': {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 21
          }
        },
        '6': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 41,
            column: 7
          }
        },
        '7': {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 31,
            column: 48
          }
        },
        '8': {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 40,
            column: 7
          }
        },
        '9': {
          start: {
            line: 34,
            column: 25
          },
          end: {
            line: 34,
            column: 62
          }
        },
        '10': {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 38,
            column: 11
          }
        },
        '11': {
          start: {
            line: 39,
            column: 8
          },
          end: {
            line: 39,
            column: 49
          }
        },
        '12': {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 44,
            column: 7
          }
        },
        '13': {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 39
          }
        },
        '14': {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 36
          }
        },
        '15': {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 94
          }
        },
        '16': {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        '17': {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 62,
            column: 31
          }
        },
        '18': {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 64,
            column: 34
          }
        },
        '19': {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        '20': {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 77,
            column: 7
          }
        },
        '21': {
          start: {
            line: 74,
            column: 8
          },
          end: {
            line: 74,
            column: 20
          }
        },
        '22': {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 76,
            column: 21
          }
        },
        '23': {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 49
          }
        },
        '24': {
          start: {
            line: 87,
            column: 4
          },
          end: {
            line: 87,
            column: 40
          }
        },
        '25': {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 88,
            column: 52
          }
        },
        '26': {
          start: {
            line: 96,
            column: 4
          },
          end: {
            line: 96,
            column: 52
          }
        },
        '27': {
          start: {
            line: 97,
            column: 4
          },
          end: {
            line: 97,
            column: 41
          }
        },
        '28': {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 53
          }
        },
        '29': {
          start: {
            line: 101,
            column: 0
          },
          end: {
            line: 101,
            column: 69
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 21,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          },
          loc: {
            start: {
              line: 21,
              column: 31
            },
            end: {
              line: 46,
              column: 3
            }
          },
          line: 21
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 23,
              column: 26
            },
            end: {
              line: 23,
              column: 27
            }
          },
          loc: {
            start: {
              line: 23,
              column: 43
            },
            end: {
              line: 29,
              column: 5
            }
          },
          line: 23
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 30,
              column: 26
            },
            end: {
              line: 30,
              column: 27
            }
          },
          loc: {
            start: {
              line: 30,
              column: 32
            },
            end: {
              line: 41,
              column: 5
            }
          },
          line: 30
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 42,
              column: 29
            },
            end: {
              line: 42,
              column: 30
            }
          },
          loc: {
            start: {
              line: 42,
              column: 42
            },
            end: {
              line: 44,
              column: 5
            }
          },
          line: 42
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 53,
              column: 2
            },
            end: {
              line: 53,
              column: 3
            }
          },
          loc: {
            start: {
              line: 53,
              column: 18
            },
            end: {
              line: 55,
              column: 3
            }
          },
          line: 53
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 60,
              column: 2
            },
            end: {
              line: 60,
              column: 3
            }
          },
          loc: {
            start: {
              line: 60,
              column: 23
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 60
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 71,
              column: 2
            },
            end: {
              line: 71,
              column: 3
            }
          },
          loc: {
            start: {
              line: 71,
              column: 16
            },
            end: {
              line: 79,
              column: 3
            }
          },
          line: 71
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 85,
              column: 2
            },
            end: {
              line: 85,
              column: 3
            }
          },
          loc: {
            start: {
              line: 85,
              column: 9
            },
            end: {
              line: 89,
              column: 3
            }
          },
          line: 85
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 95,
              column: 2
            },
            end: {
              line: 95,
              column: 3
            }
          },
          loc: {
            start: {
              line: 95,
              column: 10
            },
            end: {
              line: 99,
              column: 3
            }
          },
          line: 95
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 24,
              column: 6
            },
            end: {
              line: 28,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 24,
              column: 6
            },
            end: {
              line: 28,
              column: 7
            }
          }, {
            start: {
              line: 24,
              column: 6
            },
            end: {
              line: 28,
              column: 7
            }
          }],
          line: 24
        },
        '1': {
          loc: {
            start: {
              line: 33,
              column: 6
            },
            end: {
              line: 40,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 33,
              column: 6
            },
            end: {
              line: 40,
              column: 7
            }
          }, {
            start: {
              line: 33,
              column: 6
            },
            end: {
              line: 40,
              column: 7
            }
          }],
          line: 33
        },
        '2': {
          loc: {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 65,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 65,
              column: 5
            }
          }, {
            start: {
              line: 61,
              column: 4
            },
            end: {
              line: 65,
              column: 5
            }
          }],
          line: 61
        },
        '3': {
          loc: {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 78,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 78,
              column: 5
            }
          }, {
            start: {
              line: 72,
              column: 4
            },
            end: {
              line: 78,
              column: 5
            }
          }],
          line: 72
        },
        '4': {
          loc: {
            start: {
              line: 73,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 73,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          }, {
            start: {
              line: 73,
              column: 6
            },
            end: {
              line: 77,
              column: 7
            }
          }],
          line: 73
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button$3 = (cov_1f6fvas1s3.s[0]++, videojs.getComponent('Button'));

  var ViuTopSubtitleComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuTopSubtitleComponent, _Button);

    var _super = _createSuper(ViuTopSubtitleComponent);

    function ViuTopSubtitleComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuTopSubtitleComponent);

      cov_1f6fvas1s3.f[0]++;
      cov_1f6fvas1s3.s[1]++;
      _this = _super.call(this, player, options);
      cov_1f6fvas1s3.s[2]++;

      _this.on('toggleShow', function (event, data) {
        cov_1f6fvas1s3.f[1]++;
        cov_1f6fvas1s3.s[3]++;

        if (data.open) {
          cov_1f6fvas1s3.b[0][0]++;
          cov_1f6fvas1s3.s[4]++;

          _this.open();
        } else {
          cov_1f6fvas1s3.b[0][1]++;
          cov_1f6fvas1s3.s[5]++;

          _this.close();
        }
      });

      cov_1f6fvas1s3.s[6]++;

      _this.on('mouseenter', function () {
        cov_1f6fvas1s3.f[2]++;
        var ViuPlayer = (cov_1f6fvas1s3.s[7]++, _this.player_.ViuPlayer());
        cov_1f6fvas1s3.s[8]++;

        if (!ViuPlayer.state.isTopSubtitleDisable) {
          cov_1f6fvas1s3.b[1][0]++;
          var downStep = (cov_1f6fvas1s3.s[9]++, ViuPlayer.state.actionArea.length - 1);
          cov_1f6fvas1s3.s[10]++;
          ViuPlayer.setState({
            isActionSelected: downStep
          });
          cov_1f6fvas1s3.s[11]++;
          ViuPlayer.setComponentSelected(downStep);
        } else {
          cov_1f6fvas1s3.b[1][1]++;
        }
      });

      cov_1f6fvas1s3.s[12]++;

      _this.on('toggleDisable', function (e, data) {
        cov_1f6fvas1s3.f[3]++;
        cov_1f6fvas1s3.s[13]++;

        _this.handleDisable(data.disable);
      });

      cov_1f6fvas1s3.s[14]++;

      _this.controlText('Subtitle On');

      return _this;
    }

    _createClass(ViuTopSubtitleComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_1f6fvas1s3.f[4]++;
        cov_1f6fvas1s3.s[15]++;
        return "vjs-viu-top-subtitle-toggle vjs-viu-top-subtitle-active ".concat(_get(_getPrototypeOf(ViuTopSubtitleComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleDisable",
      value: function handleDisable(value) {
        cov_1f6fvas1s3.f[5]++;
        cov_1f6fvas1s3.s[16]++;

        if (value) {
          cov_1f6fvas1s3.b[2][0]++;
          cov_1f6fvas1s3.s[17]++;
          this.addClass('disable');
        } else {
          cov_1f6fvas1s3.b[2][1]++;
          cov_1f6fvas1s3.s[18]++;
          this.removeClass('disable');
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_1f6fvas1s3.f[6]++;
        cov_1f6fvas1s3.s[19]++;

        if (!this.hasClass('disable')) {
          cov_1f6fvas1s3.b[3][0]++;
          cov_1f6fvas1s3.s[20]++;

          if (!this.hasClass('vjs-viu-top-subtitle-active')) {
            cov_1f6fvas1s3.b[4][0]++;
            cov_1f6fvas1s3.s[21]++;
            this.open();
          } else {
            cov_1f6fvas1s3.b[4][1]++;
            cov_1f6fvas1s3.s[22]++;
            this.close();
          }
        } else {
          cov_1f6fvas1s3.b[3][1]++;
        }
      }
    }, {
      key: "open",
      value: function open() {
        cov_1f6fvas1s3.f[7]++;
        cov_1f6fvas1s3.s[23]++;
        this.addClass('vjs-viu-top-subtitle-active');
        cov_1f6fvas1s3.s[24]++;
        this.controlText('Top Subtitle On');
        cov_1f6fvas1s3.s[25]++;
        this.player_.trigger('toggleTopSubtitle', true);
      }
    }, {
      key: "close",
      value: function close() {
        cov_1f6fvas1s3.f[8]++;
        cov_1f6fvas1s3.s[26]++;
        this.removeClass('vjs-viu-top-subtitle-active');
        cov_1f6fvas1s3.s[27]++;
        this.controlText('Top Subtitle Off');
        cov_1f6fvas1s3.s[28]++;
        this.player_.trigger('toggleTopSubtitle', false);
      }
    }]);

    return ViuTopSubtitleComponent;
  }(Button$3);

  cov_1f6fvas1s3.s[29]++;
  videojs.registerComponent('viuTopSubtitle', ViuTopSubtitleComponent);

  var cov_2dxu54bkob = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipName.js',
        hash = '731d530310de99f7bc711dad6fea8f7c6ee41c6f',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipName.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 8,
            column: 1
          }
        },
        '3': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '4': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 59
          }
        },
        '5': {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 24,
            column: 6
          }
        },
        '6': {
          start: {
            line: 25,
            column: 17
          },
          end: {
            line: 29,
            column: 6
          }
        },
        '7': {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 27
          }
        },
        '8': {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 3
            }
          },
          loc: {
            start: {
              line: 19,
              column: 13
            },
            end: {
              line: 34,
              column: 3
            }
          },
          line: 19
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 26,
              column: 19
            },
            end: {
              line: 26,
              column: 51
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 26,
              column: 19
            },
            end: {
              line: 26,
              column: 45
            }
          }, {
            start: {
              line: 26,
              column: 49
            },
            end: {
              line: 26,
              column: 51
            }
          }],
          line: 26
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component = (cov_2dxu54bkob.s[0]++, videojs.getComponent('component'));
  var dom = (cov_2dxu54bkob.s[1]++, videojs.dom);
  var defaults = (cov_2dxu54bkob.s[2]++, {
    chipName: ''
  });

  var ChipName = /*#__PURE__*/function (_Component) {
    _inherits(ChipName, _Component);

    var _super = _createSuper(ChipName);

    function ChipName(player, options) {
      var _this;

      _classCallCheck(this, ChipName);

      cov_2dxu54bkob.f[0]++;
      cov_2dxu54bkob.s[3]++;
      _this = _super.call(this, player, options);
      cov_2dxu54bkob.s[4]++;
      _this.options = videojs.mergeOptions(defaults, options);
      return _this;
    }

    _createClass(ChipName, [{
      key: "createEl",
      value: function createEl() {
        cov_2dxu54bkob.f[1]++;
        var root = (cov_2dxu54bkob.s[5]++, _get(_getPrototypeOf(ChipName.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-chipName-span',
          dir: 'ltr'
        }));
        var text = (cov_2dxu54bkob.s[6]++, dom.createEl('span', {
          textContent: (cov_2dxu54bkob.b[0][0]++, this.options_.chipCaptions) || (cov_2dxu54bkob.b[0][1]++, ''),
          className: "vjs-viu-player-info-chip-name ".concat(_get(_getPrototypeOf(ChipName.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_2dxu54bkob.s[7]++;
        root.appendChild(text);
        cov_2dxu54bkob.s[8]++;
        return root;
      }
    }]);

    return ChipName;
  }(Component);

  var cov_21nb1j139 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipCaptions.js',
        hash = 'a2b2bd58a81c9f5096c8dd68e3e3f8f50ba6ae49',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipCaptions.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 3,
            column: 12
          },
          end: {
            line: 3,
            column: 23
          }
        },
        '2': {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 27
          }
        },
        '3': {
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 16,
            column: 6
          }
        },
        '4': {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 21,
            column: 6
          }
        },
        '5': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        '6': {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 25,
            column: 29
          }
        },
        '7': {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          },
          loc: {
            start: {
              line: 9,
              column: 31
            },
            end: {
              line: 11,
              column: 3
            }
          },
          line: 9
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 12,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          },
          loc: {
            start: {
              line: 12,
              column: 13
            },
            end: {
              line: 30,
              column: 3
            }
          },
          line: 12
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 24,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 24,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          }, {
            start: {
              line: 24,
              column: 4
            },
            end: {
              line: 26,
              column: 5
            }
          }],
          line: 24
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$1 = (cov_21nb1j139.s[0]++, videojs.getComponent('component'));
  var dom$1 = (cov_21nb1j139.s[1]++, videojs.dom);

  var ChipCaptions = /*#__PURE__*/function (_Component) {
    _inherits(ChipCaptions, _Component);

    var _super = _createSuper(ChipCaptions);

    function ChipCaptions(player, options) {
      _classCallCheck(this, ChipCaptions);

      cov_21nb1j139.f[0]++;
      cov_21nb1j139.s[2]++;
      return _super.call(this, player, options);
    }

    _createClass(ChipCaptions, [{
      key: "createEl",
      value: function createEl() {
        cov_21nb1j139.f[1]++;
        var root = (cov_21nb1j139.s[3]++, _get(_getPrototypeOf(ChipCaptions.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-chipCaptions-span',
          dir: 'ltr'
        }));
        var text = (cov_21nb1j139.s[4]++, dom$1.createEl('span', {
          textContent: this.localize('episode_num'),
          className: "vjs-viu-player-info-chipCaptions ".concat(_get(_getPrototypeOf(ChipCaptions.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_21nb1j139.s[5]++;

        if (this.options_.isMovie === 0) {
          cov_21nb1j139.b[0][0]++;
          cov_21nb1j139.s[6]++;
          root.appendChild(text);
        } else {
          cov_21nb1j139.b[0][1]++;
        }

        cov_21nb1j139.s[7]++;
        return root;
      }
    }]);

    return ChipCaptions;
  }(Component$1);

  var cov_29lyh43gjr = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipDesc.js',
        hash = '7492f2a617da3fe59373204f7f207bf9ba10d2e1',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipDesc.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 3,
            column: 12
          },
          end: {
            line: 3,
            column: 23
          }
        },
        '2': {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 27
          }
        },
        '3': {
          start: {
            line: 13,
            column: 17
          },
          end: {
            line: 17,
            column: 6
          }
        },
        '4': {
          start: {
            line: 18,
            column: 17
          },
          end: {
            line: 22,
            column: 6
          }
        },
        '5': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 27
          }
        },
        '6': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 9,
              column: 2
            },
            end: {
              line: 9,
              column: 3
            }
          },
          loc: {
            start: {
              line: 9,
              column: 31
            },
            end: {
              line: 11,
              column: 3
            }
          },
          line: 9
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 12,
              column: 2
            },
            end: {
              line: 12,
              column: 3
            }
          },
          loc: {
            start: {
              line: 12,
              column: 13
            },
            end: {
              line: 27,
              column: 3
            }
          },
          line: 12
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 19,
              column: 19
            },
            end: {
              line: 19,
              column: 47
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 19,
              column: 19
            },
            end: {
              line: 19,
              column: 41
            }
          }, {
            start: {
              line: 19,
              column: 45
            },
            end: {
              line: 19,
              column: 47
            }
          }],
          line: 19
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$2 = (cov_29lyh43gjr.s[0]++, videojs.getComponent('component'));
  var dom$2 = (cov_29lyh43gjr.s[1]++, videojs.dom);

  var ChipDesc = /*#__PURE__*/function (_Component) {
    _inherits(ChipDesc, _Component);

    var _super = _createSuper(ChipDesc);

    function ChipDesc(player, options) {
      _classCallCheck(this, ChipDesc);

      cov_29lyh43gjr.f[0]++;
      cov_29lyh43gjr.s[2]++;
      return _super.call(this, player, options);
    }

    _createClass(ChipDesc, [{
      key: "createEl",
      value: function createEl() {
        cov_29lyh43gjr.f[1]++;
        var root = (cov_29lyh43gjr.s[3]++, _get(_getPrototypeOf(ChipDesc.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-chip-desc-span',
          dir: 'ltr'
        }));
        var text = (cov_29lyh43gjr.s[4]++, dom$2.createEl('span', {
          textContent: (cov_29lyh43gjr.b[0][0]++, this.options_.chipDesc) || (cov_29lyh43gjr.b[0][1]++, ''),
          className: "vjs-viu-player-info-chip-desc ".concat(_get(_getPrototypeOf(ChipDesc.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_29lyh43gjr.s[5]++;
        root.appendChild(text);
        cov_29lyh43gjr.s[6]++;
        return root;
      }
    }]);

    return ChipDesc;
  }(Component$2);

  var dayjs_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
  });

  var cov_1ge7fxvjkp = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipOfflineTime.js',
        hash = '5b55e247e4a6a0cda3f8f300b5e4c8f61b4d02f1',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/infoPanel/chipOfflineTime.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 6,
            column: 12
          },
          end: {
            line: 6,
            column: 23
          }
        },
        '2': {
          start: {
            line: 8,
            column: 17
          },
          end: {
            line: 10,
            column: 1
          }
        },
        '3': {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 27
          }
        },
        '4': {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 59
          }
        },
        '5': {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 25,
            column: 6
          }
        },
        '6': {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 28,
            column: 8
          }
        },
        '7': {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 33,
            column: 6
          }
        },
        '8': {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        '9': {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 36,
            column: 29
          }
        },
        '10': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 17,
              column: 2
            },
            end: {
              line: 17,
              column: 3
            }
          },
          loc: {
            start: {
              line: 17,
              column: 31
            },
            end: {
              line: 20,
              column: 3
            }
          },
          line: 17
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 21,
              column: 2
            },
            end: {
              line: 21,
              column: 3
            }
          },
          loc: {
            start: {
              line: 21,
              column: 13
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 21
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 26,
              column: 17
            },
            end: {
              line: 28,
              column: 8
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 27,
              column: 6
            },
            end: {
              line: 27,
              column: 93
            }
          }, {
            start: {
              line: 28,
              column: 6
            },
            end: {
              line: 28,
              column: 8
            }
          }],
          line: 26
        },
        '1': {
          loc: {
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          }, {
            start: {
              line: 35,
              column: 4
            },
            end: {
              line: 37,
              column: 5
            }
          }],
          line: 35
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$3 = (cov_1ge7fxvjkp.s[0]++, videojs.getComponent('component'));
  var dom$3 = (cov_1ge7fxvjkp.s[1]++, videojs.dom);
  var defaults$1 = (cov_1ge7fxvjkp.s[2]++, {
    chipName: ''
  });

  var ChipOfflineTime = /*#__PURE__*/function (_Component) {
    _inherits(ChipOfflineTime, _Component);

    var _super = _createSuper(ChipOfflineTime);

    function ChipOfflineTime(player, options) {
      var _this;

      _classCallCheck(this, ChipOfflineTime);

      cov_1ge7fxvjkp.f[0]++;
      cov_1ge7fxvjkp.s[3]++;
      _this = _super.call(this, player, options);
      cov_1ge7fxvjkp.s[4]++;
      _this.options = videojs.mergeOptions(defaults$1, options);
      return _this;
    }

    _createClass(ChipOfflineTime, [{
      key: "createEl",
      value: function createEl() {
        cov_1ge7fxvjkp.f[1]++;
        var root = (cov_1ge7fxvjkp.s[5]++, _get(_getPrototypeOf(ChipOfflineTime.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-offline-time-span',
          dir: 'ltr'
        }));
        var date = (cov_1ge7fxvjkp.s[6]++, this.options_.offlineTime ? (cov_1ge7fxvjkp.b[0][0]++, dayjs_min(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat)) : (cov_1ge7fxvjkp.b[0][1]++, ''));
        var text = (cov_1ge7fxvjkp.s[7]++, dom$3.createEl('span', {
          textContent: "".concat(this.localize('off_shelf_date'), ":").concat(date),
          className: "vjs-viu-player-info-offline-time ".concat(_get(_getPrototypeOf(ChipOfflineTime.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_1ge7fxvjkp.s[8]++;

        if (this.options_.offlineTime) {
          cov_1ge7fxvjkp.b[1][0]++;
          cov_1ge7fxvjkp.s[9]++;
          root.appendChild(text);
        } else {
          cov_1ge7fxvjkp.b[1][1]++;
        }

        cov_1ge7fxvjkp.s[10]++;
        return root;
      }
    }]);

    return ChipOfflineTime;
  }(Component$3);

  var cov_2jnirkep4p = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/infoPanel/viuInfoPanel.js',
        hash = 'f296c7bbb2f7579d2ad32a22f424178319dde96d',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/infoPanel/viuInfoPanel.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '2': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 48
          }
        },
        '3': {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 44
          }
        },
        '4': {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 51
          }
        },
        '5': {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 44
          }
        },
        '6': {
          start: {
            line: 24,
            column: 17
          },
          end: {
            line: 27,
            column: 6
          }
        },
        '7': {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 16
          }
        },
        '8': {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 27
          }
        },
        '9': {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 52
          }
        },
        '10': {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 43,
            column: 6
          }
        },
        '11': {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 45,
            column: 16
          }
        },
        '12': {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 30
          }
        },
        '13': {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 29
          }
        },
        '14': {
          start: {
            line: 55,
            column: 20
          },
          end: {
            line: 55,
            column: 50
          }
        },
        '15': {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        '16': {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 58,
            column: 50
          }
        },
        '17': {
          start: {
            line: 63,
            column: 20
          },
          end: {
            line: 63,
            column: 50
          }
        },
        '18': {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 67,
            column: 5
          }
        },
        '19': {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 66,
            column: 50
          }
        },
        '20': {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 72,
            column: 57
          }
        },
        '21': {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        '22': {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 30
          }
        },
        '23': {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 52
          }
        },
        '24': {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 33
          }
        },
        '25': {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 78,
            column: 55
          }
        },
        '26': {
          start: {
            line: 83,
            column: 0
          },
          end: {
            line: 83,
            column: 48
          }
        },
        '27': {
          start: {
            line: 84,
            column: 0
          },
          end: {
            line: 84,
            column: 56
          }
        },
        '28': {
          start: {
            line: 85,
            column: 0
          },
          end: {
            line: 85,
            column: 48
          }
        },
        '29': {
          start: {
            line: 86,
            column: 0
          },
          end: {
            line: 86,
            column: 62
          }
        },
        '30': {
          start: {
            line: 88,
            column: 0
          },
          end: {
            line: 88,
            column: 56
          }
        },
        '31': {
          start: {
            line: 89,
            column: 0
          },
          end: {
            line: 89,
            column: 74
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 22,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 23,
              column: 3
            }
          },
          loc: {
            start: {
              line: 23,
              column: 13
            },
            end: {
              line: 30,
              column: 3
            }
          },
          line: 23
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 35,
              column: 2
            },
            end: {
              line: 35,
              column: 3
            }
          },
          loc: {
            start: {
              line: 35,
              column: 31
            },
            end: {
              line: 38,
              column: 3
            }
          },
          line: 35
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 39,
              column: 2
            },
            end: {
              line: 39,
              column: 3
            }
          },
          loc: {
            start: {
              line: 39,
              column: 13
            },
            end: {
              line: 46,
              column: 3
            }
          },
          line: 39
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 47,
              column: 2
            },
            end: {
              line: 47,
              column: 3
            }
          },
          loc: {
            start: {
              line: 47,
              column: 14
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 47
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 50,
              column: 2
            },
            end: {
              line: 50,
              column: 3
            }
          },
          loc: {
            start: {
              line: 50,
              column: 13
            },
            end: {
              line: 52,
              column: 3
            }
          },
          line: 50
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 54,
              column: 2
            },
            end: {
              line: 54,
              column: 3
            }
          },
          loc: {
            start: {
              line: 54,
              column: 22
            },
            end: {
              line: 60,
              column: 3
            }
          },
          line: 54
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 62,
              column: 2
            },
            end: {
              line: 62,
              column: 3
            }
          },
          loc: {
            start: {
              line: 62,
              column: 23
            },
            end: {
              line: 68,
              column: 3
            }
          },
          line: 62
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 70,
              column: 2
            },
            end: {
              line: 70,
              column: 3
            }
          },
          loc: {
            start: {
              line: 70,
              column: 16
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 70
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 57,
              column: 4
            },
            end: {
              line: 59,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 57,
              column: 4
            },
            end: {
              line: 59,
              column: 5
            }
          }, {
            start: {
              line: 57,
              column: 4
            },
            end: {
              line: 59,
              column: 5
            }
          }],
          line: 57
        },
        '1': {
          loc: {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 67,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 67,
              column: 5
            }
          }, {
            start: {
              line: 65,
              column: 4
            },
            end: {
              line: 67,
              column: 5
            }
          }],
          line: 65
        },
        '2': {
          loc: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }, {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }],
          line: 73
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$4 = (cov_2jnirkep4p.s[0]++, videojs.getComponent('component'));

  var ViuInfoPanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuInfoPanelContainer, _Component);

    var _super = _createSuper(ViuInfoPanelContainer);

    function ViuInfoPanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuInfoPanelContainer);

      cov_2jnirkep4p.f[0]++;
      cov_2jnirkep4p.s[1]++;
      _this = _super.call(this, player, options);
      cov_2jnirkep4p.s[2]++;

      _this.addChild('chipCaptions', options.info);

      cov_2jnirkep4p.s[3]++;

      _this.addChild('chipName', options.info);

      cov_2jnirkep4p.s[4]++;

      _this.addChild('chipOfflineTime', options.info);

      cov_2jnirkep4p.s[5]++;

      _this.addChild('chipDesc', options.info);

      return _this;
    }

    _createClass(ViuInfoPanelContainer, [{
      key: "createEl",
      value: function createEl() {
        cov_2jnirkep4p.f[1]++;
        var root = (cov_2jnirkep4p.s[6]++, _get(_getPrototypeOf(ViuInfoPanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-info-drawer-container',
          dir: 'ltr'
        }));
        cov_2jnirkep4p.s[7]++;
        return root;
      }
    }]);

    return ViuInfoPanelContainer;
  }(Component$4);

  var ViuInfoPanel = /*#__PURE__*/function (_Component2) {
    _inherits(ViuInfoPanel, _Component2);

    var _super2 = _createSuper(ViuInfoPanel);

    function ViuInfoPanel(player, options) {
      var _this2;

      _classCallCheck(this, ViuInfoPanel);

      cov_2jnirkep4p.f[2]++;
      cov_2jnirkep4p.s[8]++;
      _this2 = _super2.call(this, player, options);
      cov_2jnirkep4p.s[9]++;

      _this2.addChild('ViuInfoPanelContainer', options);

      return _this2;
    }

    _createClass(ViuInfoPanel, [{
      key: "createEl",
      value: function createEl() {
        cov_2jnirkep4p.f[3]++;
        var root = (cov_2jnirkep4p.s[10]++, _get(_getPrototypeOf(ViuInfoPanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-info-drawer',
          dir: 'ltr'
        }));
        cov_2jnirkep4p.s[11]++;
        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        cov_2jnirkep4p.f[4]++;
        cov_2jnirkep4p.s[12]++;
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        cov_2jnirkep4p.f[5]++;
        cov_2jnirkep4p.s[13]++;
        this.containerDownStep();
      }
    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        cov_2jnirkep4p.f[6]++;
        var content = (cov_2jnirkep4p.s[14]++, this.eventBusEl_.childNodes[0]);
        cov_2jnirkep4p.s[15]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_2jnirkep4p.b[0][0]++;
          cov_2jnirkep4p.s[16]++;
          content.scrollTop = content.scrollTop + 300;
        } else {
          cov_2jnirkep4p.b[0][1]++;
        }
      }
    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        cov_2jnirkep4p.f[7]++;
        var content = (cov_2jnirkep4p.s[17]++, this.eventBusEl_.childNodes[0]);
        cov_2jnirkep4p.s[18]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_2jnirkep4p.b[1][0]++;
          cov_2jnirkep4p.s[19]++;
          content.scrollTop = content.scrollTop - 300;
        } else {
          cov_2jnirkep4p.b[1][1]++;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_2jnirkep4p.f[8]++;
        cov_2jnirkep4p.s[20]++;
        this.player_.removeClass('vjs-language-drawer-open');
        cov_2jnirkep4p.s[21]++;

        if (!this.hasClass('active')) {
          cov_2jnirkep4p.b[2][0]++;
          cov_2jnirkep4p.s[22]++;
          this.addClass('active');
          cov_2jnirkep4p.s[23]++;
          this.player_.addClass('vjs-info-drawer-open');
        } else {
          cov_2jnirkep4p.b[2][1]++;
          cov_2jnirkep4p.s[24]++;
          this.removeClass('active');
          cov_2jnirkep4p.s[25]++;
          this.player_.removeClass('vjs-info-drawer-open');
        }
      }
    }]);

    return ViuInfoPanel;
  }(Component$4);

  cov_2jnirkep4p.s[26]++;
  videojs.registerComponent('chipName', ChipName);
  cov_2jnirkep4p.s[27]++;
  videojs.registerComponent('chipCaptions', ChipCaptions);
  cov_2jnirkep4p.s[28]++;
  videojs.registerComponent('chipDesc', ChipDesc);
  cov_2jnirkep4p.s[29]++;
  videojs.registerComponent('chipOfflineTime', ChipOfflineTime);
  cov_2jnirkep4p.s[30]++;
  videojs.registerComponent('viuInfoPanel', ViuInfoPanel);
  cov_2jnirkep4p.s[31]++;
  videojs.registerComponent('viuInfoPanelContainer', ViuInfoPanelContainer);

  var cov_1xrllodwsq = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/langTitle.js',
        hash = 'ceccd05859114c399b99e1f99b99f00373126b88',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/langTitle.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 8,
            column: 1
          }
        },
        '3': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '4': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 59
          }
        },
        '5': {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 24,
            column: 6
          }
        },
        '6': {
          start: {
            line: 25,
            column: 17
          },
          end: {
            line: 29,
            column: 6
          }
        },
        '7': {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 27
          }
        },
        '8': {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 3
            }
          },
          loc: {
            start: {
              line: 19,
              column: 13
            },
            end: {
              line: 33,
              column: 3
            }
          },
          line: 19
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 26,
              column: 19
            },
            end: {
              line: 26,
              column: 58
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 26,
              column: 19
            },
            end: {
              line: 26,
              column: 52
            }
          }, {
            start: {
              line: 26,
              column: 56
            },
            end: {
              line: 26,
              column: 58
            }
          }],
          line: 26
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$5 = (cov_1xrllodwsq.s[0]++, videojs.getComponent('component'));
  var dom$4 = (cov_1xrllodwsq.s[1]++, videojs.dom);
  var defaults$2 = (cov_1xrllodwsq.s[2]++, {
    title: ''
  });

  var LangTitle = /*#__PURE__*/function (_Component) {
    _inherits(LangTitle, _Component);

    var _super = _createSuper(LangTitle);

    function LangTitle(player, options) {
      var _this;

      _classCallCheck(this, LangTitle);

      cov_1xrllodwsq.f[0]++;
      cov_1xrllodwsq.s[3]++;
      _this = _super.call(this, player, options);
      cov_1xrllodwsq.s[4]++;
      _this.options = videojs.mergeOptions(defaults$2, options);
      return _this;
    }

    _createClass(LangTitle, [{
      key: "createEl",
      value: function createEl() {
        cov_1xrllodwsq.f[1]++;
        var root = (cov_1xrllodwsq.s[5]++, _get(_getPrototypeOf(LangTitle.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-lang-title-span',
          dir: 'ltr'
        }));
        var text = (cov_1xrllodwsq.s[6]++, dom$4.createEl('span', {
          textContent: (cov_1xrllodwsq.b[0][0]++, this.localize('setting_language')) || (cov_1xrllodwsq.b[0][1]++, ''),
          className: "vjs-viu-player-lang-title ".concat(_get(_getPrototypeOf(LangTitle.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_1xrllodwsq.s[7]++;
        root.appendChild(text);
        cov_1xrllodwsq.s[8]++;
        return root;
      }
    }]);

    return LangTitle;
  }(Component$5);

  var cov_21ajnnv5bm = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/langList.js',
        hash = 'b157e97d5bfeb35cad9a759904a26796037c979c',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/langList.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 8,
            column: 1
          }
        },
        '3': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '4': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 59
          }
        },
        '5': {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 23,
            column: 7
          }
        },
        '6': {
          start: {
            line: 19,
            column: 6
          },
          end: {
            line: 19,
            column: 30
          }
        },
        '7': {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 50
          }
        },
        '8': {
          start: {
            line: 22,
            column: 6
          },
          end: {
            line: 22,
            column: 36
          }
        },
        '9': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 39,
            column: 7
          }
        },
        '10': {
          start: {
            line: 25,
            column: 25
          },
          end: {
            line: 25,
            column: 51
          }
        },
        '11': {
          start: {
            line: 26,
            column: 26
          },
          end: {
            line: 26,
            column: 34
          }
        },
        '12': {
          start: {
            line: 29,
            column: 6
          },
          end: {
            line: 33,
            column: 7
          }
        },
        '13': {
          start: {
            line: 30,
            column: 8
          },
          end: {
            line: 32,
            column: 9
          }
        },
        '14': {
          start: {
            line: 31,
            column: 10
          },
          end: {
            line: 31,
            column: 21
          }
        },
        '15': {
          start: {
            line: 35,
            column: 6
          },
          end: {
            line: 37,
            column: 9
          }
        },
        '16': {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 40
          }
        },
        '17': {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 42,
            column: 6
          }
        },
        '18': {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 30
          }
        },
        '19': {
          start: {
            line: 46,
            column: 17
          },
          end: {
            line: 49,
            column: 6
          }
        },
        '20': {
          start: {
            line: 50,
            column: 22
          },
          end: {
            line: 50,
            column: 45
          }
        },
        '21': {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 56,
            column: 5
          }
        },
        '22': {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 38
          }
        },
        '23': {
          start: {
            line: 55,
            column: 6
          },
          end: {
            line: 55,
            column: 41
          }
        },
        '24': {
          start: {
            line: 57,
            column: 34
          },
          end: {
            line: 57,
            column: 39
          }
        },
        '25': {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        '26': {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 66
          }
        },
        '27': {
          start: {
            line: 61,
            column: 19
          },
          end: {
            line: 67,
            column: 8
          }
        },
        '28': {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 71,
            column: 7
          }
        },
        '29': {
          start: {
            line: 70,
            column: 8
          },
          end: {
            line: 70,
            column: 39
          }
        },
        '30': {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 49
          }
        },
        '31': {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 29
          }
        },
        '32': {
          start: {
            line: 75,
            column: 23
          },
          end: {
            line: 79,
            column: 6
          }
        },
        '33': {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        '34': {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 46
          }
        },
        '35': {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 84,
            column: 46
          }
        },
        '36': {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 33
          }
        },
        '37': {
          start: {
            line: 86,
            column: 4
          },
          end: {
            line: 86,
            column: 16
          }
        },
        '38': {
          start: {
            line: 90,
            column: 26
          },
          end: {
            line: 90,
            column: 102
          }
        },
        '39': {
          start: {
            line: 90,
            column: 67
          },
          end: {
            line: 90,
            column: 101
          }
        },
        '40': {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 7
          }
        },
        '41': {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 29
          }
        },
        '42': {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 30
          }
        },
        '43': {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        '44': {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 13
          }
        },
        '45': {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 27
          }
        },
        '46': {
          start: {
            line: 108,
            column: 22
          },
          end: {
            line: 108,
            column: 29
          }
        },
        '47': {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        '48': {
          start: {
            line: 111,
            column: 24
          },
          end: {
            line: 111,
            column: 66
          }
        },
        '49': {
          start: {
            line: 112,
            column: 19
          },
          end: {
            line: 118,
            column: 8
          }
        },
        '50': {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 120,
            column: 49
          }
        },
        '51': {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 34
          }
        },
        '52': {
          start: {
            line: 125,
            column: 17
          },
          end: {
            line: 125,
            column: 38
          }
        },
        '53': {
          start: {
            line: 127,
            column: 19
          },
          end: {
            line: 127,
            column: 46
          }
        },
        '54': {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 131,
            column: 7
          }
        },
        '55': {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 38
          }
        },
        '56': {
          start: {
            line: 135,
            column: 17
          },
          end: {
            line: 135,
            column: 38
          }
        },
        '57': {
          start: {
            line: 136,
            column: 18
          },
          end: {
            line: 136,
            column: 61
          }
        },
        '58': {
          start: {
            line: 137,
            column: 21
          },
          end: {
            line: 137,
            column: 56
          }
        },
        '59': {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 44
          }
        },
        '60': {
          start: {
            line: 140,
            column: 4
          },
          end: {
            line: 142,
            column: 7
          }
        },
        '61': {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 40
          }
        },
        '62': {
          start: {
            line: 154,
            column: 18
          },
          end: {
            line: 154,
            column: 51
          }
        },
        '63': {
          start: {
            line: 156,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        '64': {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        '65': {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 158,
            column: 49
          }
        },
        '66': {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 161,
            column: 45
          }
        },
        '67': {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 163,
            column: 31
          }
        },
        '68': {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 56
          }
        },
        '69': {
          start: {
            line: 171,
            column: 4
          },
          end: {
            line: 171,
            column: 74
          }
        },
        '70': {
          start: {
            line: 174,
            column: 25
          },
          end: {
            line: 179,
            column: 6
          }
        },
        '71': {
          start: {
            line: 180,
            column: 22
          },
          end: {
            line: 180,
            column: 57
          }
        },
        '72': {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 186,
            column: 5
          }
        },
        '73': {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 183,
            column: 59
          }
        },
        '74': {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 185,
            column: 55
          }
        },
        '75': {
          start: {
            line: 187,
            column: 4
          },
          end: {
            line: 187,
            column: 74
          }
        },
        '76': {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 190,
            column: 56
          }
        },
        '77': {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 191,
            column: 74
          }
        },
        '78': {
          start: {
            line: 194,
            column: 30
          },
          end: {
            line: 194,
            column: 52
          }
        },
        '79': {
          start: {
            line: 195,
            column: 31
          },
          end: {
            line: 195,
            column: 60
          }
        },
        '80': {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        '81': {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 198,
            column: 47
          }
        },
        '82': {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 30
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 44,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 18,
              column: 21
            },
            end: {
              line: 18,
              column: 22
            }
          },
          loc: {
            start: {
              line: 18,
              column: 30
            },
            end: {
              line: 23,
              column: 5
            }
          },
          line: 18
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 24,
              column: 25
            },
            end: {
              line: 24,
              column: 26
            }
          },
          loc: {
            start: {
              line: 24,
              column: 30
            },
            end: {
              line: 39,
              column: 5
            }
          },
          line: 24
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 45,
              column: 3
            }
          },
          loc: {
            start: {
              line: 45,
              column: 13
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 45
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 89,
              column: 2
            },
            end: {
              line: 89,
              column: 3
            }
          },
          loc: {
            start: {
              line: 89,
              column: 23
            },
            end: {
              line: 95,
              column: 3
            }
          },
          line: 89
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 90,
              column: 59
            },
            end: {
              line: 90,
              column: 60
            }
          },
          loc: {
            start: {
              line: 90,
              column: 67
            },
            end: {
              line: 90,
              column: 101
            }
          },
          line: 90
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 97,
              column: 2
            },
            end: {
              line: 97,
              column: 3
            }
          },
          loc: {
            start: {
              line: 97,
              column: 22
            },
            end: {
              line: 99,
              column: 3
            }
          },
          line: 97
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 100,
              column: 2
            },
            end: {
              line: 100,
              column: 3
            }
          },
          loc: {
            start: {
              line: 100,
              column: 23
            },
            end: {
              line: 102,
              column: 3
            }
          },
          line: 100
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 103,
              column: 2
            },
            end: {
              line: 103,
              column: 3
            }
          },
          loc: {
            start: {
              line: 103,
              column: 34
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 103
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 124,
              column: 2
            },
            end: {
              line: 124,
              column: 3
            }
          },
          loc: {
            start: {
              line: 124,
              column: 22
            },
            end: {
              line: 133,
              column: 3
            }
          },
          line: 124
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 134,
              column: 2
            },
            end: {
              line: 134,
              column: 3
            }
          },
          loc: {
            start: {
              line: 134,
              column: 23
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 134
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 152,
              column: 2
            },
            end: {
              line: 152,
              column: 3
            }
          },
          loc: {
            start: {
              line: 152,
              column: 29
            },
            end: {
              line: 164,
              column: 3
            }
          },
          line: 152
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 169,
              column: 2
            },
            end: {
              line: 169,
              column: 3
            }
          },
          loc: {
            start: {
              line: 169,
              column: 27
            },
            end: {
              line: 172,
              column: 3
            }
          },
          line: 169
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 173,
              column: 2
            },
            end: {
              line: 173,
              column: 3
            }
          },
          loc: {
            start: {
              line: 173,
              column: 12
            },
            end: {
              line: 188,
              column: 3
            }
          },
          line: 173
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 189,
              column: 2
            },
            end: {
              line: 189,
              column: 3
            }
          },
          loc: {
            start: {
              line: 189,
              column: 29
            },
            end: {
              line: 192,
              column: 3
            }
          },
          line: 189
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 193,
              column: 2
            },
            end: {
              line: 193,
              column: 3
            }
          },
          loc: {
            start: {
              line: 193,
              column: 24
            },
            end: {
              line: 202,
              column: 3
            }
          },
          line: 193
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 30,
              column: 8
            },
            end: {
              line: 32,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 30,
              column: 8
            },
            end: {
              line: 32,
              column: 9
            }
          }, {
            start: {
              line: 30,
              column: 8
            },
            end: {
              line: 32,
              column: 9
            }
          }],
          line: 30
        },
        '1': {
          loc: {
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          }, {
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 56,
              column: 5
            }
          }],
          line: 52
        },
        '2': {
          loc: {
            start: {
              line: 62,
              column: 21
            },
            end: {
              line: 62,
              column: 44
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 62,
              column: 21
            },
            end: {
              line: 62,
              column: 38
            }
          }, {
            start: {
              line: 62,
              column: 42
            },
            end: {
              line: 62,
              column: 44
            }
          }],
          line: 62
        },
        '3': {
          loc: {
            start: {
              line: 64,
              column: 10
            },
            end: {
              line: 64,
              column: 40
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 64,
              column: 22
            },
            end: {
              line: 64,
              column: 35
            }
          }, {
            start: {
              line: 64,
              column: 38
            },
            end: {
              line: 64,
              column: 40
            }
          }],
          line: 64
        },
        '4': {
          loc: {
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 71,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 71,
              column: 7
            }
          }, {
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 71,
              column: 7
            }
          }],
          line: 69
        },
        '5': {
          loc: {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }, {
            start: {
              line: 81,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }],
          line: 81
        },
        '6': {
          loc: {
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 58
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 81,
              column: 8
            },
            end: {
              line: 81,
              column: 30
            }
          }, {
            start: {
              line: 81,
              column: 34
            },
            end: {
              line: 81,
              column: 58
            }
          }],
          line: 81
        },
        '7': {
          loc: {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }, {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 106,
              column: 5
            }
          }],
          line: 104
        },
        '8': {
          loc: {
            start: {
              line: 113,
              column: 21
            },
            end: {
              line: 113,
              column: 44
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 113,
              column: 21
            },
            end: {
              line: 113,
              column: 38
            }
          }, {
            start: {
              line: 113,
              column: 42
            },
            end: {
              line: 113,
              column: 44
            }
          }],
          line: 113
        },
        '9': {
          loc: {
            start: {
              line: 115,
              column: 10
            },
            end: {
              line: 115,
              column: 40
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 115,
              column: 22
            },
            end: {
              line: 115,
              column: 35
            }
          }, {
            start: {
              line: 115,
              column: 38
            },
            end: {
              line: 115,
              column: 40
            }
          }],
          line: 115
        },
        '10': {
          loc: {
            start: {
              line: 127,
              column: 19
            },
            end: {
              line: 127,
              column: 46
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 127,
              column: 34
            },
            end: {
              line: 127,
              column: 35
            }
          }, {
            start: {
              line: 127,
              column: 38
            },
            end: {
              line: 127,
              column: 46
            }
          }],
          line: 127
        },
        '11': {
          loc: {
            start: {
              line: 137,
              column: 21
            },
            end: {
              line: 137,
              column: 56
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 137,
              column: 40
            },
            end: {
              line: 137,
              column: 45
            }
          }, {
            start: {
              line: 137,
              column: 48
            },
            end: {
              line: 137,
              column: 56
            }
          }],
          line: 137
        },
        '12': {
          loc: {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 156,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 156
        },
        '13': {
          loc: {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }, {
            start: {
              line: 182,
              column: 4
            },
            end: {
              line: 186,
              column: 5
            }
          }],
          line: 182
        },
        '14': {
          loc: {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          }, {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 201,
              column: 5
            }
          }],
          line: 197
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0,
        '64': 0,
        '65': 0,
        '66': 0,
        '67': 0,
        '68': 0,
        '69': 0,
        '70': 0,
        '71': 0,
        '72': 0,
        '73': 0,
        '74': 0,
        '75': 0,
        '76': 0,
        '77': 0,
        '78': 0,
        '79': 0,
        '80': 0,
        '81': 0,
        '82': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0],
        '14': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$6 = (cov_21ajnnv5bm.s[0]++, videojs.getComponent('Component'));
  var dom$5 = (cov_21ajnnv5bm.s[1]++, videojs.dom);
  var defaults$3 = (cov_21ajnnv5bm.s[2]++, {
    title: ''
  });

  var LangList = /*#__PURE__*/function (_Component) {
    _inherits(LangList, _Component);

    var _super = _createSuper(LangList);

    function LangList(player, options) {
      var _this;

      _classCallCheck(this, LangList);

      cov_21ajnnv5bm.f[0]++;
      cov_21ajnnv5bm.s[3]++;
      _this = _super.call(this, player, options);
      cov_21ajnnv5bm.s[4]++;
      _this.options = videojs.mergeOptions(defaults$3, options);
      cov_21ajnnv5bm.s[5]++;

      _this.on('click', function (event) {
        cov_21ajnnv5bm.f[1]++;
        cov_21ajnnv5bm.s[6]++;
        event.stopPropagation();

        var _ref = (cov_21ajnnv5bm.s[7]++, event.target.dataset),
            languagesId = _ref.languagesId;

        cov_21ajnnv5bm.s[8]++;

        _this.handleClick(languagesId);
      });

      cov_21ajnnv5bm.s[9]++;

      _this.on('mouseover', function (e) {
        cov_21ajnnv5bm.f[2]++;
        var childNodes = (cov_21ajnnv5bm.s[10]++, e.currentTarget.childNodes);
        var currentNode = (cov_21ajnnv5bm.s[11]++, e.target);
        var upStep;
        cov_21ajnnv5bm.s[12]++;

        for (var i = 0; i < childNodes.length; i++) {
          cov_21ajnnv5bm.s[13]++;

          if (currentNode === childNodes[i]) {
            cov_21ajnnv5bm.b[0][0]++;
            cov_21ajnnv5bm.s[14]++;
            upStep = i;
          } else {
            cov_21ajnnv5bm.b[0][1]++;
          }
        }

        cov_21ajnnv5bm.s[15]++;

        _this.setState({
          isSelected: upStep
        });

        cov_21ajnnv5bm.s[16]++;

        _this.setComponentSelected(upStep);
      });

      cov_21ajnnv5bm.s[17]++;
      _this.state = {
        isSelected: 0
      };
      cov_21ajnnv5bm.s[18]++;

      _this.setDefaultSelected();

      return _this;
    }

    _createClass(LangList, [{
      key: "createEl",
      value: function createEl() {
        cov_21ajnnv5bm.f[3]++;
        var root = (cov_21ajnnv5bm.s[19]++, _get(_getPrototypeOf(LangList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-lang-items',
          dir: 'ltr'
        }));
        var languages = (cov_21ajnnv5bm.s[20]++, this.options_.languages);
        cov_21ajnnv5bm.s[21]++;

        if (languages.length >= 8) {
          cov_21ajnnv5bm.b[1][0]++;
          cov_21ajnnv5bm.s[22]++;
          root.classList.add('over-size');
        } else {
          cov_21ajnnv5bm.b[1][1]++;
          cov_21ajnnv5bm.s[23]++;
          root.classList.remove('over-size');
        }

        var isAllLanguagesIsDefault = (cov_21ajnnv5bm.s[24]++, false);
        cov_21ajnnv5bm.s[25]++;

        for (var i = 0; i < languages.length; i++) {
          var isDefault = (cov_21ajnnv5bm.s[26]++, parseInt(languages[i].isDefault, 10) === 1);
          var text = (cov_21ajnnv5bm.s[27]++, dom$5.createEl('li', {
            textContent: (cov_21ajnnv5bm.b[2][0]++, languages[i].name) || (cov_21ajnnv5bm.b[2][1]++, ''),
            className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(isDefault ? (cov_21ajnnv5bm.b[3][0]++, 'lang-active') : (cov_21ajnnv5bm.b[3][1]++, ''), " ").concat(_get(_getPrototypeOf(LangList.prototype), "buildCSSClass", this).call(this)),
            dir: 'ltr'
          }));
          cov_21ajnnv5bm.s[28]++;

          if (languages[i].isDefault) {
            cov_21ajnnv5bm.b[4][0]++;
            cov_21ajnnv5bm.s[29]++;
            isAllLanguagesIsDefault = true;
          } else {
            cov_21ajnnv5bm.b[4][1]++;
          }

          cov_21ajnnv5bm.s[30]++;
          text.dataset.languagesId = languages[i].id;
          cov_21ajnnv5bm.s[31]++;
          root.appendChild(text);
        }

        var switchText = (cov_21ajnnv5bm.s[32]++, dom$5.createEl('li', {
          textContent: this.localize('hide_sub'),
          className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(_get(_getPrototypeOf(LangList.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }));
        cov_21ajnnv5bm.s[33]++;

        if ((cov_21ajnnv5bm.b[6][0]++, languages.length === 0) || (cov_21ajnnv5bm.b[6][1]++, !isAllLanguagesIsDefault)) {
          cov_21ajnnv5bm.b[5][0]++;
          cov_21ajnnv5bm.s[34]++;
          switchText.classList.add('lang-active');
        } else {
          cov_21ajnnv5bm.b[5][1]++;
        }

        cov_21ajnnv5bm.s[35]++;
        switchText.dataset.languagesId = 'hidden';
        cov_21ajnnv5bm.s[36]++;
        root.appendChild(switchText);
        cov_21ajnnv5bm.s[37]++;
        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        cov_21ajnnv5bm.f[4]++;
        var selectedIndex = (cov_21ajnnv5bm.s[38]++, this.options.languages.findIndex(function (item) {
          cov_21ajnnv5bm.f[5]++;
          cov_21ajnnv5bm.s[39]++;
          return parseInt(item.isDefault, 10) === 1;
        }));
        cov_21ajnnv5bm.s[40]++;
        this.setState({
          isSelected: selectedIndex
        });
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        cov_21ajnnv5bm.f[6]++;
        cov_21ajnnv5bm.s[41]++;
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        cov_21ajnnv5bm.f[7]++;
        cov_21ajnnv5bm.s[42]++;
        this.selectedDownerStep();
      }
    }, {
      key: "loadNewLangListOptions",
      value: function loadNewLangListOptions(options) {
        cov_21ajnnv5bm.f[8]++;
        cov_21ajnnv5bm.s[43]++;

        if (options.length === 0) {
          cov_21ajnnv5bm.b[7][0]++;
          cov_21ajnnv5bm.s[44]++;
          return;
        } else {
          cov_21ajnnv5bm.b[7][1]++;
        }

        cov_21ajnnv5bm.s[45]++;
        dom$5.emptyEl(this.el());
        var languages = (cov_21ajnnv5bm.s[46]++, options);
        cov_21ajnnv5bm.s[47]++;

        for (var i = 0; i < languages.length; i++) {
          var isDefault = (cov_21ajnnv5bm.s[48]++, parseInt(languages[i].isDefault, 10) === 1);
          var text = (cov_21ajnnv5bm.s[49]++, dom$5.createEl('li', {
            textContent: (cov_21ajnnv5bm.b[8][0]++, languages[i].name) || (cov_21ajnnv5bm.b[8][1]++, ''),
            className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(isDefault ? (cov_21ajnnv5bm.b[9][0]++, 'lang-active') : (cov_21ajnnv5bm.b[9][1]++, ''), "}"),
            dir: 'ltr'
          }));
          cov_21ajnnv5bm.s[50]++;
          text.dataset.languagesId = languages[i].id;
          cov_21ajnnv5bm.s[51]++;
          this.el().appendChild(text);
        }
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        cov_21ajnnv5bm.f[9]++;
        var step = (cov_21ajnnv5bm.s[52]++, this.state.isSelected);
        var upStep = (cov_21ajnnv5bm.s[53]++, step - 1 < 0 ? (cov_21ajnnv5bm.b[10][0]++, 0) : (cov_21ajnnv5bm.b[10][1]++, step - 1));
        cov_21ajnnv5bm.s[54]++;
        this.setState({
          isSelected: upStep
        });
        cov_21ajnnv5bm.s[55]++;
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        cov_21ajnnv5bm.f[10]++;
        var step = (cov_21ajnnv5bm.s[56]++, this.state.isSelected);
        var total = (cov_21ajnnv5bm.s[57]++, parseInt(this.options.languages.length, 10));
        var downStep = (cov_21ajnnv5bm.s[58]++, step + 1 > total ? (cov_21ajnnv5bm.b[11][0]++, total) : (cov_21ajnnv5bm.b[11][1]++, step + 1));
        cov_21ajnnv5bm.s[59]++;
        videojs.log('selectedDownerStep', step);
        cov_21ajnnv5bm.s[60]++;
        this.setState({
          isSelected: downStep
        });
        cov_21ajnnv5bm.s[61]++;
        this.setComponentSelected(downStep);
      }
    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        cov_21ajnnv5bm.f[11]++;
        var items = (cov_21ajnnv5bm.s[62]++, dom$5.$$('.vjs-viu-player-lang-li'));
        cov_21ajnnv5bm.s[63]++;

        if (items) {
          cov_21ajnnv5bm.b[12][0]++;
          cov_21ajnnv5bm.s[64]++;

          for (var i = 0; i < items.length; i++) {
            cov_21ajnnv5bm.s[65]++;
            dom$5.removeClass(items[i], 'lang-active');
          }
        } else {
          cov_21ajnnv5bm.b[12][1]++;
        }

        cov_21ajnnv5bm.s[66]++;
        dom$5.addClass(items[step], 'lang-active');
        cov_21ajnnv5bm.s[67]++;
        this.adjustScrollTop(step);
      }
    }, {
      key: "handleClick",
      value: function handleClick(languagesId) {
        cov_21ajnnv5bm.f[12]++;
        cov_21ajnnv5bm.s[68]++;
        this.player_.trigger('subtitleChange', languagesId);
        cov_21ajnnv5bm.s[69]++;
        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "confirm",
      value: function confirm() {
        cov_21ajnnv5bm.f[13]++;
        var allLanguages = (cov_21ajnnv5bm.s[70]++, this.options_.languages.concat({
          id: 'hidden',
          name: 'hidden',
          isDefault: '0',
          mark: 'hidden'
        }));
        var languages = (cov_21ajnnv5bm.s[71]++, allLanguages[this.state.isSelected]);
        cov_21ajnnv5bm.s[72]++;

        if (languages !== undefined) {
          cov_21ajnnv5bm.b[13][0]++;
          cov_21ajnnv5bm.s[73]++;
          this.player_.trigger('subtitleChange', languages.id);
        } else {
          cov_21ajnnv5bm.b[13][1]++;
          cov_21ajnnv5bm.s[74]++;
          this.player_.trigger('subtitleChange', 'hidden');
        }

        cov_21ajnnv5bm.s[75]++;
        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(languagesId) {
        cov_21ajnnv5bm.f[14]++;
        cov_21ajnnv5bm.s[76]++;
        this.player_.trigger('subtitleChange', languagesId);
        cov_21ajnnv5bm.s[77]++;
        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "adjustScrollTop",
      value: function adjustScrollTop(step) {
        cov_21ajnnv5bm.f[15]++;
        var langListContainer = (cov_21ajnnv5bm.s[78]++, this.el().clientHeight);
        var containerScrollTop = (cov_21ajnnv5bm.s[79]++, parseInt((step + 1) * 92, 10));
        cov_21ajnnv5bm.s[80]++;

        if (containerScrollTop + 92 > langListContainer) {
          cov_21ajnnv5bm.b[14][0]++;
          cov_21ajnnv5bm.s[81]++;
          this.el().scrollTop = containerScrollTop;
        } else {
          cov_21ajnnv5bm.b[14][1]++;
          cov_21ajnnv5bm.s[82]++;
          this.el().scrollTop = 0;
        }
      }
    }]);

    return LangList;
  }(Component$6);

  var cov_k260vvoqz = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/toggleHandle.js',
        hash = '685053369a6e634dbb17d84df0f8884c148bc796',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/toggleHandle.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 8,
            column: 1
          }
        },
        '2': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '3': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 59
          }
        },
        '4': {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 23,
            column: 6
          }
        },
        '5': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 3
            }
          },
          loc: {
            start: {
              line: 19,
              column: 13
            },
            end: {
              line: 26,
              column: 3
            }
          },
          line: 19
        }
      },
      branchMap: {},
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {},
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$7 = (cov_k260vvoqz.s[0]++, videojs.getComponent('component'));
  var defaults$4 = (cov_k260vvoqz.s[1]++, {
    chipName: ''
  });

  var ToggleHandle = /*#__PURE__*/function (_Component) {
    _inherits(ToggleHandle, _Component);

    var _super = _createSuper(ToggleHandle);

    function ToggleHandle(player, options) {
      var _this;

      _classCallCheck(this, ToggleHandle);

      cov_k260vvoqz.f[0]++;
      cov_k260vvoqz.s[2]++;
      _this = _super.call(this, player, options);
      cov_k260vvoqz.s[3]++;
      _this.options = videojs.mergeOptions(defaults$4, options);
      return _this;
    }

    _createClass(ToggleHandle, [{
      key: "createEl",
      value: function createEl() {
        cov_k260vvoqz.f[1]++;
        var wrap = (cov_k260vvoqz.s[4]++, _get(_getPrototypeOf(ToggleHandle.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-lang-itembox',
          dir: 'ltr'
        }));
        cov_k260vvoqz.s[5]++;
        return wrap;
      }
    }]);

    return ToggleHandle;
  }(Component$7);

  var cov_16rn8os4f8 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/viuSubtitlePanel.js',
        hash = 'd06c0ae8f9a23de36e18fd24787cad5933f1967d',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/subtitlePanel/viuSubtitlePanel.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 29,
            column: 1
          }
        },
        '2': {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 27
          }
        },
        '3': {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 40
          }
        },
        '4': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 39
          }
        },
        '5': {
          start: {
            line: 43,
            column: 17
          },
          end: {
            line: 46,
            column: 6
          }
        },
        '6': {
          start: {
            line: 48,
            column: 4
          },
          end: {
            line: 48,
            column: 16
          }
        },
        '7': {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 54,
            column: 27
          }
        },
        '8': {
          start: {
            line: 55,
            column: 4
          },
          end: {
            line: 55,
            column: 59
          }
        },
        '9': {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 61
          }
        },
        '10': {
          start: {
            line: 60,
            column: 17
          },
          end: {
            line: 63,
            column: 6
          }
        },
        '11': {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 16
          }
        },
        '12': {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 69,
            column: 53
          }
        },
        '13': {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 66
          }
        },
        '14': {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        '15': {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 56
          }
        },
        '16': {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 30
          }
        },
        '17': {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 59
          }
        },
        '18': {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 78,
            column: 33
          }
        },
        '19': {
          start: {
            line: 83,
            column: 0
          },
          end: {
            line: 83,
            column: 50
          }
        },
        '20': {
          start: {
            line: 84,
            column: 0
          },
          end: {
            line: 84,
            column: 48
          }
        },
        '21': {
          start: {
            line: 85,
            column: 0
          },
          end: {
            line: 85,
            column: 56
          }
        },
        '22': {
          start: {
            line: 87,
            column: 0
          },
          end: {
            line: 87,
            column: 64
          }
        },
        '23': {
          start: {
            line: 88,
            column: 0
          },
          end: {
            line: 91,
            column: 2
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 35,
              column: 2
            },
            end: {
              line: 35,
              column: 3
            }
          },
          loc: {
            start: {
              line: 35,
              column: 31
            },
            end: {
              line: 41,
              column: 3
            }
          },
          line: 35
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 42,
              column: 2
            },
            end: {
              line: 42,
              column: 3
            }
          },
          loc: {
            start: {
              line: 42,
              column: 13
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 42
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 53,
              column: 2
            },
            end: {
              line: 53,
              column: 3
            }
          },
          loc: {
            start: {
              line: 53,
              column: 31
            },
            end: {
              line: 58,
              column: 3
            }
          },
          line: 53
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 59,
              column: 2
            },
            end: {
              line: 59,
              column: 3
            }
          },
          loc: {
            start: {
              line: 59,
              column: 13
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 59
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 67,
              column: 2
            },
            end: {
              line: 67,
              column: 3
            }
          },
          loc: {
            start: {
              line: 67,
              column: 16
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 67
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }, {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }],
          line: 73
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$8 = (cov_16rn8os4f8.s[0]++, videojs.getComponent('component'));
  var defaults$5 = (cov_16rn8os4f8.s[1]++, {
    title: 'setting_language',
    languages: [{
      id: '0',
      name: '简体中文',
      isDefault: 0
    }, {
      id: '3',
      name: 'ENGLISH',
      isDefault: 1
    }, {
      id: '4',
      name: '日文',
      isDefault: 0
    }],
    toggleText: ['隐藏', '显示']
  });

  var ViuSubtitlePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuSubtitlePanelContainer, _Component);

    var _super = _createSuper(ViuSubtitlePanelContainer);

    function ViuSubtitlePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuSubtitlePanelContainer);

      cov_16rn8os4f8.f[0]++;
      cov_16rn8os4f8.s[2]++;
      _this = _super.call(this, player, options);
      cov_16rn8os4f8.s[3]++;

      _this.addChild('langTitle', options);

      cov_16rn8os4f8.s[4]++;

      _this.addChild('langList', options);

      return _this;
    }

    _createClass(ViuSubtitlePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        cov_16rn8os4f8.f[1]++;
        var root = (cov_16rn8os4f8.s[5]++, _get(_getPrototypeOf(ViuSubtitlePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-subtitle-drawer-container',
          dir: 'ltr'
        }));
        cov_16rn8os4f8.s[6]++;
        return root;
      }
    }]);

    return ViuSubtitlePanelContainer;
  }(Component$8);

  var ViuSubtitlePanel = /*#__PURE__*/function (_Component2) {
    _inherits(ViuSubtitlePanel, _Component2);

    var _super2 = _createSuper(ViuSubtitlePanel);

    function ViuSubtitlePanel(player, options) {
      var _this2;

      _classCallCheck(this, ViuSubtitlePanel);

      cov_16rn8os4f8.f[2]++;
      cov_16rn8os4f8.s[7]++;
      _this2 = _super2.call(this, player, options);
      cov_16rn8os4f8.s[8]++;
      _this2.options = videojs.mergeOptions(defaults$5, options);
      cov_16rn8os4f8.s[9]++;

      _this2.addChild('viuSubtitlePanelContainer', _this2.options);

      return _this2;
    }

    _createClass(ViuSubtitlePanel, [{
      key: "createEl",
      value: function createEl() {
        cov_16rn8os4f8.f[3]++;
        var root = (cov_16rn8os4f8.s[10]++, _get(_getPrototypeOf(ViuSubtitlePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-subtitle-drawer',
          dir: 'ltr'
        }));
        cov_16rn8os4f8.s[11]++;
        return root;
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_16rn8os4f8.f[4]++;
        cov_16rn8os4f8.s[12]++;
        this.player_.removeClass('vjs-info-drawer-open');
        cov_16rn8os4f8.s[13]++;
        this.player_.trigger('subtitleClick', this.options.languages);
        cov_16rn8os4f8.s[14]++;

        if (!this.hasClass('active')) {
          cov_16rn8os4f8.b[0][0]++;
          cov_16rn8os4f8.s[15]++;
          this.player_.addClass('vjs-language-drawer-open');
          cov_16rn8os4f8.s[16]++;
          this.addClass('active');
        } else {
          cov_16rn8os4f8.b[0][1]++;
          cov_16rn8os4f8.s[17]++;
          this.player_.removeClass('vjs-language-drawer-open');
          cov_16rn8os4f8.s[18]++;
          this.removeClass('active');
        }
      }
    }]);

    return ViuSubtitlePanel;
  }(Component$8);

  cov_16rn8os4f8.s[19]++;
  videojs.registerComponent('langTitle', LangTitle);
  cov_16rn8os4f8.s[20]++;
  videojs.registerComponent('langList', LangList);
  cov_16rn8os4f8.s[21]++;
  videojs.registerComponent('toggleHandle', ToggleHandle);
  cov_16rn8os4f8.s[22]++;
  videojs.registerComponent('viuSubtitlePanel', ViuSubtitlePanel);
  cov_16rn8os4f8.s[23]++;
  videojs.registerComponent('viuSubtitlePanelContainer', ViuSubtitlePanelContainer);

  var cov_3ebawyar2 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuProcessInfo.js',
        hash = '27769448838ded6ba80a51424afecedf86c28701',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuProcessInfo.js',
      statementMap: {
        '0': {
          start: {
            line: 4,
            column: 18
          },
          end: {
            line: 4,
            column: 51
          }
        },
        '1': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 11,
            column: 1
          }
        },
        '2': {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 27
          }
        },
        '3': {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 59
          }
        },
        '4': {
          start: {
            line: 41,
            column: 17
          },
          end: {
            line: 44,
            column: 6
          }
        },
        '5': {
          start: {
            line: 45,
            column: 25
          },
          end: {
            line: 49,
            column: 6
          }
        },
        '6': {
          start: {
            line: 50,
            column: 23
          },
          end: {
            line: 54,
            column: 6
          }
        },
        '7': {
          start: {
            line: 55,
            column: 22
          },
          end: {
            line: 59,
            column: 6
          }
        },
        '8': {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 66,
            column: 6
          }
        },
        '9': {
          start: {
            line: 67,
            column: 17
          },
          end: {
            line: 69,
            column: 8
          }
        },
        '10': {
          start: {
            line: 71,
            column: 24
          },
          end: {
            line: 75,
            column: 6
          }
        },
        '11': {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        '12': {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 93,
            column: 7
          }
        },
        '13': {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 82,
            column: 36
          }
        },
        '14': {
          start: {
            line: 83,
            column: 8
          },
          end: {
            line: 83,
            column: 37
          }
        },
        '15': {
          start: {
            line: 84,
            column: 8
          },
          end: {
            line: 86,
            column: 9
          }
        },
        '16': {
          start: {
            line: 85,
            column: 10
          },
          end: {
            line: 85,
            column: 40
          }
        },
        '17': {
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 39
          }
        },
        '18': {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 92,
            column: 9
          }
        },
        '19': {
          start: {
            line: 91,
            column: 10
          },
          end: {
            line: 91,
            column: 40
          }
        },
        '20': {
          start: {
            line: 94,
            column: 11
          },
          end: {
            line: 111,
            column: 5
          }
        },
        '21': {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        '22': {
          start: {
            line: 97,
            column: 8
          },
          end: {
            line: 97,
            column: 39
          }
        },
        '23': {
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 98,
            column: 36
          }
        },
        '24': {
          start: {
            line: 99,
            column: 8
          },
          end: {
            line: 99,
            column: 38
          }
        },
        '25': {
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 102,
            column: 9
          }
        },
        '26': {
          start: {
            line: 101,
            column: 10
          },
          end: {
            line: 101,
            column: 40
          }
        },
        '27': {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 105,
            column: 39
          }
        },
        '28': {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 106,
            column: 38
          }
        },
        '29': {
          start: {
            line: 107,
            column: 8
          },
          end: {
            line: 109,
            column: 9
          }
        },
        '30': {
          start: {
            line: 108,
            column: 10
          },
          end: {
            line: 108,
            column: 40
          }
        },
        '31': {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 16
          }
        },
        '32': {
          start: {
            line: 115,
            column: 0
          },
          end: {
            line: 115,
            column: 60
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 31,
              column: 2
            },
            end: {
              line: 31,
              column: 3
            }
          },
          loc: {
            start: {
              line: 31,
              column: 31
            },
            end: {
              line: 34,
              column: 3
            }
          },
          line: 31
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 40,
              column: 2
            },
            end: {
              line: 40,
              column: 3
            }
          },
          loc: {
            start: {
              line: 40,
              column: 13
            },
            end: {
              line: 113,
              column: 3
            }
          },
          line: 40
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 46,
              column: 19
            },
            end: {
              line: 46,
              column: 47
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 46,
              column: 19
            },
            end: {
              line: 46,
              column: 41
            }
          }, {
            start: {
              line: 46,
              column: 45
            },
            end: {
              line: 46,
              column: 47
            }
          }],
          line: 46
        },
        '1': {
          loc: {
            start: {
              line: 51,
              column: 19
            },
            end: {
              line: 51,
              column: 47
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 51,
              column: 19
            },
            end: {
              line: 51,
              column: 41
            }
          }, {
            start: {
              line: 51,
              column: 45
            },
            end: {
              line: 51,
              column: 47
            }
          }],
          line: 51
        },
        '2': {
          loc: {
            start: {
              line: 62,
              column: 8
            },
            end: {
              line: 62,
              column: 40
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 62,
              column: 8
            },
            end: {
              line: 62,
              column: 34
            }
          }, {
            start: {
              line: 62,
              column: 38
            },
            end: {
              line: 62,
              column: 40
            }
          }],
          line: 62
        },
        '3': {
          loc: {
            start: {
              line: 67,
              column: 17
            },
            end: {
              line: 69,
              column: 8
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 68,
              column: 6
            },
            end: {
              line: 68,
              column: 93
            }
          }, {
            start: {
              line: 69,
              column: 6
            },
            end: {
              line: 69,
              column: 8
            }
          }],
          line: 67
        },
        '4': {
          loc: {
            start: {
              line: 78,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 78,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 78,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 78
        },
        '5': {
          loc: {
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          }, {
            start: {
              line: 81,
              column: 6
            },
            end: {
              line: 93,
              column: 7
            }
          }],
          line: 81
        },
        '6': {
          loc: {
            start: {
              line: 81,
              column: 10
            },
            end: {
              line: 81,
              column: 68
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 81,
              column: 10
            },
            end: {
              line: 81,
              column: 39
            }
          }, {
            start: {
              line: 81,
              column: 43
            },
            end: {
              line: 81,
              column: 68
            }
          }],
          line: 81
        },
        '7': {
          loc: {
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 86,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 86,
              column: 9
            }
          }, {
            start: {
              line: 84,
              column: 8
            },
            end: {
              line: 86,
              column: 9
            }
          }],
          line: 84
        },
        '8': {
          loc: {
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }, {
            start: {
              line: 90,
              column: 8
            },
            end: {
              line: 92,
              column: 9
            }
          }],
          line: 90
        },
        '9': {
          loc: {
            start: {
              line: 94,
              column: 11
            },
            end: {
              line: 111,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 94,
              column: 11
            },
            end: {
              line: 111,
              column: 5
            }
          }, {
            start: {
              line: 94,
              column: 11
            },
            end: {
              line: 111,
              column: 5
            }
          }],
          line: 94
        },
        '10': {
          loc: {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }, {
            start: {
              line: 96,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }],
          line: 96
        },
        '11': {
          loc: {
            start: {
              line: 96,
              column: 10
            },
            end: {
              line: 96,
              column: 68
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 96,
              column: 10
            },
            end: {
              line: 96,
              column: 39
            }
          }, {
            start: {
              line: 96,
              column: 43
            },
            end: {
              line: 96,
              column: 68
            }
          }],
          line: 96
        },
        '12': {
          loc: {
            start: {
              line: 100,
              column: 8
            },
            end: {
              line: 102,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 100,
              column: 8
            },
            end: {
              line: 102,
              column: 9
            }
          }, {
            start: {
              line: 100,
              column: 8
            },
            end: {
              line: 102,
              column: 9
            }
          }],
          line: 100
        },
        '13': {
          loc: {
            start: {
              line: 107,
              column: 8
            },
            end: {
              line: 109,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 107,
              column: 8
            },
            end: {
              line: 109,
              column: 9
            }
          }, {
            start: {
              line: 107,
              column: 8
            },
            end: {
              line: 109,
              column: 9
            }
          }],
          line: 107
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$9 = (cov_3ebawyar2.s[0]++, videojs.getComponent('component'));
  var defaults$6 = (cov_3ebawyar2.s[1]++, {
    chipName: '',
    chipCaptions: '',
    offlineTime: '',
    offlineTimeFormat: ''
  });

  var ViuProcessInfo = /*#__PURE__*/function (_Component) {
    _inherits(ViuProcessInfo, _Component);

    var _super = _createSuper(ViuProcessInfo);

    function ViuProcessInfo(player, options) {
      var _this;

      _classCallCheck(this, ViuProcessInfo);

      cov_3ebawyar2.f[0]++;
      cov_3ebawyar2.s[2]++;
      _this = _super.call(this, player, options);
      cov_3ebawyar2.s[3]++;
      _this.options = videojs.mergeOptions(defaults$6, options);
      return _this;
    }

    _createClass(ViuProcessInfo, [{
      key: "createEl",
      value: function createEl() {
        cov_3ebawyar2.f[1]++;
        var root = (cov_3ebawyar2.s[4]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-process-info',
          dir: 'ltr'
        }));
        var episodeTitle = (cov_3ebawyar2.s[5]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: (cov_3ebawyar2.b[0][0]++, this.options_.chipName) || (cov_3ebawyar2.b[0][1]++, ''),
          className: 'vjs-viu-process-info-title',
          dir: 'ltr'
        }));
        var movieTitle = (cov_3ebawyar2.s[6]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: (cov_3ebawyar2.b[1][0]++, this.options_.chipName) || (cov_3ebawyar2.b[1][1]++, ''),
          className: 'vjs-viu-process-info-movieTitle',
          dir: 'ltr'
        }));
        var userLevel = (cov_3ebawyar2.s[7]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'img', {
          src: this.options_.pUrl,
          className: 'vjs-viu-process-info-userLevel',
          dir: 'ltr'
        }));
        var episodeDesc = (cov_3ebawyar2.s[8]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: "".concat(this.localize('episode_num'), " ").concat((cov_3ebawyar2.b[2][0]++, this.options_.chipCaptions) || (cov_3ebawyar2.b[2][1]++, '')),
          className: 'vjs-viu-process-info-desc',
          dir: 'ltr'
        }));
        var date = (cov_3ebawyar2.s[9]++, this.options_.offlineTime ? (cov_3ebawyar2.b[3][0]++, dayjs_min(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat)) : (cov_3ebawyar2.b[3][1]++, ''));
        var offlineTime = (cov_3ebawyar2.s[10]++, _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: "".concat(this.localize('off_shelf_date'), ": ").concat(date),
          className: 'vjs-viu-process-info-offlinetime',
          dir: 'ltr'
        }));
        cov_3ebawyar2.s[11]++;

        if (this.options_.isMovie === 1) {
          cov_3ebawyar2.b[4][0]++;
          cov_3ebawyar2.s[12]++;

          if ((cov_3ebawyar2.b[6][0]++, this.options_.userLevel === 3) && (cov_3ebawyar2.b[6][1]++, this.options_.showPremium)) {
            cov_3ebawyar2.b[5][0]++;
            cov_3ebawyar2.s[13]++;
            root.appendChild(userLevel);
            cov_3ebawyar2.s[14]++;
            root.appendChild(movieTitle);
            cov_3ebawyar2.s[15]++;

            if (this.options_.offlineTime) {
              cov_3ebawyar2.b[7][0]++;
              cov_3ebawyar2.s[16]++;
              root.appendChild(offlineTime);
            } else {
              cov_3ebawyar2.b[7][1]++;
            }
          } else {
            cov_3ebawyar2.b[5][1]++;
            cov_3ebawyar2.s[17]++;
            root.appendChild(episodeTitle);
            cov_3ebawyar2.s[18]++;

            if (this.options_.offlineTime) {
              cov_3ebawyar2.b[8][0]++;
              cov_3ebawyar2.s[19]++;
              root.appendChild(offlineTime);
            } else {
              cov_3ebawyar2.b[8][1]++;
            }
          }
        } else {
          cov_3ebawyar2.b[4][1]++;
          cov_3ebawyar2.s[20]++;

          if (this.options_.isMovie === 0) {
            cov_3ebawyar2.b[9][0]++;
            cov_3ebawyar2.s[21]++;

            if ((cov_3ebawyar2.b[11][0]++, this.options_.userLevel === 3) && (cov_3ebawyar2.b[11][1]++, this.options_.showPremium)) {
              cov_3ebawyar2.b[10][0]++;
              cov_3ebawyar2.s[22]++;
              root.appendChild(episodeTitle);
              cov_3ebawyar2.s[23]++;
              root.appendChild(userLevel);
              cov_3ebawyar2.s[24]++;
              root.appendChild(episodeDesc);
              cov_3ebawyar2.s[25]++;

              if (this.options_.offlineTime) {
                cov_3ebawyar2.b[12][0]++;
                cov_3ebawyar2.s[26]++;
                root.appendChild(offlineTime);
              } else {
                cov_3ebawyar2.b[12][1]++;
              }
            } else {
              cov_3ebawyar2.b[10][1]++;
              cov_3ebawyar2.s[27]++;
              root.appendChild(episodeTitle);
              cov_3ebawyar2.s[28]++;
              root.appendChild(episodeDesc);
              cov_3ebawyar2.s[29]++;

              if (this.options_.offlineTime) {
                cov_3ebawyar2.b[13][0]++;
                cov_3ebawyar2.s[30]++;
                root.appendChild(offlineTime);
              } else {
                cov_3ebawyar2.b[13][1]++;
              }
            }
          } else {
            cov_3ebawyar2.b[9][1]++;
          }
        }

        cov_3ebawyar2.s[31]++;
        return root;
      }
    }]);

    return ViuProcessInfo;
  }(Component$9);

  cov_3ebawyar2.s[32]++;
  videojs.registerComponent('viuProcessInfo', ViuProcessInfo);

  var cov_2ftkyw6f8w = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuControlBarBackground.js',
        hash = 'f314a21f1d4bfedc3c78cc944ea0c74b65975094',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuControlBarBackground.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 27
          }
        },
        '2': {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 15,
            column: 6
          }
        },
        '3': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 16
          }
        },
        '4': {
          start: {
            line: 21,
            column: 0
          },
          end: {
            line: 21,
            column: 78
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 6,
              column: 2
            },
            end: {
              line: 6,
              column: 3
            }
          },
          loc: {
            start: {
              line: 6,
              column: 31
            },
            end: {
              line: 9,
              column: 3
            }
          },
          line: 6
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 11,
              column: 2
            },
            end: {
              line: 11,
              column: 3
            }
          },
          loc: {
            start: {
              line: 11,
              column: 13
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 11
        }
      },
      branchMap: {},
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {},
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$a = (cov_2ftkyw6f8w.s[0]++, videojs.getComponent('component'));

  var viuControlBarBackground = /*#__PURE__*/function (_Component) {
    _inherits(viuControlBarBackground, _Component);

    var _super = _createSuper(viuControlBarBackground);

    function viuControlBarBackground(player, options) {
      _classCallCheck(this, viuControlBarBackground);

      cov_2ftkyw6f8w.f[0]++;
      cov_2ftkyw6f8w.s[1]++;
      return _super.call(this, player, options);
    }

    _createClass(viuControlBarBackground, [{
      key: "createEl",
      value: function createEl() {
        cov_2ftkyw6f8w.f[1]++;
        var root = (cov_2ftkyw6f8w.s[2]++, _get(_getPrototypeOf(viuControlBarBackground.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-controlbar-bg',
          dir: 'ltr'
        }));
        cov_2ftkyw6f8w.s[3]++;
        return root;
      }
    }]);

    return viuControlBarBackground;
  }(Component$a);

  cov_2ftkyw6f8w.s[4]++;
  videojs.registerComponent('viuControlBarBackground', viuControlBarBackground);

  var cov_1rhr6q9gfz = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/loadingTips.js',
        hash = 'db86ab14c7961590d11516654b243cef3713adcd',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/loadingTips.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 27
          }
        },
        '2': {
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 12,
            column: 84
          }
        },
        '3': {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 18,
            column: 7
          }
        },
        '4': {
          start: {
            line: 15,
            column: 6
          },
          end: {
            line: 17,
            column: 7
          }
        },
        '5': {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 16,
            column: 45
          }
        },
        '6': {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 22,
            column: 7
          }
        },
        '7': {
          start: {
            line: 20,
            column: 6
          },
          end: {
            line: 20,
            column: 30
          }
        },
        '8': {
          start: {
            line: 21,
            column: 6
          },
          end: {
            line: 21,
            column: 24
          }
        },
        '9': {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 26,
            column: 7
          }
        },
        '10': {
          start: {
            line: 24,
            column: 6
          },
          end: {
            line: 24,
            column: 30
          }
        },
        '11': {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 25,
            column: 24
          }
        },
        '12': {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 29,
            column: 7
          }
        },
        '13': {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 28,
            column: 24
          }
        },
        '14': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 35,
            column: 6
          }
        },
        '15': {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 55,
            column: 13
          }
        },
        '16': {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 32
          }
        },
        '17': {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 54,
            column: 7
          }
        },
        '18': {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 50,
            column: 44
          }
        },
        '19': {
          start: {
            line: 51,
            column: 13
          },
          end: {
            line: 54,
            column: 7
          }
        },
        '20': {
          start: {
            line: 52,
            column: 8
          },
          end: {
            line: 52,
            column: 26
          }
        },
        '21': {
          start: {
            line: 53,
            column: 8
          },
          end: {
            line: 53,
            column: 44
          }
        },
        '22': {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 58,
            column: 43
          }
        },
        '23': {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 59,
            column: 32
          }
        },
        '24': {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 60,
            column: 35
          }
        },
        '25': {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 38
          }
        },
        '26': {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 31
          }
        },
        '27': {
          start: {
            line: 66,
            column: 0
          },
          end: {
            line: 66,
            column: 54
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 10,
              column: 2
            },
            end: {
              line: 10,
              column: 3
            }
          },
          loc: {
            start: {
              line: 10,
              column: 31
            },
            end: {
              line: 36,
              column: 3
            }
          },
          line: 10
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 14,
              column: 25
            },
            end: {
              line: 14,
              column: 26
            }
          },
          loc: {
            start: {
              line: 14,
              column: 31
            },
            end: {
              line: 18,
              column: 5
            }
          },
          line: 14
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 19,
              column: 25
            },
            end: {
              line: 19,
              column: 26
            }
          },
          loc: {
            start: {
              line: 19,
              column: 31
            },
            end: {
              line: 22,
              column: 5
            }
          },
          line: 19
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 23,
              column: 25
            },
            end: {
              line: 23,
              column: 26
            }
          },
          loc: {
            start: {
              line: 23,
              column: 31
            },
            end: {
              line: 26,
              column: 5
            }
          },
          line: 23
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 27,
              column: 23
            },
            end: {
              line: 27,
              column: 24
            }
          },
          loc: {
            start: {
              line: 27,
              column: 29
            },
            end: {
              line: 29,
              column: 5
            }
          },
          line: 27
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 46,
              column: 2
            },
            end: {
              line: 46,
              column: 3
            }
          },
          loc: {
            start: {
              line: 46,
              column: 29
            },
            end: {
              line: 56,
              column: 3
            }
          },
          line: 46
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 47,
              column: 42
            },
            end: {
              line: 47,
              column: 43
            }
          },
          loc: {
            start: {
              line: 47,
              column: 48
            },
            end: {
              line: 55,
              column: 5
            }
          },
          line: 47
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 57,
              column: 2
            },
            end: {
              line: 57,
              column: 3
            }
          },
          loc: {
            start: {
              line: 57,
              column: 15
            },
            end: {
              line: 64,
              column: 3
            }
          },
          line: 57
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 12,
              column: 25
            },
            end: {
              line: 12,
              column: 84
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 12,
              column: 54
            },
            end: {
              line: 12,
              column: 80
            }
          }, {
            start: {
              line: 12,
              column: 83
            },
            end: {
              line: 12,
              column: 84
            }
          }],
          line: 12
        },
        '1': {
          loc: {
            start: {
              line: 15,
              column: 6
            },
            end: {
              line: 17,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 15,
              column: 6
            },
            end: {
              line: 17,
              column: 7
            }
          }, {
            start: {
              line: 15,
              column: 6
            },
            end: {
              line: 17,
              column: 7
            }
          }],
          line: 15
        },
        '2': {
          loc: {
            start: {
              line: 49,
              column: 6
            },
            end: {
              line: 54,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 49,
              column: 6
            },
            end: {
              line: 54,
              column: 7
            }
          }, {
            start: {
              line: 49,
              column: 6
            },
            end: {
              line: 54,
              column: 7
            }
          }],
          line: 49
        },
        '3': {
          loc: {
            start: {
              line: 51,
              column: 13
            },
            end: {
              line: 54,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 51,
              column: 13
            },
            end: {
              line: 54,
              column: 7
            }
          }, {
            start: {
              line: 51,
              column: 13
            },
            end: {
              line: 54,
              column: 7
            }
          }],
          line: 51
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$b = (cov_1rhr6q9gfz.s[0]++, videojs.getComponent('Component'));

  var LoadingTips = /*#__PURE__*/function (_Component) {
    _inherits(LoadingTips, _Component);

    var _super = _createSuper(LoadingTips);

    function LoadingTips(player, options) {
      var _this;

      _classCallCheck(this, LoadingTips);

      cov_1rhr6q9gfz.f[0]++;
      cov_1rhr6q9gfz.s[1]++;
      _this = _super.call(this, player, options);
      var timeoutCount = (cov_1rhr6q9gfz.s[2]++, options.videoBufferTimeout ? (cov_1rhr6q9gfz.b[0][0]++, options.videoBufferTimeout) : (cov_1rhr6q9gfz.b[0][1]++, 8));
      cov_1rhr6q9gfz.s[3]++;
      player.on('waiting', function () {
        cov_1rhr6q9gfz.f[1]++;
        cov_1rhr6q9gfz.s[4]++;

        if (!_this.state.loadingTimer) {
          cov_1rhr6q9gfz.b[1][0]++;
          cov_1rhr6q9gfz.s[5]++;

          _this.loadingTimerStart(timeoutCount);
        } else {
          cov_1rhr6q9gfz.b[1][1]++;
        }
      });
      cov_1rhr6q9gfz.s[6]++;
      player.on('playing', function () {
        cov_1rhr6q9gfz.f[2]++;
        cov_1rhr6q9gfz.s[7]++;

        _this.addClass('hidden');

        cov_1rhr6q9gfz.s[8]++;

        _this.clearTimer();
      });
      cov_1rhr6q9gfz.s[9]++;
      player.on('canplay', function () {
        cov_1rhr6q9gfz.f[3]++;
        cov_1rhr6q9gfz.s[10]++;

        _this.addClass('hidden');

        cov_1rhr6q9gfz.s[11]++;

        _this.clearTimer();
      });
      cov_1rhr6q9gfz.s[12]++;
      player.on('error', function () {
        cov_1rhr6q9gfz.f[4]++;
        cov_1rhr6q9gfz.s[13]++;

        _this.clearTimer();
      });
      cov_1rhr6q9gfz.s[14]++;
      _this.state = {
        loadingTimer: null,
        loadingCount: 0,
        triggerCount: 0,
        cdnTimer: null
      };
      return _this;
    }

    _createClass(LoadingTips, [{
      key: "loadingTimerStart",
      value: function loadingTimerStart(timeout) {
        var _this2 = this;

        cov_1rhr6q9gfz.f[5]++;
        cov_1rhr6q9gfz.s[15]++;
        this.state.loadingTimer = setInterval(function () {
          cov_1rhr6q9gfz.f[6]++;
          cov_1rhr6q9gfz.s[16]++;
          _this2.state.loadingCount++;
          cov_1rhr6q9gfz.s[17]++;

          if (_this2.state.loadingCount === timeout) {
            cov_1rhr6q9gfz.b[2][0]++;
            cov_1rhr6q9gfz.s[18]++;

            _this2.player_.trigger('weakNetwork');
          } else {
            cov_1rhr6q9gfz.b[2][1]++;
            cov_1rhr6q9gfz.s[19]++;

            if (_this2.state.loadingCount >= 60) {
              cov_1rhr6q9gfz.b[3][0]++;
              cov_1rhr6q9gfz.s[20]++;

              _this2.clearTimer();

              cov_1rhr6q9gfz.s[21]++;

              _this2.player_.trigger('loadTimeout');
            } else {
              cov_1rhr6q9gfz.b[3][1]++;
            }
          }
        }, 1000);
      }
    }, {
      key: "clearTimer",
      value: function clearTimer() {
        cov_1rhr6q9gfz.f[7]++;
        cov_1rhr6q9gfz.s[22]++;
        clearInterval(this.state.loadingTimer);
        cov_1rhr6q9gfz.s[23]++;
        this.state.loadingCount = 0;
        cov_1rhr6q9gfz.s[24]++;
        this.state.loadingTimer = null;
        cov_1rhr6q9gfz.s[25]++;
        clearTimeout(this.state.cdnTimer);
        cov_1rhr6q9gfz.s[26]++;
        this.state.cdnTimer = null;
      }
    }]);

    return LoadingTips;
  }(Component$b);

  cov_1rhr6q9gfz.s[27]++;
  videojs.registerComponent('LoadingTips', LoadingTips);

  var cov_1a4wum7n2g = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuFontsize.js',
        hash = '6edef338806fd03f76f56776ce3c334aa121a205',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuFontsize.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 45
          }
        },
        '1': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 27
          }
        },
        '2': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 29
          }
        },
        '3': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        },
        '4': {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 48
          }
        },
        '5': {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 104
          }
        },
        '6': {
          start: {
            line: 28,
            column: 67
          },
          end: {
            line: 28,
            column: 103
          }
        },
        '7': {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 9
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 44
          }
        },
        '9': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 71
          }
        },
        '10': {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 60
          }
        },
        '11': {
          start: {
            line: 45,
            column: 0
          },
          end: {
            line: 45,
            column: 63
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 23,
              column: 3
            }
          },
          loc: {
            start: {
              line: 23,
              column: 31
            },
            end: {
              line: 36,
              column: 3
            }
          },
          line: 23
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 26,
              column: 26
            },
            end: {
              line: 26,
              column: 27
            }
          },
          loc: {
            start: {
              line: 26,
              column: 32
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 26
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 57
            },
            end: {
              line: 28,
              column: 58
            }
          },
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 103
            }
          },
          line: 28
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 38,
              column: 2
            },
            end: {
              line: 38,
              column: 3
            }
          },
          loc: {
            start: {
              line: 38,
              column: 18
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 38
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          loc: {
            start: {
              line: 41,
              column: 16
            },
            end: {
              line: 43,
              column: 3
            }
          },
          line: 41
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 103
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 71
            }
          }, {
            start: {
              line: 28,
              column: 75
            },
            end: {
              line: 28,
              column: 103
            }
          }],
          line: 28
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      b: {
        '0': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button$4 = (cov_1a4wum7n2g.s[0]++, videojs.getComponent('Button'));

  var ViuFontSizeComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuFontSizeComponent, _Button);

    var _super = _createSuper(ViuFontSizeComponent);

    function ViuFontSizeComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizeComponent);

      cov_1a4wum7n2g.f[0]++;
      cov_1a4wum7n2g.s[1]++;
      _this = _super.call(this, player, options);
      cov_1a4wum7n2g.s[2]++;

      _this.controlText('Text');

      cov_1a4wum7n2g.s[3]++;

      _this.on('mouseenter', function () {
        cov_1a4wum7n2g.f[1]++;
        var ViuPlayer = (cov_1a4wum7n2g.s[4]++, _this.player_.ViuPlayer());
        var index = (cov_1a4wum7n2g.s[5]++, ViuPlayer.state.actionArea.findIndex(function (item) {
          cov_1a4wum7n2g.f[2]++;
          cov_1a4wum7n2g.s[6]++;
          return (cov_1a4wum7n2g.b[0][0]++, item) && (cov_1a4wum7n2g.b[0][1]++, item.name_ === 'ViuFontSize');
        }));
        cov_1a4wum7n2g.s[7]++;
        ViuPlayer.setState({
          isActionSelected: index
        });
        cov_1a4wum7n2g.s[8]++;
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuFontSizeComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_1a4wum7n2g.f[3]++;
        cov_1a4wum7n2g.s[9]++;
        return "vjs-font-size-button vjs-control ".concat(_get(_getPrototypeOf(ViuFontSizeComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_1a4wum7n2g.f[4]++;
        cov_1a4wum7n2g.s[10]++;
        this.player_.getChild('viuFontSizePanel').handleClick();
      }
    }]);

    return ViuFontSizeComponent;
  }(Button$4);

  cov_1a4wum7n2g.s[11]++;
  videojs.registerComponent('viuFontSize', ViuFontSizeComponent);

  var cov_rwo6mwfh4 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontsizeList.js',
        hash = 'b7252a2810dfe0132f91abbb72b1a1ea058e8268',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontsizeList.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 7,
            column: 1
          }
        },
        '3': {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 27
          }
        },
        '4': {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 59
          }
        },
        '5': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        },
        '6': {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 30
          }
        },
        '7': {
          start: {
            line: 32,
            column: 21
          },
          end: {
            line: 32,
            column: 41
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 27
          }
        },
        '9': {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 44,
            column: 7
          }
        },
        '10': {
          start: {
            line: 37,
            column: 17
          },
          end: {
            line: 37,
            column: 57
          }
        },
        '11': {
          start: {
            line: 38,
            column: 20
          },
          end: {
            line: 38,
            column: 83
          }
        },
        '12': {
          start: {
            line: 38,
            column: 63
          },
          end: {
            line: 38,
            column: 82
          }
        },
        '13': {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 42,
            column: 9
          }
        },
        '14': {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 39
          }
        },
        '15': {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 48,
            column: 6
          }
        },
        '16': {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 30
          }
        },
        '17': {
          start: {
            line: 52,
            column: 17
          },
          end: {
            line: 55,
            column: 6
          }
        },
        '18': {
          start: {
            line: 56,
            column: 21
          },
          end: {
            line: 56,
            column: 49
          }
        },
        '19': {
          start: {
            line: 58,
            column: 28
          },
          end: {
            line: 61,
            column: 6
          }
        },
        '20': {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 74,
            column: 7
          }
        },
        '21': {
          start: {
            line: 64,
            column: 24
          },
          end: {
            line: 70,
            column: 8
          }
        },
        '22': {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 34
          }
        },
        '23': {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 45
          }
        },
        '24': {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 38
          }
        },
        '25': {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 16
          }
        },
        '26': {
          start: {
            line: 80,
            column: 26
          },
          end: {
            line: 82,
            column: 6
          }
        },
        '27': {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 59
          }
        },
        '28': {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 86,
            column: 7
          }
        },
        '29': {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 29
          }
        },
        '30': {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 93,
            column: 30
          }
        },
        '31': {
          start: {
            line: 97,
            column: 17
          },
          end: {
            line: 97,
            column: 38
          }
        },
        '32': {
          start: {
            line: 99,
            column: 19
          },
          end: {
            line: 99,
            column: 46
          }
        },
        '33': {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 101,
            column: 45
          }
        },
        '34': {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 104,
            column: 7
          }
        },
        '35': {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 105,
            column: 38
          }
        },
        '36': {
          start: {
            line: 108,
            column: 17
          },
          end: {
            line: 108,
            column: 38
          }
        },
        '37': {
          start: {
            line: 109,
            column: 18
          },
          end: {
            line: 109,
            column: 60
          }
        },
        '38': {
          start: {
            line: 110,
            column: 21
          },
          end: {
            line: 110,
            column: 61
          }
        },
        '39': {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 114,
            column: 7
          }
        },
        '40': {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 40
          }
        },
        '41': {
          start: {
            line: 124,
            column: 18
          },
          end: {
            line: 124,
            column: 57
          }
        },
        '42': {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        '43': {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        },
        '44': {
          start: {
            line: 128,
            column: 8
          },
          end: {
            line: 130,
            column: 9
          }
        },
        '45': {
          start: {
            line: 129,
            column: 10
          },
          end: {
            line: 129,
            column: 46
          }
        },
        '46': {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 134,
            column: 7
          }
        },
        '47': {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 133,
            column: 44
          }
        },
        '48': {
          start: {
            line: 144,
            column: 4
          },
          end: {
            line: 144,
            column: 25
          }
        },
        '49': {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        '50': {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 146,
            column: 48
          }
        },
        '51': {
          start: {
            line: 148,
            column: 18
          },
          end: {
            line: 148,
            column: 81
          }
        },
        '52': {
          start: {
            line: 148,
            column: 61
          },
          end: {
            line: 148,
            column: 80
          }
        },
        '53': {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 152,
            column: 7
          }
        },
        '54': {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 37
          }
        },
        '55': {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 154,
            column: 74
          }
        },
        '56': {
          start: {
            line: 157,
            column: 21
          },
          end: {
            line: 157,
            column: 42
          }
        },
        '57': {
          start: {
            line: 159,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        '58': {
          start: {
            line: 160,
            column: 17
          },
          end: {
            line: 160,
            column: 49
          }
        },
        '59': {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 162,
            column: 27
          }
        },
        '60': {
          start: {
            line: 167,
            column: 22
          },
          end: {
            line: 167,
            column: 49
          }
        },
        '61': {
          start: {
            line: 169,
            column: 4
          },
          end: {
            line: 173,
            column: 7
          }
        },
        '62': {
          start: {
            line: 170,
            column: 6
          },
          end: {
            line: 172,
            column: 7
          }
        },
        '63': {
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 171,
            column: 55
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 26,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          loc: {
            start: {
              line: 26,
              column: 31
            },
            end: {
              line: 50,
              column: 3
            }
          },
          line: 26
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 30,
              column: 21
            },
            end: {
              line: 30,
              column: 22
            }
          },
          loc: {
            start: {
              line: 30,
              column: 32
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 30
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 36,
              column: 25
            },
            end: {
              line: 36,
              column: 26
            }
          },
          loc: {
            start: {
              line: 36,
              column: 36
            },
            end: {
              line: 44,
              column: 5
            }
          },
          line: 36
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 38,
              column: 53
            },
            end: {
              line: 38,
              column: 54
            }
          },
          loc: {
            start: {
              line: 38,
              column: 63
            },
            end: {
              line: 38,
              column: 82
            }
          },
          line: 38
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 51,
              column: 2
            },
            end: {
              line: 51,
              column: 3
            }
          },
          loc: {
            start: {
              line: 51,
              column: 13
            },
            end: {
              line: 77,
              column: 3
            }
          },
          line: 51
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 63,
              column: 17
            },
            end: {
              line: 63,
              column: 18
            }
          },
          loc: {
            start: {
              line: 63,
              column: 27
            },
            end: {
              line: 74,
              column: 5
            }
          },
          line: 63
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 79,
              column: 2
            },
            end: {
              line: 79,
              column: 3
            }
          },
          loc: {
            start: {
              line: 79,
              column: 23
            },
            end: {
              line: 87,
              column: 3
            }
          },
          line: 79
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 80,
              column: 58
            },
            end: {
              line: 80,
              column: 59
            }
          },
          loc: {
            start: {
              line: 80,
              column: 68
            },
            end: {
              line: 82,
              column: 5
            }
          },
          line: 80
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 89,
              column: 2
            },
            end: {
              line: 89,
              column: 3
            }
          },
          loc: {
            start: {
              line: 89,
              column: 22
            },
            end: {
              line: 91,
              column: 3
            }
          },
          line: 89
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 92,
              column: 2
            },
            end: {
              line: 92,
              column: 3
            }
          },
          loc: {
            start: {
              line: 92,
              column: 23
            },
            end: {
              line: 94,
              column: 3
            }
          },
          line: 92
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 96,
              column: 2
            },
            end: {
              line: 96,
              column: 3
            }
          },
          loc: {
            start: {
              line: 96,
              column: 22
            },
            end: {
              line: 106,
              column: 3
            }
          },
          line: 96
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 107,
              column: 2
            },
            end: {
              line: 107,
              column: 3
            }
          },
          loc: {
            start: {
              line: 107,
              column: 23
            },
            end: {
              line: 116,
              column: 3
            }
          },
          line: 107
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 123,
              column: 2
            },
            end: {
              line: 123,
              column: 3
            }
          },
          loc: {
            start: {
              line: 123,
              column: 29
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 123
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 143,
              column: 2
            },
            end: {
              line: 143,
              column: 3
            }
          },
          loc: {
            start: {
              line: 143,
              column: 18
            },
            end: {
              line: 155,
              column: 3
            }
          },
          line: 143
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 148,
              column: 51
            },
            end: {
              line: 148,
              column: 52
            }
          },
          loc: {
            start: {
              line: 148,
              column: 61
            },
            end: {
              line: 148,
              column: 80
            }
          },
          line: 148
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 156,
              column: 2
            },
            end: {
              line: 156,
              column: 3
            }
          },
          loc: {
            start: {
              line: 156,
              column: 12
            },
            end: {
              line: 164,
              column: 3
            }
          },
          line: 156
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 165,
              column: 2
            },
            end: {
              line: 165,
              column: 3
            }
          },
          loc: {
            start: {
              line: 165,
              column: 20
            },
            end: {
              line: 165,
              column: 22
            }
          },
          line: 165
        },
        '17': {
          name: '(anonymous_17)',
          decl: {
            start: {
              line: 166,
              column: 2
            },
            end: {
              line: 166,
              column: 3
            }
          },
          loc: {
            start: {
              line: 166,
              column: 18
            },
            end: {
              line: 174,
              column: 3
            }
          },
          line: 166
        },
        '18': {
          name: '(anonymous_18)',
          decl: {
            start: {
              line: 169,
              column: 22
            },
            end: {
              line: 169,
              column: 23
            }
          },
          loc: {
            start: {
              line: 169,
              column: 32
            },
            end: {
              line: 173,
              column: 5
            }
          },
          line: 169
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 38,
              column: 63
            },
            end: {
              line: 38,
              column: 82
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 38,
              column: 63
            },
            end: {
              line: 38,
              column: 67
            }
          }, {
            start: {
              line: 38,
              column: 71
            },
            end: {
              line: 38,
              column: 82
            }
          }],
          line: 38
        },
        '1': {
          loc: {
            start: {
              line: 56,
              column: 21
            },
            end: {
              line: 56,
              column: 49
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 56,
              column: 21
            },
            end: {
              line: 56,
              column: 43
            }
          }, {
            start: {
              line: 56,
              column: 47
            },
            end: {
              line: 56,
              column: 49
            }
          }],
          line: 56
        },
        '2': {
          loc: {
            start: {
              line: 67,
              column: 10
            },
            end: {
              line: 67,
              column: 67
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 67,
              column: 51
            },
            end: {
              line: 67,
              column: 62
            }
          }, {
            start: {
              line: 67,
              column: 65
            },
            end: {
              line: 67,
              column: 67
            }
          }],
          line: 67
        },
        '3': {
          loc: {
            start: {
              line: 81,
              column: 13
            },
            end: {
              line: 81,
              column: 58
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 81,
              column: 13
            },
            end: {
              line: 81,
              column: 17
            }
          }, {
            start: {
              line: 81,
              column: 21
            },
            end: {
              line: 81,
              column: 58
            }
          }],
          line: 81
        },
        '4': {
          loc: {
            start: {
              line: 85,
              column: 18
            },
            end: {
              line: 85,
              column: 36
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 85,
              column: 18
            },
            end: {
              line: 85,
              column: 31
            }
          }, {
            start: {
              line: 85,
              column: 35
            },
            end: {
              line: 85,
              column: 36
            }
          }],
          line: 85
        },
        '5': {
          loc: {
            start: {
              line: 99,
              column: 19
            },
            end: {
              line: 99,
              column: 46
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 99,
              column: 34
            },
            end: {
              line: 99,
              column: 35
            }
          }, {
            start: {
              line: 99,
              column: 38
            },
            end: {
              line: 99,
              column: 46
            }
          }],
          line: 99
        },
        '6': {
          loc: {
            start: {
              line: 110,
              column: 21
            },
            end: {
              line: 110,
              column: 61
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 110,
              column: 41
            },
            end: {
              line: 110,
              column: 50
            }
          }, {
            start: {
              line: 110,
              column: 53
            },
            end: {
              line: 110,
              column: 61
            }
          }],
          line: 110
        },
        '7': {
          loc: {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          }, {
            start: {
              line: 126,
              column: 4
            },
            end: {
              line: 135,
              column: 5
            }
          }],
          line: 126
        },
        '8': {
          loc: {
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 130,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 130,
              column: 9
            }
          }, {
            start: {
              line: 128,
              column: 8
            },
            end: {
              line: 130,
              column: 9
            }
          }],
          line: 128
        },
        '9': {
          loc: {
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          }, {
            start: {
              line: 132,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          }],
          line: 132
        },
        '10': {
          loc: {
            start: {
              line: 145,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 145,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }, {
            start: {
              line: 145,
              column: 4
            },
            end: {
              line: 147,
              column: 5
            }
          }],
          line: 145
        },
        '11': {
          loc: {
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 145,
              column: 66
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 145,
              column: 8
            },
            end: {
              line: 145,
              column: 20
            }
          }, {
            start: {
              line: 145,
              column: 24
            },
            end: {
              line: 145,
              column: 66
            }
          }],
          line: 145
        },
        '12': {
          loc: {
            start: {
              line: 148,
              column: 61
            },
            end: {
              line: 148,
              column: 80
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 148,
              column: 61
            },
            end: {
              line: 148,
              column: 65
            }
          }, {
            start: {
              line: 148,
              column: 69
            },
            end: {
              line: 148,
              column: 80
            }
          }],
          line: 148
        },
        '13': {
          loc: {
            start: {
              line: 159,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 159,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }, {
            start: {
              line: 159,
              column: 4
            },
            end: {
              line: 163,
              column: 5
            }
          }],
          line: 159
        },
        '14': {
          loc: {
            start: {
              line: 167,
              column: 22
            },
            end: {
              line: 167,
              column: 49
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 167,
              column: 22
            },
            end: {
              line: 167,
              column: 43
            }
          }, {
            start: {
              line: 167,
              column: 47
            },
            end: {
              line: 167,
              column: 49
            }
          }],
          line: 167
        },
        '15': {
          loc: {
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          }, {
            start: {
              line: 170,
              column: 6
            },
            end: {
              line: 172,
              column: 7
            }
          }],
          line: 170
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0],
        '14': [0, 0],
        '15': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$c = (cov_rwo6mwfh4.s[0]++, videojs.getComponent('Component'));
  var dom$6 = (cov_rwo6mwfh4.s[1]++, videojs.dom);
  var defaults$7 = (cov_rwo6mwfh4.s[2]++, {
    title: ''
  });

  var ViuFontSizeList = /*#__PURE__*/function (_Component) {
    _inherits(ViuFontSizeList, _Component);

    var _super = _createSuper(ViuFontSizeList);

    function ViuFontSizeList(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizeList);

      cov_rwo6mwfh4.f[0]++;
      cov_rwo6mwfh4.s[3]++;
      _this = _super.call(this, player, options);
      cov_rwo6mwfh4.s[4]++;
      _this.options = videojs.mergeOptions(defaults$7, options);
      cov_rwo6mwfh4.s[5]++;

      _this.on('click', function (event) {
        cov_rwo6mwfh4.f[1]++;
        cov_rwo6mwfh4.s[6]++;
        event.stopPropagation();

        var _ref = (cov_rwo6mwfh4.s[7]++, event.target.dataset),
            id = _ref.id;

        cov_rwo6mwfh4.s[8]++;

        _this.handleClick(id);
      });

      cov_rwo6mwfh4.s[9]++;

      _this.on('mouseover', function (event) {
        cov_rwo6mwfh4.f[2]++;
        var id = (cov_rwo6mwfh4.s[10]++, event.target.attributes['data-id'].value);
        var index = (cov_rwo6mwfh4.s[11]++, _this.options_.fontSize.findIndex(function (item) {
          cov_rwo6mwfh4.f[3]++;
          cov_rwo6mwfh4.s[12]++;
          return (cov_rwo6mwfh4.b[0][0]++, item) && (cov_rwo6mwfh4.b[0][1]++, item === id);
        }));
        cov_rwo6mwfh4.s[13]++;

        _this.setState({
          isSelected: index
        });

        cov_rwo6mwfh4.s[14]++;

        _this.setComponentSelected(index);
      });

      cov_rwo6mwfh4.s[15]++;
      _this.state = {
        isSelected: 0
      };
      cov_rwo6mwfh4.s[16]++;

      _this.setDefaultSelected();

      return _this;
    }

    _createClass(ViuFontSizeList, [{
      key: "createEl",
      value: function createEl() {
        var _this2 = this;

        cov_rwo6mwfh4.f[4]++;
        var root = (cov_rwo6mwfh4.s[17]++, _get(_getPrototypeOf(ViuFontSizeList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-list-items',
          dir: 'ltr'
        }));
        var fontList = (cov_rwo6mwfh4.s[18]++, (cov_rwo6mwfh4.b[1][0]++, this.options_.fontSize) || (cov_rwo6mwfh4.b[1][1]++, []));
        var fontSizeWrapper = (cov_rwo6mwfh4.s[19]++, _get(_getPrototypeOf(ViuFontSizeList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        }));
        cov_rwo6mwfh4.s[20]++;
        fontList.map(function (item) {
          cov_rwo6mwfh4.f[5]++;
          var sigleItem = (cov_rwo6mwfh4.s[21]++, dom$6.createEl('li', {
            textContent: _this2.localize("fontsize_".concat(item)),
            className: "vjs-viu-player-list-item vjs-viu-player-fontsize-item ".concat(_this2.options_.defaultFontSize === item ? (cov_rwo6mwfh4.b[2][0]++, 'fs-active') : (cov_rwo6mwfh4.b[2][1]++, ''), " ").concat(_get(_getPrototypeOf(ViuFontSizeList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          }));
          cov_rwo6mwfh4.s[22]++;
          sigleItem.dataset.id = item;
          cov_rwo6mwfh4.s[23]++;
          fontSizeWrapper.appendChild(sigleItem);
        });
        cov_rwo6mwfh4.s[24]++;
        root.appendChild(fontSizeWrapper);
        cov_rwo6mwfh4.s[25]++;
        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        var _this3 = this;

        cov_rwo6mwfh4.f[6]++;
        var selectedIndex = (cov_rwo6mwfh4.s[26]++, this.options.fontSize.findIndex(function (item) {
          cov_rwo6mwfh4.f[7]++;
          cov_rwo6mwfh4.s[27]++;
          return (cov_rwo6mwfh4.b[3][0]++, item) && (cov_rwo6mwfh4.b[3][1]++, item === _this3.options.defaultFontSize);
        }));
        cov_rwo6mwfh4.s[28]++;
        this.setState({
          isSelected: (cov_rwo6mwfh4.b[4][0]++, selectedIndex) || (cov_rwo6mwfh4.b[4][1]++, 0)
        });
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        cov_rwo6mwfh4.f[8]++;
        cov_rwo6mwfh4.s[29]++;
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        cov_rwo6mwfh4.f[9]++;
        cov_rwo6mwfh4.s[30]++;
        this.selectedDownerStep();
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        cov_rwo6mwfh4.f[10]++;
        var step = (cov_rwo6mwfh4.s[31]++, this.state.isSelected);
        var upStep = (cov_rwo6mwfh4.s[32]++, step - 1 < 0 ? (cov_rwo6mwfh4.b[5][0]++, 0) : (cov_rwo6mwfh4.b[5][1]++, step - 1));
        cov_rwo6mwfh4.s[33]++;
        videojs.log('selectedUpperStep', upStep);
        cov_rwo6mwfh4.s[34]++;
        this.setState({
          isSelected: upStep
        });
        cov_rwo6mwfh4.s[35]++;
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        cov_rwo6mwfh4.f[11]++;
        var step = (cov_rwo6mwfh4.s[36]++, this.state.isSelected);
        var total = (cov_rwo6mwfh4.s[37]++, parseInt(this.options.fontSize.length, 10));
        var downStep = (cov_rwo6mwfh4.s[38]++, step + 1 >= total ? (cov_rwo6mwfh4.b[6][0]++, total - 1) : (cov_rwo6mwfh4.b[6][1]++, step + 1));
        cov_rwo6mwfh4.s[39]++;
        this.setState({
          isSelected: downStep
        });
        cov_rwo6mwfh4.s[40]++;
        this.setComponentSelected(downStep);
      }
    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        cov_rwo6mwfh4.f[12]++;
        var items = (cov_rwo6mwfh4.s[41]++, dom$6.$$('.vjs-viu-player-fontsize-item'));
        cov_rwo6mwfh4.s[42]++;

        if (items) {
          cov_rwo6mwfh4.b[7][0]++;
          cov_rwo6mwfh4.s[43]++;

          for (var i = 0; i < items.length; i++) {
            cov_rwo6mwfh4.s[44]++;

            if (dom$6.hasClass(items[i], 'active')) {
              cov_rwo6mwfh4.b[8][0]++;
              cov_rwo6mwfh4.s[45]++;
              dom$6.removeClass(items[i], 'active');
            } else {
              cov_rwo6mwfh4.b[8][1]++;
            }
          }

          cov_rwo6mwfh4.s[46]++;

          if (items[step]) {
            cov_rwo6mwfh4.b[9][0]++;
            cov_rwo6mwfh4.s[47]++;
            dom$6.addClass(items[step], 'active');
          } else {
            cov_rwo6mwfh4.b[9][1]++;
          }
        } else {
          cov_rwo6mwfh4.b[7][1]++;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick(id) {
        cov_rwo6mwfh4.f[13]++;
        cov_rwo6mwfh4.s[48]++;
        this.clearAllClass();
        cov_rwo6mwfh4.s[49]++;

        if ((cov_rwo6mwfh4.b[11][0]++, this.player_) && (cov_rwo6mwfh4.b[11][1]++, !this.player_.hasClass("v-fontsize-".concat(id)))) {
          cov_rwo6mwfh4.b[10][0]++;
          cov_rwo6mwfh4.s[50]++;
          this.player_.addClass("v-fontsize-".concat(id));
        } else {
          cov_rwo6mwfh4.b[10][1]++;
        }

        var index = (cov_rwo6mwfh4.s[51]++, this.options_.fontSize.findIndex(function (item) {
          cov_rwo6mwfh4.f[14]++;
          cov_rwo6mwfh4.s[52]++;
          return (cov_rwo6mwfh4.b[12][0]++, item) && (cov_rwo6mwfh4.b[12][1]++, item === id);
        }));
        cov_rwo6mwfh4.s[53]++;
        this.setState({
          isSelected: index
        });
        cov_rwo6mwfh4.s[54]++;
        this.setComponentSelected(index);
        cov_rwo6mwfh4.s[55]++;
        this.player_.getChild('ViuPlayerComponent').viuFontSize.handleClick();
      }
    }, {
      key: "confirm",
      value: function confirm() {
        cov_rwo6mwfh4.f[15]++;
        var selected = (cov_rwo6mwfh4.s[56]++, this.state.isSelected);
        cov_rwo6mwfh4.s[57]++;

        if (this.options_.fontSize[selected]) {
          cov_rwo6mwfh4.b[13][0]++;
          var id = (cov_rwo6mwfh4.s[58]++, this.options_.fontSize[selected]);
          cov_rwo6mwfh4.s[59]++;
          this.handleClick(id);
        } else {
          cov_rwo6mwfh4.b[13][1]++;
        }
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(id) {
        cov_rwo6mwfh4.f[16]++;
      }
    }, {
      key: "clearAllClass",
      value: function clearAllClass() {
        var _this4 = this;

        cov_rwo6mwfh4.f[17]++;
        var classList = (cov_rwo6mwfh4.s[60]++, (cov_rwo6mwfh4.b[14][0]++, this.options.fontSize) || (cov_rwo6mwfh4.b[14][1]++, []));
        cov_rwo6mwfh4.s[61]++;
        classList.forEach(function (item) {
          cov_rwo6mwfh4.f[18]++;
          cov_rwo6mwfh4.s[62]++;

          if (_this4.player_.hasClass("v-fontsize-".concat(item))) {
            cov_rwo6mwfh4.b[15][0]++;
            cov_rwo6mwfh4.s[63]++;

            _this4.player_.removeClass("v-fontsize-".concat(item));
          } else {
            cov_rwo6mwfh4.b[15][1]++;
          }
        });
      }
    }]);

    return ViuFontSizeList;
  }(Component$c);

  var cov_2p104l33cr = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontsizeTitle.js',
        hash = '820cb547d27c702cb93ee936c581c2eadc5867f9',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontsizeTitle.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 8,
            column: 1
          }
        },
        '3': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 27
          }
        },
        '4': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 59
          }
        },
        '5': {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 24,
            column: 6
          }
        },
        '6': {
          start: {
            line: 25,
            column: 17
          },
          end: {
            line: 30,
            column: 6
          }
        },
        '7': {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 27
          }
        },
        '8': {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 16
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 15,
              column: 2
            },
            end: {
              line: 15,
              column: 3
            }
          },
          loc: {
            start: {
              line: 15,
              column: 31
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 15
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 3
            }
          },
          loc: {
            start: {
              line: 19,
              column: 13
            },
            end: {
              line: 34,
              column: 3
            }
          },
          line: 19
        }
      },
      branchMap: {},
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      f: {
        '0': 0,
        '1': 0
      },
      b: {},
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$d = (cov_2p104l33cr.s[0]++, videojs.getComponent('component'));
  var dom$7 = (cov_2p104l33cr.s[1]++, videojs.dom);
  var defaults$8 = (cov_2p104l33cr.s[2]++, {
    title: ''
  });

  var SizeTitle = /*#__PURE__*/function (_Component) {
    _inherits(SizeTitle, _Component);

    var _super = _createSuper(SizeTitle);

    function SizeTitle(player, options) {
      var _this;

      _classCallCheck(this, SizeTitle);

      cov_2p104l33cr.f[0]++;
      cov_2p104l33cr.s[3]++;
      _this = _super.call(this, player, options);
      cov_2p104l33cr.s[4]++;
      _this.options = videojs.mergeOptions(defaults$8, options);
      return _this;
    }

    _createClass(SizeTitle, [{
      key: "createEl",
      value: function createEl() {
        cov_2p104l33cr.f[1]++;
        var root = (cov_2p104l33cr.s[5]++, _get(_getPrototypeOf(SizeTitle.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-list-title vjs-viu-player-size-title-span',
          dir: 'ltr'
        }));
        var text = (cov_2p104l33cr.s[6]++, dom$7.createEl('span', {
          textContent: '字幕大小',
          dir: 'ltr'
        }));
        cov_2p104l33cr.s[7]++;
        root.appendChild(text);
        cov_2p104l33cr.s[8]++;
        return root;
      }
    }]);

    return SizeTitle;
  }(Component$d);

  var cov_1e6p4ej923 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontSizePanel.js',
        hash = '12caae71ab3a2fcc8cb5c647534e25f71bafd760',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/fontSizePanel/viuFontSizePanel.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 27
          }
        },
        '2': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 47
          }
        },
        '3': {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 46
          }
        },
        '4': {
          start: {
            line: 20,
            column: 17
          },
          end: {
            line: 23,
            column: 6
          }
        },
        '5': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 16
          }
        },
        '6': {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 27
          }
        },
        '7': {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 56
          }
        },
        '8': {
          start: {
            line: 35,
            column: 17
          },
          end: {
            line: 38,
            column: 6
          }
        },
        '9': {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 16
          }
        },
        '10': {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 43,
            column: 30
          }
        },
        '11': {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 29
          }
        },
        '12': {
          start: {
            line: 50,
            column: 20
          },
          end: {
            line: 50,
            column: 50
          }
        },
        '13': {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 54,
            column: 5
          }
        },
        '14': {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 53,
            column: 50
          }
        },
        '15': {
          start: {
            line: 58,
            column: 20
          },
          end: {
            line: 58,
            column: 50
          }
        },
        '16': {
          start: {
            line: 60,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        '17': {
          start: {
            line: 61,
            column: 6
          },
          end: {
            line: 61,
            column: 50
          }
        },
        '18': {
          start: {
            line: 67,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        '19': {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 30
          }
        },
        '20': {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 69,
            column: 76
          }
        },
        '21': {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 70,
            column: 56
          }
        },
        '22': {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 33
          }
        },
        '23': {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 73,
            column: 50
          }
        },
        '24': {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 59
          }
        },
        '25': {
          start: {
            line: 79,
            column: 0
          },
          end: {
            line: 79,
            column: 64
          }
        },
        '26': {
          start: {
            line: 80,
            column: 0
          },
          end: {
            line: 83,
            column: 2
          }
        },
        '27': {
          start: {
            line: 85,
            column: 0
          },
          end: {
            line: 85,
            column: 64
          }
        },
        '28': {
          start: {
            line: 86,
            column: 0
          },
          end: {
            line: 86,
            column: 62
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 14,
              column: 2
            },
            end: {
              line: 14,
              column: 3
            }
          },
          loc: {
            start: {
              line: 14,
              column: 31
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 14
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 19,
              column: 2
            },
            end: {
              line: 19,
              column: 3
            }
          },
          loc: {
            start: {
              line: 19,
              column: 13
            },
            end: {
              line: 26,
              column: 3
            }
          },
          line: 19
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 30,
              column: 2
            },
            end: {
              line: 30,
              column: 3
            }
          },
          loc: {
            start: {
              line: 30,
              column: 31
            },
            end: {
              line: 33,
              column: 3
            }
          },
          line: 30
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 34,
              column: 2
            },
            end: {
              line: 34,
              column: 3
            }
          },
          loc: {
            start: {
              line: 34,
              column: 13
            },
            end: {
              line: 41,
              column: 3
            }
          },
          line: 34
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 42,
              column: 2
            },
            end: {
              line: 42,
              column: 3
            }
          },
          loc: {
            start: {
              line: 42,
              column: 14
            },
            end: {
              line: 44,
              column: 3
            }
          },
          line: 42
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 45,
              column: 2
            },
            end: {
              line: 45,
              column: 3
            }
          },
          loc: {
            start: {
              line: 45,
              column: 13
            },
            end: {
              line: 47,
              column: 3
            }
          },
          line: 45
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 49,
              column: 2
            },
            end: {
              line: 49,
              column: 3
            }
          },
          loc: {
            start: {
              line: 49,
              column: 22
            },
            end: {
              line: 55,
              column: 3
            }
          },
          line: 49
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 57,
              column: 2
            },
            end: {
              line: 57,
              column: 3
            }
          },
          loc: {
            start: {
              line: 57,
              column: 23
            },
            end: {
              line: 63,
              column: 3
            }
          },
          line: 57
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 65,
              column: 2
            },
            end: {
              line: 65,
              column: 3
            }
          },
          loc: {
            start: {
              line: 65,
              column: 16
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 65
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 54,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 54,
              column: 5
            }
          }, {
            start: {
              line: 52,
              column: 4
            },
            end: {
              line: 54,
              column: 5
            }
          }],
          line: 52
        },
        '1': {
          loc: {
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 62,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 62,
              column: 5
            }
          }, {
            start: {
              line: 60,
              column: 4
            },
            end: {
              line: 62,
              column: 5
            }
          }],
          line: 60
        },
        '2': {
          loc: {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          }, {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          }],
          line: 67
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$e = (cov_1e6p4ej923.s[0]++, videojs.getComponent('component'));

  var ViuFontSizePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuFontSizePanelContainer, _Component);

    var _super = _createSuper(ViuFontSizePanelContainer);

    function ViuFontSizePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizePanelContainer);

      cov_1e6p4ej923.f[0]++;
      cov_1e6p4ej923.s[1]++;
      _this = _super.call(this, player, options);
      cov_1e6p4ej923.s[2]++;

      _this.addChild('viuFontSizeTitle', options);

      cov_1e6p4ej923.s[3]++;

      _this.addChild('viuFontSizeList', options);

      return _this;
    }

    _createClass(ViuFontSizePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        cov_1e6p4ej923.f[1]++;
        var root = (cov_1e6p4ej923.s[4]++, _get(_getPrototypeOf(ViuFontSizePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-fontsize-drawer-container',
          dir: 'ltr'
        }));
        cov_1e6p4ej923.s[5]++;
        return root;
      }
    }]);

    return ViuFontSizePanelContainer;
  }(Component$e);

  var ViuFontSizePanel = /*#__PURE__*/function (_Component2) {
    _inherits(ViuFontSizePanel, _Component2);

    var _super2 = _createSuper(ViuFontSizePanel);

    function ViuFontSizePanel(player, options) {
      var _this2;

      _classCallCheck(this, ViuFontSizePanel);

      cov_1e6p4ej923.f[2]++;
      cov_1e6p4ej923.s[6]++;
      _this2 = _super2.call(this, player, options);
      cov_1e6p4ej923.s[7]++;

      _this2.addChild('viuFontSizePanelContainer', options);

      return _this2;
    }

    _createClass(ViuFontSizePanel, [{
      key: "createEl",
      value: function createEl() {
        cov_1e6p4ej923.f[3]++;
        var root = (cov_1e6p4ej923.s[8]++, _get(_getPrototypeOf(ViuFontSizePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-fontsize-drawer',
          dir: 'ltr'
        }));
        cov_1e6p4ej923.s[9]++;
        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        cov_1e6p4ej923.f[4]++;
        cov_1e6p4ej923.s[10]++;
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        cov_1e6p4ej923.f[5]++;
        cov_1e6p4ej923.s[11]++;
        this.containerDownStep();
      }
    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        cov_1e6p4ej923.f[6]++;
        var content = (cov_1e6p4ej923.s[12]++, this.eventBusEl_.childNodes[0]);
        cov_1e6p4ej923.s[13]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_1e6p4ej923.b[0][0]++;
          cov_1e6p4ej923.s[14]++;
          content.scrollTop = content.scrollTop + 300;
        } else {
          cov_1e6p4ej923.b[0][1]++;
        }
      }
    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        cov_1e6p4ej923.f[7]++;
        var content = (cov_1e6p4ej923.s[15]++, this.eventBusEl_.childNodes[0]);
        cov_1e6p4ej923.s[16]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_1e6p4ej923.b[1][0]++;
          cov_1e6p4ej923.s[17]++;
          content.scrollTop = content.scrollTop - 300;
        } else {
          cov_1e6p4ej923.b[1][1]++;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_1e6p4ej923.f[8]++;
        cov_1e6p4ej923.s[18]++;

        if (!this.hasClass('active')) {
          cov_1e6p4ej923.b[2][0]++;
          cov_1e6p4ej923.s[19]++;
          this.addClass('active');
          cov_1e6p4ej923.s[20]++;
          this.player_.ViuPlayer().setUniquePanelOpen('isFontSizeAreaSelected');
          cov_1e6p4ej923.s[21]++;
          this.player_.addClass('vjs-fontsize-drawer-open');
        } else {
          cov_1e6p4ej923.b[2][1]++;
          cov_1e6p4ej923.s[22]++;
          this.removeClass('active');
          cov_1e6p4ej923.s[23]++;
          this.player_.ViuPlayer().setAllPanelClose();
          cov_1e6p4ej923.s[24]++;
          this.player_.removeClass('vjs-fontsize-drawer-open');
        }
      }
    }]);

    return ViuFontSizePanel;
  }(Component$e);

  cov_1e6p4ej923.s[25]++;
  videojs.registerComponent('viuFontSizePanel', ViuFontSizePanel);
  cov_1e6p4ej923.s[26]++;
  videojs.registerComponent('viuFontSizePanelContainer', ViuFontSizePanelContainer);
  cov_1e6p4ej923.s[27]++;
  videojs.registerComponent('viuFontSizeTitle', SizeTitle);
  cov_1e6p4ej923.s[28]++;
  videojs.registerComponent('viuFontSizeList', ViuFontSizeList);

  var cov_el0cyyq9m = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/viuAdvance.js',
        hash = '2abb9b4a641a27ca1acb17ab7ad2e26592075e07',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/viuAdvance.js',
      statementMap: {
        '0': {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 45
          }
        },
        '1': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 27
          }
        },
        '2': {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 29
          }
        },
        '3': {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 35,
            column: 7
          }
        },
        '4': {
          start: {
            line: 27,
            column: 24
          },
          end: {
            line: 27,
            column: 48
          }
        },
        '5': {
          start: {
            line: 28,
            column: 20
          },
          end: {
            line: 28,
            column: 103
          }
        },
        '6': {
          start: {
            line: 28,
            column: 67
          },
          end: {
            line: 28,
            column: 102
          }
        },
        '7': {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 9
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 34,
            column: 44
          }
        },
        '9': {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 39,
            column: 73
          }
        },
        '10': {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 59
          }
        },
        '11': {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 50,
            column: 5
          }
        },
        '12': {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 45,
            column: 42
          }
        },
        '13': {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 46,
            column: 75
          }
        },
        '14': {
          start: {
            line: 48,
            column: 6
          },
          end: {
            line: 48,
            column: 45
          }
        },
        '15': {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 49,
            column: 50
          }
        },
        '16': {
          start: {
            line: 53,
            column: 0
          },
          end: {
            line: 53,
            column: 61
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 23,
              column: 2
            },
            end: {
              line: 23,
              column: 3
            }
          },
          loc: {
            start: {
              line: 23,
              column: 31
            },
            end: {
              line: 36,
              column: 3
            }
          },
          line: 23
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 26,
              column: 26
            },
            end: {
              line: 26,
              column: 27
            }
          },
          loc: {
            start: {
              line: 26,
              column: 32
            },
            end: {
              line: 35,
              column: 5
            }
          },
          line: 26
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 28,
              column: 57
            },
            end: {
              line: 28,
              column: 58
            }
          },
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 102
            }
          },
          line: 28
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 38,
              column: 2
            },
            end: {
              line: 38,
              column: 3
            }
          },
          loc: {
            start: {
              line: 38,
              column: 18
            },
            end: {
              line: 40,
              column: 3
            }
          },
          line: 38
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 41,
              column: 2
            },
            end: {
              line: 41,
              column: 3
            }
          },
          loc: {
            start: {
              line: 41,
              column: 16
            },
            end: {
              line: 51,
              column: 3
            }
          },
          line: 41
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 102
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 28,
              column: 67
            },
            end: {
              line: 28,
              column: 71
            }
          }, {
            start: {
              line: 28,
              column: 75
            },
            end: {
              line: 28,
              column: 102
            }
          }],
          line: 28
        },
        '1': {
          loc: {
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 50,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 50,
              column: 5
            }
          }, {
            start: {
              line: 44,
              column: 4
            },
            end: {
              line: 50,
              column: 5
            }
          }],
          line: 44
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Button$5 = (cov_el0cyyq9m.s[0]++, videojs.getComponent('Button'));

  var ViuAdvanceComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuAdvanceComponent, _Button);

    var _super = _createSuper(ViuAdvanceComponent);

    function ViuAdvanceComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuAdvanceComponent);

      cov_el0cyyq9m.f[0]++;
      cov_el0cyyq9m.s[1]++;
      _this = _super.call(this, player, options);
      cov_el0cyyq9m.s[2]++;

      _this.controlText('Text');

      cov_el0cyyq9m.s[3]++;

      _this.on('mouseenter', function () {
        cov_el0cyyq9m.f[1]++;
        var ViuPlayer = (cov_el0cyyq9m.s[4]++, _this.player_.ViuPlayer());
        var index = (cov_el0cyyq9m.s[5]++, ViuPlayer.state.actionArea.findIndex(function (item) {
          cov_el0cyyq9m.f[2]++;
          cov_el0cyyq9m.s[6]++;
          return (cov_el0cyyq9m.b[0][0]++, item) && (cov_el0cyyq9m.b[0][1]++, item.name_ === 'ViuAdvance');
        }));
        cov_el0cyyq9m.s[7]++;
        ViuPlayer.setState({
          isActionSelected: index
        });
        cov_el0cyyq9m.s[8]++;
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuAdvanceComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        cov_el0cyyq9m.f[3]++;
        cov_el0cyyq9m.s[9]++;
        return "vjs-viu-advance-button vjs-control ".concat(_get(_getPrototypeOf(ViuAdvanceComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_el0cyyq9m.f[4]++;
        cov_el0cyyq9m.s[10]++;
        this.player_.getChild('viuAdvancePanel').handleClick();
        cov_el0cyyq9m.s[11]++;

        if (!this.hasClass('vjs-advance-active')) {
          cov_el0cyyq9m.b[1][0]++;
          cov_el0cyyq9m.s[12]++;
          this.addClass('vjs-advance-active');
          cov_el0cyyq9m.s[13]++;
          this.player_.ViuPlayer().setUniquePanelOpen('isAdvanceAreaSelected');
        } else {
          cov_el0cyyq9m.b[1][1]++;
          cov_el0cyyq9m.s[14]++;
          this.removeClass('vjs-advance-active');
          cov_el0cyyq9m.s[15]++;
          this.player_.ViuPlayer().setAllPanelClose();
        }
      }
    }]);

    return ViuAdvanceComponent;
  }(Button$5);

  cov_el0cyyq9m.s[16]++;
  videojs.registerComponent('viuAdvance', ViuAdvanceComponent);

  var cov_3bmhr9g29 = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/advancePanel/viuResolutionList.js',
        hash = '39b47c83fbd9c91a116964423f537f7c525b8866',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/advancePanel/viuResolutionList.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 4,
            column: 12
          },
          end: {
            line: 4,
            column: 23
          }
        },
        '2': {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 7,
            column: 1
          }
        },
        '3': {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 27,
            column: 27
          }
        },
        '4': {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 59
          }
        },
        '5': {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 37,
            column: 7
          }
        },
        '6': {
          start: {
            line: 31,
            column: 6
          },
          end: {
            line: 31,
            column: 30
          }
        },
        '7': {
          start: {
            line: 32,
            column: 21
          },
          end: {
            line: 32,
            column: 41
          }
        },
        '8': {
          start: {
            line: 34,
            column: 6
          },
          end: {
            line: 36,
            column: 7
          }
        },
        '9': {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 29
          }
        },
        '10': {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 48,
            column: 7
          }
        },
        '11': {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        '12': {
          start: {
            line: 40,
            column: 19
          },
          end: {
            line: 40,
            column: 59
          }
        },
        '13': {
          start: {
            line: 41,
            column: 22
          },
          end: {
            line: 41,
            column: 77
          }
        },
        '14': {
          start: {
            line: 41,
            column: 57
          },
          end: {
            line: 41,
            column: 76
          }
        },
        '15': {
          start: {
            line: 43,
            column: 8
          },
          end: {
            line: 45,
            column: 11
          }
        },
        '16': {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 41
          }
        },
        '17': {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 50,
            column: 68
          }
        },
        '18': {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 79
          }
        },
        '19': {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 62
          }
        },
        '20': {
          start: {
            line: 53,
            column: 4
          },
          end: {
            line: 53,
            column: 48
          }
        },
        '21': {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 56,
            column: 26
          }
        },
        '22': {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 61,
            column: 6
          }
        },
        '23': {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 7
          }
        },
        '24': {
          start: {
            line: 64,
            column: 6
          },
          end: {
            line: 64,
            column: 32
          }
        },
        '25': {
          start: {
            line: 69,
            column: 22
          },
          end: {
            line: 73,
            column: 6
          }
        },
        '26': {
          start: {
            line: 74,
            column: 21
          },
          end: {
            line: 78,
            column: 6
          }
        },
        '27': {
          start: {
            line: 79,
            column: 17
          },
          end: {
            line: 82,
            column: 6
          }
        },
        '28': {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 69
          }
        },
        '29': {
          start: {
            line: 85,
            column: 30
          },
          end: {
            line: 88,
            column: 6
          }
        },
        '30': {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 103,
            column: 7
          }
        },
        '31': {
          start: {
            line: 91,
            column: 24
          },
          end: {
            line: 99,
            column: 8
          }
        },
        '32': {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 34
          }
        },
        '33': {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 47
          }
        },
        '34': {
          start: {
            line: 106,
            column: 25
          },
          end: {
            line: 110,
            column: 6
          }
        },
        '35': {
          start: {
            line: 111,
            column: 27
          },
          end: {
            line: 114,
            column: 6
          }
        },
        '36': {
          start: {
            line: 115,
            column: 20
          },
          end: {
            line: 115,
            column: 55
          }
        },
        '37': {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 128,
            column: 7
          }
        },
        '38': {
          start: {
            line: 118,
            column: 24
          },
          end: {
            line: 124,
            column: 8
          }
        },
        '39': {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 34
          }
        },
        '40': {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 44
          }
        },
        '41': {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 130,
            column: 32
          }
        },
        '42': {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 131,
            column: 31
          }
        },
        '43': {
          start: {
            line: 132,
            column: 4
          },
          end: {
            line: 132,
            column: 40
          }
        },
        '44': {
          start: {
            line: 133,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        '45': {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 134,
            column: 37
          }
        },
        '46': {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 135,
            column: 39
          }
        },
        '47': {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 16
          }
        },
        '48': {
          start: {
            line: 141,
            column: 4
          },
          end: {
            line: 143,
            column: 7
          }
        },
        '49': {
          start: {
            line: 144,
            column: 18
          },
          end: {
            line: 144,
            column: 45
          }
        },
        '50': {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 148,
            column: 5
          }
        },
        '51': {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 147,
            column: 39
          }
        },
        '52': {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 152,
            column: 29
          }
        },
        '53': {
          start: {
            line: 155,
            column: 4
          },
          end: {
            line: 155,
            column: 30
          }
        },
        '54': {
          start: {
            line: 159,
            column: 17
          },
          end: {
            line: 159,
            column: 38
          }
        },
        '55': {
          start: {
            line: 160,
            column: 19
          },
          end: {
            line: 160,
            column: 46
          }
        },
        '56': {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 166,
            column: 5
          }
        },
        '57': {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 165,
            column: 9
          }
        },
        '58': {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 169,
            column: 7
          }
        },
        '59': {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 38
          }
        },
        '60': {
          start: {
            line: 173,
            column: 17
          },
          end: {
            line: 173,
            column: 38
          }
        },
        '61': {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 174,
            column: 39
          }
        },
        '62': {
          start: {
            line: 175,
            column: 21
          },
          end: {
            line: 175,
            column: 61
          }
        },
        '63': {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 181,
            column: 5
          }
        },
        '64': {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 180,
            column: 9
          }
        },
        '65': {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 185,
            column: 7
          }
        },
        '66': {
          start: {
            line: 186,
            column: 4
          },
          end: {
            line: 186,
            column: 40
          }
        },
        '67': {
          start: {
            line: 196,
            column: 18
          },
          end: {
            line: 196,
            column: 45
          }
        },
        '68': {
          start: {
            line: 198,
            column: 4
          },
          end: {
            line: 207,
            column: 5
          }
        },
        '69': {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 203,
            column: 7
          }
        },
        '70': {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 202,
            column: 9
          }
        },
        '71': {
          start: {
            line: 201,
            column: 10
          },
          end: {
            line: 201,
            column: 46
          }
        },
        '72': {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 206,
            column: 7
          }
        },
        '73': {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 44
          }
        },
        '74': {
          start: {
            line: 216,
            column: 18
          },
          end: {
            line: 216,
            column: 45
          }
        },
        '75': {
          start: {
            line: 218,
            column: 4
          },
          end: {
            line: 227,
            column: 5
          }
        },
        '76': {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        '77': {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 222,
            column: 9
          }
        },
        '78': {
          start: {
            line: 221,
            column: 10
          },
          end: {
            line: 221,
            column: 55
          }
        },
        '79': {
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 226,
            column: 7
          }
        },
        '80': {
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 225,
            column: 53
          }
        },
        '81': {
          start: {
            line: 230,
            column: 18
          },
          end: {
            line: 230,
            column: 45
          }
        },
        '82': {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 241,
            column: 9
          }
        },
        '83': {
          start: {
            line: 233,
            column: 24
          },
          end: {
            line: 233,
            column: 63
          }
        },
        '84': {
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        },
        '85': {
          start: {
            line: 236,
            column: 10
          },
          end: {
            line: 236,
            column: 51
          }
        },
        '86': {
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 240,
            column: 9
          }
        },
        '87': {
          start: {
            line: 239,
            column: 10
          },
          end: {
            line: 239,
            column: 48
          }
        },
        '88': {
          start: {
            line: 244,
            column: 18
          },
          end: {
            line: 244,
            column: 45
          }
        },
        '89': {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 255,
            column: 9
          }
        },
        '90': {
          start: {
            line: 247,
            column: 24
          },
          end: {
            line: 247,
            column: 62
          }
        },
        '91': {
          start: {
            line: 249,
            column: 8
          },
          end: {
            line: 251,
            column: 9
          }
        },
        '92': {
          start: {
            line: 250,
            column: 10
          },
          end: {
            line: 250,
            column: 51
          }
        },
        '93': {
          start: {
            line: 252,
            column: 8
          },
          end: {
            line: 254,
            column: 9
          }
        },
        '94': {
          start: {
            line: 253,
            column: 10
          },
          end: {
            line: 253,
            column: 48
          }
        },
        '95': {
          start: {
            line: 263,
            column: 4
          },
          end: {
            line: 263,
            column: 25
          }
        },
        '96': {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        },
        '97': {
          start: {
            line: 265,
            column: 6
          },
          end: {
            line: 265,
            column: 43
          }
        },
        '98': {
          start: {
            line: 268,
            column: 4
          },
          end: {
            line: 270,
            column: 5
          }
        },
        '99': {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 39
          }
        },
        '100': {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 273,
            column: 5
          }
        },
        '101': {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 272,
            column: 32
          }
        },
        '102': {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 274,
            column: 73
          }
        },
        '103': {
          start: {
            line: 275,
            column: 4
          },
          end: {
            line: 278,
            column: 7
          }
        },
        '104': {
          start: {
            line: 281,
            column: 21
          },
          end: {
            line: 281,
            column: 42
          }
        },
        '105': {
          start: {
            line: 282,
            column: 26
          },
          end: {
            line: 282,
            column: 50
          }
        },
        '106': {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 308,
            column: 5
          }
        },
        '107': {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        },
        '108': {
          start: {
            line: 287,
            column: 19
          },
          end: {
            line: 287,
            column: 65
          }
        },
        '109': {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 291,
            column: 9
          }
        },
        '110': {
          start: {
            line: 290,
            column: 10
          },
          end: {
            line: 290,
            column: 31
          }
        },
        '111': {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 294,
            column: 12
          }
        },
        '112': {
          start: {
            line: 296,
            column: 6
          },
          end: {
            line: 306,
            column: 7
          }
        },
        '113': {
          start: {
            line: 299,
            column: 19
          },
          end: {
            line: 301,
            column: 9
          }
        },
        '114': {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 305,
            column: 9
          }
        },
        '115': {
          start: {
            line: 304,
            column: 10
          },
          end: {
            line: 304,
            column: 31
          }
        },
        '116': {
          start: {
            line: 307,
            column: 6
          },
          end: {
            line: 307,
            column: 12
          }
        },
        '117': {
          start: {
            line: 312,
            column: 22
          },
          end: {
            line: 312,
            column: 42
          }
        },
        '118': {
          start: {
            line: 314,
            column: 4
          },
          end: {
            line: 318,
            column: 7
          }
        },
        '119': {
          start: {
            line: 315,
            column: 6
          },
          end: {
            line: 317,
            column: 7
          }
        },
        '120': {
          start: {
            line: 316,
            column: 8
          },
          end: {
            line: 316,
            column: 50
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 26,
              column: 2
            },
            end: {
              line: 26,
              column: 3
            }
          },
          loc: {
            start: {
              line: 26,
              column: 31
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 26
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 30,
              column: 21
            },
            end: {
              line: 30,
              column: 22
            }
          },
          loc: {
            start: {
              line: 30,
              column: 32
            },
            end: {
              line: 37,
              column: 5
            }
          },
          line: 30
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 38,
              column: 25
            },
            end: {
              line: 38,
              column: 26
            }
          },
          loc: {
            start: {
              line: 38,
              column: 36
            },
            end: {
              line: 48,
              column: 5
            }
          },
          line: 38
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 41,
              column: 47
            },
            end: {
              line: 41,
              column: 48
            }
          },
          loc: {
            start: {
              line: 41,
              column: 57
            },
            end: {
              line: 41,
              column: 76
            }
          },
          line: 41
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 63,
              column: 23
            },
            end: {
              line: 63,
              column: 24
            }
          },
          loc: {
            start: {
              line: 63,
              column: 29
            },
            end: {
              line: 65,
              column: 5
            }
          },
          line: 63
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 68,
              column: 2
            },
            end: {
              line: 68,
              column: 3
            }
          },
          loc: {
            start: {
              line: 68,
              column: 13
            },
            end: {
              line: 138,
              column: 3
            }
          },
          line: 68
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 90,
              column: 23
            },
            end: {
              line: 90,
              column: 24
            }
          },
          loc: {
            start: {
              line: 90,
              column: 33
            },
            end: {
              line: 103,
              column: 5
            }
          },
          line: 90
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 117,
              column: 16
            },
            end: {
              line: 117,
              column: 17
            }
          },
          loc: {
            start: {
              line: 117,
              column: 26
            },
            end: {
              line: 128,
              column: 5
            }
          },
          line: 117
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 140,
              column: 2
            },
            end: {
              line: 140,
              column: 3
            }
          },
          loc: {
            start: {
              line: 140,
              column: 23
            },
            end: {
              line: 149,
              column: 3
            }
          },
          line: 140
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 151,
              column: 2
            },
            end: {
              line: 151,
              column: 3
            }
          },
          loc: {
            start: {
              line: 151,
              column: 22
            },
            end: {
              line: 153,
              column: 3
            }
          },
          line: 151
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 154,
              column: 2
            },
            end: {
              line: 154,
              column: 3
            }
          },
          loc: {
            start: {
              line: 154,
              column: 23
            },
            end: {
              line: 156,
              column: 3
            }
          },
          line: 154
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 158,
              column: 2
            },
            end: {
              line: 158,
              column: 3
            }
          },
          loc: {
            start: {
              line: 158,
              column: 22
            },
            end: {
              line: 171,
              column: 3
            }
          },
          line: 158
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 172,
              column: 2
            },
            end: {
              line: 172,
              column: 3
            }
          },
          loc: {
            start: {
              line: 172,
              column: 23
            },
            end: {
              line: 187,
              column: 3
            }
          },
          line: 172
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 195,
              column: 2
            },
            end: {
              line: 195,
              column: 3
            }
          },
          loc: {
            start: {
              line: 195,
              column: 29
            },
            end: {
              line: 208,
              column: 3
            }
          },
          line: 195
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 215,
              column: 2
            },
            end: {
              line: 215,
              column: 3
            }
          },
          loc: {
            start: {
              line: 215,
              column: 32
            },
            end: {
              line: 228,
              column: 3
            }
          },
          line: 215
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 229,
              column: 2
            },
            end: {
              line: 229,
              column: 3
            }
          },
          loc: {
            start: {
              line: 229,
              column: 30
            },
            end: {
              line: 242,
              column: 3
            }
          },
          line: 229
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 233,
              column: 14
            },
            end: {
              line: 233,
              column: 15
            }
          },
          loc: {
            start: {
              line: 233,
              column: 24
            },
            end: {
              line: 233,
              column: 63
            }
          },
          line: 233
        },
        '17': {
          name: '(anonymous_17)',
          decl: {
            start: {
              line: 234,
              column: 15
            },
            end: {
              line: 234,
              column: 16
            }
          },
          loc: {
            start: {
              line: 234,
              column: 25
            },
            end: {
              line: 241,
              column: 7
            }
          },
          line: 234
        },
        '18': {
          name: '(anonymous_18)',
          decl: {
            start: {
              line: 243,
              column: 2
            },
            end: {
              line: 243,
              column: 3
            }
          },
          loc: {
            start: {
              line: 243,
              column: 23
            },
            end: {
              line: 256,
              column: 3
            }
          },
          line: 243
        },
        '19': {
          name: '(anonymous_19)',
          decl: {
            start: {
              line: 247,
              column: 14
            },
            end: {
              line: 247,
              column: 15
            }
          },
          loc: {
            start: {
              line: 247,
              column: 24
            },
            end: {
              line: 247,
              column: 62
            }
          },
          line: 247
        },
        '20': {
          name: '(anonymous_20)',
          decl: {
            start: {
              line: 248,
              column: 15
            },
            end: {
              line: 248,
              column: 16
            }
          },
          loc: {
            start: {
              line: 248,
              column: 25
            },
            end: {
              line: 255,
              column: 7
            }
          },
          line: 248
        },
        '21': {
          name: '(anonymous_21)',
          decl: {
            start: {
              line: 262,
              column: 2
            },
            end: {
              line: 262,
              column: 3
            }
          },
          loc: {
            start: {
              line: 262,
              column: 18
            },
            end: {
              line: 279,
              column: 3
            }
          },
          line: 262
        },
        '22': {
          name: '(anonymous_22)',
          decl: {
            start: {
              line: 280,
              column: 2
            },
            end: {
              line: 280,
              column: 3
            }
          },
          loc: {
            start: {
              line: 280,
              column: 12
            },
            end: {
              line: 309,
              column: 3
            }
          },
          line: 280
        },
        '23': {
          name: '(anonymous_23)',
          decl: {
            start: {
              line: 311,
              column: 2
            },
            end: {
              line: 311,
              column: 3
            }
          },
          loc: {
            start: {
              line: 311,
              column: 18
            },
            end: {
              line: 319,
              column: 3
            }
          },
          line: 311
        },
        '24': {
          name: '(anonymous_24)',
          decl: {
            start: {
              line: 314,
              column: 22
            },
            end: {
              line: 314,
              column: 23
            }
          },
          loc: {
            start: {
              line: 314,
              column: 32
            },
            end: {
              line: 318,
              column: 5
            }
          },
          line: 314
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          }, {
            start: {
              line: 34,
              column: 6
            },
            end: {
              line: 36,
              column: 7
            }
          }],
          line: 34
        },
        '1': {
          loc: {
            start: {
              line: 39,
              column: 6
            },
            end: {
              line: 47,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 39,
              column: 6
            },
            end: {
              line: 47,
              column: 7
            }
          }, {
            start: {
              line: 39,
              column: 6
            },
            end: {
              line: 47,
              column: 7
            }
          }],
          line: 39
        },
        '2': {
          loc: {
            start: {
              line: 39,
              column: 10
            },
            end: {
              line: 39,
              column: 71
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 39,
              column: 10
            },
            end: {
              line: 39,
              column: 33
            }
          }, {
            start: {
              line: 39,
              column: 37
            },
            end: {
              line: 39,
              column: 71
            }
          }],
          line: 39
        },
        '3': {
          loc: {
            start: {
              line: 41,
              column: 57
            },
            end: {
              line: 41,
              column: 76
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 41,
              column: 57
            },
            end: {
              line: 41,
              column: 61
            }
          }, {
            start: {
              line: 41,
              column: 65
            },
            end: {
              line: 41,
              column: 76
            }
          }],
          line: 41
        },
        '4': {
          loc: {
            start: {
              line: 50,
              column: 6
            },
            end: {
              line: 50,
              column: 67
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 50,
              column: 6
            },
            end: {
              line: 50,
              column: 62
            }
          }, {
            start: {
              line: 50,
              column: 66
            },
            end: {
              line: 50,
              column: 67
            }
          }],
          line: 50
        },
        '5': {
          loc: {
            start: {
              line: 51,
              column: 24
            },
            end: {
              line: 51,
              column: 78
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 51,
              column: 24
            },
            end: {
              line: 51,
              column: 73
            }
          }, {
            start: {
              line: 51,
              column: 77
            },
            end: {
              line: 51,
              column: 78
            }
          }],
          line: 51
        },
        '6': {
          loc: {
            start: {
              line: 54,
              column: 21
            },
            end: {
              line: 56,
              column: 25
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 55,
              column: 6
            },
            end: {
              line: 55,
              column: 46
            }
          }, {
            start: {
              line: 56,
              column: 6
            },
            end: {
              line: 56,
              column: 25
            }
          }],
          line: 54
        },
        '7': {
          loc: {
            start: {
              line: 83,
              column: 27
            },
            end: {
              line: 83,
              column: 69
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 83,
              column: 27
            },
            end: {
              line: 83,
              column: 63
            }
          }, {
            start: {
              line: 83,
              column: 67
            },
            end: {
              line: 83,
              column: 69
            }
          }],
          line: 83
        },
        '8': {
          loc: {
            start: {
              line: 94,
              column: 10
            },
            end: {
              line: 96,
              column: 14
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 95,
              column: 12
            },
            end: {
              line: 95,
              column: 29
            }
          }, {
            start: {
              line: 96,
              column: 12
            },
            end: {
              line: 96,
              column: 14
            }
          }],
          line: 94
        },
        '9': {
          loc: {
            start: {
              line: 115,
              column: 20
            },
            end: {
              line: 115,
              column: 55
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 115,
              column: 20
            },
            end: {
              line: 115,
              column: 49
            }
          }, {
            start: {
              line: 115,
              column: 53
            },
            end: {
              line: 115,
              column: 55
            }
          }],
          line: 115
        },
        '10': {
          loc: {
            start: {
              line: 121,
              column: 10
            },
            end: {
              line: 121,
              column: 76
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 121,
              column: 54
            },
            end: {
              line: 121,
              column: 71
            }
          }, {
            start: {
              line: 121,
              column: 74
            },
            end: {
              line: 121,
              column: 76
            }
          }],
          line: 121
        },
        '11': {
          loc: {
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          }, {
            start: {
              line: 133,
              column: 4
            },
            end: {
              line: 136,
              column: 5
            }
          }],
          line: 133
        },
        '12': {
          loc: {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }, {
            start: {
              line: 146,
              column: 4
            },
            end: {
              line: 148,
              column: 5
            }
          }],
          line: 146
        },
        '13': {
          loc: {
            start: {
              line: 160,
              column: 19
            },
            end: {
              line: 160,
              column: 46
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 160,
              column: 34
            },
            end: {
              line: 160,
              column: 35
            }
          }, {
            start: {
              line: 160,
              column: 38
            },
            end: {
              line: 160,
              column: 46
            }
          }],
          line: 160
        },
        '14': {
          loc: {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          }, {
            start: {
              line: 162,
              column: 4
            },
            end: {
              line: 166,
              column: 5
            }
          }],
          line: 162
        },
        '15': {
          loc: {
            start: {
              line: 175,
              column: 21
            },
            end: {
              line: 175,
              column: 61
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 175,
              column: 41
            },
            end: {
              line: 175,
              column: 50
            }
          }, {
            start: {
              line: 175,
              column: 53
            },
            end: {
              line: 175,
              column: 61
            }
          }],
          line: 175
        },
        '16': {
          loc: {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          }, {
            start: {
              line: 177,
              column: 4
            },
            end: {
              line: 181,
              column: 5
            }
          }],
          line: 177
        },
        '17': {
          loc: {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }, {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 207,
              column: 5
            }
          }],
          line: 198
        },
        '18': {
          loc: {
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          }, {
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          }],
          line: 200
        },
        '19': {
          loc: {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }, {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }],
          line: 204
        },
        '20': {
          loc: {
            start: {
              line: 218,
              column: 4
            },
            end: {
              line: 227,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 218,
              column: 4
            },
            end: {
              line: 227,
              column: 5
            }
          }, {
            start: {
              line: 218,
              column: 4
            },
            end: {
              line: 227,
              column: 5
            }
          }],
          line: 218
        },
        '21': {
          loc: {
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          }, {
            start: {
              line: 220,
              column: 8
            },
            end: {
              line: 222,
              column: 9
            }
          }],
          line: 220
        },
        '22': {
          loc: {
            start: {
              line: 224,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 224,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          }, {
            start: {
              line: 224,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          }],
          line: 224
        },
        '23': {
          loc: {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          }, {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          }],
          line: 235
        },
        '24': {
          loc: {
            start: {
              line: 238,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 238,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          }, {
            start: {
              line: 238,
              column: 8
            },
            end: {
              line: 240,
              column: 9
            }
          }],
          line: 238
        },
        '25': {
          loc: {
            start: {
              line: 249,
              column: 8
            },
            end: {
              line: 251,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 249,
              column: 8
            },
            end: {
              line: 251,
              column: 9
            }
          }, {
            start: {
              line: 249,
              column: 8
            },
            end: {
              line: 251,
              column: 9
            }
          }],
          line: 249
        },
        '26': {
          loc: {
            start: {
              line: 252,
              column: 8
            },
            end: {
              line: 254,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 252,
              column: 8
            },
            end: {
              line: 254,
              column: 9
            }
          }, {
            start: {
              line: 252,
              column: 8
            },
            end: {
              line: 254,
              column: 9
            }
          }],
          line: 252
        },
        '27': {
          loc: {
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }, {
            start: {
              line: 264,
              column: 4
            },
            end: {
              line: 266,
              column: 5
            }
          }],
          line: 264
        },
        '28': {
          loc: {
            start: {
              line: 264,
              column: 8
            },
            end: {
              line: 264,
              column: 61
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 264,
              column: 8
            },
            end: {
              line: 264,
              column: 20
            }
          }, {
            start: {
              line: 264,
              column: 24
            },
            end: {
              line: 264,
              column: 61
            }
          }],
          line: 264
        },
        '29': {
          loc: {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          }, {
            start: {
              line: 268,
              column: 4
            },
            end: {
              line: 270,
              column: 5
            }
          }],
          line: 268
        },
        '30': {
          loc: {
            start: {
              line: 271,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 271,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          }, {
            start: {
              line: 271,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          }],
          line: 271
        },
        '31': {
          loc: {
            start: {
              line: 277,
              column: 21
            },
            end: {
              line: 277,
              column: 50
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 277,
              column: 21
            },
            end: {
              line: 277,
              column: 45
            }
          }, {
            start: {
              line: 277,
              column: 49
            },
            end: {
              line: 277,
              column: 50
            }
          }],
          line: 277
        },
        '32': {
          loc: {
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 308,
              column: 5
            }
          },
          type: 'switch',
          locations: [{
            start: {
              line: 285,
              column: 4
            },
            end: {
              line: 294,
              column: 12
            }
          }, {
            start: {
              line: 295,
              column: 4
            },
            end: {
              line: 307,
              column: 12
            }
          }],
          line: 284
        },
        '33': {
          loc: {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }, {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 293,
              column: 7
            }
          }],
          line: 286
        },
        '34': {
          loc: {
            start: {
              line: 289,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 289,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          }, {
            start: {
              line: 289,
              column: 8
            },
            end: {
              line: 291,
              column: 9
            }
          }],
          line: 289
        },
        '35': {
          loc: {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }, {
            start: {
              line: 296,
              column: 6
            },
            end: {
              line: 306,
              column: 7
            }
          }],
          line: 296
        },
        '36': {
          loc: {
            start: {
              line: 303,
              column: 8
            },
            end: {
              line: 305,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 303,
              column: 8
            },
            end: {
              line: 305,
              column: 9
            }
          }, {
            start: {
              line: 303,
              column: 8
            },
            end: {
              line: 305,
              column: 9
            }
          }],
          line: 303
        },
        '37': {
          loc: {
            start: {
              line: 312,
              column: 22
            },
            end: {
              line: 312,
              column: 42
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 312,
              column: 22
            },
            end: {
              line: 312,
              column: 36
            }
          }, {
            start: {
              line: 312,
              column: 40
            },
            end: {
              line: 312,
              column: 42
            }
          }],
          line: 312
        },
        '38': {
          loc: {
            start: {
              line: 315,
              column: 6
            },
            end: {
              line: 317,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 315,
              column: 6
            },
            end: {
              line: 317,
              column: 7
            }
          }, {
            start: {
              line: 315,
              column: 6
            },
            end: {
              line: 317,
              column: 7
            }
          }],
          line: 315
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0,
        '64': 0,
        '65': 0,
        '66': 0,
        '67': 0,
        '68': 0,
        '69': 0,
        '70': 0,
        '71': 0,
        '72': 0,
        '73': 0,
        '74': 0,
        '75': 0,
        '76': 0,
        '77': 0,
        '78': 0,
        '79': 0,
        '80': 0,
        '81': 0,
        '82': 0,
        '83': 0,
        '84': 0,
        '85': 0,
        '86': 0,
        '87': 0,
        '88': 0,
        '89': 0,
        '90': 0,
        '91': 0,
        '92': 0,
        '93': 0,
        '94': 0,
        '95': 0,
        '96': 0,
        '97': 0,
        '98': 0,
        '99': 0,
        '100': 0,
        '101': 0,
        '102': 0,
        '103': 0,
        '104': 0,
        '105': 0,
        '106': 0,
        '107': 0,
        '108': 0,
        '109': 0,
        '110': 0,
        '111': 0,
        '112': 0,
        '113': 0,
        '114': 0,
        '115': 0,
        '116': 0,
        '117': 0,
        '118': 0,
        '119': 0,
        '120': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0],
        '14': [0, 0],
        '15': [0, 0],
        '16': [0, 0],
        '17': [0, 0],
        '18': [0, 0],
        '19': [0, 0],
        '20': [0, 0],
        '21': [0, 0],
        '22': [0, 0],
        '23': [0, 0],
        '24': [0, 0],
        '25': [0, 0],
        '26': [0, 0],
        '27': [0, 0],
        '28': [0, 0],
        '29': [0, 0],
        '30': [0, 0],
        '31': [0, 0],
        '32': [0, 0],
        '33': [0, 0],
        '34': [0, 0],
        '35': [0, 0],
        '36': [0, 0],
        '37': [0, 0],
        '38': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$f = (cov_3bmhr9g29.s[0]++, videojs.getComponent('Component'));
  var dom$8 = (cov_3bmhr9g29.s[1]++, videojs.dom);
  var defaults$9 = (cov_3bmhr9g29.s[2]++, {
    title: ''
  });

  var ViuResolutionList = /*#__PURE__*/function (_Component) {
    _inherits(ViuResolutionList, _Component);

    var _super = _createSuper(ViuResolutionList);

    function ViuResolutionList(player, options) {
      var _this;

      _classCallCheck(this, ViuResolutionList);

      cov_3bmhr9g29.f[0]++;
      cov_3bmhr9g29.s[3]++;
      _this = _super.call(this, player, options);
      cov_3bmhr9g29.s[4]++;
      _this.options = videojs.mergeOptions(defaults$9, options);
      cov_3bmhr9g29.s[5]++;

      _this.on('click', function (event) {
        cov_3bmhr9g29.f[1]++;
        cov_3bmhr9g29.s[6]++;
        event.stopPropagation();

        var _ref = (cov_3bmhr9g29.s[7]++, event.target.dataset),
            id = _ref.id;

        cov_3bmhr9g29.s[8]++;

        if (id) {
          cov_3bmhr9g29.b[0][0]++;
          cov_3bmhr9g29.s[9]++;

          _this.handleClick(id);
        } else {
          cov_3bmhr9g29.b[0][1]++;
        }
      });

      cov_3bmhr9g29.s[10]++;

      _this.on('mouseover', function (event) {
        cov_3bmhr9g29.f[2]++;
        cov_3bmhr9g29.s[11]++;

        if ((cov_3bmhr9g29.b[2][0]++, event.target.attributes) && (cov_3bmhr9g29.b[2][1]++, event.target.attributes['data-id'])) {
          cov_3bmhr9g29.b[1][0]++;
          var id = (cov_3bmhr9g29.s[12]++, event.target.attributes['data-id'].value);
          var index = (cov_3bmhr9g29.s[13]++, _this.totalList.findIndex(function (item) {
            cov_3bmhr9g29.f[3]++;
            cov_3bmhr9g29.s[14]++;
            return (cov_3bmhr9g29.b[3][0]++, item) && (cov_3bmhr9g29.b[3][1]++, item === id);
          }));
          cov_3bmhr9g29.s[15]++;

          _this.setState({
            isSelected: index
          });

          cov_3bmhr9g29.s[16]++;

          _this.setComponentSelected(index);
        } else {
          cov_3bmhr9g29.b[1][1]++;
        }
      });

      cov_3bmhr9g29.s[17]++;
      _this.resolutionListTotal = (cov_3bmhr9g29.b[4][0]++, parseInt(_this.options.advance.resolutionList.length, 10)) || (cov_3bmhr9g29.b[4][1]++, 0);
      cov_3bmhr9g29.s[18]++;
      _this.cdnListTotal = (cov_3bmhr9g29.b[5][0]++, parseInt(_this.options.advance.cdnList.length, 10)) || (cov_3bmhr9g29.b[5][1]++, 0);
      cov_3bmhr9g29.s[19]++;
      _this.resolutionList = _this.options.advance.resolutionList;
      cov_3bmhr9g29.s[20]++;
      _this.cdnList = _this.options.advance.cdnList;
      cov_3bmhr9g29.s[21]++;
      _this.totalList = _this.options.advance.isCDNOpen ? (cov_3bmhr9g29.b[6][0]++, _this.resolutionList.concat(_this.cdnList)) : (cov_3bmhr9g29.b[6][1]++, _this.resolutionList);
      cov_3bmhr9g29.s[22]++;
      _this.state = {
        isSelected: 0,
        isSelectLevel: 0
      };
      cov_3bmhr9g29.s[23]++;

      _this.player_.ready(function () {
        cov_3bmhr9g29.f[4]++;
        cov_3bmhr9g29.s[24]++;

        _this.setDefaultSelected();
      });

      return _this;
    }

    _createClass(ViuResolutionList, [{
      key: "createEl",
      value: function createEl() {
        var _this2 = this;

        cov_3bmhr9g29.f[5]++;
        var heroTitle = (cov_3bmhr9g29.s[25]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('resolution_hero_title'),
          className: 'vjs-viu-player-list-title',
          dir: 'ltr'
        }));
        var resTitle = (cov_3bmhr9g29.s[26]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('resolution_title'),
          className: 'vjs-viu-player-list-sub-title res-sub-title',
          dir: 'ltr'
        }));
        var root = (cov_3bmhr9g29.s[27]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-list-container',
          dir: 'ltr'
        }));
        var resolutionList = (cov_3bmhr9g29.s[28]++, (cov_3bmhr9g29.b[7][0]++, this.options_.advance.resolutionList) || (cov_3bmhr9g29.b[7][1]++, []));
        var resolutionWrapper = (cov_3bmhr9g29.s[29]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        }));
        cov_3bmhr9g29.s[30]++;
        resolutionList.map(function (item) {
          cov_3bmhr9g29.f[6]++;
          var sigleItem = (cov_3bmhr9g29.s[31]++, dom$8.createEl('li', {
            textContent: _this2.localize("res_".concat(item)),
            className: "vjs-viu-player-list-item vjs-viu-res-item ".concat(_this2.options_.advance.defaultResolution === item ? (cov_3bmhr9g29.b[8][0]++, 'selected-active') : (cov_3bmhr9g29.b[8][1]++, ''), " ").concat(_get(_getPrototypeOf(ViuResolutionList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          }));
          cov_3bmhr9g29.s[32]++;
          sigleItem.dataset.id = item;
          cov_3bmhr9g29.s[33]++;
          resolutionWrapper.appendChild(sigleItem);
        });
        var cdnListTitle = (cov_3bmhr9g29.s[34]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('cdn_title'),
          className: 'vjs-viu-player-list-sub-title cdn_sub_title',
          dir: 'ltr'
        }));
        var cdnListWrapper = (cov_3bmhr9g29.s[35]++, _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        }));
        var cdnList = (cov_3bmhr9g29.s[36]++, (cov_3bmhr9g29.b[9][0]++, this.options_.advance.cdnList) || (cov_3bmhr9g29.b[9][1]++, []));
        cov_3bmhr9g29.s[37]++;
        cdnList.map(function (item) {
          cov_3bmhr9g29.f[7]++;
          var sigleItem = (cov_3bmhr9g29.s[38]++, dom$8.createEl('li', {
            textContent: _this2.localize("res_".concat(item)),
            className: "vjs-viu-player-list-item  vjs-viu-res-item vjs-viu-cdn-item ".concat(_this2.options_.advance.defaultCdn === item ? (cov_3bmhr9g29.b[10][0]++, 'selected-active') : (cov_3bmhr9g29.b[10][1]++, ''), " ").concat(_get(_getPrototypeOf(ViuResolutionList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          }));
          cov_3bmhr9g29.s[39]++;
          sigleItem.dataset.id = item;
          cov_3bmhr9g29.s[40]++;
          cdnListWrapper.appendChild(sigleItem);
        });
        cov_3bmhr9g29.s[41]++;
        root.appendChild(heroTitle);
        cov_3bmhr9g29.s[42]++;
        root.appendChild(resTitle);
        cov_3bmhr9g29.s[43]++;
        root.appendChild(resolutionWrapper);
        cov_3bmhr9g29.s[44]++;

        if (this.options_.advance.isCDNOpen) {
          cov_3bmhr9g29.b[11][0]++;
          cov_3bmhr9g29.s[45]++;
          root.appendChild(cdnListTitle);
          cov_3bmhr9g29.s[46]++;
          root.appendChild(cdnListWrapper);
        } else {
          cov_3bmhr9g29.b[11][1]++;
        }

        cov_3bmhr9g29.s[47]++;
        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        cov_3bmhr9g29.f[8]++;
        cov_3bmhr9g29.s[48]++;
        this.setState({
          isSelected: 0
        });
        var items = (cov_3bmhr9g29.s[49]++, dom$8.$$('.vjs-viu-res-item'));
        cov_3bmhr9g29.s[50]++;

        if (items[0]) {
          cov_3bmhr9g29.b[12][0]++;
          cov_3bmhr9g29.s[51]++;
          dom$8.addClass(items[0], 'active');
        } else {
          cov_3bmhr9g29.b[12][1]++;
        }
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        cov_3bmhr9g29.f[9]++;
        cov_3bmhr9g29.s[52]++;
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        cov_3bmhr9g29.f[10]++;
        cov_3bmhr9g29.s[53]++;
        this.selectedDownerStep();
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        cov_3bmhr9g29.f[11]++;
        var step = (cov_3bmhr9g29.s[54]++, this.state.isSelected);
        var upStep = (cov_3bmhr9g29.s[55]++, step - 1 < 0 ? (cov_3bmhr9g29.b[13][0]++, 0) : (cov_3bmhr9g29.b[13][1]++, step - 1));
        cov_3bmhr9g29.s[56]++;

        if (upStep < this.resolutionListTotal) {
          cov_3bmhr9g29.b[14][0]++;
          cov_3bmhr9g29.s[57]++;
          this.setState({
            isSelectLevel: 0
          });
        } else {
          cov_3bmhr9g29.b[14][1]++;
        }

        cov_3bmhr9g29.s[58]++;
        this.setState({
          isSelected: upStep
        });
        cov_3bmhr9g29.s[59]++;
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        cov_3bmhr9g29.f[12]++;
        var step = (cov_3bmhr9g29.s[60]++, this.state.isSelected);
        var total = (cov_3bmhr9g29.s[61]++, this.totalList.length);
        var downStep = (cov_3bmhr9g29.s[62]++, step + 1 >= total ? (cov_3bmhr9g29.b[15][0]++, total - 1) : (cov_3bmhr9g29.b[15][1]++, step + 1));
        cov_3bmhr9g29.s[63]++;

        if (downStep > this.resolutionListTotal - 1) {
          cov_3bmhr9g29.b[16][0]++;
          cov_3bmhr9g29.s[64]++;
          this.setState({
            isSelectLevel: 1
          });
        } else {
          cov_3bmhr9g29.b[16][1]++;
        }

        cov_3bmhr9g29.s[65]++;
        this.setState({
          isSelected: downStep
        });
        cov_3bmhr9g29.s[66]++;
        this.setComponentSelected(downStep);
      }
    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        cov_3bmhr9g29.f[13]++;
        var items = (cov_3bmhr9g29.s[67]++, dom$8.$$('.vjs-viu-res-item'));
        cov_3bmhr9g29.s[68]++;

        if (items) {
          cov_3bmhr9g29.b[17][0]++;
          cov_3bmhr9g29.s[69]++;

          for (var i = 0; i < items.length; i++) {
            cov_3bmhr9g29.s[70]++;

            if (dom$8.hasClass(items[i], 'active')) {
              cov_3bmhr9g29.b[18][0]++;
              cov_3bmhr9g29.s[71]++;
              dom$8.removeClass(items[i], 'active');
            } else {
              cov_3bmhr9g29.b[18][1]++;
            }
          }

          cov_3bmhr9g29.s[72]++;

          if (items[step]) {
            cov_3bmhr9g29.b[19][0]++;
            cov_3bmhr9g29.s[73]++;
            dom$8.addClass(items[step], 'active');
          } else {
            cov_3bmhr9g29.b[19][1]++;
          }
        } else {
          cov_3bmhr9g29.b[17][1]++;
        }
      }
    }, {
      key: "setComponentResSelected",
      value: function setComponentResSelected(step) {
        cov_3bmhr9g29.f[14]++;
        var items = (cov_3bmhr9g29.s[74]++, dom$8.$$('.vjs-viu-res-item'));
        cov_3bmhr9g29.s[75]++;

        if (items) {
          cov_3bmhr9g29.b[20][0]++;
          cov_3bmhr9g29.s[76]++;

          for (var i = 0; i < items.length; i++) {
            cov_3bmhr9g29.s[77]++;

            if (dom$8.hasClass(items[i], 'selected-active')) {
              cov_3bmhr9g29.b[21][0]++;
              cov_3bmhr9g29.s[78]++;
              dom$8.removeClass(items[i], 'selected-active');
            } else {
              cov_3bmhr9g29.b[21][1]++;
            }
          }

          cov_3bmhr9g29.s[79]++;

          if (items[step]) {
            cov_3bmhr9g29.b[22][0]++;
            cov_3bmhr9g29.s[80]++;
            dom$8.addClass(items[step], 'selected-active');
          } else {
            cov_3bmhr9g29.b[22][1]++;
          }
        } else {
          cov_3bmhr9g29.b[20][1]++;
        }
      }
    }, {
      key: "setResolutionListActive",
      value: function setResolutionListActive(id) {
        cov_3bmhr9g29.f[15]++;
        var items = (cov_3bmhr9g29.s[81]++, dom$8.$$('.vjs-viu-res-item'));
        cov_3bmhr9g29.s[82]++;
        Array.from(items).filter(function (item) {
          cov_3bmhr9g29.f[16]++;
          cov_3bmhr9g29.s[83]++;
          return !dom$8.hasClass(item, 'vjs-viu-cdn-item');
        }).forEach(function (item) {
          cov_3bmhr9g29.f[17]++;
          cov_3bmhr9g29.s[84]++;

          if (dom$8.hasClass(item, 'selected-active')) {
            cov_3bmhr9g29.b[23][0]++;
            cov_3bmhr9g29.s[85]++;
            dom$8.removeClass(item, 'selected-active');
          } else {
            cov_3bmhr9g29.b[23][1]++;
          }

          cov_3bmhr9g29.s[86]++;

          if (item.dataset.id === id) {
            cov_3bmhr9g29.b[24][0]++;
            cov_3bmhr9g29.s[87]++;
            dom$8.addClass(item, 'selected-active');
          } else {
            cov_3bmhr9g29.b[24][1]++;
          }
        });
      }
    }, {
      key: "setCdnListActive",
      value: function setCdnListActive(id) {
        cov_3bmhr9g29.f[18]++;
        var items = (cov_3bmhr9g29.s[88]++, dom$8.$$('.vjs-viu-res-item'));
        cov_3bmhr9g29.s[89]++;
        Array.from(items).filter(function (item) {
          cov_3bmhr9g29.f[19]++;
          cov_3bmhr9g29.s[90]++;
          return dom$8.hasClass(item, 'vjs-viu-cdn-item');
        }).forEach(function (item) {
          cov_3bmhr9g29.f[20]++;
          cov_3bmhr9g29.s[91]++;

          if (dom$8.hasClass(item, 'selected-active')) {
            cov_3bmhr9g29.b[25][0]++;
            cov_3bmhr9g29.s[92]++;
            dom$8.removeClass(item, 'selected-active');
          } else {
            cov_3bmhr9g29.b[25][1]++;
          }

          cov_3bmhr9g29.s[93]++;

          if (item.dataset.id === id) {
            cov_3bmhr9g29.b[26][0]++;
            cov_3bmhr9g29.s[94]++;
            dom$8.addClass(item, 'selected-active');
          } else {
            cov_3bmhr9g29.b[26][1]++;
          }
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(id) {
        cov_3bmhr9g29.f[21]++;
        cov_3bmhr9g29.s[95]++;
        this.clearAllClass();
        cov_3bmhr9g29.s[96]++;

        if ((cov_3bmhr9g29.b[28][0]++, this.player_) && (cov_3bmhr9g29.b[28][1]++, !this.player_.hasClass("v-res-".concat(id)))) {
          cov_3bmhr9g29.b[27][0]++;
          cov_3bmhr9g29.s[97]++;
          this.player_.addClass("v-res-".concat(id));
        } else {
          cov_3bmhr9g29.b[27][1]++;
        }

        cov_3bmhr9g29.s[98]++;

        if (this.resolutionList.includes(id)) {
          cov_3bmhr9g29.b[29][0]++;
          cov_3bmhr9g29.s[99]++;
          this.setResolutionListActive(id);
        } else {
          cov_3bmhr9g29.b[29][1]++;
        }

        cov_3bmhr9g29.s[100]++;

        if (this.cdnList.includes(id)) {
          cov_3bmhr9g29.b[30][0]++;
          cov_3bmhr9g29.s[101]++;
          this.setCdnListActive(id);
        } else {
          cov_3bmhr9g29.b[30][1]++;
        }

        cov_3bmhr9g29.s[102]++;
        this.player_.getChild('ViuPlayerComponent').viuAdvance.handleClick();
        cov_3bmhr9g29.s[103]++;
        this.player_.trigger('viuAdvance', {
          id: id,
          isSelectLevel: (cov_3bmhr9g29.b[31][0]++, this.state.isSelectLevel) || (cov_3bmhr9g29.b[31][1]++, 0)
        });
      }
    }, {
      key: "confirm",
      value: function confirm() {
        cov_3bmhr9g29.f[22]++;
        var selected = (cov_3bmhr9g29.s[104]++, this.state.isSelected);
        var isSelectLevel = (cov_3bmhr9g29.s[105]++, this.state.isSelectLevel);
        cov_3bmhr9g29.s[106]++;

        switch (isSelectLevel) {
          case 0:
            cov_3bmhr9g29.b[32][0]++;
            cov_3bmhr9g29.s[107]++;

            if (this.options_.advance.resolutionList[selected]) {
              cov_3bmhr9g29.b[33][0]++;
              var id = (cov_3bmhr9g29.s[108]++, this.options_.advance.resolutionList[selected]);
              cov_3bmhr9g29.s[109]++;

              if (id) {
                cov_3bmhr9g29.b[34][0]++;
                cov_3bmhr9g29.s[110]++;
                this.handleClick(id);
              } else {
                cov_3bmhr9g29.b[34][1]++;
              }
            } else {
              cov_3bmhr9g29.b[33][1]++;
            }

            cov_3bmhr9g29.s[111]++;
            break;

          case 1:
            cov_3bmhr9g29.b[32][1]++;
            cov_3bmhr9g29.s[112]++;

            if (this.options_.advance.cdnList[selected - this.resolutionListTotal]) {
              cov_3bmhr9g29.b[35][0]++;

              var _id = (cov_3bmhr9g29.s[113]++, this.options_.advance.cdnList[selected - this.resolutionListTotal]);

              cov_3bmhr9g29.s[114]++;

              if (_id) {
                cov_3bmhr9g29.b[36][0]++;
                cov_3bmhr9g29.s[115]++;
                this.handleClick(_id);
              } else {
                cov_3bmhr9g29.b[36][1]++;
              }
            } else {
              cov_3bmhr9g29.b[35][1]++;
            }

            cov_3bmhr9g29.s[116]++;
            break;
        }
      }
    }, {
      key: "clearAllClass",
      value: function clearAllClass() {
        var _this3 = this;

        cov_3bmhr9g29.f[23]++;
        var classList = (cov_3bmhr9g29.s[117]++, (cov_3bmhr9g29.b[37][0]++, this.totalList) || (cov_3bmhr9g29.b[37][1]++, []));
        cov_3bmhr9g29.s[118]++;
        classList.forEach(function (item) {
          cov_3bmhr9g29.f[24]++;
          cov_3bmhr9g29.s[119]++;

          if (_this3.player_.hasClass("v-res-".concat(item))) {
            cov_3bmhr9g29.b[38][0]++;
            cov_3bmhr9g29.s[120]++;

            _this3.player_.removeClass("v-res-".concat(item));
          } else {
            cov_3bmhr9g29.b[38][1]++;
          }
        });
      }
    }]);

    return ViuResolutionList;
  }(Component$f);

  var cov_2kw2iajdbc = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/advancePanel/viuAdvancePanel.js',
        hash = '53a655ad39a51ad9c4f72cb778b8580b5748ceef',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/advancePanel/viuAdvancePanel.js',
      statementMap: {
        '0': {
          start: {
            line: 2,
            column: 18
          },
          end: {
            line: 2,
            column: 51
          }
        },
        '1': {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 27
          }
        },
        '2': {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 48
          }
        },
        '3': {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 22,
            column: 6
          }
        },
        '4': {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 16
          }
        },
        '5': {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 27
          }
        },
        '6': {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 55
          }
        },
        '7': {
          start: {
            line: 41,
            column: 17
          },
          end: {
            line: 44,
            column: 6
          }
        },
        '8': {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 46,
            column: 16
          }
        },
        '9': {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 49,
            column: 30
          }
        },
        '10': {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 29
          }
        },
        '11': {
          start: {
            line: 56,
            column: 20
          },
          end: {
            line: 56,
            column: 50
          }
        },
        '12': {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        '13': {
          start: {
            line: 59,
            column: 6
          },
          end: {
            line: 59,
            column: 50
          }
        },
        '14': {
          start: {
            line: 64,
            column: 20
          },
          end: {
            line: 64,
            column: 50
          }
        },
        '15': {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        '16': {
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 67,
            column: 50
          }
        },
        '17': {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        '18': {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 30
          }
        },
        '19': {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 55
          }
        },
        '20': {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 77,
            column: 33
          }
        },
        '21': {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 78,
            column: 58
          }
        },
        '22': {
          start: {
            line: 83,
            column: 0
          },
          end: {
            line: 83,
            column: 62
          }
        },
        '23': {
          start: {
            line: 84,
            column: 0
          },
          end: {
            line: 87,
            column: 2
          }
        },
        '24': {
          start: {
            line: 89,
            column: 0
          },
          end: {
            line: 89,
            column: 66
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 14,
              column: 2
            },
            end: {
              line: 14,
              column: 3
            }
          },
          loc: {
            start: {
              line: 14,
              column: 31
            },
            end: {
              line: 17,
              column: 3
            }
          },
          line: 14
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 18,
              column: 2
            },
            end: {
              line: 18,
              column: 3
            }
          },
          loc: {
            start: {
              line: 18,
              column: 13
            },
            end: {
              line: 25,
              column: 3
            }
          },
          line: 18
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 36,
              column: 2
            },
            end: {
              line: 36,
              column: 3
            }
          },
          loc: {
            start: {
              line: 36,
              column: 31
            },
            end: {
              line: 39,
              column: 3
            }
          },
          line: 36
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 40,
              column: 2
            },
            end: {
              line: 40,
              column: 3
            }
          },
          loc: {
            start: {
              line: 40,
              column: 13
            },
            end: {
              line: 47,
              column: 3
            }
          },
          line: 40
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 48,
              column: 2
            },
            end: {
              line: 48,
              column: 3
            }
          },
          loc: {
            start: {
              line: 48,
              column: 14
            },
            end: {
              line: 50,
              column: 3
            }
          },
          line: 48
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 51,
              column: 2
            },
            end: {
              line: 51,
              column: 3
            }
          },
          loc: {
            start: {
              line: 51,
              column: 13
            },
            end: {
              line: 53,
              column: 3
            }
          },
          line: 51
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 55,
              column: 2
            },
            end: {
              line: 55,
              column: 3
            }
          },
          loc: {
            start: {
              line: 55,
              column: 22
            },
            end: {
              line: 61,
              column: 3
            }
          },
          line: 55
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 63,
              column: 2
            },
            end: {
              line: 63,
              column: 3
            }
          },
          loc: {
            start: {
              line: 63,
              column: 23
            },
            end: {
              line: 69,
              column: 3
            }
          },
          line: 63
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 71,
              column: 2
            },
            end: {
              line: 71,
              column: 3
            }
          },
          loc: {
            start: {
              line: 71,
              column: 16
            },
            end: {
              line: 80,
              column: 3
            }
          },
          line: 71
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 60,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 60,
              column: 5
            }
          }, {
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 60,
              column: 5
            }
          }],
          line: 58
        },
        '1': {
          loc: {
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 68,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 68,
              column: 5
            }
          }, {
            start: {
              line: 66,
              column: 4
            },
            end: {
              line: 68,
              column: 5
            }
          }],
          line: 66
        },
        '2': {
          loc: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }, {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          }],
          line: 73
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Component$g = (cov_2kw2iajdbc.s[0]++, videojs.getComponent('component'));

  var ViuAdvancePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuAdvancePanelContainer, _Component);

    var _super = _createSuper(ViuAdvancePanelContainer);

    function ViuAdvancePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuAdvancePanelContainer);

      cov_2kw2iajdbc.f[0]++;
      cov_2kw2iajdbc.s[1]++;
      _this = _super.call(this, player, options);
      cov_2kw2iajdbc.s[2]++;

      _this.addChild('viuResolutionList', options);

      return _this;
    }

    _createClass(ViuAdvancePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        cov_2kw2iajdbc.f[1]++;
        var root = (cov_2kw2iajdbc.s[3]++, _get(_getPrototypeOf(ViuAdvancePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-advance-drawer-container',
          dir: 'ltr'
        }));
        cov_2kw2iajdbc.s[4]++;
        return root;
      }
    }]);

    return ViuAdvancePanelContainer;
  }(Component$g);

  var ViuAdvancePanel = /*#__PURE__*/function (_Component2) {
    _inherits(ViuAdvancePanel, _Component2);

    var _super2 = _createSuper(ViuAdvancePanel);

    function ViuAdvancePanel(player, options) {
      var _this2;

      _classCallCheck(this, ViuAdvancePanel);

      cov_2kw2iajdbc.f[2]++;
      cov_2kw2iajdbc.s[5]++;
      _this2 = _super2.call(this, player, options);
      cov_2kw2iajdbc.s[6]++;

      _this2.addChild('viuAdvancePanelContainer', options);

      return _this2;
    }

    _createClass(ViuAdvancePanel, [{
      key: "createEl",
      value: function createEl() {
        cov_2kw2iajdbc.f[3]++;
        var root = (cov_2kw2iajdbc.s[7]++, _get(_getPrototypeOf(ViuAdvancePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-advance-drawer ',
          dir: 'ltr'
        }));
        cov_2kw2iajdbc.s[8]++;
        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        cov_2kw2iajdbc.f[4]++;
        cov_2kw2iajdbc.s[9]++;
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        cov_2kw2iajdbc.f[5]++;
        cov_2kw2iajdbc.s[10]++;
        this.containerDownStep();
      }
    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        cov_2kw2iajdbc.f[6]++;
        var content = (cov_2kw2iajdbc.s[11]++, this.eventBusEl_.childNodes[0]);
        cov_2kw2iajdbc.s[12]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_2kw2iajdbc.b[0][0]++;
          cov_2kw2iajdbc.s[13]++;
          content.scrollTop = content.scrollTop + 300;
        } else {
          cov_2kw2iajdbc.b[0][1]++;
        }
      }
    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        cov_2kw2iajdbc.f[7]++;
        var content = (cov_2kw2iajdbc.s[14]++, this.eventBusEl_.childNodes[0]);
        cov_2kw2iajdbc.s[15]++;

        if (content.clientHeight <= content.scrollHeight) {
          cov_2kw2iajdbc.b[1][0]++;
          cov_2kw2iajdbc.s[16]++;
          content.scrollTop = content.scrollTop - 300;
        } else {
          cov_2kw2iajdbc.b[1][1]++;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        cov_2kw2iajdbc.f[8]++;
        cov_2kw2iajdbc.s[17]++;

        if (!this.hasClass('active')) {
          cov_2kw2iajdbc.b[2][0]++;
          cov_2kw2iajdbc.s[18]++;
          this.addClass('active');
          cov_2kw2iajdbc.s[19]++;
          this.player_.addClass('vjs-advance-drawer-open');
        } else {
          cov_2kw2iajdbc.b[2][1]++;
          cov_2kw2iajdbc.s[20]++;
          this.removeClass('active');
          cov_2kw2iajdbc.s[21]++;
          this.player_.removeClass('vjs-advance-drawer-open');
        }
      }
    }]);

    return ViuAdvancePanel;
  }(Component$g);

  cov_2kw2iajdbc.s[22]++;
  videojs.registerComponent('viuAdvancePanel', ViuAdvancePanel);
  cov_2kw2iajdbc.s[23]++;
  videojs.registerComponent('viuAdvancePanelContainer', ViuAdvancePanelContainer);
  cov_2kw2iajdbc.s[24]++;
  videojs.registerComponent('viuResolutionList', ViuResolutionList);

  var version = "0.4.2";

  var cov_188aayz4dz = function () {
    var path = '/Users/gemer/GEM/playground/viu-player/src/plugin.js',
        hash = '53477abc0121ce55a8952fd98f944c13245910d9',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
      path: '/Users/gemer/GEM/playground/viu-player/src/plugin.js',
      statementMap: {
        '0': {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 19,
            column: 42
          }
        },
        '1': {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 51
          }
        },
        '2': {
          start: {
            line: 24,
            column: 17
          },
          end: {
            line: 50,
            column: 1
          }
        },
        '3': {
          start: {
            line: 73,
            column: 4
          },
          end: {
            line: 73,
            column: 18
          }
        },
        '4': {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 59
          }
        },
        '5': {
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 76,
            column: 61
          }
        },
        '6': {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 77,
            column: 55
          }
        },
        '7': {
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 78,
            column: 59
          }
        },
        '8': {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 79,
            column: 59
          }
        },
        '9': {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 80,
            column: 58
          }
        },
        '10': {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 66
          }
        },
        '11': {
          start: {
            line: 82,
            column: 4
          },
          end: {
            line: 82,
            column: 54
          }
        },
        '12': {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 96,
            column: 6
          }
        },
        '13': {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 220,
            column: 7
          }
        },
        '14': {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 99,
            column: 45
          }
        },
        '15': {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 105,
            column: 7
          }
        },
        '16': {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 104,
            column: 57
          }
        },
        '17': {
          start: {
            line: 107,
            column: 31
          },
          end: {
            line: 116,
            column: 7
          }
        },
        '18': {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 127,
            column: 7
          }
        },
        '19': {
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 126,
            column: 9
          }
        },
        '20': {
          start: {
            line: 121,
            column: 10
          },
          end: {
            line: 125,
            column: 13
          }
        },
        '21': {
          start: {
            line: 122,
            column: 12
          },
          end: {
            line: 124,
            column: 13
          }
        },
        '22': {
          start: {
            line: 123,
            column: 14
          },
          end: {
            line: 123,
            column: 26
          }
        },
        '23': {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 128,
            column: 55
          }
        },
        '24': {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 129,
            column: 48
          }
        },
        '25': {
          start: {
            line: 137,
            column: 10
          },
          end: {
            line: 137,
            column: 27
          }
        },
        '26': {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 151,
            column: 7
          }
        },
        '27': {
          start: {
            line: 144,
            column: 31
          },
          end: {
            line: 145,
            column: 22
          }
        },
        '28': {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 42
          }
        },
        '29': {
          start: {
            line: 148,
            column: 22
          },
          end: {
            line: 148,
            column: 102
          }
        },
        '30': {
          start: {
            line: 148,
            column: 65
          },
          end: {
            line: 148,
            column: 101
          }
        },
        '31': {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 48
          }
        },
        '32': {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 193,
            column: 9
          }
        },
        '33': {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 192,
            column: 9
          }
        },
        '34': {
          start: {
            line: 157,
            column: 35
          },
          end: {
            line: 157,
            column: 56
          }
        },
        '35': {
          start: {
            line: 158,
            column: 36
          },
          end: {
            line: 159,
            column: 27
          }
        },
        '36': {
          start: {
            line: 160,
            column: 31
          },
          end: {
            line: 160,
            column: 113
          }
        },
        '37': {
          start: {
            line: 160,
            column: 73
          },
          end: {
            line: 160,
            column: 112
          }
        },
        '38': {
          start: {
            line: 162,
            column: 10
          },
          end: {
            line: 166,
            column: 11
          }
        },
        '39': {
          start: {
            line: 163,
            column: 12
          },
          end: {
            line: 165,
            column: 15
          }
        },
        '40': {
          start: {
            line: 168,
            column: 10
          },
          end: {
            line: 176,
            column: 11
          }
        },
        '41': {
          start: {
            line: 169,
            column: 12
          },
          end: {
            line: 169,
            column: 53
          }
        },
        '42': {
          start: {
            line: 171,
            column: 12
          },
          end: {
            line: 175,
            column: 14
          }
        },
        '43': {
          start: {
            line: 177,
            column: 10
          },
          end: {
            line: 191,
            column: 11
          }
        },
        '44': {
          start: {
            line: 178,
            column: 12
          },
          end: {
            line: 181,
            column: 15
          }
        },
        '45': {
          start: {
            line: 182,
            column: 12
          },
          end: {
            line: 182,
            column: 49
          }
        },
        '46': {
          start: {
            line: 183,
            column: 12
          },
          end: {
            line: 183,
            column: 67
          }
        },
        '47': {
          start: {
            line: 185,
            column: 12
          },
          end: {
            line: 188,
            column: 15
          }
        },
        '48': {
          start: {
            line: 189,
            column: 12
          },
          end: {
            line: 189,
            column: 49
          }
        },
        '49': {
          start: {
            line: 190,
            column: 12
          },
          end: {
            line: 190,
            column: 41
          }
        },
        '50': {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 197,
            column: 9
          }
        },
        '51': {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 201,
            column: 7
          }
        },
        '52': {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 85
          }
        },
        '53': {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 209,
            column: 7
          }
        },
        '54': {
          start: {
            line: 203,
            column: 8
          },
          end: {
            line: 208,
            column: 11
          }
        },
        '55': {
          start: {
            line: 204,
            column: 10
          },
          end: {
            line: 206,
            column: 13
          }
        },
        '56': {
          start: {
            line: 207,
            column: 10
          },
          end: {
            line: 207,
            column: 39
          }
        },
        '57': {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 217,
            column: 7
          }
        },
        '58': {
          start: {
            line: 211,
            column: 8
          },
          end: {
            line: 216,
            column: 11
          }
        },
        '59': {
          start: {
            line: 212,
            column: 10
          },
          end: {
            line: 214,
            column: 13
          }
        },
        '60': {
          start: {
            line: 215,
            column: 10
          },
          end: {
            line: 215,
            column: 39
          }
        },
        '61': {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 219,
            column: 70
          }
        },
        '62': {
          start: {
            line: 227,
            column: 4
          },
          end: {
            line: 229,
            column: 7
          }
        },
        '63': {
          start: {
            line: 230,
            column: 27
          },
          end: {
            line: 231,
            column: 21
          }
        },
        '64': {
          start: {
            line: 233,
            column: 4
          },
          end: {
            line: 235,
            column: 7
          }
        },
        '65': {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        '66': {
          start: {
            line: 243,
            column: 21
          },
          end: {
            line: 243,
            column: 22
          }
        },
        '67': {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 247,
            column: 9
          }
        },
        '68': {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 248,
            column: 40
          }
        },
        '69': {
          start: {
            line: 250,
            column: 26
          },
          end: {
            line: 253,
            column: 29
          }
        },
        '70': {
          start: {
            line: 255,
            column: 27
          },
          end: {
            line: 258,
            column: 36
          }
        },
        '71': {
          start: {
            line: 260,
            column: 32
          },
          end: {
            line: 263,
            column: 38
          }
        },
        '72': {
          start: {
            line: 265,
            column: 26
          },
          end: {
            line: 265,
            column: 62
          }
        },
        '73': {
          start: {
            line: 267,
            column: 6
          },
          end: {
            line: 269,
            column: 7
          }
        },
        '74': {
          start: {
            line: 268,
            column: 8
          },
          end: {
            line: 268,
            column: 40
          }
        },
        '75': {
          start: {
            line: 271,
            column: 6
          },
          end: {
            line: 273,
            column: 7
          }
        },
        '76': {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 272,
            column: 41
          }
        },
        '77': {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 277,
            column: 7
          }
        },
        '78': {
          start: {
            line: 276,
            column: 8
          },
          end: {
            line: 276,
            column: 41
          }
        },
        '79': {
          start: {
            line: 278,
            column: 6
          },
          end: {
            line: 280,
            column: 7
          }
        },
        '80': {
          start: {
            line: 279,
            column: 8
          },
          end: {
            line: 279,
            column: 46
          }
        },
        '81': {
          start: {
            line: 288,
            column: 4
          },
          end: {
            line: 305,
            column: 5
          }
        },
        '82': {
          start: {
            line: 289,
            column: 19
          },
          end: {
            line: 289,
            column: 46
          }
        },
        '83': {
          start: {
            line: 290,
            column: 23
          },
          end: {
            line: 290,
            column: 50
          }
        },
        '84': {
          start: {
            line: 292,
            column: 6
          },
          end: {
            line: 294,
            column: 9
          }
        },
        '85': {
          start: {
            line: 295,
            column: 6
          },
          end: {
            line: 295,
            column: 42
          }
        },
        '86': {
          start: {
            line: 297,
            column: 26
          },
          end: {
            line: 300,
            column: 29
          }
        },
        '87': {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 304,
            column: 7
          }
        },
        '88': {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 40
          }
        },
        '89': {
          start: {
            line: 312,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        '90': {
          start: {
            line: 313,
            column: 19
          },
          end: {
            line: 313,
            column: 46
          }
        },
        '91': {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 317,
            column: 18
          }
        },
        '92': {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 321,
            column: 9
          }
        },
        '93': {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 322,
            column: 43
          }
        },
        '94': {
          start: {
            line: 324,
            column: 26
          },
          end: {
            line: 327,
            column: 29
          }
        },
        '95': {
          start: {
            line: 329,
            column: 6
          },
          end: {
            line: 331,
            column: 7
          }
        },
        '96': {
          start: {
            line: 330,
            column: 8
          },
          end: {
            line: 330,
            column: 40
          }
        },
        '97': {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        },
        '98': {
          start: {
            line: 340,
            column: 19
          },
          end: {
            line: 340,
            column: 46
          }
        },
        '99': {
          start: {
            line: 341,
            column: 23
          },
          end: {
            line: 341,
            column: 44
          }
        },
        '100': {
          start: {
            line: 343,
            column: 6
          },
          end: {
            line: 345,
            column: 9
          }
        },
        '101': {
          start: {
            line: 346,
            column: 6
          },
          end: {
            line: 346,
            column: 42
          }
        },
        '102': {
          start: {
            line: 348,
            column: 26
          },
          end: {
            line: 351,
            column: 29
          }
        },
        '103': {
          start: {
            line: 352,
            column: 27
          },
          end: {
            line: 355,
            column: 36
          }
        },
        '104': {
          start: {
            line: 357,
            column: 32
          },
          end: {
            line: 360,
            column: 38
          }
        },
        '105': {
          start: {
            line: 362,
            column: 27
          },
          end: {
            line: 362,
            column: 63
          }
        },
        '106': {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 366,
            column: 7
          }
        },
        '107': {
          start: {
            line: 365,
            column: 8
          },
          end: {
            line: 365,
            column: 41
          }
        },
        '108': {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 369,
            column: 7
          }
        },
        '109': {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 368,
            column: 41
          }
        },
        '110': {
          start: {
            line: 370,
            column: 6
          },
          end: {
            line: 372,
            column: 7
          }
        },
        '111': {
          start: {
            line: 371,
            column: 8
          },
          end: {
            line: 371,
            column: 42
          }
        },
        '112': {
          start: {
            line: 373,
            column: 6
          },
          end: {
            line: 375,
            column: 7
          }
        },
        '113': {
          start: {
            line: 374,
            column: 8
          },
          end: {
            line: 374,
            column: 47
          }
        },
        '114': {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 389,
            column: 7
          }
        },
        '115': {
          start: {
            line: 386,
            column: 6
          },
          end: {
            line: 388,
            column: 7
          }
        },
        '116': {
          start: {
            line: 387,
            column: 8
          },
          end: {
            line: 387,
            column: 65
          }
        },
        '117': {
          start: {
            line: 390,
            column: 4
          },
          end: {
            line: 390,
            column: 58
          }
        },
        '118': {
          start: {
            line: 393,
            column: 4
          },
          end: {
            line: 395,
            column: 5
          }
        },
        '119': {
          start: {
            line: 394,
            column: 6
          },
          end: {
            line: 394,
            column: 60
          }
        },
        '120': {
          start: {
            line: 404,
            column: 4
          },
          end: {
            line: 408,
            column: 7
          }
        },
        '121': {
          start: {
            line: 405,
            column: 6
          },
          end: {
            line: 407,
            column: 7
          }
        },
        '122': {
          start: {
            line: 406,
            column: 8
          },
          end: {
            line: 406,
            column: 65
          }
        },
        '123': {
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 409,
            column: 58
          }
        },
        '124': {
          start: {
            line: 417,
            column: 4
          },
          end: {
            line: 417,
            column: 74
          }
        },
        '125': {
          start: {
            line: 424,
            column: 18
          },
          end: {
            line: 424,
            column: 99
          }
        },
        '126': {
          start: {
            line: 424,
            column: 60
          },
          end: {
            line: 424,
            column: 98
          }
        },
        '127': {
          start: {
            line: 426,
            column: 4
          },
          end: {
            line: 428,
            column: 7
          }
        },
        '128': {
          start: {
            line: 429,
            column: 4
          },
          end: {
            line: 429,
            column: 37
          }
        },
        '129': {
          start: {
            line: 430,
            column: 20
          },
          end: {
            line: 430,
            column: 70
          }
        },
        '130': {
          start: {
            line: 432,
            column: 4
          },
          end: {
            line: 432,
            column: 29
          }
        },
        '131': {
          start: {
            line: 439,
            column: 18
          },
          end: {
            line: 439,
            column: 103
          }
        },
        '132': {
          start: {
            line: 439,
            column: 60
          },
          end: {
            line: 439,
            column: 102
          }
        },
        '133': {
          start: {
            line: 441,
            column: 4
          },
          end: {
            line: 443,
            column: 7
          }
        },
        '134': {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 444,
            column: 37
          }
        },
        '135': {
          start: {
            line: 445,
            column: 24
          },
          end: {
            line: 445,
            column: 78
          }
        },
        '136': {
          start: {
            line: 447,
            column: 4
          },
          end: {
            line: 447,
            column: 33
          }
        },
        '137': {
          start: {
            line: 454,
            column: 18
          },
          end: {
            line: 454,
            column: 103
          }
        },
        '138': {
          start: {
            line: 454,
            column: 60
          },
          end: {
            line: 454,
            column: 102
          }
        },
        '139': {
          start: {
            line: 456,
            column: 4
          },
          end: {
            line: 458,
            column: 7
          }
        },
        '140': {
          start: {
            line: 459,
            column: 4
          },
          end: {
            line: 459,
            column: 37
          }
        },
        '141': {
          start: {
            line: 460,
            column: 24
          },
          end: {
            line: 460,
            column: 78
          }
        },
        '142': {
          start: {
            line: 462,
            column: 4
          },
          end: {
            line: 462,
            column: 33
          }
        },
        '143': {
          start: {
            line: 469,
            column: 4
          },
          end: {
            line: 476,
            column: 5
          }
        },
        '144': {
          start: {
            line: 470,
            column: 29
          },
          end: {
            line: 471,
            column: 23
          }
        },
        '145': {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 475,
            column: 9
          }
        },
        '146': {
          start: {
            line: 483,
            column: 4
          },
          end: {
            line: 490,
            column: 5
          }
        },
        '147': {
          start: {
            line: 484,
            column: 29
          },
          end: {
            line: 485,
            column: 23
          }
        },
        '148': {
          start: {
            line: 487,
            column: 6
          },
          end: {
            line: 489,
            column: 9
          }
        },
        '149': {
          start: {
            line: 497,
            column: 24
          },
          end: {
            line: 500,
            column: 27
          }
        },
        '150': {
          start: {
            line: 502,
            column: 4
          },
          end: {
            line: 502,
            column: 48
          }
        },
        '151': {
          start: {
            line: 509,
            column: 27
          },
          end: {
            line: 510,
            column: 21
          }
        },
        '152': {
          start: {
            line: 512,
            column: 4
          },
          end: {
            line: 512,
            column: 40
          }
        },
        '153': {
          start: {
            line: 520,
            column: 4
          },
          end: {
            line: 524,
            column: 5
          }
        },
        '154': {
          start: {
            line: 521,
            column: 26
          },
          end: {
            line: 521,
            column: 80
          }
        },
        '155': {
          start: {
            line: 523,
            column: 6
          },
          end: {
            line: 523,
            column: 35
          }
        },
        '156': {
          start: {
            line: 533,
            column: 4
          },
          end: {
            line: 538,
            column: 5
          }
        },
        '157': {
          start: {
            line: 534,
            column: 6
          },
          end: {
            line: 534,
            column: 28
          }
        },
        '158': {
          start: {
            line: 535,
            column: 6
          },
          end: {
            line: 535,
            column: 47
          }
        },
        '159': {
          start: {
            line: 536,
            column: 11
          },
          end: {
            line: 538,
            column: 5
          }
        },
        '160': {
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 537,
            column: 17
          }
        },
        '161': {
          start: {
            line: 547,
            column: 4
          },
          end: {
            line: 619,
            column: 5
          }
        },
        '162': {
          start: {
            line: 548,
            column: 25
          },
          end: {
            line: 550,
            column: 31
          }
        },
        '163': {
          start: {
            line: 551,
            column: 19
          },
          end: {
            line: 551,
            column: 75
          }
        },
        '164': {
          start: {
            line: 553,
            column: 6
          },
          end: {
            line: 592,
            column: 7
          }
        },
        '165': {
          start: {
            line: 555,
            column: 8
          },
          end: {
            line: 555,
            column: 33
          }
        },
        '166': {
          start: {
            line: 556,
            column: 8
          },
          end: {
            line: 556,
            column: 14
          }
        },
        '167': {
          start: {
            line: 558,
            column: 8
          },
          end: {
            line: 558,
            column: 33
          }
        },
        '168': {
          start: {
            line: 559,
            column: 8
          },
          end: {
            line: 559,
            column: 14
          }
        },
        '169': {
          start: {
            line: 561,
            column: 28
          },
          end: {
            line: 563,
            column: 34
          }
        },
        '170': {
          start: {
            line: 565,
            column: 8
          },
          end: {
            line: 565,
            column: 34
          }
        },
        '171': {
          start: {
            line: 566,
            column: 8
          },
          end: {
            line: 566,
            column: 14
          }
        },
        '172': {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 568,
            column: 26
          }
        },
        '173': {
          start: {
            line: 569,
            column: 8
          },
          end: {
            line: 569,
            column: 14
          }
        },
        '174': {
          start: {
            line: 571,
            column: 8
          },
          end: {
            line: 571,
            column: 30
          }
        },
        '175': {
          start: {
            line: 572,
            column: 8
          },
          end: {
            line: 572,
            column: 14
          }
        },
        '176': {
          start: {
            line: 574,
            column: 8
          },
          end: {
            line: 574,
            column: 33
          }
        },
        '177': {
          start: {
            line: 575,
            column: 8
          },
          end: {
            line: 575,
            column: 14
          }
        },
        '178': {
          start: {
            line: 577,
            column: 28
          },
          end: {
            line: 579,
            column: 34
          }
        },
        '179': {
          start: {
            line: 581,
            column: 8
          },
          end: {
            line: 581,
            column: 34
          }
        },
        '180': {
          start: {
            line: 582,
            column: 8
          },
          end: {
            line: 582,
            column: 14
          }
        },
        '181': {
          start: {
            line: 584,
            column: 27
          },
          end: {
            line: 586,
            column: 33
          }
        },
        '182': {
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 588,
            column: 33
          }
        },
        '183': {
          start: {
            line: 589,
            column: 8
          },
          end: {
            line: 589,
            column: 14
          }
        },
        '184': {
          start: {
            line: 591,
            column: 8
          },
          end: {
            line: 591,
            column: 14
          }
        },
        '185': {
          start: {
            line: 595,
            column: 26
          },
          end: {
            line: 598,
            column: 29
          }
        },
        '186': {
          start: {
            line: 600,
            column: 27
          },
          end: {
            line: 603,
            column: 36
          }
        },
        '187': {
          start: {
            line: 605,
            column: 32
          },
          end: {
            line: 608,
            column: 38
          }
        },
        '188': {
          start: {
            line: 610,
            column: 6
          },
          end: {
            line: 612,
            column: 7
          }
        },
        '189': {
          start: {
            line: 611,
            column: 8
          },
          end: {
            line: 611,
            column: 30
          }
        },
        '190': {
          start: {
            line: 613,
            column: 6
          },
          end: {
            line: 615,
            column: 7
          }
        },
        '191': {
          start: {
            line: 614,
            column: 8
          },
          end: {
            line: 614,
            column: 31
          }
        },
        '192': {
          start: {
            line: 616,
            column: 6
          },
          end: {
            line: 618,
            column: 7
          }
        },
        '193': {
          start: {
            line: 617,
            column: 8
          },
          end: {
            line: 617,
            column: 36
          }
        },
        '194': {
          start: {
            line: 626,
            column: 21
          },
          end: {
            line: 626,
            column: 37
          }
        },
        '195': {
          start: {
            line: 628,
            column: 4
          },
          end: {
            line: 641,
            column: 5
          }
        },
        '196': {
          start: {
            line: 629,
            column: 26
          },
          end: {
            line: 636,
            column: 7
          }
        },
        '197': {
          start: {
            line: 638,
            column: 6
          },
          end: {
            line: 640,
            column: 9
          }
        },
        '198': {
          start: {
            line: 648,
            column: 4
          },
          end: {
            line: 650,
            column: 7
          }
        },
        '199': {
          start: {
            line: 657,
            column: 23
          },
          end: {
            line: 657,
            column: 27
          }
        },
        '200': {
          start: {
            line: 658,
            column: 18
          },
          end: {
            line: 658,
            column: 34
          }
        },
        '201': {
          start: {
            line: 660,
            column: 4
          },
          end: {
            line: 665,
            column: 5
          }
        },
        '202': {
          start: {
            line: 661,
            column: 6
          },
          end: {
            line: 664,
            column: 7
          }
        },
        '203': {
          start: {
            line: 662,
            column: 8
          },
          end: {
            line: 662,
            column: 29
          }
        },
        '204': {
          start: {
            line: 663,
            column: 8
          },
          end: {
            line: 663,
            column: 14
          }
        },
        '205': {
          start: {
            line: 666,
            column: 4
          },
          end: {
            line: 666,
            column: 24
          }
        },
        '206': {
          start: {
            line: 670,
            column: 23
          },
          end: {
            line: 670,
            column: 39
          }
        },
        '207': {
          start: {
            line: 672,
            column: 4
          },
          end: {
            line: 672,
            column: 29
          }
        },
        '208': {
          start: {
            line: 673,
            column: 4
          },
          end: {
            line: 675,
            column: 5
          }
        },
        '209': {
          start: {
            line: 674,
            column: 6
          },
          end: {
            line: 674,
            column: 28
          }
        },
        '210': {
          start: {
            line: 676,
            column: 4
          },
          end: {
            line: 676,
            column: 22
          }
        },
        '211': {
          start: {
            line: 679,
            column: 23
          },
          end: {
            line: 679,
            column: 39
          }
        },
        '212': {
          start: {
            line: 681,
            column: 4
          },
          end: {
            line: 683,
            column: 5
          }
        },
        '213': {
          start: {
            line: 682,
            column: 6
          },
          end: {
            line: 682,
            column: 28
          }
        },
        '214': {
          start: {
            line: 684,
            column: 4
          },
          end: {
            line: 684,
            column: 22
          }
        },
        '215': {
          start: {
            line: 688,
            column: 4
          },
          end: {
            line: 707,
            column: 5
          }
        },
        '216': {
          start: {
            line: 689,
            column: 6
          },
          end: {
            line: 706,
            column: 7
          }
        },
        '217': {
          start: {
            line: 690,
            column: 8
          },
          end: {
            line: 705,
            column: 9
          }
        },
        '218': {
          start: {
            line: 692,
            column: 10
          },
          end: {
            line: 692,
            column: 79
          }
        },
        '219': {
          start: {
            line: 693,
            column: 10
          },
          end: {
            line: 693,
            column: 16
          }
        },
        '220': {
          start: {
            line: 695,
            column: 10
          },
          end: {
            line: 695,
            column: 75
          }
        },
        '221': {
          start: {
            line: 696,
            column: 10
          },
          end: {
            line: 696,
            column: 16
          }
        },
        '222': {
          start: {
            line: 698,
            column: 10
          },
          end: {
            line: 698,
            column: 79
          }
        },
        '223': {
          start: {
            line: 699,
            column: 10
          },
          end: {
            line: 699,
            column: 16
          }
        },
        '224': {
          start: {
            line: 701,
            column: 10
          },
          end: {
            line: 701,
            column: 78
          }
        },
        '225': {
          start: {
            line: 702,
            column: 10
          },
          end: {
            line: 702,
            column: 16
          }
        },
        '226': {
          start: {
            line: 704,
            column: 10
          },
          end: {
            line: 704,
            column: 16
          }
        },
        '227': {
          start: {
            line: 712,
            column: 0
          },
          end: {
            line: 712,
            column: 28
          }
        },
        '228': {
          start: {
            line: 715,
            column: 0
          },
          end: {
            line: 715,
            column: 28
          }
        },
        '229': {
          start: {
            line: 719,
            column: 4
          },
          end: {
            line: 719,
            column: 27
          }
        },
        '230': {
          start: {
            line: 722,
            column: 4
          },
          end: {
            line: 725,
            column: 7
          }
        },
        '231': {
          start: {
            line: 728,
            column: 0
          },
          end: {
            line: 738,
            column: 2
          }
        },
        '232': {
          start: {
            line: 740,
            column: 0
          },
          end: {
            line: 740,
            column: 68
          }
        },
        '233': {
          start: {
            line: 743,
            column: 23
          },
          end: {
            line: 743,
            column: 63
          }
        },
        '234': {
          start: {
            line: 745,
            column: 0
          },
          end: {
            line: 745,
            column: 39
          }
        }
      },
      fnMap: {
        '0': {
          name: '(anonymous_0)',
          decl: {
            start: {
              line: 71,
              column: 2
            },
            end: {
              line: 71,
              column: 3
            }
          },
          loc: {
            start: {
              line: 71,
              column: 31
            },
            end: {
              line: 221,
              column: 3
            }
          },
          line: 71
        },
        '1': {
          name: '(anonymous_1)',
          decl: {
            start: {
              line: 98,
              column: 22
            },
            end: {
              line: 98,
              column: 23
            }
          },
          loc: {
            start: {
              line: 98,
              column: 28
            },
            end: {
              line: 220,
              column: 5
            }
          },
          line: 98
        },
        '2': {
          name: '(anonymous_2)',
          decl: {
            start: {
              line: 121,
              column: 42
            },
            end: {
              line: 121,
              column: 43
            }
          },
          loc: {
            start: {
              line: 121,
              column: 58
            },
            end: {
              line: 125,
              column: 11
            }
          },
          line: 121
        },
        '3': {
          name: '(anonymous_3)',
          decl: {
            start: {
              line: 148,
              column: 55
            },
            end: {
              line: 148,
              column: 56
            }
          },
          loc: {
            start: {
              line: 148,
              column: 65
            },
            end: {
              line: 148,
              column: 101
            }
          },
          line: 148
        },
        '4': {
          name: '(anonymous_4)',
          decl: {
            start: {
              line: 154,
              column: 30
            },
            end: {
              line: 154,
              column: 31
            }
          },
          loc: {
            start: {
              line: 154,
              column: 47
            },
            end: {
              line: 193,
              column: 7
            }
          },
          line: 154
        },
        '5': {
          name: '(anonymous_5)',
          decl: {
            start: {
              line: 160,
              column: 63
            },
            end: {
              line: 160,
              column: 64
            }
          },
          loc: {
            start: {
              line: 160,
              column: 73
            },
            end: {
              line: 160,
              column: 112
            }
          },
          line: 160
        },
        '6': {
          name: '(anonymous_6)',
          decl: {
            start: {
              line: 203,
              column: 50
            },
            end: {
              line: 203,
              column: 51
            }
          },
          loc: {
            start: {
              line: 203,
              column: 56
            },
            end: {
              line: 208,
              column: 9
            }
          },
          line: 203
        },
        '7': {
          name: '(anonymous_7)',
          decl: {
            start: {
              line: 211,
              column: 50
            },
            end: {
              line: 211,
              column: 51
            }
          },
          loc: {
            start: {
              line: 211,
              column: 56
            },
            end: {
              line: 216,
              column: 9
            }
          },
          line: 211
        },
        '8': {
          name: '(anonymous_8)',
          decl: {
            start: {
              line: 226,
              column: 2
            },
            end: {
              line: 226,
              column: 3
            }
          },
          loc: {
            start: {
              line: 226,
              column: 34
            },
            end: {
              line: 236,
              column: 3
            }
          },
          line: 226
        },
        '9': {
          name: '(anonymous_9)',
          decl: {
            start: {
              line: 241,
              column: 2
            },
            end: {
              line: 241,
              column: 3
            }
          },
          loc: {
            start: {
              line: 241,
              column: 22
            },
            end: {
              line: 282,
              column: 3
            }
          },
          line: 241
        },
        '10': {
          name: '(anonymous_10)',
          decl: {
            start: {
              line: 287,
              column: 2
            },
            end: {
              line: 287,
              column: 3
            }
          },
          loc: {
            start: {
              line: 287,
              column: 21
            },
            end: {
              line: 306,
              column: 3
            }
          },
          line: 287
        },
        '11': {
          name: '(anonymous_11)',
          decl: {
            start: {
              line: 311,
              column: 2
            },
            end: {
              line: 311,
              column: 3
            }
          },
          loc: {
            start: {
              line: 311,
              column: 22
            },
            end: {
              line: 333,
              column: 3
            }
          },
          line: 311
        },
        '12': {
          name: '(anonymous_12)',
          decl: {
            start: {
              line: 338,
              column: 2
            },
            end: {
              line: 338,
              column: 3
            }
          },
          loc: {
            start: {
              line: 338,
              column: 23
            },
            end: {
              line: 377,
              column: 3
            }
          },
          line: 338
        },
        '13': {
          name: '(anonymous_13)',
          decl: {
            start: {
              line: 384,
              column: 2
            },
            end: {
              line: 384,
              column: 3
            }
          },
          loc: {
            start: {
              line: 384,
              column: 59
            },
            end: {
              line: 391,
              column: 3
            }
          },
          line: 384
        },
        '14': {
          name: '(anonymous_14)',
          decl: {
            start: {
              line: 385,
              column: 43
            },
            end: {
              line: 385,
              column: 44
            }
          },
          loc: {
            start: {
              line: 385,
              column: 53
            },
            end: {
              line: 389,
              column: 5
            }
          },
          line: 385
        },
        '15': {
          name: '(anonymous_15)',
          decl: {
            start: {
              line: 392,
              column: 2
            },
            end: {
              line: 392,
              column: 3
            }
          },
          loc: {
            start: {
              line: 392,
              column: 34
            },
            end: {
              line: 396,
              column: 3
            }
          },
          line: 392
        },
        '16': {
          name: '(anonymous_16)',
          decl: {
            start: {
              line: 403,
              column: 2
            },
            end: {
              line: 403,
              column: 3
            }
          },
          loc: {
            start: {
              line: 403,
              column: 37
            },
            end: {
              line: 410,
              column: 3
            }
          },
          line: 403
        },
        '17': {
          name: '(anonymous_17)',
          decl: {
            start: {
              line: 404,
              column: 43
            },
            end: {
              line: 404,
              column: 44
            }
          },
          loc: {
            start: {
              line: 404,
              column: 53
            },
            end: {
              line: 408,
              column: 5
            }
          },
          line: 404
        },
        '18': {
          name: '(anonymous_18)',
          decl: {
            start: {
              line: 416,
              column: 2
            },
            end: {
              line: 416,
              column: 3
            }
          },
          loc: {
            start: {
              line: 416,
              column: 24
            },
            end: {
              line: 418,
              column: 3
            }
          },
          line: 416
        },
        '19': {
          name: '(anonymous_19)',
          decl: {
            start: {
              line: 423,
              column: 2
            },
            end: {
              line: 423,
              column: 3
            }
          },
          loc: {
            start: {
              line: 423,
              column: 15
            },
            end: {
              line: 433,
              column: 3
            }
          },
          line: 423
        },
        '20': {
          name: '(anonymous_20)',
          decl: {
            start: {
              line: 424,
              column: 50
            },
            end: {
              line: 424,
              column: 51
            }
          },
          loc: {
            start: {
              line: 424,
              column: 60
            },
            end: {
              line: 424,
              column: 98
            }
          },
          line: 424
        },
        '21': {
          name: '(anonymous_21)',
          decl: {
            start: {
              line: 438,
              column: 2
            },
            end: {
              line: 438,
              column: 3
            }
          },
          loc: {
            start: {
              line: 438,
              column: 23
            },
            end: {
              line: 448,
              column: 3
            }
          },
          line: 438
        },
        '22': {
          name: '(anonymous_22)',
          decl: {
            start: {
              line: 439,
              column: 50
            },
            end: {
              line: 439,
              column: 51
            }
          },
          loc: {
            start: {
              line: 439,
              column: 60
            },
            end: {
              line: 439,
              column: 102
            }
          },
          line: 439
        },
        '23': {
          name: '(anonymous_23)',
          decl: {
            start: {
              line: 453,
              column: 2
            },
            end: {
              line: 453,
              column: 3
            }
          },
          loc: {
            start: {
              line: 453,
              column: 19
            },
            end: {
              line: 463,
              column: 3
            }
          },
          line: 453
        },
        '24': {
          name: '(anonymous_24)',
          decl: {
            start: {
              line: 454,
              column: 50
            },
            end: {
              line: 454,
              column: 51
            }
          },
          loc: {
            start: {
              line: 454,
              column: 60
            },
            end: {
              line: 454,
              column: 102
            }
          },
          line: 454
        },
        '25': {
          name: '(anonymous_25)',
          decl: {
            start: {
              line: 468,
              column: 2
            },
            end: {
              line: 468,
              column: 3
            }
          },
          loc: {
            start: {
              line: 468,
              column: 20
            },
            end: {
              line: 477,
              column: 3
            }
          },
          line: 468
        },
        '26': {
          name: '(anonymous_26)',
          decl: {
            start: {
              line: 482,
              column: 2
            },
            end: {
              line: 482,
              column: 3
            }
          },
          loc: {
            start: {
              line: 482,
              column: 20
            },
            end: {
              line: 491,
              column: 3
            }
          },
          line: 482
        },
        '27': {
          name: '(anonymous_27)',
          decl: {
            start: {
              line: 496,
              column: 2
            },
            end: {
              line: 496,
              column: 3
            }
          },
          loc: {
            start: {
              line: 496,
              column: 34
            },
            end: {
              line: 503,
              column: 3
            }
          },
          line: 496
        },
        '28': {
          name: '(anonymous_28)',
          decl: {
            start: {
              line: 508,
              column: 2
            },
            end: {
              line: 508,
              column: 3
            }
          },
          loc: {
            start: {
              line: 508,
              column: 22
            },
            end: {
              line: 513,
              column: 3
            }
          },
          line: 508
        },
        '29': {
          name: '(anonymous_29)',
          decl: {
            start: {
              line: 519,
              column: 2
            },
            end: {
              line: 519,
              column: 3
            }
          },
          loc: {
            start: {
              line: 519,
              column: 19
            },
            end: {
              line: 525,
              column: 3
            }
          },
          line: 519
        },
        '30': {
          name: '(anonymous_30)',
          decl: {
            start: {
              line: 532,
              column: 2
            },
            end: {
              line: 532,
              column: 3
            }
          },
          loc: {
            start: {
              line: 532,
              column: 19
            },
            end: {
              line: 539,
              column: 3
            }
          },
          line: 532
        },
        '31': {
          name: '(anonymous_31)',
          decl: {
            start: {
              line: 546,
              column: 2
            },
            end: {
              line: 546,
              column: 3
            }
          },
          loc: {
            start: {
              line: 546,
              column: 12
            },
            end: {
              line: 620,
              column: 3
            }
          },
          line: 546
        },
        '32': {
          name: '(anonymous_32)',
          decl: {
            start: {
              line: 625,
              column: 2
            },
            end: {
              line: 625,
              column: 3
            }
          },
          loc: {
            start: {
              line: 625,
              column: 28
            },
            end: {
              line: 642,
              column: 3
            }
          },
          line: 625
        },
        '33': {
          name: '(anonymous_33)',
          decl: {
            start: {
              line: 647,
              column: 2
            },
            end: {
              line: 647,
              column: 3
            }
          },
          loc: {
            start: {
              line: 647,
              column: 21
            },
            end: {
              line: 651,
              column: 3
            }
          },
          line: 647
        },
        '34': {
          name: '(anonymous_34)',
          decl: {
            start: {
              line: 656,
              column: 2
            },
            end: {
              line: 656,
              column: 3
            }
          },
          loc: {
            start: {
              line: 656,
              column: 23
            },
            end: {
              line: 667,
              column: 3
            }
          },
          line: 656
        },
        '35': {
          name: '(anonymous_35)',
          decl: {
            start: {
              line: 669,
              column: 2
            },
            end: {
              line: 669,
              column: 3
            }
          },
          loc: {
            start: {
              line: 669,
              column: 30
            },
            end: {
              line: 677,
              column: 3
            }
          },
          line: 669
        },
        '36': {
          name: '(anonymous_36)',
          decl: {
            start: {
              line: 678,
              column: 2
            },
            end: {
              line: 678,
              column: 3
            }
          },
          loc: {
            start: {
              line: 678,
              column: 28
            },
            end: {
              line: 685,
              column: 3
            }
          },
          line: 678
        },
        '37': {
          name: '(anonymous_37)',
          decl: {
            start: {
              line: 687,
              column: 2
            },
            end: {
              line: 687,
              column: 3
            }
          },
          loc: {
            start: {
              line: 687,
              column: 19
            },
            end: {
              line: 708,
              column: 3
            }
          },
          line: 687
        },
        '38': {
          name: '(anonymous_38)',
          decl: {
            start: {
              line: 718,
              column: 2
            },
            end: {
              line: 718,
              column: 3
            }
          },
          loc: {
            start: {
              line: 718,
              column: 31
            },
            end: {
              line: 720,
              column: 3
            }
          },
          line: 718
        },
        '39': {
          name: '(anonymous_39)',
          decl: {
            start: {
              line: 721,
              column: 2
            },
            end: {
              line: 721,
              column: 3
            }
          },
          loc: {
            start: {
              line: 721,
              column: 13
            },
            end: {
              line: 726,
              column: 3
            }
          },
          line: 721
        }
      },
      branchMap: {
        '0': {
          loc: {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          }, {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 105,
              column: 7
            }
          }],
          line: 101
        },
        '1': {
          loc: {
            start: {
              line: 120,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 120,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          }, {
            start: {
              line: 120,
              column: 8
            },
            end: {
              line: 126,
              column: 9
            }
          }],
          line: 120
        },
        '2': {
          loc: {
            start: {
              line: 122,
              column: 12
            },
            end: {
              line: 124,
              column: 13
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 122,
              column: 12
            },
            end: {
              line: 124,
              column: 13
            }
          }, {
            start: {
              line: 122,
              column: 12
            },
            end: {
              line: 124,
              column: 13
            }
          }],
          line: 122
        },
        '3': {
          loc: {
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          }, {
            start: {
              line: 139,
              column: 6
            },
            end: {
              line: 151,
              column: 7
            }
          }],
          line: 139
        },
        '4': {
          loc: {
            start: {
              line: 140,
              column: 8
            },
            end: {
              line: 142,
              column: 43
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 140,
              column: 8
            },
            end: {
              line: 140,
              column: 29
            }
          }, {
            start: {
              line: 141,
              column: 8
            },
            end: {
              line: 141,
              column: 21
            }
          }, {
            start: {
              line: 142,
              column: 8
            },
            end: {
              line: 142,
              column: 43
            }
          }],
          line: 140
        },
        '5': {
          loc: {
            start: {
              line: 148,
              column: 65
            },
            end: {
              line: 148,
              column: 101
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 148,
              column: 65
            },
            end: {
              line: 148,
              column: 69
            }
          }, {
            start: {
              line: 148,
              column: 73
            },
            end: {
              line: 148,
              column: 101
            }
          }],
          line: 148
        },
        '6': {
          loc: {
            start: {
              line: 156,
              column: 8
            },
            end: {
              line: 192,
              column: 9
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 156,
              column: 8
            },
            end: {
              line: 192,
              column: 9
            }
          }, {
            start: {
              line: 156,
              column: 8
            },
            end: {
              line: 192,
              column: 9
            }
          }],
          line: 156
        },
        '7': {
          loc: {
            start: {
              line: 156,
              column: 12
            },
            end: {
              line: 156,
              column: 63
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 156,
              column: 12
            },
            end: {
              line: 156,
              column: 25
            }
          }, {
            start: {
              line: 156,
              column: 29
            },
            end: {
              line: 156,
              column: 63
            }
          }],
          line: 156
        },
        '8': {
          loc: {
            start: {
              line: 160,
              column: 73
            },
            end: {
              line: 160,
              column: 112
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 160,
              column: 73
            },
            end: {
              line: 160,
              column: 77
            }
          }, {
            start: {
              line: 160,
              column: 81
            },
            end: {
              line: 160,
              column: 112
            }
          }],
          line: 160
        },
        '9': {
          loc: {
            start: {
              line: 162,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 162,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          }, {
            start: {
              line: 162,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          }],
          line: 162
        },
        '10': {
          loc: {
            start: {
              line: 168,
              column: 10
            },
            end: {
              line: 176,
              column: 11
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 168,
              column: 10
            },
            end: {
              line: 176,
              column: 11
            }
          }, {
            start: {
              line: 168,
              column: 10
            },
            end: {
              line: 176,
              column: 11
            }
          }],
          line: 168
        },
        '11': {
          loc: {
            start: {
              line: 177,
              column: 10
            },
            end: {
              line: 191,
              column: 11
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 177,
              column: 10
            },
            end: {
              line: 191,
              column: 11
            }
          }, {
            start: {
              line: 177,
              column: 10
            },
            end: {
              line: 191,
              column: 11
            }
          }],
          line: 177
        },
        '12': {
          loc: {
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }, {
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }],
          line: 199
        },
        '13': {
          loc: {
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 209,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 209,
              column: 7
            }
          }, {
            start: {
              line: 202,
              column: 6
            },
            end: {
              line: 209,
              column: 7
            }
          }],
          line: 202
        },
        '14': {
          loc: {
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }, {
            start: {
              line: 210,
              column: 6
            },
            end: {
              line: 217,
              column: 7
            }
          }],
          line: 210
        },
        '15': {
          loc: {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }, {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 281,
              column: 5
            }
          }],
          line: 242
        },
        '16': {
          loc: {
            start: {
              line: 267,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 267,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          }, {
            start: {
              line: 267,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          }],
          line: 267
        },
        '17': {
          loc: {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          }, {
            start: {
              line: 271,
              column: 6
            },
            end: {
              line: 273,
              column: 7
            }
          }],
          line: 271
        },
        '18': {
          loc: {
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 277,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 277,
              column: 7
            }
          }, {
            start: {
              line: 275,
              column: 6
            },
            end: {
              line: 277,
              column: 7
            }
          }],
          line: 275
        },
        '19': {
          loc: {
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 280,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 280,
              column: 7
            }
          }, {
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 280,
              column: 7
            }
          }],
          line: 278
        },
        '20': {
          loc: {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }, {
            start: {
              line: 288,
              column: 4
            },
            end: {
              line: 305,
              column: 5
            }
          }],
          line: 288
        },
        '21': {
          loc: {
            start: {
              line: 290,
              column: 23
            },
            end: {
              line: 290,
              column: 50
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 290,
              column: 38
            },
            end: {
              line: 290,
              column: 39
            }
          }, {
            start: {
              line: 290,
              column: 42
            },
            end: {
              line: 290,
              column: 50
            }
          }],
          line: 290
        },
        '22': {
          loc: {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }, {
            start: {
              line: 302,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }],
          line: 302
        },
        '23': {
          loc: {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }, {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 332,
              column: 5
            }
          }],
          line: 312
        },
        '24': {
          loc: {
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 317,
              column: 18
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 316,
              column: 10
            },
            end: {
              line: 316,
              column: 42
            }
          }, {
            start: {
              line: 317,
              column: 10
            },
            end: {
              line: 317,
              column: 18
            }
          }],
          line: 315
        },
        '25': {
          loc: {
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 331,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 331,
              column: 7
            }
          }, {
            start: {
              line: 329,
              column: 6
            },
            end: {
              line: 331,
              column: 7
            }
          }],
          line: 329
        },
        '26': {
          loc: {
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }, {
            start: {
              line: 339,
              column: 4
            },
            end: {
              line: 376,
              column: 5
            }
          }],
          line: 339
        },
        '27': {
          loc: {
            start: {
              line: 341,
              column: 23
            },
            end: {
              line: 341,
              column: 44
            }
          },
          type: 'cond-expr',
          locations: [{
            start: {
              line: 341,
              column: 36
            },
            end: {
              line: 341,
              column: 37
            }
          }, {
            start: {
              line: 341,
              column: 40
            },
            end: {
              line: 341,
              column: 44
            }
          }],
          line: 341
        },
        '28': {
          loc: {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          }, {
            start: {
              line: 364,
              column: 6
            },
            end: {
              line: 366,
              column: 7
            }
          }],
          line: 364
        },
        '29': {
          loc: {
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }, {
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }],
          line: 367
        },
        '30': {
          loc: {
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          }, {
            start: {
              line: 370,
              column: 6
            },
            end: {
              line: 372,
              column: 7
            }
          }],
          line: 370
        },
        '31': {
          loc: {
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          }, {
            start: {
              line: 373,
              column: 6
            },
            end: {
              line: 375,
              column: 7
            }
          }],
          line: 373
        },
        '32': {
          loc: {
            start: {
              line: 384,
              column: 29
            },
            end: {
              line: 384,
              column: 57
            }
          },
          type: 'default-arg',
          locations: [{
            start: {
              line: 384,
              column: 52
            },
            end: {
              line: 384,
              column: 57
            }
          }],
          line: 384
        },
        '33': {
          loc: {
            start: {
              line: 386,
              column: 6
            },
            end: {
              line: 388,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 386,
              column: 6
            },
            end: {
              line: 388,
              column: 7
            }
          }, {
            start: {
              line: 386,
              column: 6
            },
            end: {
              line: 388,
              column: 7
            }
          }],
          line: 386
        },
        '34': {
          loc: {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          }, {
            start: {
              line: 405,
              column: 6
            },
            end: {
              line: 407,
              column: 7
            }
          }],
          line: 405
        },
        '35': {
          loc: {
            start: {
              line: 417,
              column: 11
            },
            end: {
              line: 417,
              column: 73
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 417,
              column: 11
            },
            end: {
              line: 417,
              column: 44
            }
          }, {
            start: {
              line: 417,
              column: 48
            },
            end: {
              line: 417,
              column: 73
            }
          }],
          line: 417
        },
        '36': {
          loc: {
            start: {
              line: 424,
              column: 60
            },
            end: {
              line: 424,
              column: 98
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 424,
              column: 60
            },
            end: {
              line: 424,
              column: 70
            }
          }, {
            start: {
              line: 424,
              column: 74
            },
            end: {
              line: 424,
              column: 98
            }
          }],
          line: 424
        },
        '37': {
          loc: {
            start: {
              line: 439,
              column: 60
            },
            end: {
              line: 439,
              column: 102
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 439,
              column: 60
            },
            end: {
              line: 439,
              column: 70
            }
          }, {
            start: {
              line: 439,
              column: 74
            },
            end: {
              line: 439,
              column: 102
            }
          }],
          line: 439
        },
        '38': {
          loc: {
            start: {
              line: 454,
              column: 60
            },
            end: {
              line: 454,
              column: 102
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 454,
              column: 60
            },
            end: {
              line: 454,
              column: 70
            }
          }, {
            start: {
              line: 454,
              column: 74
            },
            end: {
              line: 454,
              column: 102
            }
          }],
          line: 454
        },
        '39': {
          loc: {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 476,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 476,
              column: 5
            }
          }, {
            start: {
              line: 469,
              column: 4
            },
            end: {
              line: 476,
              column: 5
            }
          }],
          line: 469
        },
        '40': {
          loc: {
            start: {
              line: 483,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 483,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          }, {
            start: {
              line: 483,
              column: 4
            },
            end: {
              line: 490,
              column: 5
            }
          }],
          line: 483
        },
        '41': {
          loc: {
            start: {
              line: 520,
              column: 4
            },
            end: {
              line: 524,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 520,
              column: 4
            },
            end: {
              line: 524,
              column: 5
            }
          }, {
            start: {
              line: 520,
              column: 4
            },
            end: {
              line: 524,
              column: 5
            }
          }],
          line: 520
        },
        '42': {
          loc: {
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          }, {
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 538,
              column: 5
            }
          }],
          line: 533
        },
        '43': {
          loc: {
            start: {
              line: 536,
              column: 11
            },
            end: {
              line: 538,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 536,
              column: 11
            },
            end: {
              line: 538,
              column: 5
            }
          }, {
            start: {
              line: 536,
              column: 11
            },
            end: {
              line: 538,
              column: 5
            }
          }],
          line: 536
        },
        '44': {
          loc: {
            start: {
              line: 547,
              column: 4
            },
            end: {
              line: 619,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 547,
              column: 4
            },
            end: {
              line: 619,
              column: 5
            }
          }, {
            start: {
              line: 547,
              column: 4
            },
            end: {
              line: 619,
              column: 5
            }
          }],
          line: 547
        },
        '45': {
          loc: {
            start: {
              line: 553,
              column: 6
            },
            end: {
              line: 592,
              column: 7
            }
          },
          type: 'switch',
          locations: [{
            start: {
              line: 554,
              column: 6
            },
            end: {
              line: 556,
              column: 14
            }
          }, {
            start: {
              line: 557,
              column: 6
            },
            end: {
              line: 559,
              column: 14
            }
          }, {
            start: {
              line: 560,
              column: 6
            },
            end: {
              line: 566,
              column: 14
            }
          }, {
            start: {
              line: 567,
              column: 6
            },
            end: {
              line: 569,
              column: 14
            }
          }, {
            start: {
              line: 570,
              column: 6
            },
            end: {
              line: 572,
              column: 14
            }
          }, {
            start: {
              line: 573,
              column: 6
            },
            end: {
              line: 575,
              column: 14
            }
          }, {
            start: {
              line: 576,
              column: 6
            },
            end: {
              line: 582,
              column: 14
            }
          }, {
            start: {
              line: 583,
              column: 6
            },
            end: {
              line: 589,
              column: 14
            }
          }, {
            start: {
              line: 590,
              column: 6
            },
            end: {
              line: 591,
              column: 14
            }
          }],
          line: 553
        },
        '46': {
          loc: {
            start: {
              line: 610,
              column: 6
            },
            end: {
              line: 612,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 610,
              column: 6
            },
            end: {
              line: 612,
              column: 7
            }
          }, {
            start: {
              line: 610,
              column: 6
            },
            end: {
              line: 612,
              column: 7
            }
          }],
          line: 610
        },
        '47': {
          loc: {
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          }, {
            start: {
              line: 613,
              column: 6
            },
            end: {
              line: 615,
              column: 7
            }
          }],
          line: 613
        },
        '48': {
          loc: {
            start: {
              line: 616,
              column: 6
            },
            end: {
              line: 618,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 616,
              column: 6
            },
            end: {
              line: 618,
              column: 7
            }
          }, {
            start: {
              line: 616,
              column: 6
            },
            end: {
              line: 618,
              column: 7
            }
          }],
          line: 616
        },
        '49': {
          loc: {
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 641,
              column: 5
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 641,
              column: 5
            }
          }, {
            start: {
              line: 628,
              column: 4
            },
            end: {
              line: 641,
              column: 5
            }
          }],
          line: 628
        },
        '50': {
          loc: {
            start: {
              line: 661,
              column: 6
            },
            end: {
              line: 664,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 661,
              column: 6
            },
            end: {
              line: 664,
              column: 7
            }
          }, {
            start: {
              line: 661,
              column: 6
            },
            end: {
              line: 664,
              column: 7
            }
          }],
          line: 661
        },
        '51': {
          loc: {
            start: {
              line: 689,
              column: 6
            },
            end: {
              line: 706,
              column: 7
            }
          },
          type: 'if',
          locations: [{
            start: {
              line: 689,
              column: 6
            },
            end: {
              line: 706,
              column: 7
            }
          }, {
            start: {
              line: 689,
              column: 6
            },
            end: {
              line: 706,
              column: 7
            }
          }],
          line: 689
        },
        '52': {
          loc: {
            start: {
              line: 690,
              column: 8
            },
            end: {
              line: 705,
              column: 9
            }
          },
          type: 'switch',
          locations: [{
            start: {
              line: 691,
              column: 8
            },
            end: {
              line: 693,
              column: 16
            }
          }, {
            start: {
              line: 694,
              column: 8
            },
            end: {
              line: 696,
              column: 16
            }
          }, {
            start: {
              line: 697,
              column: 8
            },
            end: {
              line: 699,
              column: 16
            }
          }, {
            start: {
              line: 700,
              column: 8
            },
            end: {
              line: 702,
              column: 16
            }
          }, {
            start: {
              line: 703,
              column: 8
            },
            end: {
              line: 704,
              column: 16
            }
          }],
          line: 690
        },
        '53': {
          loc: {
            start: {
              line: 743,
              column: 23
            },
            end: {
              line: 743,
              column: 63
            }
          },
          type: 'binary-expr',
          locations: [{
            start: {
              line: 743,
              column: 23
            },
            end: {
              line: 743,
              column: 45
            }
          }, {
            start: {
              line: 743,
              column: 49
            },
            end: {
              line: 743,
              column: 63
            }
          }],
          line: 743
        }
      },
      s: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0,
        '40': 0,
        '41': 0,
        '42': 0,
        '43': 0,
        '44': 0,
        '45': 0,
        '46': 0,
        '47': 0,
        '48': 0,
        '49': 0,
        '50': 0,
        '51': 0,
        '52': 0,
        '53': 0,
        '54': 0,
        '55': 0,
        '56': 0,
        '57': 0,
        '58': 0,
        '59': 0,
        '60': 0,
        '61': 0,
        '62': 0,
        '63': 0,
        '64': 0,
        '65': 0,
        '66': 0,
        '67': 0,
        '68': 0,
        '69': 0,
        '70': 0,
        '71': 0,
        '72': 0,
        '73': 0,
        '74': 0,
        '75': 0,
        '76': 0,
        '77': 0,
        '78': 0,
        '79': 0,
        '80': 0,
        '81': 0,
        '82': 0,
        '83': 0,
        '84': 0,
        '85': 0,
        '86': 0,
        '87': 0,
        '88': 0,
        '89': 0,
        '90': 0,
        '91': 0,
        '92': 0,
        '93': 0,
        '94': 0,
        '95': 0,
        '96': 0,
        '97': 0,
        '98': 0,
        '99': 0,
        '100': 0,
        '101': 0,
        '102': 0,
        '103': 0,
        '104': 0,
        '105': 0,
        '106': 0,
        '107': 0,
        '108': 0,
        '109': 0,
        '110': 0,
        '111': 0,
        '112': 0,
        '113': 0,
        '114': 0,
        '115': 0,
        '116': 0,
        '117': 0,
        '118': 0,
        '119': 0,
        '120': 0,
        '121': 0,
        '122': 0,
        '123': 0,
        '124': 0,
        '125': 0,
        '126': 0,
        '127': 0,
        '128': 0,
        '129': 0,
        '130': 0,
        '131': 0,
        '132': 0,
        '133': 0,
        '134': 0,
        '135': 0,
        '136': 0,
        '137': 0,
        '138': 0,
        '139': 0,
        '140': 0,
        '141': 0,
        '142': 0,
        '143': 0,
        '144': 0,
        '145': 0,
        '146': 0,
        '147': 0,
        '148': 0,
        '149': 0,
        '150': 0,
        '151': 0,
        '152': 0,
        '153': 0,
        '154': 0,
        '155': 0,
        '156': 0,
        '157': 0,
        '158': 0,
        '159': 0,
        '160': 0,
        '161': 0,
        '162': 0,
        '163': 0,
        '164': 0,
        '165': 0,
        '166': 0,
        '167': 0,
        '168': 0,
        '169': 0,
        '170': 0,
        '171': 0,
        '172': 0,
        '173': 0,
        '174': 0,
        '175': 0,
        '176': 0,
        '177': 0,
        '178': 0,
        '179': 0,
        '180': 0,
        '181': 0,
        '182': 0,
        '183': 0,
        '184': 0,
        '185': 0,
        '186': 0,
        '187': 0,
        '188': 0,
        '189': 0,
        '190': 0,
        '191': 0,
        '192': 0,
        '193': 0,
        '194': 0,
        '195': 0,
        '196': 0,
        '197': 0,
        '198': 0,
        '199': 0,
        '200': 0,
        '201': 0,
        '202': 0,
        '203': 0,
        '204': 0,
        '205': 0,
        '206': 0,
        '207': 0,
        '208': 0,
        '209': 0,
        '210': 0,
        '211': 0,
        '212': 0,
        '213': 0,
        '214': 0,
        '215': 0,
        '216': 0,
        '217': 0,
        '218': 0,
        '219': 0,
        '220': 0,
        '221': 0,
        '222': 0,
        '223': 0,
        '224': 0,
        '225': 0,
        '226': 0,
        '227': 0,
        '228': 0,
        '229': 0,
        '230': 0,
        '231': 0,
        '232': 0,
        '233': 0,
        '234': 0
      },
      f: {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
        '24': 0,
        '25': 0,
        '26': 0,
        '27': 0,
        '28': 0,
        '29': 0,
        '30': 0,
        '31': 0,
        '32': 0,
        '33': 0,
        '34': 0,
        '35': 0,
        '36': 0,
        '37': 0,
        '38': 0,
        '39': 0
      },
      b: {
        '0': [0, 0],
        '1': [0, 0],
        '2': [0, 0],
        '3': [0, 0],
        '4': [0, 0, 0],
        '5': [0, 0],
        '6': [0, 0],
        '7': [0, 0],
        '8': [0, 0],
        '9': [0, 0],
        '10': [0, 0],
        '11': [0, 0],
        '12': [0, 0],
        '13': [0, 0],
        '14': [0, 0],
        '15': [0, 0],
        '16': [0, 0],
        '17': [0, 0],
        '18': [0, 0],
        '19': [0, 0],
        '20': [0, 0],
        '21': [0, 0],
        '22': [0, 0],
        '23': [0, 0],
        '24': [0, 0],
        '25': [0, 0],
        '26': [0, 0],
        '27': [0, 0],
        '28': [0, 0],
        '29': [0, 0],
        '30': [0, 0],
        '31': [0, 0],
        '32': [0],
        '33': [0, 0],
        '34': [0, 0],
        '35': [0, 0],
        '36': [0, 0],
        '37': [0, 0],
        '38': [0, 0],
        '39': [0, 0],
        '40': [0, 0],
        '41': [0, 0],
        '42': [0, 0],
        '43': [0, 0],
        '44': [0, 0],
        '45': [0, 0, 0, 0, 0, 0, 0, 0, 0],
        '46': [0, 0],
        '47': [0, 0],
        '48': [0, 0],
        '49': [0, 0],
        '50': [0, 0],
        '51': [0, 0],
        '52': [0, 0, 0, 0, 0],
        '53': [0, 0]
      },
      _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  var Plugin = (cov_188aayz4dz.s[0]++, videojs.getPlugin('plugin'));
  var Component$h = (cov_188aayz4dz.s[1]++, videojs.getComponent('component'));
  var defaults$a = (cov_188aayz4dz.s[2]++, {
    isTopSubtitleDisable: false,
    fontSize: ['s', 'm', 'l'],
    defaultFontSize: 's',
    info: {
      chipName: '',
      episode: '',
      chipCaptions: '',
      chipDesc: '',
      chipTotal: 0,
      isMovie: 0,
      chipActiveTotal: 0,
      userLevel: '',
      pUrl: '',
      showPremium: true,
      offlineTime: '',
      offlineTimeFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    advance: {
      resolutionList: ['s1080p', 's720p', 's480p', 's240p'],
      defaultResolution: 's720p',
      cdnList: ['url', 'url2'],
      defaultCdn: '',
      isCDNOpen: true,
      isThrottle: false
    }
  });

  var ViuPlayer = /*#__PURE__*/function (_Plugin) {
    _inherits(ViuPlayer, _Plugin);

    var _super = _createSuper(ViuPlayer);

    function ViuPlayer(player, options) {
      var _this;

      _classCallCheck(this, ViuPlayer);

      cov_188aayz4dz.f[0]++;
      cov_188aayz4dz.s[3]++;
      _this = _super.call(this, player);
      cov_188aayz4dz.s[4]++;
      _this.options = videojs.mergeOptions(defaults$a, options);
      cov_188aayz4dz.s[5]++;

      _this.player.addChild('ViuPlayerComponent', _this.options);

      cov_188aayz4dz.s[6]++;

      _this.player.addChild('viuInfoPanel', _this.options);

      cov_188aayz4dz.s[7]++;

      _this.player.addChild('viuSubtitlePanel', _this.options);

      cov_188aayz4dz.s[8]++;

      _this.player.addChild('viuFontSizePanel', _this.options);

      cov_188aayz4dz.s[9]++;

      _this.player.addChild('viuAdvancePanel', _this.options);

      cov_188aayz4dz.s[10]++;

      _this.player.addChild('viuControlBarBackground', _this.options);

      cov_188aayz4dz.s[11]++;

      _this.player.addChild('LoadingTips', _this.options);

      cov_188aayz4dz.s[12]++;
      _this.state = {
        isTopSubtitle: true,
        isActionSelected: 0,
        actionArea: [],
        isTopSubtitleDisable: false,
        topSubtitleIndex: null,
        panel: {
          isSubtileAreaSelected: false,
          isInfoAreaSelected: false,
          isFontSizeAreaSelected: false,
          isAdvanceAreaSelected: false
        }
      };
      cov_188aayz4dz.s[13]++;

      _this.player.ready(function () {
        cov_188aayz4dz.f[1]++;
        cov_188aayz4dz.s[14]++;

        _this.player.addClass('vjs-viu-player');

        cov_188aayz4dz.s[15]++;

        if (_this.player.getChild('ViuPlayerComponent')) {
          cov_188aayz4dz.b[0][0]++;
          cov_188aayz4dz.s[16]++;

          _this.player.getChild('ViuPlayerComponent').addChild('viuProcessInfo', _this.options.info);
        } else {
          cov_188aayz4dz.b[0][1]++;
        }

        var originActionArea = (cov_188aayz4dz.s[17]++, [_this.player.getChild('ViuPlayerComponent').controlBar, _this.player.getChild('ViuPlayerComponent').playToggle, _this.player.getChild('ViuPlayerComponent').viuNextChip, _this.player.getChild('ViuPlayerComponent').viuInfo, _this.player.getChild('ViuPlayerComponent').viuSubtitle, _this.player.getChild('ViuPlayerComponent').viuAdvance, _this.player.getChild('ViuPlayerComponent').viuTopSubtitle, _this.player.getChild('ViuPlayerComponent').viuFontSize]);
        cov_188aayz4dz.s[18]++;

        for (var j = 0; j < originActionArea.length; j++) {
          cov_188aayz4dz.s[19]++;

          if (originActionArea[j]) {
            cov_188aayz4dz.b[1][0]++;
            cov_188aayz4dz.s[20]++;
            originActionArea[j].on('click', function (event) {
              cov_188aayz4dz.f[2]++;
              cov_188aayz4dz.s[21]++;

              if (Object.prototype.hasOwnProperty.call(this, 'blur')) {
                cov_188aayz4dz.b[2][0]++;
                cov_188aayz4dz.s[22]++;
                this.blur();
              } else {
                cov_188aayz4dz.b[2][1]++;
              }
            });
          } else {
            cov_188aayz4dz.b[1][1]++;
          }
        }

        cov_188aayz4dz.s[23]++;
        _this.originActionArea = originActionArea.slice();
        cov_188aayz4dz.s[24]++;
        _this.defaultActionArea = originActionArea;

        var _ref = (cov_188aayz4dz.s[25]++, _this.options.info),
            chipTotal = _ref.chipTotal,
            episode = _ref.episode,
            isMovie = _ref.isMovie,
            chipActiveTotal = _ref.chipActiveTotal;

        cov_188aayz4dz.s[26]++;

        if ((cov_188aayz4dz.b[4][0]++, chipTotal === episode) || (cov_188aayz4dz.b[4][1]++, isMovie === 1) || (cov_188aayz4dz.b[4][2]++, Number(episode) === chipActiveTotal)) {
          cov_188aayz4dz.b[3][0]++;
          var viuNextChipBtn = (cov_188aayz4dz.s[27]++, _this.player.getChild('ViuPlayerComponent').viuNextChip);
          cov_188aayz4dz.s[28]++;
          viuNextChipBtn.addClass('hidden');
          var index = (cov_188aayz4dz.s[29]++, _this.defaultActionArea.findIndex(function (item) {
            cov_188aayz4dz.f[3]++;
            cov_188aayz4dz.s[30]++;
            return (cov_188aayz4dz.b[5][0]++, item) && (cov_188aayz4dz.b[5][1]++, item.name_ === 'ViuNextChip');
          }));
          cov_188aayz4dz.s[31]++;

          _this.defaultActionArea.splice(index, 1);
        } else {
          cov_188aayz4dz.b[3][1]++;
        }

        cov_188aayz4dz.s[32]++;

        _this.on('statechanged', function (event, data) {
          cov_188aayz4dz.f[4]++;
          cov_188aayz4dz.s[33]++;

          if ((cov_188aayz4dz.b[7][0]++, event.changes) && (cov_188aayz4dz.b[7][1]++, event.changes.isTopSubtitleDisable)) {
            cov_188aayz4dz.b[6][0]++;
            var changeActionArea = (cov_188aayz4dz.s[34]++, _this.state.actionArea);
            var viuTopSubtitleBtn = (cov_188aayz4dz.s[35]++, _this.player.getChild('ViuPlayerComponent').viuTopSubtitle);
            var currentIndex = (cov_188aayz4dz.s[36]++, _this.state.actionArea.findIndex(function (item) {
              cov_188aayz4dz.f[5]++;
              cov_188aayz4dz.s[37]++;
              return (cov_188aayz4dz.b[8][0]++, item) && (cov_188aayz4dz.b[8][1]++, item.name_ === 'ViuTopSubtitle');
            }));
            cov_188aayz4dz.s[38]++;

            if (currentIndex > -1) {
              cov_188aayz4dz.b[9][0]++;
              cov_188aayz4dz.s[39]++;

              _this.setState({
                topSubtitleIndex: currentIndex
              });
            } else {
              cov_188aayz4dz.b[9][1]++;
            }

            cov_188aayz4dz.s[40]++;

            if (event.changes.isTopSubtitleDisable.to) {
              cov_188aayz4dz.b[10][0]++;
              cov_188aayz4dz.s[41]++;
              changeActionArea.splice(currentIndex, 1);
            } else {
              cov_188aayz4dz.b[10][1]++;
              cov_188aayz4dz.s[42]++;
              changeActionArea.splice(_this.state.topSubtitleIndex, 0, viuTopSubtitleBtn);
            }

            cov_188aayz4dz.s[43]++;

            if (_this.state.isActionSelected !== 0) {
              cov_188aayz4dz.b[11][0]++;
              cov_188aayz4dz.s[44]++;

              _this.setState({
                isActionSelected: _this.state.topSubtitleIndex,
                actionArea: changeActionArea
              });

              cov_188aayz4dz.s[45]++;

              _this.clearDefaultComponentSelected();

              cov_188aayz4dz.s[46]++;

              _this.setComponentSelected(_this.state.topSubtitleIndex);
            } else {
              cov_188aayz4dz.b[11][1]++;
              cov_188aayz4dz.s[47]++;

              _this.setState({
                isActionSelected: 0,
                actionArea: changeActionArea
              });

              cov_188aayz4dz.s[48]++;

              _this.clearDefaultComponentSelected();

              cov_188aayz4dz.s[49]++;

              _this.setComponentSelected(0);
            }
          } else {
            cov_188aayz4dz.b[6][1]++;
          }
        });

        cov_188aayz4dz.s[50]++;

        _this.setState({
          actionArea: _this.defaultActionArea
        });

        cov_188aayz4dz.s[51]++;

        if (_this.state.actionArea[_this.state.isActionSelected]) {
          cov_188aayz4dz.b[12][0]++;
          cov_188aayz4dz.s[52]++;

          _this.state.actionArea[_this.state.isActionSelected].addClass('status-active');
        } else {
          cov_188aayz4dz.b[12][1]++;
        }

        cov_188aayz4dz.s[53]++;

        if (_this.state.actionArea[1]) {
          cov_188aayz4dz.b[13][0]++;
          cov_188aayz4dz.s[54]++;

          _this.state.actionArea[1].on('mouseenter', function () {
            cov_188aayz4dz.f[6]++;
            cov_188aayz4dz.s[55]++;

            _this.setState({
              isActionSelected: 1
            });

            cov_188aayz4dz.s[56]++;

            _this.setComponentSelected(1);
          });
        } else {
          cov_188aayz4dz.b[13][1]++;
        }

        cov_188aayz4dz.s[57]++;

        if (_this.state.actionArea[0]) {
          cov_188aayz4dz.b[14][0]++;
          cov_188aayz4dz.s[58]++;

          _this.state.actionArea[0].on('mouseenter', function () {
            cov_188aayz4dz.f[7]++;
            cov_188aayz4dz.s[59]++;

            _this.setState({
              isActionSelected: 0
            });

            cov_188aayz4dz.s[60]++;

            _this.setComponentSelected(0);
          });
        } else {
          cov_188aayz4dz.b[14][1]++;
        }

        cov_188aayz4dz.s[61]++;

        _this.checkTopSubtitleDisable(_this.options.isTopSubtitleDisable);
      });

      return _this;
    }

    _createClass(ViuPlayer, [{
      key: "checkTopSubtitleDisable",
      value: function checkTopSubtitleDisable(status) {
        cov_188aayz4dz.f[8]++;
        cov_188aayz4dz.s[62]++;
        this.setState({
          isTopSubtitleDisable: status
        });
        var viuTopSubtitle = (cov_188aayz4dz.s[63]++, this.player.getChild('ViuPlayerComponent').viuTopSubtitle);
        cov_188aayz4dz.s[64]++;
        viuTopSubtitle.trigger('toggleDisable', {
          disable: status
        });
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        cov_188aayz4dz.f[9]++;
        cov_188aayz4dz.s[65]++;

        if (this.checkAllPanelClose()) {
          cov_188aayz4dz.b[15][0]++;
          var upStep = (cov_188aayz4dz.s[66]++, 0);
          cov_188aayz4dz.s[67]++;
          this.setState({
            isActionSelected: upStep
          });
          cov_188aayz4dz.s[68]++;
          this.setComponentSelected(upStep);
        } else {
          cov_188aayz4dz.b[15][1]++;
          var viuLangList = (cov_188aayz4dz.s[69]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
          var fontSizeList = (cov_188aayz4dz.s[70]++, this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList'));
          var viuResolutionList = (cov_188aayz4dz.s[71]++, this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList'));
          var viuChipName = (cov_188aayz4dz.s[72]++, this.player.getChild('ViuInfoPanel'));
          cov_188aayz4dz.s[73]++;

          if (this.state.panel.isSubtileAreaSelected) {
            cov_188aayz4dz.b[16][0]++;
            cov_188aayz4dz.s[74]++;
            viuLangList.upperSelectAction();
          } else {
            cov_188aayz4dz.b[16][1]++;
          }

          cov_188aayz4dz.s[75]++;

          if (this.state.panel.isInfoAreaSelected) {
            cov_188aayz4dz.b[17][0]++;
            cov_188aayz4dz.s[76]++;
            viuChipName.containerUpperStep();
          } else {
            cov_188aayz4dz.b[17][1]++;
          }

          cov_188aayz4dz.s[77]++;

          if (this.state.panel.isFontSizeAreaSelected) {
            cov_188aayz4dz.b[18][0]++;
            cov_188aayz4dz.s[78]++;
            fontSizeList.upperSelectAction();
          } else {
            cov_188aayz4dz.b[18][1]++;
          }

          cov_188aayz4dz.s[79]++;

          if (this.state.panel.isAdvanceAreaSelected) {
            cov_188aayz4dz.b[19][0]++;
            cov_188aayz4dz.s[80]++;
            viuResolutionList.upperSelectAction();
          } else {
            cov_188aayz4dz.b[19][1]++;
          }
        }
      }
    }, {
      key: "leftSelectAction",
      value: function leftSelectAction() {
        cov_188aayz4dz.f[10]++;
        cov_188aayz4dz.s[81]++;

        if (this.checkAllPanelClose()) {
          cov_188aayz4dz.b[20][0]++;
          var step = (cov_188aayz4dz.s[82]++, this.state.isActionSelected);
          var leftStep = (cov_188aayz4dz.s[83]++, step - 1 < 1 ? (cov_188aayz4dz.b[21][0]++, 1) : (cov_188aayz4dz.b[21][1]++, step - 1));
          cov_188aayz4dz.s[84]++;
          this.setState({
            isActionSelected: leftStep
          });
          cov_188aayz4dz.s[85]++;
          this.setComponentSelected(leftStep);
        } else {
          cov_188aayz4dz.b[20][1]++;
          var viuLangList = (cov_188aayz4dz.s[86]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
          cov_188aayz4dz.s[87]++;

          if (this.checkAllPanelClose()) {
            cov_188aayz4dz.b[22][0]++;
            cov_188aayz4dz.s[88]++;
            viuLangList.upperSelectAction();
          } else {
            cov_188aayz4dz.b[22][1]++;
          }
        }
      }
    }, {
      key: "rightSelectAction",
      value: function rightSelectAction() {
        cov_188aayz4dz.f[11]++;
        cov_188aayz4dz.s[89]++;

        if (this.checkAllPanelClose()) {
          cov_188aayz4dz.b[23][0]++;
          var step = (cov_188aayz4dz.s[90]++, this.state.isActionSelected);
          var rightStep = (cov_188aayz4dz.s[91]++, step + 1 > this.state.actionArea.length - 1 ? (cov_188aayz4dz.b[24][0]++, this.state.actionArea.length - 1) : (cov_188aayz4dz.b[24][1]++, step + 1));
          cov_188aayz4dz.s[92]++;
          this.setState({
            isActionSelected: rightStep
          });
          cov_188aayz4dz.s[93]++;
          this.setComponentSelected(rightStep);
        } else {
          cov_188aayz4dz.b[23][1]++;
          var viuLangList = (cov_188aayz4dz.s[94]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
          cov_188aayz4dz.s[95]++;

          if (this.state.panel.isSubtileAreaSelected) {
            cov_188aayz4dz.b[25][0]++;
            cov_188aayz4dz.s[96]++;
            viuLangList.upperSelectAction();
          } else {
            cov_188aayz4dz.b[25][1]++;
          }
        }
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        cov_188aayz4dz.f[12]++;
        cov_188aayz4dz.s[97]++;

        if (this.checkAllPanelClose()) {
          cov_188aayz4dz.b[26][0]++;
          var step = (cov_188aayz4dz.s[98]++, this.state.isActionSelected);
          var downStep = (cov_188aayz4dz.s[99]++, step === 0 ? (cov_188aayz4dz.b[27][0]++, 1) : (cov_188aayz4dz.b[27][1]++, step));
          cov_188aayz4dz.s[100]++;
          this.setState({
            isActionSelected: downStep
          });
          cov_188aayz4dz.s[101]++;
          this.setComponentSelected(downStep);
        } else {
          cov_188aayz4dz.b[26][1]++;
          var viuLangList = (cov_188aayz4dz.s[102]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
          var fontSizeList = (cov_188aayz4dz.s[103]++, this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList'));
          var viuResolutionList = (cov_188aayz4dz.s[104]++, this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList'));
          var ViuInfoPanel = (cov_188aayz4dz.s[105]++, this.player.getChild('ViuInfoPanel'));
          cov_188aayz4dz.s[106]++;

          if (this.state.panel.isSubtileAreaSelected) {
            cov_188aayz4dz.b[28][0]++;
            cov_188aayz4dz.s[107]++;
            viuLangList.downerSelectAction();
          } else {
            cov_188aayz4dz.b[28][1]++;
          }

          cov_188aayz4dz.s[108]++;

          if (this.state.panel.isInfoAreaSelected) {
            cov_188aayz4dz.b[29][0]++;
            cov_188aayz4dz.s[109]++;
            ViuInfoPanel.containerDownStep();
          } else {
            cov_188aayz4dz.b[29][1]++;
          }

          cov_188aayz4dz.s[110]++;

          if (this.state.panel.isFontSizeAreaSelected) {
            cov_188aayz4dz.b[30][0]++;
            cov_188aayz4dz.s[111]++;
            fontSizeList.downerSelectAction();
          } else {
            cov_188aayz4dz.b[30][1]++;
          }

          cov_188aayz4dz.s[112]++;

          if (this.state.panel.isAdvanceAreaSelected) {
            cov_188aayz4dz.b[31][0]++;
            cov_188aayz4dz.s[113]++;
            viuResolutionList.downerSelectAction();
          } else {
            cov_188aayz4dz.b[31][1]++;
          }
        }
      }
    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        var _this2 = this;

        var useDefaultActionArea = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_188aayz4dz.b[32][0]++, false);
        cov_188aayz4dz.f[13]++;
        cov_188aayz4dz.s[114]++;
        Object.keys(this.state.actionArea).map(function (item) {
          cov_188aayz4dz.f[14]++;
          cov_188aayz4dz.s[115]++;

          if (parseInt(item, 10) !== step) {
            cov_188aayz4dz.b[33][0]++;
            cov_188aayz4dz.s[116]++;

            _this2.state.actionArea[item].removeClass('status-active');
          } else {
            cov_188aayz4dz.b[33][1]++;
          }
        });
        cov_188aayz4dz.s[117]++;
        this.state.actionArea[step].addClass('status-active');
      }
    }, {
      key: "clearDefaultComponentSelected",
      value: function clearDefaultComponentSelected() {
        cov_188aayz4dz.f[15]++;
        cov_188aayz4dz.s[118]++;

        for (var i = 0; i < this.originActionArea.length; i++) {
          cov_188aayz4dz.s[119]++;
          this.originActionArea[i].removeClass('status-active');
        }
      }
    }, {
      key: "setLangListComponentSelected",
      value: function setLangListComponentSelected(step) {
        var _this3 = this;

        cov_188aayz4dz.f[16]++;
        cov_188aayz4dz.s[120]++;
        Object.keys(this.state.actionArea).map(function (item) {
          cov_188aayz4dz.f[17]++;
          cov_188aayz4dz.s[121]++;

          if (parseInt(item, 10) !== step) {
            cov_188aayz4dz.b[34][0]++;
            cov_188aayz4dz.s[122]++;

            _this3.state.actionArea[item].removeClass('status-active');
          } else {
            cov_188aayz4dz.b[34][1]++;
          }
        });
        cov_188aayz4dz.s[123]++;
        this.state.actionArea[step].addClass('status-active');
      }
    }, {
      key: "checkVideoProcessed",
      value: function checkVideoProcessed() {
        cov_188aayz4dz.f[18]++;
        cov_188aayz4dz.s[124]++;
        return (cov_188aayz4dz.b[35][0]++, this.state.isActionSelected === 0) && (cov_188aayz4dz.b[35][1]++, this.checkAllPanelClose());
      }
    }, {
      key: "toggleInfo",
      value: function toggleInfo() {
        cov_188aayz4dz.f[19]++;
        var index = (cov_188aayz4dz.s[125]++, this.state.actionArea.findIndex(function (item) {
          cov_188aayz4dz.f[20]++;
          cov_188aayz4dz.s[126]++;
          return (cov_188aayz4dz.b[36][0]++, item.name_) && (cov_188aayz4dz.b[36][1]++, item.name_ === 'ViuInfo');
        }));
        cov_188aayz4dz.s[127]++;
        this.setState({
          isActionSelected: index
        });
        cov_188aayz4dz.s[128]++;
        this.setComponentSelected(index);
        var viuInfo = (cov_188aayz4dz.s[129]++, this.player.getChild('ViuPlayerComponent').viuInfo);
        cov_188aayz4dz.s[130]++;
        viuInfo.trigger('click');
      }
    }, {
      key: "toggleSubtitle",
      value: function toggleSubtitle(step) {
        cov_188aayz4dz.f[21]++;
        var index = (cov_188aayz4dz.s[131]++, this.state.actionArea.findIndex(function (item) {
          cov_188aayz4dz.f[22]++;
          cov_188aayz4dz.s[132]++;
          return (cov_188aayz4dz.b[37][0]++, item.name_) && (cov_188aayz4dz.b[37][1]++, item.name_ === 'ViuSubtitle');
        }));
        cov_188aayz4dz.s[133]++;
        this.setState({
          isActionSelected: index
        });
        cov_188aayz4dz.s[134]++;
        this.setComponentSelected(index);
        var viuSubtitle = (cov_188aayz4dz.s[135]++, this.player.getChild('ViuPlayerComponent').viuSubtitle);
        cov_188aayz4dz.s[136]++;
        viuSubtitle.trigger('click');
      }
    }, {
      key: "toggleFontSize",
      value: function toggleFontSize() {
        cov_188aayz4dz.f[23]++;
        var index = (cov_188aayz4dz.s[137]++, this.state.actionArea.findIndex(function (item) {
          cov_188aayz4dz.f[24]++;
          cov_188aayz4dz.s[138]++;
          return (cov_188aayz4dz.b[38][0]++, item.name_) && (cov_188aayz4dz.b[38][1]++, item.name_ === 'ViuFontSize');
        }));
        cov_188aayz4dz.s[139]++;
        this.setState({
          isActionSelected: index
        });
        cov_188aayz4dz.s[140]++;
        this.setComponentSelected(index);
        var viuSubtitle = (cov_188aayz4dz.s[141]++, this.player.getChild('ViuPlayerComponent').viuFontSize);
        cov_188aayz4dz.s[142]++;
        viuSubtitle.trigger('click');
      }
    }, {
      key: "showTopSubtitle",
      value: function showTopSubtitle() {
        cov_188aayz4dz.f[25]++;
        cov_188aayz4dz.s[143]++;

        if (this.player.getChild('ViuPlayerComponent')) {
          cov_188aayz4dz.b[39][0]++;
          var viuTopSubtitle = (cov_188aayz4dz.s[144]++, this.player.getChild('ViuPlayerComponent').viuTopSubtitle);
          cov_188aayz4dz.s[145]++;
          viuTopSubtitle.trigger('toggleShow', {
            open: true
          });
        } else {
          cov_188aayz4dz.b[39][1]++;
        }
      }
    }, {
      key: "hideTopSubtitle",
      value: function hideTopSubtitle() {
        cov_188aayz4dz.f[26]++;
        cov_188aayz4dz.s[146]++;

        if (this.player.getChild('ViuPlayerComponent')) {
          cov_188aayz4dz.b[40][0]++;
          var viuTopSubtitle = (cov_188aayz4dz.s[147]++, this.player.getChild('ViuPlayerComponent').viuTopSubtitle);
          cov_188aayz4dz.s[148]++;
          viuTopSubtitle.trigger('toggleShow', {
            open: false
          });
        } else {
          cov_188aayz4dz.b[40][1]++;
        }
      }
    }, {
      key: "loadNewLangListOptions",
      value: function loadNewLangListOptions(options) {
        cov_188aayz4dz.f[27]++;
        var viuLangList = (cov_188aayz4dz.s[149]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
        cov_188aayz4dz.s[150]++;
        viuLangList.loadNewLangListOptions(options);
      }
    }, {
      key: "toggleTopSubtitle",
      value: function toggleTopSubtitle() {
        cov_188aayz4dz.f[28]++;
        var viuTopSubtitle = (cov_188aayz4dz.s[151]++, this.player.getChild('ViuPlayerComponent').viuTopSubtitle);
        cov_188aayz4dz.s[152]++;
        return viuTopSubtitle.handleClick();
      }
    }, {
      key: "toggleNextChip",
      value: function toggleNextChip() {
        cov_188aayz4dz.f[29]++;
        cov_188aayz4dz.s[153]++;

        if (this.player.getChild('ViuPlayerComponent')) {
          cov_188aayz4dz.b[41][0]++;
          var viuNextChip = (cov_188aayz4dz.s[154]++, this.player.getChild('ViuPlayerComponent').viuNextChip);
          cov_188aayz4dz.s[155]++;
          viuNextChip.trigger('click');
        } else {
          cov_188aayz4dz.b[41][1]++;
        }
      }
    }, {
      key: "return",
      value: function _return(callback) {
        cov_188aayz4dz.f[30]++;
        cov_188aayz4dz.s[156]++;

        if (!this.checkAllPanelClose()) {
          cov_188aayz4dz.b[42][0]++;
          cov_188aayz4dz.s[157]++;
          this.returnKeyReset();
          cov_188aayz4dz.s[158]++;
          videojs.log('返回调试--state--', this.state);
        } else {
          cov_188aayz4dz.b[42][1]++;
          cov_188aayz4dz.s[159]++;

          if (callback) {
            cov_188aayz4dz.b[43][0]++;
            cov_188aayz4dz.s[160]++;
            callback();
          } else {
            cov_188aayz4dz.b[43][1]++;
          }
        }
      }
    }, {
      key: "confirm",
      value: function confirm() {
        cov_188aayz4dz.f[31]++;
        cov_188aayz4dz.s[161]++;

        if (this.checkAllPanelClose()) {
          cov_188aayz4dz.b[44][0]++;
          var playToggle = (cov_188aayz4dz.s[162]++, this.player.getChild('ViuPlayerComponent').getChild('playToggle'));
          var name = (cov_188aayz4dz.s[163]++, this.state.actionArea[this.state.isActionSelected].name_);
          cov_188aayz4dz.s[164]++;

          switch (name) {
            case 'ControlBar':
              cov_188aayz4dz.b[45][0]++;
              cov_188aayz4dz.s[165]++;
              playToggle.handleClick();
              cov_188aayz4dz.s[166]++;
              break;

            case 'PlayToggle':
              cov_188aayz4dz.b[45][1]++;
              cov_188aayz4dz.s[167]++;
              playToggle.handleClick();
              cov_188aayz4dz.s[168]++;
              break;

            case 'ViuNextChip':
              cov_188aayz4dz.b[45][2]++;
              var viuNextChip = (cov_188aayz4dz.s[169]++, this.player.getChild('ViuPlayerComponent').getChild('viuNextChip'));
              cov_188aayz4dz.s[170]++;
              viuNextChip.handleClick();
              cov_188aayz4dz.s[171]++;
              break;

            case 'ViuInfo':
              cov_188aayz4dz.b[45][3]++;
              cov_188aayz4dz.s[172]++;
              this.toggleInfo();
              cov_188aayz4dz.s[173]++;
              break;

            case 'ViuSubtitle':
              cov_188aayz4dz.b[45][4]++;
              cov_188aayz4dz.s[174]++;
              this.toggleSubtitle();
              cov_188aayz4dz.s[175]++;
              break;

            case 'ViuTopSubtitle':
              cov_188aayz4dz.b[45][5]++;
              cov_188aayz4dz.s[176]++;
              this.toggleTopSubtitle();
              cov_188aayz4dz.s[177]++;
              break;

            case 'ViuFontSize':
              cov_188aayz4dz.b[45][6]++;
              var viuFontSize = (cov_188aayz4dz.s[178]++, this.player.getChild('ViuPlayerComponent').getChild('viuFontSize'));
              cov_188aayz4dz.s[179]++;
              viuFontSize.handleClick();
              cov_188aayz4dz.s[180]++;
              break;

            case 'ViuAdvance':
              cov_188aayz4dz.b[45][7]++;
              var viuAdvance = (cov_188aayz4dz.s[181]++, this.player.getChild('ViuPlayerComponent').getChild('viuAdvance'));
              cov_188aayz4dz.s[182]++;
              viuAdvance.handleClick();
              cov_188aayz4dz.s[183]++;
              break;

            default:
              cov_188aayz4dz.b[45][8]++;
              cov_188aayz4dz.s[184]++;
              break;
          }
        } else {
          cov_188aayz4dz.b[44][1]++;
          var viuLangList = (cov_188aayz4dz.s[185]++, this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList'));
          var fontSizeList = (cov_188aayz4dz.s[186]++, this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList'));
          var viuResolutionList = (cov_188aayz4dz.s[187]++, this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList'));
          cov_188aayz4dz.s[188]++;

          if (this.state.panel.isSubtileAreaSelected) {
            cov_188aayz4dz.b[46][0]++;
            cov_188aayz4dz.s[189]++;
            viuLangList.confirm();
          } else {
            cov_188aayz4dz.b[46][1]++;
          }

          cov_188aayz4dz.s[190]++;

          if (this.state.panel.isFontSizeAreaSelected) {
            cov_188aayz4dz.b[47][0]++;
            cov_188aayz4dz.s[191]++;
            fontSizeList.confirm();
          } else {
            cov_188aayz4dz.b[47][1]++;
          }

          cov_188aayz4dz.s[192]++;

          if (this.state.panel.isAdvanceAreaSelected) {
            cov_188aayz4dz.b[48][0]++;
            cov_188aayz4dz.s[193]++;
            viuResolutionList.confirm();
          } else {
            cov_188aayz4dz.b[48][1]++;
          }
        }
      }
    }, {
      key: "setUniquePanelOpen",
      value: function setUniquePanelOpen(panel) {
        cov_188aayz4dz.f[32]++;
        var allPanel = (cov_188aayz4dz.s[194]++, this.state.panel);
        cov_188aayz4dz.s[195]++;

        if (Object.hasOwnProperty.call(allPanel, panel)) {
          cov_188aayz4dz.b[49][0]++;
          var updatePanel = (cov_188aayz4dz.s[196]++, Object.assign({}, allPanel, _defineProperty({}, panel, true), this.getOtherDefaultPanel(panel)));
          cov_188aayz4dz.s[197]++;
          this.setState({
            panel: updatePanel
          });
        } else {
          cov_188aayz4dz.b[49][1]++;
        }
      }
    }, {
      key: "setAllPanelClose",
      value: function setAllPanelClose() {
        cov_188aayz4dz.f[33]++;
        cov_188aayz4dz.s[198]++;
        this.setState({
          panel: this.getAllDefaultPanel()
        });
      }
    }, {
      key: "checkAllPanelClose",
      value: function checkAllPanelClose() {
        cov_188aayz4dz.f[34]++;
        var defaultClose = (cov_188aayz4dz.s[199]++, true);
        var panel = (cov_188aayz4dz.s[200]++, this.state.panel);
        cov_188aayz4dz.s[201]++;

        for (var i in panel) {
          cov_188aayz4dz.s[202]++;

          if (panel[i]) {
            cov_188aayz4dz.b[50][0]++;
            cov_188aayz4dz.s[203]++;
            defaultClose = false;
            cov_188aayz4dz.s[204]++;
            break;
          } else {
            cov_188aayz4dz.b[50][1]++;
          }
        }

        cov_188aayz4dz.s[205]++;
        return defaultClose;
      }
    }, {
      key: "getOtherDefaultPanel",
      value: function getOtherDefaultPanel(panel) {
        cov_188aayz4dz.f[35]++;
        var otherPanel = (cov_188aayz4dz.s[206]++, this.state.panel);
        cov_188aayz4dz.s[207]++;
        delete otherPanel[panel];
        cov_188aayz4dz.s[208]++;

        for (var i in otherPanel) {
          cov_188aayz4dz.s[209]++;
          otherPanel[i] = false;
        }

        cov_188aayz4dz.s[210]++;
        return otherPanel;
      }
    }, {
      key: "getAllDefaultPanel",
      value: function getAllDefaultPanel(panel) {
        cov_188aayz4dz.f[36]++;
        var otherPanel = (cov_188aayz4dz.s[211]++, this.state.panel);
        cov_188aayz4dz.s[212]++;

        for (var i in otherPanel) {
          cov_188aayz4dz.s[213]++;
          otherPanel[i] = false;
        }

        cov_188aayz4dz.s[214]++;
        return otherPanel;
      }
    }, {
      key: "returnKeyReset",
      value: function returnKeyReset() {
        cov_188aayz4dz.f[37]++;
        cov_188aayz4dz.s[215]++;

        for (var i in this.state.panel) {
          cov_188aayz4dz.s[216]++;

          if (this.state.panel[i]) {
            cov_188aayz4dz.b[51][0]++;
            cov_188aayz4dz.s[217]++;

            switch (i) {
              case 'isSubtileAreaSelected':
                cov_188aayz4dz.b[52][0]++;
                cov_188aayz4dz.s[218]++;
                this.player.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
                cov_188aayz4dz.s[219]++;
                break;

              case 'isInfoAreaSelected':
                cov_188aayz4dz.b[52][1]++;
                cov_188aayz4dz.s[220]++;
                this.player.getChild('ViuPlayerComponent').viuInfo.handleClick();
                cov_188aayz4dz.s[221]++;
                break;

              case 'isFontSizeAreaSelected':
                cov_188aayz4dz.b[52][2]++;
                cov_188aayz4dz.s[222]++;
                this.player.getChild('ViuPlayerComponent').viuFontSize.handleClick();
                cov_188aayz4dz.s[223]++;
                break;

              case 'isAdvanceAreaSelected':
                cov_188aayz4dz.b[52][3]++;
                cov_188aayz4dz.s[224]++;
                this.player.getChild('ViuPlayerComponent').viuAdvance.handleClick();
                cov_188aayz4dz.s[225]++;
                break;

              default:
                cov_188aayz4dz.b[52][4]++;
                cov_188aayz4dz.s[226]++;
                break;
            }
          } else {
            cov_188aayz4dz.b[51][1]++;
          }
        }
      }
    }]);

    return ViuPlayer;
  }(Plugin);

  cov_188aayz4dz.s[227]++;
  ViuPlayer.defaultState = {};
  cov_188aayz4dz.s[228]++;
  ViuPlayer.VERSION = version;

  var ViuPlayerComponent = /*#__PURE__*/function (_Component) {
    _inherits(ViuPlayerComponent, _Component);

    var _super2 = _createSuper(ViuPlayerComponent);

    function ViuPlayerComponent(player, options) {
      _classCallCheck(this, ViuPlayerComponent);

      cov_188aayz4dz.f[38]++;
      cov_188aayz4dz.s[229]++;
      return _super2.call(this, player, options);
    }

    _createClass(ViuPlayerComponent, [{
      key: "createEl",
      value: function createEl() {
        cov_188aayz4dz.f[39]++;
        cov_188aayz4dz.s[230]++;
        return _get(_getPrototypeOf(ViuPlayerComponent.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-panel',
          dir: 'ltr'
        });
      }
    }]);

    return ViuPlayerComponent;
  }(Component$h);

  cov_188aayz4dz.s[231]++;
  ViuPlayerComponent.prototype.options_ = {
    children: ['playToggle', 'viuNextChip', 'viuInfo', 'viuSubtitle', 'viuAdvance', 'viuTopSubtitle', 'viuFontSize']
  };
  cov_188aayz4dz.s[232]++;
  videojs.registerComponent('ViuPlayerComponent', ViuPlayerComponent);
  var registerPlugin = (cov_188aayz4dz.s[233]++, (cov_188aayz4dz.b[53][0]++, videojs.registerPlugin) || (cov_188aayz4dz.b[53][1]++, videojs.plugin));
  cov_188aayz4dz.s[234]++;
  registerPlugin('ViuPlayer', ViuPlayer);

  var Player = videojs.getComponent('Player');
  QUnit.test('the environment is sane', function (assert) {
    assert.strictEqual(_typeof(Array.isArray), 'function', 'es5 exists');
    assert.strictEqual(_typeof(sinon), 'object', 'sinon exists');
    assert.strictEqual(_typeof(videojs), 'function', 'videojs exists');
    assert.strictEqual(_typeof(ViuPlayer), 'function', 'plugin is a function');
  });
  QUnit.module('viu-player', {
    beforeEach: function beforeEach() {
      // Mock the environment's timers because certain things - particularly
      // player readiness - are asynchronous in video.js 5. This MUST come
      // before any player is created; otherwise, timers could get created
      // with the actual timer methods!
      this.clock = sinon.useFakeTimers();
      this.fixture = document_1.getElementById('qunit-fixture');
      this.video = document_1.createElement('video');
      this.fixture.appendChild(this.video);
      this.player = videojs(this.video);
    },
    afterEach: function afterEach() {
      this.player.dispose();
      this.clock.restore();
    }
  });
  QUnit.test('registers itself with video.js', function (assert) {
    assert.expect(2);
    assert.strictEqual(_typeof(Player.prototype.ViuPlayer), 'function', 'viu-player plugin was registered');
    this.player.ViuPlayer(); // Tick the clock forward enough to trigger the player to be "ready".

    this.clock.tick(1);
    assert.ok(this.player.hasClass('vjs-viu-player'), 'the plugin adds a class to the player');
  });

}(QUnit, sinon, videojs));
