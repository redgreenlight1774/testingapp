// pages/why.js
import React, { useState } from 'react';
import BasicOperationPopup from '../components/BasicOperationPopup';
import styles from '../styles/Why.module.css';

export default function Why() {
  const [activePopup, setActivePopup] = useState(null);

  const buttons = [
    { label: 'Basic Operation', id: 'basic' },
    { label: 'Safe Operating Procedures', id: 'safe' },
    { label: 'Advanced Operating Practices', id: 'advanced' },
    { label: 'Vehicle Systems and Reporting Malfunctions', id: 'vehicle' },
    { label: 'Non-Driving Activities', id: 'nonDriving' },
  ];

  const handleClick = (id) => {
    setActivePopup(id);
  };

  return (
    <div className={styles.container}>
      {buttons.map((button) =>
        activePopup && activePopup !== button.id ? null : (
          <div key={button.id} className={styles.row}>
            <span className={styles.label}>A.1.{buttons.indexOf(button) + 1}:</span>
            <button
              className={styles.button}
              onClick={() => handleClick(button.id)}
            >
              {button.label}
            </button>
          </div>
        )
      )}

      {activePopup === 'basic' && <BasicOperationPopup />}
    </div>
  );
}
