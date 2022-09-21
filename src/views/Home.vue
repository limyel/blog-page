<template>
  <div class="home">
    <div class="post-item" v-for="(post, index) in postList" :key="index">
      <div class="title">
        <router-link :to="{name: 'post', params: {slug: post.slug}}">{{post.title}}</router-link>
      </div>
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
      <div class="description">
        <v-md-preview :text="post.description" class="content"></v-md-preview>
      </div>
    </div>

    <Page :api="api" @handleUpdate="update"/>
  </div>
</template>

<script setup>
import {showTimeDetail} from "../utils/DateTimeFormat.js";
import {getCurrentInstance, onMounted, reactive, ref} from "vue";
import Page from "../components/Page.vue";
import config from "@/config";

const { proxy } = getCurrentInstance();

let postList = ref([]);

const api = ref(config.baseUrl + "/post");

const update = data => {
  postList.value = data;
}

</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;

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
}
</style>
