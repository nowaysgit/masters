<template>
  <div class="map">
    <YandexMapMasters />
    <BottomSheet title="Активная заявка">
      <ActiveApplication></ActiveApplication>
    </BottomSheet>
  </div>
</template>

<script setup lang="ts">
import YandexMapMasters from "@/components/YandexMapMasters.vue";
import BottomSheet from "@/components/BottomSheet.vue";
import ActiveApplication from "@/components/ActiveApplication.vue";
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
}
</style>
