<template>
  <div class="page">
    <button v-if="hasPre()" @click="updatePre">上一页</button>
    <button v-if="hasNext()" @click="updateNext">下一页</button>
    {{currentPage}}/{{maxPage}}
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import request from "../utils/request.js";

const props = defineProps({
  api: {
    type: String,
    default: ""
  }
})

let currentPage = ref(0);
let maxPage = ref(1);

const emit = defineEmits(['handleUpdate'])

const nextPage = () => {
  return currentPage.value + 1;
}
const prePage = () => {
  return currentPage.value - 1;
}

const hasNext = () => {
  return currentPage.value < maxPage.value;
}
const hasPre = () => {
  return currentPage.value > 1;
}

const updatePre = () => {
  const params = {pageNum: prePage()}
  request({
    url: props.api,
    data: params,
    method: "get"
  }).then(response => {
    currentPage.value = response.current;
    maxPage.value = response.pages;
    emit('handleUpdate', response.records);
  })
}
const updateNext = () => {
  const params = {pageNum: nextPage()}
  request({
    url: props.api,
    data: params,
    method: "get"
  }).then(response => {
    currentPage.value = response.current;
    maxPage.value = response.pages;
    emit('handleUpdate', response.records);
  })
}

onMounted(() => {
  updateNext();
})
</script>

<style lang="scss">
.page {
  margin: 20px 0;
}
</style>
