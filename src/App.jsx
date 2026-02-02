import "./App.css";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import TeamNameInput from "./components/TeamNameInput";
import ServerSelection from "./components/ServerSelection";
import Scoreboard from "./components/Scoreboard";

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
    const [teamNames, setTeamNames] = useState(defaultValues.teamNames);

    const updateScore = useCallback(
        (scoredTeam) => {
            setScore((prevScore) => {
                if (server === scoredTeam) {
                    return [prevScore[0] + 1, prevScore[1], prevScore[2]];
                } else if (prevScore[2] === 2) {
                    setServer((prev) => (prev === 0 ? 1 : 0));
                    return [prevScore[1], prevScore[0], 1];
                } else {
                    return [prevScore[0], prevScore[1], prevScore[2] + 1];
                }
            });
        },
        [server],
    );

    const updateTeamName = useCallback((event, index) => {
        setTeamNames((prev) => {
            const newValues = [...prev];
            newValues[index] = event.target.value;
            return newValues;
        });
    }, []);

    const updateScoreManually = useCallback((event, index) => {
        setScore((prev) => {
            const newValues = [...prev];
            newValues[index] = Number.parseInt(event.target.value) || 0;
            return newValues;
        });
    }, []);

    const resetGame = useCallback(() => {
        setScore(defaultValues.score);
        setServer(defaultValues.server);
        setTeamNames(defaultValues.teamNames);
    }, []);

    return (
        <main className="text-gray-700">
            <Header hasStarted={server !== null} onReset={resetGame} />
            <TeamNameInput
                teamNames={teamNames}
                server={server}
                onUpdateTeamName={updateTeamName}
            />
            <div className="bg-white">
                <div className="w-[720px] mx-auto max-w-full p-4">
                    {server === null ? (
                        <ServerSelection
                            teamNames={teamNames}
                            onSelectServer={setServer}
                        />
                    ) : (
                        <Scoreboard
                            server={server}
                            teamNames={teamNames}
                            score={score}
                            onUpdateScore={updateScoreManually}
                            onScore={updateScore}
                        />
                    )}
                </div>
            </div>
            {server !== null && (
                <div className="m-4 block md:hidden mb-12">
                    <button
                        onClick={resetGame}
                        className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded mx-auto block"
                    >
                        Reset Game
                    </button>
                </div>
            )}
        </main>
    );
}

export default App;
