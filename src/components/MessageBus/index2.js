import React from 'react'
import { BehaviorSubject, Subject } from "rxjs"
import UserModel from "../../models/UserModel"


//bs.subscribe(console.log); // Emits last value

const MessageBus = () => {

  const userBus = {}

  for (const key in UserModel) {
    // eslint-disable-next-line no-loop-func
    userBus[key] = () => {
      var subject = new BehaviorSubject();
      //var source = new SomeWeirdDataSource();
      source.onMessage = (data) => subject.next({ type: 'message', data });
      //source.onOtherMessage = (data) => subject.next({ type: 'othermessage', data });
      return subject.asObservable();
    }
  }

  console.log(userBus)

  window.messageBus = userBus 

  return (
    <div>Message bus loaded.</div>
  )
}

export default MessageBus