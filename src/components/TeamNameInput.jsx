const TeamNameInput = ({ teamNames, server, onUpdateTeamName }) => (
    <div className="text-center p-4">
        <p>Team Names:</p>
        <div className="flex flex-col gap-2 justify-center md:flex-row">
            {teamNames.map((name, index) => (
                <input
                    key={`team-name-${index}`}
                    value={name}
                    onChange={(e) => onUpdateTeamName(e, index)}
                    className={`border p-2 rounded ${server === index ? "bg-green-600 text-white" : ""}`}
                />
            ))}
        </div>
    </div>
);

export default TeamNameInput;