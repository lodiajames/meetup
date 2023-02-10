import React from 'react'
import Card from '../ui/Card'
import Style from './NewMeetupForm.module.css'
import { useRef } from 'react'
export default function NewMeetupForm(props) {
const titleInputRef= useRef()
const imageInputRef= useRef()
const addressInputRef= useRef()
const descriptionInputRef= useRef()

    function submitHandler(e){
          e.preventDefault()

          const enteredTitle = titleInputRef.current.value;
          const enteredImage = imageInputRef.current.value;
          const enteredAddress = addressInputRef.current.value
          const enteredDescription = descriptionInputRef.current.value

          const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
          }

        props.onAddMeetup(meetupData)
          
    }
  return (
      <Card>
        <form className={Style.form} onSubmit={submitHandler}>
            <div className={Style.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id ='title'  ref={titleInputRef}/>
            </div>
            <div className={Style.control}>
                <label htmlFor='image'> Meetup Image</label>
                <input type='url' required id ='image' ref={imageInputRef}/>
            </div>
            <div className={Style.control}>
                <label htmlFor='address'> Address</label>
                <input type='text' required id ='address' ref={addressInputRef}/>
            </div>
            <div className={Style.control}>
                <label htmlFor='description'>Description</label>
             <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={Style.actions}>
                <button>Add Meetup</button>
            </div>

        </form>
      </Card>
  )
}
