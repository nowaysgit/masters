<template>
  <div id="map" class="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const ymaps = window.ymaps;

onMounted(() => ymaps.ready(ready));

function ready() {
  const multiRouteModel = new ymaps.multiRouter.MultiRouteModel(
      [[52.273958, 104.356896], "ул. Байкальская, 250А"],
      { boundsAutoApply: true }
    ),
    routeTypeSelector = new ymaps.control.ListBox({
      data: {
        content: "Как добраться",
      },
      items: [
        new ymaps.control.ListBoxItem({
          data: { content: "Авто" },
          state: { selected: true },
        }),
        new ymaps.control.ListBoxItem({
          data: { content: "Общественным транспортом" },
        }),
        new ymaps.control.ListBoxItem({ data: { content: "Пешком" } }),
      ],
      options: {
        itemSelectOnClick: false,
      },
    }),
    autoRouteItem = routeTypeSelector.get(0),
    masstransitRouteItem = routeTypeSelector.get(1),
    pedestrianRouteItem = routeTypeSelector.get(2);

  autoRouteItem.events.add("click", function (e) {
    changeRoutingMode("auto", e.get("target"));
  });
  masstransitRouteItem.events.add("click", function (e) {
    changeRoutingMode("masstransit", e.get("target"));
  });
  pedestrianRouteItem.events.add("click", function (e) {
    changeRoutingMode("pedestrian", e.get("target"));
  });

  const myMap = new ymaps.Map(
      "map",
      {
        center: [52.289588, 104.280606],
        zoom: 7,
        controls: [
          "trafficControl",
          "geolocationControl",
          "zoomControl",
          "typeSelector",
          "fullscreenControl",
          routeTypeSelector,
        ],
      },
      {
        buttonMaxWidth: 300,
      }
    ),
    multiRoute = new ymaps.multiRouter.MultiRoute(multiRouteModel, {
      wayPointDraggable: false,
      boundsAutoApply: true,
    });

  myMap.geoObjects.add(multiRoute);

  function changeRoutingMode(routingMode, targetItem) {
    multiRouteModel.setParams({ routingMode: routingMode }, true);

    autoRouteItem.deselect();
    masstransitRouteItem.deselect();
    pedestrianRouteItem.deselect();

    targetItem.select();
    routeTypeSelector.collapse();
  }

  const updateDistance = () => {
    const routes = multiRouteModel.getRoutes();
    let distance = routes[0].properties.get("distance").value;
    let text = routes[0].properties.get("distance").text;
    let duration = routes[0].properties.get("duration").text;
    for (let i = 0, l = routes.length; i < l; i++) {
      if (routes[i].properties.get("distance").value < distance) {
        distance = routes[i].properties.get("distance").value;
        text = routes[i].properties.get("distance").text;
        duration = routes[i].properties.get("duration").text;
      }
    }
    store.state.distance = text;
    store.state.duration = duration;
  };

  multiRouteModel.events.add(
    ["requestsuccess", "requestfail", "requestsend"],
    (e) => {
      if (e.originalEvent.type == "requestsuccess") {
        updateDistance();
      }
    }
  );

  store.commit("updateRouteModel", multiRouteModel);
}
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 97vh;
  filter: invert(100) hue-rotate(180deg) grayscale(100%) !important;
  -ms-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -webkit-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -moz-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
  -o-filter: invert(100%) hue-rotate(180deg) grayscale(100%) !important;
}
</style>
