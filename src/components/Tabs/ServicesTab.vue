<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <p class="bodyRegular">{{ text }}</p>
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
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.tabs,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.tab {
  padding: 16px;
  border-radius: 16px;
  display: flex;
  margin-bottom: 12px;
}
.bodyRegular {
  @extend %bodyRegular;

  text-align: left;
}
</style>
