import { useEffect, useRef } from "react";
import { UserList, Pagination } from "@/components";
import { useUsersStore } from "@/store/useUsersStore";

export const HomePage = () => {
  const { users, total, currentPage, isLoading, error, loadPage } = useUsersStore();
  const isFirstRender = useRef(true);

  useEffect(() => {
    loadPage(1);
  }, [loadPage]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.querySelector('main')?.scrollTo({ top: 0 });
  }, [currentPage]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <UserList users={users} isLoading={isLoading} />
      <Pagination
        totalItems={total}
        currentPage={currentPage}
        onPageChange={loadPage}
      />
    </div>
  );
};
