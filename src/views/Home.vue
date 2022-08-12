<template>
  <div class="home">
    <div class="archive-item" v-for="(post, index) in postList" :key="index">
      <div class="archive-item-date">
        {{showTimeShort(post.createTime)}}
      </div>
      <div class="archive-item-title">
        <router-link :to="{name: 'post', params: {slug: post.slug}}">{{post.title}}</router-link>
      </div>
      <div class="archive-item-tags" v-for="(tag, index) in post.tagList" :key="index">
        <div class="archive-item-tag">
          <router-link :to="{name: 'tag_detail', params: {slug: tag.slug}}">{{tag.name}}</router-link>
        </div>
      </div>
    </div>

    <Page/>
  </div>
</template>

<script setup>
import {showTimeShort} from "../utils/DateTimeFormat.js";
import {getCurrentInstance, onMounted, reactive, ref} from "vue";

const { proxy } = getCurrentInstance();

let postList = ref([]);

onMounted(() => {
  proxy.$api.getPostInHome().then(response => {
    postList.value.push(...response.records);
    console.log(postList)
  })
})

</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .archive-item {
    border-bottom: #6c757d dashed 1px;
    display: flex;
    flex-direction: row;
    line-height: 1.6rem;
    width: 100%;
    margin: 10px 0;
    padding: 5px 0;

    .archive-item-date {
      width: 120px;
      color: #6c757d;
    }

    .archive-item-title {
      flex-grow: 1;
      font-weight: bold;
    }

    .archive-item-tags {
      display: flex;
      flex-direction: row;

      .archive-item-tag {
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
