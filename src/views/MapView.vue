<template>
  <BottomSheet :title="title">
    <ActiveApplication v-if="type === Type.active" />
  </BottomSheet>
</template>

<script setup lang="ts">
import ActiveApplication from "@/components/Applications/ActiveApplication.vue";
import BottomSheet from "@/components/UI/BottomSheet.vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { Type } from "@/models/Application";

const store = useStore();
const type: Type = computed(() => store.state.application.current?.type);
const title = ref("Активная заявка");
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
}
</style>
