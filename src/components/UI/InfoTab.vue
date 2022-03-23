<template>
  <div ref="tabDiv" :class="['tab', color]" @click="action">
    <p class="bodyRegular">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import useImageBackground from "@/hooks/ImageBackground";
import { Color } from "@/models/UI/Enums";

const props = defineProps({
  text: {
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
    default: Color.tabs,
  },
  action: {
    type: Function as PropType<(id: number) => void>,
    required: false,
  },
});
const tabDiv = ref();
useImageBackground(tabDiv, props.image);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.tab {
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 12px;

  .bodyRegular {
    @extend %bodyRegular;

    text-align: left;
  }
}
</style>
