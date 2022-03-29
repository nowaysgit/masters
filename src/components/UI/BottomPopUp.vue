<template>
  <teleport to="body">
    <FullBackground
      ref="background"
      style="z-index: 3"
      @click="$emit('hide')"
    />
    <BaseSheet ref="sheet" class="sheet">
      <template v-slot:header>
        <div @click="$emit('hide')" class="header">
          <div class="line"></div>
          <h1 class="title">{{ title }}</h1>
        </div>
      </template>
      <template v-slot:body>
        <slot></slot>
      </template>
    </BaseSheet>
  </teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, watch } from "vue";
import BaseSheet from "@/components/UI/BaseSheet";
import FullBackground from "@/components/UI/FullBackground";

defineEmits(["hide"]);
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "BottomSheetPopUp",
  },
  isShow: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const sheet = ref();
const background = ref();

//crutch FIX IT
watch(
  () => props.isShow,
  (current) => {
    if (!current) {
      sheet.value.$el.style.top = "calc(100vh)";
      sheet.value.$el.style.visibility = "hidden";
      background.value.$el.style.visibility = "hidden";
      background.value.$el.style.opacity = "0";
    } else {
      sheet.value.$el.style.top = `calc(100vh - ${
        sheet.value.$el.offsetHeight - 18
      }px)`;
      sheet.value.$el.style.visibility = "visible";
      background.value.$el.style.visibility = "visible";
      background.value.$el.style.opacity = "0.6";
    }
  }
);
onMounted(() => {
  sheet.value.$el.style.visibility = "hidden";
  background.value.$el.style.visibility = "hidden";
  background.value.$el.style.opacity = "0";
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.sheet {
  color: white;
  top: calc(100vh - 150px);
  bottom: auto;
  height: fit-content;
  z-index: 3;
  background-color: $bottomSheet2;
}
.header {
  z-index: 4;
  position: fixed;
  width: 100%;
  padding-bottom: 20px;

  background-color: $bottomSheet2;
  border-radius: 20px 20px 0px 0px;

  .line {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    width: 32px;
    height: 5px;
    background-color: white;
    margin-left: auto;
    margin-right: auto;

    opacity: 0.08;

    border-radius: 2.5px;
    -webkit-border-radius: 20.5px;
    -moz-border-radius: 2.5px;
  }
  .title {
    @extend %title1;
    text-align: left;
    padding: 0 20px;
  }
}
</style>
