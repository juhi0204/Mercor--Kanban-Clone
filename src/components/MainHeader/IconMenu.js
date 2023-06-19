import { Calendar1 } from "../../assets/id/Calender1";
import { MessageQuestion } from "../../assets/id/MessageQuestion";
import { Notification } from "../../assets/id/Notification";

import styles from "./IconMenu.module.css";

export default function IconMenu() {
  return (
    <span className={styles.iconMenu}>
      <Calendar1 />
      <MessageQuestion />
      <Notification />
    </span>
  );
}