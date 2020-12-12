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

  var Button = videojs.getComponent('Button');
  /**
   *  Button 详情
   */

  var ViuInfoComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuInfoComponent, _Button);

    var _super = _createSuper(ViuInfoComponent);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuInfoComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuInfoComponent);

      _this = _super.call(this, player, options);

      _this.controlText('Info');

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        var index = ViuPlayer.state.actionArea.findIndex(function (item) {
          return item.name_ && item.name_ === 'ViuInfo';
        });
        ViuPlayer.setState({
          isActionSelected: index
        });
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuInfoComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-info-button vjs-control ".concat(_get(_getPrototypeOf(ViuInfoComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.player_.getChild('viuInfoPanel').handleClick();
        var viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');

        if (viuSubtitlePanel.hasClass('active')) {
          viuSubtitlePanel.removeClass('active');
        }

        if (!this.hasClass('vjs-info-active')) {
          this.addClass('vjs-info-active');
          this.player_.ViuPlayer().setUniquePanelOpen('isInfoAreaSelected');
        } else {
          this.removeClass('vjs-info-active');
          this.player_.ViuPlayer().setAllPanelClose();
        }
      }
    }]);

    return ViuInfoComponent;
  }(Button);

  videojs.registerComponent('viuInfo', ViuInfoComponent);

  var Button$1 = videojs.getComponent('Button');
  /**
   *  class viuNextChip
   *  Button 下一集
   */

  var ViuNextChip = /*#__PURE__*/function (_Button) {
    _inherits(ViuNextChip, _Button);

    var _super = _createSuper(ViuNextChip);

    /**
     * Create a ViuNextChip instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js component architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your component's caller.
     */
    function ViuNextChip(player, options) {
      var _this;

      _classCallCheck(this, ViuNextChip);

      _this = _super.call(this, player, options);

      _this.controlText('Next Chip');

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        var index = ViuPlayer.state.actionArea.findIndex(function (item) {
          return item && item.name_ === 'ViuNextChip';
        });
        ViuPlayer.setState({
          isActionSelected: index
        });
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuNextChip, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-next-chip-button vjs-next-chip ".concat(_get(_getPrototypeOf(ViuNextChip.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.player_.trigger('nextChip');
      }
    }]);

    return ViuNextChip;
  }(Button$1);

  videojs.registerComponent('viuNextChip', ViuNextChip);

  var Button$2 = videojs.getComponent('Button'); // const defaults = {
  //   chipName: ''
  // };

  /**
   *  subtitle 单字幕
   */

  var ViuSubtitleComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuSubtitleComponent, _Button);

    var _super = _createSuper(ViuSubtitleComponent);

    /**
     * Create a ViuSubtitleComponent instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js component architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your component's caller.
     */
    function ViuSubtitleComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuSubtitleComponent);

      _this = _super.call(this, player, options);

      _this.controlText('Subtitle On');

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        var index = ViuPlayer.state.actionArea.findIndex(function (item) {
          return item && item.name_ === 'ViuSubtitle';
        });
        ViuPlayer.setState({
          isActionSelected: index
        });
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }
    /**
     * function buildCSSClass
     *
     * @return {Object} return Css Object
     */


    _createClass(ViuSubtitleComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-viu-subtitle-toggle vjs-viu-subtitle-active ".concat(_get(_getPrototypeOf(ViuSubtitleComponent.prototype), "buildCSSClass", this).call(this));
      }
      /**
       * function handleClick
       * 点击事件
       */

    }, {
      key: "handleClick",
      value: function handleClick() {
        this.player_.ViuPlayer().setAllPanelClose(); // info在active状态先关闭再展示subtitle  -- qin

        var viuInfoPanel = this.player_.getChild('viuInfoPanel');

        if (viuInfoPanel.hasClass('active')) {
          viuInfoPanel.removeClass('active');
        } // end


        if (!this.hasClass('panel-active')) {
          this.open();
        } else {
          this.close();
        }
      }
      /**
       * function close
       * 打开方法
       *
       */

    }, {
      key: "open",
      value: function open() {
        this.controlText('Subtitle On');
        this.addClass('panel-active');
        var viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');
        viuSubtitlePanel.handleClick();
        this.player_.ViuPlayer().setUniquePanelOpen('isSubtileAreaSelected');
      }
      /**
       * function close
       * 关闭方法
       *
       */

    }, {
      key: "close",
      value: function close() {
        this.controlText('Subtitle Off');
        this.removeClass('panel-active');
        var viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');
        viuSubtitlePanel.handleClick();
        this.player_.ViuPlayer().setAllPanelClose();
      }
    }]);

    return ViuSubtitleComponent;
  }(Button$2);

  videojs.registerComponent('viuSubtitle', ViuSubtitleComponent);

  var Button$3 = videojs.getComponent('Button');
  /**
   * ViuTopSubtitleComponent
   * parent is plugin
   */

  var ViuTopSubtitleComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuTopSubtitleComponent, _Button);

    var _super = _createSuper(ViuTopSubtitleComponent);

    /**
     * Create a ViuTopSubtitleComponent instance.
     * top subtitle 双字幕
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     * @param  {Object} [options]
     *         An optional options object.
     *         While not a core part of the Video.js component architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your component's caller.
     */
    function ViuTopSubtitleComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuTopSubtitleComponent);

      _this = _super.call(this, player, options);

      _this.on('toggleShow', function (event, data) {
        if (data.open) {
          _this.open();
        } else {
          _this.close();
        }
      });

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        if (!ViuPlayer.state.isTopSubtitleDisable) {
          var downStep = ViuPlayer.state.actionArea.length - 1;
          ViuPlayer.setState({
            isActionSelected: downStep
          });
          ViuPlayer.setComponentSelected(downStep);
        }
      });

      _this.on('toggleDisable', function (e, data) {
        _this.handleDisable(data.disable);
      });

      _this.controlText('Subtitle On');

      return _this;
    }
    /**
     * function buildCSSClass
     *
     * @return {Object} return Css Object
     */


    _createClass(ViuTopSubtitleComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-viu-top-subtitle-toggle vjs-viu-top-subtitle-active ".concat(_get(_getPrototypeOf(ViuTopSubtitleComponent.prototype), "buildCSSClass", this).call(this));
      }
      /**
       * function handleDisable
       * 切换禁用状态事件
       */

    }, {
      key: "handleDisable",
      value: function handleDisable(value) {
        if (value) {
          this.addClass('disable');
        } else {
          this.removeClass('disable');
        }
      }
      /**
       * function handleClick
       * 点击事件
       */

    }, {
      key: "handleClick",
      value: function handleClick() {
        if (!this.hasClass('disable')) {
          if (!this.hasClass('vjs-viu-top-subtitle-active')) {
            this.open();
          } else {
            this.close();
          }
        }
      }
      /**
       * function close
       * 打开方法
       * open with addClass
       */

    }, {
      key: "open",
      value: function open() {
        this.addClass('vjs-viu-top-subtitle-active');
        this.controlText('Top Subtitle On');
        this.player_.trigger('toggleTopSubtitle', true);
      }
      /**
       * function close
       * 关闭方法
       * close with removeClass
       */

    }, {
      key: "close",
      value: function close() {
        this.removeClass('vjs-viu-top-subtitle-active');
        this.controlText('Top Subtitle Off');
        this.player_.trigger('toggleTopSubtitle', false);
      }
    }]);

    return ViuTopSubtitleComponent;
  }(Button$3);

  videojs.registerComponent('viuTopSubtitle', ViuTopSubtitleComponent);

  var Component = videojs.getComponent('component');
  var dom = videojs.dom;
  var defaults = {
    chipName: ''
  };
  /**
   *  ChipName 详情名称
   *
   */

  var ChipName = /*#__PURE__*/function (_Component) {
    _inherits(ChipName, _Component);

    var _super = _createSuper(ChipName);

    function ChipName(player, options) {
      var _this;

      _classCallCheck(this, ChipName);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults, options);
      return _this;
    }

    _createClass(ChipName, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ChipName.prototype), "createEl", this).call(this, 'div', {
          //   textContent: "121212",
          className: 'vjs-viu-player-info-chipName-span',
          dir: 'ltr'
        });

        var text = dom.createEl('span', {
          textContent: this.options_.chipCaptions || '',
          className: "vjs-viu-player-info-chip-name ".concat(_get(_getPrototypeOf(ChipName.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        });
        root.appendChild(text);
        return root;
      }
    }]);

    return ChipName;
  }(Component);

  var Component$1 = videojs.getComponent('component');
  var dom$1 = videojs.dom;
  /**
   *  ChipCaptions 详情副标题
   */

  var ChipCaptions = /*#__PURE__*/function (_Component) {
    _inherits(ChipCaptions, _Component);

    var _super = _createSuper(ChipCaptions);

    function ChipCaptions(player, options) {
      _classCallCheck(this, ChipCaptions);

      return _super.call(this, player, options);
    }

    _createClass(ChipCaptions, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ChipCaptions.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-chipCaptions-span',
          dir: 'ltr'
        });

        var text = dom$1.createEl('span', {
          textContent: this.localize('episode_num'),
          className: "vjs-viu-player-info-chipCaptions ".concat(_get(_getPrototypeOf(ChipCaptions.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        }); // isMovie = 0 电视剧  = 1 电影

        if (this.options_.isMovie === 0) {
          root.appendChild(text);
        } // root.appendChild(text);


        return root;
      }
    }]);

    return ChipCaptions;
  }(Component$1);

  var Component$2 = videojs.getComponent('component');
  var dom$2 = videojs.dom;
  /**
   *  ChipDesc 详情描述
   */

  var ChipDesc = /*#__PURE__*/function (_Component) {
    _inherits(ChipDesc, _Component);

    var _super = _createSuper(ChipDesc);

    function ChipDesc(player, options) {
      _classCallCheck(this, ChipDesc);

      return _super.call(this, player, options);
    }

    _createClass(ChipDesc, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ChipDesc.prototype), "createEl", this).call(this, 'div', {
          //   textContent: "121212",
          className: 'vjs-viu-player-info-chip-desc-span',
          dir: 'ltr'
        });

        var text = dom$2.createEl('span', {
          textContent: this.options_.chipDesc || '',
          className: "vjs-viu-player-info-chip-desc ".concat(_get(_getPrototypeOf(ChipDesc.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        });
        root.appendChild(text);
        return root;
      }
    }]);

    return ChipDesc;
  }(Component$2);

  var dayjs_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
  });

  var Component$3 = videojs.getComponent('component');
  var dom$3 = videojs.dom;
  var defaults$1 = {
    chipName: ''
  };
  /**
   *  OfflineTime 下架时间
   *
   */

  var ChipOfflineTime = /*#__PURE__*/function (_Component) {
    _inherits(ChipOfflineTime, _Component);

    var _super = _createSuper(ChipOfflineTime);

    function ChipOfflineTime(player, options) {
      var _this;

      _classCallCheck(this, ChipOfflineTime);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$1, options);
      return _this;
    }

    _createClass(ChipOfflineTime, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ChipOfflineTime.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-info-offline-time-span',
          dir: 'ltr'
        });

        var date = this.options_.offlineTime ? dayjs_min(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat) : '';
        var text = dom$3.createEl('span', {
          textContent: "".concat(this.localize('off_shelf_date'), ":").concat(date),
          className: "vjs-viu-player-info-offline-time ".concat(_get(_getPrototypeOf(ChipOfflineTime.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        });

        if (this.options_.offlineTime) {
          root.appendChild(text);
        }

        return root;
      }
    }]);

    return ChipOfflineTime;
  }(Component$3);

  var Component$4 = videojs.getComponent('component');

  /**
   *  drawer 详情
   */

  var ViuInfoPanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuInfoPanelContainer, _Component);

    var _super = _createSuper(ViuInfoPanelContainer);

    function ViuInfoPanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuInfoPanelContainer);

      _this = _super.call(this, player, options);

      _this.addChild('chipCaptions', options.info);

      _this.addChild('chipName', options.info);

      _this.addChild('chipOfflineTime', options.info);

      _this.addChild('chipDesc', options.info);

      return _this;
    }

    _createClass(ViuInfoPanelContainer, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuInfoPanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-info-drawer-container',
          dir: 'ltr'
        });

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

      _this2 = _super2.call(this, player, options);

      _this2.addChild('ViuInfoPanelContainer', options);

      return _this2;
    }

    _createClass(ViuInfoPanel, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuInfoPanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-info-drawer',
          dir: 'ltr'
        });

        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        this.containerDownStep();
      } // 向下方法

    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop + 300;
        }
      } // 向上方法

    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop - 300;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        // 关闭其他panel
        this.player_.removeClass('vjs-language-drawer-open');

        if (!this.hasClass('active')) {
          this.addClass('active');
          this.player_.addClass('vjs-info-drawer-open');
        } else {
          this.removeClass('active');
          this.player_.removeClass('vjs-info-drawer-open');
        }
      }
    }]);

    return ViuInfoPanel;
  }(Component$4);

  videojs.registerComponent('chipName', ChipName);
  videojs.registerComponent('chipCaptions', ChipCaptions);
  videojs.registerComponent('chipDesc', ChipDesc);
  videojs.registerComponent('chipOfflineTime', ChipOfflineTime);
  videojs.registerComponent('viuInfoPanel', ViuInfoPanel);
  videojs.registerComponent('viuInfoPanelContainer', ViuInfoPanelContainer);

  var Component$5 = videojs.getComponent('component');
  var dom$4 = videojs.dom;
  var defaults$2 = {
    title: ''
  };
  /**
   *  LangTitle
   *
   */

  var LangTitle = /*#__PURE__*/function (_Component) {
    _inherits(LangTitle, _Component);

    var _super = _createSuper(LangTitle);

    function LangTitle(player, options) {
      var _this;

      _classCallCheck(this, LangTitle);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$2, options);
      return _this;
    }

    _createClass(LangTitle, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(LangTitle.prototype), "createEl", this).call(this, 'div', {
          //   textContent: "121212",
          className: 'vjs-viu-player-lang-title-span',
          dir: 'ltr'
        });

        var text = dom$4.createEl('span', {
          textContent: this.localize('setting_language') || '',
          className: "vjs-viu-player-lang-title ".concat(_get(_getPrototypeOf(LangTitle.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        });
        root.appendChild(text);
        return root;
      }
    }]);

    return LangTitle;
  }(Component$5);

  var Component$6 = videojs.getComponent('Component');
  var dom$5 = videojs.dom;
  var defaults$3 = {
    title: ''
  };
  /**
   *  LangList
   *
   */

  var LangList = /*#__PURE__*/function (_Component) {
    _inherits(LangList, _Component);

    var _super = _createSuper(LangList);

    function LangList(player, options) {
      var _this;

      _classCallCheck(this, LangList);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$3, options);

      _this.on('click', function (event) {
        event.stopPropagation();
        var languagesId = event.target.dataset.languagesId;

        _this.handleClick(languagesId);
      });

      _this.on('mouseover', function (e) {
        var childNodes = e.currentTarget.childNodes;
        var currentNode = e.target;
        var upStep;

        for (var i = 0; i < childNodes.length; i++) {
          if (currentNode === childNodes[i]) {
            upStep = i;
          }
        }

        _this.setState({
          isSelected: upStep
        });

        _this.setComponentSelected(upStep);
      });

      _this.state = {
        isSelected: 0
      };

      _this.setDefaultSelected();

      return _this;
    }

    _createClass(LangList, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(LangList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-lang-items',
          dir: 'ltr'
        });

        var languages = this.options_.languages;

        if (languages.length >= 8) {
          root.classList.add('over-size');
        } else {
          root.classList.remove('over-size');
        }

        var isAllLanguagesIsDefault = false;

        for (var i = 0; i < languages.length; i++) {
          var isDefault = parseInt(languages[i].isDefault, 10) === 1;
          var text = dom$5.createEl('li', {
            textContent: languages[i].name || '',
            className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(isDefault ? 'lang-active' : '', " ").concat(_get(_getPrototypeOf(LangList.prototype), "buildCSSClass", this).call(this)),
            dir: 'ltr'
          });

          if (languages[i].isDefault) {
            isAllLanguagesIsDefault = true;
          }

          text.dataset.languagesId = languages[i].id;
          root.appendChild(text);
        }

        var switchText = dom$5.createEl('li', {
          textContent: this.localize('hide_sub'),
          className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(_get(_getPrototypeOf(LangList.prototype), "buildCSSClass", this).call(this)),
          dir: 'ltr'
        });

        if (languages.length === 0 || !isAllLanguagesIsDefault) {
          switchText.classList.add('lang-active');
        }

        switchText.dataset.languagesId = 'hidden';
        root.appendChild(switchText);
        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        var selectedIndex = this.options.languages.findIndex(function (item) {
          return parseInt(item.isDefault, 10) === 1;
        });
        this.setState({
          isSelected: selectedIndex
        });
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        this.selectedDownerStep();
      }
    }, {
      key: "loadNewLangListOptions",
      value: function loadNewLangListOptions(options) {
        if (options.length === 0) {
          return;
        }

        dom$5.emptyEl(this.el());
        var languages = options;

        for (var i = 0; i < languages.length; i++) {
          var isDefault = parseInt(languages[i].isDefault, 10) === 1;
          var text = dom$5.createEl('li', {
            textContent: languages[i].name || '',
            className: "vjs-viu-player-lang-title vjs-viu-player-lang-li ".concat(isDefault ? 'lang-active' : '', "}"),
            dir: 'ltr'
          });
          text.dataset.languagesId = languages[i].id;
          this.el().appendChild(text);
        }
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        var step = this.state.isSelected; // const total = parseInt(this.options.languages.length, 10);

        var upStep = step - 1 < 0 ? 0 : step - 1;
        this.setState({
          isSelected: upStep
        });
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        var step = this.state.isSelected;
        var total = parseInt(this.options.languages.length, 10);
        var downStep = step + 1 > total ? total : step + 1;
        videojs.log('selectedDownerStep', step);
        this.setState({
          isSelected: downStep
        });
        this.setComponentSelected(downStep);
      }
      /**
       * function setComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新主区选择状态处理器
       */

    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        // const totalStep = parseInt(this.options.languages.length, 10);
        var items = dom$5.$$('.vjs-viu-player-lang-li');

        if (items) {
          for (var i = 0; i < items.length; i++) {
            dom$5.removeClass(items[i], 'lang-active');
          }
        }

        dom$5.addClass(items[step], 'lang-active');
        this.adjustScrollTop(step);
      }
      /**
       *
       * @param {*语言标识} languagesId
       */

    }, {
      key: "handleClick",
      value: function handleClick(languagesId) {
        this.player_.trigger('subtitleChange', languagesId);
        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "confirm",
      value: function confirm() {
        var allLanguages = this.options_.languages.concat({
          id: 'hidden',
          name: 'hidden',
          isDefault: '0',
          mark: 'hidden'
        });
        var languages = allLanguages[this.state.isSelected];

        if (languages !== undefined) {
          this.player_.trigger('subtitleChange', languages.id);
        } else {
          this.player_.trigger('subtitleChange', 'hidden');
        }

        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(languagesId) {
        this.player_.trigger('subtitleChange', languagesId);
        this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
      }
    }, {
      key: "adjustScrollTop",
      value: function adjustScrollTop(step) {
        var langListContainer = this.el().clientHeight;
        var containerScrollTop = parseInt((step + 1) * 92, 10);

        if (containerScrollTop + 92 > langListContainer) {
          this.el().scrollTop = containerScrollTop;
        } else {
          this.el().scrollTop = 0;
        }
      }
    }]);

    return LangList;
  }(Component$6);

  var Component$7 = videojs.getComponent('component'); // const dom = videojs.dom;

  var defaults$4 = {
    chipName: ''
  };
  /**
   *  ToggleHandle
   *
   */

  var ToggleHandle = /*#__PURE__*/function (_Component) {
    _inherits(ToggleHandle, _Component);

    var _super = _createSuper(ToggleHandle);

    function ToggleHandle(player, options) {
      var _this;

      _classCallCheck(this, ToggleHandle);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$4, options);
      return _this;
    }

    _createClass(ToggleHandle, [{
      key: "createEl",
      value: function createEl() {
        var wrap = _get(_getPrototypeOf(ToggleHandle.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-lang-itembox',
          dir: 'ltr'
        });

        return wrap;
      }
    }]);

    return ToggleHandle;
  }(Component$7);

  var Component$8 = videojs.getComponent('component');

  var defaults$5 = {
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
  };
  /**
   *  drawer 语言
   */

  var ViuSubtitlePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuSubtitlePanelContainer, _Component);

    var _super = _createSuper(ViuSubtitlePanelContainer);

    function ViuSubtitlePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuSubtitlePanelContainer);

      _this = _super.call(this, player, options);

      _this.addChild('langTitle', options);

      _this.addChild('langList', options); // this.addChild('toggleHandle', options);


      return _this;
    }

    _createClass(ViuSubtitlePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuSubtitlePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-subtitle-drawer-container',
          dir: 'ltr'
        });

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

      _this2 = _super2.call(this, player, options);
      _this2.options = videojs.mergeOptions(defaults$5, options);

      _this2.addChild('viuSubtitlePanelContainer', _this2.options);

      return _this2;
    }

    _createClass(ViuSubtitlePanel, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuSubtitlePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-subtitle-drawer',
          dir: 'ltr'
        });

        return root;
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        // 关闭其他panel
        this.player_.removeClass('vjs-info-drawer-open'); // 点击触发回调

        this.player_.trigger('subtitleClick', this.options.languages);

        if (!this.hasClass('active')) {
          this.player_.addClass('vjs-language-drawer-open');
          this.addClass('active');
        } else {
          this.player_.removeClass('vjs-language-drawer-open');
          this.removeClass('active');
        }
      }
    }]);

    return ViuSubtitlePanel;
  }(Component$8);

  videojs.registerComponent('langTitle', LangTitle);
  videojs.registerComponent('langList', LangList);
  videojs.registerComponent('toggleHandle', ToggleHandle);
  videojs.registerComponent('viuSubtitlePanel', ViuSubtitlePanel);
  videojs.registerComponent('viuSubtitlePanelContainer', ViuSubtitlePanelContainer);

  var Component$9 = videojs.getComponent('component');
  var defaults$6 = {
    chipName: '',
    chipCaptions: '',
    offlineTime: '',
    offlineTimeFormat: ''
  };
  /**
   *  Component ViuProcessInfo
   *  parent is plugin
   */

  var ViuProcessInfo = /*#__PURE__*/function (_Component) {
    _inherits(ViuProcessInfo, _Component);

    var _super = _createSuper(ViuProcessInfo);

    /**
     * Create a ViuProcessInfo instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js component architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your component's caller.
     */
    function ViuProcessInfo(player, options) {
      var _this;

      _classCallCheck(this, ViuProcessInfo);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$6, options);
      return _this;
    }
    /**
     * function createEl
     *
     * @return {Object} return html element
     */


    _createClass(ViuProcessInfo, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-process-info',
          dir: 'ltr'
        });

        var episodeTitle = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: this.options_.chipName || '',
          className: 'vjs-viu-process-info-title',
          dir: 'ltr'
        });

        var movieTitle = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: this.options_.chipName || '',
          className: 'vjs-viu-process-info-movieTitle',
          dir: 'ltr'
        });

        var userLevel = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'img', {
          src: this.options_.pUrl,
          className: 'vjs-viu-process-info-userLevel',
          dir: 'ltr'
        });

        var episodeDesc = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: "".concat(this.localize('episode_num'), " ").concat(this.options_.chipCaptions || ''),
          className: 'vjs-viu-process-info-desc',
          dir: 'ltr'
        });

        var date = this.options_.offlineTime ? dayjs_min(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat) : '';

        var offlineTime = _get(_getPrototypeOf(ViuProcessInfo.prototype), "createEl", this).call(this, 'div', {
          textContent: "".concat(this.localize('off_shelf_date'), ": ").concat(date),
          className: 'vjs-viu-process-info-offlinetime',
          dir: 'ltr'
        }); // isMovie = 0 电视剧  = 1 电影


        if (this.options_.isMovie === 1) {
          // P+ 电影
          // P+ 影片 并且 图片存在  插入 icon
          if (this.options_.userLevel === 3 && this.options_.showPremium) {
            root.appendChild(userLevel);
            root.appendChild(movieTitle);

            if (this.options_.offlineTime) {
              root.appendChild(offlineTime);
            }
          } else {
            // 普通电影
            root.appendChild(episodeTitle);

            if (this.options_.offlineTime) {
              root.appendChild(offlineTime);
            }
          }
        } else if (this.options_.isMovie === 0) {
          // P+电视剧
          if (this.options_.userLevel === 3 && this.options_.showPremium) {
            root.appendChild(episodeTitle);
            root.appendChild(userLevel);
            root.appendChild(episodeDesc);

            if (this.options_.offlineTime) {
              root.appendChild(offlineTime);
            }
          } else {
            // 普通电视剧
            root.appendChild(episodeTitle);
            root.appendChild(episodeDesc);

            if (this.options_.offlineTime) {
              root.appendChild(offlineTime);
            }
          }
        }

        return root;
      }
    }]);

    return ViuProcessInfo;
  }(Component$9);

  videojs.registerComponent('viuProcessInfo', ViuProcessInfo);

  var Component$a = videojs.getComponent('component');

  var viuControlBarBackground = /*#__PURE__*/function (_Component) {
    _inherits(viuControlBarBackground, _Component);

    var _super = _createSuper(viuControlBarBackground);

    function viuControlBarBackground(player, options) {
      _classCallCheck(this, viuControlBarBackground);

      return _super.call(this, player, options); // this.options = videojs.mergeOptions(defaults, options);
    }

    _createClass(viuControlBarBackground, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(viuControlBarBackground.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-controlbar-bg',
          dir: 'ltr'
        });

        return root;
      }
    }]);

    return viuControlBarBackground;
  }(Component$a);

  videojs.registerComponent('viuControlBarBackground', viuControlBarBackground);

  var Component$b = videojs.getComponent('Component');
  /**
   *  LoadingTips
   *
   */

  var LoadingTips = /*#__PURE__*/function (_Component) {
    _inherits(LoadingTips, _Component);

    var _super = _createSuper(LoadingTips);

    function LoadingTips(player, options) {
      var _this;

      _classCallCheck(this, LoadingTips);

      _this = _super.call(this, player, options);
      var timeoutCount = options.videoBufferTimeout ? options.videoBufferTimeout : 8;
      player.on('waiting', function () {
        if (!_this.state.loadingTimer) {
          _this.loadingTimerStart(timeoutCount);
        }
      });
      player.on('playing', function () {
        _this.addClass('hidden');

        _this.clearTimer();
      });
      player.on('canplay', function () {
        _this.addClass('hidden');

        _this.clearTimer();
      });
      player.on('error', function () {
        _this.clearTimer();
      });
      _this.state = {
        loadingTimer: null,
        loadingCount: 0,
        triggerCount: 0,
        cdnTimer: null
      };
      return _this;
    } // createEl() {
    //   const root = super.createEl('div', {
    //     className: 'vjs-viu-loadingTips hidden',
    //     textContent: this.localize('video_timeout'),
    //     dir: 'ltr'
    //   });
    //   return root;
    // }


    _createClass(LoadingTips, [{
      key: "loadingTimerStart",
      value: function loadingTimerStart(timeout) {
        var _this2 = this;

        this.state.loadingTimer = setInterval(function () {
          _this2.state.loadingCount++;

          if (_this2.state.loadingCount === timeout) {
            _this2.player_.trigger('weakNetwork');
          } else if (_this2.state.loadingCount >= 60) {
            _this2.clearTimer();

            _this2.player_.trigger('loadTimeout');
          }
        }, 1000);
      }
    }, {
      key: "clearTimer",
      value: function clearTimer() {
        clearInterval(this.state.loadingTimer);
        this.state.loadingCount = 0;
        this.state.loadingTimer = null;
        clearTimeout(this.state.cdnTimer);
        this.state.cdnTimer = null;
      }
    }]);

    return LoadingTips;
  }(Component$b);

  videojs.registerComponent('LoadingTips', LoadingTips);

  var Button$4 = videojs.getComponent('Button');
  /**
   *  Button 详情
   */

  var ViuFontSizeComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuFontSizeComponent, _Button);

    var _super = _createSuper(ViuFontSizeComponent);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuFontSizeComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizeComponent);

      _this = _super.call(this, player, options);

      _this.controlText('Text');

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        var index = ViuPlayer.state.actionArea.findIndex(function (item) {
          return item && item.name_ === 'ViuFontSize';
        });
        ViuPlayer.setState({
          isActionSelected: index
        });
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuFontSizeComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-font-size-button vjs-control ".concat(_get(_getPrototypeOf(ViuFontSizeComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.player_.getChild('viuFontSizePanel').handleClick();
      }
    }]);

    return ViuFontSizeComponent;
  }(Button$4);

  videojs.registerComponent('viuFontSize', ViuFontSizeComponent);

  var Component$c = videojs.getComponent('Component');
  var dom$6 = videojs.dom;
  var defaults$7 = {
    title: ''
  };
  /**
   * ViuFontSizeList
   */

  var ViuFontSizeList = /*#__PURE__*/function (_Component) {
    _inherits(ViuFontSizeList, _Component);

    var _super = _createSuper(ViuFontSizeList);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuFontSizeList(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizeList);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$7, options);

      _this.on('click', function (event) {
        event.stopPropagation();
        var id = event.target.dataset.id;

        _this.handleClick(id);
      });

      _this.on('mouseover', function (event) {
        var id = event.target.attributes['data-id'].value;

        var index = _this.options_.fontSize.findIndex(function (item) {
          return item && item === id;
        });

        _this.setState({
          isSelected: index
        });

        _this.setComponentSelected(index);
      });

      _this.state = {
        isSelected: 0
      };

      _this.setDefaultSelected();

      return _this;
    }

    _createClass(ViuFontSizeList, [{
      key: "createEl",
      value: function createEl() {
        var _this2 = this;

        var root = _get(_getPrototypeOf(ViuFontSizeList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-list-items',
          dir: 'ltr'
        });

        var fontList = this.options_.fontSize || [];

        var fontSizeWrapper = _get(_getPrototypeOf(ViuFontSizeList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        });

        fontList.map(function (item) {
          var sigleItem = dom$6.createEl('li', {
            textContent: _this2.localize("fontsize_".concat(item)),
            className: "vjs-viu-player-list-item vjs-viu-player-fontsize-item ".concat(_this2.options_.defaultFontSize === item ? 'fs-active' : '', " ").concat(_get(_getPrototypeOf(ViuFontSizeList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          });
          sigleItem.dataset.id = item;
          fontSizeWrapper.appendChild(sigleItem);
        });
        root.appendChild(fontSizeWrapper);
        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        var _this3 = this;

        var selectedIndex = this.options.fontSize.findIndex(function (item) {
          return item && item === _this3.options.defaultFontSize;
        });
        this.setState({
          isSelected: selectedIndex || 0
        });
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        this.selectedDownerStep();
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        var step = this.state.isSelected; // const total = parseInt(this.options.languages.length, 10);

        var upStep = step - 1 < 0 ? 0 : step - 1;
        videojs.log('selectedUpperStep', upStep);
        this.setState({
          isSelected: upStep
        });
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        var step = this.state.isSelected;
        var total = parseInt(this.options.fontSize.length, 10);
        var downStep = step + 1 >= total ? total - 1 : step + 1;
        this.setState({
          isSelected: downStep
        });
        this.setComponentSelected(downStep);
      }
      /**
       * function setComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新主区选择状态处理器
       */

    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        var items = dom$6.$$('.vjs-viu-player-fontsize-item');

        if (items) {
          for (var i = 0; i < items.length; i++) {
            if (dom$6.hasClass(items[i], 'active')) {
              dom$6.removeClass(items[i], 'active');
            }
          }

          if (items[step]) {
            dom$6.addClass(items[step], 'active');
          }
        } //

      }
      /**
       *
       * @param {*id标识} id
       */

    }, {
      key: "handleClick",
      value: function handleClick(id) {
        this.clearAllClass();

        if (this.player_ && !this.player_.hasClass("v-fontsize-".concat(id))) {
          this.player_.addClass("v-fontsize-".concat(id));
        }

        var index = this.options_.fontSize.findIndex(function (item) {
          return item && item === id;
        });
        this.setState({
          isSelected: index
        });
        this.setComponentSelected(index);
        this.player_.getChild('ViuPlayerComponent').viuFontSize.handleClick();
      }
    }, {
      key: "confirm",
      value: function confirm() {
        var selected = this.state.isSelected;

        if (this.options_.fontSize[selected]) {
          var id = this.options_.fontSize[selected];
          this.handleClick(id);
        }
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(id) {}
    }, {
      key: "clearAllClass",
      value: function clearAllClass() {
        var _this4 = this;

        var classList = this.options.fontSize || [];
        classList.forEach(function (item) {
          if (_this4.player_.hasClass("v-fontsize-".concat(item))) {
            _this4.player_.removeClass("v-fontsize-".concat(item));
          }
        });
      }
    }]);

    return ViuFontSizeList;
  }(Component$c);

  var Component$d = videojs.getComponent('component');
  var dom$7 = videojs.dom;
  var defaults$8 = {
    title: ''
  };
  /**
   *  SizeTitle
   *
   */

  var SizeTitle = /*#__PURE__*/function (_Component) {
    _inherits(SizeTitle, _Component);

    var _super = _createSuper(SizeTitle);

    function SizeTitle(player, options) {
      var _this;

      _classCallCheck(this, SizeTitle);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$8, options);
      return _this;
    }

    _createClass(SizeTitle, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(SizeTitle.prototype), "createEl", this).call(this, 'div', {
          // textContent: "字幕大小",
          className: 'vjs-viu-player-list-title vjs-viu-player-size-title-span',
          dir: 'ltr'
        });

        var text = dom$7.createEl('span', {
          textContent: '字幕大小',
          //   textContent: this.localize('setting_language') || '',
          //   className: `vjs-viu-player-size-title ${super.buildCSSClass()}`,
          dir: 'ltr'
        });
        root.appendChild(text);
        return root;
      }
    }]);

    return SizeTitle;
  }(Component$d);

  var Component$e = videojs.getComponent('component');

  /**
   *  drawer 详情
   */

  var ViuFontSizePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuFontSizePanelContainer, _Component);

    var _super = _createSuper(ViuFontSizePanelContainer);

    function ViuFontSizePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuFontSizePanelContainer);

      _this = _super.call(this, player, options);

      _this.addChild('viuFontSizeTitle', options);

      _this.addChild('viuFontSizeList', options);

      return _this;
    }

    _createClass(ViuFontSizePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuFontSizePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-fontsize-drawer-container',
          dir: 'ltr'
        });

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

      _this2 = _super2.call(this, player, options);

      _this2.addChild('viuFontSizePanelContainer', options);

      return _this2;
    }

    _createClass(ViuFontSizePanel, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuFontSizePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-fontsize-drawer',
          dir: 'ltr'
        });

        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        this.containerDownStep();
      } // 向下方法

    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop + 300;
        }
      } // 向上方法

    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop - 300;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        // 关闭其他panel
        if (!this.hasClass('active')) {
          this.addClass('active');
          this.player_.ViuPlayer().setUniquePanelOpen('isFontSizeAreaSelected');
          this.player_.addClass('vjs-fontsize-drawer-open');
        } else {
          this.removeClass('active');
          this.player_.ViuPlayer().setAllPanelClose();
          this.player_.removeClass('vjs-fontsize-drawer-open');
        }
      }
    }]);

    return ViuFontSizePanel;
  }(Component$e);

  videojs.registerComponent('viuFontSizePanel', ViuFontSizePanel);
  videojs.registerComponent('viuFontSizePanelContainer', ViuFontSizePanelContainer);
  videojs.registerComponent('viuFontSizeTitle', SizeTitle);
  videojs.registerComponent('viuFontSizeList', ViuFontSizeList);

  var Button$5 = videojs.getComponent('Button');
  /**
   *  Button 详情
   */

  var ViuAdvanceComponent = /*#__PURE__*/function (_Button) {
    _inherits(ViuAdvanceComponent, _Button);

    var _super = _createSuper(ViuAdvanceComponent);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuAdvanceComponent(player, options) {
      var _this;

      _classCallCheck(this, ViuAdvanceComponent);

      _this = _super.call(this, player, options);

      _this.controlText('Text');

      _this.on('mouseenter', function () {
        var ViuPlayer = _this.player_.ViuPlayer();

        var index = ViuPlayer.state.actionArea.findIndex(function (item) {
          return item && item.name_ === 'ViuAdvance';
        });
        ViuPlayer.setState({
          isActionSelected: index
        });
        ViuPlayer.setComponentSelected(index);
      });

      return _this;
    }

    _createClass(ViuAdvanceComponent, [{
      key: "buildCSSClass",
      value: function buildCSSClass() {
        return "vjs-viu-advance-button vjs-control ".concat(_get(_getPrototypeOf(ViuAdvanceComponent.prototype), "buildCSSClass", this).call(this));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.player_.getChild('viuAdvancePanel').handleClick();

        if (!this.hasClass('vjs-advance-active')) {
          this.addClass('vjs-advance-active');
          this.player_.ViuPlayer().setUniquePanelOpen('isAdvanceAreaSelected');
        } else {
          this.removeClass('vjs-advance-active');
          this.player_.ViuPlayer().setAllPanelClose();
        }
      }
    }]);

    return ViuAdvanceComponent;
  }(Button$5);

  videojs.registerComponent('viuAdvance', ViuAdvanceComponent);

  var Component$f = videojs.getComponent('Component');
  var dom$8 = videojs.dom;
  var defaults$9 = {
    title: ''
  };
  /**
   * ViuResolutionList
   */

  var ViuResolutionList = /*#__PURE__*/function (_Component) {
    _inherits(ViuResolutionList, _Component);

    var _super = _createSuper(ViuResolutionList);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuResolutionList(player, options) {
      var _this;

      _classCallCheck(this, ViuResolutionList);

      _this = _super.call(this, player, options);
      _this.options = videojs.mergeOptions(defaults$9, options);

      _this.on('click', function (event) {
        event.stopPropagation();
        var id = event.target.dataset.id;

        if (id) {
          _this.handleClick(id);
        }
      });

      _this.on('mouseover', function (event) {
        if (event.target.attributes && event.target.attributes['data-id']) {
          var id = event.target.attributes['data-id'].value;

          var index = _this.totalList.findIndex(function (item) {
            return item && item === id;
          });

          _this.setState({
            isSelected: index
          });

          _this.setComponentSelected(index);
        }
      });

      _this.resolutionListTotal = parseInt(_this.options.advance.resolutionList.length, 10) || 0;
      _this.cdnListTotal = parseInt(_this.options.advance.cdnList.length, 10) || 0;
      _this.resolutionList = _this.options.advance.resolutionList;
      _this.cdnList = _this.options.advance.cdnList;
      _this.totalList = _this.options.advance.isCDNOpen ? _this.resolutionList.concat(_this.cdnList) : _this.resolutionList;
      _this.state = {
        isSelected: 0,
        isSelectLevel: 0
      };

      _this.player_.ready(function () {
        _this.setDefaultSelected();
      });

      return _this;
    }

    _createClass(ViuResolutionList, [{
      key: "createEl",
      value: function createEl() {
        var _this2 = this;

        var heroTitle = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('resolution_hero_title'),
          className: 'vjs-viu-player-list-title',
          dir: 'ltr'
        });

        var resTitle = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('resolution_title'),
          className: 'vjs-viu-player-list-sub-title res-sub-title',
          dir: 'ltr'
        });

        var root = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-list-container',
          dir: 'ltr'
        });

        var resolutionList = this.options_.advance.resolutionList || [];

        var resolutionWrapper = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        });

        resolutionList.map(function (item) {
          var sigleItem = dom$8.createEl('li', {
            textContent: _this2.localize("res_".concat(item)),
            className: "vjs-viu-player-list-item vjs-viu-res-item ".concat(_this2.options_.advance.defaultResolution === item ? 'selected-active' : '', " ").concat(_get(_getPrototypeOf(ViuResolutionList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          });
          sigleItem.dataset.id = item;
          resolutionWrapper.appendChild(sigleItem);
        }); // CDN

        var cdnListTitle = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'div', {
          textContent: this.localize('cdn_title'),
          className: 'vjs-viu-player-list-sub-title cdn_sub_title',
          dir: 'ltr'
        });

        var cdnListWrapper = _get(_getPrototypeOf(ViuResolutionList.prototype), "createEl", this).call(this, 'ui', {
          className: 'vjs-viu-player-list',
          dir: 'ltr'
        });

        var cdnList = this.options_.advance.cdnList || [];
        cdnList.map(function (item) {
          var sigleItem = dom$8.createEl('li', {
            textContent: _this2.localize("res_".concat(item)),
            className: "vjs-viu-player-list-item  vjs-viu-res-item vjs-viu-cdn-item ".concat(_this2.options_.advance.defaultCdn === item ? 'selected-active' : '', " ").concat(_get(_getPrototypeOf(ViuResolutionList.prototype), "buildCSSClass", _this2).call(_this2)),
            dir: 'ltr'
          });
          sigleItem.dataset.id = item;
          cdnListWrapper.appendChild(sigleItem);
        });
        root.appendChild(heroTitle);
        root.appendChild(resTitle);
        root.appendChild(resolutionWrapper);

        if (this.options_.advance.isCDNOpen) {
          root.appendChild(cdnListTitle);
          root.appendChild(cdnListWrapper);
        }

        return root;
      }
    }, {
      key: "setDefaultSelected",
      value: function setDefaultSelected() {
        this.setState({
          isSelected: 0
        });
        var items = dom$8.$$('.vjs-viu-res-item');

        if (items[0]) {
          dom$8.addClass(items[0], 'active');
        }
      }
    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        this.selectedUpperStep();
      }
    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        this.selectedDownerStep();
      }
    }, {
      key: "selectedUpperStep",
      value: function selectedUpperStep() {
        var step = this.state.isSelected;
        var upStep = step - 1 < 0 ? 0 : step - 1;

        if (upStep < this.resolutionListTotal) {
          this.setState({
            isSelectLevel: 0
          });
        }

        this.setState({
          isSelected: upStep
        });
        this.setComponentSelected(upStep);
      }
    }, {
      key: "selectedDownerStep",
      value: function selectedDownerStep() {
        var step = this.state.isSelected;
        var total = this.totalList.length;
        var downStep = step + 1 >= total ? total - 1 : step + 1;

        if (downStep > this.resolutionListTotal - 1) {
          this.setState({
            isSelectLevel: 1
          });
        }

        this.setState({
          isSelected: downStep
        });
        this.setComponentSelected(downStep);
      }
      /**
       * function setComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新主区选择状态处理器
       */

    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        var items = dom$8.$$('.vjs-viu-res-item');

        if (items) {
          for (var i = 0; i < items.length; i++) {
            if (dom$8.hasClass(items[i], 'active')) {
              dom$8.removeClass(items[i], 'active');
            }
          }

          if (items[step]) {
            dom$8.addClass(items[step], 'active');
          }
        }
      }
      /**
       * function setComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新主区状态选择状态处理器
       */

    }, {
      key: "setComponentResSelected",
      value: function setComponentResSelected(step) {
        var items = dom$8.$$('.vjs-viu-res-item');

        if (items) {
          for (var i = 0; i < items.length; i++) {
            if (dom$8.hasClass(items[i], 'selected-active')) {
              dom$8.removeClass(items[i], 'selected-active');
            }
          }

          if (items[step]) {
            dom$8.addClass(items[step], 'selected-active');
          }
        }
      }
    }, {
      key: "setResolutionListActive",
      value: function setResolutionListActive(id) {
        var items = dom$8.$$('.vjs-viu-res-item');
        Array.from(items).filter(function (item) {
          return !dom$8.hasClass(item, 'vjs-viu-cdn-item');
        }).forEach(function (item) {
          if (dom$8.hasClass(item, 'selected-active')) {
            dom$8.removeClass(item, 'selected-active');
          }

          if (item.dataset.id === id) {
            dom$8.addClass(item, 'selected-active');
          }
        });
      }
    }, {
      key: "setCdnListActive",
      value: function setCdnListActive(id) {
        var items = dom$8.$$('.vjs-viu-res-item');
        Array.from(items).filter(function (item) {
          return dom$8.hasClass(item, 'vjs-viu-cdn-item');
        }).forEach(function (item) {
          if (dom$8.hasClass(item, 'selected-active')) {
            dom$8.removeClass(item, 'selected-active');
          }

          if (item.dataset.id === id) {
            dom$8.addClass(item, 'selected-active');
          }
        });
      }
      /**
       * function handleClick
       *
       * @param {*id标识} id
       */

    }, {
      key: "handleClick",
      value: function handleClick(id) {
        this.clearAllClass();

        if (this.player_ && !this.player_.hasClass("v-res-".concat(id))) {
          this.player_.addClass("v-res-".concat(id));
        }

        if (this.resolutionList.includes(id)) {
          this.setResolutionListActive(id);
        }

        if (this.cdnList.includes(id)) {
          this.setCdnListActive(id);
        }

        this.player_.getChild('ViuPlayerComponent').viuAdvance.handleClick();
        this.player_.trigger('viuAdvance', {
          id: id,
          isSelectLevel: this.state.isSelectLevel || 0
        });
      }
    }, {
      key: "confirm",
      value: function confirm() {
        var selected = this.state.isSelected;
        var isSelectLevel = this.state.isSelectLevel;

        switch (isSelectLevel) {
          case 0:
            if (this.options_.advance.resolutionList[selected]) {
              var id = this.options_.advance.resolutionList[selected];

              if (id) {
                this.handleClick(id);
              }
            }

            break;

          case 1:
            if (this.options_.advance.cdnList[selected - this.resolutionListTotal]) {
              var _id = this.options_.advance.cdnList[selected - this.resolutionListTotal];

              if (_id) {
                this.handleClick(_id);
              }
            }

            break;
        }
      }
    }, {
      key: "clearAllClass",
      value: function clearAllClass() {
        var _this3 = this;

        var classList = this.totalList || [];
        classList.forEach(function (item) {
          if (_this3.player_.hasClass("v-res-".concat(item))) {
            _this3.player_.removeClass("v-res-".concat(item));
          }
        });
      }
    }]);

    return ViuResolutionList;
  }(Component$f);

  var Component$g = videojs.getComponent('component');
  /**
   * 描述 ViuAdvancePanelContainer
   * @date 2020-08-13
   * @param {Player} player
   * @param {Object} [options]
   *
   */

  var ViuAdvancePanelContainer = /*#__PURE__*/function (_Component) {
    _inherits(ViuAdvancePanelContainer, _Component);

    var _super = _createSuper(ViuAdvancePanelContainer);

    function ViuAdvancePanelContainer(player, options) {
      var _this;

      _classCallCheck(this, ViuAdvancePanelContainer);

      _this = _super.call(this, player, options);

      _this.addChild('viuResolutionList', options);

      return _this;
    }

    _createClass(ViuAdvancePanelContainer, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuAdvancePanelContainer.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer-container vjs-viu-player-advance-drawer-container',
          dir: 'ltr'
        });

        return root;
      }
    }]);

    return ViuAdvancePanelContainer;
  }(Component$g);
  /**
   * 描述 ViuAdvancePanel
   * @date 2020-08-13
   * @param {any} player
   * @param {any} options
   * @return {any}
   */


  var ViuAdvancePanel = /*#__PURE__*/function (_Component2) {
    _inherits(ViuAdvancePanel, _Component2);

    var _super2 = _createSuper(ViuAdvancePanel);

    function ViuAdvancePanel(player, options) {
      var _this2;

      _classCallCheck(this, ViuAdvancePanel);

      _this2 = _super2.call(this, player, options);

      _this2.addChild('viuAdvancePanelContainer', options);

      return _this2;
    }

    _createClass(ViuAdvancePanel, [{
      key: "createEl",
      value: function createEl() {
        var root = _get(_getPrototypeOf(ViuAdvancePanel.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-drawer vjs-viu-player-advance-drawer ',
          dir: 'ltr'
        });

        return root;
      }
    }, {
      key: "upperStep",
      value: function upperStep() {
        this.containerUpperStep();
      }
    }, {
      key: "downStep",
      value: function downStep() {
        this.containerDownStep();
      } // 向下方法

    }, {
      key: "containerDownStep",
      value: function containerDownStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop + 300;
        }
      } // 向上方法

    }, {
      key: "containerUpperStep",
      value: function containerUpperStep() {
        var content = this.eventBusEl_.childNodes[0];

        if (content.clientHeight <= content.scrollHeight) {
          content.scrollTop = content.scrollTop - 300;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        // 关闭其他panel
        if (!this.hasClass('active')) {
          this.addClass('active');
          this.player_.addClass('vjs-advance-drawer-open');
        } else {
          this.removeClass('active');
          this.player_.removeClass('vjs-advance-drawer-open');
        }
      }
    }]);

    return ViuAdvancePanel;
  }(Component$g);

  videojs.registerComponent('viuAdvancePanel', ViuAdvancePanel);
  videojs.registerComponent('viuAdvancePanelContainer', ViuAdvancePanelContainer);
  videojs.registerComponent('viuResolutionList', ViuResolutionList);

  var version = "0.4.2";

  var Plugin = videojs.getPlugin('plugin');
  var Component$h = videojs.getComponent('component'); // Default options for the plugin.

  var defaults$a = {
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
  };
  /**
   * An advanced Video.js plugin. For more information on the API
   *
   * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
   */

  var ViuPlayer = /*#__PURE__*/function (_Plugin) {
    _inherits(ViuPlayer, _Plugin);

    var _super = _createSuper(ViuPlayer);

    /**
     * Create a ViuPlayer plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function ViuPlayer(player, options) {
      var _this;

      _classCallCheck(this, ViuPlayer);

      // the parent class will add player under this.player
      _this = _super.call(this, player);
      _this.options = videojs.mergeOptions(defaults$a, options);

      _this.player.addChild('ViuPlayerComponent', _this.options);

      _this.player.addChild('viuInfoPanel', _this.options);

      _this.player.addChild('viuSubtitlePanel', _this.options);

      _this.player.addChild('viuFontSizePanel', _this.options);

      _this.player.addChild('viuAdvancePanel', _this.options);

      _this.player.addChild('viuControlBarBackground', _this.options);

      _this.player.addChild('LoadingTips', _this.options);

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

      _this.player.ready(function () {
        _this.player.addClass('vjs-viu-player');

        if (_this.player.getChild('ViuPlayerComponent')) {
          _this.player.getChild('ViuPlayerComponent').addChild('viuProcessInfo', _this.options.info);
        } // 默认展示按钮


        var originActionArea = [_this.player.getChild('ViuPlayerComponent').controlBar, _this.player.getChild('ViuPlayerComponent').playToggle, _this.player.getChild('ViuPlayerComponent').viuNextChip, _this.player.getChild('ViuPlayerComponent').viuInfo, _this.player.getChild('ViuPlayerComponent').viuSubtitle, _this.player.getChild('ViuPlayerComponent').viuAdvance, _this.player.getChild('ViuPlayerComponent').viuTopSubtitle, _this.player.getChild('ViuPlayerComponent').viuFontSize]; // 处理鼠标点击控制失效问题

        for (var j = 0; j < originActionArea.length; j++) {
          if (originActionArea[j]) {
            originActionArea[j].on('click', function (event) {
              if (Object.prototype.hasOwnProperty.call(this, 'blur')) {
                this.blur();
              }
            });
          }
        }

        _this.originActionArea = originActionArea.slice();
        _this.defaultActionArea = originActionArea; // 不可以显示下一集按钮

        var _this$options$info = _this.options.info,
            chipTotal = _this$options$info.chipTotal,
            episode = _this$options$info.episode,
            isMovie = _this$options$info.isMovie,
            chipActiveTotal = _this$options$info.chipActiveTotal;

        if (chipTotal === episode || isMovie === 1 || Number(episode) === chipActiveTotal) {
          var viuNextChipBtn = _this.player.getChild('ViuPlayerComponent').viuNextChip;

          viuNextChipBtn.addClass('hidden');

          var index = _this.defaultActionArea.findIndex(function (item) {
            return item && item.name_ === 'ViuNextChip';
          });

          _this.defaultActionArea.splice(index, 1);
        } // 动态处理


        _this.on('statechanged', function (event, data) {
          // 处理双字幕动态
          if (event.changes && event.changes.isTopSubtitleDisable) {
            var changeActionArea = _this.state.actionArea;

            var viuTopSubtitleBtn = _this.player.getChild('ViuPlayerComponent').viuTopSubtitle;

            var currentIndex = _this.state.actionArea.findIndex(function (item) {
              return item && item.name_ === 'ViuTopSubtitle';
            });

            if (currentIndex > -1) {
              _this.setState({
                topSubtitleIndex: currentIndex
              });
            }

            if (event.changes.isTopSubtitleDisable.to) {
              changeActionArea.splice(currentIndex, 1);
            } else {
              changeActionArea.splice(_this.state.topSubtitleIndex, 0, viuTopSubtitleBtn);
            }

            if (_this.state.isActionSelected !== 0) {
              _this.setState({
                isActionSelected: _this.state.topSubtitleIndex,
                actionArea: changeActionArea
              });

              _this.clearDefaultComponentSelected();

              _this.setComponentSelected(_this.state.topSubtitleIndex);
            } else {
              _this.setState({
                isActionSelected: 0,
                actionArea: changeActionArea
              });

              _this.clearDefaultComponentSelected();

              _this.setComponentSelected(0);
            }
          }
        });

        _this.setState({
          actionArea: _this.defaultActionArea
        });

        if (_this.state.actionArea[_this.state.isActionSelected]) {
          _this.state.actionArea[_this.state.isActionSelected].addClass('status-active');
        }

        if (_this.state.actionArea[1]) {
          _this.state.actionArea[1].on('mouseenter', function () {
            _this.setState({
              isActionSelected: 1
            });

            _this.setComponentSelected(1);
          });
        }

        if (_this.state.actionArea[0]) {
          _this.state.actionArea[0].on('mouseenter', function () {
            _this.setState({
              isActionSelected: 0
            });

            _this.setComponentSelected(0);
          });
        } // 增加默认设置双字幕开关


        _this.checkTopSubtitleDisable(_this.options.isTopSubtitleDisable);
      });

      return _this;
    }
    /**
     * function upperSelectAction
     * 往上选择主方法
     */


    _createClass(ViuPlayer, [{
      key: "checkTopSubtitleDisable",
      value: function checkTopSubtitleDisable(status) {
        this.setState({
          isTopSubtitleDisable: status
        });
        var viuTopSubtitle = this.player.getChild('ViuPlayerComponent').viuTopSubtitle;
        viuTopSubtitle.trigger('toggleDisable', {
          disable: status
        });
      }
      /**
       * function upperSelectAction
       * 往上选择主方法
       */

    }, {
      key: "upperSelectAction",
      value: function upperSelectAction() {
        if (this.checkAllPanelClose()) {
          var upStep = 0;
          this.setState({
            isActionSelected: upStep
          });
          this.setComponentSelected(upStep);
        } else {
          var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');
          var fontSizeList = this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList');
          var viuResolutionList = this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList');
          var viuChipName = this.player.getChild('ViuInfoPanel');

          if (this.state.panel.isSubtileAreaSelected) {
            viuLangList.upperSelectAction();
          }

          if (this.state.panel.isInfoAreaSelected) {
            viuChipName.containerUpperStep();
          }

          if (this.state.panel.isFontSizeAreaSelected) {
            fontSizeList.upperSelectAction();
          }

          if (this.state.panel.isAdvanceAreaSelected) {
            viuResolutionList.upperSelectAction();
          }
        }
      }
      /**
       * function leftSelectAction
       * 往左选择主方法
       */

    }, {
      key: "leftSelectAction",
      value: function leftSelectAction() {
        if (this.checkAllPanelClose()) {
          var step = this.state.isActionSelected;
          var leftStep = step - 1 < 1 ? 1 : step - 1;
          this.setState({
            isActionSelected: leftStep
          });
          this.setComponentSelected(leftStep);
        } else {
          var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');

          if (this.checkAllPanelClose()) {
            viuLangList.upperSelectAction();
          }
        }
      }
      /**
       * function rightSelectAction
       * 往右选择主方法
       */

    }, {
      key: "rightSelectAction",
      value: function rightSelectAction() {
        if (this.checkAllPanelClose()) {
          var step = this.state.isActionSelected;
          var rightStep = step + 1 > this.state.actionArea.length - 1 ? this.state.actionArea.length - 1 : step + 1;
          this.setState({
            isActionSelected: rightStep
          });
          this.setComponentSelected(rightStep);
        } else {
          var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');

          if (this.state.panel.isSubtileAreaSelected) {
            viuLangList.upperSelectAction();
          }
        }
      }
      /**
       * function downerSelectAction
       * 往下选择主方法
       */

    }, {
      key: "downerSelectAction",
      value: function downerSelectAction() {
        if (this.checkAllPanelClose()) {
          var step = this.state.isActionSelected;
          var downStep = step === 0 ? 1 : step;
          this.setState({
            isActionSelected: downStep
          });
          this.setComponentSelected(downStep);
        } else {
          var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');
          var fontSizeList = this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList');
          var viuResolutionList = this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList');
          var ViuInfoPanel = this.player.getChild('ViuInfoPanel');

          if (this.state.panel.isSubtileAreaSelected) {
            viuLangList.downerSelectAction();
          }

          if (this.state.panel.isInfoAreaSelected) {
            ViuInfoPanel.containerDownStep();
          }

          if (this.state.panel.isFontSizeAreaSelected) {
            fontSizeList.downerSelectAction();
          }

          if (this.state.panel.isAdvanceAreaSelected) {
            viuResolutionList.downerSelectAction();
          }
        }
      }
      /**
       * function setComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新主区选择状态处理器
       */

    }, {
      key: "setComponentSelected",
      value: function setComponentSelected(step) {
        var _this2 = this;
        Object.keys(this.state.actionArea).map(function (item) {
          if (parseInt(item, 10) !== step) {
            _this2.state.actionArea[item].removeClass('status-active');
          }
        });
        this.state.actionArea[step].addClass('status-active');
      }
    }, {
      key: "clearDefaultComponentSelected",
      value: function clearDefaultComponentSelected() {
        for (var i = 0; i < this.originActionArea.length; i++) {
          this.originActionArea[i].removeClass('status-active');
        }
      }
      /**
       * function setLangListComponentSelected
       *
       * @param {*Number 选择索引} step
       * 更新语言区选择状态处理器
       */

    }, {
      key: "setLangListComponentSelected",
      value: function setLangListComponentSelected(step) {
        var _this3 = this;

        Object.keys(this.state.actionArea).map(function (item) {
          if (parseInt(item, 10) !== step) {
            _this3.state.actionArea[item].removeClass('status-active');
          }
        });
        this.state.actionArea[step].addClass('status-active');
      }
      /**
       * function checkVideoProcessed
       * 检查是否可以操作进度条
       */

    }, {
      key: "checkVideoProcessed",
      value: function checkVideoProcessed() {
        return this.state.isActionSelected === 0 && this.checkAllPanelClose();
      }
      /**
       * function toggleInfo
       * 信息弹层触发器
       */

    }, {
      key: "toggleInfo",
      value: function toggleInfo() {
        var index = this.state.actionArea.findIndex(function (item) {
          return item.name_ && item.name_ === 'ViuInfo';
        });
        this.setState({
          isActionSelected: index
        });
        this.setComponentSelected(index);
        var viuInfo = this.player.getChild('ViuPlayerComponent').viuInfo;
        viuInfo.trigger('click');
      }
      /**
       * function toggleSubtitle
       * 主字幕弹层触发器
       */

    }, {
      key: "toggleSubtitle",
      value: function toggleSubtitle(step) {
        var index = this.state.actionArea.findIndex(function (item) {
          return item.name_ && item.name_ === 'ViuSubtitle';
        });
        this.setState({
          isActionSelected: index
        });
        this.setComponentSelected(index);
        var viuSubtitle = this.player.getChild('ViuPlayerComponent').viuSubtitle;
        viuSubtitle.trigger('click');
      }
      /**
       * function toggleFontSize
       * 弹层触发器
       */

    }, {
      key: "toggleFontSize",
      value: function toggleFontSize() {
        var index = this.state.actionArea.findIndex(function (item) {
          return item.name_ && item.name_ === 'ViuFontSize';
        });
        this.setState({
          isActionSelected: index
        });
        this.setComponentSelected(index);
        var viuSubtitle = this.player.getChild('ViuPlayerComponent').viuFontSize;
        viuSubtitle.trigger('click');
      }
      /**
       * function showTopSubtitle
       * 双字幕显示触发开关
       */

    }, {
      key: "showTopSubtitle",
      value: function showTopSubtitle() {
        if (this.player.getChild('ViuPlayerComponent')) {
          var viuTopSubtitle = this.player.getChild('ViuPlayerComponent').viuTopSubtitle;
          viuTopSubtitle.trigger('toggleShow', {
            open: true
          });
        }
      }
      /**
       * function hideTopSubtitle
       * 双字幕隐藏触发开关
       */

    }, {
      key: "hideTopSubtitle",
      value: function hideTopSubtitle() {
        if (this.player.getChild('ViuPlayerComponent')) {
          var viuTopSubtitle = this.player.getChild('ViuPlayerComponent').viuTopSubtitle;
          viuTopSubtitle.trigger('toggleShow', {
            open: false
          });
        }
      }
      /**
       * function loadNewLangListOptions
       * 重新加载语言列表数据
       */

    }, {
      key: "loadNewLangListOptions",
      value: function loadNewLangListOptions(options) {
        var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');
        viuLangList.loadNewLangListOptions(options);
      }
      /**
       * function toggleTopSubtitle
       * 双字幕隐藏触发开关
       */

    }, {
      key: "toggleTopSubtitle",
      value: function toggleTopSubtitle() {
        var viuTopSubtitle = this.player.getChild('ViuPlayerComponent').viuTopSubtitle;
        return viuTopSubtitle.handleClick();
      }
      /**
       * function toggleNextChip
       * 下一集触发开关
       */

    }, {
      key: "toggleNextChip",
      value: function toggleNextChip() {
        if (this.player.getChild('ViuPlayerComponent')) {
          var viuNextChip = this.player.getChild('ViuPlayerComponent').viuNextChip;
          viuNextChip.trigger('click');
        }
      }
      /**
       * function return
       * 反回键
       * @returns {Callback}
       */

    }, {
      key: "return",
      value: function _return(callback) {
        if (!this.checkAllPanelClose()) {
          this.returnKeyReset();
          videojs.log('返回调试--state--', this.state);
        } else if (callback) {
          callback();
        }
      }
      /**
       * function return
       * 确定方法
       * @returns {Callback}
       */

    }, {
      key: "confirm",
      value: function confirm() {
        if (this.checkAllPanelClose()) {
          var playToggle = this.player.getChild('ViuPlayerComponent').getChild('playToggle');
          var name = this.state.actionArea[this.state.isActionSelected].name_;

          switch (name) {
            case 'ControlBar':
              playToggle.handleClick();
              break;

            case 'PlayToggle':
              playToggle.handleClick();
              break;

            case 'ViuNextChip':
              var viuNextChip = this.player.getChild('ViuPlayerComponent').getChild('viuNextChip');
              viuNextChip.handleClick();
              break;

            case 'ViuInfo':
              this.toggleInfo();
              break;

            case 'ViuSubtitle':
              this.toggleSubtitle();
              break;

            case 'ViuTopSubtitle':
              this.toggleTopSubtitle();
              break;

            case 'ViuFontSize':
              var viuFontSize = this.player.getChild('ViuPlayerComponent').getChild('viuFontSize');
              viuFontSize.handleClick();
              break;

            case 'ViuAdvance':
              var viuAdvance = this.player.getChild('ViuPlayerComponent').getChild('viuAdvance');
              viuAdvance.handleClick();
              break;
          }
        } else {
          // 有panel开启状态
          var viuLangList = this.player.getChild('viuSubtitlePanel').getChild('viuSubtitlePanelContainer').getChild('langList');
          var fontSizeList = this.player.getChild('viuFontSizePanel').getChild('viuFontSizePanelContainer').getChild('viuFontSizeList');
          var viuResolutionList = this.player.getChild('viuAdvancePanel').getChild('viuAdvancePanelContainer').getChild('viuResolutionList');

          if (this.state.panel.isSubtileAreaSelected) {
            viuLangList.confirm();
          }

          if (this.state.panel.isFontSizeAreaSelected) {
            fontSizeList.confirm();
          }

          if (this.state.panel.isAdvanceAreaSelected) {
            viuResolutionList.confirm();
          }
        }
      }
      /**
       * function checkUniquePanelOopen
       * panel公共打开方法
       */

    }, {
      key: "setUniquePanelOpen",
      value: function setUniquePanelOpen(panel) {
        var allPanel = this.state.panel;

        if (Object.hasOwnProperty.call(allPanel, panel)) {
          var updatePanel = Object.assign({}, allPanel, _defineProperty({}, panel, true), this.getOtherDefaultPanel(panel));
          this.setState({
            panel: updatePanel
          });
        }
      }
      /**
       * function checkUniquePanelOopen
       * panel公共关团方法
       */

    }, {
      key: "setAllPanelClose",
      value: function setAllPanelClose() {
        this.setState({
          panel: this.getAllDefaultPanel()
        });
      }
      /**
       * function checkUniquePanelOopen
       * 检查所有panel关闭
       */

    }, {
      key: "checkAllPanelClose",
      value: function checkAllPanelClose() {
        var defaultClose = true;
        var panel = this.state.panel;

        for (var i in panel) {
          if (panel[i]) {
            defaultClose = false;
            break;
          }
        }

        return defaultClose;
      }
    }, {
      key: "getOtherDefaultPanel",
      value: function getOtherDefaultPanel(panel) {
        var otherPanel = this.state.panel;
        delete otherPanel[panel];

        for (var i in otherPanel) {
          otherPanel[i] = false;
        }

        return otherPanel;
      }
    }, {
      key: "getAllDefaultPanel",
      value: function getAllDefaultPanel(panel) {
        var otherPanel = this.state.panel;

        for (var i in otherPanel) {
          otherPanel[i] = false;
        }

        return otherPanel;
      }
    }, {
      key: "returnKeyReset",
      value: function returnKeyReset() {
        for (var i in this.state.panel) {
          if (this.state.panel[i]) {
            switch (i) {
              case 'isSubtileAreaSelected':
                this.player.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
                break;

              case 'isInfoAreaSelected':
                this.player.getChild('ViuPlayerComponent').viuInfo.handleClick();
                break;

              case 'isFontSizeAreaSelected':
                this.player.getChild('ViuPlayerComponent').viuFontSize.handleClick();
                break;

              case 'isAdvanceAreaSelected':
                this.player.getChild('ViuPlayerComponent').viuAdvance.handleClick();
                break;
            }
          }
        }
      }
    }]);

    return ViuPlayer;
  }(Plugin); // Define default values for the plugin's `state` object here.


  ViuPlayer.defaultState = {}; // Include the version number.

  ViuPlayer.VERSION = version;

  var ViuPlayerComponent = /*#__PURE__*/function (_Component) {
    _inherits(ViuPlayerComponent, _Component);

    var _super2 = _createSuper(ViuPlayerComponent);

    function ViuPlayerComponent(player, options) {
      _classCallCheck(this, ViuPlayerComponent);

      return _super2.call(this, player, options);
    }

    _createClass(ViuPlayerComponent, [{
      key: "createEl",
      value: function createEl() {
        return _get(_getPrototypeOf(ViuPlayerComponent.prototype), "createEl", this).call(this, 'div', {
          className: 'vjs-viu-player-panel',
          dir: 'ltr'
        });
      }
    }]);

    return ViuPlayerComponent;
  }(Component$h);

  ViuPlayerComponent.prototype.options_ = {
    children: ['playToggle', 'viuNextChip', 'viuInfo', 'viuSubtitle', 'viuAdvance', 'viuTopSubtitle', 'viuFontSize']
  };
  videojs.registerComponent('ViuPlayerComponent', ViuPlayerComponent); // Register the plugin with video.js.

  var registerPlugin = videojs.registerPlugin || videojs.plugin;
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
