import React from "react";
import styles from "./TableItem.module.scss";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/table-icons/active-dot-icon.svg";
import { ReactComponent as InactiveIcon } from "../../../assets/icons/table-icons/inactive-dot-icon.svg";
import { ReactComponent as DraftIcon } from "../../../assets/icons/table-icons/draft-dot-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/table-icons/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/table-icons/edit-icon.svg";

function TableItem({ item }) {
  return (
    <tr className={styles.tableItem}>
      <td className={styles.nameColumn}>{item.name}</td>
      <td className={styles.statusColumn}>
        <div
          className={`${styles.badge}  ${
            item.status === "active"
              ? styles.activeBadge
              : item.status === "inactive"
              ? styles.inactiveBadge
              : styles.draftBadge
          }`}
        >
          {item.status === "active" ? (
            <ActiveIcon />
          ) : item.status === "inactive" ? (
            <InactiveIcon />
          ) : (
            <DraftIcon />
          )}

          {item.status}
        </div>
      </td>
      <td className={styles.roleColumn}>{item.role}</td>
      <td className={styles.emailColumn}>{item.email}</td>
      <td className={styles.teamsColumn}>
        <div className={styles.badges}>
          {item.teams.map((item) => (
            <div className={styles.badge}>{item}</div>
          ))}
        </div>
      </td>
      <td className={styles.deleteColumn}>
        <button className={styles.button}>
          <DeleteIcon />
        </button>
      </td>
      <td className={styles.editColumn}>
        <button className={styles.button}>
          <EditIcon />
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
