<template>
  <div ref="tab" class="tab" @click="action">
    <IconColor
      v-if="ico"
      :ico="ico"
      color="rgba(35, 184, 73, 1)"
      size="24px"
      marginBottom="16px"
      style="padding-top: 2px"
    />
    <p v-if="line1.font" :class="line1.font">{{ line1.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Props } from "@/models/UI/Props";
import IconColor from "@/components/UI/IconColor";

defineProps({
  line1: Props.line1,
  ico: Props.ico,
  icoColor: Props.colorRgba,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fontsClass";
@import "@/styles/colors";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  min-height: 112px;
  padding: 12px 14px;
  flex-direction: column;
  color: $green;

  @media (max-width: 340px) {
    min-width: calc(100vw - 244px) !important;
  }
  @media (min-width: 341px) {
    min-width: 112px !important;
  }

  .smallRegular {
    @extend %smallRegular;
    padding-top: 2px;

    margin-bottom: 16px;
    width: 24px;
    height: 24px;
    color: $green;
    filter: url(#testStroke);
  }
}
</style>
