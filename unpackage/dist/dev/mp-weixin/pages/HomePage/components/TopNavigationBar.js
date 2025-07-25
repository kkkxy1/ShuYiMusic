"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "TopNavigationBar",
  setup(__props) {
    const navList = common_vendor.ref([
      "推荐",
      "乐馆",
      "听书",
      "AI唱",
      "会员",
      "金币",
      "AI作歌",
      "明星博客",
      "Dolby",
      "音乐人",
      "演出ing",
      "儿童",
      "原创",
      "校园",
      "睡眠疗愈",
      "疗愈",
      "博客"
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        b: common_vendor.o(() => {
        }),
        c: common_vendor.o(() => {
        }),
        d: common_vendor.p({
          radius: 100
        }),
        e: common_vendor.p({
          type: "wallet-filled",
          size: "28"
        }),
        f: common_vendor.p({
          type: "headphones",
          size: "28"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/HomePage/components/TopNavigationBar.js.map
