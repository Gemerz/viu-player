import videojs from 'video.js';
const Component = videojs.getComponent('component');

import LangTitle from './langTitle';
import LangList from './langList';
import ToggleHandle from './toggleHandle';
// const dom = videojs.dom;

const defaults = {
  title: 'setting_language',
  languages: [
    {
      id: '0',
      name: '简体中文',
      isDefault: 0
    },
    {
      id: '3',
      name: 'ENGLISH',
      isDefault: 1
    },
    {
      id: '4',
      name: '日文',
      isDefault: 0
    }
  ],
  toggleText: ['隐藏', '显示']
};
/**
 *  drawer 语言
 */

class ViuSubtitlePanelContainer extends Component {
  constructor(player, options) {
    super(player, options);

    this.addChild('langTitle', options);
    this.addChild('langList', options);
    // this.addChild('toggleHandle', options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-subtitle-drawer-container',
      dir: 'ltr'
    });

    return root;
  }
}

class ViuSubtitlePanel extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);

    this.addChild('viuSubtitlePanelContainer', this.options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-subtitle-drawer',
      dir: 'ltr'
    });

    return root;
  }
  handleClick() {
    // 关闭其他panel
    this.player_.removeClass('vjs-info-drawer-open');
    // 点击触发回调
    this.player_.trigger('subtitleClick', this.options.languages);

    if (!this.hasClass('active')) {
      this.player_.addClass('vjs-language-drawer-open');
      this.addClass('active');
    } else {
      this.player_.removeClass('vjs-language-drawer-open');
      this.removeClass('active');
    }
  }
}

videojs.registerComponent('langTitle', LangTitle);
videojs.registerComponent('langList', LangList);
videojs.registerComponent('toggleHandle', ToggleHandle);

videojs.registerComponent('viuSubtitlePanel', ViuSubtitlePanel);
videojs.registerComponent(
  'viuSubtitlePanelContainer',
  ViuSubtitlePanelContainer
);
export default ViuSubtitlePanel;
