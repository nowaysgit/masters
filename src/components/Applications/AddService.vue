<template>
  <BottomPopUp title="Услуги" @hide="$emit('hide')" :isShow="isShow">
    <MenuItem
      name="Пакеты услуг"
      ico="Services/packages.svg"
      icoColor="rgba(35, 184, 73, 1)"
      :count="
        services.filter(
          (x) =>
            application.services.includes(x.id) &&
            x.category === ServiceCategory.packages
        ).length
      "
      @click="showCategory(ServiceCategory.packages)"
    />
    <MenuItem
      name="Общие услуги"
      ico="Services/general.svg"
      icoColor="rgba(35, 184, 73, 1)"
      :count="
        services.filter(
          (x) =>
            application.services.includes(x.id) &&
            x.category === ServiceCategory.general
        ).length
      "
      @click="showCategory(ServiceCategory.general)"
    />
    <MenuItem
      name="Аппаратная часть"
      ico="Services/hardware.svg"
      icoColor="rgba(35, 184, 73, 1)"
      :count="
        services.filter(
          (x) =>
            application.services.includes(x.id) &&
            x.category === ServiceCategory.hardware
        ).length
      "
      @click="showCategory(ServiceCategory.hardware)"
    />
    <MenuItem
      name="Программная часть"
      ico="Services/software.svg"
      icoColor="rgba(35, 184, 73, 1)"
      :devider="false"
      :count="
        services.filter(
          (x) =>
            application.services.includes(x.id) &&
            x.category === ServiceCategory.software
        ).length
      "
      @click="showCategory(ServiceCategory.software)"
    />
  </BottomPopUp>
  <BottomPopUp
    :title="categoryText[categoryCurrent]"
    @hide="showCategory"
    :isShow="categoryShowed"
  >
    <div class="row" style="min-height: 200px">
      <div class="resized">
        <ServiceTab
          v-for="service in services.filter(
            (x) => x.category === categoryCurrent
          )"
          :key="service.id"
          :text="service.name"
          :price="service.price"
          :color="
            application.services.includes(service.id)
              ? ColorClass.green
              : ColorClass.tabs
          "
          @click="chooseItem(service.id)"
        />
      </div>
    </div>
    <div style="margin-top: 18px" />
  </BottomPopUp>
</template>

<script setup lang="ts">
import { Application, ServiceCategory } from "@/models/Application";
import BottomPopUp from "@/components/UI/BottomPopUp";
import MenuItem from "@/components/UI/MenuItem";
import ServiceTab from "@/components/Tabs/ServiceTab";
import { defineEmits, defineProps, ref, computed } from "vue";
import { ColorClass } from "@/models/UI/Enums";
import { useStore } from "vuex";
const categoryShowed = ref(false);
const categoryCurrent = ref();
const store = useStore();

const services: number[] = computed(() => store.state.service.services);
const application: Application = computed(
  () => store.state.application.current
);
defineEmits(["hide"]);
defineProps({
  isShow: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const chooseItem = (id: number) => {
  store.commit(
    "updateApplicationServices",
    application.value.services.includes(id)
      ? application.value.services.filter((x) => x !== id)
      : [...application.value.services, id]
  );
};

//crutch FIX IT
const showCategory = (category: ServiceCategory) => {
  categoryShowed.value = !categoryShowed.value;
  categoryCurrent.value = category;
};
const categoryText = [
  "Пакеты услуг",
  "Общие услуги",
  "Аппаратная часть",
  "Программная часть",
];
</script>

<style lang="scss" scoped>
.row {
  .resized {
    margin-left: 16px;
    margin-right: 16px;
    div {
      width: 100%;
      margin-bottom: 12px;
    }
  }
}
</style>
