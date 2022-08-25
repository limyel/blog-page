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
    margin-bottom: 20px;

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
      margin-bottom: 20px;
      border-bottom: #2d374b dashed 1px;
      padding: 5px 0;

      .search-result-title {
        font-size: 1.5rem;
        margin-bottom: 20px;
        font-weight: 700;
      }

      .search-result-content {
        margin-bottom: 20px;
        width: 100%;
        word-wrap:break-word;
        word-break:break-all;
        overflow: hidden;
      }
    }

  }
}
</style>
