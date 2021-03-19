import Axios from "axios";
import React, { useEffect, useState } from "react";

const Teacher = ({ teacher }) => {
  const [toggle, setToggle] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      let res = await Axios.get(`/api/teacher/${teacher.id}/appointments`);
      setAppointments(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderAppointments = () => {
    if (toggle === true) {
      return appointments.map((appointment) => {
        <p>{appointment.date}</p>;
      });
    }
  };

  return (
    <>
      <h2 onClick={setToggle(!toggle)}>
        {teacher.first_name} {teacher.last_name}
      </h2>
      {renderAppointments()}
    </>
  );
};

export default Teacher;
