import { Home } from "../../assets/id/Home";
import { Message } from "../../assets/id/Message";
import { Task } from "../../assets/id/Task";
import { Profile } from "../../assets/id/Profile";
import { Setting } from "../../assets/id/Setting";

import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      <li className={styles.menuItem}>
        <Home />
        <span>Home</span>
      </li>
      <li className={styles.menuItem}>
        <Message />
        <span>Messages</span>
      </li>
      <li className={styles.menuItem}>
        <Task />
        <span>Tasks</span>
      </li>
      <li className={styles.menuItem}>
        <Profile />
        <span>Members</span>
      </li>
      <li className={styles.menuItem}>
        <Setting />
        <span>Settings</span>
      </li>
    </ul>
  );
}