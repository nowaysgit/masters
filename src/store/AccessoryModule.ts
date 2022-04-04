import { Module } from "vuex";
import { RootState } from "@/store";
import { Accessory } from "@/models/Application";

export interface AccessoryState {
  accessories: Accessory[];
}

export const AccessoryModule: Module<AccessoryState, RootState> = {
  state: {
    accessories: [],
  },
  mutations: {
    addAccessory(state: AccessoryState, accessory: Accessory) {
      const index = state.accessories.findIndex((x) => x.id === accessory.id);
      if (index !== -1) {
        state.accessories[index] = accessory;
        return;
      }
      if (state) state.accessories.push(accessory);
    },
  },
};
