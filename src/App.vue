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
  src: url('./assets/font/OPPOSans-L.ttf');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-R.ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-B.ttf');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "oppos-sons";
  src: url('./assets/font/OPPOSans-H.ttf');
  font-weight: 900;
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
.github-markdown-body p {
  line-height: 25px;
}
</style>
