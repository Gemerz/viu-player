import videojs from 'video.js';
const Component = videojs.getComponent('component');

class viuControlBarBackground extends Component {

  constructor(player, options) {
    super(player, options);
    // this.options = videojs.mergeOptions(defaults, options);
  }

  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-controlbar-bg',
      dir: 'ltr'
    });

    return root;
  }

}
videojs.registerComponent('viuControlBarBackground', viuControlBarBackground);

export default viuControlBarBackground;
