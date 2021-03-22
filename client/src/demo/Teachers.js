import Axios from "axios";
import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";

const Teachers = ({ teachers, getAppointments, all_appointments }) => {
  const [toggle, setToggle] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const renderAppointments = () => {
    console.log("renderAppointments triggered");
    if (toggle === true) {
      console.log("toggle is true");
      return all_appointments.map((appointment) => {
        return <p>{appointment.date}</p>;
      });
    }
  };

  const toggler = (id) => {
    // setToggle(!toggle);
    getAppointments(id);
  };

  const renderTeachers = () => {
    return teachers.map((teacher) => {
      return (
        <>
          <Teacher
            onClick={() => toggler(teacher.id)}
            key={teacher.id}
            teacher={teacher}
            all_appointments={all_appointments}
          />

          {renderAppointments()}
        </>
      );
    });
  };

  return <>{renderTeachers()}</>;
};

export default Teachers;
