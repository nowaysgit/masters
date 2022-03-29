<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <IconColor
      v-if="ico"
      :ico="ico"
      :color="icoColor"
      ref="textDiv"
      class="img"
    />
    <p class="bodyMedium" :style="`color: ${textColor}`">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import IconColor from "@/components/UI/IconColor";
import { Props } from "@/models/UI/Props";

defineProps({
  text: Props.text,
  price: Props.number,
  color: Props.colorClass,
  icoColor: Props.colorRgba,
  textColor: Props.colorRgba,
  ico: Props.ico,
  action: Props.action,
});
const textDiv = ref();
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
.img {
  margin-right: 8px;
}
.bodyMedium {
  @extend %bodyMedium;

  text-align: center;
}
</style>
