import React from 'react'
import { BehaviorSubject, Subject } from "rxjs"
import UserModel from "../../models/UserModel"


//bs.subscribe(console.log); // Emits last value

const MessageBus = () => {

  const subjects = {}
  for (const key in UserModel) {
    subjects[key] = new Subject(UserModel[key])
  }

  window.messageBus = {}
  window.messageBus.subjects = subjects

  return (
    <p>Message bus loaded.</p>
  )
} 

export default MessageBus