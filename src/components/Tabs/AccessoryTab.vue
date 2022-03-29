<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <p class="bodyRegular">{{ text }}</p>
    <div class="c2">
      <div class="c3">
        <img
          :src="
            status
              ? `./assets/icons/Tab/check-small.svg`
              : `./assets/icons/Tab/warning-small.svg`
          "
          class="img-small"
        />
        <p
          :style="`color: ${status ? 'rgba(35, 184, 73)' : 'rgba(255,172,43)'}`"
          class="bodyMedium1"
        >
          {{ status ? "Куплено" : "Добавьте фото чека" }}
        </p>
      </div>
      <p class="bodyMedium">{{ price.toLocaleString("ru-RU") + " ₽" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Props } from "@/models/UI/Props";

defineProps({
  text: Props.text,
  image: Props.image,
  status: Props.boolean,
  price: Props.number,
  color: Props.colorClass,
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  padding: 12px 16px;
  border-radius: 18px;
  min-height: 98px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  .c2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 6px;

    .c3 {
      padding-left: 2px;
      display: flex;
      width: 60%;

      .img-small {
        padding-top: 1px;
        margin-right: 4px;
        height: 18px;
        width: 18px;
      }
    }
  }
}
.bodyRegular {
  @extend %bodyRegular;

  text-align: left;
  width: 100%;
}
.bodyMedium1 {
  @extend %bodyMedium;

  text-align: left;
  width: 100%;
}
.bodyMedium {
  @extend %bodyMedium;

  width: 40%;
  text-align: right;
}
</style>
