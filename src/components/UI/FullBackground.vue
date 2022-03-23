<template>
  <div class="fullBackground"></div>
</template>

<style lang="scss" scoped>
.fullBackground {
  background-color: black;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  min-height: 100vh;
  z-index: 1;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0.15s, opacity 0.15s linear;
}
</style>
