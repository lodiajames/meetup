import React from 'react'
import MeetupItem from './meetpItem'
import Style from './MeetupList.module.css'

export default function MeetupList(props) {
  return (
    <ul className={Style.list}>
        {props.meetups.map(meetup => <MeetupItem key={meetup.id} id={meetup.image} image={meetup.image}
        title={meetup.title} address={meetup.address} description={meetup.description}/>)}
    </ul>
  )
}
 