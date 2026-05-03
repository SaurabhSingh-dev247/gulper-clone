type player = { id: string; name: string; score: number; }

const activePlayers: Array<player> = [
    { id: crypto.randomUUID(), name: 'Saurabh Singh', score: 243 },
    { id: crypto.randomUUID(), name: 'Ayush Singh', score: 243 },
    { id: crypto.randomUUID(), name: 'Virat Singh', score: 243 },
    { id: crypto.randomUUID(), name: 'Gaurav Singh', score: 243 },
    { id: crypto.randomUUID(), name: 'Praveen maurya', score: 243 },
    { id: crypto.randomUUID(), name: 'Sagar Singh', score: 243 },
    { id: crypto.randomUUID(), name: 'Shiva Singh', score: 243 }
]

export default function LeaderBoard() {
    return (
        <ol className="leaderboard">
            {activePlayers.map((player: player, index) => (
                <li key={player.id}>
                    <div>
                        <span>{player.name}:</span>
                        <span>{player.score}</span>
                    </div>

                </li>
            ))}
        </ol>
    )
}
