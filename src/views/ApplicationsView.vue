<template>
  <FullBackground />
  <BaseSheet ref="sheet">
    <template v-slot:header>
      <div
        @touchstart="panelStartTouch"
        @touchend="panelEndTouch"
        class="header"
      >
        <div class="margin"></div>
        <h1 class="title">{{ title }}</h1>
      </div>
    </template>
    <template v-slot:body>
      <ActiveApplication v-if="type === Type.active"></ActiveApplication>
    </template>
  </BaseSheet>
</template>

<script setup lang="ts">
import ActiveApplication from "@/components/Applications/ActiveApplication.vue";
import BaseSheet from "@/components/UI/BaseSheet.vue";
import FullBackground from "@/components/UI/FullBackground";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { Type } from "@/models/Application";

const store = useStore();
const type: Type = computed(() => store.state.application.current?.type);
const title = ref("Активная заявка");
</script>

<style scoped lang="scss">
@import "@/styles/colors";
@import "@/styles/fonts";

.header {
  z-index: 3;
  position: fixed;
  width: 100%;
  padding-bottom: 20px;

  background-color: $bottomSheet;
  border-radius: 20px 20px 0px 0px;

  .title {
    @extend %largeTitle;
    text-align: left;
    margin-top: 20px;
    padding: 0 20px;
  }
}
</style>
