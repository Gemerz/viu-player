import videojs from 'video.js';

const Button = videojs.getComponent('Button');

/**
 *  Button 详情
 */

class ViuInfoComponent extends Button {
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
    this.controlText('Info');
    this.on('mouseenter', () => {
      const ViuPlayer = this.player_.ViuPlayer();
      const index = ViuPlayer.state.actionArea.findIndex((item) => item.name_ && item.name_ === 'ViuInfo');

      ViuPlayer.setState({
        isActionSelected: index
      });

      ViuPlayer.setComponentSelected(index);
    });
  }

  buildCSSClass() {
    return `vjs-info-button vjs-control ${super.buildCSSClass()}`;
  }
  handleClick() {
    this.player_.getChild('viuInfoPanel').handleClick();
    const viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');

    if (viuSubtitlePanel.hasClass('active')) {
      viuSubtitlePanel.removeClass('active');
    }

    if (!this.hasClass('vjs-info-active')) {
      this.addClass('vjs-info-active');
      this.player_.ViuPlayer().setUniquePanelOpen('isInfoAreaSelected');
    } else {
      this.removeClass('vjs-info-active');
      this.player_.ViuPlayer().setAllPanelClose();
    }
  }
}
videojs.registerComponent('viuInfo', ViuInfoComponent);
export default ViuInfoComponent;
