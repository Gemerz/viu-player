import videojs from 'video.js';
const Component = videojs.getComponent('component');

const dom = videojs.dom;

const defaults = {
  title: ''
};
/**
 *  LangTitle
 *
 */

class LangTitle extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  createEl() {
    const root = super.createEl('div', {
      //   textContent: "121212",
      className: 'vjs-viu-tools-lang-title-span',
      dir: 'ltr'
    });
    const text = dom.createEl('span', {
      textContent: this.localize('setting_language') || '',
      className: `vjs-viu-tools-lang-title ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    root.appendChild(text);
    return root;
  }
}
export default LangTitle;
