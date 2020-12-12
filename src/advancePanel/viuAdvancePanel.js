import videojs from 'video.js';
const Component = videojs.getComponent('component');

import ViuResolutionList from './viuResolutionList';
/**
 * 描述 ViuAdvancePanelContainer
 * @date 2020-08-13
 * @param {Player} player
 * @param {Object} [options]
 *
 */
class ViuAdvancePanelContainer extends Component {

  constructor(player, options) {
    super(player, options);
    this.addChild('viuResolutionList', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-drawer-container vjs-viu-player-advance-drawer-container',
      dir: 'ltr'
    });

    return root;
  }
}

/**
 * 描述 ViuAdvancePanel
 * @date 2020-08-13
 * @param {any} player
 * @param {any} options
 * @return {any}
 */
class ViuAdvancePanel extends Component {
  constructor(player, options) {
    super(player, options);
    this.addChild('viuAdvancePanelContainer', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-drawer vjs-viu-player-advance-drawer ',
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
      this.player_.addClass('vjs-advance-drawer-open');
    } else {
      this.removeClass('active');
      this.player_.removeClass('vjs-advance-drawer-open');
    }
  }
}

videojs.registerComponent('viuAdvancePanel', ViuAdvancePanel);
videojs.registerComponent(
  'viuAdvancePanelContainer',
  ViuAdvancePanelContainer
);

videojs.registerComponent('viuResolutionList', ViuResolutionList);
export default ViuAdvancePanel;
