import videojs from 'video.js';
const Component = videojs.getComponent('component');
const dom = videojs.dom;
/**
 *  ChipDesc 详情描述
 */

class ChipDesc extends Component {
  constructor(player, options) {
    super(player, options);
  }
  createEl() {
    const root = super.createEl('div', {
      //   textContent: "121212",
      className: 'vjs-viu-tools-info-chip-desc-span',
      dir: 'ltr'
    });
    const text = dom.createEl('span', {
      textContent: this.options_.chipDesc || '',
      className: `vjs-viu-tools-info-chip-desc ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    root.appendChild(text);

    return root;
  }
}

export default ChipDesc;
