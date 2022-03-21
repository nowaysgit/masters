<template>
  <yandex-map
    @map-was-initialized="ready"
    ref="map"
    :coords="coords"
    :settings="settings"
    :detailed-controls="controls"
  ></yandex-map>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { yandexMap } from "vue-yandex-maps";

export default defineComponent({
  name: "YandexMapMasters",
  components: { yandexMap },
  props: {
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
  },
  setup() {
    const settings = {
      apiKey: "9864223d-351b-44d1-a371-55aa57688887",
      lang: "ru_RU",
      coordorder: "latlong",
      enterprise: false,
      version: "2.1",
    };
    return {
      settings,
    };
  },
  methods: {
    ready() {
      const map = this.$refs.map;
      console.log(map);
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";

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
