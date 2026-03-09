import type { StateCreator } from "zustand";
import type { IUser } from "@/types";
import { fetchUsers, fetchUsersByQuery } from "@/api/load";
import type { ISearchSlice } from "./searchSlice";

export interface ILoadSlice {
  users: IUser[];
  total: number;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
  loadPage: (page: number) => Promise<void>;
}

export const createLoadSlice: StateCreator<
  ILoadSlice & ISearchSlice,
  [],
  [],
  ILoadSlice
> = (set, get) => ({
  users: [],
  total: 0,
  currentPage: 1,
  isLoading: false,
  error: null,

  loadPage: async (page) => {
    const { query } = get();
    set({ isLoading: true, error: null, currentPage: page });
    try {
      const { users, total } = query
        ? await fetchUsersByQuery(query, page)
        : await fetchUsers(page);
      set({ users, total });
    } catch {
      set({ error: "Не удалось загрузить пользователей" });
    } finally {
      set({ isLoading: false });
    }
  },
});
