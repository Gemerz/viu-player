import videojs from 'video.js';
const Component = videojs.getComponent('Component');

const dom = videojs.dom;

const defaults = {
  title: ''
};
/**
 *  LangList
 *
 */

class LangList extends Component {
  constructor(player, options) {
    super(player, options);
    this.options = videojs.mergeOptions(defaults, options);
    this.on('click', event => {
      event.stopPropagation();
      const { languagesId } = event.target.dataset;

      this.handleClick(languagesId);
    });
    this.on('mouseover', e => {
      const childNodes = e.currentTarget.childNodes;
      const currentNode = e.target;
      let upStep;

      for (let i = 0; i < childNodes.length; i++) {
        if (currentNode === childNodes[i]) {
          upStep = i;
        }
      }

      this.setState({
        isSelected: upStep
      });
      this.setComponentSelected(upStep);
    });
    this.state = {
      isSelected: 0
    };
    this.setDefaultSelected();
  }
  createEl() {
    const root = super.createEl('div', {
      className: 'vjs-viu-player-lang-items',
      dir: 'ltr'
    });
    const languages = this.options_.languages;

    if (languages.length >= 8) {
      root.classList.add('over-size');
    } else {
      root.classList.remove('over-size');
    }
    let isAllLanguagesIsDefault = false;

    for (let i = 0; i < languages.length; i++) {
      const isDefault = parseInt(languages[i].isDefault, 10) === 1;
      const text = dom.createEl('li', {
        textContent: languages[i].name || '',
        className: `vjs-viu-player-lang-title vjs-viu-player-lang-li ${
          isDefault ? 'lang-active' : ''
        } ${super.buildCSSClass()}`,
        dir: 'ltr'
      });

      if (languages[i].isDefault) {
        isAllLanguagesIsDefault = true;
      }
      text.dataset.languagesId = languages[i].id;
      root.appendChild(text);
    }
    const switchText = dom.createEl('li', {
      textContent: this.localize('hide_sub'),
      className: `vjs-viu-player-lang-title vjs-viu-player-lang-li ${super.buildCSSClass()}`,
      dir: 'ltr'
    });

    if (languages.length === 0 || !isAllLanguagesIsDefault) {
      switchText.classList.add('lang-active');
    }
    switchText.dataset.languagesId = 'hidden';
    root.appendChild(switchText);
    return root;
  }

  setDefaultSelected() {
    const selectedIndex = this.options.languages.findIndex(item => parseInt(item.isDefault, 10) === 1);

    this.setState({
      isSelected: selectedIndex
    });
  }

  upperSelectAction() {
    this.selectedUpperStep();
  }
  downerSelectAction() {
    this.selectedDownerStep();
  }
  loadNewLangListOptions(options) {
    if (options.length === 0) {
      return;
    }
    dom.emptyEl(this.el());
    const languages = options;

    for (let i = 0; i < languages.length; i++) {
      const isDefault = parseInt(languages[i].isDefault, 10) === 1;
      const text = dom.createEl('li', {
        textContent: languages[i].name || '',
        className: `vjs-viu-player-lang-title vjs-viu-player-lang-li ${
          isDefault ? 'lang-active' : ''
        }}`,
        dir: 'ltr'
      });

      text.dataset.languagesId = languages[i].id;
      this.el().appendChild(text);
    }
  }
  selectedUpperStep() {
    const step = this.state.isSelected;
    // const total = parseInt(this.options.languages.length, 10);
    const upStep = step - 1 < 0 ? 0 : step - 1;

    this.setState({
      isSelected: upStep
    });
    this.setComponentSelected(upStep);
  }
  selectedDownerStep() {
    const step = this.state.isSelected;
    const total = parseInt(this.options.languages.length, 10);
    const downStep = step + 1 > total ? total : step + 1;

    videojs.log('selectedDownerStep', step);
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
    // const totalStep = parseInt(this.options.languages.length, 10);
    const items = dom.$$('.vjs-viu-player-lang-li');

    if (items) {
      for (let i = 0; i < items.length; i++) {
        dom.removeClass(items[i], 'lang-active');
      }
    }
    dom.addClass(items[step], 'lang-active');

    this.adjustScrollTop(step);
  }
  /**
   *
   * @param {*语言标识} languagesId
   */
  handleClick(languagesId) {
    this.player_.trigger('subtitleChange', languagesId);
    this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
  }
  confirm() {
    const allLanguages = this.options_.languages.concat({
      id: 'hidden',
      name: 'hidden',
      isDefault: '0',
      mark: 'hidden'
    });
    const languages = allLanguages[this.state.isSelected];

    if (languages !== undefined) {
      this.player_.trigger('subtitleChange', languages.id);
    } else {
      this.player_.trigger('subtitleChange', 'hidden');
    }
    this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
  }
  handleKeyDown(languagesId) {
    this.player_.trigger('subtitleChange', languagesId);
    this.player_.getChild('ViuPlayerComponent').viuSubtitle.handleClick();
  }
  adjustScrollTop(step) {
    const langListContainer = this.el().clientHeight;
    const containerScrollTop = parseInt((step + 1) * 92, 10);

    if (containerScrollTop + 92 > langListContainer) {
      this.el().scrollTop = containerScrollTop;
    } else {
      this.el().scrollTop = 0;
    }
  }
}

export default LangList;
