<template>
  <div class="search">
    <div class="search-input">
      <input/>
      <button>搜索</button>
    </div>

    <div class="search-result">
      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>

      <div class="search-result-item">
        <div class="search-result-title">
          <router-link to="">Python 从入门到入坟</router-link>
        </div>
        <div class="search-result-content">
          ...lskjdfal;sdkfjasl;dfjas;dlfkjasl;fsadfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdkfjls...
        </div>
      </div>
    </div>

    <Page/>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="scss">
.search {
  display: flex;
  flex-direction: column;

  .search-input {
    display: flex;
    height: 40px;
    margin: 35px 0;

    * {
      font-size: 20px
    }

    input {
      padding: 10px;
      flex-grow: 1;
    }

    button {
      width: 90px;
      margin-left: 10px;
    }
  }

  .search-result {
    flex-grow: 1;

    .search-result-item {
      margin: 30px 0;
      border-bottom: #6c757d dashed 1px;
      padding: 5px 0;

      .search-result-title {
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .search-result-content {
        width: 100%;
        word-wrap:break-word;
        word-break:break-all;
        overflow: hidden;
      }
    }

  }
}
</style>
