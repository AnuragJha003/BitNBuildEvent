import React from "react";

const Leaderboard = () => {
  // Example data for the top 10 participants
  const leaderboardData = [
    { rank: 1, name: "John Doe", score: 300 },
    { rank: 2, name: "Jane Smith", score: 280 },
    { rank: 3, name: "Mike Johnson", score: 270 },
    { rank: 4, name: "Emily Brown", score: 260 },
    { rank: 5, name: "Alex Turner", score: 255 },
    { rank: 6, name: "Grace Taylor", score: 250 },
    { rank: 7, name: "Chris Evans", score: 245 },
    { rank: 8, name: "Olivia Parker", score: 240 },
    { rank: 9, name: "Samuel White", score: 235 },
    { rank: 10, name: "Lily Carter", score: 230 },
  ];

  return (
    <div className="leaderboard-container">
      <h1>Round 1 Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((participant, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{participant.rank}</td>
              <td>{participant.name}</td>
              <td>{participant.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
