import React from "react";
import styles from "./Layout.module.scss";
import typography from "../global-styles/typography.module.scss";
import TextInput from "../components/InputFields/TextInput/TextInput";
import { ReactComponent as Ellipse } from "../assets/icons/layout-icons/ellipse.svg";
import BrandLogo from "../assets/icons/layout-icons/chaabi-icon.svg";
import NavItem from "./NavItem/NavItem";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.rightHandSection}>
        <header className={styles.header}>
          <div className={styles.content}>
            <h4 className={typography.h4Med}>Hello, Puneet Dhiman</h4>
            <p className={typography.t1Lite}>Welcome to your Dashboard</p>
          </div>
          <div className={styles.actions}>
            <TextInput />
            <Ellipse />
            <Ellipse />
            <Ellipse />
          </div>
        </header>
        <section className={styles.page}>
          <Outlet />
        </section>
      </div>
      <section className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <img src={BrandLogo} alt="#" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <NavItem />
        </nav>
      </section>
    </div>
  );
}

export default Layout;
