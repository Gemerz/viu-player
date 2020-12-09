import videojs from 'video.js';
const Component = videojs.getComponent('component');

const dom = videojs.dom;

const defaults = {
  chipName: ''
};
/**
 *  ChipName 详情名称
 *
 */

class ChipName extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  createEl() {
    const root = super.createEl('div', {
      //   textContent: "121212",
      className: 'vjs-viu-tools-info-chipName-span',
      dir: 'ltr'
    });
    const text = dom.createEl('span', {
      textContent: this.options_.chipCaptions || '',
      className: `vjs-viu-tools-info-chip-name ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    root.appendChild(text);

    return root;
  }
}
export default ChipName;
