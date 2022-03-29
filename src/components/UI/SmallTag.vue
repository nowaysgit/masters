<template>
  <div ref="tag" class="tag">
    <IconColor
      v-if="ico"
      :ico="ico"
      :color="color"
      size="18px"
      marginBottom="0"
      style="margin-right: 4px"
    />{{ text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import IconColor from "@/components/UI/IconColor";
import { Props } from "@/models/UI/Props";

const props = defineProps({
  ico: Props.ico,
  color: Props.colorRgba,
  text: Props.text,
});

const tag = ref();
const [r, g, b] = props.color.slice(5, -1).split(", ").map(Number);

onMounted(() => {
  tag.value.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.06)`;
  tag.value.style.color = `rgba(${r}, ${g}, ${b}, 1)`;
});
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
.tag {
  @extend %smallMedium;
  display: flex;
  border-radius: 10px;
  padding: 6px 10px 6px 6px;

  --smooth-corners: 60;
  mask-image: paint(smooth-corners);
  -webkit-mask-image: paint(smooth-corners);
}
</style>
