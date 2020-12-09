import videojs from 'video.js';
const Component = videojs.getComponent('component');

const dom = videojs.dom;

const defaults = {
  title: ''
};
/**
 *  SizeTitle
 *
 */

class SizeTitle extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  createEl() {
    const root = super.createEl('div', {
      // textContent: "字幕大小",
      className: 'vjs-viu-tools-size-title-span',
      dir: 'ltr'
    });
    const text = dom.createEl('span', {
      textContent: '字幕大小',
      //   textContent: this.localize('setting_language') || '',
      //   className: `vjs-viu-tools-size-title ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    root.appendChild(text);
    return root;
  }
}
export default SizeTitle;
