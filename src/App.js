import React, { useState } from 'react'


const App = () => {
  const [ expoint, setExpoint] = useState('Sydney')

  // useMessageBus below??
  const messageBus = window.messageBus
  
  messageBus.expoint.subscribe(
    x => {
      console.log(x)
    }
  )

  messageBus.expoint.next('test message send')

  return (
      <div>App loaded. {expoint}</div>
  )
} 

export default App