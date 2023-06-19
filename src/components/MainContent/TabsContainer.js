import { ArrowDown } from "../../assets/id/ArrowDown";
import { Filter } from "../../assets/id/Filter";
import { Calendar } from "../../assets/id/Calender";
import { Profile } from "../../assets/id/Profile";
import { Menu } from "../../assets/id/Menu";
import { Pause } from "../../assets/id/Pause";
import Tab from "../UI/Tab";

import styles from "./TabsContainer.module.css";

export default function TabsContainer() {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.left}>
        <Tab>
          <Filter />
          <span>Filter</span>
          <ArrowDown />
        </Tab>
        <Tab>
          <Calendar />
          <span>Today</span>
          <ArrowDown />
        </Tab>
        <span className={styles.shareTab}>
          <Tab>
            <Profile />
            <span>Share</span>
          </Tab>
        </span>
      </div>
      <div className={styles.right}>
        <Tab>
          <Profile />
          <span>Share</span>
        </Tab>
        <div className={styles.separator}></div>
        <Pause />
        <Menu />
      </div>
    </div>
  );
}