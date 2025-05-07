const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.number}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return <Part key={part.id} name={part.name} number={part.exercises} />;
      })}
    </div>
  );
};

const Total = (props) => {
  return (
    <b>
      total of{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises +
        props.parts[3].exercises}{" "}
      exercices
    </b>
  );
};

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    {/* <Total parts={course.parts} /> */}
  </div>
);

export default Course;
