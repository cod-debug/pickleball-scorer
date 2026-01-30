import ScoreDisplay  from "./ScoreDisplay";
import WhoScoredButtons from "./WhoScoredButtons";

const Scoreboard = ({
    server,
    teamNames,
    score,
    onUpdateScore,
    onScore,
}) => (
    <div id="scoreboard">
        <p className="text-center text-lg text-green-500">
            Serving: <strong>{teamNames[server]}</strong>
        </p>
        <ScoreDisplay score={score} onUpdateScore={onUpdateScore} />
        <WhoScoredButtons teamNames={teamNames} onScore={onScore} />
    </div>
);

export default Scoreboard;