<template>
  <div class="header">
    <div class="logo">
      limyel's blog
    </div>
    <div class="navication">
      <router-link :to="{name: 'home'}" class="navication-item">文章</router-link>
      <router-link :to="{name: 'tag'}" class="navication-item">标签</router-link>
      <router-link :to="{name: 'search'}" class="navication-item">搜索</router-link>
      <router-link :to="{name: 'search'}" class="navication-item">留言板</router-link>
      <router-link :to="{name: 'about'}" class="navication-item">关于</router-link>
      <router-link :to="{name: 'now'}" class="navication-item">NOW</router-link>
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
  flex-direction: row;
  padding: 20px 0;
  justify-content: space-between;
  margin-bottom: 50px;
  border-bottom: 3px solid #e6e6e6;

  .logo {
    font-weight: 700;
    letter-spacing: 3px;
  }

  .navication {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: right;

    .navication-item {
      font-size: 0.9rem;
      margin-left: 30px;
    }

    .router-link-exact-active {
      color: #0d6efd;
    }
  }
}

</style>
