import React,{useState} from 'react'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'
import './App.css'

const App = () => {
  const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [board,setBoard] = useState(Array(9).fill(null))
  const [xplaying,setXplaying] = useState(true)
  const [scores,setScores] =useState({xscore:0,oscore:0})
  const [gameover,setGameover] = useState(false)
  const handleBoxClick = (boxind)=>{
     const updadateBoard = board.map((value,ind)=>{
      if(ind === boxind){
        return xplaying === true ? "X" : "O";
        }else{
          return value;
        }
     })
    const winner = checkWinner(updadateBoard)

    if(winner){
      if(winner === "O"){
        let {oscore} = scores;
        oscore += 1
        setScores({...scores,oscore})
      }else{
        let {xscore} = scores;
        xscore += 1
        setScores({...scores,xscore})
      }
    }
    console.log(scores)
     setBoard(updadateBoard)
     setXplaying(!xplaying)
  }
  const checkWinner = (board)=>{
    for (let i=0;i<winCondition.length;i++){
       const [x,y,z] = winCondition[i];

       if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameover(true)
        return board[x];
       }
    }
  }

  const resetBoard =()=>{
    setGameover(false)
    setBoard(Array(9).fill(null))
  } 
  return (
    <div>
      <h1 style={{textAlign:'center',textDecoration:'underline'}}>Tic Tac App </h1>
      <Scoreboard scores={scores} xplaying={xplaying}/>
      <Board board={board} onClick={gameover ? resetBoard : handleBoxClick}/>
      <div className='btn'><button onClick={resetBoard} >reset</button></div>
    </div>
  )
}

export default App