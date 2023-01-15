import React from 'react'

import './App.css'

function App() {
  return <Hello title='AAAAAAAAAAA' />
}

type PropsType = {
  title: string
}

function Hello(props: PropsType) {
  return <p> {props.title} </p>
}

export default App
