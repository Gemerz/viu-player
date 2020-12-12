import videojs from 'video.js';

const Button = videojs.getComponent('Button');

// const defaults = {
//   chipName: ''
// };
/**
 *  subtitle 单字幕
 */
class ViuSubtitleComponent extends Button {
  /**
   * Create a ViuSubtitleComponent instance.
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
    this.controlText('Subtitle On');
    this.on('mouseenter', () => {
      const ViuPlayer = this.player_.ViuPlayer();
      const index = ViuPlayer.state.actionArea.findIndex((item) => item && item.name_ === 'ViuSubtitle');

      ViuPlayer.setState({
        isActionSelected: index
      });

      ViuPlayer.setComponentSelected(index);
    });
  }
  /**
   * function buildCSSClass
   *
   * @return {Object} return Css Object
   */
  buildCSSClass() {
    return `vjs-viu-subtitle-toggle vjs-viu-subtitle-active ${super.buildCSSClass()}`;
  }
  /**
   * function handleClick
   * 点击事件
   */
  handleClick() {
    this.player_.ViuPlayer().setAllPanelClose();
    // info在active状态先关闭再展示subtitle  -- qin
    const viuInfoPanel = this.player_.getChild('viuInfoPanel');

    if (viuInfoPanel.hasClass('active')) {
      viuInfoPanel.removeClass('active');
    }
    // end
    if (!this.hasClass('panel-active')) {
      this.open();
    } else {
      this.close();
    }
  }
  /**
   * function close
   * 打开方法
   *
   */
  open() {

    this.controlText('Subtitle On');
    this.addClass('panel-active');
    const viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');

    viuSubtitlePanel.handleClick();
    this.player_.ViuPlayer().setUniquePanelOpen('isSubtileAreaSelected');
  }
  /**
   * function close
   * 关闭方法
   *
   */
  close() {
    this.controlText('Subtitle Off');
    this.removeClass('panel-active');
    const viuSubtitlePanel = this.player_.getChild('viuSubtitlePanel');

    viuSubtitlePanel.handleClick();
    this.player_.ViuPlayer().setAllPanelClose();
  }
}
videojs.registerComponent('viuSubtitle', ViuSubtitleComponent);

export default ViuSubtitleComponent;
