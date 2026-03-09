import type { IUser } from "@/types";
import { ITEMS_PER_PAGE } from "@/constants";
import { UserItem, UserItemSkeleton } from "@/components";
import s from "./userList.module.css";

export const UserList = ({ users, isLoading }: {users: IUser[], isLoading?: boolean}) => {
  return (
    <div className={s.userList}>
      <h1 className="sr-only">User List</h1>
      <ul className={s.list}>
        {isLoading
          ? Array.from({ length: ITEMS_PER_PAGE }, (_, i) => (
              <li key={i} className={s.item}>
                <UserItemSkeleton />
              </li>
            ))
          : users.map((user) => (
              <li key={user.id} className={s.item}>
                <UserItem user={user} />
              </li>
            ))}
      </ul>
    </div>
  );
};
