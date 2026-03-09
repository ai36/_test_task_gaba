import type { IUser } from '@/types';
import s from './userItem.module.css';

const ROLE_LABEL: Record<IUser['role'], string> = {
  admin: 'Admin',
  moderator: 'Moderator',
  user: 'User',
};

export const UserItem = ({ user }: { user: IUser }) => {
  return (
    <article className={s.card}>
      <div className={s.avatar}>
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width={64} height={64} />
      </div>

      <div className={s.body}>
        <div className={s.header}>
          <h2 className={s.name}>{user.firstName} {user.lastName}</h2>
          <span className={s.role}>{ROLE_LABEL[user.role]}</span>
        </div>

        <p className={s.title}>{user.company.title} · {user.company.department}</p>
        <p className={s.company}>{user.company.name}</p>

        <div className={s.contacts}>
          <span className={s.contact} aria-label="Email">{user.email}</span>
          <span className={s.contact} aria-label="Телефон">{user.phone}</span>
        </div>
      </div>
    </article>
  );
}
