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
      <Part name={props.parts[0].name} number={props.parts[0].exercises} />
      <Part name={props.parts[1].name} number={props.parts[1].exercises} />
      <Part name={props.parts[2].name} number={props.parts[2].exercises} />
      <Part name={props.parts[3].name} number={props.parts[2].exercises} />
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
    <Total parts={course.parts} />
  </div>
);

export default Course;
