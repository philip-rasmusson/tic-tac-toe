import { Square } from './Square'
import { useState } from 'react'

export const Board = () => {

  const [playerOne, setPlayerOne] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i: any) => {
    const sq = squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    playerOne ? sq[i] = 'X' : sq[i] = 'O'
    setPlayerOne(!playerOne)
    setSquares(sq)
  }

  const renderSquare = (i: any) => {
    return (<Square
      value={squares[i]}
      onClick={() => handleClick(i)}
    />)
  }


  const status = () => {
    const winner = calculateWinner(squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (playerOne ? 'X' : 'O')
    }

    return (status)
  }

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
  }

  return (
    <>
      <div className="status">{status()}</div>
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
    </>
  )
}
