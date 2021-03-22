import Axios from "axios";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Teacher = ({ teacher, all_appointments, setAppointments }) => {
  const [toggle, setToggle] = useState(false);

  const deleteAppointment = async (id) => {
    try {
      let res = await Axios.delete(`/api/appointments/${id}`);
      console.log("deleted", res.data);
      let newAppointments = all_appointments.filter((o) => o.id !== id);
      setAppointments(newAppointments);
    } catch (err) {
      console.log(err);
    }
  };

  const renderAppointments = () => {
    if (toggle === true) {
      return all_appointments.map((appointment) => {
        return (
          <>
            <p>
              {appointment.date}: {appointment.students.first_name}{" "}
              {appointment.students.last_name}
            </p>
            <div>
              <Button
                basic
                color="red"
                onClick={() => deleteAppointment(appointment.id)}
              >
                Delete Appointment
              </Button>
            </div>
          </>
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
