import React, {useEffect, useState} from 'react';
import Header from "./components/Top/Header"
import LeftBar from './components/Left/LeftBar.jsx'
import RepoInfo from './components/Middle/RepoInfo.jsx'
import Security from './components/Right/Security.jsx'
import Footer from './components/Bottom/Footer.jsx'
import {userData} from './data'
import "./App.css"

function App() {



  console.log(userData)

  return(
    <main>
      <div className="top">
        <Header />
      </div>
      <div className="left">
        <LeftBar />
      </div>
      <div className="middle">
        <RepoInfo />
      </div>
      <div className="right">
        <Security />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </main>
  )
}

export default App




// Running React on Repl.it

// React is a popular JavaScript library for building user interfaces.

// Vite is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

// Using the two in conjunction is one of the fastest ways to build a web app.

// Getting Started

// Hit run
// Edit App.jsx and watch it live update!
// By default, Replit runs the dev script, but you can configure it by changing the run field in the .replit file.



// Instructions

// In this lesson, you will need to modify the existing components in this project so that every text in parentheses, such as (Repo name) or (Username) is replaced with props. You will have to take the userData object in 'App.jsx' and pass the corresponding values down to the other components using props.

// Look out for 'RepoInfo.jsx' since you will only show the active repository and will need to add contributors as list items. Finally, in 'LeftBar.jsx', you must use some kind of loop to show all of the RepoBar components instead of hard-coding them.