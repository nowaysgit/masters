import { Module } from "vuex";
import { RootState } from "@/store";
import { User } from "@/models/User";

export interface UserState {
  user: User | null;
}

export const UserModule: Module<UserState, RootState> = {
  state: {
    user: null,
  },
  mutations: {
    updateUser(state: UserState, user: User) {
      state.user = user;
    },
  },
};
