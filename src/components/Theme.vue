<template>
  <div class="theme">
    <Header/>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Theme",
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">


.theme {
  display: flex;
  flex-direction: column;
  width: 44%;
  margin-left: 28%;
  min-height: 100vh;

  .main {
    flex-grow: 1;
  }
}

</style>
