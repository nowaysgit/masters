<template>
  <div class="container">
    <section class="row">
      <div class="resized">
        <TimeTab
          name="Время"
          :time="application.time"
          :executionStatus="application.executionStatus"
        />
        <TaskTab
          name="Адрес"
          ico="Tab/arrow-right.svg"
          :line1="{
            font: Font.bodySemiBold,
            text: application.address,
          }"
          :line2="{
            font: Font.bodySemiBold,
            text:
              application.executionStatus == ExecutionStatus.wait
                ? `${map.distance} • ${map.duration}`
                : application.addressRefined,
          }"
          :color="ColorClass.tabs"
          image="map.png"
        />
      </div>
    </section>
    <section
      v-if="application.executionStatus !== ExecutionStatus.wait"
      class="row"
    >
      <div class="resized">
        <TaskTab
          name="Клиент"
          :line1="{
            font: Font.title2,
            text: application.client.name,
          }"
          :line2="{
            font: Font.bodyRegular,
            text: numberFormat(application.client.phoneNumber),
          }"
          :color="
            application.executionStatus == ExecutionStatus.arrived
              ? ColorClass.green
              : ColorClass.tabs
          "
        />
        <ButtonTab
          ico="Tab/phone.svg"
          :line1="{ font: Font.bodyMedium, text: 'Позвонить клиенту' }"
          :color="ColorClass.tabs"
        />
      </div>
    </section>
    <section
      v-if="application.executionStatus !== ExecutionStatus.started"
      class="row"
    >
      <div class="resized">
        <InfoTab :text="application.description" :tags="application.tags" />
      </div>
    </section>
  </div>
  <div
    v-if="application.executionStatus === ExecutionStatus.started"
    class="container"
    style="margin-bottom: 60px"
  >
    <section class="row">
      <div class="resized column">
        <DropdownMenu name="Описание">
          <InfoTab :text="application.description" :tags="application.tags" />
        </DropdownMenu>
        <DropdownMenu name="Услуги">
          <ServiceTab
            v-for="service in services.filter((x) =>
              application.services.includes(x.id)
            )"
            :key="service.id"
            :text="service.name"
            :price="service.price"
          />
          <ButtonMain
            v-if="application.services.length > 0"
            text="Добавить еще"
            icoColor="rgba(35, 184, 73, 1)"
            ico="Button/add-services.svg"
            :color="ColorClass.bottomSheet"
            :action="addServices"
            class="button"
          />
          <AddElementTab
            v-else
            name="Добавить услугу"
            text="Добавьте все предоставленные вами клиенту услуги"
            icoColor="rgba(35, 184, 73, 1)"
            ico="Button/add-services.svg"
            :color="ColorClass.tabs"
            :action="addServices"
            class="button"
          />
        </DropdownMenu>
        <DropdownMenu name="Комплектующие">
          <AccessoryTab
            v-for="accessory in application.accessories"
            :key="accessory.id"
            :text="accessory.name"
            :price="accessory.price"
            :image="accessory.image"
            :status="accessory.status"
          />
          <ButtonMain
            v-if="application.accessories.length > 0"
            text="Добавить еще"
            icoColor="rgba(35, 184, 73, 1)"
            ico="Button/add-accessories.svg"
            :color="ColorClass.bottomSheet"
            :action="addAccessories"
            class="button"
          />
          <AddElementTab
            v-else
            name="Добавить комплектующее"
            text="Добавьте все необходимые комплектующие"
            icoColor="rgba(35, 184, 73, 1)"
            ico="Button/add-accessories.svg"
            :color="ColorClass.tabs"
            :action="addAccessories"
            class="button"
          />
        </DropdownMenu>
      </div>
    </section>
  </div>
  <div class="container buttons">
    <div
      v-if="application.executionStatus === ExecutionStatus.wait"
      class="row"
    >
      <div class="resized">
        <ButtonMain text="Показать на карте" />
      </div>
    </div>
    <div
      v-if="application.executionStatus === ExecutionStatus.wait"
      class="row"
    >
      <div class="resized">
        <ButtonMain
          text="Отказаться от заявки"
          :icoColor="ColorRgba.red"
          :action="() => store.dispatch('canselApplication')"
        />
      </div>
    </div>
    <div
      v-if="application.executionStatus === ExecutionStatus.lateness"
      class="row"
    >
      <div class="resized">
        <ButtonMain text="Клиент не отвечает" />
      </div>
    </div>
    <div
      v-if="
        application.executionStatus === ExecutionStatus.arrived ||
        application.executionStatus === ExecutionStatus.lateness
      "
      class="row"
    >
      <div class="resized">
        <ButtonMain
          text="Начать работу"
          :color="ColorClass.blue"
          :action="() => store.dispatch('startApplication')"
        />
      </div>
    </div>
    <div
      v-if="application.executionStatus === ExecutionStatus.started"
      class="row"
    >
      <div class="resized">
        <ButtonMain
          text="Завершение заявки"
          :color="ColorClass.blue"
          :action="() => store.dispatch('completeApplication')"
        />
      </div>
    </div>
  </div>
  <AddService @hide="addServices" :isShow="servicesShowed" />
  <AddAccessories @hide="addAccessories" :isShow="accessoriesShowed" />
</template>

<script setup lang="ts">
import TaskTab from "@/components/Tabs/TaskTab";
import TimeTab from "@/components/Tabs/TimeTab";
import InfoTab from "@/components/Tabs/InfoTab";
import ButtonTab from "@/components/Tabs/ButtonTab";
import ServiceTab from "@/components/Tabs/ServiceTab";
import AccessoryTab from "@/components/Tabs/AccessoryTab";
import AddElementTab from "@/components/Tabs/AddElementTab";
import ButtonMain from "@/components/UI/ButtonMain";
import DropdownMenu from "@/components/UI/DropdownMenu";
import AddService from "@/components/Applications/AddService";
import AddAccessories from "@/components/Applications/AddAccessories";
import { numberFormat } from "@/units";
import { ColorClass, Font, ColorRgba } from "@/models/UI/Enums";
import { Application, ExecutionStatus } from "@/models/Application";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const servicesShowed = ref(false);
const accessoriesShowed = ref(false);
const map: Map = computed(() => store.state.map);
const services: number[] = computed(() => store.state.serviceDate.services);
const application: Application = computed(
  () => store.state.application.current
);

const addServices = () => {
  servicesShowed.value = !servicesShowed.value;
};
const addAccessories = () => {
  accessoriesShowed.value = !accessoriesShowed.value;
};
</script>

<style lang="scss" scoped>
.buttons {
  bottom: 0;
  margin-top: auto;
  .row {
    .resized {
      button {
        width: 100%;
        margin-bottom: 12px;
      }
    }
  }
}
button {
  width: 100%;
}
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
