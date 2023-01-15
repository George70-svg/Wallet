import React from 'react'

type PropsType = {
  title: string
}

export function Hello(props: PropsType) {
  return <p> {props.title} </p>
}
