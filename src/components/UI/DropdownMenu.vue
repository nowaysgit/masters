<template>
  <div class="dropdown">
    <div @click="show" class="header">
      <span class="title1">{{ name }}</span>
      <img :src="ico" class="img" />
    </div>
    <div
      :style="{ display: isShow ? 'block' : 'none' }"
      class="dropdown-content"
    >
      <slot></slot>
      <hr class="devider" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
const isShow = ref(false);
defineProps({
  name: {
    type: String,
    required: false,
    default: "DropdownMenu",
  },
});

const ico = computed(() => {
  return `../assets/icons/${isShow.value ? "arrowon.svg" : "arrowoff.svg"}`;
});
const show = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";
.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .header {
    width: 100%;
    display: flex;

    .title1 {
      @extend %title1;
      text-align: left;
      padding-left: 4px;
    }
    .img {
      padding-left: 2px;
      opacity: 0.32;
    }
  }

  .dropdown-content {
    width: 100%;
    padding-top: 20px;

    .devider {
      margin-top: 24px;
      color: $deviders;
      background-color: $deviders;
      height: 0.5px;
      border: none;
      margin-left: calc((100vw - 100%) / 2 * -1);
      width: 100vw;
    }
  }
}
</style>
