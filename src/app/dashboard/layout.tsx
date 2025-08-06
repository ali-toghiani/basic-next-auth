"use client";

import { useContext, useEffect } from "react";
import classes from "./dashboard.module.scss";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { Routes } from "@/enums/routes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const handleLogout = () => {
    setUser(null);
    router.push(Routes.AUTH);
  };

  useEffect(() => {
    if (!user) {
      router.push(Routes.AUTH);
    }
  }, [user, router]);

  return (
    <main className={classes["dashboard-layout"]}>
      <header>
        <div></div>
        {user && <h1>Welcome, {user.name.first}!</h1>}
        <button onClick={handleLogout} className={classes.logoutButton}>
          Logout
        </button>
      </header>
      {children}
    </main>
  );
}
