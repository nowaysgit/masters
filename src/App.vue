<template>
  <YandexMap />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <TabBar />
</template>

<script setup lang="ts">
import TabBar from "@/components/TabBar.vue";
import YandexMap from "@/components/YandexMap.vue";

//FOR TEST
import { Event, Send } from "@/network";

Send(Event.getServices);
Send(Event.getUser);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
}
a {
  text-decoration: none;
}
input {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
}
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: black;
}
</style>
