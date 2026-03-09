import type { StateCreator } from "zustand";
import type { ILoadSlice } from "./loadSlice";
import { SEARCH_MIN_LENGTH } from "@/constants";

export interface ISearchSlice {
  query: string;
  search: (query: string) => Promise<void>;
}

export const createSearchSlice: StateCreator<
  ILoadSlice & ISearchSlice,
  [],
  [],
  ISearchSlice
> = (set, get) => ({
  query: "",

  search: async (query) => {
    if (query.length > 0 && query.length < SEARCH_MIN_LENGTH) return;
    set({ query });
    await get().loadPage(1);
  },
});
