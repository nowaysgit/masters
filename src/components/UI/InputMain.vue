<template>
  <div class="tab">
    <p v-if="modelValue" class="title">{{ title }}</p>
    <input
      :type="type"
      @input="(e) => emit('update:modelValue', e.target.value)"
      :value="modelValue"
      :placeholder="title"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { Props } from "@/models/UI/Props";

defineProps({
  title: Props.text,
  modelValue: Props.text,
  placeholder: Props.text,
  color: Props.colorClass,
  type: Props.text,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/Tabs";
.tab {
  @extend %tab;
  padding: 8px 16px;
  border-radius: 14px;
  height: 54px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    @extend %bodyMedium;

    max-height: 22px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    text-align: left;
    outline: 0;
    outline-offset: 0;
  }
}
.tab:active,
:hover,
:focus {
  outline: white solid 1px;
  outline-offset: -1px;
}
.title {
  @extend %caption;

  margin-bottom: 2px;
  width: 100%;
  opacity: 0.67;
  text-align: left;
}
</style>
