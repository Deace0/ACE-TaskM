import React, { useEffect, useState } from "react";
import axios from "axios";
import GanttChartComponent from "../..controllers/ganttController"; // Replace with your chosen Gantt chart library

const GanttChart = () => {
  const [ganttData, setGanttData] = useState([]);

  useEffect(() => {
    fetchGanttData();
  }, []);

  const fetchGanttData = async () => {
    try {
      const response = await axios.get("/api/gantt-data"); // Update the endpoint
      setGanttData(response.data);
    } catch (error) {
      console.error("Error fetching Gantt chart data:", error);
    }
  };

  return (
    <div>
      <h2>Gantt Chart</h2>
      {/* Render the Gantt chart using your chosen library */}
      <GanttChartComponent data={ganttData} />
    </div>
  );
};

export default GanttChart;
