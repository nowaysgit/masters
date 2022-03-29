<template>
  <div ref="img">
    <img v-if="ico" :src="`assets/icons/${ico}`" />
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="0"
      height="0"
    >
      <defs>
        <filter :id="ico">
          <feColorMatrix
            color-interpolation-filters="sRGB"
            type="matrix"
            :values="`${r / 255} 0 0 0 0
                  0 ${g / 255} 0 0 0
                  0 0 ${b / 255} 0 0
                  0 0 0 ${a} 0 `"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { Props } from "@/models/UI/Props";

const props = defineProps({
  ico: Props.ico,
  color: Props.colorRgba,
  size: Props.text,
  marginBottom: Props.text,
});
const img = ref();
const [r, g, b, a] = props.color.slice(5, -1).split(", ").map(Number);

onMounted(() => {
  img.value.style.filter = `url(#${props.ico})`;
  if (props.ico != "") {
    if (props.size && props.size != "") img.value.style.height = props.size;
    if (props.size && props.size != "") img.value.style.width = props.size;
    if (props.marginBottom && props.marginBottom != "") {
      img.value.style.marginBottom = props.marginBottom;
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  filter: url(#color);
}
</style>
