import React from 'react'

import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

    // const DUMMY_DATA = [
    //     {
    //       id: 'm1',
    //       title: 'This is a first meetup',
    //       image:
    //         'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    //       address: 'Meetupstreet 5, 12345 Meetup City',
    //       description:
    //         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //     },
    //     {
    //       id: 'm2',
    //       title: 'This is a second meetup',
    //       image:
    //         'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
    //       address: 'Meetupstreet 5, 12345 Meetup City',
    //       description:
    //         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    //     },
    //   ];


export default function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups]= useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetch('https://meetup-f5d20-default-rtdb.firebaseio.com/meetups.json'
    
   )
   .then((res) => res.json())    
   .then(data => { 
    console.log(data)

  
      const meetups = [];

      for(const key in data){
        const meetup = {
          id:key,
          ...data[key]
        }
        console.log(meetup)
        meetups.push(meetup)

      }
      setIsLoading(false)
        setLoadedMeetups(meetups)
    
    })
  },[])



if(isLoading){
  return( <section>
       <p>Loading...</p>
  </section>
  )
}
  return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups = {loadedMeetups}/>
      
      
    </section>
  )
}
