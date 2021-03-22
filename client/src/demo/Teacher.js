import Axios from "axios";
import React, { useEffect, useState } from "react";

const Teacher = ({ teacher, all_appointments }) => {
  const [toggle, setToggle] = useState(false);

  const renderAppointments = () => {
    if (toggle === true) {
      return all_appointments.map((appointment) => {
        return (
          <p>
            {appointment.date}: {appointment.students.first_name}{" "}
            {appointment.students.last_name}
          </p>
        );
      });
    }
  };

  return (
    <>
      <h2 onClick={() => setToggle(!toggle)}>
        {teacher.first_name} {teacher.last_name}
      </h2>
      {renderAppointments()}
    </>
  );
};

export default Teacher;
