import React from 'react'
import './scoreboard.css'

const Scoreboard = ({scores,xplaying}) => {
    const {xscore,oscore}= scores
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xplaying && 'inactive'}`}>X-{xscore}</span>
        <span className={`score oscore ${xplaying && 'inactive'}`}>O-{oscore}</span>
    </div>
  )
}

export default Scoreboard