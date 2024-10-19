import SideBar from "../components/SideBar";
import SideBarSmall from "../components/SideBarSmall";
import Contact from "../components/Contact";
import ContactDetails from "../components/ContactDetails";
import Header from "../components/Header";
import { useEffect } from "react";
export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header>צרי קשר</Header>
      <SideBar />
      <SideBarSmall />
      <ContactDetails />
      <Contact stylee={"style"} />
    </div>
  );
}
