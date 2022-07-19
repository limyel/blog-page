<template>
  <div class="tag">
    <div class="tag-item" v-for="(tag, index) in tagList" :key="index">
      <div class="tag—link">
        <router-link :to="{'name': 'tag_detail', params: {'slug': tag.slug}}">{{tag.name}}</router-link>
      </div>
      <div class="tag-post-num">
        {{tag.postNum}}
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {
      tagList: [
        {
          name: "Python",
          slug: "python",
          postNum: 10
        },
        {
          name: "Java",
          slug: "java",
          postNum: 112
        },
        {
          name: "Go",
          slug: "go",
          postNum: 11
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.tag {
  .tag-item {
    display: flex;
    flex-direction: row;
    /*border-bottom: 1px solid #E1E1E1;*/
    margin: 35px 0;
    justify-content: space-between;
    line-height: 1.6rem;

    .tag—link {
      padding: 0.4rem;
      font-size: 0.8rem;
      line-height: 100%;
      border: 2px solid #000000;
      border-radius: 5px;
    }

    .tag-post-num {
      margin-left: 100px;
    }
  }
}

</style>
