export default function LeaderList({ leaders }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      <h2>Top Scores! Can you beat the Bop?</h2>
      <ol>
        {leaders.map((leader) => (
          <li key={leader.username}>
            {leader.username} <br /> 🎵 {leader.score} pts
          </li>
        ))}
      </ol>
    </div>
  )
}
