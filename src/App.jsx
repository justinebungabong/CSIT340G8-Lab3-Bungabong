const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units}
    </p>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.units, 0)
  return (
    <p>
      Total number of units: {total}
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
  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
      { name: 'CSIT340 - Industry Elective 1', units: 3 },
      { name: 'IT365 - Data Analytics 1', units: 3 },
      { name: 'CSIT327 - Information Management 2', units: 3 }
    ]
  }

  const studentName = 'Justine T. Bungabong'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer studentName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App