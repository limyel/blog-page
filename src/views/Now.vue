<template>
  <div class="now-title">
    我正在做/想些什么？
  </div>

  <div class="now-time">
    更新于 2022-9-23 10: 52
  </div>

  <div class="now-content">
    <li class="now-content-item">学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。学习 netty，写一个内网穿透程序。</li>
    <li class="now-content-item">学习 netty，写一个内网穿透程序。</li>
    <li class="now-content-item">学习 netty，写一个内网穿透程序。</li>
    <li class="now-content-item">学习 netty，写一个内网穿透程序。</li>
  </div>

  <div class="now-more">
    <router-link :to="{name: 'now_history'}">我之前在做/想些什么？</router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.now-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.now-time {
  margin-bottom: 20px;
}

.now-content {
  border: #787878 solid 1px;
  padding: 50px;
  margin-bottom: 20px;

  .now-content-item {
    margin-bottom: 20px;
  }
}

.now-more a {
  color: #787878;
}
.now-more a:hover {
  border-bottom: #787878 solid 1px;
}
</style>
