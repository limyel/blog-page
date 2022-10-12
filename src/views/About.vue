<template>
  <div class="update-time">
    {{showTimeDetail(about.updateTime)}}
  </div>
  <div class="about">
    <v-md-preview :text="about.content"></v-md-preview>
  </div>
</template>

<script setup>
import {showTimeDetail} from "../utils/DateTimeFormat.js";
import {getCurrentInstance, onMounted, ref} from "vue";

const { proxy } = getCurrentInstance();

const about = ref({});

onMounted(() => {
  proxy.$api.getAbout().then(response => {
    about.value = response;
  })
})

</script>

<style lang="scss">
.update-time {
  margin-bottom: 20px;
}
</style>
