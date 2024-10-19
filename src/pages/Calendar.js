import { useEffect } from "react";
import CourseCalendar from "../components/CourseCalendar";
import SideBar from "../components/SideBar";

import SideBarSmall from "../components/SideBarSmall";
export default function Calendar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SideBar />
      <SideBarSmall />

      <CourseCalendar />
    </div>
  );
}
