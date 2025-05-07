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
  var result = 0;
  for (var i = 0; i < props.parts.length; i++) {
    result += props.parts[i].exercises;
  }
  return <b>total of {result} exercices</b>;
};

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
