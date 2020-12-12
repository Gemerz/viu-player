import videojs from 'video.js';
const Component = videojs.getComponent('component');

import ChipName from './chipName';
import ChipCaptions from './chipCaptions';
import ChipDesc from './chipDesc';
import ChipOfflineTime from './chipOfflineTime';
// const dom = videojs.dom;

/**
 *  drawer 详情
 */

class ViuInfoPanelContainer extends Component {
  constructor(player, options) {
    super(player, options);
    this.addChild('chipCaptions', options.info);
    this.addChild('chipName', options.info);
    this.addChild('chipOfflineTime', options.info);
    this.addChild('chipDesc', options.info);

  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-drawer-container vjs-viu-player-info-drawer-container',
      dir: 'ltr'
    });

    return root;
  }

}

class ViuInfoPanel extends Component {
  constructor(player, options) {
    super(player, options);
    this.addChild('ViuInfoPanelContainer', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-drawer vjs-viu-player-info-drawer',
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
    this.player_.removeClass('vjs-language-drawer-open');
    if (!this.hasClass('active')) {
      this.addClass('active');
      this.player_.addClass('vjs-info-drawer-open');
    } else {
      this.removeClass('active');
      this.player_.removeClass('vjs-info-drawer-open');
    }
  }
}

videojs.registerComponent('chipName', ChipName);
videojs.registerComponent('chipCaptions', ChipCaptions);
videojs.registerComponent('chipDesc', ChipDesc);
videojs.registerComponent('chipOfflineTime', ChipOfflineTime);

videojs.registerComponent('viuInfoPanel', ViuInfoPanel);
videojs.registerComponent('viuInfoPanelContainer', ViuInfoPanelContainer);
export default ViuInfoPanel;
