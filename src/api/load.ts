import axios from "axios";
import type { IUsersResponse } from "@/types";
import { ITEMS_PER_PAGE, API_URL, API_SEARCH_URL, REQUEST_TIMEOUT_MS } from "@/constants";

export const fetchUsers = async (page: number): Promise<IUsersResponse> => {
  const skip = (page - 1) * ITEMS_PER_PAGE;
  const { data } = await axios.get<IUsersResponse>(API_URL, {
    params: { limit: ITEMS_PER_PAGE, skip },
    timeout: REQUEST_TIMEOUT_MS,
  });
  return data;
};

export const fetchUsersByQuery = async (query: string, page: number): Promise<IUsersResponse> => {
  const skip = (page - 1) * ITEMS_PER_PAGE;
  const { data } = await axios.get<IUsersResponse>(API_SEARCH_URL, {
    params: { q: query, limit: ITEMS_PER_PAGE, skip },
    timeout: REQUEST_TIMEOUT_MS,
  });
  return data;
};
