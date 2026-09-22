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
      <h1>{course}</h1>
      <p>{part1}</p>
      <p>Units: {units1}</p>
      <p>{part2}</p>
      <p>Units: {units2}</p>
      <p>{part3}</p>
      <p>Units: {units3}</p>
      <p>Total number of units: {units1 + units2 + units3}</p>
      <Footer
        studentName={studentName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App