//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

// JSX Element Header
const headerStyles = {
    backgroundColor : '#61DBFB',
    fontFamily : 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
}

const header = (
    <header className="header-wrapper">
        <h1>Welcome to 30 days of React</h1>
        <h2>Getting started with React</h2>
        <h3>JavaScript Library</h3>
        <p>Mani</p>
        <small>06 Jan 2021</small>
    </header>
)

const mainStyles = {
    backgroundColor : '#F3F0F5',
}            

const main = (
    <main>
        <div className="main-wrapper">
        <p>Pre requisite to learn React</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        </div>
    </main>
)            

const footerStyles = {
    backgroundColor: '#61DBFB',    
}

const footer = (
    <footer>
       <div className="footer-wrapper">

       </div>
    </footer>
)

const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)