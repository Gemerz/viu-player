import videojs from 'video.js';
const Component = videojs.getComponent('Component');

const dom = videojs.dom;
const defaults = {
  title: ''
};
/**
 * ViuResolutionList
 */

class ViuResolutionList extends Component {
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

      if (id) {
        this.handleClick(id);
      }
    });
    this.on('mouseover', (event) => {
      if (event.target.attributes && event.target.attributes['data-id']) {
        const id = event.target.attributes['data-id'].value;
        const index = this.totalList.findIndex((item) => item && item === id);

        this.setState({
          isSelected: index
        });
        this.setComponentSelected(index);
      }
    });
    this.resolutionListTotal =
      parseInt(this.options.advance.resolutionList.length, 10) || 0;
    this.cdnListTotal = parseInt(this.options.advance.cdnList.length, 10) || 0;
    this.resolutionList = this.options.advance.resolutionList;
    this.cdnList = this.options.advance.cdnList;
    this.totalList = this.options.advance.isCDNOpen ?
      this.resolutionList.concat(this.cdnList) :
      this.resolutionList;

    this.state = {
      isSelected: 0,
      isSelectLevel: 0
    };

    this.player_.ready(() => {
      this.setDefaultSelected();
    });
  }

  createEl() {
    const heroTitle = super.createEl('div', {
      textContent: this.localize('resolution_hero_title'),
      className: 'vjs-viu-player-list-title',
      dir: 'ltr'
    });
    const resTitle = super.createEl('div', {
      textContent: this.localize('resolution_title'),
      className: 'vjs-viu-player-list-sub-title res-sub-title',
      dir: 'ltr'
    });
    const root = super.createEl('div', {
      className: 'vjs-viu-player-list-container',
      dir: 'ltr'
    });
    const resolutionList = this.options_.advance.resolutionList || [];

    const resolutionWrapper = super.createEl('ui', {
      className: 'vjs-viu-player-list',
      dir: 'ltr'
    });

    resolutionList.map((item) => {
      const sigleItem = dom.createEl('li', {
        textContent: this.localize(`res_${item}`),
        className: `vjs-viu-player-list-item vjs-viu-res-item ${
          this.options_.advance.defaultResolution === item ?
            'selected-active' :
            ''
        } ${super.buildCSSClass()}`,
        dir: 'ltr'
      });

      sigleItem.dataset.id = item;
      resolutionWrapper.appendChild(sigleItem);
    });

    // CDN
    const cdnListTitle = super.createEl('div', {
      textContent: this.localize('cdn_title'),
      className: 'vjs-viu-player-list-sub-title cdn_sub_title',
      dir: 'ltr'
    });
    const cdnListWrapper = super.createEl('ui', {
      className: 'vjs-viu-player-list',
      dir: 'ltr'
    });
    const cdnList = this.options_.advance.cdnList || [];

    cdnList.map((item) => {
      const sigleItem = dom.createEl('li', {
        textContent: this.localize(`res_${item}`),
        className: `vjs-viu-player-list-item  vjs-viu-res-item vjs-viu-cdn-item ${
          this.options_.advance.defaultCdn === item ? 'selected-active' : ''
        } ${super.buildCSSClass()}`,
        dir: 'ltr'
      });

      sigleItem.dataset.id = item;
      cdnListWrapper.appendChild(sigleItem);
    });

    root.appendChild(heroTitle);
    root.appendChild(resTitle);
    root.appendChild(resolutionWrapper);
    if (this.options_.advance.isCDNOpen) {
      root.appendChild(cdnListTitle);
      root.appendChild(cdnListWrapper);
    }
    return root;
  }

  setDefaultSelected() {
    this.setState({
      isSelected: 0
    });
    const items = dom.$$('.vjs-viu-res-item');

    if (items[0]) {
      dom.addClass(items[0], 'active');
    }
  }

  upperSelectAction() {
    this.selectedUpperStep();
  }
  downerSelectAction() {
    this.selectedDownerStep();
  }

  selectedUpperStep() {
    const step = this.state.isSelected;
    const upStep = step - 1 < 0 ? 0 : step - 1;

    if (upStep < this.resolutionListTotal) {
      this.setState({
        isSelectLevel: 0
      });
    }
    this.setState({
      isSelected: upStep
    });
    this.setComponentSelected(upStep);
  }
  selectedDownerStep() {
    const step = this.state.isSelected;
    const total = this.totalList.length;
    const downStep = step + 1 >= total ? total - 1 : step + 1;

    if (downStep > this.resolutionListTotal - 1) {
      this.setState({
        isSelectLevel: 1
      });
    }

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
    const items = dom.$$('.vjs-viu-res-item');

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (dom.hasClass(items[i], 'active')) {
          dom.removeClass(items[i], 'active');
        }
      }
      if (items[step]) {
        dom.addClass(items[step], 'active');
      }
    }
  }
  /**
   * function setComponentSelected
   *
   * @param {*Number 选择索引} step
   * 更新主区状态选择状态处理器
   */
  setComponentResSelected(step) {
    const items = dom.$$('.vjs-viu-res-item');

    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (dom.hasClass(items[i], 'selected-active')) {
          dom.removeClass(items[i], 'selected-active');
        }
      }
      if (items[step]) {
        dom.addClass(items[step], 'selected-active');
      }
    }
  }
  setResolutionListActive(id) {
    const items = dom.$$('.vjs-viu-res-item');

    Array.from(items)
      .filter((item) => !dom.hasClass(item, 'vjs-viu-cdn-item'))
      .forEach((item) => {
        if (dom.hasClass(item, 'selected-active')) {
          dom.removeClass(item, 'selected-active');
        }
        if (item.dataset.id === id) {
          dom.addClass(item, 'selected-active');
        }
      });
  }
  setCdnListActive(id) {
    const items = dom.$$('.vjs-viu-res-item');

    Array.from(items)
      .filter((item) => dom.hasClass(item, 'vjs-viu-cdn-item'))
      .forEach((item) => {
        if (dom.hasClass(item, 'selected-active')) {
          dom.removeClass(item, 'selected-active');
        }
        if (item.dataset.id === id) {
          dom.addClass(item, 'selected-active');
        }
      });
  }
  /**
   * function handleClick
   *
   * @param {*id标识} id
   */
  handleClick(id) {
    this.clearAllClass();
    if (this.player_ && !this.player_.hasClass(`v-res-${id}`)) {
      this.player_.addClass(`v-res-${id}`);
    }

    if (this.resolutionList.includes(id)) {
      this.setResolutionListActive(id);
    }
    if (this.cdnList.includes(id)) {
      this.setCdnListActive(id);
    }
    this.player_.getChild('ViuPlayerComponent').viuAdvance.handleClick();
    this.player_.trigger('viuAdvance', {
      id,
      isSelectLevel: this.state.isSelectLevel || 0
    });
  }
  confirm() {
    const selected = this.state.isSelected;
    const isSelectLevel = this.state.isSelectLevel;

    switch (isSelectLevel) {
    case 0:
      if (this.options_.advance.resolutionList[selected]) {
        const id = this.options_.advance.resolutionList[selected];

        if (id) {
          this.handleClick(id);
        }

      }
      break;
    case 1:
      if (
        this.options_.advance.cdnList[selected - this.resolutionListTotal]
      ) {
        const id = this.options_.advance.cdnList[
          selected - this.resolutionListTotal
        ];

        if (id) {
          this.handleClick(id);
        }
      }
      break;
    }
  }

  clearAllClass() {
    const classList = this.totalList || [];

    classList.forEach((item) => {
      if (this.player_.hasClass(`v-res-${item}`)) {
        this.player_.removeClass(`v-res-${item}`);
      }
    });
  }
}

export default ViuResolutionList;
