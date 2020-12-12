import videojs from 'video.js';

const Button = videojs.getComponent('Button');

/**
 *  Button 详情
 */

class ViuAdvanceComponent extends Button {
  /**
   * Create a ViuPlayer plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options) {
    super(player, options);
    this.controlText('Text');
    this.on('mouseenter', () => {
      const ViuPlayer = this.player_.ViuPlayer();
      const index = ViuPlayer.state.actionArea.findIndex((item) => item && item.name_ === 'ViuAdvance');

      ViuPlayer.setState({
        isActionSelected: index
      });

      ViuPlayer.setComponentSelected(index);
    });
  }

  buildCSSClass() {
    return `vjs-viu-advance-button vjs-control ${super.buildCSSClass()}`;
  }
  handleClick() {
    this.player_.getChild('viuAdvancePanel').handleClick();

    if (!this.hasClass('vjs-advance-active')) {
      this.addClass('vjs-advance-active');
      this.player_.ViuPlayer().setUniquePanelOpen('isAdvanceAreaSelected');
    } else {
      this.removeClass('vjs-advance-active');
      this.player_.ViuPlayer().setAllPanelClose();
    }
  }
}
videojs.registerComponent('viuAdvance', ViuAdvanceComponent);
export default ViuAdvanceComponent;
