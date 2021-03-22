import Teacher from "./Teacher";

const Teachers = ({
  teachers,
  getAppointments,
  all_appointments,
  setAppointments,
}) => {
  const toggler = (id) => {
    getAppointments(id);
  };

  const renderTeachers = () => {
    return teachers.map((teacher) => {
      return (
        <>
          <span onClick={() => toggler(teacher.id)}>
            <Teacher
              key={teacher.id}
              teacher={teacher}
              all_appointments={all_appointments}
              setAppointments={setAppointments}
            />
          </span>
          <br />
          <br />
        </>
      );
    });
  };

  return <>{renderTeachers()}</>;
};

export default Teachers;
