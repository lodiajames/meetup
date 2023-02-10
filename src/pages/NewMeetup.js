import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useNavigate} from 'react-router-dom'
export default function NewMeetup() {
  const navigate= useNavigate()
  function AddMeetupHandler(meetupData){
     fetch('https://meetup-f5d20-default-rtdb.firebaseio.com/meetups.json',
     {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json"
      }
     })
     .then(()=>{
      navigate('/');
     })
  }
  return (
    <section>
         <h1>Add New Meetup</h1>
         <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </section>
  )
}
