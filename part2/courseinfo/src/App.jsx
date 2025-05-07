import Course from "./components/Course";

const App = (props) => {
  const { courses } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {courses.parts.map((course) => (
          <p key={course.id}>
            {course.name} {course.exercises}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default App;
