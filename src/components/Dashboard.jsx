import React, { useEffect, useState } from "react";
import { db, ref, get, remove } from "../firebase";

const Dashboard = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchMedications = async () => {
      const snapshot = await get(ref(db, "medications"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setMedications(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
      }
    };
    fetchMedications();
  }, []);

  const deleteMedication = async (id) => {
    await remove(ref(db, `medications/${id}`));
    setMedications(medications.filter((med) => med.id !== id));
  };

  return (
    <div className="card">
      <h2>Current Medications</h2>
      {medications.length > 0 ? (
        <ul className="medication-list">
          {medications.map((med) => (
            <li key={med.id} className="medication-item">
              <span>{med.name} - {med.dosage}</span>
              <button className="delete-button" onClick={() => deleteMedication(med.id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No medications added yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
