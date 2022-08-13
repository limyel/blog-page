<template>
  <div class="about">
    <v-md-preview :text="about"></v-md-preview>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";

const { proxy } = getCurrentInstance();

const about = ref("");

onMounted(() => {
  proxy.$api.getAbout().then(response => {
    about.value = response;
  })
})

</script>

<style lang="scss">
.about {
  margin-top: 30px;
}
</style>
