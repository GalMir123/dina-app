import React from "react";
import SideBarSmall from "../components/SideBarSmall";

import About from "../components/About";
import WhatsappSmall from "../components/WhatsappSmall";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import styles from "./Homepage.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <SideBar />
      <SideBarSmall />
      <Header>קורס הכנה ללידה רכה - היפנובירת'ינג, דרך הנשימה</Header>

      <About />
      <WhatsappSmall />
    </div>
  );
}
