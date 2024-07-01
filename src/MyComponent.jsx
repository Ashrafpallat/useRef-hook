import React, {useState,useEffect,useRef} from 'react'

function MyComponent() {

  // let [Number, setNumber] = useState(0)
  const ref = useRef(0)

  useEffect(()=>{
    console.log('Component rendered');
  })

  function handleClick(){
    // setNumber(n=>n+1)
    ref.current++
    console.log(ref.current);
  }

  return (
    <div>
      <button onClick={handleClick}>
        click me
      </button>
    </div>
  )
}

export default MyComponent
