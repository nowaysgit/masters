<template>
  <div ref="tab" :class="['tab', color, size]" @click="action">
    <p ref="nameDiv" class="captionRegular">{{ name }}</p>
    <p :class="line1.font">{{ line1.text }}</p>
    <p :class="line2.font">{{ line2.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import useIconBackground from "@/hooks/IconBackground";
import useImageBackground from "@/hooks/ImageBackground";
import { Props } from "@/models/UI/TaskTab";

const props = defineProps(Props);
const nameDiv = ref();
const tab = ref();
if (props.image) useImageBackground(tab, props.image);
if (props.ico) useIconBackground(nameDiv, props.ico);
</script>

<style lang="scss" scoped>
@import "@/styles/fontsClass";
@import "@/styles/colorsClass";
.tab {
  min-height: 86px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
}
.large {
  @media (max-width: 369px) {
    min-width: calc(100vw - 174px) !important;
  }
  @media (min-width: 370px) {
    min-width: 201px !important;
  }
  @media (min-width: 376px) {
    min-width: calc(100vw - 174px) !important;
  }
}
.small {
  @media (max-width: 340px) {
    min-width: calc(100vw - 254px) !important;
  }
  @media (min-width: 341px) {
    min-width: 82px !important;
  }
}
</style>
