import { Module } from "vuex";
import { Application, ExecutionStatus } from "@/models/Application";
import { RootState } from "@/store/index";

export interface ApplicationState {
  timer: number | null;
  time: number;
  current: Application | null;
}
export const ApplicationModule: Module<ApplicationState, RootState> = {
  state: {
    timer: null,
    time: 0,
    current: null,
  },
  mutations: {
    updateCurrent(state: ApplicationState, application: Application) {
      state.current = application;
    },
  },
  actions: {
    takeApplication(store, application) {
      store.commit("updateCurrent", application);
      store.dispatch("startTimer");
    },
    startApplication(store) {
      if (store.state.current?.executionStatus != null)
        store.state.current.executionStatus = ExecutionStatus.started;
      store.state.time = 0;
    },
    canselApplication(store) {
      if (store.state.timer) {
        clearInterval(store.state.timer);
      }
      if (store.state.current?.executionStatus != null)
        store.state.current.executionStatus = ExecutionStatus.wait;
      store.commit("updateCurrent", null);
    },
    completeApplication(store) {
      if (store.state.timer) {
        clearInterval(store.state.timer);
      }
      if (store.state.current?.executionStatus != null)
        store.state.current.executionStatus = ExecutionStatus.complete;
      store.commit("updateCurrent", null);
    },
    startTimer(store) {
      if (store.state.timer) {
        clearInterval(store.state.timer);
      }
      store.state.time = Math.round(
        (+new Date((store.state.current?.time || 1) * 1000) - +new Date()) /
          1000
      );
      if (store.state.time < 0) {
        if (store.state.current?.executionStatus != null) {
          store.state.current.executionStatus = ExecutionStatus.lateness;
        }
      }

      if (store.state.current?.executionStatus !== ExecutionStatus.started) {
        setTimeout(() => {
          if (store.state.current?.executionStatus === ExecutionStatus.started)
            return;
          if (store.state.current?.executionStatus)
            store.state.current.executionStatus = ExecutionStatus.arrived;
        }, (store.state.time - 900) * 1000);
        setTimeout(() => {
          if (store.state.current?.executionStatus === ExecutionStatus.started)
            return;
          if (store.state.current?.executionStatus)
            store.state.current.executionStatus = ExecutionStatus.lateness;
        }, store.state.time * 1000);
      }

      store.state.timer = setInterval(() => {
        store.state.time =
          store.state.current?.executionStatus === ExecutionStatus.started
            ? store.state.time + 60
            : store.state.time - 60;
        if (store.state.time < 0) {
          if (
            store.state.current?.executionStatus != null &&
            store.state.current?.executionStatus != ExecutionStatus.lateness
          )
            store.state.current.executionStatus = ExecutionStatus.lateness;
        }
      }, 60000);
    },
  },
};
