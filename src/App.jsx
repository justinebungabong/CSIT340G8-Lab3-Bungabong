const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}
      </p>
      <p>
        Units: {props.units1}
      </p>
      <p>
        {props.part2}
      </p>
      <p>
        Units: {props.units2}
      </p>
      <p>
        {props.part3}
      </p>
      <p>
        Units: {props.units3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total number of units: {props.units1 + props.units2 + props.units3}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>
        {props.studentName} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = 'CSIT340 - Industry Elective 1'
  const units1 = 3
  const part2 = 'IT365 - Data Analytics 1'
  const units2 = 3
  const part3 = 'CSIT327 - Information Management 2'
  const units3 = 3 
  const studentName = 'Justine T. Bungabong'
  const courseCode = 'CSIT340'
  const section = 'G8'
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total
        units1={units1}
        units2={units2}
        units3={units3}
      />

      <Footer
        studentName={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App