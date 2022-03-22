<template>
  <div ref="tabDiv" :class="['tab', color]" @click="action">
    <p ref="nameDiv" class="name">{{ name }}</p>
    <p class="headLine1">{{ line1 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import useImageBackground from "@/hooks/ImageBackground";
import { Color } from "@/models/UI/Enums";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
  line1: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.description,
  },
  action: {
    type: Function as PropType<(id: number) => void>,
    required: false,
  },
});
const tabDiv = ref();
const nameDiv = ref();
useImageBackground(tabDiv, props.image);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.tab {
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 12px;

  .name {
    @extend %title2;

    text-align: left;
    margin-bottom: 12px;
  }
  .headLine1 {
    @extend %bodyText;

    text-align: left;
    opacity: 0.5;
  }
}
</style>
