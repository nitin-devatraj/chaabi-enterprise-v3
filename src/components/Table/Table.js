import React from "react";
import styles from "./Table.module.scss";
import TableItem from "./TableItem/TableItem";

function Table({ columnNames, tableRows }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>table heading</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameColumnHeader}>Name</th>
            <th className={styles.statusColumnHeader}>Status</th>
            <th className={styles.roleColumnHeader}>Role</th>
            <th className={styles.emailColumnHeader}>Email address</th>
            <th className={styles.teamsColumnHeader}>Teams</th>
            <th className={styles.deleteColumnHeader}></th>
            <th className={styles.editColumnHeader}></th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((item, index) => (
            <TableItem item={item} key={index} />
          ))}
        </tbody>
      </table>
      <div className={styles.footer}>
        Page 1 of 10{" "}
        <div className={styles.paginationBtnContainer}>
          <button className={styles.paginationBtn}>Prev</button>
          <button className={styles.paginationBtn}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Table;
