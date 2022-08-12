<template>
  <div class="post">
    <h1 class="title">
      {{post.title}}
    </h1>

    <div class="info">
      <div class="create_time">
        {{showTimeDetail(post.createTime)}}
      </div>
      <div class="tags">
        <div class="tag" v-for="(tag, index) in post.tagList" :key="index">
          <router-link :to="{'name': 'tag_detail', params: {'slug': tag.slug}}">{{tag.name}}</router-link>
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
    margin: 35px 0;
  }

  .info {
    margin-bottom: 35px;
    display: flex;
    flex-direction: row;
    line-height: 1.6rem;

    .tags {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      justify-content: right;

      .tag {
        padding: 0.4rem;
        font-size: 0.8rem;
        line-height: 100%;
        margin-left: 10px;
        border: 2px solid #000000;
        border-radius: 5px;
      }
    }

    .content {
      width: 100%;
    }
  }
}

</style>
