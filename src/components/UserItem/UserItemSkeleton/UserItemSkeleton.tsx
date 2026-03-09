import s from "../userItem.module.css";

export const UserItemSkeleton = () => {
  return (
    <div className={`${s.card} ${s.skeleton}`} aria-hidden>
      <div className={s.avatar} />
      <div className={s.body}>
        <div className={s.header}>
          <div className={s.name} />
          <div className={s.role} />
        </div>
        <div className={s.title} />
        <div className={s.company} />
        <div className={s.contacts}>
          <div className={s.contact} />
          <div className={s.contact} />
        </div>
      </div>
    </div>
  );
};
