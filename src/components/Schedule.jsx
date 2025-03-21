import React, { useState } from "react";
import { db, ref, push } from "../firebase";

const Schedule = () => {
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");

  const addMedication = () => {
    if (medication && dosage) {
      push(ref(db, "medications"), { name: medication, dosage });
      setMedication("");
      setDosage("");
    }
  };

  return (
    <div className="card">
      <h2>Schedule Medication</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Medication Name"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={addMedication}>➕ Add Medication</button>
    </div>
  );
};

export default Schedule;

