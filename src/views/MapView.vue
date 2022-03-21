<template>
  <div class="map">
    <YandexMapMasters />
    <ApplicationPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YandexMapMasters from "@/components/YandexMapMasters.vue";
import ApplicationPanel from "@/components/ApplicationPanel.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    YandexMapMasters,
    ApplicationPanel,
  },
});
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
}
</style>
