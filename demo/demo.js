(function (window, videojs) {
  const examplePlayer = (window.examplePlayer = videojs(
    "videojs-viu-tools-player",
    {
      preload: "auto",
      autoplay: true,
      fluid: false,
      inactivityTimeout: 0, // 非用户活跃时间间隔,在keydown事件控制非用户活跃
      errorDisplay: true,
      controlBar: false,
      loop: true,
      muted: true,
      html5: {
        hls: {
          overrideNative: true,
          enableLowInitialPlaylist: true,
          smoothQualityChange: true,
          useBandwidthFromLocalStorage: true,
        },
        nativeTextTracks: false,
        nativeAudioTracks: false,
        nativeVideoTracks: false,
      },
      language: "zh_cn",
      languages: {
        zh_cn: {
          hide_sub: "隐藏",
          episode_num: "第13集",
          setting_language: "语言 / Language",
          off_shelf_date:"下架日期",
          resolution_title:"源大小",
          fontsize_s: "小",
          fontsize_m: "正常",
          fontsize_l: "大",
          resolution_hero_title: "高级设置",
          cdn_title:"CDN线路",
          res_s1080p:"超清10M",
          res_s720p:"超清4M",
          res_s480p:"高清",
          res_s240p:"清晰",
          res_url:"Amazon",
          res_url2:"PCCW HKT",
          res_url3:"AKimai",
        },
        en: {
          hide_sub: "Close",
          episode_num: "第13集",
          setting_language: "Language / 语言",
          video_timeout: "Please connect to a better network",
          fontsize_s: "small",
          fontsize_m: "normal",
          fontsize_l: "large",
          resolution_title:"源大小",
         
        },
        sg_en: {
          hide_sub: "Close",
          episode_num: "EP. 13",
          setting_language: "Language / 语言",
          off_shelf_date:"下架日期 : "
        },
        zh_hk: {
          hide_sub: "隱藏",
          episode_num: "第13集",
          setting_language: "語言 / Language",
        },
        au_en: {
          hide_sub: "Close",
          episode_num: "EP. 13",
          setting_language: "Language / 语言",
        },
        th: {
          hide_sub: "ปิด",
          episode_num: "EP. 13",
          setting_language: "การตั้งค่าภาษา",
        },
        ph_en: {
          hide_sub: "Close",
          episode_num: "EP. 13",
          setting_language: "Language / 语言",
        },
        nz_en: {
          hide_sub: "Close",
          episode_num: "EP. 13",
          setting_language: "Language / 语言",
        },
      },
    }
  ));
  const ViuPlayer = (window.ViuPlayer = examplePlayer.ViuPlayer({
    isTopSubtitleDisable: true,
    fontSize: ["s", "m", "l", "xl"],
    defaultFontSize: "s",
    info: {
      chipName: "生活大爆作 第十三季",
      episode: "12",
      chipCaptions: "谢耳朵与艾米终于有自己的孩子呢...",
      chipDesc: "谢耳朵与艾米 经历了很多事，终于................ ",
      offlineTime: "",
      offlineTimeFormat: "YYYY-MM-DD",
      isMovie: 0,
    },
    advance: {
      resolutionList: ["s1080p", "s720p", "s480p", "s240p"],
      defaultResolution: 's480p',
      cdnList: ['url','url2','url3'],
      defaultCdn: 'url',
      isCDNOpen: true,
    },
    playToggle: {
      replay: false,
    },
    controlBar: {
      children: [
        "currentTimeDisplay",
        "progressControl",
        "durationDisplay",
        "liveDisplay",
        "seekToLive",
      ],
    },
    videoBufferTimeout: 8,
  }));

  examplePlayer.src(
    "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
  );

  examplePlayer.on("nextChip", function (e) {
    console.log("收到下一集");
  });
  examplePlayer.on("toggleTopSubtitle", function (event, switcher) {
    console.log("收到双字幕开关", switcher);
  });

  examplePlayer.on("subtitleChange", function (event, data) {
    console.log("subtitleChange data", data);
  });

  examplePlayer.on("loadTimeout", function () {
    console.log("loading超60秒");
  });
  examplePlayer.on("viuAdvance", function (event, data) {
    console.log("viuAdvance-selected", data);
  });


  window.addEventListener("keydown", function (event) {
    console.log("keyCode", event.keyCode);
    switch (event.keyCode) {
      case 13:
        examplePlayer.ViuPlayer().confirm();
        break;
      case 37:
        examplePlayer.ViuPlayer().leftSelectAction();
        break;
      case 38:
        examplePlayer.ViuPlayer().upperSelectAction();
        break;
      case 39:
        examplePlayer.ViuPlayer().rightSelectAction();
        break;
      case 40:
        examplePlayer.ViuPlayer().downerSelectAction();
        break;
      case 66: {
        // b back
        examplePlayer.ViuPlayer().return();
        break;
      }
      case 73: {
        // s 字幕 for test
        examplePlayer.ViuPlayer().toggleInfo();
        break;
      }
      case 83: {
        // s 字幕 for test

        examplePlayer.ViuPlayer().toggleSubtitle();
        break;
      }
      case 80: {
        // p 禁用双字幕

        examplePlayer.ViuPlayer().checkTopSubtitleDisable(false);
        break;
      }
      case 79: {
        // o 开启双字幕

        examplePlayer.ViuPlayer().checkTopSubtitleDisable(true);
        break;
      }

      default:
        break;
    }
  });

  // setTimeout(function () {
  //   ViuPlayer.toggleNextChip()
  // }, 3000)
})(window, window.videojs);
