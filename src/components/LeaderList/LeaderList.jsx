import React from 'react'

export default function LeaderList({ leaders }) {
  return (
    <div>
        <h1>Bop's Leading Scorer's</h1>
        <ul>
        {leaders.map((leader) => <li key={leader.username}>
        {leader.username}:
        {leader.score}</li> )}
        </ul>
        </div>
  )
}
