<template>
  <div class="tag-detail">
    <div class="tag-title">
      {{$route.params['slug']}}
    </div>

    <div class="archive-block" v-for="(year, index) in Object.keys(posts)" :key="index">
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
      </div>
    </div>

    <Page v-if="false"/>
  </div>
</template>

<script>
import {showMonthDayLocal} from "../utils/DateTimeFormat";

export default {
  name: "TagDetail",
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
      }
    }
  },
  methods: {
    showMonthDayLocal
  }
}
</script>

<style lang="scss">
.tag-detail {
  .tag-title {
    font-size: 2rem;
    margin-top: 35px;
  }

  .archive-block {
    .archive-year {
      font-size: 1.5rem;
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
    }
  }
}

</style>
