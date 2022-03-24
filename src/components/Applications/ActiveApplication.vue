<template>
  <div class="container">
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Время"
          :line1="{ font: Font.bodySemiBold, text: 'Сегодня,' }"
          :line2="{
            font: Font.bodySemiBold,
            text: `в&nbsp;${timeFormat(currentApplication.time)}`,
          }"
          :color="Color.tabs"
          :size="Size.small"
        />
        <TaskTab
          name="Адрес"
          :line1="{
            font: Font.bodySemiBold,
            text: currentApplication.address,
          }"
          :line2="{
            font: Font.bodySemiBold,
            text: `${distance} • ${duration}`,
          }"
          :color="Color.tabs"
          :size="Size.large"
          image="map.png"
        />
      </div>
    </section>
    <section class="row">
      <div class="resized">
        <TaskTab
          name="Клиент"
          :line1="{
            font: Font.bodySemiBold,
            text: currentApplication.client.name,
          }"
          :line2="{
            font: Font.bodyRegular,
            text: numberFormat(currentApplication.client.phoneNumber),
          }"
          :color="Color.tabs"
          :size="Size.large"
        />
        <TaskTab
          ico="Tab/phone.svg"
          :line2="{ font: Font.bodyMedium, text: 'Позвонить клиенту' }"
          :color="Color.tabs"
          :size="Size.small"
        />
      </div>
    </section>
  </div>
  <div class="container">
    <section class="row">
      <div class="resized column">
        <DropdownMenu name="Описание">
          <InfoTab :text="currentApplication.description" />
        </DropdownMenu>
        <DropdownMenu name="Услуги">
          <ServiceTab
            v-for="service in currentApplication.services"
            :key="service.id"
            :text="service.name"
            :price="service.price"
          />
          <div class="buttonContainer">
            <ButtonMain text="Редактировать" />
            <ButtonMain text="Добавить" ico="Button/add.svg" />
          </div>
        </DropdownMenu>
        <DropdownMenu name="Комплектующие">
          <AccessoryTab
            v-for="accessory in currentApplication.accessories"
            :key="accessory.id"
            :text="accessory.name"
            :price="accessory.price"
            :image="accessory.image"
            :status="accessory.status"
          />
          <div class="buttonContainer">
            <ButtonMain text="Редактировать" />
            <ButtonMain text="Добавить" ico="Button/add.svg" />
          </div>
        </DropdownMenu>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TaskTab from "@/components/Tabs/TaskTab.vue";
import InfoTab from "@/components/Tabs/InfoTab.vue";
import ServiceTab from "@/components/Tabs/ServiceTab.vue";
import AccessoryTab from "@/components/Tabs/AccessoryTab.vue";
import ButtonMain from "@/components/UI/ButtonMain.vue";
import DropdownMenu from "@/components/UI/DropdownMenu.vue";
import { numberFormat, timeFormat } from "@/units";
import { Color, Size, Font } from "@/models/UI/Enums";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentApplication = computed(() => store.state.currentApplication);
const distance = computed(() => store.state.distance);
const duration = computed(() => store.state.duration);
</script>

<style lang="scss" scoped>
.container {
  @media (max-width: 369px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 370px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  .resized {
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 369px) {
      width: calc(100vw - 32px);
      justify-content: space-between;
    }

    @media (min-width: 370px) {
      width: 100%;
      justify-content: space-between;
    }
  }
  .column {
    flex-direction: column;
  }
  .row {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>
