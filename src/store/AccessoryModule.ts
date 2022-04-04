import { Module } from "vuex";
import { RootState } from "@/store";
import { Accessory } from "@/models/Application";

export interface AccessoryState {
  accessories: Accessory[];
}

export const AccessoryModule: Module<AccessoryState, RootState> = {
  state: {
    accessories: [
      {
        id: 1,
        name: "Материнская плата GIGABYTE B660M DS3H DDR4 — 1\u00A0шт.",
        image: "mater.png",
        price: 16499,
        status: true,
      },
      {
        id: 2,
        name: "Процессор Intel i9-12900K — 1\u00A0шт.",
        image: "proz.png",
        price: 132999,
        status: false,
      },
      {
        id: 3,
        name: "Термопаста Arctic Cooling MX-4 (2019) — 1\u00A0шт.",
        image: "",
        price: 1169,
        status: false,
      },
    ],
  },
  mutations: {
    addAccessory(state: AccessoryState, accessory: Accessory) {
      if (state) state.accessories.push(accessory);
    },
  },
};
