<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <div v-if="tags.length > 0" class="tags">
      <SmallTag
        v-for="tag in tags"
        :key="tag"
        :text="tagsInfo[tag].name"
        :ico="tagsInfo[tag].ico"
        :color="tagsInfo[tag].color"
      />
    </div>
    <p class="bodyRegular">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Props } from "@/models/UI/Props";
import SmallTag from "@/components/UI/SmallTag";
import { Tags } from "@/models/Application";

defineProps({
  text: Props.text,
  color: Props.colorClass,
  tags: {
    type: Array as PropType<Array<Tags>>,
    required: false,
    default() {
      return [Tags.new];
    },
  },
});

const tagsInfo = [
  {
    name: "Новая заявка",
    ico: "Tab/flash.svg",
    color: "rgba(35, 184, 73, 1)",
  },
  {
    name: "Гарантия",
    ico: "Tab/flash.svg",
    color: "rgba(35, 184, 73, 1)",
  },
  {
    name: "Повтор",
    ico: "Tab/flash.svg",
    color: "rgba(35, 184, 73, 1)",
  },
  {
    name: "Аппаратная часть",
    ico: "Tab/gear.svg",
    color: "rgba(255, 172, 43, 1)",
  },
  {
    name: "Программная часть",
    ico: "Tab/gear.svg",
    color: "rgba(255, 172, 43, 1)",
  },
];
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  border-radius: 18px;
  padding: 14px 14px 18px 14px;
  display: flex;
  flex-direction: column;

  .tags {
    display: flex;
    margin-bottom: 10px;
    div {
      margin-right: 8px;
    }
  }
}
.bodyRegular {
  @extend %bodyRegular;
  padding: 0 2px;

  text-align: left;
}
</style>
