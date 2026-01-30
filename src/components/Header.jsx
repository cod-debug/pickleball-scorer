const Header = ({ hasStarted, onReset }) => (
    <div className="py-2 px-4 bg-green-700 flex justify-between">
        <div className="flex gap-4 items-center">
            <img
                src="./pickleball.webp"
                alt="pickleball"
                className="w-10"
            />
            <h1 className="text-2xl md:text-4xl font-bold text-white">
                Pickleball Scoreboard
            </h1>
        </div>
        {hasStarted && (
            <button
                onClick={onReset}
                className="bg-green-800 rounded text-white px-4 py-2 hover:bg-green-600 hidden md:block"
            >
                Reset Game
            </button>
        )}
    </div>
);

export default Header;