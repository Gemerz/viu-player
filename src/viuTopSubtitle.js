import videojs from 'video.js';
const Button = videojs.getComponent('Button');

/**
 * ViuTopSubtitleComponent
 * parent is plugin
 */
class ViuTopSubtitleComponent extends Button {
  /**
   * Create a ViuTopSubtitleComponent instance.
   * top subtitle 双字幕
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   * @param  {Object} [options]
   *         An optional options object.
   *         While not a core part of the Video.js component architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your component's caller.
   */
  constructor(player, options) {
    super(player, options);
    this.on('toggleShow', (event, data) => {
      if (data.open) {
        this.open();
      } else {
        this.close();
      }
    });
    this.on('mouseenter', () => {
      const ViuPlayer = this.player_.ViuPlayer();

      if (!ViuPlayer.state.isTopSubtitleDisable) {
        const downStep = ViuPlayer.state.actionArea.length - 1;

        ViuPlayer.setState({
          isActionSelected: downStep
        });
        ViuPlayer.setComponentSelected(downStep);
      }
    });
    this.on('toggleDisable', (e, data) => {
      this.handleDisable(data.disable);
    });
    this.controlText('Subtitle On');
  }

  /**
   * function buildCSSClass
   *
   * @return {Object} return Css Object
   */
  buildCSSClass() {
    return `vjs-viu-top-subtitle-toggle vjs-viu-top-subtitle-active ${super.buildCSSClass()}`;
  }
  /**
   * function handleDisable
   * 切换禁用状态事件
   */
  handleDisable(value) {
    if (value) {
      this.addClass('disable');
    } else {
      this.removeClass('disable');
    }
  }
  /**
   * function handleClick
   * 点击事件
   */
  handleClick() {
    if (!this.hasClass('disable')) {
      if (!this.hasClass('vjs-viu-top-subtitle-active')) {
        this.open();
      } else {
        this.close();
      }
    }
  }
  /**
   * function close
   * 打开方法
   * open with addClass
   */
  open() {
    this.addClass('vjs-viu-top-subtitle-active');
    this.controlText('Top Subtitle On');
    this.player_.trigger('toggleTopSubtitle', true);
  }
  /**
   * function close
   * 关闭方法
   * close with removeClass
   */
  close() {
    this.removeClass('vjs-viu-top-subtitle-active');
    this.controlText('Top Subtitle Off');
    this.player_.trigger('toggleTopSubtitle', false);
  }
}
videojs.registerComponent('viuTopSubtitle', ViuTopSubtitleComponent);

export default ViuTopSubtitleComponent;
