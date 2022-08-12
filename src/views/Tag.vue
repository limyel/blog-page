<template>
  <div class="tag">
    <div class="tag-item" v-for="(tag, index) in tagList" :key="index">
      <div class="tag—link">
        <router-link :to="{'name': 'tag_detail', params: {'slug': tag.slug}}">{{tag.name}} - {{tag.postNum}}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";

const { proxy } = getCurrentInstance();

let tagList = ref([]);

onMounted(() => {
  proxy.$api.getTagAll().then(response => {
    tagList.value = response;
  })
})


</script>

<style lang="scss">
.tag {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

  .tag-item {
    line-height: 1.6rem;
    margin: 10px 10px;

    .tag—link {
      padding: 0.4rem;
      font-size: 0.8rem;
      line-height: 100%;
      border: 2px solid #000000;
      border-radius: 5px;
    }
  }
}

</style>
