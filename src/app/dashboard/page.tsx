"use client";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import classes from "./dashboard.module.scss";

export default function DashboardPage() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <section className={classes['user-info-card']}>
      <div className='dashboard'>
      <div className='user-info'>
        <img src={user.picture.medium} alt="User profile" className='avatar' />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      
    </div>
    </section>
  );
}