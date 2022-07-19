<template>
  <div class="home">
    <div class="archive-block" v-for="(year, index) in yearList" :key="index">
      <div class="archive-year">
        {{year}}
      </div>
      <div class="archive-item" v-for="(post, index) in posts[year]" :key="index">
        <div class="archive-item-date">
          {{showMonthDayLocal(post.createTime)}}
        </div>
        <div class="archive-item-title">
          <router-link :to="{name: 'post', params: {'slug': post.slug}}">{{post.title}}</router-link>
        </div>
        <div class="archive-item-tags" v-for="(tag, index) in post.tagList" :key="index">
          <div class="archive-item-tag">
            <router-link :to="{'name': 'tag_detail', params: {'slug': tag.slug}}">{{tag.name}}</router-link>
          </div>
        </div>
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
import {showMonthDayLocal} from "../utils/DateTimeFormat.js";

export default {
  name: "Home",
  data() {
    return {
      posts: {
        2022: [
          {
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
            ]
          },
          {
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
            ]
          },
          {
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
            ]
          }
        ],
        2021: [
          {
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
            ]
          },
          {
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
            ]
          }
        ],
        2020: [
          {
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
            ]
          }
        ]
      },
      yearList: [
          2022,
          2021,
          2020
      ]
    }
  },
  methods: {
    showMonthDayLocal
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;

  .archive-block {
    width: 100%;

    .archive-year {
      font-size: 2rem;
      margin: 35px 0;
    }

    .archive-item {
      display: flex;
      flex-direction: row;
      line-height: 1.6rem;
      width: 100%;
      margin: 10px 0;

      .archive-item-date {
        /*margin-right: 50px;*/
        width: 100px;
      }

      .archive-item-title {
        flex-grow: 1;
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
}
</style>
