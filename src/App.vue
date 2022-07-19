<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/style/reset.css";
@import "./assets/style/index.scss";

@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-M.ttf');
  font-weight: normal;
  font-style: normal;
}

body * {
  font-family: "oppos-sons", monospace;
}

.app {
  width: 100vw;
  min-height: 100vh;
}

/* markdown 样式 */
.github-markdown-body {
  padding: 0 !important;
}
</style>
