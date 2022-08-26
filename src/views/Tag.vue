<template>
  <div class="tag">
    <div class="tag-item" v-for="(tag, index) in tagList" :key="index">
      <div class="tag—link">
        <router-link :to="{'name': 'tag_detail', params: {'slug': tag.slug}}" @click="">{{tag.name}} - {{tag.postNum}}</router-link>
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

  .tag-item {
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;

    .tag—link {
      padding: 8px;
      line-height: 100%;
      border: 2px solid #6c757d;
      border-radius: 5px;
      font-size: 0.9rem;
    }
  }
}

</style>
