<template>
  <div @click="action" class="button">
    <div class="content">
      <div class="info">
        <IconColor :ico="ico" :color="icoColor" class="img" size="28px" />
        <p class="title3">{{ name }}</p>
      </div>
      <IconColor
        ico="Button/arrow.svg"
        color="rgba(255, 255, 255, 1)"
        size="22px"
      />
    </div>
    <hr class="devider" />
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
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.button {
  margin-left: 20px;
  padding-top: 4px;
  margin-right: 15px;
  .content {
    display: flex;
    justify-content: space-between;

    .info {
      display: flex;
      .title3 {
        @extend %title3;
      }
      .img {
        margin-right: 16px;
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
