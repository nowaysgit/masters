<template>
  <div ref="background" class="background"></div>
  <div class="applicationPanel" ref="panel">
    <div @touchstart="panelStartTouch" @touchend="panelEndTouch" class="header">
      <div class="line"></div>
      <h1 class="title">{{ title }}</h1>
    </div>
    <div style="margin-bottom: 70px"></div>
    <slot></slot>
    <div style="margin-top: 80px"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import useLeaving from "@/hooks/Leaving";
defineProps({
  title: {
    type: String,
    required: false,
    default: "BottomSheet",
  },
});
const panel = ref();
const background = ref();
const { panelStartTouch, panelEndTouch } = useLeaving(panel, background);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.background {
  background-color: black;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100vh;
  z-index: 1;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0.15s, opacity 0.15s linear;
}

.applicationPanel {
  z-index: 2;
  position: fixed;
  top: calc(100vh - 150px);
  left: 0;
  right: 0;
  bottom: 0;

  height: calc(100vh - 52px);
  overflow-y: scroll;
  overflow-x: hidden;
  transition: top 0.2s ease-out;

  background-color: $grey70;
  border-radius: 20px 20px 0px 0px;

  .header {
    z-index: 3;
    position: fixed;
    width: 100%;
    padding-bottom: 20px;

    background-color: $grey70;
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
}
</style>
