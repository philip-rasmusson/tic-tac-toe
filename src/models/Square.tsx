import { useState } from 'react'

export const Square = (props: { value: any, onClick: any }) => {


  const [squareState, setSquareState] = useState(props.value)


  return (
    <div>
      <button className="square" onClick={() => { { props.onClick() } }}>
        {props.value}
      </button>
    </div>
  )
}
