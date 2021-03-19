import Axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";

const Home = () => {
  const [appointments, setAppointments] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAppointments();
    getTeachers();
    getStudents();
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

  const getTeachers = async () => {
    try {
      let res = await Axios.get("/api/teachers");
      setTeachers(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getStudents = async () => {
    try {
      let res = await Axios.get("/api/students");
      setStudents(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>1-on-1 Appointments</h1>
    </>
  );
};

export default Home;
