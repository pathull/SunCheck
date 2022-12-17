import React, { useEffect, useState } from 'react';
import generatePDF from './ReportGenerator';

const FormList = () => {
  const [formEvents, setFormEvents] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3001`;
    const getAllEvents = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        return setFormEvents(result);
      } catch (error) {
        return error;
      }
    };
    getAllEvents();
  }, []);

  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          <button className="btn btn-primary" onClick={() => generatePDF(formEvents)}>
            Generate PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormList;
