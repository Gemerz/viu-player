import videojs from 'video.js';
const Component = videojs.getComponent('Component');

const dom = videojs.dom;
const defaults = {
  title: ''
};
/**
 * ViuFontSizeList
 */

class ViuFontSizeList extends Component {
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
    this.options = videojs.mergeOptions(defaults, options);

    this.on('click', (event) => {
      event.stopPropagation();
      const { id } = event.target.dataset;

      this.handleClick(id);
    });
    this.on('mouseover', (event) => {
      const id = event.target.attributes['data-id'].value;
      const index = this.options_.fontSize.findIndex((item) => item && item === id);

      this.setState({
        isSelected: index
      });
      this.setComponentSelected(index);
    });

    this.state = {
      isSelected: 0
    };
    this.setDefaultSelected();
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-tools-lang-items',
      dir: 'ltr'
    });
    const fontList = this.options_.fontSize || [];

    const fontSizeWrapper = super.createEl('ui', {
      className: 'vjs-viu-tools-fontsize-list',
      dir: 'ltr'
    });

    fontList.map((item) => {
      const sigleItem = dom.createEl('li', {
        textContent: this.localize(`fontsize_${item}`),
        className: `vjs-viu-tools-fontsize-item ${
          this.options_.defaultFontSize === item ? 'fs-active' : ''
        } ${super.buildCSSClass()}`,
        dir: 'ltr'
      });

      sigleItem.dataset.id = item;
      fontSizeWrapper.appendChild(sigleItem);
    });
    root.appendChild(fontSizeWrapper);
    return root;
  }

  setDefaultSelected() {
    const selectedIndex = this.options.fontSize.findIndex((item) => {
      return item && item === this.options.defaultFontSize;
    });

    this.setState({
      isSelected: selectedIndex || 0
    });
  }

  upperSelectAction() {
    this.selectedUpperStep();
  }
  downerSelectAction() {
    this.selectedDownerStep();
  }

  selectedUpperStep() {
    const step = this.state.isSelected;
    // const total = parseInt(this.options.languages.length, 10);
    const upStep = step - 1 < 0 ? 0 : step - 1;

    videojs.log('selectedUpperStep', upStep);
    this.setState({
      isSelected: upStep
    });
    this.setComponentSelected(upStep);
  }
  selectedDownerStep() {
    const step = this.state.isSelected;
    const total = parseInt(this.options.fontSize.length, 10);
    const downStep = step + 1 >= total ? total - 1 : step + 1;

    this.setState({
      isSelected: downStep
    });
    this.setComponentSelected(downStep);
  }
  /**
   * function setComponentSelected
   *
   * @param {*Number 选择索引} step
   * 更新主区选择状态处理器
   */
  setComponentSelected(step) {
    const items = dom.$$('.vjs-viu-tools-fontsize-item');

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (dom.hasClass(items[i], 'fs-active')) {
          dom.removeClass(items[i], 'fs-active');
        }
      }
      if (items[step]) {
        dom.addClass(items[step], 'fs-active');
      }
    }

    //
  }
  /**
   *
   * @param {*id标识} id
   */
  handleClick(id) {
    this.clearAllClass();
    if (this.player_ && !this.player_.hasClass(`v-fontsize-${id}`)) {
      this.player_.addClass(`v-fontsize-${id}`);
    }
    const index = this.options_.fontSize.findIndex((item) => item && item === id);

    this.setState({
      isSelected: index
    });
    this.setComponentSelected(index);
    this.player_.getChild('ViuPlayerComponent').viuFontSize.handleClick();
  }
  confirm() {
    const selected = this.state.isSelected;

    if (this.options_.fontSize[selected]) {
      const id = this.options_.fontSize[selected];

      this.handleClick(id);
    }
  }
  handleKeyDown(id) {}
  clearAllClass() {
    const classList = this.options.fontSize || [];

    classList.forEach((item) => {
      if (this.player_.hasClass(`v-fontsize-${item}`)) {
        this.player_.removeClass(`v-fontsize-${item}`);
      }
    });
  }
}

export default ViuFontSizeList;
