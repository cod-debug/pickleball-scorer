const ServerSelection = ({ teamNames, onSelectServer }) => (
    <div id="chooseServer" className="text-center">
        <p>Who Serves First?</p>
        <div className="flex gap-4 justify-center my-4">
            {teamNames.map((team, index) => (
                <button
                    key={`server-${index}`}
                    onClick={() => onSelectServer(index)}
                    className="bg-green-600 font-bold tracking-wider rounded text-white px-4 py-2 hover:bg-green-700"
                >
                    {team}
                </button>
            ))}
        </div>
    </div>
);

export default ServerSelection