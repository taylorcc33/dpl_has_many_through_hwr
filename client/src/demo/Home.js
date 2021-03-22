import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import Teachers from "./Teachers";

const Home = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [appointments, setAppointments] = useState([]);
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // getAppointments();
    getTeachers();
    getStudents();
  }, []);

  const getAppointments = async (id) => {
    // setToggle(!toggle);
    try {
      let res = await Axios.get(`/api/teacher/${id}/appointments`);
      setAppointments(res.data.appointments);
      console.log("Appointments", res.data.appointments);
    } catch (err) {
      console.log(err);
    }
  };

  const getTeachers = async () => {
    try {
      let res = await Axios.get("/api/teachers");
      setTeachers(res.data);
      console.log("Teachers", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getStudents = async () => {
    try {
      let res = await Axios.get("/api/students");
      setStudents(res.data);
      console.log("Students", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTeachers = () => {
    return (
      <>
        <h1>DPL 1-on-1 Appointments</h1>
        <Teachers
          teachers={teachers}
          getAppointments={getAppointments}
          all_appointments={appointments}
        />
      </>
    );
  };

  return <>{renderTeachers()}</>;
};

export default Home;
