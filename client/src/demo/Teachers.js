import Axios from "axios";
import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";

const Teachers = ({ teachers, getAppointments, all_appointments }) => {
  const [toggle, setToggle] = useState(false);
  const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   getAppointments();
  // }, []);

  // const getAppointments = async (id) => {
  //   setToggle(!toggle);
  //   try {
  //     let res = await Axios.get(`/api/teachers/${id}/appointments`);
  //     setAppointments(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const renderAppointments = () => {
    if (toggle === true) {
      return all_appointments.map((appointment) => {
        <p>{appointment.date}</p>;
      });
    }
  };

  const toggler = (id) => {
    setToggle(!toggle);
    getAppointments(id);
  };

  const renderTeachers = () => {
    return teachers.map((teacher) => {
      return (
        <>
          <div onClick={() => toggler(teacher.id)}>
            <h2>
              {teacher.first_name} {teacher.last_name}
            </h2>
          </div>
          {renderAppointments()}
        </>
      );
    });
  };

  return <>{renderTeachers()}</>;
};

export default Teachers;
