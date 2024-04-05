import { useState } from "react"

export const useCounter = ({counterModifier, allowNegative}) => {

    const [counter,setCounter] = useState(0)
    const increment = () => {
      setCounter(counter + counterModifier)
    }
    const decrement = () => {
      if(!allowNegative && ((counter - counterModifier) < 0)) {
        return
      }
      setCounter(counter - counterModifier)
    }
    const reset = () => {
      setCounter(0)
    }  
    
    return {
      counter,
      increment,
      decrement,
      reset
    }
}
