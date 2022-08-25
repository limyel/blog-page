<template>
  <div class="post">
    <h1 class="title">
      {{post.title}}
    </h1>

    <div class="info">
      <div class="create-time">
        {{showTimeDetail(post.createTime)}} ·&nbsp;
      </div>
      <div class="tags">
        <div class="tag" v-for="(tag, index) in post.tagList" :key="index">
          <router-link class="tag-name" :to="{name: 'tag_detail', params: {slug: tag.slug}}">{{tag.name}}</router-link>&nbsp;&nbsp;
        </div>
      </div>
    </div>

    <v-md-preview :text="post.content" class="content"></v-md-preview>
  </div>
</template>

<script setup>
import {showTimeDetail} from "../utils/DateTimeFormat";
import {getCurrentInstance, onMounted, ref} from "vue";

const { proxy } = getCurrentInstance();

let post = ref({});

onMounted(() => {
  let slug = proxy.$route.params.slug;
  proxy.$api.getPostDetail(slug).then(response => {
    post.value = response;
  })
})
</script>

<style lang="scss">
.post {
  .title {
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    line-height: 0.8rem;

    .create-time {
      font-weight: 200;
      font-size: 0.8rem;
    }

    .tags {
      display: flex;
      flex-direction: row;

      .tag {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
}

</style>
