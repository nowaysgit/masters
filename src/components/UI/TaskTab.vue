<template>
  <div ref="tabDiv" :class="['tab', color, size]" @click="action">
    <p ref="nameDiv" class="name">{{ name }}</p>
    <p :class="line1.font">{{ line1.text }}</p>
    <p :class="line2.font">{{ line2.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue";
import useImageBackground from "@/hooks/ImageBackground";
import useIconBackground from "@/hooks/IconBackground";
import { Color, Font, Size } from "@/models/UI/Enums";
import { Line } from "@/models/UI/TaskTab";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
  line1: {
    type: Object as PropType<Line>,
    required: false,
    default() {
      return {
        font: Font.headlineSemiBold,
        text: "",
      };
    },
  },
  line2: {
    type: Object as PropType<Line>,
    required: false,
    default() {
      return {
        font: Font.headlineSemiBold,
        text: "",
      };
    },
  },
  ico: {
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
    default: Color.grey40,
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: Size.small,
  },
  action: {
    type: Function as PropType<(id: number) => void>,
    required: false,
  },
});
const tabDiv = ref();
const nameDiv = ref();
useImageBackground(tabDiv, props.image);
useIconBackground(nameDiv, props.ico);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.tab {
  min-height: 86px;
  padding: 10px 12px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  .name {
    @extend %nameTab;

    text-align: left;
    margin-bottom: 24px;
    align-self: flex-start;
    justify-self: flex-end;
  }
  .headlineSemiBold {
    @extend %headlineSemiBold;

    text-align: left;
    align-self: flex-start;
    justify-self: flex-end;
  }
  .headLineRegular {
    @extend %headLineRegular;

    text-align: left;
    align-self: flex-start;
    justify-self: flex-end;
  }
  .btnAction {
    @extend %btnAction;

    text-align: left;
    max-width: 82px;
    align-self: flex-start;
    justify-self: flex-end;
  }
}
.large {
  @media (max-width: 369px) {
    min-width: calc(100vw - 174px) !important;
  }
  @media (min-width: 370px) {
    min-width: 201px !important;
  }
  @media (min-width: 376px) {
    min-width: calc(100vw - 174px) !important;
  }
}
.small {
  @media (max-width: 340px) {
    min-width: calc(100vw - 254px) !important;
  }
  @media (min-width: 341px) {
    min-width: 82px !important;
  }
}
</style>
