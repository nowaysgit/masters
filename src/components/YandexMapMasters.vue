<template>
  <div class="map">
    <yandex-map
      @map-was-initialized="ready"
      ref="map"
      :coords="coords"
      :settings="settings"
      :detailed-controls="controls"
    ></yandex-map>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from "vue";
import { yandexMap } from "vue-yandex-maps";
const map = ref();

defineProps({
  controls: {
    type: Object,
    default() {
      return {
        trafficControl: { float: "right" },
        geolocationControl: { float: "right" },
        zoomControl: { float: "right", position: { right: 10, top: 200 } },
        typeSelector: { float: "right" },
        fullscreenControl: { float: "right", position: { top: -100 } },
      };
    },
  },
  coords: {
    type: Array as PropType<Array<number>>,
    default() {
      return [52.289588, 104.280606];
    },
  },
});
const settings = ref({
  apiKey: process.env.YANDEX_APIKEY,
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
});

const ready = () => {
  console.log(map);
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
}
.ymap-container {
  width: 100%;
  height: 100%;
  filter: invert(100) hue-rotate(180deg) grayscale(100%) !important;
  -ms-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -webkit-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -moz-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -o-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
}
</style>
