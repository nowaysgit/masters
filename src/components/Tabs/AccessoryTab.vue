<template>
  <div ref="tab" :class="['tab', color]" @click="action">
    <img
      :src="
        image
          ? `./assets/images/accessories/${props.image}`
          : `./assets/images/default.png`
      "
      class="img"
    />
    <div class="c1">
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
          <p class="captionMedium">{{ status ? "Куплено" : "Добавьте чек" }}</p>
        </div>
        <p class="bodyMedium">{{ price.toLocaleString("ru-RU") + " ₽" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Color } from "@/models/UI/Enums";

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  status: {
    type: Boolean,
    required: false,
    default: false,
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  color: {
    type: String as PropType<Color>,
    required: false,
    default: Color.tabs,
  },
});

const imgUrl = props.image
  ? `./assets/images/accessories/${props.image}`
  : "./assets/images/default.png";
</script>

<style lang="scss" scoped>
@import "@/styles/fonts";
@import "@/styles/colorsClass";
.tab {
  padding: 10px 12px;
  border-radius: 16px;
  margin-bottom: 12px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img {
    padding-top: 2px;
    padding-left: 2px;
    padding-bottom: 2px;
    padding-right: 0;
    border-radius: 10px;
    width: 70px;
    height: 70px;
    margin-right: 12px;
  }

  .c1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    .c2 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 6px;
      .c3 {
        display: flex;
        padding-bottom: 2px;
        padding-top: 2px;
        width: 60%;
        .img-small {
          margin-right: 7px;
          height: 18px;
          width: 18px;
          padding-bottom: 2px;
        }
      }
    }
  }
}
.bodyRegular {
  @extend %bodyRegular;

  text-align: left;
  max-width: 62.133vw;
}
.bodyMedium {
  @extend %bodyMedium;

  width: 40%;
  text-align: right;
}
.captionMedium {
  @extend %captionMedium;

  width: 100%;
  padding-bottom: 2px;
  min-width: 96px;
  text-align: left;
}
</style>
