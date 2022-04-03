<template>
  <button :class="['tab', color]" @click="action">
    <IconColor
      v-if="ico"
      :ico="ico"
      :color="icoColor"
      :style="text ? 'margin-right: 8px' : 'padding-top: 4px'"
    />
    <p class="bodyMedium" :style="`color: ${textColor}`">{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconColor from "@/components/UI/IconColor";
import { Props } from "@/models/UI/Props";

defineProps({
  text: Props.text,
  color: Props.colorClass,
  icoColor: Props.colorRgba,
  textColor: Props.colorRgba,
  ico: Props.ico,
  action: Props.action,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
.tab {
  padding: 16px;
  border-radius: 14px;
  min-height: 22px;
  min-width: calc(50% - 38px);
  display: flex;
  align-items: center;
  justify-content: center;

  --smooth-corners: 60;
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
}
.tab:disabled {
  opacity: 0.32;
}
.img {
  margin-right: 8px;
}
.bodyMedium {
  @extend %bodyMedium;

  text-align: center;
}
</style>
