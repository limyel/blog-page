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

@media (min-width: 0px) and (max-width: 1600px) {
  .theme {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
}

@media screen and (min-width: 1600px) {
  .theme {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
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
