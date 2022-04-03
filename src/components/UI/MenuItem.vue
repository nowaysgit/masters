<template>
  <div @click="action" class="button">
    <div class="content">
      <div class="info">
        <IconColor :ico="ico" :color="icoColor" class="img" size="28px" />
        <p class="title3">{{ name }}</p>
        <div v-if="count > 0" class="smallSemiBold">{{ count }}</div>
      </div>
      <IconColor
        ico="Button/arrow.svg"
        color="rgba(255, 255, 255, 1)"
        size="22px"
      />
    </div>
    <hr v-if="devider" class="devider" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconColor from "@/components/UI/IconColor";
import { Props } from "@/models/UI/Props";

defineProps({
  name: Props.text,
  ico: Props.ico,
  icoColor: Props.colorRgba,
  action: Props.action,
  devider: {
    type: Boolean,
    required: false,
    default: true,
  },
  count: Props.number,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.button {
  margin-left: 20px;
  margin-right: 15px;
  margin-top: 12px;
  .content {
    display: flex;
    justify-content: space-between;

    .info {
      display: flex;
      .img {
        margin-right: 16px;
      }
      .title3 {
        @extend %title3;
        margin-right: 8px;
      }
      .smallSemiBold {
        @extend %smallSemiBold;
        text-align: center;
        padding-top: 1px;

        background-color: rgba(35, 184, 73, 1);
        border-radius: 100%;
        width: 22px;
        height: 21px;
      }
    }
  }
  .devider {
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.16);
    background-color: rgba(255, 255, 255, 0.16);
    height: 0.5px;
    border: none;
    margin-left: 44px;
  }
}
</style>
