import { useEffect } from "react";
import Contact from "../components/Contact";

import RefundComp from "../components/RefundComp";
import SideBar from "../components/SideBar";
import SideBarSmall from "../components/SideBarSmall";

export default function Refund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <RefundComp />
      <SideBar />

      <SideBarSmall />
      <Contact />
    </div>
  );
}
