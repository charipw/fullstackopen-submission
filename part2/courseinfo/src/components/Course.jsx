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
    </div>
  );
};

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
  </div>
);

export default Course;
