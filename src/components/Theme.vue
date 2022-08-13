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

@media (min-width: 0px) and (max-width: 1400px) {
  .theme {
    width: 54%;
    margin-left: 23%;
    margin-right: 23%;
  }
}

@media screen and (min-width: 1400px) {
  .theme {
    width: 44%;
    margin-left: 28%;
    margin-right: 28%;
  }
}


.theme {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    flex-grow: 1;
  }
}

</style>
