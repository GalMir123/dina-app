import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ArticlesComp from "../components/ArticlesComp";
import WhatsappSmall from "../components/WhatsappSmall";
import SideBarSmall from "../components/SideBarSmall";
import Contact from "../components/Contact";
import { useEffect } from "react";
export default function Articles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SideBar />
      <SideBarSmall />
      <Header>מאמרים</Header>
      <ArticlesComp />
      <Contact />
      <WhatsappSmall />
    </div>
  );
}
