import React from 'react'
import { Link } from 'react-router-dom'
import style from './MainNavigation.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext)
  return (
    <header className={style.header}>
        <div className={style.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>AllMeetup</Link></li>
                <li><Link to='/newMeetup'>NewMeetup</Link></li>
                <li><Link to='/favorites'>
                  <span className={style.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
  )
}
