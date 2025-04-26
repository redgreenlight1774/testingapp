import React, { useState } from 'react';
import BasicOperationPopup from '../components/BasicOperationPopup';
import styles from '../styles/Why.module.css';

export default function Why() {
  const [activePopup, setActivePopup] = useState(null); // Track which popup is active

  const buttons = [
    { label: 'Basic Operation', id: 'basic' },
    { label: 'Safe Operating Procedures', id: 'safe' },
    { label: 'Advanced Operating Practices', id: 'advanced' },
    { label: 'Vehicle Systems and Reporting Malfunctions', id: 'vehicle' },
    { label: 'Non-Driving Activities', id: 'nonDriving' },
  ];

  const handleClick = (id) => {
    setActivePopup(id); // Set the active popup
  };

  return (
    <div className={styles.container}>
      {buttons.map((button, index) =>
        activePopup && activePopup !== button.id ? null : ( // Hide other buttons if popup is active
          <div key={button.id} className={styles.row}>
            <span className={styles.label}>A.1.{index + 1}:</span>
            <button
              className={styles.button}
              onClick={() => handleClick(button.id)}
            >
              {button.label}
            </button>
          </div>
        )
      )}

      {/* Conditionally show popup */}
      {activePopup === 'basic' && <BasicOperationPopup />}
    </div>
  );
}
