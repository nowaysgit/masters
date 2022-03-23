<template>
  <BottomSheet :title="title">
    <ActiveApplication />
  </BottomSheet>
</template>

<script setup lang="ts">
import ActiveApplication from "@/components/ActiveApplication.vue";
import BottomSheet from "@/components/BottomSheet.vue";
import { ref } from "vue";

const title = ref("Активная заявка");
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
}
</style>
