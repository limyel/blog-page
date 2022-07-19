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

<script>
import {showTimeDetail} from "../utils/DateTimeFormat";

export default {
  name: "Post",
  data() {
    return {
      post: {
        createTime: 1658108426000,
        title: "hello world",
        slug: "hello-world",
        tagList: [
          {
            name: "Java",
            slug: "java"
          },
          {
            name: "Python",
            slug: "python"
          }
        ],
        content: "## 工作\n" +
            "\n" +
            "公出的一周，这周大半时间都在东部办公区公出。\n" +
            "\n" +
            "来东办真是大开眼界，不光惊讶于公务员食堂的饭菜物美价廉，更是再次明白什么叫外包不如狗（为什么是再次？）。在东办，外包人多的楼层直接把厕所蹲位的门给拆了，就为了让外包减少带薪拉屎的时间...\n" +
            "\n" +
            "本周大部分时间都在划水，工作内容主要是根据省级平台的文档来修改、维护mock。虽然到现在是转正了，但是工作上还是踩了不少雷，主要还是不够认真，写的代码太臭了，bug 也不少，具体业务也是模模糊糊的。\n" +
            "\n" +
            "\n" +
            "\n" +
            "## 学习\n" +
            "\n" +
            "本周几乎没有学习什么...\n" +
            "\n" +
            "\n" +
            "\n" +
            "## 生活\n" +
            "\n" +
            "房子装修进度总算有更新了，在结束上半年漫长的雨季之后，终于把阳台封窗给做了。厨房橱柜即将完工，下周开始组装柜子。"
      }
    }
  },
  methods: {
    showTimeDetail
  }
}
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
