<template>
  <FullBackground ref="background" />
  <BaseSheet ref="sheet" class="sheet">
    <template v-slot:header>
      <div
        @touchstart="panelStartTouch"
        @touchend="panelEndTouch"
        class="header"
      >
        <div class="line"></div>
        <h1 class="title">{{ title }}</h1>
      </div>
    </template>
    <template v-slot:body>
      <slot></slot>
    </template>
  </BaseSheet>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import useLeaving from "@/hooks/Leaving";
import BaseSheet from "@/components/UI/BaseSheet";
import FullBackground from "@/components/UI/FullBackground";

defineProps({
  title: {
    type: String,
    required: false,
    default: "BottomSheet",
  },
});
const sheet = ref();
const background = ref();
const { panelStartTouch, panelEndTouch } = useLeaving(sheet, background);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.sheet {
  top: calc(100vh - 150px);
  height: calc(100vh - 52px);
}
.header {
  z-index: 2;
  position: fixed;
  width: 100%;
  padding-bottom: 20px;

  background-color: $bottomSheet;
  border-radius: 20px 20px 0px 0px;

  .line {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    width: 32px;
    height: 5px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;

    opacity: 0.08;

    border-radius: 2.5px;
    -webkit-border-radius: 20.5px;
    -moz-border-radius: 2.5px;
  }
  .title {
    @extend %largeTitle;
    text-align: left;
    padding: 0 20px;
  }
}
</style>
