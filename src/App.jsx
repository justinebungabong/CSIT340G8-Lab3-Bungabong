const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1.name} {props.part1.units}
      </p>
      <p>
        {props.part2.name} {props.part2.units}
      </p>
      <p>
        {props.part3.name} {props.part3.units}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total number of units: {props.part1.units + props.part2.units + props.part3.units}
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

  const part1 = {
    name: 'CSIT340 - Industry Elective 1',
    units: 3
  }
  const part2 = {
    name: 'IT365 - Data Analytics 1',
    units: 3
  }
  const part3 = {
    name: 'CSIT327 - Information Management 2',
    units: 3
  }

  const studentName = 'Justine T. Bungabong'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer studentName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App