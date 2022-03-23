<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <p class="bodyRegular">{{ text }}</p>
    <p class="bodyMedium">{{ price.toLocaleString("ru-RU") + " ₽" }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Color } from "@/models/UI/Enums";

defineProps({
  text: {
    type: String,
    required: false,
    default: "",
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.tabs,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
.tab {
  padding: 12px 16px;
  border-radius: 16px;
  margin-bottom: 12px;
  min-height: 44px;
  display: flex;
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
