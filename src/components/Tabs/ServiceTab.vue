<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <p class="bodyRegular">{{ text }}</p>
    <p class="bodyMedium">{{ price.toLocaleString("ru-RU") + " ₽" }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Props } from "@/models/UI/Props";

defineProps({
  text: Props.text,
  price: Props.number,
  color: Props.colorClass,
  action: Props.action,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  border-radius: 18px;
  padding: 12px 16px;
  min-height: 68px;
  align-items: center;
  justify-content: space-between;
}
.bodyRegular {
  @extend %bodyRegular;

  text-align: left;
  max-width: 58.667vw;
}
.bodyMedium {
  @extend %bodyMedium;

  text-align: right;
}
</style>
