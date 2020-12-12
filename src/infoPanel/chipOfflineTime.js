import videojs from 'video.js';
const Component = videojs.getComponent('component');

import dayjs from 'dayjs';

const dom = videojs.dom;

const defaults = {
  chipName: ''
};
/**
 *  OfflineTime 下架时间
 *
 */

class ChipOfflineTime extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-info-offline-time-span',
      dir: 'ltr'
    });
    const date = this.options_.offlineTime ?
      dayjs(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat) :
      '';
    const text = dom.createEl('span', {
      textContent: `${this.localize('off_shelf_date')}:${date}`,
      className: `vjs-viu-player-info-offline-time ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    if (this.options_.offlineTime) {
      root.appendChild(text);
    }

    return root;
  }
}
export default ChipOfflineTime;
