import React from 'react'
import { BehaviorSubject, Subject } from "rxjs"
import UserModel from "../../models/UserModel"


//bs.subscribe(console.log); // Emits last value

const MessageBus = () => {

  /*const userbus = Object.keys(UserModel).map(key => {
    return new BehaviorSubject(key)
  })*/

  const userBus = {}
  for (const key in UserModel) {
    userBus[key] = new Subject(UserModel[key])
  }

  window.messageBus = userBus

  //const bs = new BehaviorSubject(UserModel);
  
  //bs.subscribe(console.log);

  //bs.next("Perth");

  //console.log(userBus)
  //userBus.expoint.subscribe(console.log)
  //userBus.expoint.next("Perth")

  return (
    <div>Message bus loaded.</div>
  )
} 

export default MessageBus