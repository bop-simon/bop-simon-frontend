import React from 'react'

export default function LeaderList({ leaders }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      <h2>Top Scores! Can you beat the Bop?</h2>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.id}>
            {leader.username} <br /> 🎵 {leader.score} pts
          </li>
        ))}
      </ul>
    </div>
  )
}
