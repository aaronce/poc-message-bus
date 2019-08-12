import React, { useState, useMemo, useEffect } from 'react'
import { useMessageBus } from './hooks/useMessageBus'


const App = () => {
  const messageBus = window.messageBus.subjects
  const [ expoint, setExpoint] = useState('Perth')

  const expointListener = useMessageBus('expoint').subscribe(
    (x) => {
      if (expoint !== x) {
        setExpoint(x)
      }
    })
  
  const handleClick = () => {
    messageBus.expoint.next('Sydney')
  }

  console.log('React app initiated.')
  return (
    <div>
      <p>React App loaded. Expoint = {expoint}</p>
      <p>
        <button onClick={handleClick}>Send Sydney</button>
      </p>
    </div>  
  )
} 

export default App