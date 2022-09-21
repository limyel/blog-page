<template>
  <div class="tag-detail">
    <div class="tag-title">
      {{tag.name}}
    </div>

    <div class="post-item" v-for="(post, index) in postList" :key="index">
      <div class="title">
        <router-link :to="{name: 'post', params: {slug: post.slug}}">{{post.title}}</router-link>
      </div>
      <div class="info">
        <div class="create-time">
          {{showTimeDetail(post.createTime)}}
        </div>
      </div>
      <div class="description">
        <v-md-preview :text="post.description" class="content"></v-md-preview>
      </div>
    </div>

    <Page :api="api" @handleUpdate="update"/>
  </div>
</template>

<script setup>
import {showTimeDetail} from "../utils/DateTimeFormat";
import {getCurrentInstance, onMounted, ref} from "vue";
import Page from "../components/Page.vue";

const { proxy } = getCurrentInstance();

let postList = ref([]);
let tag = ref({});

const api = ref("http://localhost:8003/post/by-tag/" + proxy.$route.params['slug'])

const update = data => {
  postList.value = data;
}

onMounted(() => {
  const tagSlug = proxy.$route.params['slug'];
  proxy.$api.getTagInfo(tagSlug).then(response => {
    tag.value = response;
  })
})

</script>

<style lang="scss">
.tag-detail {
  .tag-title {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 50px;
  }

  .post-item {
    border-bottom: #2d374b dashed 1px;
    display: flex;
    flex-direction: column;
    line-height: 1.6rem;
    width: 100%;
    margin-bottom: 20px;

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .info {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      line-height: 0.8rem;

      .create-time {
        color: #787878;
        font-size: 0.8rem;
      }
    }
  }
}

</style>
