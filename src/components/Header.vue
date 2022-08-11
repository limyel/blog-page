<template>
  <div class="header">
    <div class="logo">
      limyel's blog
    </div>
    <div class="description">
      程序员，泉州人在福州，使用 Java、Python、Go 和 JavaScript 开发。
    </div>
    <div class="navication">
      <router-link :to="{name: 'home'}" class="navication-item">首页</router-link>
      <router-link :to="{name: 'tag'}" class="navication-item">标签</router-link>
      <router-link :to="{name: 'search'}" class="navication-item">搜索</router-link>
      <router-link :to="{name: 'about'}" class="navication-item">关于</router-link>
    </div>
  </div>
</template>

<script setup>

// watch(() => router.currentRoute.value.path,(newValue, oldValue) => {
//   activeNav.value = newValue.name;
// },{ immediate: true })

</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #000000;
  padding-top: 10px;

  .logo {
    font-size: 35px;
  }

  .description {
    font-size: 0.9rem;
    margin-top: 5px;
    color: #6c757d;
  }

  .navication {
    display: flex;
    flex-direction: row;
    justify-content: right;
    line-height: 45px;
    flex-grow: 1;
    margin-left: 50px;

    .navication-item {
      margin-left: 30px;
    }

    .router-link-exact-active {
      color: #0d6efd;
    }
  }
}

</style>
