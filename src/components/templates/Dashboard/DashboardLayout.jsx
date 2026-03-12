import { useState } from "react";
import { Outlet } from "react-router";
import styles from "./dashboardLayout.module.css";
import SidebarMenu from "../../organisms/SidebarMenu/SidebarMenu";
import Shop from "../../pages/Shop/Shop";
import MySwaps from "../../pages/MySwaps/MySwaps";
import CreateArticle from "../../pages/CreateArticle/CreateArticle";
import SwapHistory from "../../pages/SwapHistory/SwapHistory";

const DashboardLayout = () => {

  return (
    <section>
      <div className={styles.layout}>
          <SidebarMenu  />
        
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

  

export default DashboardLayout;