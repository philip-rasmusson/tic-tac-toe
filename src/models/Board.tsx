import { Square } from './Square'
import { useState } from 'react'

export const Board = () => {

  const [playerOne, setPlayerOne] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i: any) => {
    const sq = squares.slice()
    sq[i] = 'X'
    setSquares(sq)
  }

  const renderSquare = (i: any) => {
    return (<Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />)
  }

  const status = 'Next player: X'


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
