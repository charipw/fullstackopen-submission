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
  const initialValue = 0;
  const sumWithInitial = props.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    initialValue
  );

  return <b>total of {sumWithInitial} exercices</b>;
};

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
