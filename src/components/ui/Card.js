import React from 'react'
import Style from './Card.module.css'
export default function Card(props) {
  return (
    <div className={Style.card}>
      {props.children}
    </div>
  )
}
