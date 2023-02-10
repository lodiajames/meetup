import React from 'react'
import MainNavigation from './MainNavigation'
import Style from './Layout.module.css'
export default function Layout(props) {
  return (
    <div>
        <MainNavigation/>
        <main className={Style.main}>{props.children}</main>
    </div>
  )
}
