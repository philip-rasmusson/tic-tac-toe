import { useState } from 'react'

export const Square = (props: { value: any, onClick: any }) => {



  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
