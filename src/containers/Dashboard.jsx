import React from "react";
import Navbar from "./layout/navbar/Navbar";
import styles from "./styles/Dashboard.module.css";
import Sidebar from "./layout/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      {/* <br /> */}
      <main className={styles.myframe}>
        <aside>
          <Sidebar />
        </aside>
        <article>
          <Outlet />
        </article>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
