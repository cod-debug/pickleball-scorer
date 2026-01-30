const WhoScoredButtons = ({ teamNames, onScore }) => (
    <div className="text-center my-4">
        <p className="font-bold mb-2">Who Scored?</p>
        <div className="flex gap-4">
            {teamNames.map((team, index) => (
                <button
                    key={`score-button-${index}`}
                    onClick={() => onScore(index)}
                    className="flex-grow bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded"
                >
                    {team}
                </button>
            ))}
        </div>
    </div>
);

export default WhoScoredButtons;