import React from 'react'
// import styles from './styles.module.css'

export const Button = (props) => {
  return <button {...props}>{props.text}</button>
}
