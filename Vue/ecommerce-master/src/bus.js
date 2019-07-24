import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// event bus 是可以跨元件通訊的
// 會忘記在哪裡設定過這些方法
// 所以(老師)平時會拉出來統一管理Methods