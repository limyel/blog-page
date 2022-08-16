<template>
  <div class="home">
    <div class="post-item" v-for="(post, index) in postList" :key="index">
      <div class="post-item-date">
        {{showDayDelta(post.createTime)}}
      </div>
      <div class="post-item-title">
        <router-link :to="{name: 'post', params: {slug: post.slug}}">{{post.title}}</router-link>
      </div>
      <div class="post-item-tags" v-for="(tag, index) in post.tagList" :key="index">
        <div class="post-item-tag">
          <router-link :to="{name: 'tag_detail', params: {slug: tag.slug}}">{{tag.name}}</router-link>
        </div>
      </div>
    </div>

    <Page :api="api" @handleUpdate="update"/>
  </div>
</template>

<script setup>
import {showDayDelta} from "../utils/DateTimeFormat.js";
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import Page from "../components/Page.vue";

const { proxy } = getCurrentInstance();

let postList = ref([]);

const api = ref("http://localhost:8002/post");

const update = data => {
  postList.value = data;
}

</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .post-item {
    border-bottom: #6c757d dashed 1px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    line-height: 1.6rem;
    width: 100%;
    margin: 10px 0;

    .post-item-date {
      width: 120px;
      color: #6c757d;
    }

    .post-item-title {
      flex-grow: 1;
      font-weight: bold;
    }

    .post-item-tags {
      display: flex;
      flex-direction: row;

      .post-item-tag {
        padding: 0.4rem;
        font-size: 0.8rem;
        line-height: 100%;
        margin-left: 10px;
        border: 2px solid #000000;
        border-radius: 5px;
      }
    }
  }
}
</style>
