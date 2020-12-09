import videoJs from 'video.js';
const Component = videoJs.getComponent('Component');

/**
 *  LoadingTips
 *
 */

class LoadingTips extends Component {
  constructor(player, options) {
    super(player, options);
    const timeoutCount = options.videoBufferTimeout ? options.videoBufferTimeout : 8;

    player.on('waiting', () => {
      if (!this.state.loadingTimer) {
        this.loadingTimerStart(timeoutCount);
      }
    });
    player.on('playing', () => {
      this.addClass('hidden');
      this.clearTimer();
    });
    player.on('canplay', () => {
      this.addClass('hidden');
      this.clearTimer();
    });
    player.on('error', () => {
      this.clearTimer();
    });
    this.state = {
      loadingTimer: null,
      loadingCount: 0,
      triggerCount: 0,
      cdnTimer: null
    };
  }
  // createEl() {
  //   const root = super.createEl('div', {
  //     className: 'vjs-viu-loadingTips hidden',
  //     textContent: this.localize('video_timeout'),
  //     dir: 'ltr'
  //   });

  //   return root;
  // }
  loadingTimerStart(timeout) {
    this.state.loadingTimer = setInterval(() => {
      this.state.loadingCount++;
      if (this.state.loadingCount === timeout) {
        this.player_.trigger('weakNetwork');
      } else if (this.state.loadingCount >= 60) {
        this.clearTimer();
        this.player_.trigger('loadTimeout');
      }
    }, 1000);
  }
  clearTimer() {
    clearInterval(this.state.loadingTimer);
    this.state.loadingCount = 0;
    this.state.loadingTimer = null;

    clearTimeout(this.state.cdnTimer);
    this.state.cdnTimer = null;
  }
}
videoJs.registerComponent('LoadingTips', LoadingTips);
export default LoadingTips;
