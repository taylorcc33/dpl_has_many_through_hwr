import Axios from "axios";
import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      let res = await Axios.get("/api/appointments");
      setAppointments(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderAppointments = () => {
    return appointments.map((app) => {
      return (
        <>
          <h3>{app.date}</h3>
          <div>Teacher: {app.teacher.first_name}</div>
          <div>Student: {app.student.first_name}</div>
        </>
      );
    });
  };

  return (
    <>
      <h1>All Appointments</h1>
      {renderAppointments()}
    </>
  );
};

export default Appointments;
