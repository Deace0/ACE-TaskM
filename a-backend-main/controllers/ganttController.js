import React, { useEffect, useState } from 'react';
import { Gantt } from 'frappe-gantt';

function GanttChart() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('../models/Note')
      .then(response => response.json())
      .then(data => {
        // Transform data to match what the Gantt chart expects
        const transformedData = data.map(note => ({
          id: note._id.$oid,
          name: note.title,
          start: new Date(note.createdAt.$date),
          end: new Date(note.updatedAt.$date),
          progress: note.status === 'Completed' ? 100 : 0,
        }));

        setTasks(transformedData);
      });
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      const gantt = new Gantt('#gantt', tasks);
    }
  }, [tasks]);

  return <div id="gantt" />;
}

export default GanttChart;

