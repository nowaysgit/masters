<template>
  <div class="container">
    <v-select
      :clearable="false"
      class="style-chooser"
      :placeholder="placeholder"
      @option:selected="(val) => emit('update:modelValue', val.code)"
      :options="options"
      :value="modelValue"
    >
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.60104 9.39896C7.2691 9.06701 6.7309 9.06701 6.39896 9.39896C6.06701 9.73091 6.06701 10.2691 6.39896 10.601L7.60104 9.39896ZM12 15L11.399 15.601C11.7309 15.933 12.2691 15.933 12.601 15.601L12 15ZM17.601 10.601C17.933 10.2691 17.933 9.73091 17.601 9.39896C17.2691 9.06701 16.7309 9.06701 16.399 9.39896L17.601 10.601ZM6.39896 10.601L11.399 15.601L12.601 14.399L7.60104 9.39896L6.39896 10.601ZM12.601 15.601L17.601 10.601L16.399 9.39896L11.399 14.399L12.601 15.601Z"
              fill="rgba(255, 255, 255, 0.67)"
            />
          </svg>
        </span>
      </template>
      <template #selected-option-container="{ option }">
        <div else class="vs__selected">{{ option.label }}</div>
      </template>
      <template #search="{ attributes, events }">
        <input
          maxlength="2"
          class="vs__search"
          v-bind="attributes"
          v-on="events"
        />
      </template>
    </v-select>
    <p v-if="modelValue" class="title">{{ placeholder }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { Props } from "@/models/UI/Props";
defineProps({
  modelValue: Props.number,
  options: Props.options,
  placeholder: Props.text,
  color: Props.colorClass,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/vue-select.css";

.img {
  width: 22px;
  height: 22px;
}
.container {
  position: relative;
}
.title {
  @extend %caption;

  margin-bottom: 2px;
  width: 100%;
  opacity: 0.67;
  text-align: left;
  left: 16px;
  top: 10px;
  position: absolute;
}
.vs__selected {
  margin: 24px 8px 2px;
}
.vs__search {
  margin: 16px 2px 8px;
}
.style-chooser {
  @extend %bodyMedium;
  height: 54px;
  //custom
  --vs-background: rgba(255, 255, 255, 0.06);

  --vs-controls-color: rgba(255, 255, 255, 0.67);
  --vs-dropdown-max-height: 200px;

  --vs-dropdown-bg: rgba(56, 56, 58, 1);
  --vs-dropdown-color: white;
  --vs-dropdown-option-color: rgba(255, 255, 255, 0.67);

  --vs-selected-bg: rgba(255, 255, 255, 0.06);
  --vs-selected-color: white;

  --vs-dropdown-option--active-bg: rgba(255, 255, 255, 0.06);
  --vs-dropdown-option--active-color: white;
  --vs-actions-padding: 12px 8px 0 3px;

  /* Borders */
  --vs-border-color: var(--vs-colors--lightest);
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 14px;

  /* Font */
  --vs-font-size: 15px;
  --vs-line-height: 22px;

  /* Search Input */
  --vs-search-input-color: white;
  --vs-search-input-placeholder-color: rgba(255, 255, 255, 0.67);
}
</style>
