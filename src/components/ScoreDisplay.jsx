import React from "react";

const ScoreDisplay = ({ score, onUpdateScore }) => (
    <div className="text-center my-4">
        <div className="text-green-500 text-4xl text-wide font-bold pb-4">
            SCORE:{" "}
        </div>
        <div className="text-[32pt] font-bold md:text-[32pt] flex gap-4 justify-center items-center">
            {score.map((value, index) => (
                <React.Fragment key={`score-${index}`}>
                    {index > 0 && <span>-</span>}
                    <input
                        value={value}
                        onChange={(e) => onUpdateScore(e, index)}
                        className={`w-[60pt] md:w-[64pt] text-center ${
                            index !== 1 ? "border border-green-500 text-green-500" : ""
                        } rounded`}
                    />
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default ScoreDisplay;