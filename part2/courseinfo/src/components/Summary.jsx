import Course from "./Course";

const Summary = ({ courses }) => (
  <div>
    <h1>Web Development curriculum </h1>
    {courses.map((course) => {
      return <Course key={course.id} course={course} />;
    })}
  </div>
);

export default Summary;
