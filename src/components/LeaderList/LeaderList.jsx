import React from 'react'

export default function LeaderList({ leaders }) {
  return (
    <div>
      <h1>Bop's Leading Scorers</h1>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.id}>
            {leader.username}:{leader.score}
          </li>
        ))}
      </ul>
    </div>
  )
}
