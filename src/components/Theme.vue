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
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
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
  background-color: #ffffff;
  padding: 0 5%;
  box-shadow: 0 2px 6px rgb(100 100 100 / 30%);

  .main {
    flex-grow: 1;
  }
}

</style>
