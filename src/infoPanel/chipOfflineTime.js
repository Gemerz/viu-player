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
      //   textContent: "121212",
      className: 'vjs-viu-tools-info-offline-time-span',
      dir: 'ltr'
    });
    const date = this.options_.offlineTime ?
      dayjs(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat) :
      '';
    const text = dom.createEl('span', {
      textContent: date,
      className: `vjs-viu-tools-info-offline-time ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    root.appendChild(text);

    return root;
  }
}
export default ChipOfflineTime;
