<template>
  <div class="sheet">
    <slot name="header"></slot>
    <div style="margin-bottom: 70px"></div>
    <slot name="body"></slot>
    <div style="margin-top: 230px"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colors";

.sheet {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: top 0.2s ease-out;

  background-color: $bottomSheet;
  border-radius: 20px 20px 0px 0px;
}
</style>
