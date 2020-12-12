import videojs from 'video.js';

const Button = videojs.getComponent('Button');
/**
 *  class viuNextChip
 *  Button 下一集
 */

class ViuNextChip extends Button {
  /**
   * Create a ViuNextChip instance.
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
    this.controlText('Next Chip');
    this.on('mouseenter', () => {
      const ViuPlayer = this.player_.ViuPlayer();
      const index = ViuPlayer.state.actionArea.findIndex((item) => item && item.name_ === 'ViuNextChip');

      ViuPlayer.setState({
        isActionSelected: index
      });

      ViuPlayer.setComponentSelected(index);
    });
  }

  buildCSSClass() {
    return `vjs-next-chip-button vjs-next-chip ${super.buildCSSClass()}`;
  }
  handleClick() {
    this.player_.trigger('nextChip');
  }
}
videojs.registerComponent('viuNextChip', ViuNextChip);

export default ViuNextChip;
