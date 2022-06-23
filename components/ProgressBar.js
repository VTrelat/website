import React from "react";

const ProgressBar = ({ progress }) => {
    const progressBar = {
        width: `${progress}%`,
    };
    return (
        <div className="progressbar">
            <div className="progressbar-background">
                <div className="progressbar-fill" style={progressBar} />
            </div>
        </div>
    );
};

export default ProgressBar;
