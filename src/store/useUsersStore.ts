import { create } from "zustand";
import { createLoadSlice, type ILoadSlice } from "./slices/loadSlice";
import { createSearchSlice, type ISearchSlice } from "./slices/searchSlice";

export const useUsersStore = create<ILoadSlice & ISearchSlice>((...a) => ({
  ...createLoadSlice(...a),
  ...createSearchSlice(...a),
}));
