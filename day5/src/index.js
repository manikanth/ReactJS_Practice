import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}


const Age = (props) => <div>The person age is {props.age} old.</div>

const Weight = (props) => (
<p>
  The weight of the object on earth is {props.weight} N.
</p>
)

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too young to drive';
  return <p>{status}</p>
}

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}


// The App, or the parent or the container component
// Functional Component
const App = () => {
  // const welcome = 'Welcome to 30 Days Of React'
  // const title = 'Getting Started React'
  // const subtitle = 'JavaScript Library'
  // const firstName = 'Asabeneh'
  // const lastName = 'Yetayeh'
  // const date = 'Oct 4, 2020'

  const currentYear = 2020
  let birthYear = 1920
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  let status = age>= 18

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date() // date needs to be formatted to a human readable format
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Age age={age}/>
      <Weight weight={gravity*mass} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
      
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)