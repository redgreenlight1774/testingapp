// components/BasicOperationPopup.js
import React from 'react';
import styles from '../styles/Popup.module.css';

export default function BasicOperationPopup() {
  const items = [
    { id: '1.1.1', label: 'Orientation', value: '100+', color: '#269914' },
    { id: '1.1.2', label: 'Control Systems/Dashboard', value: '-', color: '#EDD30B' },
    { id: '1.1.3', label: 'Pre- and Post-Trip Inspections', value: '-', color: '#EDD30B' },
    { id: '1.1.4', label: 'Basic Control', value: '-', color: '#BC57636C' },
  ];

  return (
    <div className={styles.popupContainer}>
      <div className={styles.header}>
        <span className={styles.title}>A1.1:</span>
        <span className={styles.subtitle}>Basic Operation</span>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <div className={styles.circle} style={{ backgroundColor: item.color }}></div>
            <span className={styles.itemId}>{item.id}</span>
            <span className={styles.itemLabel}>{item.label}</span>
            <span className={styles.itemValue}>{item.value}</span>
          </li>
        ))}
      </ul>
      <div className={styles.buttonRow}>
        <button className={styles.trainingButton}>Training</button>
        <button className={styles.assessmentButton}>Assessment</button>
      </div>
    </div>
  );
}
