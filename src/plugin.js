import videojs from 'video.js';
// import remoteKeys from '@viu/remote-keys';
import './viuInfo';
import './viuNextChip';
import './viuSubtitle';
import './viuTopSubtitle';
import './infoPanel/viuInfoPanel';
import './subtitlePanel/viuSubtitlePanel';
import './viuProcessInfo';
import './viuControlBarBackground';
import './loadingTips';
import './viuFontsize';
import './fontSizePanel/viuFontSizePanel';
import './viuAdvance';
import './advancePanel/viuAdvancePanel';

import { version as VERSION } from '../package.json';

const Plugin = videojs.getPlugin('plugin');

const Component = videojs.getComponent('component');

// Default options for the plugin.
const defaults = {
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
class ViuPlayer extends Plugin {
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
  constructor(player, options) {
    // the parent class will add player under this.player
    super(player);

    this.options = videojs.mergeOptions(defaults, options);
    this.player.addChild('ViuPlayerComponent', this.options);
    this.player.addChild('viuInfoPanel', this.options);
    this.player.addChild('viuSubtitlePanel', this.options);
    this.player.addChild('viuFontSizePanel', this.options);
    this.player.addChild('viuAdvancePanel', this.options);
    this.player.addChild('viuControlBarBackground', this.options);
    this.player.addChild('LoadingTips', this.options);

    this.state = {
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

    this.player.ready(() => {
      this.player.addClass('vjs-viu-tools');

      if (this.player.getChild('ViuPlayerComponent')) {
        this.player
          .getChild('ViuPlayerComponent')
          .addChild('viuProcessInfo', this.options.info);
      }
      // 默认展示按钮
      const originActionArea = [
        this.player.getChild('ViuPlayerComponent').controlBar,
        this.player.getChild('ViuPlayerComponent').playToggle,
        this.player.getChild('ViuPlayerComponent').viuNextChip,
        this.player.getChild('ViuPlayerComponent').viuInfo,
        this.player.getChild('ViuPlayerComponent').viuSubtitle,
        this.player.getChild('ViuPlayerComponent').viuAdvance,
        this.player.getChild('ViuPlayerComponent').viuTopSubtitle
        // this.player.getChild("ViuPlayerComponent").viuFontSize,
      ];
      // 处理鼠标点击控制失效问题

      for (let j = 0; j < originActionArea.length; j++) {
        if (originActionArea[j]) {
          originActionArea[j].on('click', function(event) {
            if (Object.prototype.hasOwnProperty.call(this, 'blur')) {
              this.blur();
            }
          });
        }
      }
      this.originActionArea = originActionArea.slice();
      this.defaultActionArea = originActionArea;

      // 不可以显示下一集按钮
      const {
        chipTotal,
        episode,
        isMovie,
        chipActiveTotal
      } = this.options.info;

      if (
        chipTotal === episode ||
        isMovie === 1 ||
        Number(episode) === chipActiveTotal
      ) {
        const viuNextChipBtn = this.player.getChild('ViuPlayerComponent')
          .viuNextChip;

        viuNextChipBtn.addClass('hidden');
        const index = this.defaultActionArea.findIndex((item) => item && item.name_ === 'ViuNextChip');

        this.defaultActionArea.splice(index, 1);
      }

      // 动态处理
      this.on('statechanged', (event, data) => {
        // 处理双字幕动态
        if (event.changes && event.changes.isTopSubtitleDisable) {
          const changeActionArea = this.state.actionArea;
          const viuTopSubtitleBtn = this.player.getChild('ViuPlayerComponent')
            .viuTopSubtitle;
          const currentIndex = this.state.actionArea.findIndex((item) => item && item.name_ === 'ViuTopSubtitle');

          if (currentIndex > -1) {
            this.setState({
              topSubtitleIndex: currentIndex
            });
          }

          if (event.changes.isTopSubtitleDisable.to) {
            changeActionArea.splice(currentIndex, 1);
          } else {
            changeActionArea.splice(
              this.state.topSubtitleIndex,
              0,
              viuTopSubtitleBtn
            );
          }
          if (this.state.isActionSelected !== 0) {
            this.setState({
              isActionSelected: this.state.topSubtitleIndex,
              actionArea: changeActionArea
            });
            this.clearDefaultComponentSelected();
            this.setComponentSelected(this.state.topSubtitleIndex);
          } else {
            this.setState({
              isActionSelected: 0,
              actionArea: changeActionArea
            });
            this.clearDefaultComponentSelected();
            this.setComponentSelected(0);
          }
        }
      });

      this.setState({
        actionArea: this.defaultActionArea
      });

      if (this.state.actionArea[this.state.isActionSelected]) {
        this.state.actionArea[this.state.isActionSelected].addClass('status-active');
      }
      if (this.state.actionArea[1]) {
        this.state.actionArea[1].on('mouseenter', () => {
          this.setState({
            isActionSelected: 1
          });
          this.setComponentSelected(1);
        });
      }
      if (this.state.actionArea[0]) {
        this.state.actionArea[0].on('mouseenter', () => {
          this.setState({
            isActionSelected: 0
          });
          this.setComponentSelected(0);
        });
      }
      // 增加默认设置双字幕开关
      this.checkTopSubtitleDisable(this.options.isTopSubtitleDisable);
    });
  }
  /**
   * function upperSelectAction
   * 往上选择主方法
   */
  checkTopSubtitleDisable(status) {
    this.setState({
      isTopSubtitleDisable: status
    });
    const viuTopSubtitle = this.player.getChild('ViuPlayerComponent')
      .viuTopSubtitle;

    viuTopSubtitle.trigger('toggleDisable', {
      disable: status
    });
  }
  /**
   * function upperSelectAction
   * 往上选择主方法
   */
  upperSelectAction() {
    if (this.checkAllPanelClose()) {
      const upStep = 0;

      this.setState({
        isActionSelected: upStep
      });
      this.setComponentSelected(upStep);
    } else {
      const viuLangList = this.player
        .getChild('viuSubtitlePanel')
        .getChild('viuSubtitlePanelContainer')
        .getChild('langList');

      const fontSizeList = this.player
        .getChild('viuFontSizePanel')
        .getChild('viuFontSizePanelContainer')
        .getChild('viuFontSizeList');

      const viuResolutionList = this.player
        .getChild('viuAdvancePanel')
        .getChild('viuAdvancePanelContainer')
        .getChild('viuResolutionList');

      const viuChipName = this.player.getChild('ViuInfoPanel');

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
  leftSelectAction() {
    if (this.checkAllPanelClose()) {
      const step = this.state.isActionSelected;
      const leftStep = step - 1 < 1 ? 1 : step - 1;

      this.setState({
        isActionSelected: leftStep
      });
      this.setComponentSelected(leftStep);
    } else {
      const viuLangList = this.player
        .getChild('viuSubtitlePanel')
        .getChild('viuSubtitlePanelContainer')
        .getChild('langList');

      if (this.checkAllPanelClose()) {
        viuLangList.upperSelectAction();
      }
    }
  }
  /**
   * function rightSelectAction
   * 往右选择主方法
   */
  rightSelectAction() {
    if (this.checkAllPanelClose()) {
      const step = this.state.isActionSelected;
      const rightStep =
        step + 1 > this.state.actionArea.length - 1 ?
          this.state.actionArea.length - 1 :
          step + 1;

      this.setState({
        isActionSelected: rightStep
      });
      this.setComponentSelected(rightStep);
    } else {
      const viuLangList = this.player
        .getChild('viuSubtitlePanel')
        .getChild('viuSubtitlePanelContainer')
        .getChild('langList');

      if (this.state.panel.isSubtileAreaSelected) {
        viuLangList.upperSelectAction();
      }
    }
  }
  /**
   * function downerSelectAction
   * 往下选择主方法
   */
  downerSelectAction() {
    if (this.checkAllPanelClose()) {
      const step = this.state.isActionSelected;
      const downStep = step === 0 ? 1 : step;

      this.setState({
        isActionSelected: downStep
      });
      this.setComponentSelected(downStep);
    } else {
      const viuLangList = this.player
        .getChild('viuSubtitlePanel')
        .getChild('viuSubtitlePanelContainer')
        .getChild('langList');
      const fontSizeList = this.player
        .getChild('viuFontSizePanel')
        .getChild('viuFontSizePanelContainer')
        .getChild('viuFontSizeList');

      const viuResolutionList = this.player
        .getChild('viuAdvancePanel')
        .getChild('viuAdvancePanelContainer')
        .getChild('viuResolutionList');

      const ViuInfoPanel = this.player.getChild('ViuInfoPanel');

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
  setComponentSelected(step, useDefaultActionArea = false) {
    Object.keys(this.state.actionArea).map((item) => {
      if (parseInt(item, 10) !== step) {
        this.state.actionArea[item].removeClass('status-active');
      }
    });
    this.state.actionArea[step].addClass('status-active');
  }
  clearDefaultComponentSelected() {
    for (let i = 0; i < this.originActionArea.length; i++) {
      this.originActionArea[i].removeClass('status-active');
    }
  }
  /**
   * function setLangListComponentSelected
   *
   * @param {*Number 选择索引} step
   * 更新语言区选择状态处理器
   */
  setLangListComponentSelected(step) {
    Object.keys(this.state.actionArea).map((item) => {
      if (parseInt(item, 10) !== step) {
        this.state.actionArea[item].removeClass('status-active');
      }
    });
    this.state.actionArea[step].addClass('status-active');
  }
  /**
   * function checkVideoProcessed
   * 检查是否可以操作进度条
   */

  checkVideoProcessed() {
    return this.state.isActionSelected === 0 && this.checkAllPanelClose();
  }
  /**
   * function toggleInfo
   * 信息弹层触发器
   */
  toggleInfo() {
    const index = this.state.actionArea.findIndex((item) => item.name_ && item.name_ === 'ViuInfo');

    this.setState({
      isActionSelected: index
    });
    this.setComponentSelected(index);
    const viuInfo = this.player.getChild('ViuPlayerComponent').viuInfo;

    viuInfo.trigger('click');
  }
  /**
   * function toggleSubtitle
   * 主字幕弹层触发器
   */
  toggleSubtitle(step) {
    const index = this.state.actionArea.findIndex((item) => item.name_ && item.name_ === 'ViuSubtitle');

    this.setState({
      isActionSelected: index
    });
    this.setComponentSelected(index);
    const viuSubtitle = this.player.getChild('ViuPlayerComponent').viuSubtitle;

    viuSubtitle.trigger('click');
  }
  /**
   * function toggleFontSize
   * 弹层触发器
   */
  toggleFontSize() {
    const index = this.state.actionArea.findIndex((item) => item.name_ && item.name_ === 'ViuFontSize');

    this.setState({
      isActionSelected: index
    });
    this.setComponentSelected(index);
    const viuSubtitle = this.player.getChild('ViuPlayerComponent').viuFontSize;

    viuSubtitle.trigger('click');
  }
  /**
   * function showTopSubtitle
   * 双字幕显示触发开关
   */
  showTopSubtitle() {
    if (this.player.getChild('ViuPlayerComponent')) {
      const viuTopSubtitle = this.player.getChild('ViuPlayerComponent')
        .viuTopSubtitle;

      viuTopSubtitle.trigger('toggleShow', {
        open: true
      });
    }
  }
  /**
   * function hideTopSubtitle
   * 双字幕隐藏触发开关
   */
  hideTopSubtitle() {
    if (this.player.getChild('ViuPlayerComponent')) {
      const viuTopSubtitle = this.player.getChild('ViuPlayerComponent')
        .viuTopSubtitle;

      viuTopSubtitle.trigger('toggleShow', {
        open: false
      });
    }
  }
  /**
   * function loadNewLangListOptions
   * 重新加载语言列表数据
   */
  loadNewLangListOptions(options) {
    const viuLangList = this.player
      .getChild('viuSubtitlePanel')
      .getChild('viuSubtitlePanelContainer')
      .getChild('langList');

    viuLangList.loadNewLangListOptions(options);
  }
  /**
   * function toggleTopSubtitle
   * 双字幕隐藏触发开关
   */
  toggleTopSubtitle() {
    const viuTopSubtitle = this.player.getChild('ViuPlayerComponent')
      .viuTopSubtitle;

    return viuTopSubtitle.handleClick();
  }

  /**
   * function toggleNextChip
   * 下一集触发开关
   */
  toggleNextChip() {
    if (this.player.getChild('ViuPlayerComponent')) {
      const viuNextChip = this.player.getChild('ViuPlayerComponent').viuNextChip;

      viuNextChip.trigger('click');
    }
  }
  /**
   * function return
   * 反回键
   * @returns {Callback}
   */

  return(callback) {
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

  confirm() {
    if (this.checkAllPanelClose()) {
      const playToggle = this.player
        .getChild('ViuPlayerComponent')
        .getChild('playToggle');
      const name = this.state.actionArea[this.state.isActionSelected].name_;

      switch (name) {
      case 'ControlBar':
        playToggle.handleClick();
        break;
      case 'PlayToggle':
        playToggle.handleClick();
        break;
      case 'ViuNextChip':
        const viuNextChip = this.player
          .getChild('ViuPlayerComponent')
          .getChild('viuNextChip');

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
        const viuFontSize = this.player
          .getChild('ViuPlayerComponent')
          .getChild('viuFontSize');

        viuFontSize.handleClick();
        break;
      case 'ViuAdvance':
        const viuAdvance = this.player
          .getChild('ViuPlayerComponent')
          .getChild('viuAdvance');

        viuAdvance.handleClick();
        break;
      default:
        break;
      }
    } else {
      // 有panel开启状态
      const viuLangList = this.player
        .getChild('viuSubtitlePanel')
        .getChild('viuSubtitlePanelContainer')
        .getChild('langList');

      const fontSizeList = this.player
        .getChild('viuFontSizePanel')
        .getChild('viuFontSizePanelContainer')
        .getChild('viuFontSizeList');

      const viuResolutionList = this.player
        .getChild('viuAdvancePanel')
        .getChild('viuAdvancePanelContainer')
        .getChild('viuResolutionList');

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
  setUniquePanelOpen(panel) {
    const allPanel = this.state.panel;

    if (Object.hasOwnProperty.call(allPanel, panel)) {
      const updatePanel = Object.assign(
        {},
        allPanel,
        {
          [panel]: true
        },
        this.getOtherDefaultPanel(panel)
      );

      this.setState({
        panel: updatePanel
      });
    }
  }
  /**
   * function checkUniquePanelOopen
   * panel公共关团方法
   */
  setAllPanelClose() {
    this.setState({
      panel: this.getAllDefaultPanel()
    });
  }
  /**
   * function checkUniquePanelOopen
   * 检查所有panel关闭
   */
  checkAllPanelClose() {
    let defaultClose = true;
    const panel = this.state.panel;

    for (const i in panel) {
      if (panel[i]) {
        defaultClose = false;
        break;
      }
    }
    return defaultClose;
  }

  getOtherDefaultPanel(panel) {
    const otherPanel = this.state.panel;

    delete otherPanel[panel];
    for (const i in otherPanel) {
      otherPanel[i] = false;
    }
    return otherPanel;
  }
  getAllDefaultPanel(panel) {
    const otherPanel = this.state.panel;

    for (const i in otherPanel) {
      otherPanel[i] = false;
    }
    return otherPanel;
  }

  returnKeyReset() {
    for (const i in this.state.panel) {
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
        default:
          break;
        }
      }
    }
  }
}

// Define default values for the plugin's `state` object here.
ViuPlayer.defaultState = {};

// Include the version number.
ViuPlayer.VERSION = VERSION;

class ViuPlayerComponent extends Component {
  constructor(player, options) {
    super(player, options);
  }
  createEl() {
    return super.createEl('div', {
      className: 'vjs-viu-tools-panel',
      dir: 'ltr'
    });
  }
}
ViuPlayerComponent.prototype.options_ = {
  children: [
    'playToggle',
    'viuNextChip',
    'viuInfo',
    'viuSubtitle',
    'viuAdvance',
    'viuTopSubtitle'
    // "viuFontSize",
  ]
};

videojs.registerComponent('ViuPlayerComponent', ViuPlayerComponent);

// Register the plugin with video.js.
const registerPlugin = videojs.registerPlugin || videojs.plugin;

registerPlugin('ViuPlayer', ViuPlayer);

export default ViuPlayer;
