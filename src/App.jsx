import { useState } from "react";
import "./App.css";

const defaultValues = {
    score: [0, 0, 2],
    server: null,
    players: [
        ["Player 1", "Player 2"],
        ["Player 3", "Player 4"],
    ],
    teamNames: ["Team 1", "Team 2"],
};

function App() {
    const [score, setScore] = useState(defaultValues.score);
    const [server, setServer] = useState(defaultValues.server);
    const [players, setPlayers] = useState(defaultValues.players);
    const [teamNames, setTeamNames] = useState(defaultValues.teamNames);

    const updateScore = (scoredTeam) => {
        if (server === scoredTeam) {
            setScore([score[0] + 1, score[1], score[2]]);
        } else {
            if (score[2] === 2) {
                changeService();
            } else {
                setScore([score[0], score[1], score[2] + 1]);
            }
        }
    };

    const changeService = () => {
        setServer(server === 0 ? 1 : 0);
        setScore([score[1], score[0], 1]);
    };

    const updateTeamName = (event, index) => {
        const updatedValue = event.target.value;
        setTeamNames((prevValue) => {
            const newValues = [...prevValue];
            newValues[index] = updatedValue;
            return newValues;
        });
    };

    const resetGame = () => {
        setScore(defaultValues.score);
        setServer(defaultValues.server);
        setPlayers(defaultValues.players);
        setTeamNames(defaultValues.teamNames);
    };

    return (
        <main>
            <div className="py-2 px-4 bg-green-700 flex justify-between">
                <div className="flex gap-4 items-center">
                    <img
                        src="./pickleball.webp"
                        alt="pickleball.webp"
                        className="w-10"
                    />
                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                        Pickleball Scoreboard
                    </h1>
                </div>
                {server !== null && (
                    <button
                        onClick={resetGame}
                        className="bg-green-800 rounded text-white px-4 py-2 hover:bg-green-600 hidden md:block"
                    >
                        Reset Game
                    </button>
                )}
            </div>
            <div className="text-center p-4">
                <p>Team Names:</p>
                <div className="flex flex-col gap-2 justify-center md:flex-row">
                    <input
                        value={teamNames[0]}
                        onChange={(event) => updateTeamName(event, 0)}
                        className={`border p-2 rounded ${server === 0 ? "bg-green-600 text-white" : ""}`}
                    />
                    <input
                        value={teamNames[1]}
                        onChange={(event) => updateTeamName(event, 1)}
                        className={`border p-2 rounded ${server === 1 ? "bg-green-600 text-white" : ""}`}
                    />
                </div>
            </div>
            <div className="bg-white">
                <div className="w-[720px] mx-auto max-w-full p-4">
                    {server === null && (
                        <div id="chooseServer" className="text-center">
                            <p>Who Serves First?</p>
                            <div className="flex gap-4 justify-center my-4">
                                {teamNames.map((team, key) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                setServer(key);
                                            }}
                                            className="bg-green-600 font-bold tracking-wider rounded text-white px-4 py-2 hover:bg-green-700"
                                            key={`server-${team}-${key}`}
                                        >
                                            {team}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {server !== null && (
                        <div id="scoreboard">
                            <p className="text-center text-lg text-green-500">
                                <strong>Serving:</strong> {teamNames[server]}
                            </p>
                            <div className="text-center my-4">
                                <div className="text-green-500 text-4xl text-wide font-bold pb-4">
                                    SCORE:{" "}
                                </div>
                                <div className="text-[32pt] font-bold md:text-[32pt] flex gap-4 justify-center items-center">
                                    <input
                                        value={score[0]}
                                        className="w-[60pt] md:w-[64pt] text-center border border-green-500 text-green-500 rounded"
                                    />
                                    <span>-</span>
                                    <input
                                        value={score[1]}
                                        className="w-[60pt] md:w-[64pt] text-center"
                                    />
                                    <span>-</span>
                                    <input
                                        value={score[2]}
                                        className="w-[60pt] md:w-[64pt] text-center border border-green-500 text-green-500 rounded"
                                    />
                                </div>
                            </div>
                            <div className="text-center my-4">
                                <p className="font-bold mb-2">Who Scored?</p>
                                <div className="flex gap-4">
                                    {teamNames.map((team, key) => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    updateScore(key);
                                                }}
                                                className="flex-grow bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded"
                                                key={`${team}-${key}`}
                                            >
                                                {team}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
                
            <div className="m-4 block md:hidden">
              <button onClick={resetGame} className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded">Reset Game</button>
            </div>
        </main>
    );
}

export default App;
