import { Module } from "vuex";
import { RootState } from "@/store";
import { Service, ServiceCategory } from "@/models/Application";

export interface ServiceState {
  services: Service[];
}

export const ServiceModule: Module<ServiceState, RootState> = {
  state: {
    services: [
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
    ],
  },
  mutations: {
    updateServices(state: ServiceState, services: Service[]) {
      state.services = services;
    },
  },
};
