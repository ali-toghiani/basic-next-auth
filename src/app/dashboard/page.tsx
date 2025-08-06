"use client";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import classes from "./dashboard.module.scss";

export default function DashboardPage() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <section className={classes['user-info-card']}>
      <div className={classes.dashboard}>
      <div className={classes.userInfo}>
        <img src={user.picture.medium} alt="User profile" className={classes.avatar} />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      
    </div>
    </section>
  );
}