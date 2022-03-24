import { createStore } from "vuex";
import { User } from "@/models/User";
import { Application } from "@/models/Application";

export enum Status {
  wait,
  active,
  express,
}

export interface State {
  multiRouteModel: any;
  user: User | null;
  status: Status;
  distance: string;
  duration: string;
  currentApplication: Application | null;
  availableApplication: Application[];
}

export const store = createStore<State>({
  state: {
    multiRouteModel: null,
    user: null,
    status: Status.active,
    distance: "",
    duration: "",
    currentApplication: {
      id: 1,
      time: 1648143840,
      address: "ул. Байкальская, 250А",
      coords: [52.253839, 104.336311],
      client: {
        id: 1,
        name: "Александр",
        phoneNumber: "79832431067",
      },
      price: 100,
      description:
        "Не работает видеокарта. Майнилась, в\u00A0один момент перестала определяться виндой. Не разбиралаcь.",
      services: [
        {
          id: 1,
          name: "Дальний выезд мастера",
          price: 490,
        },
        {
          id: 2,
          name: "Установка или замена одного комплектующего",
          price: 2290,
        },
      ],
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
    availableApplication: [],
  },
  getters: {},
  mutations: {
    updateRouteModel(state, multiRouteModel) {
      state.multiRouteModel = multiRouteModel;
    },
  },
  actions: {
    //updateRoute([52.273958, 104.356896], [52.253839, 104.336311])
    //updateRoute("ул. Байкальская, 250А", [52.253839, 104.336311])
    updateRoute(x, y) {
      store.state.multiRouteModel.setReferencePoints([x, y]);
    },
  },
  modules: {},
});
