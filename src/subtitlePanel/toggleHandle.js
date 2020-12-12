import videojs from 'video.js';
const Component = videojs.getComponent('component');

// const dom = videojs.dom;

const defaults = {
  chipName: ''
};
/**
 *  ToggleHandle
 *
 */

class ToggleHandle extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
  }
  createEl() {
    const wrap = super.createEl('div', {
      className: 'vjs-viu-player-lang-itembox',
      dir: 'ltr'
    });

    return wrap;
  }
}

export default ToggleHandle;
