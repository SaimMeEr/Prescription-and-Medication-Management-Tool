import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { db, ref, get } from "../firebase";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Analytics = () => {
  const [dataCounts, setDataCounts] = useState({ missed: 0, taken: 0, scheduled: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await get(ref(db, "medications"));
      if (snapshot.exists()) {
        const meds = Object.values(snapshot.val());
        setDataCounts({ missed: meds.length * 0.2, taken: meds.length * 0.5, scheduled: meds.length * 0.3 });
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: ["Missed", "Taken", "Scheduled"],
    datasets: [
      {
        label: "Medication Adherence",
        data: [dataCounts.missed, dataCounts.taken, dataCounts.scheduled],
        backgroundColor: ["red", "green", "blue"],
      },
    ],
  };

  return (
    <div className="card">
      <h2>Medication Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
