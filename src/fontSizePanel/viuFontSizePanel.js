import videojs from 'video.js';
const Component = videojs.getComponent('component');

import ViuFontSizeList from './viuFontsizeList';
import ViuFontSizeTitle from './viuFontsizeTitle';

// const dom = videojs.dom;

/**
 *  drawer 详情
 */

class ViuFontSizePanelContainer extends Component {
  constructor(player, options) {
    super(player, options);
    this.addChild('viuFontSizeTitle', options);
    this.addChild('viuFontSizeList', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-tools-drawer-container vjs-viu-tools-fontsize-drawer-container',
      dir: 'ltr'
    });

    return root;
  }
}

class ViuFontSizePanel extends Component {
  constructor(player, options) {
    super(player, options);
    this.addChild('viuFontSizePanelContainer', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-tools-drawer vjs-viu-tools-fontsize-drawer',
      dir: 'ltr'
    });

    return root;
  }
  upperStep() {
    this.containerUpperStep();
  }
  downStep() {
    this.containerDownStep();
  }
  // 向下方法
  containerDownStep() {
    const content = this.eventBusEl_.childNodes[0];

    if (content.clientHeight <= content.scrollHeight) {
      content.scrollTop = content.scrollTop + 300;
    }
  }
  // 向上方法
  containerUpperStep() {
    const content = this.eventBusEl_.childNodes[0];

    if (content.clientHeight <= content.scrollHeight) {
      content.scrollTop = content.scrollTop - 300;
    }
  }

  handleClick() {
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
}

videojs.registerComponent('viuFontSizePanel', ViuFontSizePanel);
videojs.registerComponent(
  'viuFontSizePanelContainer',
  ViuFontSizePanelContainer
);

videojs.registerComponent('viuFontSizeTitle', ViuFontSizeTitle);
videojs.registerComponent('viuFontSizeList', ViuFontSizeList);
export default ViuFontSizePanel;
