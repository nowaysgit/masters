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
import {
  ExecutionStatus,
  Tags,
  Type,
  ServiceCategory,
} from "@/models/Application";

//FOR TEST
import { useStore } from "vuex";
import { Event, Send } from "@/network";
const store = useStore();
store.commit("updateServices", [
  {
    id: 1,
    name: "Дальний выезд мастера",
    price: 490,
    category: ServiceCategory.general,
  },
  {
    id: 2,
    name: "Установка или замена одного комплектующего",
    price: 2290,
    category: ServiceCategory.hardware,
  },
]);
store.dispatch("takeApplication", {
  id: 1,
  time: 1648490023,
  workTime: 0,
  type: Type.active,
  tags: [Tags.new, Tags.hardware],
  executionStatus: ExecutionStatus.wait,
  address: "ул. Байкальская, 250А",
  addressRefined: "п-д. №3, 6 этаж, кв. 356",
  coords: [52.253839, 104.336311],
  client: {
    id: 1,
    name: "Александр",
    phoneNumber: "79832431067",
  },
  price: 100,
  description:
    "Не работает видеокарта. Майнилась, в\u00A0один момент перестала определяться виндой. Не разбиралаcь.",
  services: [1, 2],
  accessories: [1, 2, 3],
});

Send(Event.getServices);
Send(Event.getApplication, 1);
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
