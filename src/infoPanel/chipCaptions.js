import videojs from 'video.js';
const Component = videojs.getComponent('component');
const dom = videojs.dom;
/**
 *  ChipCaptions 详情副标题
 */

class ChipCaptions extends Component {
  constructor(player, options) {
    super(player, options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-tools-info-chipCaptions-span',
      dir: 'ltr'
    });
    const text = dom.createEl('span', {
      textContent: this.localize('episode_num'),
      className: `vjs-viu-tools-info-chipCaptions ${super.buildCSSClass()}`,
      dir: 'ltr'
    });
    // isMovie = 0 电视剧  = 1 电影

    if (this.options_.isMovie === 0) {
      root.appendChild(text);
    }
    // root.appendChild(text);

    return root;
  }
}

export default ChipCaptions;
