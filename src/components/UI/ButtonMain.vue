<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <p v-if="ico" ref="textDiv" class="img" />
    <p class="bodyMedium">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";
import { Color } from "@/models/UI/Enums";
import useIconBackground from "@/hooks/IconBackground";

const props = defineProps({
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
  ico: {
    type: String,
    required: false,
    default: "",
  },
});

const textDiv = ref();
if (props.ico) useIconBackground(textDiv, props.ico, "22px", "0");
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
}
.img {
  margin-right: 8px;
}
.bodyMedium {
  @extend %bodyMedium;

  text-align: center;
}
</style>
