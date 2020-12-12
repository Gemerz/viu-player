import videojs from 'video.js';
import dayjs from 'dayjs';
// import dayjs from 'dayjs';
const Component = videojs.getComponent('component');

const defaults = {
  chipName: '',
  chipCaptions: '',
  offlineTime: '',
  offlineTimeFormat: ''
};
/**
 *  Component ViuProcessInfo
 *  parent is plugin
 */

class ViuProcessInfo extends Component {
  /**
   * Create a ViuProcessInfo instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js component architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your component's caller.
   */
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  /**
   * function createEl
   *
   * @return {Object} return html element
   */
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-process-info',
      dir: 'ltr'
    });
    const episodeTitle = super.createEl('div', {
      textContent: this.options_.chipName || '',
      className: 'vjs-viu-process-info-title',
      dir: 'ltr'
    });
    const movieTitle = super.createEl('div', {
      textContent: this.options_.chipName || '',
      className: 'vjs-viu-process-info-movieTitle',
      dir: 'ltr'
    });
    const userLevel = super.createEl('img', {
      src: this.options_.pUrl,
      className: 'vjs-viu-process-info-userLevel',
      dir: 'ltr'
    });
    const episodeDesc = super.createEl('div', {
      textContent: `${this.localize('episode_num')} ${
        this.options_.chipCaptions || ''
      }`,
      className: 'vjs-viu-process-info-desc',
      dir: 'ltr'
    });
    const date = this.options_.offlineTime ?
      dayjs(Number(this.options_.offlineTime * 1000)).format(this.options_.offlineTimeFormat) :
      '';

    const offlineTime = super.createEl('div', {
      textContent: `${this.localize('off_shelf_date')}: ${date}`,
      className: 'vjs-viu-process-info-offlinetime',
      dir: 'ltr'
    });
    // isMovie = 0 电视剧  = 1 电影

    if (this.options_.isMovie === 1) {
      // P+ 电影
      // P+ 影片 并且 图片存在  插入 icon
      if (this.options_.userLevel === 3 && this.options_.showPremium) {
        root.appendChild(userLevel);
        root.appendChild(movieTitle);
        if (this.options_.offlineTime) {
          root.appendChild(offlineTime);
        }
      } else {
        // 普通电影
        root.appendChild(episodeTitle);
        if (this.options_.offlineTime) {
          root.appendChild(offlineTime);
        }
      }
    } else if (this.options_.isMovie === 0) {
      // P+电视剧
      if (this.options_.userLevel === 3 && this.options_.showPremium) {
        root.appendChild(episodeTitle);
        root.appendChild(userLevel);
        root.appendChild(episodeDesc);
        if (this.options_.offlineTime) {
          root.appendChild(offlineTime);
        }
      } else {
        // 普通电视剧
        root.appendChild(episodeTitle);
        root.appendChild(episodeDesc);
        if (this.options_.offlineTime) {
          root.appendChild(offlineTime);
        }
      }
    }
    return root;
  }
}
videojs.registerComponent('viuProcessInfo', ViuProcessInfo);

export default ViuProcessInfo;
