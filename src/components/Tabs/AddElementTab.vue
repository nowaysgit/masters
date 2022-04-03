<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <IconColor
      v-if="ico"
      :ico="ico"
      :color="icoColor"
      ref="textDiv"
      class="img"
    />
    <div class="text">
      <p class="bodyRegular">{{ name }}</p>
      <p class="smallRegular">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconColor from "@/components/UI/IconColor";
import { Props } from "@/models/UI/Props";

defineProps({
  name: Props.text,
  text: Props.text,
  color: Props.colorClass,
  ico: Props.ico,
  icoColor: Props.colorRgba,
  action: Props.action,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  padding: 16px 20px 18px 23px;
  border-radius: 18px;
  display: flex;
  min-height: 96px;

  .img {
    margin-right: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
  }
}
.bodyRegular {
  @extend %bodyRegular;

  text-align: left;
  margin-bottom: 4px;
}
.smallRegular {
  @extend %smallRegular;

  text-align: left;
  opacity: 0.67;
}
</style>
