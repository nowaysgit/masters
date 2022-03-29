<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <div v-if="name || ico" ref="nameDiv" class="smallRegular">
      {{ name }}
      <div v-if="name && ico" ref="nameIcoDiv"></div>
    </div>
    <p v-if="line1.font" :class="line1.font">{{ line1.text }}</p>
    <p v-if="line1.font" :class="line2.font">{{ line2.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import useImageBackground from "@/hooks/ImageBackground";
import { Props } from "@/models/UI/Props";
import useImageIcon from "@/hooks/ImageIcon";

const props = defineProps({
  name: Props.text,
  line1: Props.line,
  line2: Props.line,
  ico: Props.ico,
  image: Props.image,
  color: Props.colorClass,
  action: Props.action,
});
const nameDiv = ref();
const tab = ref();
const nameIcoDiv = ref();
if (props.image) useImageBackground(tab, props.image);
if (props.ico && !props.name) useImageIcon(nameDiv, props.ico, "24px", "16px");
if (props.ico && props.name) useImageIcon(nameIcoDiv, props.ico, "16px");
</script>

<style lang="scss" scoped>
@import "@/styles/fontsClass";
@import "@/styles/colorsClass";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  min-height: 112px;
  padding: 12px 14px;
  flex-direction: column;

  @media (max-width: 364px) {
    min-width: calc(100vw - 144px) !important;
  }
  @media (min-width: 365px) {
    min-width: 219px !important;
  }
  @media (min-width: 376px) {
    min-width: calc(100vw - 156px) !important;
  }
}
.smallRegular {
  @extend %smallRegular;
  margin-bottom: 24px;
  display: flex;
}
</style>
